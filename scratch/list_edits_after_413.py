import json

path = r'C:\Users\dhanu\.gemini\antigravity-ide\brain\81a3920f-e80a-4994-a704-c3c9476814a1\.system_generated\logs\transcript_full.jsonl'

with open(path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if i > 413:
            d = json.loads(line)
            if d.get('type') == 'PLANNER_RESPONSE':
                for tc in d.get('tool_calls', []):
                    name = tc.get('name')
                    if name in ('replace_file_content', 'multi_replace_file_content'):
                        args = tc.get('args', {})
                        tf = args.get('TargetFile', '')
                        desc = args.get('Description', '')
                        print(f"Line {i} Step {d.get('step_index')}: {name} on {tf} -> {desc}")
