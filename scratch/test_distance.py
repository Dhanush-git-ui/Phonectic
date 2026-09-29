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
    "--remote-debugging-port=9252",
    "--remote-allow-origins=*",
    "--window-size=1520,722",
    "http://localhost:5173"
])

tabs = None
for _ in range(10):
    try:
        tabs = json.loads(urllib.request.urlopen("http://localhost:9252/json").read())
        break
    except Exception:
        time.sleep(1)

if not tabs:
    raise RuntimeError("Could not connect to Chrome on port 9226")

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

            await asyncio.sleep(1.5)

            # Check positions
            info = await evaluate("""(() => {
                const track = document.querySelector('.testimonials-scroll-track');
                const sticky = document.querySelector('.testimonials-sticky-container');
                const darkBox = document.querySelector('.testimonials-sticky-container .framer-gnrgmb');
                const pricing = document.querySelector('.framer-13e87qe');
                const card3 = document.querySelector('.framer-18hgfpp');
                
                return {
                    track: track ? { top: track.getBoundingClientRect().top + window.scrollY, height: track.getBoundingClientRect().height } : null,
                    pricing: pricing ? { top: pricing.getBoundingClientRect().top + window.scrollY, height: pricing.getBoundingClientRect().height } : null,
                    windowH: window.innerHeight,
                    darkBoxHeight: darkBox ? darkBox.getBoundingClientRect().height : null,
                };
            })()""")
            print("Layout info:", json.dumps(info, indent=2))

            if info and info['track']:
                track_top = info['track']['top']
                track_h = info['track']['height']
                
                # Test at 0% scroll of track (cluster)
                await evaluate(f"window.scrollTo(0, {track_top})")
                await asyncio.sleep(0.3)
                await screenshot("scratch/test_scroll_start.png")

                # Test at 50% scroll of track (spreading)
                await evaluate(f"window.scrollTo(0, {track_top + 440})")
                await asyncio.sleep(0.3)
                await screenshot("scratch/test_scroll_mid.png")

                # Test at 95% of pinned track (full spread while pinned)
                await evaluate(f"window.scrollTo(0, {track_top + 830})")
                await asyncio.sleep(0.3)
                await screenshot("scratch/test_scroll_end.png")

                # Test at unpin transition
                await evaluate(f"window.scrollTo(0, {track_top + 950})")
                await asyncio.sleep(0.3)
                await screenshot("scratch/test_scroll_transition.png")

                # Test pricing section in view
                await evaluate(f"window.scrollTo(0, {track_top + 1300})")
                await asyncio.sleep(0.3)
                await screenshot("scratch/test_scroll_pricing.png")

    asyncio.run(run())
except Exception as e:
    print("Error:", e)
finally:
    proc.terminate()
