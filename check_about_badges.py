with open('src/components/About.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'1f3sf0s', text)]
for idx in matches[:1]:
    print('Parent context:', text[max(0, idx-200):idx+50])
