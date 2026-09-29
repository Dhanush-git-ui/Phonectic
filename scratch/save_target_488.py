import json

path = r'C:\Users\dhanu\.gemini\antigravity-ide\brain\81a3920f-e80a-4994-a704-c3c9476814a1\.system_generated\logs\transcript.jsonl'
with open(path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if i == 488:
            d = json.loads(line)
            tc = d['tool_calls'][0]
            args = tc['args']
            with open('scratch/target_488_full.css', 'w', encoding='utf-8') as out:
                out.write(args.get('TargetContent', ''))
            print("Wrote scratch/target_488_full.css, length:", len(args.get('TargetContent', '')))
