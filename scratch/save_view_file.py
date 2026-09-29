import json

path = r'C:\Users\dhanu\.gemini\antigravity-ide\brain\81a3920f-e80a-4994-a704-c3c9476814a1\.system_generated\logs\transcript_full.jsonl'
with open(path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if i in (485, 487):
            d = json.loads(line)
            content = d.get('content', '')
            with open(f'scratch/view_file_{i}.txt', 'w', encoding='utf-8') as out:
                out.write(content)
            print(f"Saved scratch/view_file_{i}.txt, length: {len(content)}")
