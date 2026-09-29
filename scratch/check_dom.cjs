async function check() {
  const versionRes = await fetch('http://127.0.0.1:9222/json/list');
  const pages = await versionRes.json();
  const page = pages.find(p => p.url.includes('localhost:5173'));
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

  const res = await send('Runtime.evaluate', {
    expression: 'Array.from(document.querySelectorAll("section, [class*=\'marquee\'], [data-framer-name]")).map(el => ({ tag: el.tagName, id: el.id, class: el.className.slice(0, 50), framerName: el.getAttribute("data-framer-name") }))',
    returnByValue: true
  });
  console.log(res.result.value.slice(0, 30));
  ws.close();
}
check();
