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
    "--remote-debugging-port=9225",
    "--remote-allow-origins=*",
    "--window-size=1536,900",
    "http://localhost:5173"
])

time.sleep(2)
try:
    tabs = json.loads(urllib.request.urlopen("http://localhost:9225/json").read())
    page_tab = next(t for t in tabs if t.get("type") == "page")
    ws_url = page_tab["webSocketDebuggerUrl"]

    async def run():
        async with websockets.connect(ws_url) as ws:
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

            t_pos = await evaluate("""(() => {
                const el = document.querySelector('.framer-1nvuwej-container');
                if (!el) return null;
                const rect = el.getBoundingClientRect();
                return { top: rect.top + window.scrollY, height: rect.height };
            })()""")

            if t_pos:
                # 1. Entering
                await evaluate(f"window.scrollTo(0, {t_pos['top'] - 200}); window.dispatchEvent(new Event('scroll'));")
                await asyncio.sleep(0.4)
                await screenshot("scratch/testim_entering.png")

                # 2. Centered
                await evaluate(f"window.scrollTo(0, {t_pos['top'] + 50}); window.dispatchEvent(new Event('scroll'));")
                await asyncio.sleep(0.4)
                await screenshot("scratch/testim_centered.png")

    asyncio.run(run())
except Exception as e:
    print("Error:", e)
finally:
    proc.terminate()
