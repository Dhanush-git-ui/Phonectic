import { useState, useEffect } from 'react'
import About from './components/About.jsx'
import Benefits from './components/Benefits.jsx'
import CTASection from './components/CTASection.jsx'
import ContactModal from './components/ContactModal.jsx'
import DarkFeatures from './components/DarkFeatures.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Integrations from './components/Integrations.jsx'
import MarqueeStats from './components/MarqueeStats.jsx'
import Navbar from './components/Navbar.jsx'
import GalleryScrollZoom from './components/GalleryScrollZoom.jsx'
import Testimonials from './components/Testimonials.jsx'
import { useScrollAnimations } from './utils/scrollAnimations.js'

export default function App() {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false)
	useScrollAnimations()

	useEffect(() => {
		const handleOpenEvent = () => setIsContactModalOpen(true)
		window.addEventListener('open-contact-modal', handleOpenEvent)

		// Universal click handler: prevent leaving the page and route actions cleanly
		const handleGlobalClick = (e) => {
			const link = e.target.closest('a')
			if (!link) return

			const href = link.getAttribute('href') || ''
			const text = (link.textContent || '').trim().toLowerCase()
			const isOpenContact =
				link.hasAttribute('data-open-contact') ||
				href === '#contact' ||
				href.includes('contact') ||
				text.includes('contact') ||
				text.includes('start free') ||
				text.includes('get pro') ||
				text.includes('join master') ||
				text.includes('get started')

			if (isOpenContact) {
				e.preventDefault()
				e.stopPropagation()
				setIsContactModalOpen(true)
				return
			}

			// In-page hash link scrolling
			if (href.startsWith('#') && href.length > 1) {
				const targetId = href.substring(1)
				const targetEl = document.getElementById(targetId) || document.querySelector(`[data-framer-name="${targetId}"]`)
				if (targetEl) {
					e.preventDefault()
					e.stopPropagation()
					targetEl.scrollIntoView({ behavior: 'smooth' })
					return
				}
			}

			// Block any other navigation that would leave the landing page
			if (href === '#' || href === '' || href.startsWith('http') || href.startsWith('.')) {
				e.preventDefault()
				e.stopPropagation()
			}
		}

		document.addEventListener('click', handleGlobalClick, { capture: true })

		return () => {
			window.removeEventListener('open-contact-modal', handleOpenEvent)
			document.removeEventListener('click', handleGlobalClick, { capture: true })
		}
	}, [])

	return (
		<div
			id="main"
			className="framer-wfFB2 framer-pef12c"
			data-layout-template="true"
			style={{ minHeight: '100vh', width: 'auto' }}
		>
			<div className="framer-1amsqkl-container">
				<div />
			</div>
			<Navbar onOpenContact={() => setIsContactModalOpen(true)} />
			<div
				data-framer-root=""
				className="framer-Tesak framer-bsC2E framer-qHZEM framer-iDV62 framer-skiHn framer-svtWx framer-zw0SP framer-ID2Ug framer-ZZsPj framer-TZPec framer-XVrSL framer-rXNCz framer-JJ5QF framer-72rtr7"
				style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}
			>
				<Hero />
				<Benefits />
				<About />
				<MarqueeStats />
				<DarkFeatures />
				<Integrations />
				<Testimonials />
				<GalleryScrollZoom />
				<FAQ />
			</div>
			<CTASection />
			<Footer />

			{/* Contact Modal Pop-Up */}
			<ContactModal
				isOpen={isContactModalOpen}
				onClose={() => setIsContactModalOpen(false)}
			/>
		</div>
	)
}
