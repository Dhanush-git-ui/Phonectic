import subprocess, time, json, urllib.request, asyncio, websockets, base64

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome, "--headless=new", "--remote-debugging-port=9237", "--remote-allow-origins=*",
    "--window-size=1536,900", "http://localhost:5173"
])
time.sleep(2)
try:
    tabs = json.loads(urllib.request.urlopen("http://localhost:9237/json").read())
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
            # Test direct styling at eased = 1
            await evaluate("""(() => {
                const configs = [
                    { sel: '.framer-1j99ufo', base: 'translate(-50%, -50%) translateX(53px) translateY(131px) rotate(-5deg)', dx: -70, dy: -190, dr: 5 },
                    { sel: '.framer-6idmd8', base: 'translate(-50%, -50%) translateX(142px) translateY(-43px) rotate(-7deg)', dx: -190, dy: 85, dr: 7 },
                    { sel: '.framer-18hgfpp', base: 'translate(-50%, -50%) translateX(240px) translateY(-106px) rotate(6deg)', dx: -200, dy: 160, dr: -6 },
                    { sel: '.framer-1q8094n', base: 'translate(-50%, -50%) translateX(-265px) translateY(53px) rotate(9deg)', dx: 310, dy: -45, dr: -9 },
                    { sel: '.framer-1k18mro', base: 'translate(-50%, -50%) translateX(-62px) translateY(-40px) rotate(-16deg)', dx: 300, dy: 75, dr: 16 }
                ];
                configs.forEach(c => {
                    const el = document.querySelector(c.sel);
                    if (el) {
                        el.style.transform = `${c.base} translateX(${c.dx}px) translateY(${c.dy}px) rotate(${c.dr}deg)`;
                        el.style.opacity = '1';
                    }
                });
                const el = document.querySelector('.framer-1gx9988');
                if (el) {
                    window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY + 100);
                }
            })()""")
            await asyncio.sleep(0.5)
            await screenshot("scratch/test_spread_preview.png")

    asyncio.run(run())
finally:
    proc.terminate()
