import json

path = r'C:\Users\dhanu\.gemini\antigravity-ide\brain\81a3920f-e80a-4994-a704-c3c9476814a1\.system_generated\logs\transcript.jsonl'

# Track edits per file: line, step, tool_name, desc
file_edits = {}

with open(path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        try:
            d = json.loads(line)
            if d.get('type') == 'PLANNER_RESPONSE':
                for tc in d.get('tool_calls', []):
                    if tc.get('name') in ('replace_file_content', 'multi_replace_file_content', 'write_to_file'):
                        args = tc.get('args', {})
                        tf = args.get('TargetFile', '').replace('\\', '/').lower()
                        if 'grand finale/src/' in tf:
                            norm = tf[tf.find('src/'):]
                            file_edits.setdefault(norm, []).append((i, d.get('step_index'), tc.get('name'), args.get('Description', '')))
        except:
            pass

for f, edits in sorted(file_edits.items()):
    print(f"\nFILE: {f} (total {len(edits)} edits)")
    for e in edits:
        marker = ""
        if e[0] < 366:
            marker = "[PROMPT 1: Headings]"
        elif 366 <= e[0] <= 415:
            marker = "[DELETE BLOG]"
        else:
            marker = "[AFTER DELETE BLOG]"
        print(f"  Line {e[0]} Step {e[1]} {marker}: {e[3]}")
