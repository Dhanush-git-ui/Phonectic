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
            t_top = await evaluate("""(() => {
                const el = document.querySelector('.framer-1gx9988');
                return el ? el.getBoundingClientRect().top + window.scrollY : 0;
            })()""")

            await evaluate(f"window.scrollTo(0, {t_top + 100});")
            await asyncio.sleep(0.5)

            cards = await evaluate("""(() => {
                const els = document.querySelectorAll('.framer-1xg6l8k > div');
                return Array.from(els).map(el => ({
                    cls: el.className,
                    transform: el.style.transform,
                    computedTransform: window.getComputedStyle(el).transform,
                    computedLeft: window.getComputedStyle(el).left,
                    computedTop: window.getComputedStyle(el).top
                }));
            })()""")
            print("Cards actual computed:", json.dumps(cards, indent=2))

    asyncio.run(run())
finally:
    proc.terminate()
