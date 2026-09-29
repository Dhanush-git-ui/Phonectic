import subprocess, time, json, urllib.request, asyncio, websockets

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome, "--headless=new", "--remote-debugging-port=9236", "--remote-allow-origins=*",
    "--window-size=1536,900", "http://localhost:5173"
])
time.sleep(2)
try:
    tabs = json.loads(urllib.request.urlopen("http://localhost:9236/json").read())
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

            await asyncio.sleep(1)
            info = await evaluate("""(() => {
                const section = document.querySelector('.framer-1gx9988');
                const darkBox = section.querySelector('.framer-gnrgmb');
                const boxRect = darkBox.getBoundingClientRect();
                const header = section.querySelector('.framer-1l3ci9b').getBoundingClientRect();
                
                const cards = [
                    '.framer-1j99ufo', // Dark card (Vikram Patel)
                    '.framer-6idmd8',  // Blue 5-star (Rahul Sharma)
                    '.framer-18hgfpp', // Light quote (Rahul Sharma)
                    '.framer-1q8094n', // Dark-blue 5-star (Ananya Reddy)
                    '.framer-1k18mro'  // White 5-star (Ananya Reddy)
                ].map(sel => {
                    const el = section.querySelector(sel);
                    const r = el.getBoundingClientRect();
                    return {
                        sel,
                        rect: { x: r.x - boxRect.x, y: r.y - boxRect.y, width: r.width, height: r.height },
                        transform: el.style.transform
                    };
                });
                return {
                    boxRect: { width: boxRect.width, height: boxRect.height },
                    header: { x: header.x - boxRect.x, y: header.y - boxRect.y, width: header.width, height: header.height },
                    cards
                };
            })()""")
            print(json.dumps(info, indent=2))

    asyncio.run(run())
finally:
    proc.terminate()
