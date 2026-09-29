import json

path = r'C:\Users\dhanu\.gemini\antigravity-ide\brain\81a3920f-e80a-4994-a704-c3c9476814a1\.system_generated\logs\transcript.jsonl'
with open(path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if i in (269, 488):
            d = json.loads(line)
            for tc in d.get('tool_calls', []):
                print(f"--- Line {i} ({tc.get('name')}) ---")
                args = tc.get('args', {})
                print("Instruction:", args.get('Instruction'))
                print("Description:", args.get('Description'))
                if tc.get('name') == 'replace_file_content':
                    print("StartLine:", args.get('StartLine'), "EndLine:", args.get('EndLine'))
                    print("ReplacementContent snippet:\n", args.get('ReplacementContent')[:300])
