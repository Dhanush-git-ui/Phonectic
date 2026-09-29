import subprocess, time, json, urllib.request, asyncio, websockets, base64, os

async def main():
    proc = subprocess.Popen([
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9333',
        '--user-data-dir=C:\\Users\\dhanu\\OneDrive\\Desktop\\The Grand Finale\\scratch\\chrome_profile',
        '--disable-gpu',
        '--window-size=1920,950',
        'http://localhost:5173/'
    ])
    try:
        await asyncio.sleep(2)
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

            await send('Page.enable')
            await send('Runtime.enable')
            await asyncio.sleep(2)
            
            # Inspect elements
            eval_res = await send('Runtime.evaluate', {
                'expression': """
                (() => {
                    const section = document.querySelector('.framer-83IYI.framer-1huufdb');
                    const ticker = document.querySelector('.framer-1h23ioo');
                    const capsule = document.querySelector('.framer-16c4gkf');
                    const cards = document.querySelector('.framer-11aqw1k');
                    const ul = document.querySelector('.framer-1u2twl6-container ul');
                    
                    const cs = (el) => el ? {
                        position: getComputedStyle(el).position,
                        top: getComputedStyle(el).top,
                        height: getComputedStyle(el).height,
                        zIndex: getComputedStyle(el).zIndex,
                        display: getComputedStyle(el).display,
                        overflow: getComputedStyle(el).overflow,
                    } : null;
                    
                    const rect = (el) => el ? {
                        top: el.getBoundingClientRect().top + window.scrollY,
                        height: el.getBoundingClientRect().height,
                        width: el.getBoundingClientRect().width,
                    } : null;

                    return {
                        sectionRect: rect(section),
                        sectionCS: cs(section),
                        tickerCS: cs(ticker),
                        capsuleCS: cs(capsule),
                        cardsCS: cs(cards),
                        ulWidth: ul ? ul.getBoundingClientRect().width : null,
                        ulAnimation: ul ? getComputedStyle(ul).animation : null,
                    };
                })()
                """,
                'returnByValue': True
            })
            print('INSPECTION RESULT:', json.dumps(eval_res, indent=2))
            
            section_top = eval_res['result']['value']['sectionRect']['top']
            print(f'Section starts at scrollY = {section_top}')
            
            os.makedirs('scratch/cdp_shots', exist_ok=True)
            for i, offset in enumerate([0, 400, 1000, 1600, 2200, 2800]):
                scroll_y = section_top + offset - 200
                await send('Runtime.evaluate', {'expression': f'window.scrollTo(0, {scroll_y})'})
                await asyncio.sleep(0.5)
                shot = await send('Page.captureScreenshot', {'format': 'jpeg', 'quality': 70})
                img_data = base64.b64decode(shot['result']['data'])
                with open(f'scratch/cdp_shots/shot_{i:02d}_offset_{offset}.jpg', 'wb') as f:
                    f.write(img_data)
                print(f'Captured shot_{i:02d} at scrollY={scroll_y}')

    finally:
        proc.terminate()

asyncio.run(main())
