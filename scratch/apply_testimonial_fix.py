with open('src/utils/scrollAnimations.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Normalize CRLF to LF for matching
is_crlf = '\r\n' in content
content_lf = content.replace('\r\n', '\n')

old_block = """			// ── Testimonial Card Scroll Parallax ──
			// Cards fly off screen as you scroll, fully revealing the background text.
			const testimonialsWrap = document.querySelector('.framer-1nvuwej-container')
			const cardWrap = testimonialsWrap
				? testimonialsWrap.querySelector('.framer-1xg6l8k')
				: null
			if (testimonialsWrap && cardWrap) {
				const tRect = testimonialsWrap.getBoundingClientRect()
				// progress: 0 when bottom enters viewport, 1 when section center hits viewport center
				const raw = (winHeight - tRect.top) / (winHeight + tRect.height * 0.5)
				const progress = Math.min(Math.max(raw, 0), 1)
				// Quadratic ease: starts slow, accelerates
				const eased = progress < 0.5
					? 2 * progress * progress
					: 1 - Math.pow(-2 * progress + 2, 2) / 2

				// Large drift values so cards fly completely off screen
				const cardDrifts = [
					{ sel: '.framer-18hgfpp', dx:  500, dy: -300, dr:  20, fade: true },
					{ sel: '.framer-6idmd8',  dx: -500, dy: -200, dr: -25, fade: true },
					{ sel: '.framer-1j99ufo', dx:  200, dy: -450, dr: -15, fade: true },
					{ sel: '.framer-1q8094n', dx: -550, dy:  150, dr:  30, fade: true },
					{ sel: '.framer-1k18mro', dx:  400, dy:  300, dr: -35, fade: true },
				]

				cardDrifts.forEach(({ sel, dx, dy, dr, fade }) => {
					const card = cardWrap.querySelector(sel)
					if (!card) return
					if (!card.dataset.baseTransform) {
						card.dataset.baseTransform = card.style.transform || ''
					}
					card.style.transform = card.dataset.baseTransform
						+ ` translateX(${dx * eased}px) translateY(${dy * eased}px) rotate(${dr * eased}deg)`
					card.style.opacity = fade ? String(Math.max(0, 1 - eased * 1.5)) : '1'
					card.style.transition = 'transform 0.06s linear, opacity 0.06s linear'
				})
			}"""

new_block = """			// ── Testimonial Card Scroll Parallax ──
			// Cards spread outwards to frame the background text without vanishing.
			const testimonialsWrap = document.querySelector('.framer-1nvuwej-container')
			const cardWrap = testimonialsWrap
				? testimonialsWrap.querySelector('.framer-1xg6l8k')
				: null
			if (testimonialsWrap && cardWrap) {
				const tRect = testimonialsWrap.getBoundingClientRect()
				// Progress starts when section enters upper-mid viewport, finishes when section is centered
				const raw = (winHeight * 0.75 - tRect.top) / (winHeight * 0.65)
				const progress = Math.min(Math.max(raw, 0), 1)
				// Smooth ease-out
				const eased = 1 - Math.pow(1 - progress, 2.5)

				// Base transforms from Framer design + spread offsets so center text is fully visible
				// Cards fan outwards to sides & corners and STAY 100% VISIBLE (never fade to 0)
				const cardConfigs = [
					{ sel: '.framer-18hgfpp', base: 'translate(-50%, -50%) translateX(240px) translateY(-106px) rotate(6deg)',  dx:  260, dy:  -30, dr:  8 },
					{ sel: '.framer-6idmd8',  base: 'translate(-50%, -50%) translateX(142px) translateY(-43px) rotate(-7deg)',   dx:  300, dy:  -50, dr:  8 },
					{ sel: '.framer-1j99ufo', base: 'translate(-50%, -50%) translateX(53px) translateY(131px) rotate(-5deg)',    dx:  320, dy:   70, dr:  5 },
					{ sel: '.framer-1q8094n', base: 'translate(-50%, -50%) translateX(-265px) translateY(53px) rotate(9deg)',   dx: -180, dy:  100, dr:  4 },
					{ sel: '.framer-1k18mro', base: 'translate(-50%, -50%) translateX(-62px) translateY(-40px) rotate(-16deg)', dx: -320, dy:  -50, dr: -6 },
				]

				cardConfigs.forEach(({ sel, base, dx, dy, dr }) => {
					const card = cardWrap.querySelector(sel)
					if (!card) return
					card.style.transform = `${base} translateX(${dx * eased}px) translateY(${dy * eased}px) rotate(${dr * eased}deg)`
					card.style.opacity = '1'
					card.style.transition = 'none'
				})
			}"""

old_block_lf = old_block.replace('\r\n', '\n')
new_block_lf = new_block.replace('\r\n', '\n')

if old_block_lf in content_lf:
    content_lf = content_lf.replace(old_block_lf, new_block_lf)
    final_content = content_lf.replace('\n', '\r\n') if is_crlf else content_lf
    with open('src/utils/scrollAnimations.js', 'wb') as f:
        f.write(final_content.encode('utf-8'))
    print("SUCCESS: Updated src/utils/scrollAnimations.js")
else:
    print("FAILED: old_block_lf not found")
