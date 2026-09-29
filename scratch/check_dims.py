import subprocess, time, json, urllib.request, asyncio, websockets

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome, "--headless=new", "--remote-debugging-port=9241", "--remote-allow-origins=*",
    "--window-size=1536,900", "http://localhost:5173"
])
time.sleep(2)
try:
    tabs = json.loads(urllib.request.urlopen("http://localhost:9241/json").read())
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
                const track = document.querySelector('.testimonials-scroll-track');
                const sec = document.querySelector('.framer-1gx9988');
                const ssr = sec ? sec.querySelector('.ssr-variant') : null;
                const cont = sec ? sec.querySelector('.framer-1nvuwej-container') : null;
                const i1p = sec ? sec.querySelector('.framer-i1pQu') : null;
                const dark = sec ? sec.querySelector('.framer-gnrgmb') : null;

                const getB = el => el ? el.getBoundingClientRect() : null;
                return {
                    track: getB(track),
                    sec: getB(sec),
                    ssr: getB(ssr),
                    cont: getB(cont),
                    i1p: getB(i1p),
                    dark: getB(dark)
                };
            })()""")
            print(json.dumps(info, indent=2))

    asyncio.run(run())
finally:
    proc.terminate()
