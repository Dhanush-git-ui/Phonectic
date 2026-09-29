import subprocess, time, json, urllib.request, asyncio, websockets

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome, "--headless=new", "--remote-debugging-port=9234", "--remote-allow-origins=*",
    "--window-size=1536,900", "http://localhost:5173"
])
time.sleep(2)
try:
    tabs = json.loads(urllib.request.urlopen("http://localhost:9234/json").read())
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
            print("t_top:", t_top)

            # Scroll to t_top - 200, t_top, t_top + 200
            for offset in [-200, 0, 200, 400]:
                await evaluate(f"window.scrollTo(0, {t_top + offset});")
                await asyncio.sleep(0.3)
                data = await evaluate("""(() => {
                    const s = document.querySelector('.framer-1gx9988');
                    const r = s.getBoundingClientRect();
                    const winH = window.innerHeight;
                    const raw = (winH * 0.75 - r.top) / (winH * 0.65);
                    const card = s.querySelector('.framer-18hgfpp');
                    return {
                        scrollY: window.scrollY,
                        top: r.top,
                        bottom: r.bottom,
                        winH,
                        raw,
                        cardTransform: card ? card.style.transform : null
                    };
                })()""")
                print(f"Offset {offset}:", json.dumps(data, indent=2))

    asyncio.run(run())
finally:
    proc.terminate()
