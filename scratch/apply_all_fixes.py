import re

# 1. Update src/utils/scrollAnimations.js
# Remove the testimonial block from scrollAnimations.js so it doesn't conflict with Testimonials.jsx
with open('src/utils/scrollAnimations.js', 'r', encoding='utf-8') as f:
    scroll_js = f.read()

is_crlf_scroll = '\r\n' in scroll_js
scroll_js_lf = scroll_js.replace('\r\n', '\n')

# Find and remove the testimonial block from scrollAnimations.js
pattern = r"\t\t\t// ── Testimonial Card Scroll Parallax ──.*?\t\t\t}\n"
scroll_js_lf_updated = re.sub(pattern, "", scroll_js_lf, flags=re.DOTALL)
if scroll_js_lf_updated != scroll_js_lf:
    scroll_out = scroll_js_lf_updated.replace('\n', '\r\n') if is_crlf_scroll else scroll_js_lf_updated
    with open('src/utils/scrollAnimations.js', 'wb') as f:
        f.write(scroll_out.encode('utf-8'))
    print("SUCCESS: Removed conflicting testimonial block from scrollAnimations.js")
else:
    print("WARNING: Pattern not matched in scrollAnimations.js")


# 2. Update src/components/Testimonials.jsx
with open('src/components/Testimonials.jsx', 'r', encoding='utf-8') as f:
    testim_js = f.read()

is_crlf_testim = '\r\n' in testim_js
testim_js_lf = testim_js.replace('\r\n', '\n')

# Replace the script part of Testimonials.jsx
old_script_start = "export default function Testimonials() {"
script_idx = testim_js_lf.find(old_script_start)
assert script_idx != -1, "export default function Testimonials() not found"

new_script = """export default function Testimonials() {
	useEffect(() => {
		const section = document.querySelector('.framer-1gx9988')
		if (!section) return

		const cardConfigs = [
			{
				sel: '.framer-18hgfpp',
				base: 'translate(-50%, -50%) translateX(240px) translateY(-106px) rotate(6deg)',
				dx: 380, dy: -40, dr: 10,
			},
			{
				sel: '.framer-6idmd8',
				base: 'translate(-50%, -50%) translateX(142px) translateY(-43px) rotate(-7deg)',
				dx: 450, dy: -50, dr: 10,
			},
			{
				sel: '.framer-1j99ufo',
				base: 'translate(-50%, -50%) translateX(53px) translateY(131px) rotate(-5deg)',
				dx: 460, dy: 100, dr: 6,
			},
			{
				sel: '.framer-1q8094n',
				base: 'translate(-50%, -50%) translateX(-265px) translateY(53px) rotate(9deg)',
				dx: -290, dy: 90, dr: 4,
			},
			{
				sel: '.framer-1k18mro',
				base: 'translate(-50%, -50%) translateX(-62px) translateY(-40px) rotate(-16deg)',
				dx: -450, dy: -60, dr: -8,
			},
		]

		const cards = cardConfigs
			.map(c => ({ ...c, el: section.querySelector(c.sel) }))
			.filter(c => c.el)

		// Cards are ALWAYS fully visible - never fade out
		cards.forEach(c => {
			c.el.style.opacity = '1'
			c.el.style.cursor = 'pointer'
			c.el.style.willChange = 'transform'
		})

		const marqueeCards = section.querySelectorAll('.framer-1i5k5rz')
		marqueeCards.forEach(mc => mc.classList.add('testimonial-card-interactive'))

		let rafPending = false
		const handleScroll = () => {
			if (rafPending) return
			rafPending = true
			requestAnimationFrame(() => {
				const rect = section.getBoundingClientRect()
				const winH = window.innerHeight
				if (rect.top < winH + 100 && rect.bottom > -100) {
					// Progress starts when section enters viewport, finishes when section is centered
					const raw = (winH * 0.75 - rect.top) / (winH * 0.65)
					const progress = Math.min(Math.max(raw, 0), 1)
					const eased = 1 - Math.pow(1 - progress, 2.5)

					cards.forEach(c => {
						const currentDx = c.dx * eased
						const currentDy = c.dy * eased
						const currentDr = c.dr * eased
						c.el.style.transform = `${c.base} translateX(${currentDx}px) translateY(${currentDy}px) rotate(${currentDr}deg)`
						c.el.style.opacity = '1'
						c.el.style.transition = 'none'
					})
				}
				rafPending = false
			})
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		handleScroll()

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<section className="framer-1gx9988" data-framer-name="Testimonials" dangerouslySetInnerHTML={{ __html: content }} />
	)
}
"""

