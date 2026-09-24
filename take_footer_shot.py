import subprocess
import time
import json
import urllib.request
import base64
import os
import asyncio
import websockets

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome,
    "--headless=new",
    "--remote-debugging-port=9223",
    "--remote-allow-origins=*",
    "--window-size=1536,900",
    "http://localhost:5173"
])

time.sleep(2)
try:
    tabs = json.loads(urllib.request.urlopen("http://localhost:9223/json").read())
    page_tab = next(t for t in tabs if t.get("type") == "page")
    ws_url = page_tab["webSocketDebuggerUrl"]

    async def capture():
        async with websockets.connect(ws_url) as ws:
            # Scroll to footer
            msg = {
                "id": 1,
                "method": "Runtime.evaluate",
                "params": {"expression": "window.scrollTo(0, document.body.scrollHeight); 'scrolled'"}
            }
            await ws.send(json.dumps(msg))
            await ws.recv()
            await asyncio.sleep(1.5)

            # Screenshot
            msg = {
                "id": 2,
                "method": "Page.captureScreenshot",
                "params": {"format": "png"}
            }
            await ws.send(json.dumps(msg))
            res = json.loads(await ws.recv())
            data = base64.b64decode(res["result"]["data"])
            with open("footer_browser_live.png", "wb") as f:
                f.write(data)
            print("Successfully saved footer_browser_live.png!")

    asyncio.run(capture())
except Exception as e:
    print("CDP error:", e)
finally:
    proc.terminate()
