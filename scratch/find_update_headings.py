import json

path = r'C:\Users\dhanu\.gemini\antigravity-ide\brain\81a3920f-e80a-4994-a704-c3c9476814a1\.system_generated\logs\transcript.jsonl'
with open(path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if 320 <= i <= 360:
            d = json.loads(line)
            if 'update_headings' in json.dumps(d):
                print(f"Line {i}: {d.get('type')}")
                if d.get('type') == 'PLANNER_RESPONSE':
                    for tc in d.get('tool_calls', []):
                        if tc.get('name') == 'write_to_file':
                            print(tc['args'].get('CodeContent'))
