import sys
sys.stdout.reconfigure(encoding='utf-8')

path = 'src/utils/scrollAnimations.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content_lf = content.replace('\r\n', '\n')
lines = content_lf.split('\n')

# Find the testimonial block start and end
start_i = None
end_i = None
for i, line in enumerate(lines):
    if '// \u2500\u2500 Testimonial Card Scroll Parallax \u2500\u2500' in line:
        start_i = i
    if start_i and i > start_i:
        # End of the outer if block
        if line.strip() == '}' and line.startswith('\t\t\t}') and not line.startswith('\t\t\t\t'):
            end_i = i
            break

print(f"Testimonial block: lines {start_i}-{end_i}")
if start_i and end_i:
    for i in range(start_i, end_i+1):
        print(f"{i+1}: {repr(lines[i][:80])}")
