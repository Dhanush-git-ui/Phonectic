with open('src/index.css', 'r', encoding='utf-8') as f:
    current = f.read()

# Let's find what is right after the added block in index.css
# The added block ended with hero heading or darkfeatures or cta
# Let's search for what follows CTA section in index.css
import re
print("Length:", len(current))

# Let's see all section headers in index.css after line 700
matches = [m.start() for m in re.finditer(r'/\* =+ \*/|/\* ──+ \*/|/\* ===+', current)]
for m in matches:
    snippet = current[m:m+80].replace('\n', ' ')
    print(f"Pos {m}: {snippet.encode('ascii', 'replace').decode('ascii')}")
