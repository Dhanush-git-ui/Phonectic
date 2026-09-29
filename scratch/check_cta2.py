import sys
sys.stdout.reconfigure(encoding='utf-8')

path = 'src/components/CTASection.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content_lf = content.replace('\r\n', '\n')
lines = content_lf.split('\n')

# Print line 77 as hex
line77 = lines[76]  # 0-indexed
print("Line 77 hex:", line77.encode('utf-8').hex())
print("Line 77:", repr(line77[:60]))

# Try to find the block by a unique substring
needle = "Scroll-linked parallax: phone rising"
idx = content_lf.find(needle)
print("Needle found at:", idx)
if idx >= 0:
    print("Context:", repr(content_lf[idx-5:idx+80]))
