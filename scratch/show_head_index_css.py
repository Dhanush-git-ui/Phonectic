import subprocess

res = subprocess.run(['git', 'show', 'HEAD:src/index.css'], capture_output=True, text=True)
lines = res.stdout.splitlines()
print(f"Total lines in HEAD index.css: {len(lines)}")
for i, l in enumerate(lines[700:850], start=701):
    print(f"{i}: {l}")
