import { useEffect } from 'react'
import PlacementArcadeGame from './PlacementArcadeGame.jsx'
import GameZoneFeature1Section from './gamezone-previews/GameZoneFeature1Section.jsx'
import InteractivePlacementFeatureCards from './InteractivePlacementFeatureCards.jsx'

const topHeaderHtml = `<div class="framer-18ug3rd" data-framer-name="Top Gradient"><div data-framer-background-image-wrapper="true" style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0"><img alt="" decoding="async" height="1614" loading="lazy" sizes="(min-width: 1200px) max(100vw, 1440px), (min-width: 810px) and (max-width: 1199.98px) max(100vw, 810px), (max-width: 809.98px) max(100vw, 400px)" src="/assets/TMNxftgk8yXRurYjmU8hiedCo.png" srcset="/assets/TMNxftgk8yXRurYjmU8hiedCo.png 512w,/assets/TMNxftgk8yXRurYjmU8hiedCo.png 1024w,/assets/TMNxftgk8yXRurYjmU8hiedCo.png 2048w,/assets/TMNxftgk8yXRurYjmU8hiedCo.png 2880w" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover" width="2880"/></div></div><div class="framer-1afw056" data-framer-name="Header"><div class="framer-qxpmop" data-framer-name="Heading &amp; Title"><div class="framer-1ij0dh0" data-framer-name="Title"><div class="framer-61kz3b" data-framer-name="Number" style="transform:rotate(11deg)"><div class="framer-1e915dv" data-framer-component-type="RichTextContainer" data-framer-name="02" style="transform:none"><p class="framer-text framer-styles-preset-10gosz4" data-styles-preset="gsZKPt0ge" dir="auto" style="--framer-text-color:var(--token-cd0e4b39-d412-4786-8464-f96703fa50b9, rgb(82, 82, 82))">02</p></div></div><div class="framer-1xek3h4" data-framer-name="Name" style="transform:rotate(-12deg)"><div class="framer-an8ew8" data-framer-component-type="RichTextContainer" data-framer-name="key features" style="transform:none"><p class="framer-text framer-styles-preset-10gosz4" data-styles-preset="gsZKPt0ge" dir="auto" style="--framer-text-color:var(--token-c6def8b1-53e1-4b6e-88c6-f76095f3377b, rgb(217, 217, 217))">key features</p></div></div></div><div class="ssr-variant hidden-1k8ds7i"><div class="framer-gb7kow" data-framer-component-type="RichTextContainer" data-framer-name="Heading" style="transform:none"><h2 class="framer-text framer-styles-preset-1c9qbxs" data-styles-preset="Tn59MLvQJ" dir="auto" style="--framer-text-alignment:center;--framer-text-color:rgb(255, 255, 255);color:rgb(255, 255, 255);opacity:1;">Experience High-Speed Placement Mastery.</h2></div></div><div class="ssr-variant hidden-72rtr7 hidden-m2it3q"><div class="framer-gb7kow" data-framer-component-type="RichTextContainer" data-framer-name="Heading" style="transform:none"><h3 class="framer-text framer-styles-preset-ol5e0v" data-styles-preset="yopWj3I1S" dir="auto" style="--framer-text-alignment:center;--framer-text-color:rgb(255, 255, 255);color:rgb(255, 255, 255);opacity:1;">Experience High-Speed Placement Mastery.</h3></div></div></div><div class="framer-1o3qysz" data-framer-component-type="RichTextContainer" data-framer-name="SubHead" style="transform:none"><p class="framer-text framer-styles-preset-aploos" data-styles-preset="N1pattSQ4" dir="auto" style="--framer-text-alignment:center;--framer-text-color:var(--token-a5cbaa21-8a90-448d-9f57-e1d1b61de1a6, rgb(255, 255, 255))">Experience the power of unified placement training — smarter practice, faster speed math, and company-specific mock tests in one platform.</p></div></div>`
export default function DarkFeatures() {
	useEffect(() => {
		const section = document.getElementById('darkfeatures')
		if (!section) return

		const ease = 'cubic-bezier(0.16, 1, 0.3, 1)'

		// Header is handled uniformly with high visibility
		const header = section.querySelector('[data-framer-name="Header"]')
		if (header) {
			header.style.opacity = "1"
			header.style.transform = "translateY(0)"
		}

		// Feature 1 animations
		const feat1 = section.querySelector('[data-framer-name="Feature 1"]')
		if (feat1) {
			const content1 = feat1.querySelector('.framer-ejacb9')
			const visual1 = feat1.querySelector('.framer-lrvkow')

			;[content1, visual1].filter(Boolean).forEach((el, i) => {
				const dir = i === 0 ? -60 : 60
				el.style.opacity = '0'
				el.style.transform = `translateX(${dir}px)`
				el.style.transition = `opacity 0.9s ${ease} ${i * 0.1}s, transform 0.9s ${ease} ${i * 0.1}s`
				el.style.willChange = 'opacity, transform'
			})

			const feat1Obs = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							;[content1, visual1].filter(Boolean).forEach((el) => {
								el.style.opacity = '1'
								el.style.transform = 'translateX(0)'
							})
							feat1Obs.disconnect()
						}
					})
				},
				{ threshold: 0.1 },
			)
			feat1Obs.observe(feat1)

			const listCards1 = Array.from(
				feat1.querySelectorAll(
					'.framer-qnf6cd-container, .framer-gydulz-container, .framer-1tf5qck-container, .framer-1snwrig-container',
				),
			)
			listCards1.forEach((cardWrap, i) => {
				cardWrap.style.opacity = '0'
				cardWrap.style.transform = 'translateY(24px)'
				cardWrap.style.transition = `opacity 0.6s ${ease} ${0.3 + i * 0.1}s, transform 0.6s ${ease} ${0.3 + i * 0.1}s`

				const cardInner = cardWrap.querySelector('.framer-gtti5x')
				if (cardInner) {
					cardInner.style.cursor = 'pointer'
					cardInner.addEventListener('click', () => {
						listCards1.forEach((cw, idx) => {
							const inner = cw.querySelector('.framer-gtti5x')
							const icon = cw.querySelector('.framer-xtmfu3')
							if (!inner) return
							if (idx === i) {
								inner.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'
								inner.style.border = '1px solid rgba(255, 255, 255, 0.16)'
								if (icon) {
									icon.style.borderColor = 'rgba(96, 165, 250, 0.9)'
									icon.style.boxShadow = '0 0 22px rgba(59, 130, 246, 0.55), 0 6px 20px rgba(0, 0, 0, 0.45)'
								}
							} else {
								inner.style.backgroundColor = 'transparent'
								inner.style.border = '1px solid transparent'
								if (icon) {
									icon.style.borderColor = 'rgba(255, 255, 255, 0.18)'
									icon.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.4)'
								}
							}
						})
					})
				}
			})

			const cards1Obs = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							listCards1.forEach((card) => {
								card.style.opacity = '1'
								card.style.transform = 'translateY(0)'
							})
							cards1Obs.disconnect()
						}
					})
				},
				{ threshold: 0.08 },
			)
			cards1Obs.observe(feat1)
		}

		// Feature 2 (Arcade Game) entrance
		const feat2 = section.querySelector('[data-framer-name="Feature 2"]')
		if (feat2) {
			feat2.style.opacity = '0'
			feat2.style.transform = 'translateY(40px)'
			feat2.style.transition = `opacity 0.9s ${ease}, transform 0.9s ${ease}`
			const feat2Obs = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							feat2.style.opacity = '1'
							feat2.style.transform = 'translateY(0)'
							feat2Obs.disconnect()
						}
					})
				},
				{ threshold: 0.1 },
			)
			feat2Obs.observe(feat2)
		}
	}, [])

	return (
		<section
			className="framer-18ug3rd-section"
			data-framer-name="Dark Features"
			id="darkfeatures"
			style={{ position: 'relative', width: '100%', overflow: 'hidden' }}
		>
			<div dangerouslySetInnerHTML={{ __html: topHeaderHtml }} style={{ display: 'contents' }} />

			{/* Feature 1: Dynamic Game Zone Preview Panels & Interactive Switcher */}
			<GameZoneFeature1Section />

			{/* Feature 2: Replaced with Addictive Placement Arcade Game */}
			<div
				className="framer-9j69ck"
				data-framer-name="Feature 2"
				style={{
					width: '100%',
					padding: '80px 24px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'relative',
					zIndex: 10,
				}}
			>
				{/* Sleek Technical Dot Grid Background (Clean Engineering Aesthetic, Non-AI) */}
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundImage:
							'radial-gradient(rgba(255, 255, 255, 0.08) 1.2px, transparent 1.2px)',
						backgroundSize: '24px 24px',
						maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)',
						WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)',
						pointerEvents: 'none',
						zIndex: 0,
					}}
				/>
				<div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
					<PlacementArcadeGame />
				</div>
			</div>

			{/* Feature 3: Interactive Light-Blue & White Cards */}
			<InteractivePlacementFeatureCards />
		</section>
	)
}
