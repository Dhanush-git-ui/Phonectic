import subprocess, time, json, urllib.request, asyncio, websockets, base64, os

async def check():
    proc = subprocess.Popen([
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9333',
        '--user-data-dir=C:\\Users\\dhanu\\OneDrive\\Desktop\\The Grand Finale\\scratch\\chrome_profile_2',
        '--disable-gpu',
        '--window-size=1920,950',
        'http://localhost:5173/'
    ])
    try:
        await asyncio.sleep(3)
        with urllib.request.urlopen('http://localhost:9333/json') as r:
            targets = json.loads(r.read())
        target = [t for t in targets if t.get('type') == 'page'][0]
        ws_url = target['webSocketDebuggerUrl']
        async with websockets.connect(ws_url) as ws:
            msg_id = 0
            async def send(method, params=None):
                nonlocal msg_id
                msg_id += 1
                payload = {'id': msg_id, 'method': method, 'params': params or {}}
                await ws.send(json.dumps(payload))
                while True:
                    resp = json.loads(await ws.recv())
                    if resp.get('id') == msg_id:
                        return resp
            
            # Wait for content
            for _ in range(10):
                res = await send('Runtime.evaluate', {'expression': 'document.querySelectorAll(".framer-83IYI").length', 'returnByValue': True})
                val = res['result'].get('result', {}).get('value', 0)
                if val > 0:
                    print('Found .framer-83IYI count:', val)
                    break
                await asyncio.sleep(1)
            
            # Check querySelector
            res = await send('Runtime.evaluate', {
                'expression': '''(() => {
                    const el = document.querySelector(".framer-83IYI");
                    const ticker = document.querySelector(".framer-1h23ioo");
                    const capsule = document.querySelector(".framer-16c4gkf");
                    const cards = document.querySelector(".framer-11aqw1k");
                    const c1 = document.querySelector(".framer-1g1up0j-container");
                    const c2 = document.querySelector(".framer-4nwo3y-container");
                    const c3 = document.querySelector(".framer-13w1hln-container");
                    const ul = document.querySelector(".framer-1u2twl6-container ul");

                    const cs = (e) => e ? {
                        position: getComputedStyle(e).position,
                        top: getComputedStyle(e).top,
                        height: getComputedStyle(e).height,
                        zIndex: getComputedStyle(e).zIndex,
                        display: getComputedStyle(e).display,
                        transform: getComputedStyle(e).transform,
                    } : null;

                    return {
                        sectionCS: cs(el),
                        tickerCS: cs(ticker),
                        capsuleCS: cs(capsule),
                        cardsCS: cs(cards),
                        c1CS: cs(c1),
                        c2CS: cs(c2),
                        c3CS: cs(c3),
                        sectionRect: el ? el.getBoundingClientRect() : null,
                        sectionPageTop: el ? el.getBoundingClientRect().top + window.scrollY : null,
                        ulWidth: ul ? ul.getBoundingClientRect().width : null,
                    };
                })()''',
                'returnByValue': True
            })
            val = res['result']['result']['value']
            print('Query result:', json.dumps(val, indent=2))

            section_page_top = val['sectionPageTop']
            print('Section page top:', section_page_top)

            os.makedirs('scratch/test_shots', exist_ok=True)
            # Take screenshots at various scroll offsets through the section
            # Offsets: 0, 500, 1000, 1500, 2000, 2500, 3000
            for i, offset in enumerate([0, 500, 1000, 1500, 2000, 2500, 3000, 3500]):
                target_y = section_page_top + offset
                await send('Runtime.evaluate', {'expression': f'window.scrollTo(0, {target_y})'})
                await asyncio.sleep(0.5)
                shot = await send('Page.captureScreenshot', {'format': 'jpeg', 'quality': 75})
                img_data = base64.b64decode(shot['result']['data'])
                fname = f'scratch/test_shots/shot_{i:02d}_y{int(target_y)}.jpg'
                with open(fname, 'wb') as f:
                    f.write(img_data)
                print(f'Saved {fname}')

    finally:
        proc.terminate()

asyncio.run(check())
