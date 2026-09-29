import json

path = r'C:\Users\dhanu\.gemini\antigravity-ide\brain\81a3920f-e80a-4994-a704-c3c9476814a1\.system_generated\logs\transcript.jsonl'
with open(path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        try:
            d = json.loads(line)
            if d.get('type') == 'USER_INPUT':
                content = d.get('content', '')
                print(f"Line {i} Step {d.get('step_index')}: {content[:150]}")
        except Exception as e:
            pass