testim_js_lf_updated = testim_js_lf[:script_idx] + new_script
testim_out = testim_js_lf_updated.replace('\n', '\r\n') if is_crlf_testim else testim_js_lf_updated
with open('src/components/Testimonials.jsx', 'wb') as f:
    f.write(testim_out.encode('utf-8'))
print("SUCCESS: Updated src/components/Testimonials.jsx")


# 3. Update src/index.css for CTA pinning
with open('src/index.css', 'r', encoding='utf-8') as f:
    css = f.read()

is_crlf_css = '\r\n' in css
css_lf = css.replace('\r\n', '\n')

old_cta_css = """/* Unclip the CTA section wrapper so slide-in text isn't cut off */
#cta section.framer-bpnHt,
#cta .framer-bpnHt.framer-cl5rnq,
#cta .framer-1e0pwqt,
#cta .framer-1fgev8h {
	overflow: visible !important;
}

/* Widen the text column so full words fit and add vertical gap between lines */
#cta .framer-mo4q0l {
	overflow: visible !important;
	pointer-events: none !important;
	width: max-content !important;
	gap: 8px !important;
}

#cta .framer-l5zhei,
#cta .framer-1ge4eqe,
#cta .framer-1cc3myi {
	overflow: visible !important;
	will-change: transform !important;
	width: max-content !important;
}

#cta .framer-l5zhei h1,
#cta .framer-1ge4eqe h1,
#cta .framer-1cc3myi h1 {
	font-size: clamp(64px, 8.5vw, 128px) !important;
	letter-spacing: -0.05em !important;
	line-height: 1 !important;
	white-space: nowrap !important;
	overflow: visible !important;
	margin: 0 !important;
}"""

new_cta_css = """/* CTA Section Sticky Scroll Pin */
@media (min-width: 810px) {
	#cta,
	.framer-14eznka-container#cta {
		position: relative !important;
		height: 220vh !important;
		width: 100% !important;
		flex: none !important;
	}

	#cta section.framer-bpnHt,
	#cta .framer-bpnHt.framer-cl5rnq {
		position: sticky !important;
		top: 0 !important;
		height: 100vh !important;
		width: 100% !important;
		overflow: hidden !important;
	}
}

/* Unclip inner CTA wrappers so large sliding text isn't cut off */
#cta .framer-1e0pwqt,
#cta .framer-1fgev8h,
#cta .framer-1ffnixg {
	overflow: visible !important;
	height: 100% !important;
	width: 100% !important;
}

/* Widen the text column so full words fit and add vertical gap between lines */
#cta .framer-mo4q0l {
	overflow: visible !important;
	pointer-events: none !important;
	width: max-content !important;
	gap: 12px !important;
	position: absolute !important;
	top: 50% !important;
	left: 50% !important;
	transform: translate(-50%, -50%) !important;
	z-index: 2 !important;
}

#cta .framer-l5zhei,
#cta .framer-1ge4eqe,
#cta .framer-1cc3myi {
	overflow: visible !important;
	will-change: transform !important;
	width: max-content !important;
}

#cta .framer-l5zhei h1,
#cta .framer-1ge4eqe h1,
#cta .framer-1cc3myi h1 {
	font-size: clamp(52px, 8vw, 128px) !important;
	letter-spacing: -0.05em !important;
	line-height: 1 !important;
	white-space: nowrap !important;
	overflow: visible !important;
	margin: 0 !important;
}"""

assert old_cta_css in css_lf, "old_cta_css not found in index.css"
css_lf = css_lf.replace(old_cta_css, new_cta_css)
css_out = css_lf.replace('\n', '\r\n') if is_crlf_css else css_lf
with open('src/index.css', 'wb') as f:
    f.write(css_out.encode('utf-8'))
print("SUCCESS: Updated src/index.css")


# 4. Update src/components/CTASection.jsx for scroll pin animation
with open('src/components/CTASection.jsx', 'r', encoding='utf-8') as f:
    cta_js = f.read()

is_crlf_cta = '\r\n' in cta_js
cta_js_lf = cta_js.replace('\r\n', '\n')

