import subprocess, time, json, urllib.request, asyncio, websockets

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome, "--headless=new", "--remote-debugging-port=9226", "--remote-allow-origins=*",
    "--window-size=1536,900", "http://localhost:5173"
])
time.sleep(2)
try:
    tabs = json.loads(urllib.request.urlopen("http://localhost:9226/json").read())
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
            t_pos = await evaluate("""(() => {
                const el = document.querySelector('.framer-1nvuwej-container');
                return el ? el.getBoundingClientRect().top + window.scrollY : 0;
            })()""")
            await evaluate(f"window.scrollTo(0, {t_pos + 100}); window.dispatchEvent(new Event('scroll'));")
            await asyncio.sleep(0.3)

            cards = await evaluate("""(() => {
                const sels = ['.framer-18hgfpp', '.framer-6idmd8', '.framer-1j99ufo', '.framer-1q8094n', '.framer-1k18mro'];
                return sels.map(s => {
                    const el = document.querySelector(s);
                    return { sel: s, found: !!el, styleTransform: el ? el.style.transform : null };
                });
            })()""")
            print("Cards debug:", json.dumps(cards, indent=2))
    asyncio.run(run())
finally:
    proc.terminate()
