import { useEffect } from 'react'

export function useScrollAnimations() {
	useEffect(() => {
		// ─────────────────────────────────────────────
		// 0. SCROLL PROGRESS BAR (OneFin-style top indicator)
		// ─────────────────────────────────────────────
		let progressBar = document.getElementById('onefin-scroll-progress')
		if (!progressBar) {
			progressBar = document.createElement('div')
			progressBar.id = 'onefin-scroll-progress'
			progressBar.style.cssText = [
				'position:fixed',
				'top:0',
				'left:0',
				'height:2px',
				'background:linear-gradient(90deg,#0066FF,#60a5fa,#0066FF)',
				'background-size:200% 100%',
				'z-index:99999',
				'width:0%',
				'pointer-events:none',
				'animation:shimmerProgress 2s linear infinite',
			].join(';')
			document.body.appendChild(progressBar)
		}

		// ─────────────────────────────────────────────
		// 1. SCROLL REVEAL — section headers, cards, grid items
		// ─────────────────────────────────────────────
		const revealSelectors = [
			'[data-framer-name="Header"]',
			'[data-framer-name="Price Card"]',
			'[data-framer-name="Step"]',
			'[data-framer-name="Card"]',
			'[data-framer-name="Testimonial"]',
			'.framer-n789ul',
			'.framer-1dympnd',
			'.framer-1rpbdej',
			'.framer-1u039q2',
			'.framer-1v95j3x',
			'.framer-u51m0c',
			'.framer-1m7420m',
			'.framer-1p5v77a',
			'.framer-157s9wh',
			'.framer-1vy09qj',
			'.framer-1m3j62n',
		]

		const allRevealTargets = new Set()
		revealSelectors.forEach((sel) => {
			document.querySelectorAll(sel).forEach((el) => {
				if (!el.closest('#hero') && !el.closest('.framer-83IYI')) {
					allRevealTargets.add(el)
				}
			})
		})

		allRevealTargets.forEach((el) => {
			if (
				!el.classList.contains('framer-scroll-reveal') &&
				!el.classList.contains('framer-reveal-scale') &&
				!el.classList.contains('framer-reveal-left') &&
				!el.classList.contains('framer-reveal-right')
			) {
				el.classList.add('framer-scroll-reveal')
			}
		})

		// ─────────────────────────────────────────────
		// 2. STAGGER CHILDREN REVEALS
		//    Cards inside grids/flexboxes stagger in one by one
		// ─────────────────────────────────────────────
		const staggerContainerSelectors = [
			'.framer-btjjzy',
			'[data-framer-name="Blog Grid"]',
			'[data-framer-name="Card Grid"]',
			'[data-framer-name="Pricing Cards"]',
		]
		staggerContainerSelectors.forEach((sel) => {
			document.querySelectorAll(sel).forEach((container) => {
				if (container.closest('#hero')) return
				Array.from(container.children).forEach((child, i) => {
					if (!child.classList.contains('stagger-child')) {
						child.classList.add('stagger-child')
						child.style.setProperty('--stagger-delay', `${i * 80}ms`)
					}
				})
			})
		})

		const staggerObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('stagger-in-view')
						staggerObserver.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.05, rootMargin: '0px 0px 40px 0px' },
		)
		document.querySelectorAll('.stagger-child').forEach((el) => staggerObserver.observe(el))

		// ─────────────────────────────────────────────
		// 3. GENERAL SCROLL REVEAL (Headers & Containers)
		// ─────────────────────────────────────────────
		const revealObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-in-view')
						revealObserver.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.02, rootMargin: '0px 0px 60px 0px' },
		)
		const revealElements = document.querySelectorAll(
			'.framer-scroll-reveal, .framer-reveal-scale, .framer-reveal-left, .framer-reveal-right',
		)
		revealElements.forEach((el) => {
			const rect = el.getBoundingClientRect()
			if (rect.top < window.innerHeight + 60 && rect.bottom > 0) {
				el.classList.add('is-in-view')
			} else {
				revealObserver.observe(el)
			}
		})

		// ─────────────────────────────────────────────
		// 5. ANIMATED NUMBER COUNTERS
		// ─────────────────────────────────────────────
		const counterObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return
					const el = entry.target
					if (el.dataset.counted) return
					el.dataset.counted = 'true'
					const rawText = el.textContent.trim()
					const numMatch = rawText.match(/[\d,.]+/)
					if (!numMatch) return
					const numStr = numMatch[0].replace(/,/g, '')
					const target = parseFloat(numStr)
					if (isNaN(target) || target > 100000) return
					const prefix = rawText.substring(0, rawText.indexOf(numMatch[0]))
					const suffix = rawText.substring(rawText.indexOf(numMatch[0]) + numMatch[0].length)
					const duration = 1800
					const startTime = performance.now()
					const hasDecimal = numStr.includes('.')
					const decimals = hasDecimal ? (numStr.split('.')[1] || '').length : 0
					const tick = (now) => {
						const progress = Math.min((now - startTime) / duration, 1)
						const eased = 1 - (1 - progress) ** 3
						el.textContent = `${prefix}${(target * eased).toFixed(decimals)}${suffix}`
						if (progress < 1) requestAnimationFrame(tick)
					}
					requestAnimationFrame(tick)
					counterObserver.unobserve(el)
				})
			},
			{ threshold: 0.5 },
		)
		;[
			'[data-framer-name="Stat Number"] p',
			'[data-framer-name="Number"] p',
			'.framer-stat-number p',
		].forEach((sel) => document.querySelectorAll(sel).forEach((el) => counterObserver.observe(el)))

		// ─────────────────────────────────────────────
		// 6. 3D CARD TILT ON MOUSE MOVE
		// ─────────────────────────────────────────────
		const tiltHandlers = []
		;[
			'.pricing-card-interactive',
			'.bento-card-interactive',
			'.testimonial-card-interactive',
			'.blog-card-interactive',
		].forEach((sel) => {
			document.querySelectorAll(sel).forEach((card) => {
				if (!card.querySelector('.tilt-shine')) {
					const shine = document.createElement('div')
					shine.className = 'tilt-shine'
					shine.style.cssText = 'position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:5;transition:background 0.15s ease;'
					card.style.position = card.style.position || 'relative'
					card.appendChild(shine)
				}
				const onMove = (e) => {
					const rect = card.getBoundingClientRect()
					const x = e.clientX - rect.left
					const y = e.clientY - rect.top
					const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -7
					const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 7
					card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`
					card.style.transition = 'transform 0.1s ease'
					const shine = card.querySelector('.tilt-shine')
					if (shine) shine.style.background = `radial-gradient(circle at ${x}px ${y}px,rgba(255,255,255,0.12) 0%,transparent 70%)`
				}
				const onLeave = () => {
					card.style.transform = ''
					card.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)'
					const shine = card.querySelector('.tilt-shine')
					if (shine) shine.style.background = 'none'
				}
				card.addEventListener('mousemove', onMove)
				card.addEventListener('mouseleave', onLeave)
				tiltHandlers.push({ card, onMove, onLeave })
			})
		})

		// ─────────────────────────────────────────────
		// 7. MAGNETIC BUTTON EFFECT
		// ─────────────────────────────────────────────
		const magneticHandlers = []
		;['.nav-contact-btn', '.hero-btn-primary', '[data-framer-name="Primary"]'].forEach((sel) => {
			document.querySelectorAll(sel).forEach((btn) => {
				const onMove = (e) => {
					const rect = btn.getBoundingClientRect()
					const x = e.clientX - rect.left - rect.width / 2
					const y = e.clientY - rect.top - rect.height / 2
					btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.04)`
					btn.style.transition = 'transform 0.2s cubic-bezier(0.16,1,0.3,1)'
				}
				const onLeave = () => {
					btn.style.transform = ''
					btn.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)'
				}
				btn.addEventListener('mousemove', onMove)
				btn.addEventListener('mouseleave', onLeave)
				magneticHandlers.push({ btn, onMove, onLeave })
			})
		})

		// ─────────────────────────────────────────────
		// 8. RIPPLE CLICK EFFECT on CTAs
		// ─────────────────────────────────────────────
		const rippleHandlers = []
		;['.nav-contact-btn', '.hero-btn-primary', '[data-framer-name="Primary"]'].forEach((sel) => {
			document.querySelectorAll(sel).forEach((btn) => {
				if (btn.dataset.rippleAttached) return
				btn.dataset.rippleAttached = 'true'
				btn.style.overflow = btn.style.overflow || 'hidden'
				btn.style.position = btn.style.position || 'relative'
				const onClick = (e) => {
					const rect = btn.getBoundingClientRect()
					const ripple = document.createElement('span')
					ripple.style.cssText = [
						'position:absolute',
						'border-radius:50%',
						'width:8px',
						'height:8px',
						'background:rgba(255,255,255,0.35)',
						'transform:scale(0)',
						'animation:rippleEffect 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
						`left:${e.clientX - rect.left - 4}px`,
						`top:${e.clientY - rect.top - 4}px`,
						'pointer-events:none',
						'z-index:10',
					].join(';')
					btn.appendChild(ripple)
					setTimeout(() => ripple.remove(), 700)
				}
				btn.addEventListener('click', onClick)
				rippleHandlers.push({ btn, onClick })
			})
		})

		// ─────────────────────────────────────────────
		// 9. PAGE ENTRANCE ANIMATION
		// ─────────────────────────────────────────────
		const mainEl = document.getElementById('main')
		if (mainEl && !mainEl.dataset.entranceDone) {
			mainEl.dataset.entranceDone = 'true'
			mainEl.style.opacity = '0'
			mainEl.style.transform = 'translateY(8px)'
			requestAnimationFrame(() => {
				setTimeout(() => {
					mainEl.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)'
					mainEl.style.opacity = '1'
					mainEl.style.transform = 'translateY(0)'
				}, 50)
			})
		}

		// ─────────────────────────────────────────────
		// 10. RAF SCROLL — progress bar + parallax
		// ─────────────────────────────────────────────
		let ticking = false
		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					updateScrollEffects()
					ticking = false
				})
				ticking = true
			}
		}

		const updateScrollEffects = () => {
			const scrollY = window.scrollY
			const winHeight = window.innerHeight
			const docHeight = document.documentElement.scrollHeight - winHeight

			// Progress bar
			if (progressBar) {
				progressBar.style.width = `${docHeight > 0 ? (scrollY / docHeight) * 100 : 0}%`
			}

			// Integrations Arched Logo Fan
			const integrationsSection = document.querySelector('.framer-1r5117f, [data-framer-name="Integrations"]')
			if (integrationsSection) {
				const rect = integrationsSection.getBoundingClientRect()
				if (rect.top < winHeight && rect.bottom > 0) {
					const progress = Math.min(Math.max((winHeight - rect.top) / (winHeight + rect.height * 0.5), 0), 1)
					const logos = integrationsSection.querySelectorAll(
						'.framer-19i96k, .framer-18kgh6u, .framer-1ug35de, .framer-1yw7i64, .framer-1f3sf0s, .framer-92sp21',
					)
					logos.forEach((logo, idx) => {
						const spreadFactor = (idx - 2.5) * 12
						logo.style.transform = `translateX(${spreadFactor * progress}px) rotate(${(idx - 2.5) * 4 * progress}deg)`
						logo.style.transition = 'transform 0.15s ease-out'
					})
				}
			}

			// CTA Section Rising Phone & Badges
			const ctaSection = document.querySelector('.framer-1m7420m, [data-framer-name="CTA"]')
			if (ctaSection) {
				const rect = ctaSection.getBoundingClientRect()
				if (rect.top < winHeight + 200 && rect.bottom > 0) {
					const progress = Math.min(Math.max((winHeight - rect.top) / (winHeight + rect.height), 0), 1)
					const ctaPhone = ctaSection.querySelector('.framer-1eicwsq')
					if (ctaPhone) {
						ctaPhone.style.transform = `translateY(${(1 - progress) * 80}px)`
						ctaPhone.style.transition = 'transform 0.1s ease-out'
					}
					ctaSection.querySelectorAll('.framer-1v95j3x, .framer-1u039q2').forEach((badge, idx) => {
						const dir = idx % 2 === 0 ? 1 : -1
						badge.style.transform = `translate3d(0, ${(progress - 0.5) * 30 * dir}px, 0)`
						badge.style.transition = 'transform 0.15s ease-out'
					})
				}
			}

			// Generic parallax elements
			document.querySelectorAll('[data-parallax-speed]').forEach((el) => {
				const speed = Number.parseFloat(el.getAttribute('data-parallax-speed')) || 0.1
				const rect = el.getBoundingClientRect()
				if (rect.top < winHeight + 100 && rect.bottom > -100) {
					const deltaY = (rect.top + rect.height / 2 - winHeight / 2) * speed
					el.style.transform = `translate3d(0, ${-deltaY}px, 0)`
				}
			})


		}

		updateScrollEffects()
		window.addEventListener('scroll', handleScroll, { passive: true })
		window.addEventListener('resize', handleScroll, { passive: true })

		// ─────────────────────────────────────────────
		// 11. FRAMER-STYLE HEADING APPEAR & SCROLL REVEALS
		//     Text Masking (overflow: hidden), Word Slide-Up, Stagger & Scale
		// ─────────────────────────────────────────────
		const headingObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-revealed')
						headingObserver.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
		)

		function splitHeadingIntoWords(heading) {
			if (heading.dataset.headingRevealed) return
			heading.dataset.headingRevealed = 'true'
			heading.classList.add('framer-reveal-heading')

			const originalText = heading.textContent.trim()
			if (!heading.getAttribute('aria-label')) {
				heading.setAttribute('aria-label', originalText)
			}

			let wordIndex = 0
			function processNode(node) {
				if (node.nodeType === Node.TEXT_NODE) {
					const text = node.textContent
					if (!text.trim()) return node
					const parts = text.split(/(\s+)/)
					const frag = document.createDocumentFragment()
					parts.forEach((part) => {
						if (!part) return
						if (/^\s+$/.test(part)) {
							frag.appendChild(document.createTextNode(part))
						} else {
							const mask = document.createElement('span')
							mask.className = 'framer-word-mask'
							const word = document.createElement('span')
							word.className = 'framer-reveal-word'
							word.style.setProperty('--word-index', wordIndex++)
							word.textContent = part
							mask.appendChild(word)
							frag.appendChild(mask)
						}
					})
					return frag
				} else if (node.nodeType === Node.ELEMENT_NODE) {
					if (['SVG', 'BUTTON', 'IMG'].includes(node.tagName)) return node
					const children = Array.from(node.childNodes)
					children.forEach((child) => {
						const replacement = processNode(child)
						if (replacement && replacement !== child) {
							node.replaceChild(replacement, child)
						}
					})
					return node
				}
				return node
			}

			processNode(heading)
		}

		function processAllHeadings() {
			const headingSelectors = [
				'h1',
				'h2',
				'h3',
				'h4',
				'[data-framer-name="Heading"] h2',
				'[data-framer-name="Heading"] h3',
				'.framer-1npdw8x h2',
				'.framer-1npdw8x h3',
			]
			const headings = document.querySelectorAll(headingSelectors.join(','))
			headings.forEach((h) => {
				if (h.closest('#hero')) return
				splitHeadingIntoWords(h)
				const rect = h.getBoundingClientRect()
				if (rect.top < window.innerHeight && rect.bottom > 0) {
					setTimeout(() => h.classList.add('is-revealed'), 100)
				} else {
					headingObserver.observe(h)
				}
			})
		}

		processAllHeadings()

		let mutationTimeout = null
		const headingMutationObserver = new MutationObserver(() => {
			if (mutationTimeout) clearTimeout(mutationTimeout)
			mutationTimeout = setTimeout(() => {
				processAllHeadings()
			}, 150)
		})
		headingMutationObserver.observe(document.body, { childList: true, subtree: true })

		return () => {
			revealObserver.disconnect()
			staggerObserver.disconnect()
			counterObserver.disconnect()
			headingObserver.disconnect()
			headingMutationObserver.disconnect()
			if (mutationTimeout) clearTimeout(mutationTimeout)
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('resize', handleScroll)
			tiltHandlers.forEach(({ card, onMove, onLeave }) => {
				card.removeEventListener('mousemove', onMove)
				card.removeEventListener('mouseleave', onLeave)
			})
			magneticHandlers.forEach(({ btn, onMove, onLeave }) => {
				btn.removeEventListener('mousemove', onMove)
				btn.removeEventListener('mouseleave', onLeave)
			})
			rippleHandlers.forEach(({ btn, onClick }) => btn.removeEventListener('click', onClick))
			if (progressBar && progressBar.parentNode) progressBar.remove()
		}
	}, [])
}
