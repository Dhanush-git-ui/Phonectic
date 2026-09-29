import subprocess, time, json, urllib.request, asyncio, websockets, base64

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome, "--headless=new", "--remote-debugging-port=9242", "--remote-allow-origins=*",
    "--window-size=1520,722", "http://localhost:5173"
])
time.sleep(2)
try:
    tabs = json.loads(urllib.request.urlopen("http://localhost:9242/json").read())
    ws_url = next(t for t in tabs if t.get("type") == "page")["webSocketDebuggerUrl"]

    async def run():
        async with websockets.connect(ws_url) as ws:
            msg_id = 0
            async def evaluate(expr):
                nonlocal msg_id
                msg_id += 1
                await ws.send(json.dumps({"id": msg_id, "method": "Runtime.evaluate", "params": {"expression": expr, "returnByValue": True}}))
                res = json.loads(await ws.recv())
                return res.get("result", {}).get("result", {}).get("value")

            async def screenshot(filename):
                nonlocal msg_id
                msg_id += 1
                await ws.send(json.dumps({"id": msg_id, "method": "Page.captureScreenshot", "params": {"format": "png"}}))
                res = json.loads(await ws.recv())
                data = base64.b64decode(res["result"]["data"])
                with open(filename, "wb") as f:
                    f.write(data)
                print(f"Saved {filename}")

            await asyncio.sleep(1)

            # Scroll to where Testimonials track ends and Pricing begins (the user's screenshot position)
            track_info = await evaluate("""(() => {
                const track = document.querySelector('.testimonials-scroll-track');
                const pricing = document.querySelector('.framer-13e87qe');
                const dark = document.querySelector('.framer-gnrgmb');
                const card3 = document.querySelector('.framer-18hgfpp');
                const rTrack = track.getBoundingClientRect();
                const rPricing = pricing.getBoundingClientRect();
                const rDark = dark.getBoundingClientRect();
                const rCard3 = card3.getBoundingClientRect();
                return {
                    trackTop: rTrack.top + window.scrollY,
                    trackHeight: rTrack.height,
                    pricingTop: rPricing.top + window.scrollY,
                    darkHeight: rDark.height,
                    card3Bottom: rCard3.bottom,
                    darkBottom: rDark.bottom
                };
            })()""")
            print("Layout info on 1520x722:", json.dumps(track_info, indent=2))

            # Scroll to end of track where user was looking
            await evaluate(f"window.scrollTo(0, {track_info['trackTop'] + track_info['trackHeight'] - 722});")
            await asyncio.sleep(0.5)
            await screenshot("scratch/check_overlap_current.png")

    asyncio.run(run())
finally:
    proc.terminate()
