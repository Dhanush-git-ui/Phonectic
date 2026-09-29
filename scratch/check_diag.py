import subprocess, time, json, urllib.request, asyncio, websockets

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome, "--headless=new", "--remote-debugging-port=9228", "--remote-allow-origins=*",
    "--window-size=1536,900", "http://localhost:5173"
])
time.sleep(2)
try:
    tabs = json.loads(urllib.request.urlopen("http://localhost:9228/json").read())
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

            # Run test
            diag = await evaluate(f"""(() => {{
                window.scrollTo(0, {t_pos + 50});
                const testimonialsWrap = document.querySelector('.framer-1nvuwej-container');
                const cardWrap = testimonialsWrap ? testimonialsWrap.querySelector('.framer-1xg6l8k') : null;
                const winHeight = window.innerHeight;
                const tRect = testimonialsWrap ? testimonialsWrap.getBoundingClientRect() : null;
                const raw = tRect ? (winHeight * 0.75 - tRect.top) / (winHeight * 0.65) : null;
                const progress = raw !== null ? Math.min(Math.max(raw, 0), 1) : null;
                const cards = cardWrap ? Array.from(cardWrap.querySelectorAll(':scope > div')).map(c => ({{
                    className: c.className,
                    transform: c.style.transform
                }})) : null;
                return {{
                    foundWrap: !!testimonialsWrap,
                    foundCardWrap: !!cardWrap,
                    winHeight,
                    tRectTop: tRect ? tRect.top : null,
                    raw,
                    progress,
                    cards
                }};
            }})()""")
            print("Diagnostic:", json.dumps(diag, indent=2))
    asyncio.run(run())
finally:
    proc.terminate()