old_cta_scroll = """			// ── Scroll-linked parallax: phone rising + text slide-in ─────────────
			const phone = section.querySelector('.framer-9evzuh')
			const logo = section.querySelector('.framer-1u7j4fm')
			const topText = section.querySelector('.framer-l5zhei')
			const midText = section.querySelector('.framer-1ge4eqe')
			const botText = section.querySelector('.framer-1cc3myi')

			// Starting X offsets matching Framer's inline styles
			const textOffsets = [
				{ el: topText, startX: -314 },
				{ el: midText, startX:  520 },
				{ el: botText, startX: -491 },
			]

			let rafPending = false
			const handleScroll = () => {
				if (rafPending) return
				rafPending = true
				requestAnimationFrame(() => {
					const rect = section.getBoundingClientRect()
					const winH = window.innerHeight
					if (rect.top < winH + 200 && rect.bottom > 0) {
						const progress = Math.min(Math.max((winH - rect.top) / (winH + rect.height * 0.6), 0), 1)
						const eased = 1 - Math.pow(1 - progress, 2)
						// Phone slides up as section scrolls into view
						if (phone) {
							const lift = (1 - progress) * 60
							phone.style.transform = `translate(-50%, -50%) translateY(${168 - lift}px)`
						}
						// Logo floats slightly opposite
						if (logo) {
							const drift = (progress - 0.5) * 20
							logo.style.transform = `translate(-50%, -50%) translateY(${drift}px)`
						}
						// Text words slide from offset to center as section enters viewport
						textOffsets.forEach(({ el, startX }) => {
							if (!el) return
							const currentX = startX * (1 - eased)
							el.style.transform = `translateX(${currentX}px)`
							el.style.transition = 'transform 0.06s linear'
						})
					}
					rafPending = false
				})
			}"""

new_cta_scroll = """			// ── Scroll-linked parallax: phone rising + text slide-in ─────────────
			const phone = section.querySelector('.framer-9evzuh')
			const logo = section.querySelector('.framer-1u7j4fm')
			const topText = section.querySelector('.framer-l5zhei')
			const midText = section.querySelector('.framer-1ge4eqe')
			const botText = section.querySelector('.framer-1cc3myi')

			// Starting X offsets matching Framer's inline styles
			const textOffsets = [
				{ el: topText, startX: -314 },
				{ el: midText, startX:  520 },
				{ el: botText, startX: -491 },
			]

			let rafPending = false
			const handleScroll = () => {
				if (rafPending) return
				rafPending = true
				requestAnimationFrame(() => {
					const container = document.getElementById('cta')
					if (!container) {
						rafPending = false
						return
					}
					const rect = container.getBoundingClientRect()
					const winH = window.innerHeight
					const totalPinScroll = rect.height - winH

					if (totalPinScroll > 0) {
						// Pinned scroll progress: 0 when top of section docks at top of viewport, 1 when section completes pin
						const pinnedScroll = -rect.top
						const pinProgress = Math.min(Math.max(pinnedScroll / totalPinScroll, 0), 1)

						// Text animation completes within first 60% of the pin track!
						// For pinProgress 0.0 -> 0.6: animProgress goes 0.0 -> 1.0
						// For pinProgress 0.6 -> 1.0: animProgress is 1.0 (HOLD - full text complete!)
						// After pinProgress reaches 1.0, continuing to scroll naturally moves to footer!
						const animRatio = 0.6
						const animProgress = Math.min(pinProgress / animRatio, 1)
						const eased = 1 - Math.pow(1 - animProgress, 2.5)

						// Text words slide from offset to center
						textOffsets.forEach(({ el, startX }) => {
							if (!el) return
							const currentX = startX * (1 - eased)
							el.style.transform = `translateX(${currentX}px)`
							el.style.transition = 'none'
						})

						// Phone slides up
						if (phone) {
							const lift = eased * 60
							phone.style.transform = `translate(-50%, -50%) translateY(${168 - lift}px)`
							phone.style.transition = 'none'
						}

						// Logo floats slightly opposite
						if (logo) {
							const drift = (eased - 0.5) * 20
							logo.style.transform = `translate(-50%, -50%) translateY(${drift}px)`
							logo.style.transition = 'none'
						}

						// Buttons and badges reveal when pin starts
						if (pinProgress > 0.05) {
							if (btnWrap) {
								btnWrap.style.opacity = '1'
								btnWrap.style.transform = 'translateY(0)'
							}
							badgeEls.forEach((el) => {
								el.style.opacity = '1'
							})
						}
					}
					rafPending = false
				})
			}"""

assert old_cta_scroll in cta_js_lf, "old_cta_scroll not found in CTASection.jsx"
cta_js_lf = cta_js_lf.replace(old_cta_scroll, new_cta_scroll)
cta_out = cta_js_lf.replace('\n', '\r\n') if is_crlf_cta else cta_js_lf
with open('src/components/CTASection.jsx', 'wb') as f:
    f.write(cta_out.encode('utf-8'))
print("SUCCESS: Updated src/components/CTASection.jsx")
