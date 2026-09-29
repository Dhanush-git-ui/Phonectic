import sys
sys.stdout.reconfigure(encoding='utf-8')

path = 'src/components/CTASection.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content_lf = content.replace('\r\n', '\n')
lines = content_lf.split('\n')

# Find the 'const run = () => {' line and the section query
# We need to inject overflow:visible right after 'const section = document.getElementById(cta)'
start_i = None
for i, line in enumerate(lines):
    if "const section = document.getElementById('cta')" in line:
        start_i = i
        break

print(f"Found 'const section' at line {start_i+1}: {repr(lines[start_i][:80])}")
# Check next few lines
for i in range(start_i, start_i+6):
    print(f"{i+1}: {repr(lines[i][:100])}")
