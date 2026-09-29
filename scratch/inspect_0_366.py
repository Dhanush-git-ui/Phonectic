import json

path = r'C:\Users\dhanu\.gemini\antigravity-ide\brain\81a3920f-e80a-4994-a704-c3c9476814a1\.system_generated\logs\transcript.jsonl'

with open(path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if 0 <= i < 366:
            d = json.loads(line)
            t = d.get('type')
            if t == 'USER_INPUT':
                print(f"Line {i} USER_INPUT: {d.get('content')}")
            elif t == 'PLANNER_RESPONSE':
                for tc in d.get('tool_calls', []):
                    name = tc.get('name')
                    if name in ('replace_file_content', 'multi_replace_file_content', 'write_to_file'):
                        args = tc.get('args', {})
                        target = args.get('TargetFile')
                        desc = args.get('Description', '')
                        print(f"Line {i} {name}: {target} -> {desc}")
