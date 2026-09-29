import json

path = r'C:\Users\dhanu\.gemini\antigravity-ide\brain\81a3920f-e80a-4994-a704-c3c9476814a1\.system_generated\logs\transcript.jsonl'
with open(path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if 390 <= i <= 420:
            d = json.loads(line)
            if d.get('type') == 'PLANNER_RESPONSE':
                for tc in d.get('tool_calls', []):
                    if tc.get('name') in ('replace_file_content', 'multi_replace_file_content'):
                        print(f"Line {i} tool {tc.get('name')}: TargetFile={tc.get('args', {}).get('TargetFile')}")
                        print("  Instruction:", tc.get('args', {}).get('Instruction'))
                        print("  Description:", tc.get('args', {}).get('Description'))
