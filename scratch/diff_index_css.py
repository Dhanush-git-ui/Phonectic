import subprocess

res = subprocess.run(['git', 'diff', 'src/index.css'], capture_output=True, text=True)
diff_lines = res.stdout.splitlines()
print(f"Total diff lines: {len(diff_lines)}")
for line in diff_lines:
    if line.startswith('@@'):
        print(line)
