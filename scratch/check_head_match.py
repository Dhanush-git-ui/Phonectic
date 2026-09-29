with open('scratch/target_488_full_untruncated.css', 'r', encoding='utf-8') as f:
    target = f.read()

import subprocess
res = subprocess.run(['git', 'show', 'HEAD:src/index.css'], capture_output=True, text=True)
head = res.stdout

# Let's search for snippets from target in head
lines = [l.strip() for l in target.splitlines() if len(l.strip()) > 20 and not l.strip().startswith('/*')]
matches = 0
for l in lines[:10]:
    if l in head:
        matches += 1
print(f"Matched {matches} of 10 lines in HEAD")
