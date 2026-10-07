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
					title: 'TERMS OF SERVICE',
					subtitle: 'Effective Academic Year 2026 • Phonetic EduTech Platform',
					body: (
						<div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
							{[
								{
									title: '1. Acceptance of Educational Terms',
									desc: 'By accessing Phonetic’s placement diagnostic suite, online assessments, speed math drills, and mock company simulators, you agree to adhere to our student honor code and platform fair-usage policies.',
								},
								{
									title: '2. Assessment Integrity & Honor Code',
									desc: 'All practice questions, TCS NQT patterns, Capgemini gamified aptitude drills, and proprietary solutions are curated for personal preparation. Redistributing question keys or reverse-engineering OA telemetry algorithms is strictly prohibited.',
								},
								{
									title: '3. Subscription & Satisfaction Guarantee',
									desc: 'Pro Pack and Master Track subscriptions grant unrestricted access to our placement question banks and mock testing arena. A full 7-day money-back satisfaction guarantee applies to all enrolled candidates.',
								},
								{
									title: '4. Account Security & Percentiles',
									desc: 'Student accounts are non-transferable to ensure individual speed percentiles, national rank benchmarks, and mentor diagnostic evaluations remain accurate and authentic.',
								},
							].map((item, idx) => (
								<div
									key={idx}
									style={{
										padding: '16px 18px',
										background: '#edf2f9',
										border: '1px solid #d9e3f1',
										borderRadius: '14px',
									}}
								>
									<h4 style={{ color: '#0f172a', fontSize: '14.5px', margin: '0 0 6px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
										{item.title}
									</h4>
									<p style={{ margin: 0, color: '#475569', fontSize: '13px', lineHeight: 1.6, fontWeight: 500 }}>
										{item.desc}
									</p>
								</div>
							))}
						</div>
					),
				}

			case 'privacy':
				return {
					badge: 'Data Security & Protection',
					title: 'PRIVACY POLICY',
					subtitle: 'Your test performance, mistakes, and personal details remain strictly confidential.',
					body: (
						<div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
							{[
								{
									title: '1. Zero Practice Score Leakage',
									desc: 'Your preparation drills, mock test mistakes, and individual scores are visible only to you. Phonetic never shares raw diagnostic scores or learning telemetry with unauthorized recruiters or external third parties.',
								},
								{
									title: '2. Placement Referral Consent',
									desc: 'When you opt-in for Placement Referral alerts or company drives, only candidate-approved resume details and verified percentile certificates are shared with hiring partners.',
								},
								{
									title: '3. Bank-Grade Encryption',
									desc: 'All aptitude telemetry, test session data, user credentials, and payment transactions are secured using standard AES-256 end-to-end encrypted protocols.',
								},
								{
									title: '4. Right to Erasure',
									desc: 'You retain complete ownership of your data. You may request account de-identification or full deletion of your diagnostic performance history at any time.',
								},
							].map((item, idx) => (
								<div
									key={idx}
									style={{
										padding: '16px 18px',
										background: '#edf2f9',
										border: '1px solid #d9e3f1',
										borderRadius: '14px',
									}}
								>
									<h4 style={{ color: '#0f172a', fontSize: '14.5px', margin: '0 0 6px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
										{item.title}
									</h4>
									<p style={{ margin: 0, color: '#475569', fontSize: '13px', lineHeight: 1.6, fontWeight: 500 }}>
										{item.desc}
									</p>
								</div>
							))}
						</div>
					),
				}

			case 'changelog':
				return {
					badge: 'Release Notes & Platform Updates',
					title: 'PRODUCT CHANGELOG',
					subtitle: 'Latest features, simulator upgrades, and placement engine enhancements.',
					body: (
						<div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
							<div style={{ padding: '16px 18px', background: '#edf2f9', border: '1.5px solid #2563eb', borderRadius: '14px' }}>
								<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
									<span style={{ color: '#1e40af', fontWeight: 800, fontSize: '14.5px', textTransform: 'uppercase' }}>v2.5 — October 2026 (Latest)</span>
									<span style={{ fontSize: '11px', background: '#2563eb', color: '#fff', padding: '3px 8px', borderRadius: '6px', fontWeight: 700 }}>Active Release</span>
								</div>
								<ul style={{ margin: 0, paddingLeft: '18px', color: '#334155', fontSize: '13px', lineHeight: 1.6, fontWeight: 500 }}>
									<li>Capgemini Gamified Aptitude Simulator: added 4 interactive challenge modes.</li>
									<li>National OA Percentile Leaderboard with real-time college batch ranks.</li>
									<li>Instant ATS Resume Screening benchmark engine.</li>
								</ul>
							</div>
							<div style={{ padding: '16px 18px', background: '#edf2f9', border: '1px solid #d9e3f1', borderRadius: '14px' }}>
								<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
									<span style={{ color: '#0f172a', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase' }}>v2.4 — September 2026</span>
									<span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>Stable</span>
								</div>
								<ul style={{ margin: 0, paddingLeft: '18px', color: '#475569', fontSize: '13px', lineHeight: 1.6, fontWeight: 500 }}>
									<li>Speed Math Arithmetic Blitz drill with 30-second rapid-fire rounds.</li>
									<li>TCS NQT 2026 sectional cutoff predictor and repeated pattern bank.</li>
									<li>Clean responsive light interface styling.</li>
								</ul>
							</div>
							<div style={{ padding: '16px 18px', background: '#edf2f9', border: '1px solid #d9e3f1', borderRadius: '14px' }}>
								<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
									<span style={{ color: '#0f172a', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase' }}>v2.3 — August 2026</span>
									<span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>Archived</span>
								</div>
								<ul style={{ margin: 0, paddingLeft: '18px', color: '#475569', fontSize: '13px', lineHeight: 1.6, fontWeight: 500 }}>
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
					title: 'EDITORIAL & EXAM PLAYBOOKS',
					subtitle: 'In-depth blueprints, cutoffs, and repeated patterns for campus drives.',
					body: (
						<div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
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
										padding: '16px 18px',
										background: '#edf2f9',
										border: '1px solid #d9e3f1',
										borderRadius: '14px',
										display: 'flex',
										flexDirection: 'column',
										gap: '4px',
									}}
								>
									<span style={{ fontSize: '11px', color: '#2563eb', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
										{item.tag}
									</span>
									<h4 style={{ color: '#0f172a', fontSize: '14.5px', fontWeight: 800, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
										{item.title}
									</h4>
									<p style={{ color: '#475569', fontSize: '13px', margin: 0, lineHeight: 1.55, fontWeight: 500 }}>
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
					badge: "WE'RE HIRING!",
					title: 'CAREERS AT PHONETIC',
					subtitle: 'Help millions of college students achieve their dream campus placements.',
					body: (
						<div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
							{[
								{
									title: 'CAMPUS GROWTH & PARTNERSHIPS LEAD',
									type: 'Full-Time • Hybrid (Hyderabad / Bengaluru)',
									desc: 'Build partnerships across 150+ premier engineering colleges, placement cells, and technical student clubs across India.',
								},
								{
									title: 'LEAD QUANTITATIVE APTITUDE TRAINER',
									type: 'Full-Time / Flexible Remote',
									desc: 'Curate high-speed mental math shortcuts, aptitude modules, and company-specific video solution breakdowns.',
								},
								{
									title: 'FULL-STACK SOFTWARE ENGINEER (REACT / VITE)',
									type: 'Full-Time • Hyderabad',
									desc: 'Architect our live assessment game arena, real-time leaderboard sockets, and interactive code diagnostic engine.',
								},
							].map((role, idx) => (
								<div
									key={idx}
									style={{
										padding: '16px 20px',
										background: '#edf2f9',
										border: '1px solid #d9e3f1',
										borderRadius: '14px',
										display: 'flex',
										flexDirection: 'column',
										gap: '6px',
										transition: 'all 0.15s ease',
									}}
								>
									<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
										<h4 style={{ color: '#0f172a', fontSize: '13.5px', fontWeight: 800, margin: 0, textTransform: 'uppercase', letterSpacing: '0.01em' }}>
											{role.title}
										</h4>
										<span style={{ fontSize: '11.5px', color: '#2563eb', fontWeight: 700 }}>
											{role.type}
										</span>
									</div>
									<p style={{ color: '#475569', fontSize: '13px', margin: 0, lineHeight: 1.5, fontWeight: 500 }}>
										{role.desc}
									</p>
								</div>
							))}
							<div style={{ textAlign: 'center', marginTop: '10px' }}>
								<button
									type="button"
									onClick={() => {
										onClose()
										if (onOpenContact) onOpenContact()
										else window.dispatchEvent(new CustomEvent('open-contact-modal'))
									}}
									style={{
										background: '#2563eb',
										color: '#ffffff',
										border: 'none',
										padding: '12px 32px',
										borderRadius: '10px',
										fontSize: '14px',
										fontWeight: 700,
										cursor: 'pointer',
										boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
										transition: 'all 0.18s ease',
										fontFamily: 'inherit',
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = '#1d4ed8'
										e.currentTarget.style.transform = 'translateY(-1px)'
										e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.45)'
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = '#2563eb'
										e.currentTarget.style.transform = 'translateY(0)'
										e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 99, 235, 0.35)'
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
			role="dialog"
			aria-modal="true"
			data-modal="true"
			style={{
				position: 'fixed',
				inset: 0,
				width: '100vw',
				height: '100vh',
				backgroundColor: 'rgba(15, 23, 42, 0.65)',
				backdropFilter: 'blur(8px)',
				WebkitBackdropFilter: 'blur(8px)',
				zIndex: 99999,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '20px',
				boxSizing: 'border-box',
				animation: 'modalFadeIn 0.2s ease-out forwards',
				fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
			}}
			onClick={onClose}
		>
			<style>{`
				@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
				@keyframes modalFadeIn {
					from { opacity: 0; }
					to { opacity: 1; }
				}
				@keyframes modalScaleUp {
					from { opacity: 0; transform: translateY(16px); }
					to { opacity: 1; transform: translateY(0); }
				}
			`}</style>

			<div
				data-modal="true"
				style={{
					backgroundColor: '#ffffff',
					border: '1px solid #e2e8f0',
					boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(226, 232, 240, 0.8)',
					borderRadius: '24px',
					maxWidth: '620px',
					width: '100%',
					maxHeight: 'min(90vh, 720px)',
					display: 'flex',
					flexDirection: 'column',
					overflow: 'hidden',
					position: 'relative',
					animation: 'modalScaleUp 0.22s cubic-bezier(0.22, 1, 0.36, 1) forwards',
					padding: '28px 30px 26px',
					boxSizing: 'border-box',
				}}
				onClick={(e) => e.stopPropagation()}
			>
				{/* Modal Header */}
				<div
					style={{
						display: 'flex',
						alignItems: 'flex-start',
						justifyContent: 'space-between',
						gap: '16px',
						marginBottom: '20px',
					}}
				>
					<div>
						<div
							style={{
								display: 'inline-block',
								fontSize: '11px',
								fontWeight: 800,
								letterSpacing: '0.06em',
								textTransform: 'uppercase',
								color: '#1e40af',
								background: '#dbeafe',
								border: '1px solid #bfdbfe',
								borderRadius: '999px',
								padding: '4px 12px',
								marginBottom: '10px',
							}}
						>
							{badge}
						</div>
						<h3
							style={{
								fontSize: '23px',
								fontWeight: 900,
								color: '#0f172a',
								margin: '0 0 6px',
								letterSpacing: '-0.025em',
								textTransform: 'uppercase',
							}}
						>
							{title}
						</h3>
						<p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.45, fontWeight: 500 }}>
							{subtitle}
						</p>
					</div>

					{/* Close Button */}
					<button
						type="button"
						onClick={onClose}
						style={{
							width: '32px',
							height: '32px',
							minWidth: '32px',
							borderRadius: '50%',
							background: '#f1f5f9',
							border: '1px solid #e2e8f0',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: 'pointer',
							color: '#475569',
							transition: 'all 0.15s ease',
							outline: 'none',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.backgroundColor = '#e2e8f0'
							e.currentTarget.style.color = '#0f172a'
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.backgroundColor = '#f1f5f9'
							e.currentTarget.style.color = '#475569'
						}}
						aria-label="Close modal"
					>
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.4"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</button>
				</div>

				{/* Modal Scrollable Body */}
				<div
					style={{
						overflowY: 'auto',
						flex: 1,
						paddingRight: '2px',
					}}
				>
					{body}
				</div>
			</div>
		</div>
	)
}
