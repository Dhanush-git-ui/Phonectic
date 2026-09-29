import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/components/CTASection.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
for i, line in enumerate(lines[75:108], 76):
    print(f'{i}: {repr(line[:100])}')
