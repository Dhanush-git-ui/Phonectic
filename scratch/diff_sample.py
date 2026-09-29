import subprocess

res = subprocess.run(['git', 'diff', 'src/index.css'], capture_output=True, text=True)
diff_lines = res.stdout.splitlines()

# Print lines added/removed with context
for i, line in enumerate(diff_lines[:150]):
    print(line)
