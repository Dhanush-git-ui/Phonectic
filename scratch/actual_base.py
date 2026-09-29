import subprocess, time, json, urllib.request, asyncio, websockets, base64

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome, "--headless=new", "--remote-debugging-port=9239", "--remote-allow-origins=*",
    "--window-size=1536,900", "http://localhost:5173"
])
time.sleep(2)
try:
    tabs = json.loads(urllib.request.urlopen("http://localhost:9239/json").read())
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
            # Scroll first, THEN apply base transforms!
            await evaluate("""(() => {
                const section = document.querySelector('.framer-1gx9988');
                const darkBox = section.querySelector('.framer-gnrgmb');
                darkBox.scrollIntoView({ block: 'center' });
            })()""")
            await asyncio.sleep(0.5)
            await evaluate("""(() => {
                const section = document.querySelector('.framer-1gx9988');
                const configs = [
                    { sel: '.framer-1j99ufo', base: 'translate(-50%, -50%) translateX(53px) translateY(131px) rotate(-5deg)', zIndex: 1 },
                    { sel: '.framer-6idmd8', base: 'translate(-50%, -50%) translateX(142px) translateY(-43px) rotate(-7deg)', zIndex: 2 },
                    { sel: '.framer-18hgfpp', base: 'translate(-50%, -50%) translateX(240px) translateY(-106px) rotate(6deg)', zIndex: 3 },
                    { sel: '.framer-1q8094n', base: 'translate(-50%, -50%) translateX(-265px) translateY(53px) rotate(9deg)', zIndex: 2 },
                    { sel: '.framer-1k18mro', base: 'translate(-50%, -50%) translateX(-62px) translateY(-40px) rotate(-16deg)', zIndex: 3 }
                ];
                configs.forEach(c => {
                    const el = section.querySelector(c.sel);
                    if (el) {
                        el.style.transform = c.base;
                        el.style.opacity = '1';
                        if (c.zIndex) el.style.zIndex = c.zIndex;
                    }
                });
            })()""")
            await asyncio.sleep(0.2)
            await screenshot("scratch/actual_base_cluster.png")

    asyncio.run(run())
finally:
    proc.terminate()
