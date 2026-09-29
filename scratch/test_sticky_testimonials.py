import subprocess, time, json, urllib.request, asyncio, websockets, base64

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome, "--headless=new", "--remote-debugging-port=9240", "--remote-allow-origins=*",
    "--window-size=1536,900", "http://localhost:5173"
])
time.sleep(2)
try:
    tabs = json.loads(urllib.request.urlopen("http://localhost:9240/json").read())
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

            # Get track top and height
            track_info = await evaluate("""(() => {
                const track = document.querySelector('.testimonials-scroll-track');
                if (!track) return null;
                const r = track.getBoundingClientRect();
                return {
                    top: r.top + window.scrollY,
                    height: r.height,
                    winH: window.innerHeight
                };
            })()""")
            print("Track info:", track_info)

            track_top = track_info["top"]
            scrollable = track_info["height"] - track_info["winH"]

            # 1. Test at track start (progress = 0) -> SHOULD BE INITIAL CLUSTER!
            await evaluate(f"window.scrollTo(0, {track_top});")
            await asyncio.sleep(0.5)
            await screenshot("scratch/sticky_stage1_initial_cluster.png")

            # 2. Test at 30% scroll -> CARDS MOVING OUTWARD!
            await evaluate(f"window.scrollTo(0, {track_top + scrollable * 0.3});")
            await asyncio.sleep(0.5)
            await screenshot("scratch/sticky_stage2_moving.png")

            # 3. Test at 65% scroll -> CARDS FULLY SPREAD FRAMING TEXT!
            await evaluate(f"window.scrollTo(0, {track_top + scrollable * 0.65});")
            await asyncio.sleep(0.5)
            await screenshot("scratch/sticky_stage3_spread.png")

    asyncio.run(run())
finally:
    proc.terminate()
