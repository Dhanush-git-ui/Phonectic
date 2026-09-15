import urllib.request
import re

req = urllib.request.Request(
    'https://onefin.framer.website/',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8')

elements = re.findall(r'<[^>]+data-framer-appear-id="([^"]+)"[^>]*>', html)
print('Appear elements:', len(elements))
for el in elements:
    print(' - Appear ID:', el)

# Let's inspect where data-framer-appear-id is defined or used in scripts
chunks = re.findall(r'https://framerusercontent\.com/sites/4Df8q4OoVz89TmpO4IJfLD/[^\s"\']+\.mjs', html)
for c in chunks:
    try:
        req_c = urllib.request.Request(c, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req_c) as r:
            code = r.read().decode('utf-8')
        if 'appear' in code or 'scroll' in code.lower() or 'whileInView' in code:
            print(f'Chunk {c.split("/")[-1]} has matches: appear={code.count("appear")}, scroll={code.lower().count("scroll")}, inView={code.count("InView")}')
    except Exception as e:
        pass
