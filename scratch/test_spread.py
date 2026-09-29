import subprocess, time, json, urllib.request, asyncio, websockets, base64

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome, "--headless=new", "--remote-debugging-port=9229", "--remote-allow-origins=*",
    "--window-size=1536,900", "http://localhost:5173"
])
time.sleep(2)
try:
    tabs = json.loads(urllib.request.urlopen("http://localhost:9229/json").read())
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
            t_pos = await evaluate("""(() => {
                const el = document.querySelector('.framer-1nvuwej-container');
                return el ? el.getBoundingClientRect().top + window.scrollY : 0;
            })()""")

            # Scroll and explicitly trigger scroll handler
            await evaluate(f"""(() => {{
                window.scrollTo(0, {t_pos + 100});
                window.dispatchEvent(new Event('scroll'));
            }})()""")
            await asyncio.sleep(0.5)

            # Check transforms now
            transforms = await evaluate("""(() => {
                const cards = document.querySelectorAll('.framer-1xg6l8k > div');
                return Array.from(cards).map(c => ({
                    className: c.className,
                    transform: c.style.transform
                }));
            })()""")
            print("Transforms after scroll:", json.dumps(transforms, indent=2))
            await screenshot("scratch/testim_fully_spread.png")

    asyncio.run(run())
finally:
    proc.terminate()
