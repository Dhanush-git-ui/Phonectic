import json

path = r'C:\Users\dhanu\.gemini\antigravity-ide\brain\81a3920f-e80a-4994-a704-c3c9476814a1\.system_generated\logs\transcript.jsonl'
with open(path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if 360 <= i <= 685:
            try:
                d = json.loads(line)
                t = d.get('type')
                if t in ('USER_INPUT', 'PLANNER_RESPONSE'):
                    calls = [c.get('name') for c in d.get('tool_calls', [])]
                    print(f"Line {i} Step {d.get('step_index')}: {t} {calls}")
                    if t == 'USER_INPUT':
                        print("  CONTENT:", d.get('content'))
            except:
                pass
