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
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import UtilityModal from './components/UtilityModal.jsx'
import { useScrollAnimations } from './utils/scrollAnimations.js'

export default function App() {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false)
	const [utilityModal, setUtilityModal] = useState(null)
	const [logoutToast, setLogoutToast] = useState(false)
	useScrollAnimations()

	useEffect(() => {
		const handleOpenContact = () => setIsContactModalOpen(true)
		const handleOpenUtility = (e) => {
			const type = (e && e.detail) || 'careers'
			setUtilityModal(type)
		}

		let logoutTimer
		const handleLogout = () => {
			setLogoutToast(true)
			clearTimeout(logoutTimer)
			logoutTimer = setTimeout(() => {
				setLogoutToast(false)
			}, 3500)
		}

		window.addEventListener('open-contact-modal', handleOpenContact)
		window.addEventListener('open-utility-modal', handleOpenUtility)
		window.addEventListener('show-logout-toast', handleLogout)

		// Universal click handler: route every link/button to interactive destination
		const handleGlobalClick = (e) => {
			// CRUCIAL: Never intercept clicks inside modals, dialogs, or close buttons!
			if (e.target.closest('[data-modal], [role="dialog"], .modal-portal, [data-close-modal], button[aria-label="Close"], button[type="submit"]')) {
				return
			}

			const link = e.target.closest('a, button')
			if (!link) return

			// Also bypass any button inside forms or with data-no-intercept
			if (link.closest('form') || link.hasAttribute('data-no-intercept') || link.hasAttribute('data-close-modal')) {
				return
			}

			// 1. Logout button handling
			if (
				link.hasAttribute('data-logout-btn') ||
				link.getAttribute('href') === '#logout' ||
				(link.textContent || '').trim().toLowerCase() === 'logout'
			) {
				e.preventDefault()
				e.stopPropagation()
				handleLogout()
				return
			}

			// 2. Utility modal triggers (careers, jobs, changelog, terms, privacy)
			const utilityType = link.getAttribute('data-open-utility')
			const href = link.getAttribute('href') || ''
			const text = (link.textContent || '').trim().toLowerCase()

			if (utilityType) {
				e.preventDefault()
				e.stopPropagation()
				setUtilityModal(utilityType)
				return
			}

			if (href === '#terms' || text === 'terms of service' || text === 'terms') {
				e.preventDefault()
				e.stopPropagation()
				setUtilityModal('terms')
				return
			}

			if (href === '#privacy' || text === 'privacy policy' || text === 'privacy') {
				e.preventDefault()
				e.stopPropagation()
				setUtilityModal('privacy')
				return
			}

			if (href === '#changelog' || text === 'changelog') {
				e.preventDefault()
				e.stopPropagation()
				setUtilityModal('changelog')
				return
			}

			if (href === '#careers' || text === 'careers' || text === 'job post' || href.includes('careers')) {
				e.preventDefault()
				e.stopPropagation()
				setUtilityModal('careers')
				return
			}

			// 3. Contact modal triggers
			const isOpenContact =
				link.hasAttribute('data-open-contact') ||
				href === '#contact' ||
				href.includes('contact') ||
				text.includes('contact') ||
				text === 'support' ||
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

			// 4. Blog & Blog Post click handler
			if (link.hasAttribute('data-open-blog') || href === '#blog' || text === 'blog' || text === 'blog post') {
				e.preventDefault()
				e.stopPropagation()
				setUtilityModal('blog')
				return
			}

			// 5. In-page hash link scrolling
			if (href.startsWith('#') && href.length > 1) {
				const targetId = href.substring(1)
				const targetEl =
					document.getElementById(targetId) ||
					document.querySelector(`[data-framer-name="${targetId}"]`) ||
					document.querySelector(`[data-framer-name="${targetId.toLowerCase()}"]`) ||
					(targetId === 'features' ? document.getElementById('features') || document.querySelector('[data-framer-name="darkfeatures"]') : null)

				if (targetEl) {
					e.preventDefault()
					e.stopPropagation()
					targetEl.scrollIntoView({ behavior: 'smooth' })
					return
				}
			}

			// 6. Block dummy anchor links ONLY (never block buttons)
			if (link.tagName === 'A' && (href === '#' || href === '' || href.startsWith('http') || href.startsWith('.'))) {
				e.preventDefault()
				e.stopPropagation()
			}
		}

		document.addEventListener('click', handleGlobalClick, { capture: true })

		return () => {
			window.removeEventListener('open-contact-modal', handleOpenContact)
			window.removeEventListener('open-utility-modal', handleOpenUtility)
			window.removeEventListener('show-logout-toast', handleLogout)
			document.removeEventListener('click', handleGlobalClick, { capture: true })
			clearTimeout(logoutTimer)
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
				<Pricing />
				<FAQ />
			</div>
			<CTASection />
			<Footer />

			{/* Contact Modal Pop-Up */}
			<ContactModal
				isOpen={isContactModalOpen}
				onClose={() => setIsContactModalOpen(false)}
			/>

			{/* Utility Modal Pop-Up (Careers, Jobs, Changelog, Terms, Privacy) */}
			<UtilityModal
				isOpen={!!utilityModal}
				modalType={utilityModal}
				onClose={() => setUtilityModal(null)}
				onOpenContact={() => {
					setUtilityModal(null)
					setIsContactModalOpen(true)
				}}
			/>

			{/* Logout Toast Notification */}
			{logoutToast && (
				<div
					style={{
						position: 'fixed',
						bottom: '28px',
						right: '28px',
						zIndex: 99999,
						display: 'flex',
						alignItems: 'center',
						gap: '12px',
						padding: '14px 20px',
						borderRadius: '16px',
						background: 'rgba(15, 23, 42, 0.95)',
						border: '1px solid rgba(56, 189, 248, 0.35)',
						backdropFilter: 'blur(20px)',
						WebkitBackdropFilter: 'blur(20px)',
						boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(56, 189, 248, 0.2)',
						color: '#ffffff',
						fontFamily: '"Outfit", "Inter", sans-serif',
						animation: 'fadeInUp 0.3s ease forwards',
					}}
				>
					<div
						style={{
							width: '32px',
							height: '32px',
							borderRadius: '10px',
							background: 'rgba(56, 189, 248, 0.15)',
							border: '1px solid rgba(56, 189, 248, 0.3)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: '#38bdf8',
						}}
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
							<polyline points="16 17 21 12 16 7"></polyline>
							<line x1="21" y1="12" x2="9" y2="12"></line>
						</svg>
					</div>
					<div>
						<div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>Session Terminated</div>
						<div style={{ fontSize: '12px', color: '#94a3b8' }}>You have been logged out securely.</div>
					</div>
					<button
						onClick={() => setLogoutToast(false)}
						style={{
							background: 'none',
							border: 'none',
							color: '#94a3b8',
							cursor: 'pointer',
							padding: '4px',
							marginLeft: '8px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="18" y1="6" x2="6" y2="18"></line>
							<line x1="6" y1="6" x2="18" y2="18"></line>
						</svg>
					</button>
				</div>
			)}
		</div>
	)
}
