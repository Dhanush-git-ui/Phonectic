import re

path = 'src/utils/scrollAnimations.js'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Normalize to LF for processing
content_lf = content.replace('\r\n', '\n')

# The block to find and replace (lines 344-354 in the file, 0-indexed 343-353)
# We'll use regex to find the closing of updateScrollEffects
# Target: the generic parallax block + closing brace of updateScrollEffects
old_block = (
    "\t\t\t// Generic parallax elements\n"
    "\t\t\tdocument.querySelectorAll('[data-parallax-speed]').forEach((el) => {\n"
    "\t\t\t\tconst speed = Number.parseFloat(el.getAttribute('data-parallax-speed')) || 0.1\n"
    "\t\t\t\tconst rect = el.getBoundingClientRect()\n"
    "\t\t\t\tif (rect.top < winHeight + 100 && rect.bottom > -100) {\n"
    "\t\t\t\t\tconst deltaY = (rect.top + rect.height / 2 - winHeight / 2) * speed\n"
    "\t\t\t\t\tel.style.transform = `translate3d(0, ${-deltaY}px, 0)`\n"
    "\t\t\t\t}\n"
    "\t\t\t})\n"
    "\t\t}"
)

print("Old block found:", old_block in content_lf)

new_block = (
    "\t\t\t// Generic parallax elements\n"
    "\t\t\tdocument.querySelectorAll('[data-parallax-speed]').forEach((el) => {\n"
    "\t\t\t\tconst speed = Number.parseFloat(el.getAttribute('data-parallax-speed')) || 0.1\n"
    "\t\t\t\tconst rect = el.getBoundingClientRect()\n"
    "\t\t\t\tif (rect.top < winHeight + 100 && rect.bottom > -100) {\n"
    "\t\t\t\t\tconst deltaY = (rect.top + rect.height / 2 - winHeight / 2) * speed\n"
    "\t\t\t\t\tel.style.transform = `translate3d(0, ${-deltaY}px, 0)`\n"
    "\t\t\t\t}\n"
    "\t\t\t})\n"
    "\n"
    "\t\t\t// ── Testimonial Card Scroll Parallax ──\n"
    "\t\t\t// Cards fan outward as the section scrolls into view, revealing the background text.\n"
    "\t\t\tconst testimonialsWrap = document.querySelector('.framer-1nvuwej-container')\n"
    "\t\t\tconst cardWrap = testimonialsWrap\n"
    "\t\t\t\t? testimonialsWrap.querySelector('.framer-1xg6l8k')\n"
    "\t\t\t\t: null\n"
    "\t\t\tif (testimonialsWrap && cardWrap) {\n"
    "\t\t\t\tconst tRect = testimonialsWrap.getBoundingClientRect()\n"
    "\t\t\t\tconst raw = (winHeight - tRect.top) / (winHeight + tRect.height)\n"
    "\t\t\t\tconst progress = Math.min(Math.max(raw, 0), 1)\n"
    "\t\t\t\tconst eased = 1 - Math.pow(1 - progress, 2.5)\n"
    "\n"
    "\t\t\t\tconst cardDrifts = [\n"
    "\t\t\t\t\t{ sel: '.framer-18hgfpp', dx: 70,  dy: -90,  dr: 8,   ds: 0.06 },\n"
    "\t\t\t\t\t{ sel: '.framer-6idmd8',  dx: -70, dy: -60,  dr: -10, ds: 0.05 },\n"
    "\t\t\t\t\t{ sel: '.framer-1j99ufo', dx: 40,  dy: -100, dr: -6,  ds: 0.05 },\n"
    "\t\t\t\t\t{ sel: '.framer-1q8094n', dx: -90, dy: 40,   dr: 12,  ds: 0.06 },\n"
    "\t\t\t\t\t{ sel: '.framer-1k18mro', dx: 60,  dy: 80,   dr: -18, ds: 0.05 },\n"
    "\t\t\t\t]\n"
    "\n"
    "\t\t\t\tcardDrifts.forEach(({ sel, dx, dy, dr, ds }) => {\n"
    "\t\t\t\t\tconst card = cardWrap.querySelector(sel)\n"
    "\t\t\t\t\tif (!card) return\n"
    "\t\t\t\t\tif (!card.dataset.baseTransform) {\n"
    "\t\t\t\t\t\tcard.dataset.baseTransform = card.style.transform || ''\n"
    "\t\t\t\t\t}\n"
    "\t\t\t\t\tconst scale = 1 - ds * eased\n"
    "\t\t\t\t\tcard.style.transform = card.dataset.baseTransform\n"
    "\t\t\t\t\t\t+ ` translateX(${dx * eased}px) translateY(${dy * eased}px) rotate(${dr * eased}deg) scale(${scale})`\n"
    "\t\t\t\t\tcard.style.transition = 'transform 0.08s linear'\n"
    "\t\t\t\t})\n"
    "\t\t\t}\n"
    "\t\t}"
)

if old_block in content_lf:
    updated = content_lf.replace(old_block, new_block, 1)
    # Restore CRLF
    updated_crlf = updated.replace('\n', '\r\n')
    with open(path, 'w', encoding='utf-8') as f:
        f.write(updated_crlf)
    print("SUCCESS: File patched!")
else:
    print("ERROR: Could not find target block.")
    # Debug: show the actual chars around line 345
    lines = content_lf.split('\n')
    for i, line in enumerate(lines[343:355], 344):
        print(f"{i}: {repr(line[:80])}")
