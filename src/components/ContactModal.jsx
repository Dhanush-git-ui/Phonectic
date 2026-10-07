import { useState, useEffect } from 'react'

const TRACKS = [
	{ id: 'aptitude', label: 'Speed Math & Logic' },
	{ id: 'campus-oa', label: 'TCS / Accenture OA' },
	{ id: 'mock', label: '1-on-1 Mock Interview' },
	{ id: 'college', label: 'College Partnerships' },
]

export default function ContactModal({ isOpen, onClose }) {
	const [selectedTrack, setSelectedTrack] = useState('aptitude')
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		college: '',
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
		if (e) {
			e.preventDefault()
			e.stopPropagation()
		}
		if (navigator.clipboard) {
			navigator.clipboard.writeText(text)
		}
		setCopiedField(field)
		setTimeout(() => setCopiedField(null), 2000)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setIsSubmitted(true)
	}

	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<div
			role="dialog"
			aria-modal="true"
			data-modal="true"
			onClick={handleBackdropClick}
			style={{
				position: 'fixed',
				inset: 0,
				width: '100vw',
				height: '100vh',
				backgroundColor: 'rgba(8, 18, 48, 0.65)',
				backdropFilter: 'blur(8px)',
				WebkitBackdropFilter: 'blur(8px)',
				zIndex: 999999,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '20px',
				boxSizing: 'border-box',
				animation: 'cmFadeIn 0.2s ease-out forwards',
				fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
			}}
		>
			<style>{`
				@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
				@keyframes cmFadeIn {
					from { opacity: 0; }
					to { opacity: 1; }
				}
				@keyframes cmSlideUp {
					from { opacity: 0; transform: translateY(14px); }
					to { opacity: 1; transform: translateY(0); }
				}
				.cm-input {
					width: 100%;
					background: #eef2ff;
					border: 1.5px solid #c7d6f5;
					border-radius: 10px;
					padding: 11px 14px;
					font-size: 14px;
					color: #091024;
					font-weight: 500;
					outline: none;
					transition: border-color 0.18s ease, box-shadow 0.18s ease;
					font-family: inherit;
					box-sizing: border-box;
				}
				.cm-input::placeholder {
					color: #64748b;
					font-weight: 400;
				}
				.cm-input:focus {
					background: #ffffff;
					border-color: #2563eb;
					box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.18);
				}
				.cm-contact-row {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 13px 15px;
					border-radius: 12px;
					background: #eef2ff;
					border: 1.5px solid #d0dcf5;
					cursor: pointer;
					transition: background 0.15s ease, border-color 0.15s ease, transform 0.12s ease;
				}
				.cm-contact-row:hover {
					background: #dde7fc;
					border-color: #2563eb;
					transform: translateY(-1px);
				}
				.cm-track-btn {
					padding: 9px 10px;
					border-radius: 9px;
					font-size: 12.5px;
					cursor: pointer;
					text-align: center;
					transition: all 0.15s ease;
					font-family: inherit;
					white-space: normal;
					word-break: break-word;
					line-height: 1.3;
				}
				.cm-submit-btn {
					margin-top: 6px;
					width: 100%;
					padding: 13px 18px;
					border-radius: 11px;
					background: #2563eb;
					color: #ffffff;
					border: none;
					font-size: 14.5px;
					font-weight: 700;
					cursor: pointer;
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 8px;
					transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
					font-family: inherit;
					letter-spacing: 0.01em;
					box-shadow: 0 4px 16px rgba(37, 99, 235, 0.35);
				}
				.cm-submit-btn:hover {
					background: #1d4ed8;
					transform: translateY(-1px);
					box-shadow: 0 8px 24px rgba(37, 99, 235, 0.45);
				}
				.cm-close-btn {
					position: absolute;
					top: 20px;
					right: 20px;
					width: 34px;
					height: 34px;
					border-radius: 50%;
					background: #e8effe;
					border: 1.5px solid #c7d6f5;
					color: #1e3a8a;
					cursor: pointer;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: background 0.15s ease, color 0.15s ease, transform 0.15s ease;
					outline: none;
					z-index: 20;
				}
				.cm-close-btn:hover {
					background: #d0dcf5;
					color: #091024;
					transform: rotate(90deg);
				}
			`}</style>

			{/* Modal Container */}
			<div
				data-modal="true"
				onClick={(e) => e.stopPropagation()}
				style={{
					position: 'relative',
					width: '100%',
					maxWidth: '860px',
					maxHeight: 'min(92vh, 760px)',
					overflowY: 'auto',
					background: '#f4f7ff',
					borderRadius: '22px',
					border: '1.5px solid #d4e0f7',
					boxShadow: '0 24px 64px rgba(15, 40, 100, 0.22), 0 4px 16px rgba(37, 99, 235, 0.12)',
					padding: '28px 28px 26px',
					animation: 'cmSlideUp 0.22s cubic-bezier(0.22, 1, 0.36, 1) forwards',
					boxSizing: 'border-box',
					color: '#091024',
				}}
			>
				{/* Top-Right Absolute Close Button */}
				<button
					type="button"
					aria-label="Close"
					data-close-modal="true"
					className="cm-close-btn"
					onClick={(e) => {
						e.preventDefault()
						e.stopPropagation()
						onClose()
					}}
				>
					<svg
						width="15"
						height="15"
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

				{/* Two-Column Layout */}
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
						gap: '26px',
						alignItems: 'start',
					}}
				>
					{/* LEFT COLUMN */}
					<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
						<div style={{ paddingRight: '24px' }}>
							<h3
								style={{
									margin: '0 0 8px',
									fontSize: 'clamp(22px, 2.4vw, 26px)',
									fontWeight: 800,
									color: '#091024',
									letterSpacing: '-0.025em',
									lineHeight: 1.15,
									textTransform: 'uppercase',
								}}
							>
								Let's talk about your placement goals.
							</h3>
							<p
								style={{
									margin: 0,
									fontSize: '13.5px',
									color: '#1e293b',
									fontWeight: 500,
									lineHeight: 1.55,
								}}
							>
								Have a question or want to work together ? We're here to help bring your ideas to life. Reach our Hyderabad team directly.
							</p>
						</div>

						{/* 4 Contact Rows with Darker Font Colors */}
						<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
							{/* 1. Visit Us */}
							<div
								className="cm-contact-row"
								style={{ cursor: 'default' }}
							>
								<div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
									<div
										style={{
											width: '36px',
											height: '36px',
											borderRadius: '10px',
											background: '#dde7fc',
											border: '1px solid #b8cdf7',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											flexShrink: 0,
											color: '#2563eb',
											marginTop: '2px',
										}}
									>
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
											<circle cx="12" cy="10" r="3" />
										</svg>
									</div>
									<div>
										<div style={{ fontSize: '11px', color: '#1e3a8a', fontWeight: 700, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
											Visit Us
										</div>
										<div style={{ fontSize: '13.5px', color: '#091024', fontWeight: 700, lineHeight: 1.4 }}>
											<div>123 Business Street</div>
											<div style={{ color: '#1e293b', fontWeight: 600 }}>Hyderabad, Telangana</div>
											<div style={{ color: '#334155', fontWeight: 500 }}>500001</div>
										</div>
									</div>
								</div>
							</div>

							{/* 2. Call Us */}
							<div
								className="cm-contact-row"
								onClick={(e) => handleCopy('+91 98765 43210', 'phone', e)}
								title="Click to copy"
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
									<div
										style={{
											width: '36px',
											height: '36px',
											borderRadius: '10px',
											background: '#dde7fc',
											border: '1px solid #b8cdf7',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											flexShrink: 0,
											color: '#2563eb',
										}}
									>
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
										</svg>
									</div>
									<div>
										<div style={{ fontSize: '11px', color: '#1e3a8a', fontWeight: 700, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
											Call Us
										</div>
										<div style={{ fontSize: '14px', color: '#091024', fontWeight: 700 }}>
											+91 98765 43210
										</div>
									</div>
								</div>
								<span
									style={{
										fontSize: '11.5px',
										fontWeight: 700,
										color: copiedField === 'phone' ? '#2563eb' : '#1d4ed8',
										padding: '3px 8px',
										background: copiedField === 'phone' ? '#dde7fc' : 'transparent',
										borderRadius: '6px',
										transition: 'all 0.2s ease',
									}}
								>
									{copiedField === 'phone' ? 'Copied!' : 'Copy'}
								</span>
							</div>

							{/* 3. Email Us */}
							<div
								className="cm-contact-row"
								onClick={(e) => handleCopy('phonetic1018@gmail.com', 'email', e)}
								title="Click to copy"
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
									<div
										style={{
											width: '36px',
											height: '36px',
											borderRadius: '10px',
											background: '#dde7fc',
											border: '1px solid #b8cdf7',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											flexShrink: 0,
											color: '#2563eb',
										}}
									>
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
											<polyline points="22,6 12,13 2,6" />
										</svg>
									</div>
									<div>
										<div style={{ fontSize: '11px', color: '#1e3a8a', fontWeight: 700, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
											Email Us
										</div>
										<div style={{ fontSize: '13.5px', color: '#091024', fontWeight: 700, lineHeight: 1.35 }}>
											<div>phonetic1018@gmail.com</div>
											<div style={{ color: '#334155', fontSize: '12.5px', fontWeight: 600 }}>support@company.com</div>
										</div>
									</div>
								</div>
								<span
									style={{
										fontSize: '11.5px',
										fontWeight: 700,
										color: copiedField === 'email' ? '#2563eb' : '#1d4ed8',
										padding: '3px 8px',
										background: copiedField === 'email' ? '#dde7fc' : 'transparent',
										borderRadius: '6px',
										transition: 'all 0.2s ease',
									}}
								>
									{copiedField === 'email' ? 'Copied!' : 'Copy'}
								</span>
							</div>

							{/* 4. Working Hours */}
							<div
								className="cm-contact-row"
								style={{ cursor: 'default' }}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
									<div
										style={{
											width: '36px',
											height: '36px',
											borderRadius: '10px',
											background: '#dde7fc',
											border: '1px solid #b8cdf7',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											flexShrink: 0,
											color: '#2563eb',
										}}
									>
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
											<circle cx="12" cy="12" r="10" />
											<polyline points="12 6 12 12 16 14" />
										</svg>
									</div>
									<div>
										<div style={{ fontSize: '11px', color: '#1e3a8a', fontWeight: 700, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
											Working Hours
										</div>
										<div style={{ fontSize: '13px', color: '#091024', fontWeight: 700, lineHeight: 1.35 }}>
											<div>Mon - Fri: 9:00 AM – 6:00 PM</div>
											<div style={{ color: '#334155', fontWeight: 600 }}>Sat: 10:00 AM – 4:00 PM</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Trust line */}
						<div
							style={{
								fontSize: '12px',
								color: '#334155',
								fontWeight: 600,
								display: 'flex',
								alignItems: 'center',
								flexWrap: 'wrap',
								gap: '6px 10px',
								borderTop: '1px solid #d0dcf5',
								paddingTop: '12px',
							}}
						>
							<span>★ 4.9/5 Student Rating</span>
							<span style={{ color: '#94a3b8' }}>·</span>
							<span>1,000+ Placements</span>
							<span style={{ color: '#94a3b8' }}>·</span>
							<span>Hyderabad, India</span>
						</div>
					</div>

					{/* RIGHT COLUMN: Form */}
					<div
						style={{
							background: '#ffffff',
							border: '1.5px solid #d0dcf5',
							borderRadius: '16px',
							padding: '22px',
							boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
						}}
					>
						{isSubmitted ? (
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									padding: '28px 10px',
									gap: '12px',
								}}
							>
								<div
									style={{
										width: '48px',
										height: '48px',
										borderRadius: '50%',
										background: '#dde7fc',
										border: '1.5px solid #b8cdf7',
										color: '#2563eb',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										fontSize: '20px',
									}}
								>
									✓
								</div>
								<div>
									<h4 style={{ margin: '0 0 6px', fontSize: '17px', fontWeight: 800, color: '#091024' }}>
										Inquiry Sent
									</h4>
									<p style={{ margin: 0, fontSize: '13.5px', color: '#1e293b', lineHeight: 1.55, maxWidth: '260px', fontWeight: 500 }}>
										Thanks, <strong style={{ color: '#091024' }}>{formData.name || 'there'}</strong>. Our Hyderabad team will reach out shortly.
									</p>
								</div>
								<button
									type="button"
									data-no-intercept="true"
									onClick={() => setIsSubmitted(false)}
									style={{
										background: '#eef2ff',
										color: '#2563eb',
										border: '1.5px solid #c7d6f5',
										padding: '8px 18px',
										borderRadius: '9px',
										fontSize: '12.5px',
										fontWeight: 700,
										cursor: 'pointer',
										fontFamily: 'inherit',
										marginTop: '4px',
									}}
								>
									Send another note
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
								{/* Track Selector */}
								<div>
									<label
										style={{
											display: 'block',
											fontSize: '11.5px',
											fontWeight: 800,
											color: '#091024',
											textTransform: 'uppercase',
											letterSpacing: '0.07em',
											marginBottom: '6px',
										}}
									>
										Preparation Track
									</label>
									<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
										{TRACKS.map((track) => {
											const isSelected = selectedTrack === track.id
											return (
												<button
													key={track.id}
													type="button"
													data-no-intercept="true"
													className="cm-track-btn"
													onClick={() => setSelectedTrack(track.id)}
													style={{
														background: isSelected ? '#2563eb' : '#eef2ff',
														border: isSelected ? '1.5px solid #2563eb' : '1.5px solid #c7d6f5',
														color: isSelected ? '#ffffff' : '#0f172a',
														fontWeight: isSelected ? 700 : 600,
													}}
												>
													{track.label}
												</button>
											)
										})}
									</div>
								</div>

								{/* Full Name */}
								<div>
									<label
										style={{
											display: 'block',
											fontSize: '11.5px',
											fontWeight: 800,
											color: '#091024',
											textTransform: 'uppercase',
											letterSpacing: '0.07em',
											marginBottom: '4px',
										}}
									>
										Full Name *
									</label>
									<input
										type="text"
										required
										placeholder="Phonetics"
										className="cm-input"
										value={formData.name}
										onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									/>
								</div>

								{/* Email Address & Phone Number */}
								<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
									<div>
										<label
											style={{
												display: 'block',
												fontSize: '11.5px',
												fontWeight: 800,
												color: '#091024',
												textTransform: 'uppercase',
												letterSpacing: '0.07em',
												marginBottom: '4px',
											}}
										>
											Email Address *
										</label>
										<input
											type="email"
											required
											placeholder="phonetic@example.com"
											className="cm-input"
											value={formData.email}
											onChange={(e) => setFormData({ ...formData, email: e.target.value })}
										/>
									</div>

									<div>
										<label
											style={{
												display: 'block',
												fontSize: '11.5px',
												fontWeight: 800,
												color: '#091024',
												textTransform: 'uppercase',
												letterSpacing: '0.07em',
												marginBottom: '4px',
											}}
										>
											Phone Number
										</label>
										<input
											type="tel"
											placeholder="+91 98765 43210"
											className="cm-input"
											value={formData.phone}
											onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
										/>
									</div>
								</div>

								{/* Subject */}
								<div>
									<label
										style={{
											display: 'block',
											fontSize: '11.5px',
											fontWeight: 800,
											color: '#091024',
											textTransform: 'uppercase',
											letterSpacing: '0.07em',
											marginBottom: '4px',
										}}
									>
										Subject
									</label>
									<input
										type="text"
										placeholder="How can we help?"
										className="cm-input"
										value={formData.subject}
										onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
									/>
								</div>

								{/* Submit */}
								<button
									type="submit"
									data-no-intercept="true"
									className="cm-submit-btn"
								>
									<span>Request Callback</span>
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
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
