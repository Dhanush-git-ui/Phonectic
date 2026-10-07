import { useEffect } from 'react'

export default function UtilityModal({ isOpen, modalType, onClose, onOpenContact }) {
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape' && isOpen) {
				onClose()
			}
		}
		if (isOpen) {
			document.body.style.overflow = 'hidden'
			window.addEventListener('keydown', handleKeyDown)
		} else {
			document.body.style.overflow = ''
		}
		return () => {
			document.body.style.overflow = ''
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [isOpen, onClose])

	if (!isOpen || !modalType) return null

	const renderContent = () => {
		switch (modalType) {
			case 'terms':
				return {
					badge: 'Legal & Usage Guidelines',
					title: 'Terms of Service',
					subtitle: 'Effective Academic Year 2026 • Phonetic EduTech Platform',
					body: (
						<div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#cbd5e1', fontSize: '14px', lineHeight: 1.7 }}>
							<div>
								<h4 style={{ color: '#ffffff', fontSize: '16px', margin: '0 0 6px', fontWeight: 700 }}>
									1. Acceptance of Educational Terms
								</h4>
								<p style={{ margin: 0 }}>
									By accessing Phonetic’s placement diagnostic suite, online assessments, speed math drills, and mock company simulators, you agree to adhere to our student honor code and platform fair-usage policies.
								</p>
							</div>
							<div>
								<h4 style={{ color: '#ffffff', fontSize: '16px', margin: '0 0 6px', fontWeight: 700 }}>
									2. Assessment Integrity & Honor Code
								</h4>
								<p style={{ margin: 0 }}>
									All practice questions, TCS NQT patterns, Capgemini gamified aptitude drills, and proprietary solutions are curated for personal preparation. Redistributing question keys or reverse-engineering OA telemetry algorithms is strictly prohibited.
								</p>
							</div>
							<div>
								<h4 style={{ color: '#ffffff', fontSize: '16px', margin: '0 0 6px', fontWeight: 700 }}>
									3. Subscription & Satisfaction Guarantee
								</h4>
								<p style={{ margin: 0 }}>
									Pro Pack and Master Track subscriptions grant unrestricted access to our placement question banks and mock testing arena. A full 7-day money-back satisfaction guarantee applies to all enrolled candidates.
								</p>
							</div>
							<div>
								<h4 style={{ color: '#ffffff', fontSize: '16px', margin: '0 0 6px', fontWeight: 700 }}>
									4. Account Security & Percentiles
								</h4>
								<p style={{ margin: 0 }}>
									Student accounts are non-transferable to ensure individual speed percentiles, national rank benchmarks, and mentor diagnostic evaluations remain accurate and authentic.
								</p>
							</div>
						</div>
					),
				}

			case 'privacy':
				return {
					badge: 'Data Security & Protection',
					title: 'Privacy Policy',
					subtitle: 'Your test performance, mistakes, and personal details remain strictly confidential.',
					body: (
						<div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#cbd5e1', fontSize: '14px', lineHeight: 1.7 }}>
							<div>
								<h4 style={{ color: '#ffffff', fontSize: '16px', margin: '0 0 6px', fontWeight: 700 }}>
									1. Zero Practice Score Leakage
								</h4>
								<p style={{ margin: 0 }}>
									Your preparation drills, mock test mistakes, and individual scores are visible only to you. Phonetic never shares raw diagnostic scores or learning telemetry with unauthorized recruiters or external third parties.
								</p>
							</div>
							<div>
								<h4 style={{ color: '#ffffff', fontSize: '16px', margin: '0 0 6px', fontWeight: 700 }}>
									2. Placement Referral Consent
								</h4>
								<p style={{ margin: 0 }}>
									When you opt-in for Placement Referral alerts or company drives, only candidate-approved resume details and verified percentile certificates are shared with hiring partners.
								</p>
							</div>
							<div>
								<h4 style={{ color: '#ffffff', fontSize: '16px', margin: '0 0 6px', fontWeight: 700 }}>
									3. Bank-Grade Encryption
								</h4>
								<p style={{ margin: 0 }}>
									All aptitude telemetry, test session data, user credentials, and payment transactions are secured using standard AES-256 end-to-end encrypted protocols.
								</p>
							</div>
							<div>
								<h4 style={{ color: '#ffffff', fontSize: '16px', margin: '0 0 6px', fontWeight: 700 }}>
									4. Right to Erasure
								</h4>
								<p style={{ margin: 0 }}>
									You retain complete ownership of your data. You may request account de-identification or full deletion of your diagnostic performance history at any time.
								</p>
							</div>
						</div>
					),
				}

			case 'changelog':
				return {
					badge: 'Release Notes & Platform Updates',
					title: 'Product Changelog',
					subtitle: 'Latest features, simulator upgrades, and placement engine enhancements.',
					body: (
						<div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
							<div style={{ padding: '16px', background: 'rgba(37, 99, 235, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '16px' }}>
								<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
									<span style={{ color: '#60a5fa', fontWeight: 800, fontSize: '15px' }}>v2.5 — October 2026 (Latest)</span>
									<span style={{ fontSize: '11px', background: '#2563eb', color: '#fff', padding: '3px 8px', borderRadius: '10px', fontWeight: 700 }}>Active Release</span>
								</div>
								<ul style={{ margin: 0, paddingLeft: '18px', color: '#cbd5e1', fontSize: '13.5px', lineHeight: 1.6 }}>
									<li>Capgemini Gamified Aptitude Simulator: added 4 interactive challenge modes.</li>
									<li>National OA Percentile Leaderboard with real-time college batch ranks.</li>
									<li>Instant ATS Resume Screening benchmark engine.</li>
								</ul>
							</div>
							<div style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px' }}>
								<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
									<span style={{ color: '#f8fafc', fontWeight: 700, fontSize: '14.5px' }}>v2.4 — September 2026</span>
									<span style={{ fontSize: '11px', color: '#94a3b8' }}>Stable</span>
								</div>
								<ul style={{ margin: 0, paddingLeft: '18px', color: '#94a3b8', fontSize: '13px', lineHeight: 1.6 }}>
									<li>Speed Math Arithmetic Blitz drill with 30-second rapid-fire rounds.</li>
									<li>TCS NQT 2026 sectional cutoff predictor and repeated pattern bank.</li>
									<li>Ultra-smooth responsive Dark Mode interface.</li>
								</ul>
							</div>
							<div style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px' }}>
								<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
									<span style={{ color: '#f8fafc', fontWeight: 700, fontSize: '14.5px' }}>v2.3 — August 2026</span>
									<span style={{ fontSize: '11px', color: '#94a3b8' }}>Archived</span>
								</div>
								<ul style={{ margin: 0, paddingLeft: '18px', color: '#94a3b8', fontSize: '13px', lineHeight: 1.6 }}>
									<li>1-on-1 Mock Interview booking system with industry mentors.</li>
									<li>45 Core Data Structure & Algorithm patterns library for Tier-1 drives.</li>
								</ul>
							</div>
						</div>
					),
				}

			case 'blog':
				return {
					badge: 'Placement Intelligence',
					title: 'Editorial & Exam Playbooks',
					subtitle: 'In-depth blueprints, cutoffs, and repeated patterns for campus drives.',
					body: (
						<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
							{[
								{
									tag: 'TCS NQT 2026',
									title: 'Sectional Cutoffs & 40 Repeated Patterns',
									desc: 'Official breakdown of the scoring algorithm, negative marking rules, and the 12 most frequent DSA question templates tested for Ninja vs Prime (9 LPA) offers.',
								},
								{
									tag: 'Capgemini Assessment',
									title: 'Game-Based Aptitude: All 24 Rules Decoded',
									desc: 'Master the 4 core gamified challenges (Geo-Symmetric, Motion, Grid Challenge, Inductive Logic) to clear in under 30s per round.',
								},
								{
									tag: 'Coding Rounds',
									title: 'Top 45 DSA Patterns for Tier-1 Tech Rounds',
									desc: 'Two-Pointers, Sliding Window, Monotonic Stacks, and Tree Traversals that cover 85% of technical campus coding rounds.',
								},
							].map((item, idx) => (
								<div
									key={idx}
									style={{
										padding: '16px 20px',
										background: 'rgba(255, 255, 255, 0.03)',
										border: '1px solid rgba(255, 255, 255, 0.08)',
										borderRadius: '16px',
										display: 'flex',
										flexDirection: 'column',
										gap: '6px',
									}}
								>
									<span style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
										{item.tag}
									</span>
									<h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700, margin: 0 }}>
										{item.title}
									</h4>
									<p style={{ color: '#94a3b8', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
										{item.desc}
									</p>
								</div>
							))}
						</div>
					),
				}

			case 'careers':
			case 'jobs':
			default:
				return {
					badge: "We're Hiring!",
					title: 'Careers at Phonetic',
					subtitle: 'Help millions of college students achieve their dream campus placements.',
					body: (
						<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
							{[
								{
									title: 'Campus Growth & Partnerships Lead',
									type: 'Full-Time • Hybrid (Hyderabad / Bengaluru)',
									desc: 'Build partnerships across 150+ premier engineering colleges, placement cells, and technical student clubs across India.',
								},
								{
									title: 'Lead Quantitative Aptitude Trainer',
									type: 'Full-Time / Flexible Remote',
									desc: 'Curate high-speed mental math shortcuts, aptitude modules, and company-specific video solution breakdowns.',
								},
								{
									title: 'Full-Stack Software Engineer (React / Vite)',
									type: 'Full-Time • Hyderabad',
									desc: 'Architect our live assessment game arena, real-time leaderboard sockets, and interactive code diagnostic engine.',
								},
							].map((role, idx) => (
								<div
									key={idx}
									style={{
										padding: '16px 20px',
										background: 'rgba(255, 255, 255, 0.03)',
										border: '1px solid rgba(255, 255, 255, 0.08)',
										borderRadius: '16px',
										display: 'flex',
										flexDirection: 'column',
										gap: '6px',
									}}
								>
									<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
										<h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700, margin: 0 }}>
											{role.title}
										</h4>
										<span style={{ fontSize: '11.5px', color: '#38bdf8', fontWeight: 600 }}>
											{role.type}
										</span>
									</div>
									<p style={{ color: '#94a3b8', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
										{role.desc}
									</p>
								</div>
							))}
							<div style={{ textAlign: 'center', marginTop: '12px' }}>
								<button
									type="button"
									onClick={() => {
										onClose()
										if (onOpenContact) onOpenContact()
										else window.dispatchEvent(new CustomEvent('open-contact-modal'))
									}}
									style={{
										background: 'linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%)',
										color: '#ffffff',
										border: 'none',
										padding: '12px 28px',
										borderRadius: '999px',
										fontSize: '14px',
										fontWeight: 700,
										cursor: 'pointer',
										boxShadow: '0 8px 24px rgba(37, 99, 235, 0.4)',
										transition: 'all 0.2s ease',
									}}
								>
									Apply via Concierge
								</button>
							</div>
						</div>
					),
				}
		}
	}

	const { badge, title, subtitle, body } = renderContent()

	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				backgroundColor: 'rgba(2, 6, 23, 0.85)',
				backdropFilter: 'blur(16px)',
				WebkitBackdropFilter: 'blur(16px)',
				zIndex: 99999,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '16px',
				boxSizing: 'border-box',
				animation: 'modalFadeIn 0.25s ease-out forwards',
			}}
			onClick={onClose}
		>
			<div
				style={{
					backgroundColor: '#0c111d',
					border: '1px solid rgba(255, 255, 255, 0.12)',
					boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(59, 130, 246, 0.15)',
					borderRadius: '28px',
					maxWidth: '640px',
					width: '100%',
					maxHeight: 'min(85vh, 720px)',
					display: 'flex',
					flexDirection: 'column',
					overflow: 'hidden',
					position: 'relative',
					animation: 'modalScaleUp 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				}}
				onClick={(e) => e.stopPropagation()}
			>
				{/* Modal Top Bar */}
				<div
					style={{
						padding: '24px 28px 16px',
						borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
						display: 'flex',
						alignItems: 'flex-start',
						justifyContent: 'space-between',
						gap: '16px',
					}}
				>
					<div>
						<div
							style={{
								display: 'inline-block',
								fontSize: '11px',
								fontWeight: 800,
								letterSpacing: '0.08em',
								textTransform: 'uppercase',
								color: '#38bdf8',
								background: 'rgba(56, 189, 248, 0.1)',
								border: '1px solid rgba(56, 189, 248, 0.25)',
								borderRadius: '999px',
								padding: '4px 12px',
								marginBottom: '10px',
							}}
						>
							{badge}
						</div>
						<h3
							style={{
								fontSize: '24px',
								fontWeight: 800,
								color: '#ffffff',
								margin: '0 0 6px',
								fontFamily: '"Outfit", "Inter", sans-serif',
								letterSpacing: '-0.02em',
							}}
						>
							{title}
						</h3>
						<p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: 1.4 }}>
							{subtitle}
						</p>
					</div>

					{/* Close Button */}
					<button
						type="button"
						onClick={onClose}
						style={{
							background: 'rgba(255, 255, 255, 0.06)',
							border: '1px solid rgba(255, 255, 255, 0.1)',
							borderRadius: '50%',
							width: '36px',
							height: '36px',
							minWidth: '36px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: 'pointer',
							color: '#94a3b8',
							fontSize: '18px',
							transition: 'all 0.2s ease',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'
							e.currentTarget.style.color = '#ffffff'
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)'
							e.currentTarget.style.color = '#94a3b8'
						}}
						aria-label="Close modal"
					>
						✕
					</button>
				</div>

				{/* Modal Scrollable Body */}
				<div
					style={{
						padding: '24px 28px 28px',
						overflowY: 'auto',
						flex: 1,
					}}
				>
					{body}
				</div>
			</div>
		</div>
	)
}
