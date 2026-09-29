const fs = require('fs');

async function snap() {
  const versionRes = await fetch('http://127.0.0.1:9222/json/list');
  const pages = await versionRes.json();
  const page = pages.find(p => p.url.includes('localhost:5173'));
  if (!page) {
    console.log('No localhost:5173 page');
    return;
  }
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  let id = 1;
  const send = (method, params) => new Promise(res => {
    const msgId = id++;
    const handler = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === msgId) {
        ws.removeEventListener('message', handler);
        res(msg);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  // Scroll to marquee section
  await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.querySelector('.marquee-stats-block') || document.querySelector('.framer-83IYI');
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'center' });
      }
    })()`
  });

  await new Promise(r => setTimeout(r, 600));

  const screenshot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/current_marquee.png', Buffer.from(screenshot.result.data, 'base64'));
  console.log('Captured scratch/current_marquee.png');
  ws.close();
}

snap();
