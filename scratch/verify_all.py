import subprocess, time, json, urllib.request, asyncio, websockets, base64

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome, "--headless=new", "--remote-debugging-port=9232", "--remote-allow-origins=*",
    "--window-size=1536,900", "http://localhost:5173"
])
time.sleep(2)
try:
    tabs = json.loads(urllib.request.urlopen("http://localhost:9232/json").read())
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

            await asyncio.sleep(1.5)

            # 1. Testimonials
            t_top = await evaluate("""(() => {
                const el = document.querySelector('.framer-1gx9988');
                return el ? el.getBoundingClientRect().top + window.scrollY : 0;
            })()""")
            print("Testimonials top:", t_top)

            # Scroll so testimonials is centered
            await evaluate(f"window.scrollTo(0, {t_top + 100});")
            await asyncio.sleep(0.5)
            await screenshot("scratch/verified_testimonials_centered.png")

            # 2. CTA Section
            cta_top = await evaluate("""(() => {
                const el = document.getElementById('cta');
                return el ? el.getBoundingClientRect().top + window.scrollY : 0;
            })()""")
            print("CTA top:", cta_top)

            # Scroll into CTA pin track:
            # First 500px: text is sliding into place
            await evaluate(f"window.scrollTo(0, {cta_top + 400});")
            await asyncio.sleep(0.5)
            await screenshot("scratch/verified_cta_sliding.png")

            # At 800px into pin: text animation is 100% COMPLETED and holding, still pinned!
            await evaluate(f"window.scrollTo(0, {cta_top + 800});")
            await asyncio.sleep(0.5)
            await screenshot("scratch/verified_cta_completed_holding.png")

            # At end of pin: scrolling down to footer
            await evaluate(f"window.scrollTo(0, {cta_top + 1400});")
            await asyncio.sleep(0.5)
            await screenshot("scratch/verified_cta_to_footer.png")

    asyncio.run(run())
finally:
    proc.terminate()
