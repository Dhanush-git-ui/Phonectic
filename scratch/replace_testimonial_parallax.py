import sys
sys.stdout.reconfigure(encoding='utf-8')

path = 'src/utils/scrollAnimations.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content_lf = content.replace('\r\n', '\n')
lines = content_lf.split('\n')

# Replace lines 354-386 (0-indexed) - the testimonial block + closing brace
# Lines to keep: 0-353, then new block, then 387 onwards
# But we need to also include the closing } of the outer if(testimonialsWrap) at line 386

new_block = [
    "\t\t\t// \u2500\u2500 Testimonial Card Scroll Parallax \u2500\u2500",
    "\t\t\t// Cards fly off screen as you scroll, fully revealing the background text.",
    "\t\t\tconst testimonialsWrap = document.querySelector('.framer-1nvuwej-container')",
    "\t\t\tconst cardWrap = testimonialsWrap",
    "\t\t\t\t? testimonialsWrap.querySelector('.framer-1xg6l8k')",
    "\t\t\t\t: null",
    "\t\t\tif (testimonialsWrap && cardWrap) {",
    "\t\t\t\tconst tRect = testimonialsWrap.getBoundingClientRect()",
    "\t\t\t\t// progress: 0 when bottom enters viewport, 1 when section center hits viewport center",
    "\t\t\t\tconst raw = (winHeight - tRect.top) / (winHeight + tRect.height * 0.5)",
    "\t\t\t\tconst progress = Math.min(Math.max(raw, 0), 1)",
    "\t\t\t\t// Quadratic ease: starts slow, accelerates",
    "\t\t\t\tconst eased = progress < 0.5",
    "\t\t\t\t\t? 2 * progress * progress",
    "\t\t\t\t\t: 1 - Math.pow(-2 * progress + 2, 2) / 2",
    "",
    "\t\t\t\t// Large drift values so cards fly completely off screen",
    "\t\t\t\tconst cardDrifts = [",
    "\t\t\t\t\t{ sel: '.framer-18hgfpp', dx:  500, dy: -300, dr:  20, fade: true },",
    "\t\t\t\t\t{ sel: '.framer-6idmd8',  dx: -500, dy: -200, dr: -25, fade: true },",
    "\t\t\t\t\t{ sel: '.framer-1j99ufo', dx:  200, dy: -450, dr: -15, fade: true },",
    "\t\t\t\t\t{ sel: '.framer-1q8094n', dx: -550, dy:  150, dr:  30, fade: true },",
    "\t\t\t\t\t{ sel: '.framer-1k18mro', dx:  400, dy:  300, dr: -35, fade: true },",
    "\t\t\t\t]",
    "",
    "\t\t\t\tcardDrifts.forEach(({ sel, dx, dy, dr, fade }) => {",
    "\t\t\t\t\tconst card = cardWrap.querySelector(sel)",
    "\t\t\t\t\tif (!card) return",
    "\t\t\t\t\tif (!card.dataset.baseTransform) {",
    "\t\t\t\t\t\tcard.dataset.baseTransform = card.style.transform || ''",
    "\t\t\t\t\t}",
    "\t\t\t\t\tcard.style.transform = card.dataset.baseTransform",
    "\t\t\t\t\t\t+ ` translateX(${dx * eased}px) translateY(${dy * eased}px) rotate(${dr * eased}deg)`",
    "\t\t\t\t\tcard.style.opacity = fade ? String(Math.max(0, 1 - eased * 1.5)) : '1'",
    "\t\t\t\t\tcard.style.transition = 'transform 0.06s linear, opacity 0.06s linear'",
    "\t\t\t\t})",
    "\t\t\t}",
]

# lines 354-386 (0-indexed) inclusive
updated_lines = lines[:354] + new_block + lines[387:]
updated = '\n'.join(updated_lines)
updated_crlf = updated.replace('\n', '\r\n')

with open(path, 'w', encoding='utf-8') as f:
    f.write(updated_crlf)

print(f"SUCCESS: Testimonial parallax replaced. New total lines: {len(updated_lines)}")
