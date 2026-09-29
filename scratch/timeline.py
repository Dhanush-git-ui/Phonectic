import json

path = r'C:\Users\dhanu\.gemini\antigravity-ide\brain\81a3920f-e80a-4994-a704-c3c9476814a1\.system_generated\logs\transcript.jsonl'

current_prompt = ""
events = []

with open(path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        try:
            d = json.loads(line)
            t = d.get('type')
            if t == 'USER_INPUT':
                current_prompt = d.get('content', '')
                events.append(('PROMPT', i, d.get('step_index'), current_prompt[:100]))
            elif t == 'PLANNER_RESPONSE':
                for tc in d.get('tool_calls', []):
                    name = tc.get('name')
                    if name in ('replace_file_content', 'multi_replace_file_content', 'write_to_file'):
                        args = tc.get('args', {})
                        target = args.get('TargetFile')
                        desc = args.get('Description', '')
                        events.append(('FILE_EDIT', i, d.get('step_index'), target, desc, name))
        except:
            pass

for ev in events:
    if ev[0] == 'PROMPT':
        print(f"\n=== PROMPT (Line {ev[1]} Step {ev[2]}) ===\n{ev[3].strip()}")
    else:
        print(f"  EDIT (Line {ev[1]} Step {ev[2]}): {ev[3]} | {ev[4]}")
