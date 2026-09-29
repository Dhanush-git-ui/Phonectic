import sys
import difflib

with open('scratch/target_488_full_untruncated.css', 'r', encoding='utf-8') as f:
    target = f.read()

with open('scratch/replacement_488.css', 'r', encoding='utf-8') as f:
    repl = f.read()

print("Target line count:", len(target.splitlines()))
print("Replacement line count:", len(repl.splitlines()))

# Print last 30 lines of replacement_488
print("\nLast 30 lines of replacement_488.css:")
for line in repl.splitlines()[-30:]:
    print(line.encode('ascii', 'replace').decode('ascii'))
