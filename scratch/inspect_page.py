import subprocess
import time
import json
import urllib.request
import base64
import os
import asyncio
import websockets

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome,
    "--headless=new",
    "--remote-debugging-port=9224",
    "--remote-allow-origins=*",
    "--window-size=1536,900",
    "http://localhost:5173"
])

time.sleep(2)
try:
    tabs = json.loads(urllib.request.urlopen("http://localhost:9224/json").read())
    page_tab = next(t for t in tabs if t.get("type") == "page")
    ws_url = page_tab["webSocketDebuggerUrl"]

    async def run():
        async with websockets.connect(ws_url) as ws:
            # Helper to evaluate JS in browser
            msg_id = 0
            async def evaluate(expr):
                nonlocal msg_id
                msg_id += 1
                await ws.send(json.dumps({
                    "id": msg_id,
                    "method": "Runtime.evaluate",
                    "params": {"expression": expr, "returnByValue": True}
                }))
                res = json.loads(await ws.recv())
                return res.get("result", {}).get("result", {}).get("value")

            async def screenshot(filename):
                nonlocal msg_id
                msg_id += 1
                await ws.send(json.dumps({
                    "id": msg_id,
                    "method": "Page.captureScreenshot",
                    "params": {"format": "png"}
                }))
                res = json.loads(await ws.recv())
                data = base64.b64decode(res["result"]["data"])
                with open(filename, "wb") as f:
                    f.write(data)
                print(f"Saved {filename}")

            await asyncio.sleep(1)

            # Find Testimonials position and scroll to it
            t_pos = await evaluate("""(() => {
                const el = document.querySelector('.framer-1nvuwej-container');
                if (!el) return null;
                const rect = el.getBoundingClientRect();
                return { top: rect.top + window.scrollY, height: rect.height };
            })()""")
            print("Testimonials position:", t_pos)

            if t_pos:
                # Scroll to testimonials
                await evaluate(f"window.scrollTo(0, {t_pos['top'] - 100})")
                await asyncio.sleep(0.5)

                card_info = await evaluate("""(() => {
                    const cards = document.querySelectorAll('.framer-1xg6l8k > div');
                    return Array.from(cards).map(c => ({
                        className: c.className,
                        opacity: window.getComputedStyle(c).opacity,
                        transform: window.getComputedStyle(c).transform,
                        display: window.getComputedStyle(c).display,
                        visibility: window.getComputedStyle(c).visibility,
                        rect: c.getBoundingClientRect()
                    }));
                })()""")
                print("Cards info at scroll:", json.dumps(card_info, indent=2))
                await screenshot("scratch/current_testimonials.png")

            # Check CTA position
            cta_pos = await evaluate("""(() => {
                const el = document.getElementById('cta');
                if (!el) return null;
                const rect = el.getBoundingClientRect();
                return { top: rect.top + window.scrollY, height: rect.height };
            })()""")
            print("CTA position:", cta_pos)

            if cta_pos:
                await evaluate(f"window.scrollTo(0, {cta_pos['top']})")
                await asyncio.sleep(0.5)
                await screenshot("scratch/current_cta.png")

    asyncio.run(run())
except Exception as e:
    print("Error:", e)
finally:
    proc.terminate()
