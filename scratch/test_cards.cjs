async function test() {
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
    expression: 'Array.from(document.querySelectorAll("[data-framer-name=\'Number Cards\'], .framer-11aqw1k, .framer-83IYI, .framer-1g1up0j-container")).map(el => ({ tag: el.tagName, class: el.className, text: el.innerText.slice(0, 40), top: el.getBoundingClientRect().top + window.scrollY }))',
    returnByValue: true
  });
  console.log('Result:', res.result.result.value);
  ws.close();
}
test();
