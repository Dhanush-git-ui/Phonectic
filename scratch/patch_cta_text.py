import sys
sys.stdout.reconfigure(encoding='utf-8')

path = 'src/components/CTASection.jsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Normalize to LF
content_lf = content.replace('\r\n', '\n')

old_block = (
    "\t\t\t// \u2500\u2500 Scroll-linked parallax: phone rising \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n"
    "\t\t\tconst phone = section.querySelector('.framer-9evzuh')\n"
    "\t\t\tconst logo = section.querySelector('.framer-1u7j4fm')\n"
    "\n"
    "\t\t\tlet rafPending = false\n"
    "\t\t\tconst handleScroll = () => {\n"
    "\t\t\t\tif (rafPending) return\n"
    "\t\t\t\trafPending = true\n"
    "\t\t\t\trequestAnimationFrame(() => {\n"
    "\t\t\t\t\tconst rect = section.getBoundingClientRect()\n"
    "\t\t\t\t\tconst winH = window.innerHeight\n"
    "\t\t\t\t\tif (rect.top < winH + 200 && rect.bottom > 0) {\n"
    "\t\t\t\t\t\tconst progress = Math.min(Math.max((winH - rect.top) / (winH + rect.height * 0.6), 0), 1)\n"
    "\t\t\t\t\t\t// Phone slides up as section scrolls into view\n"
    "\t\t\t\t\t\tif (phone) {\n"
    "\t\t\t\t\t\t\tconst lift = (1 - progress) * 60\n"
    "\t\t\t\t\t\t\tphone.style.transform = `translate(-50%, -50%) translateY(${168 - lift}px)`\n"
    "\t\t\t\t\t\t}\n"
    "\t\t\t\t\t\t// Logo floats slightly opposite\n"
    "\t\t\t\t\t\tif (logo) {\n"
    "\t\t\t\t\t\t\tconst drift = (progress - 0.5) * 20\n"
    "\t\t\t\t\t\t\tlogo.style.transform = `translate(-50%, -50%) translateY(${drift}px)`\n"
    "\t\t\t\t\t\t}\n"
    "\t\t\t\t\t}\n"
    "\t\t\t\t\trafPending = false\n"
    "\t\t\t\t})\n"
    "\t\t\t}"
)

print("Old block found:", old_block in content_lf)

new_block = (
    "\t\t\t// \u2500\u2500 Scroll-linked parallax: phone rising + text slide-in \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n"
    "\t\t\tconst phone = section.querySelector('.framer-9evzuh')\n"
    "\t\t\tconst logo = section.querySelector('.framer-1u7j4fm')\n"
    "\t\t\tconst topText = section.querySelector('.framer-l5zhei')\n"
    "\t\t\tconst midText = section.querySelector('.framer-1ge4eqe')\n"
    "\t\t\tconst botText = section.querySelector('.framer-1cc3myi')\n"
    "\n"
    "\t\t\t// Starting X offsets matching Framer's inline styles\n"
    "\t\t\tconst textOffsets = [\n"
    "\t\t\t\t{ el: topText, startX: -314 },\n"
    "\t\t\t\t{ el: midText, startX:  520 },\n"
    "\t\t\t\t{ el: botText, startX: -491 },\n"
    "\t\t\t]\n"
    "\n"
    "\t\t\tlet rafPending = false\n"
    "\t\t\tconst handleScroll = () => {\n"
    "\t\t\t\tif (rafPending) return\n"
    "\t\t\t\trafPending = true\n"
    "\t\t\t\trequestAnimationFrame(() => {\n"
    "\t\t\t\t\tconst rect = section.getBoundingClientRect()\n"
    "\t\t\t\t\tconst winH = window.innerHeight\n"
    "\t\t\t\t\tif (rect.top < winH + 200 && rect.bottom > 0) {\n"
    "\t\t\t\t\t\tconst progress = Math.min(Math.max((winH - rect.top) / (winH + rect.height * 0.6), 0), 1)\n"
    "\t\t\t\t\t\tconst eased = 1 - Math.pow(1 - progress, 2)\n"
    "\t\t\t\t\t\t// Phone slides up as section scrolls into view\n"
    "\t\t\t\t\t\tif (phone) {\n"
    "\t\t\t\t\t\t\tconst lift = (1 - progress) * 60\n"
    "\t\t\t\t\t\t\tphone.style.transform = `translate(-50%, -50%) translateY(${168 - lift}px)`\n"
    "\t\t\t\t\t\t}\n"
    "\t\t\t\t\t\t// Logo floats slightly opposite\n"
    "\t\t\t\t\t\tif (logo) {\n"
    "\t\t\t\t\t\t\tconst drift = (progress - 0.5) * 20\n"
    "\t\t\t\t\t\t\tlogo.style.transform = `translate(-50%, -50%) translateY(${drift}px)`\n"
    "\t\t\t\t\t\t}\n"
    "\t\t\t\t\t\t// Text words slide from offset to center as section enters viewport\n"
    "\t\t\t\t\t\ttextOffsets.forEach(({ el, startX }) => {\n"
    "\t\t\t\t\t\t\tif (!el) return\n"
    "\t\t\t\t\t\t\tconst currentX = startX * (1 - eased)\n"
    "\t\t\t\t\t\t\tel.style.transform = `translateX(${currentX}px)`\n"
    "\t\t\t\t\t\t\tel.style.transition = 'transform 0.06s linear'\n"
    "\t\t\t\t\t\t})\n"
    "\t\t\t\t\t}\n"
    "\t\t\t\t\trafPending = false\n"
    "\t\t\t\t})\n"
    "\t\t\t}"
)

if old_block in content_lf:
    updated = content_lf.replace(old_block, new_block, 1)
    updated_crlf = updated.replace('\n', '\r\n')
    with open(path, 'w', encoding='utf-8') as f:
        f.write(updated_crlf)
    print("SUCCESS: CTASection.jsx patched!")
else:
    print("ERROR: block not found in file")
