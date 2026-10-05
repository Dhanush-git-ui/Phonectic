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
		contactInfo: '',
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
				backgroundColor: 'rgba(8, 18, 48, 0.6)',
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
				@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
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
					background: #eef2ff;
					border: 1.5px solid #c7d6f5;
					border-radius: 10px;
					padding: 11px 14px;
					font-size: 14px;
					color: #0d1a3a;
					outline: none;
					transition: border-color 0.18s ease, box-shadow 0.18s ease;
					font-family: inherit;
					box-sizing: border-box;
				}
				.cm-input::placeholder {
					color: #92a3c8;
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
					padding: 13px 14px;
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
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.cm-submit-btn {
					margin-top: 6px;
					width: 100%;
					padding: 13px 18px;
					border-radius: 11px;
					background: #2563eb;
					color: #ffffff;
					border: none;
					font-size: 14px;
					font-weight: 600;
					cursor: pointer;
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 8px;
					transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
					font-family: inherit;
					letter-spacing: 0.01em;
					box-shadow: 0 4px 16px rgba(37, 99, 235, 0.3);
				}
				.cm-submit-btn:hover {
					background: #1d4ed8;
					transform: translateY(-1px);
					box-shadow: 0 8px 24px rgba(37, 99, 235, 0.42);
				}
				.cm-close-btn {
					width: 32px;
					height: 32px;
					border-radius: 50%;
					background: #e8effe;
					border: 1.5px solid #c7d6f5;
					color: #5b7db8;
					cursor: pointer;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: background 0.15s ease, color 0.15s ease;
					outline: none;
					flex-shrink: 0;
				}
				.cm-close-btn:hover {
					background: #d0dcf5;
					color: #1a3a7a;
				}
			`}</style>

			{/* Modal Container */}
			<div
				data-modal="true"
				onClick={(e) => e.stopPropagation()}
				style={{
					position: 'relative',
					width: '100%',
					maxWidth: '800px',
					maxHeight: 'min(92vh, 720px)',
					overflowY: 'auto',
					background: '#f4f7ff',
					borderRadius: '20px',
					border: '1.5px solid #d4e0f7',
					boxShadow: '0 24px 64px rgba(15, 40, 100, 0.2), 0 4px 16px rgba(37, 99, 235, 0.1)',
					padding: '28px 28px 26px',
					animation: 'cmSlideUp 0.22s cubic-bezier(0.22, 1, 0.36, 1) forwards',
					boxSizing: 'border-box',
					color: '#0d1a3a',
				}}
			>
				{/* Header */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginBottom: '22px',
					}}
				>
					<span
						style={{
							fontSize: '11px',
							fontWeight: 600,
							color: '#2563eb',
							textTransform: 'uppercase',
							letterSpacing: '0.08em',
							background: '#dde7fc',
							border: '1px solid #b8cdf7',
							borderRadius: '99px',
							padding: '4px 12px',
						}}
					>
						Direct Mentor Line
					</span>

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
							strokeWidth="2.2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</button>
				</div>

				{/* Two-Column Layout */}
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
						gap: '28px',
						alignItems: 'start',
					}}
				>
					{/* LEFT COLUMN */}
					<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
						<div>
							<h3
								style={{
									margin: '0 0 8px',
									fontSize: 'clamp(22px, 2.4vw, 26px)',
									fontWeight: 700,
									color: '#0d1a3a',
									letterSpacing: '-0.025em',
									lineHeight: 1.2,
								}}
							>
								Let's talk about your placement goals.
							</h3>
							<p
								style={{
									margin: 0,
									fontSize: '13.5px',
									color: '#4a5880',
									lineHeight: 1.65,
								}}
							>
								Questions on campus syllabus, speed math, or company mock drives? Reach our Hyderabad placement mentors directly — no bots, no waiting.
							</p>
						</div>

						{/* Contact Rows */}
						<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
							{/* Phone */}
							<div
								className="cm-contact-row"
								onClick={(e) => handleCopy('+91 91000 88888', 'phone', e)}
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
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
										</svg>
									</div>
									<div>
										<div style={{ fontSize: '11px', color: '#5b7db8', fontWeight: 600, marginBottom: '2px' }}>
											Helpline & WhatsApp
										</div>
										<div style={{ fontSize: '14px', color: '#0d1a3a', fontWeight: 600 }}>
											+91 91000 88888
										</div>
									</div>
								</div>
								<span
									style={{
										fontSize: '11.5px',
										fontWeight: 600,
										color: copiedField === 'phone' ? '#2563eb' : '#7a9ccc',
										padding: '3px 8px',
										background: copiedField === 'phone' ? '#dde7fc' : 'transparent',
										borderRadius: '6px',
										transition: 'all 0.2s ease',
									}}
								>
									{copiedField === 'phone' ? 'Copied!' : 'Copy'}
								</span>
							</div>

							{/* Email */}
							<div
								className="cm-contact-row"
								onClick={(e) => handleCopy('support@phoneticedu.com', 'email', e)}
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
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
											<polyline points="22,6 12,13 2,6" />
										</svg>
									</div>
									<div>
										<div style={{ fontSize: '11px', color: '#5b7db8', fontWeight: 600, marginBottom: '2px' }}>
											Admissions & Support
										</div>
										<div style={{ fontSize: '14px', color: '#0d1a3a', fontWeight: 600 }}>
											support@phoneticedu.com
										</div>
									</div>
								</div>
								<span
									style={{
										fontSize: '11.5px',
										fontWeight: 600,
										color: copiedField === 'email' ? '#2563eb' : '#7a9ccc',
										padding: '3px 8px',
										background: copiedField === 'email' ? '#dde7fc' : 'transparent',
										borderRadius: '6px',
										transition: 'all 0.2s ease',
									}}
								>
									{copiedField === 'email' ? 'Copied!' : 'Copy'}
								</span>
							</div>

							{/* Location */}
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: '12px',
									padding: '13px 14px',
									borderRadius: '12px',
									background: '#eef2ff',
									border: '1.5px solid #d0dcf5',
								}}
							>
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
									<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
										<circle cx="12" cy="10" r="3" />
									</svg>
								</div>
								<div>
									<div style={{ fontSize: '11px', color: '#5b7db8', fontWeight: 600, marginBottom: '2px' }}>
										Campus Hub
									</div>
									<div style={{ fontSize: '13.5px', color: '#0d1a3a', fontWeight: 600 }}>
										HITAM Campus & Hyderabad Center
									</div>
								</div>
							</div>
						</div>

						{/* Trust line */}
						<div
							style={{
								fontSize: '12px',
								color: '#7a9ccc',
								display: 'flex',
								alignItems: 'center',
								flexWrap: 'wrap',
								gap: '6px 10px',
								borderTop: '1px solid #d0dcf5',
								paddingTop: '14px',
							}}
						>
							<span>★ 4.9/5 Student Rating</span>
							<span style={{ color: '#b8cdf7' }}>·</span>
							<span>1,000+ Placements</span>
							<span style={{ color: '#b8cdf7' }}>·</span>
							<span>Direct Mentors</span>
						</div>
					</div>

					{/* RIGHT COLUMN: Form */}
					<div
						style={{
							background: '#ffffff',
							border: '1.5px solid #d0dcf5',
							borderRadius: '16px',
							padding: '22px',
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
									<h4 style={{ margin: '0 0 6px', fontSize: '17px', fontWeight: 700, color: '#0d1a3a' }}>
										Inquiry Sent
									</h4>
									<p style={{ margin: 0, fontSize: '13.5px', color: '#4a5880', lineHeight: 1.55, maxWidth: '260px' }}>
										Thanks, <strong style={{ color: '#0d1a3a' }}>{formData.name || 'there'}</strong>. A placement mentor will reach out shortly.
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
										fontWeight: 600,
										cursor: 'pointer',
										fontFamily: 'inherit',
										marginTop: '4px',
									}}
								>
									Send another note
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
								{/* Track Selector */}
								<div>
									<label
										style={{
											display: 'block',
											fontSize: '11px',
											fontWeight: 700,
											color: '#5b7db8',
											textTransform: 'uppercase',
											letterSpacing: '0.07em',
											marginBottom: '8px',
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
														color: isSelected ? '#ffffff' : '#4a5880',
														fontWeight: isSelected ? 600 : 500,
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
											fontSize: '11px',
											fontWeight: 700,
											color: '#5b7db8',
											textTransform: 'uppercase',
											letterSpacing: '0.07em',
											marginBottom: '5px',
										}}
									>
										Full Name *
									</label>
									<input
										type="text"
										required
										placeholder="e.g. Rahul Sharma"
										className="cm-input"
										value={formData.name}
										onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									/>
								</div>

								{/* Contact Info */}
								<div>
									<label
										style={{
											display: 'block',
											fontSize: '11px',
											fontWeight: 700,
											color: '#5b7db8',
											textTransform: 'uppercase',
											letterSpacing: '0.07em',
											marginBottom: '5px',
										}}
									>
										WhatsApp / Email *
									</label>
									<input
										type="text"
										required
										placeholder="+91 98765... or name@email.com"
										className="cm-input"
										value={formData.contactInfo}
										onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
									/>
								</div>

								{/* College */}
								<div>
									<label
										style={{
											display: 'block',
											fontSize: '11px',
											fontWeight: 700,
											color: '#5b7db8',
											textTransform: 'uppercase',
											letterSpacing: '0.07em',
											marginBottom: '5px',
										}}
									>
										College / Branch{' '}
										<span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, color: '#92a3c8' }}>
											(Optional)
										</span>
									</label>
									<input
										type="text"
										placeholder="e.g. CBIT, CSE 2026"
										className="cm-input"
										value={formData.college}
										onChange={(e) => setFormData({ ...formData, college: e.target.value })}
									/>
								</div>

								{/* Submit */}
								<button
									type="submit"
									data-no-intercept="true"
									className="cm-submit-btn"
								>
									<span>Request Callback</span>
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
