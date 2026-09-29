import subprocess, time, json, urllib.request, asyncio, websockets

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome, "--headless=new", "--remote-debugging-port=9233", "--remote-allow-origins=*",
    "--window-size=1536,900", "http://localhost:5173"
])
time.sleep(2)
try:
    tabs = json.loads(urllib.request.urlopen("http://localhost:9233/json").read())
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

            await asyncio.sleep(1.5)
            info = await evaluate("""(() => {
                const s = document.querySelector('.framer-1gx9988');
                if (!s) return 'no .framer-1gx9988';
                const rect = s.getBoundingClientRect();
                const cards = Array.from(s.querySelectorAll('.framer-18hgfpp, .framer-6idmd8, .framer-1j99ufo, .framer-1q8094n, .framer-1k18mro')).map(c => ({
                    cls: c.className,
                    transform: c.style.transform
                }));
                return { rect, cards };
            })()""")
            print("Info at 0 scroll:", json.dumps(info, indent=2))

            # Now scroll to testimonials
            t_pos = info['rect']['top'] + 0
            await evaluate(f"window.scrollTo(0, {t_pos});")
            await asyncio.sleep(0.3)
            info_scrolled = await evaluate("""(() => {
                const s = document.querySelector('.framer-1gx9988');
                const rect = s.getBoundingClientRect();
                const cards = Array.from(s.querySelectorAll('.framer-18hgfpp, .framer-6idmd8, .framer-1j99ufo, .framer-1q8094n, .framer-1k18mro')).map(c => ({
                    cls: c.className,
                    transform: c.style.transform
                }));
                return { rect, cards };
            })()""")
            print("Info at scrolled:", json.dumps(info_scrolled, indent=2))
    asyncio.run(run())
finally:
    proc.terminate()
