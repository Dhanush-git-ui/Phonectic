import sys
sys.stdout.reconfigure(encoding='utf-8')

path = 'src/components/CTASection.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content_lf = content.replace('\r\n', '\n')
lines = content_lf.split('\n')

# Lines 77-103 (0-indexed 76-102) is the block to replace
# Find exact start: line containing "Scroll-linked parallax: phone rising"
start_i = None
end_i = None
for i, line in enumerate(lines):
    if 'Scroll-linked parallax: phone rising' in line:
        start_i = i
    if start_i and i > start_i and line.strip() == '}' and end_i is None:
        # The closing } of handleScroll function (3 tabs in)
        if line.startswith('\t\t\t}') and not line.startswith('\t\t\t\t'):
            end_i = i
            break

print(f"start_i={start_i}, end_i={end_i}")
print("Start line:", repr(lines[start_i]))
print("End line:", repr(lines[end_i]))

new_lines = [
    "\t\t\t// \u2500\u2500 Scroll-linked parallax: phone rising + text slide-in \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",
    "\t\t\tconst phone = section.querySelector('.framer-9evzuh')",
    "\t\t\tconst logo = section.querySelector('.framer-1u7j4fm')",
    "\t\t\tconst topText = section.querySelector('.framer-l5zhei')",
    "\t\t\tconst midText = section.querySelector('.framer-1ge4eqe')",
    "\t\t\tconst botText = section.querySelector('.framer-1cc3myi')",
    "",
    "\t\t\t// Starting X offsets matching Framer's inline styles",
    "\t\t\tconst textOffsets = [",
    "\t\t\t\t{ el: topText, startX: -314 },",
    "\t\t\t\t{ el: midText, startX:  520 },",
    "\t\t\t\t{ el: botText, startX: -491 },",
    "\t\t\t]",
    "",
    "\t\t\tlet rafPending = false",
    "\t\t\tconst handleScroll = () => {",
    "\t\t\t\tif (rafPending) return",
    "\t\t\t\trafPending = true",
    "\t\t\t\trequestAnimationFrame(() => {",
    "\t\t\t\t\tconst rect = section.getBoundingClientRect()",
    "\t\t\t\t\tconst winH = window.innerHeight",
    "\t\t\t\t\tif (rect.top < winH + 200 && rect.bottom > 0) {",
    "\t\t\t\t\t\tconst progress = Math.min(Math.max((winH - rect.top) / (winH + rect.height * 0.6), 0), 1)",
    "\t\t\t\t\t\tconst eased = 1 - Math.pow(1 - progress, 2)",
    "\t\t\t\t\t\t// Phone slides up as section scrolls into view",
    "\t\t\t\t\t\tif (phone) {",
    "\t\t\t\t\t\t\tconst lift = (1 - progress) * 60",
    "\t\t\t\t\t\t\tphone.style.transform = `translate(-50%, -50%) translateY(${168 - lift}px)`",
    "\t\t\t\t\t\t}",
    "\t\t\t\t\t\t// Logo floats slightly opposite",
    "\t\t\t\t\t\tif (logo) {",
    "\t\t\t\t\t\t\tconst drift = (progress - 0.5) * 20",
    "\t\t\t\t\t\t\tlogo.style.transform = `translate(-50%, -50%) translateY(${drift}px)`",
    "\t\t\t\t\t\t}",
    "\t\t\t\t\t\t// Text words slide from offset to center as section enters viewport",
    "\t\t\t\t\t\ttextOffsets.forEach(({ el, startX }) => {",
    "\t\t\t\t\t\t\tif (!el) return",
    "\t\t\t\t\t\t\tconst currentX = startX * (1 - eased)",
    "\t\t\t\t\t\t\tel.style.transform = `translateX(${currentX}px)`",
    "\t\t\t\t\t\t\tel.style.transition = 'transform 0.06s linear'",
    "\t\t\t\t\t\t})",
    "\t\t\t\t\t}",
    "\t\t\t\t\trafPending = false",
    "\t\t\t\t})",
    "\t\t\t}",
]

# Replace lines start_i through end_i (inclusive)
updated_lines = lines[:start_i] + new_lines + lines[end_i+1:]
updated = '\n'.join(updated_lines)
updated_crlf = updated.replace('\n', '\r\n')

with open(path, 'w', encoding='utf-8') as f:
    f.write(updated_crlf)

print(f"SUCCESS: Replaced lines {start_i}-{end_i} with {len(new_lines)} new lines")
