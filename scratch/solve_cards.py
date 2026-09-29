import subprocess
import time
import json
import urllib.request
import base64
import asyncio
import websockets

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([
    chrome,
    "--headless=new",
    "--remote-debugging-port=9248",
    "--remote-allow-origins=*",
    "--window-size=1520,722",
    "http://localhost:5173"
])

tabs = None
for _ in range(10):
    try:
        tabs = json.loads(urllib.request.urlopen("http://localhost:9248/json").read())
        break
    except Exception:
        time.sleep(1)

if not tabs:
    raise RuntimeError("Could not connect to Chrome")

try:
    page_tab = next(t for t in tabs if t.get("type") == "page")
    ws_url = page_tab["webSocketDebuggerUrl"]

    async def run():
        async with websockets.connect(ws_url) as ws:
            msg_id = 0
            async def evaluate(expr):
                nonlocal msg_id
                msg_id += 1
                await ws.send(json.dumps({
                    "id": msg_id,
                    "method": "Runtime.evaluate",
                    "params": {"expression": expr, "returnByValue": True}
                }))
                res = json.loads(await ws.recv())
                return res.get("result", {}).get("result", {}).get("value")

            async def screenshot(filename):
                nonlocal msg_id
                msg_id += 1
                await ws.send(json.dumps({
                    "id": msg_id,
                    "method": "Page.captureScreenshot",
                    "params": {"format": "png"}
                }))
                res = json.loads(await ws.recv())
                data = base64.b64decode(res["result"]["data"])
                with open(filename, "wb") as f:
                    f.write(data)
                print(f"Saved {filename}")

            t_top = await evaluate("document.querySelector('.testimonials-scroll-track').getBoundingClientRect().top + window.scrollY")
            await evaluate(f"window.scrollTo(0, {t_top + 400})")
            await asyncio.sleep(0.5)

            # Test target transforms directly
            # We want:
            # Card 1 (dark): top-left
            # Card 2 (blue): mid-left
            # Card 3 (white): bottom-left
            # Card 4 (dark blue): top-right
            # Card 5 (white): bottom-right
            #
            # Notice the default positions:
            # Card 1: top: 24%; left: 34%;
            # Card 2: top: 59%; left: 22%;
            # Card 3: top: 78%; left: 29%;
            # Card 4: top: 33%; left: 79%;
            # Card 5: top: 66%; left: 70%;
            #
            # Let's test custom translate(x, y) rotate(r) for each:
            # Test the exact positions from t_vid_frame_2:
            # Card 1 (.framer-1j99ufo, dark): Top center-left, above "TRUSTED", safely inside top border
            # Card 2 (.framer-6idmd8, blue): Mid-left, safely inside left border, above bottom
            # Card 3 (.framer-18hgfpp, white): Lower-left, safely inside bottom border, to the right of Card 2
            # Card 4 (.framer-1q8094n, dark blue): Upper-right, safely inside right and top borders
            # Card 5 (.framer-1k18mro, white): Lower-right, safely inside right and bottom borders
            
            test_configs = [
                # Card 1: Top, above heading, well inside top border
                {"sel": ".framer-1j99ufo", "t": "translate(-50%, -50%) scale(0.82) translateX(10px) translateY(75px) rotate(-4deg)"},
                # Card 2: Far mid-left, well inside left border
                {"sel": ".framer-6idmd8", "t": "translate(-50%, -50%) scale(0.82) translateX(-70px) translateY(-50px) rotate(-6deg)"},
                # Card 3: Lower-left, well inside bottom border, below Card 2
                {"sel": ".framer-18hgfpp", "t": "translate(-50%, -50%) scale(0.82) translateX(50px) translateY(-145px) rotate(4deg)"},
                # Card 4: Top-right, well inside top and right borders
                {"sel": ".framer-1q8094n", "t": "translate(-50%, -50%) scale(0.82) translateX(90px) translateY(35px) rotate(7deg)"},
                # Card 5: Bottom-right, well inside bottom and right borders
                {"sel": ".framer-1k18mro", "t": "translate(-50%, -50%) scale(0.82) translateX(150px) translateY(-120px) rotate(-8deg)"},
            ]

            await evaluate(f"""(() => {{
                const cfgs = {json.dumps(test_configs)};
                cfgs.forEach(c => {{
                    const el = document.querySelector(c.sel);
                    if (el) {{
                        el.style.transform = c.t;
                        el.style.transition = 'none';
                    }}
                }});
            }})()""")

            await asyncio.sleep(0.3)
            await screenshot("scratch/solve_test_1.png")

            # Check overlap and bounds
            check = await evaluate("""(() => {
                const dark = document.querySelector('.testimonials-sticky-container .framer-gnrgmb');
                const darkRect = dark.getBoundingClientRect();
                const sels = ['.framer-1j99ufo', '.framer-6idmd8', '.framer-18hgfpp', '.framer-1q8094n', '.framer-1k18mro'];
                const rects = sels.map(s => {
                    const el = document.querySelector(s);
                    const r = el.getBoundingClientRect();
                    return {
                        sel: s,
                        left: r.left - darkRect.left,
                        top: r.top - darkRect.top,
                        right: r.right - darkRect.left,
                        bottom: r.bottom - darkRect.top,
                        width: r.width,
                        height: r.height
                    };
                });

                // Check bounds within dark container
                const oob = rects.map(r => ({
                    sel: r.sel,
                    leavesLeft: r.left < 0,
                    leavesRight: r.right > darkRect.width,
                    leavesTop: r.top < 0,
                    leavesBottom: r.bottom > darkRect.height,
                    box: r
                }));

                // Check pairwise overlap
                const overlaps = [];
                for (let i = 0; i < rects.length; i++) {
                    for (let j = i + 1; j < rects.length; j++) {
                        const a = rects[i];
                        const b = rects[j];
                        const xOverlap = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
                        const yOverlap = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
                        if (xOverlap > 10 && yOverlap > 10) {
                            overlaps.push({ a: a.sel, b: b.sel, xOverlap, yOverlap });
                        }
                    }
                }

                return {
                    dark: { width: darkRect.width, height: darkRect.height },
                    oob,
                    overlaps
                };
            })()""")

            print("Analysis result:", json.dumps(check, indent=2))

    asyncio.run(run())
except Exception as e:
    print("Error:", e)
finally:
    proc.terminate()
