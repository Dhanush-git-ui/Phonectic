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
				backgroundColor: 'rgba(15, 23, 42, 0.65)',
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
				@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
				@keyframes cmFadeIn {
					from { opacity: 0; }
					to { opacity: 1; }
				}
				@keyframes cmSlideUp {
					from { opacity: 0; transform: translateY(16px); }
					to { opacity: 1; transform: translateY(0); }
				}
				.cm-input {
					width: 100%;
					background: #edf2f9;
					border: 1.5px solid #d4e0f2;
					border-radius: 9px;
					padding: 10.5px 14px;
					font-size: 13.5px;
					color: #0f172a;
					font-weight: 500;
					outline: none;
					transition: all 0.18s ease;
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
					box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
				}
				.cm-contact-row {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 13px 15px;
					border-radius: 12px;
					background: #edf2f9;
					border: 1px solid #d9e3f1;
					transition: all 0.15s ease;
				}
				.cm-contact-row:hover {
					background: #e2ebf7;
					border-color: #b9cee8;
				}
				.cm-track-btn {
					padding: 9.5px 12px;
					border-radius: 8px;
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
					width: 100%;
					padding: 12.5px 18px;
					border-radius: 9px;
					background: #2563eb;
					color: #ffffff;
					border: none;
					font-size: 14px;
					font-weight: 700;
					cursor: pointer;
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 8px;
					transition: all 0.18s ease;
					font-family: inherit;
					box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
				}
				.cm-submit-btn:hover {
					background: #1d4ed8;
					transform: translateY(-1px);
					box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
				}
				.cm-close-btn {
					width: 32px;
					height: 32px;
					border-radius: 50%;
					background: #f1f5f9;
					border: 1px solid #e2e8f0;
					color: #475569;
					cursor: pointer;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: all 0.15s ease;
					outline: none;
				}
				.cm-close-btn:hover {
					background: #e2e8f0;
					color: #0f172a;
				}
			`}</style>

			{/* Modal Card Container */}
			<div
				data-modal="true"
				onClick={(e) => e.stopPropagation()}
				style={{
					position: 'relative',
					width: '100%',
					maxWidth: '880px',
					maxHeight: 'min(92vh, 760px)',
					overflowY: 'auto',
					background: '#ffffff',
					borderRadius: '24px',
					boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(226, 232, 240, 0.8)',
					padding: '30px 32px',
					animation: 'cmSlideUp 0.22s cubic-bezier(0.22, 1, 0.36, 1) forwards',
					boxSizing: 'border-box',
					color: '#0f172a',
				}}
			>
				{/* Two-Column Layout */}
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(min(330px, 100%), 1fr))',
						gap: '28px',
						alignItems: 'start',
					}}
				>
					{/* LEFT COLUMN */}
					<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
						<div>
							<h3
								style={{
									margin: '0 0 8px',
									fontSize: 'clamp(22px, 2.3vw, 25px)',
									fontWeight: 900,
									color: '#0f172a',
									letterSpacing: '-0.025em',
									lineHeight: 1.18,
									textTransform: 'uppercase',
								}}
							>
								Let's talk about your placement goals.
							</h3>
							<p
								style={{
									margin: 0,
									fontSize: '13.5px',
									color: '#475569',
									fontWeight: 500,
									lineHeight: 1.5,
								}}
							>
								Have a question or want to work together ? We're here to help bring your ideas to life. Reach our Hyderabad team directly.
							</p>
						</div>

						{/* 4 Info Cards */}
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
											background: '#dbeafe',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											flexShrink: 0,
											color: '#2563eb',
											marginTop: '2px',
										}}
									>
										<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
											<circle cx="12" cy="10" r="3" />
										</svg>
									</div>
									<div>
										<div style={{ fontSize: '11px', color: '#1e3a8a', fontWeight: 800, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
											Visit Us
										</div>
										<div style={{ fontSize: '13.5px', color: '#0f172a', fontWeight: 700, lineHeight: 1.4 }}>
											<div>123 Business Street</div>
											<div style={{ color: '#334155', fontWeight: 600 }}>Hyderabad, Telangana</div>
											<div style={{ color: '#475569', fontWeight: 500 }}>500001</div>
										</div>
									</div>
								</div>
							</div>

							{/* 2. Call Us */}
							<div
								className="cm-contact-row"
								onClick={(e) => handleCopy('+91 98765 43210', 'phone', e)}
								title="Click to copy"
								style={{ cursor: 'pointer' }}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
									<div
										style={{
											width: '36px',
											height: '36px',
											borderRadius: '10px',
											background: '#dbeafe',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											flexShrink: 0,
											color: '#2563eb',
										}}
									>
										<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
										</svg>
									</div>
									<div>
										<div style={{ fontSize: '11px', color: '#1e3a8a', fontWeight: 800, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
											Call Us
										</div>
										<div style={{ fontSize: '14px', color: '#0f172a', fontWeight: 700 }}>
											+91 98765 43210
										</div>
									</div>
								</div>
								<span
									style={{
										fontSize: '12px',
										fontWeight: 700,
										color: '#2563eb',
										padding: '4px 8px',
										borderRadius: '6px',
										transition: 'all 0.15s ease',
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
								style={{ cursor: 'pointer' }}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
									<div
										style={{
											width: '36px',
											height: '36px',
											borderRadius: '10px',
											background: '#dbeafe',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											flexShrink: 0,
											color: '#2563eb',
										}}
									>
										<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
											<polyline points="22,6 12,13 2,6" />
										</svg>
									</div>
									<div>
										<div style={{ fontSize: '11px', color: '#1e3a8a', fontWeight: 800, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
											Email Us
										</div>
										<div style={{ fontSize: '13.5px', color: '#0f172a', fontWeight: 700, lineHeight: 1.35 }}>
											<div>phonetic1018@gmail.com</div>
											<div style={{ color: '#475569', fontSize: '12.5px', fontWeight: 500 }}>support@company.com</div>
										</div>
									</div>
								</div>
								<span
									style={{
										fontSize: '12px',
										fontWeight: 700,
										color: '#2563eb',
										padding: '4px 8px',
										borderRadius: '6px',
										transition: 'all 0.15s ease',
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
											background: '#dbeafe',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											flexShrink: 0,
											color: '#2563eb',
										}}
									>
										<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
											<circle cx="12" cy="12" r="10" />
											<polyline points="12 6 12 12 16 14" />
										</svg>
									</div>
									<div>
										<div style={{ fontSize: '11px', color: '#1e3a8a', fontWeight: 800, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
											Working Hours
										</div>
										<div style={{ fontSize: '13px', color: '#0f172a', fontWeight: 700, lineHeight: 1.35 }}>
											<div>Mon - Fri: 9:00 AM – 6:00 PM</div>
											<div style={{ color: '#475569', fontWeight: 500 }}>Sat: 10:00 AM – 4:00 PM</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Trust rating footer */}
						<div
							style={{
								fontSize: '12px',
								color: '#475569',
								fontWeight: 600,
								display: 'flex',
								alignItems: 'center',
								flexWrap: 'wrap',
								gap: '6px 8px',
								paddingTop: '6px',
							}}
						>
							<span>★ 4.9/5 Student Rating</span>
							<span style={{ color: '#cbd5e1' }}>·</span>
							<span>1,000+ Placements</span>
							<span style={{ color: '#cbd5e1' }}>·</span>
							<span>Hyderabad, India</span>
						</div>
					</div>

					{/* RIGHT COLUMN: Form Card */}
					<div
						style={{
							background: '#ffffff',
							border: '1.5px solid #e2e8f0',
							borderRadius: '18px',
							padding: '22px 24px',
							boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)',
							position: 'relative',
						}}
					>
						{/* Close Button Inside Form Box Top-Right */}
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
							<label
								style={{
									display: 'block',
									fontSize: '11px',
									fontWeight: 800,
									color: '#0f172a',
									textTransform: 'uppercase',
									letterSpacing: '0.06em',
									margin: 0,
								}}
							>
								Preparation Track
							</label>

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

						{isSubmitted ? (
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									padding: '30px 10px',
									gap: '12px',
								}}
							>
								<div
									style={{
										width: '48px',
										height: '48px',
										borderRadius: '50%',
										background: '#dbeafe',
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
									<h4 style={{ margin: '0 0 6px', fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>
										Inquiry Sent
									</h4>
									<p style={{ margin: 0, fontSize: '13.5px', color: '#475569', lineHeight: 1.5, maxWidth: '260px', fontWeight: 500 }}>
										Thanks, <strong style={{ color: '#0f172a' }}>{formData.name || 'there'}</strong>. Our Hyderabad team will reach out shortly.
									</p>
								</div>
								<button
									type="button"
									data-no-intercept="true"
									onClick={() => setIsSubmitted(false)}
									style={{
										background: '#edf2f9',
										color: '#2563eb',
										border: '1px solid #d4e0f2',
										padding: '8px 18px',
										borderRadius: '8px',
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
							<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
								{/* 2x2 Track Buttons */}
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
													background: isSelected ? '#2563eb' : '#ffffff',
													border: isSelected ? 'none' : '1.5px solid #e2e8f0',
													color: isSelected ? '#ffffff' : '#0f172a',
													fontWeight: isSelected ? 700 : 600,
													boxShadow: isSelected ? '0 4px 10px rgba(37,99,235,0.25)' : 'none',
												}}
											>
												{track.label}
											</button>
										)
									})}
								</div>

								{/* Full Name */}
								<div>
									<label
										style={{
											display: 'block',
											fontSize: '11px',
											fontWeight: 800,
											color: '#0f172a',
											textTransform: 'uppercase',
											letterSpacing: '0.05em',
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
												fontSize: '11px',
												fontWeight: 800,
												color: '#0f172a',
												textTransform: 'uppercase',
												letterSpacing: '0.05em',
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
												fontSize: '11px',
												fontWeight: 800,
												color: '#0f172a',
												textTransform: 'uppercase',
												letterSpacing: '0.05em',
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
											fontSize: '11px',
											fontWeight: 800,
											color: '#0f172a',
											textTransform: 'uppercase',
											letterSpacing: '0.05em',
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

								{/* Submit Button */}
								<button
									type="submit"
									data-no-intercept="true"
									className="cm-submit-btn"
									style={{ marginTop: '2px' }}
								>
									<span>Request Callback</span>
									<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
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
