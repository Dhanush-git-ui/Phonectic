import { useState, useEffect } from 'react'

const TRACKS = [
	{ id: 'aptitude', label: 'Speed Math & Logic', icon: '⚡' },
	{ id: 'campus-oa', label: 'TCS / Accenture OA', icon: '🎯' },
	{ id: 'mock', label: '1-on-1 Mock Interview', icon: '🧑‍💻' },
	{ id: 'college', label: 'College Partnerships', icon: '🤝' },
]

export default function ContactModal({ isOpen, onClose }) {
	const [selectedTrack, setSelectedTrack] = useState('aptitude')
	const [formData, setFormData] = useState({
		name: '',
		contactInfo: '',
		college: '',
		message: '',
	})
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [copiedField, setCopiedField] = useState(null)

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
			setIsSubmitted(false)
		}
		return () => {
			document.body.style.overflow = ''
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	const handleCopy = (text, field, e) => {
		if (e) e.stopPropagation()
		navigator.clipboard.writeText(text)
		setCopiedField(field)
		setTimeout(() => setCopiedField(null), 2200)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setIsSubmitted(true)
	}

	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				backgroundColor: 'rgba(15, 23, 42, 0.45)',
				backdropFilter: 'blur(20px)',
				WebkitBackdropFilter: 'blur(20px)',
				zIndex: 999999,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '20px',
				boxSizing: 'border-box',
				animation: 'modalBackdropFade 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, sans-serif',
			}}
			onClick={onClose}
		>
			<style>{`
				@keyframes modalBackdropFade {
					from { opacity: 0; }
					to { opacity: 1; }
				}
				@keyframes modalFloatPop {
					from { opacity: 0; transform: translateY(28px) scale(0.95); }
					to { opacity: 1; transform: translateY(0) scale(1); }
				}
				@keyframes liveGlowGreen {
					0%, 100% { transform: scale(1); opacity: 1; }
					50% { transform: scale(1.35); opacity: 0.5; }
				}
				.phonetic-input-light {
					width: 100%;
					background: #f8fafc;
					border: 1.5px solid #e2e8f0;
					border-radius: 14px;
					padding: 12px 14px;
					font-size: 13.5px;
					color: #0f172a;
					outline: none;
					transition: all 0.2s ease;
					font-family: inherit;
					box-sizing: border-box;
				}
				.phonetic-input-light::placeholder {
					color: #94a3b8;
				}
				.phonetic-input-light:focus {
					background: #ffffff;
					border-color: #2563eb;
					box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
				}
				.hover-channel-card {
					transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, border-color 0.2s ease;
				}
				.hover-channel-card:hover {
					transform: translateY(-2px);
					box-shadow: 0 10px 24px rgba(37, 99, 235, 0.12);
					border-color: #93c5fd;
				}
			`}</style>

			{/* Main Sky Capsule Shell Matching OneFin / Phonectic Design System */}
			<div
				onClick={(e) => e.stopPropagation()}
				style={{
					position: 'relative',
					width: '100%',
					maxWidth: '880px',
					maxHeight: '92vh',
					overflowY: 'auto',
					background: 'linear-gradient(165deg, #eff6ff 0%, #dbeafe 40%, #e0f2fe 100%)',
					borderRadius: '36px',
					border: '2px solid rgba(255, 255, 255, 0.85)',
					boxShadow:
						'0 32px 90px -10px rgba(29, 78, 216, 0.25), 0 10px 30px rgba(0, 0, 0, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.9)',
					padding: '30px 28px',
					animation: 'modalFloatPop 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
					boxSizing: 'border-box',
				}}
			>
				{/* Top Bar with Badge and Close Pill */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginBottom: '20px',
						position: 'relative',
						zIndex: 5,
					}}
				>
					{/* Dark Beveled Header Pill Matching Hero / Navbar Badges */}
					<div
						style={{
							display: 'inline-flex',
							alignItems: 'center',
							gap: '8px',
							padding: '6px 16px',
							borderRadius: '999px',
							backgroundColor: '#090d16',
							color: '#ffffff',
							fontSize: '11.5px',
							fontWeight: 800,
							letterSpacing: '0.04em',
							textTransform: 'uppercase',
							boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
						}}
					>
						<span
							style={{
								width: '7px',
								height: '7px',
								borderRadius: '50%',
								backgroundColor: '#22c55e',
								boxShadow: '0 0 10px #22c55e',
								display: 'inline-block',
								animation: 'liveGlowGreen 2s ease-in-out infinite',
							}}
						/>
						<span>Phonetic Placement Concierge</span>
					</div>

					{/* Close Circular Button */}
					<button
						onClick={onClose}
						type="button"
						aria-label="Close"
						style={{
							width: '38px',
							height: '38px',
							borderRadius: '50%',
							backgroundColor: '#ffffff',
							border: '1.5px solid rgba(255, 255, 255, 0.9)',
							boxShadow: '0 4px 12px rgba(15, 23, 42, 0.1)',
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: '#475569',
							transition: 'all 0.2s ease',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.backgroundColor = '#0f172a'
							e.currentTarget.style.color = '#ffffff'
							e.currentTarget.style.transform = 'rotate(90deg)'
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.backgroundColor = '#ffffff'
							e.currentTarget.style.color = '#475569'
							e.currentTarget.style.transform = 'rotate(0deg)'
						}}
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</button>
				</div>

				{/* Two Split Floating Cards Grid */}
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
						gap: '20px',
						position: 'relative',
						zIndex: 5,
					}}
				>
					{/* LEFT CARD: Mentor Hotline & Fast Access Channels */}
					<div
						style={{
							backgroundColor: '#ffffff',
							borderRadius: '26px',
							padding: '28px 24px',
							boxShadow: '0 12px 32px rgba(29, 78, 216, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)',
							border: '1px solid rgba(255, 255, 255, 0.9)',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}
					>
						<div>
							<div
								style={{
									fontSize: '11px',
									fontWeight: 800,
									color: '#2563eb',
									letterSpacing: '0.08em',
									textTransform: 'uppercase',
									marginBottom: '6px',
								}}
							>
								Direct Mentor Line
							</div>
							<h3
								style={{
									margin: '0 0 8px',
									fontFamily: '"Roboto Condensed", sans-serif',
									fontSize: 'clamp(26px, 3.2vw, 34px)',
									fontWeight: 900,
									textTransform: 'uppercase',
									letterSpacing: '-0.035em',
									lineHeight: 1.05,
									color: '#0f172a',
								}}
							>
								Talk with Us.
							</h3>
							<p style={{ margin: '0 0 20px', fontSize: '13px', color: '#64748b', lineHeight: 1.55 }}>
								Reach our placement heads in Hyderabad directly for doubts on campus syllabus, test series, or batch enrollments.
							</p>

							{/* Channel 1: WhatsApp & Helpline */}
							<div
								className="hover-channel-card"
								onClick={(e) => handleCopy('+91 91000 88888', 'phone', e)}
								style={{
									padding: '12px 14px',
									borderRadius: '16px',
									backgroundColor: '#f0fdf4',
									border: '1.5px solid #bbf7d0',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									marginBottom: '10px',
									cursor: 'pointer',
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
									<div
										style={{
											width: '36px',
											height: '36px',
											borderRadius: '10px',
											backgroundColor: '#22c55e',
											color: '#ffffff',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											flexShrink: 0,
										}}
									>
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
										</svg>
									</div>
									<div>
										<div style={{ fontSize: '10px', fontWeight: 800, color: '#166534', textTransform: 'uppercase' }}>
											Helpline &amp; WhatsApp
										</div>
										<div style={{ fontSize: '13.5px', fontWeight: 900, color: '#14532d' }}>
											+91 91000 88888
										</div>
									</div>
								</div>
								<span
									style={{
										fontSize: '11px',
										fontWeight: 800,
										padding: '4px 10px',
										borderRadius: '999px',
										backgroundColor: copiedField === 'phone' ? '#15803d' : '#ffffff',
										color: copiedField === 'phone' ? '#ffffff' : '#166534',
										boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)',
										transition: 'all 0.2s ease',
									}}
								>
									{copiedField === 'phone' ? 'Copied!' : 'Copy'}
								</span>
							</div>

							{/* Channel 2: Email Desk */}
							<div
								className="hover-channel-card"
								onClick={(e) => handleCopy('support@phoneticedu.com', 'email', e)}
								style={{
									padding: '12px 14px',
									borderRadius: '16px',
									backgroundColor: '#eff6ff',
									border: '1.5px solid #bfdbfe',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									marginBottom: '10px',
									cursor: 'pointer',
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
									<div
										style={{
											width: '36px',
											height: '36px',
											borderRadius: '10px',
											backgroundColor: '#2563eb',
											color: '#ffffff',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											flexShrink: 0,
										}}
									>
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
											<polyline points="22,6 12,13 2,6" />
										</svg>
									</div>
									<div>
										<div style={{ fontSize: '10px', fontWeight: 800, color: '#1e40af', textTransform: 'uppercase' }}>
											Advisory Desk
										</div>
										<div style={{ fontSize: '13.5px', fontWeight: 900, color: '#1e3a8a' }}>
											support@phoneticedu.com
										</div>
									</div>
								</div>
								<span
									style={{
										fontSize: '11px',
										fontWeight: 800,
										padding: '4px 10px',
										borderRadius: '999px',
										backgroundColor: copiedField === 'email' ? '#1d4ed8' : '#ffffff',
										color: copiedField === 'email' ? '#ffffff' : '#1d4ed8',
										boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)',
										transition: 'all 0.2s ease',
									}}
								>
									{copiedField === 'email' ? 'Copied!' : 'Copy'}
								</span>
							</div>

							{/* Channel 3: Hyderabad Training Hub */}
							<div
								style={{
									padding: '12px 14px',
									borderRadius: '16px',
									backgroundColor: '#fff7ed',
									border: '1.5px solid #fed7aa',
									display: 'flex',
									alignItems: 'center',
									gap: '12px',
								}}
							>
								<div
									style={{
										width: '36px',
										height: '36px',
										borderRadius: '10px',
										backgroundColor: '#ea580c',
										color: '#ffffff',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										flexShrink: 0,
									}}
								>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
										<circle cx="12" cy="10" r="3" />
									</svg>
								</div>
								<div>
									<div style={{ fontSize: '10px', fontWeight: 800, color: '#9a3412', textTransform: 'uppercase' }}>
										Headquarters &amp; Hub
									</div>
									<div style={{ fontSize: '13px', fontWeight: 800, color: '#7c2d12' }}>
										Hyderabad, Telangana, India
									</div>
								</div>
							</div>
						</div>

						{/* Bottom Guarantee Pill */}
						<div
							style={{
								marginTop: '18px',
								padding: '10px 14px',
								borderRadius: '14px',
								backgroundColor: '#f8fafc',
								border: '1px solid #e2e8f0',
								fontSize: '11.5px',
								color: '#475569',
								display: 'flex',
								alignItems: 'center',
								gap: '8px',
							}}
						>
							<span style={{ fontSize: '14px' }}>⚡</span>
							<span><strong>Response SLA:</strong> Mon – Sat (9AM – 8PM IST) · Average response &lt; 15 mins</span>
						</div>
					</div>

					{/* RIGHT CARD: Instant Callback / Request Form */}
					<div
						style={{
							backgroundColor: '#ffffff',
							borderRadius: '26px',
							padding: '28px 24px',
							boxShadow: '0 12px 32px rgba(29, 78, 216, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)',
							border: '1px solid rgba(255, 255, 255, 0.9)',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}
					>
						{isSubmitted ? (
							<div
								style={{
									height: '100%',
									minHeight: '340px',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									padding: '20px',
								}}
							>
								<div
									style={{
										width: '58px',
										height: '58px',
										borderRadius: '50%',
										background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
										color: '#ffffff',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										fontSize: '26px',
										fontWeight: 900,
										marginBottom: '16px',
										boxShadow: '0 8px 24px rgba(34, 197, 94, 0.35)',
									}}
								>
									✓
								</div>
								<h3
									style={{
										margin: '0 0 6px',
										fontFamily: '"Roboto Condensed", sans-serif',
										fontSize: '24px',
										fontWeight: 900,
										textTransform: 'uppercase',
										color: '#0f172a',
									}}
								>
									Inquiry Received!
								</h3>
								<p style={{ margin: '0 0 20px', fontSize: '13.5px', color: '#64748b', lineHeight: 1.5, maxWidth: '290px' }}>
									Thank you, <strong>{formData.name || 'Aspirant'}</strong>. A PhoneticEdu mentor will connect with you via WhatsApp/Call shortly.
								</p>
								<button
									type="button"
									onClick={() => setIsSubmitted(false)}
									style={{
										backgroundColor: '#0f172a',
										color: '#ffffff',
										border: 'none',
										padding: '9px 20px',
										borderRadius: '12px',
										fontSize: '12px',
										fontWeight: 800,
										cursor: 'pointer',
									}}
								>
									Send another message
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
								{/* Track Selection Chips */}
								<div>
									<label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
										Select Your Preparation Track
									</label>
									<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
										{TRACKS.map((track) => {
											const isSelected = selectedTrack === track.id
											return (
												<button
													key={track.id}
													type="button"
													onClick={() => setSelectedTrack(track.id)}
													style={{
														padding: '8px 10px',
														borderRadius: '12px',
														fontSize: '11.5px',
														fontWeight: isSelected ? 800 : 600,
														backgroundColor: isSelected ? '#dbeafe' : '#f8fafc',
														border: isSelected ? '1.5px solid #2563eb' : '1px solid #e2e8f0',
														color: isSelected ? '#1d4ed8' : '#64748b',
														cursor: 'pointer',
														textAlign: 'left',
														display: 'flex',
														alignItems: 'center',
														gap: '6px',
														transition: 'all 0.2s ease',
														boxShadow: isSelected ? '0 2px 8px rgba(37, 99, 235, 0.15)' : 'none',
													}}
												>
													<span>{track.icon}</span>
													<span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{track.label}</span>
												</button>
											)
										})}
									</div>
								</div>

								{/* Full Name Input */}
								<div>
									<label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
										Full Name *
									</label>
									<input
										type="text"
										required
										placeholder="e.g. Rahul Sharma"
										className="phonetic-input-light"
										value={formData.name}
										onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									/>
								</div>

								{/* Email / WhatsApp */}
								<div>
									<label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
										WhatsApp Number or Email *
									</label>
									<input
										type="text"
										required
										placeholder="+91 98765... or rahul@gmail.com"
										className="phonetic-input-light"
										value={formData.contactInfo}
										onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
									/>
								</div>

								{/* College Name */}
								<div>
									<label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
										College / Batch (Optional)
									</label>
									<input
										type="text"
										placeholder="e.g. CBIT 2026 Batch"
										className="phonetic-input-light"
										value={formData.college}
										onChange={(e) => setFormData({ ...formData, college: e.target.value })}
									/>
								</div>

								{/* Submit Button Matching OneFin / Phonectic Primary Pill CTA */}
								<button
									type="submit"
									style={{
										marginTop: '4px',
										width: '100%',
										padding: '13px 20px',
										borderRadius: '20px',
										background: 'linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%)',
										color: '#ffffff',
										border: 'none',
										fontSize: '13.5px',
										fontWeight: 900,
										letterSpacing: '-0.01em',
										cursor: 'pointer',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										gap: '8px',
										boxShadow:
											'0 8px 24px rgba(29, 78, 216, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.8), inset 0 -2px 2px rgba(15, 47, 156, 0.6)',
										transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.transform = 'translateY(-2px)'
										e.currentTarget.style.boxShadow =
											'0 12px 30px rgba(29, 78, 216, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.9)'
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.transform = 'translateY(0)'
										e.currentTarget.style.boxShadow =
											'0 8px 24px rgba(29, 78, 216, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.8)'
									}}
								>
									<span>Request Mentor Callback</span>
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
										<line x1="5" y1="12" x2="19" y2="12" />
										<polyline points="12 5 19 12 12 19" />
									</svg>
								</button>
							</form>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
