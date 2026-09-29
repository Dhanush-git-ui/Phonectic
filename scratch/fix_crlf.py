import sys
sys.stdout.reconfigure(encoding='utf-8')

for path in ['src/components/CTASection.jsx', 'src/utils/scrollAnimations.js']:
    with open(path, 'rb') as f:
        c = f.read()
    fixed = c.replace(b'\r\r\n', b'\r\n')
    with open(path, 'wb') as f:
        f.write(fixed)
    print(f'Fixed {path}: {len(fixed)} bytes')
