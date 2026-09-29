import sys
sys.stdout.reconfigure(encoding='utf-8')

path = 'src/components/CTASection.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content_lf = content.replace('\r\n', '\n')
lines = content_lf.split('\n')

# After line 10 ('if (!section) return'), inject JS overflow fix
# line index 10 = "if (!section) return"
# Insert after line index 10

inject_lines = [
    "",
    "\t\t\t// Force overflow visible on all CTA wrappers so giant text isn't clipped",
    "\t\t\t;[",
    "\t\t\t\tsection.querySelector('section'),",
    "\t\t\t\tsection.querySelector('.framer-1e0pwqt'),",
    "\t\t\t\tsection.querySelector('.framer-1fgev8h'),",
    "\t\t\t\tsection.querySelector('.framer-1ffnixg'),",
    "\t\t\t\tsection.querySelector('.framer-mo4q0l'),",
    "\t\t\t].forEach((el) => {",
    "\t\t\t\tif (el) el.style.setProperty('overflow', 'visible', 'important')",
    "\t\t\t})",
    "",
    "\t\t\t// Fix text container: widen and add gap",
    "\t\t\tconst textWrap = section.querySelector('.framer-mo4q0l')",
    "\t\t\tif (textWrap) {",
    "\t\t\t\ttextWrap.style.setProperty('width', 'max-content', 'important')",
    "\t\t\t\ttextWrap.style.setProperty('gap', '10px', 'important')",
    "\t\t\t}",
    "\t\t\t;['.framer-l5zhei', '.framer-1ge4eqe', '.framer-1cc3myi'].forEach((sel) => {",
    "\t\t\t\tconst el = section.querySelector(sel)",
    "\t\t\t\tif (!el) return",
    "\t\t\t\tel.style.setProperty('overflow', 'visible', 'important')",
    "\t\t\t\tel.style.setProperty('width', 'max-content', 'important')",
    "\t\t\t\tconst h1 = el.querySelector('h1')",
    "\t\t\t\tif (h1) {",
    "\t\t\t\t\th1.style.setProperty('white-space', 'nowrap', 'important')",
    "\t\t\t\t\th1.style.setProperty('overflow', 'visible', 'important')",
    "\t\t\t\t\th1.style.setProperty('font-size', 'clamp(64px, 8.5vw, 128px)', 'important')",
    "\t\t\t\t\th1.style.setProperty('line-height', '1', 'important')",
    "\t\t\t\t\th1.style.setProperty('letter-spacing', '-0.05em', 'important')",
    "\t\t\t\t\th1.style.setProperty('margin', '0', 'important')",
    "\t\t\t\t}",
    "\t\t\t})",
]

# Insert after line index 10 (the 'if (!section) return' line)
insert_after = 10
updated_lines = lines[:insert_after+1] + inject_lines + lines[insert_after+1:]
updated = '\n'.join(updated_lines)
updated_crlf = updated.replace('\n', '\r\n')

with open(path, 'w', encoding='utf-8') as f:
    f.write(updated_crlf)

print(f"SUCCESS: Injected overflow fix at line {insert_after+1}. Total lines: {len(updated_lines)}")
