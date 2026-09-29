import subprocess
import time
import json
import urllib.request
import base64
import asyncio
import websockets

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome,
    "--headless=new",
    "--remote-debugging-port=9238",
    "--remote-allow-origins=*",
    "--window-size=1520,722",
    "http://localhost:5173"
])

tabs = None
for _ in range(10):
    try:
        tabs = json.loads(urllib.request.urlopen("http://localhost:9238/json").read())
        break
    except Exception:
        time.sleep(1)

if not tabs:
    raise RuntimeError("Could not connect to Chrome")

try:
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

            # Scroll to testimonials
            t_top = await evaluate("document.querySelector('.testimonials-scroll-track').getBoundingClientRect().top + window.scrollY")
            await evaluate(f"window.scrollTo(0, {t_top + 400})")
            await asyncio.sleep(0.5)

            # Test natural positions with zero translation offset
            await evaluate("""(() => {
                const configs = [
                    { sel: '.framer-1j99ufo', rot: -5 },
                    { sel: '.framer-6idmd8', rot: -7 },
                    { sel: '.framer-18hgfpp', rot: 6 },
                    { sel: '.framer-1q8094n', rot: 9 },
                    { sel: '.framer-1k18mro', rot: -16 }
                ];
                configs.forEach(c => {
                    const el = document.querySelector(c.sel);
                    if (el) {
                        el.style.transform = `translate(-50%, -50%) rotate(${c.rot}deg)`;
                    }
                });
            })()""")
            await asyncio.sleep(0.5)
            await screenshot("scratch/natural_framer_positions.png")

            # Test different spread offsets in real-time
            res = await evaluate("""(() => {
                const dark = document.querySelector('.testimonials-sticky-container .framer-gnrgmb');
                const darkRect = dark.getBoundingClientRect();
                const cardSelectors = [
                    '.framer-1j99ufo', // Card 1 (dark, Vikram Patel)
                    '.framer-6idmd8',  // Card 2 (blue, Rahul Sharma)
                    '.framer-18hgfpp', // Card 3 (white, Rahul Sharma)
                    '.framer-1q8094n', // Card 4 (dark blue, Ananya Reddy)
                    '.framer-1k18mro'  // Card 5 (white, Ananya Reddy)
                ];
                
                const cards = cardSelectors.map(s => {
                    const el = document.querySelector(s);
                    const rect = el.getBoundingClientRect();
                    return {
                        sel: s,
                        rect: {
                            left: rect.left - darkRect.left,
                            top: rect.top - darkRect.top,
                            right: rect.right - darkRect.left,
                            bottom: rect.bottom - darkRect.top,
                            width: rect.width,
                            height: rect.height
                        }
                    };
                });
                
                const heading = document.querySelector('.testimonials-sticky-container .framer-1l3ci9b');
                const headRect = heading ? heading.getBoundingClientRect() : null;
                return {
                    dark: { width: darkRect.width, height: darkRect.height },
                    heading: headRect ? {
                        left: headRect.left - darkRect.left,
                        top: headRect.top - darkRect.top,
                        right: headRect.right - darkRect.left,
                        bottom: headRect.bottom - darkRect.top,
                        width: headRect.width,
                        height: headRect.height
                    } : null,
                    cards
                };
            })()""")
            print("Dark container and cards info:", json.dumps(res, indent=2))

    asyncio.run(run())
except Exception as e:
    print("Error:", e)
finally:
    proc.terminate()
