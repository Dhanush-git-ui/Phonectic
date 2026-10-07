import { useState } from 'react'

export default function Benefits() {
	const [hoveredCard, setHoveredCard] = useState(null)
	const [selectedCard, setSelectedCard] = useState(null)
	const activeStep = hoveredCard || selectedCard || 0

	return (
		<section
			id="benefit"
			className="programs-section"
			style={{
				position: 'relative',
				width: '100%',
				background: '#ffffff',
				padding: '90px 24px 100px',
				overflow: 'hidden',
			}}
		>
			<div
				style={{
					maxWidth: '1280px',
					margin: '0 auto',
				}}
			>
				{/* 1. Header with Clean Badge */}
				<div style={{ textAlign: 'center', marginBottom: '48px' }}>
					<div
						className="section-badge-group"
						style={{
							display: 'inline-flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '6px',
							marginBottom: '20px',
						}}
					>
						<span
							className="section-badge-number"
							style={{
								display: 'inline-flex',
								alignItems: 'center',
								justifyContent: 'center',
								padding: '0 12px',
								minWidth: '42px',
								height: '38px',
								background: '#ececee',
								color: '#1e293b',
								fontSize: '15px',
								fontWeight: 800,
								fontFamily: "'Roboto Condensed', 'Inter', -apple-system, sans-serif",
								borderRadius: '12px',
								border: '1px solid rgba(0, 0, 0, 0.08)',
								boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
								lineHeight: 1,
							}}
						>
							01
						</span>
						<span
							className="section-badge-name"
							style={{
								display: 'inline-flex',
								alignItems: 'center',
								justifyContent: 'center',
								padding: '0 18px',
								height: '38px',
								background: '#262626',
								color: '#ffffff',
								fontSize: '14px',
								fontWeight: 800,
								fontFamily: "'Roboto Condensed', 'Inter', -apple-system, sans-serif",
								letterSpacing: '0.04em',
								textTransform: 'uppercase',
								borderRadius: '14px',
								boxShadow: '0 2px 6px rgba(0,0,0,0.14)',
								lineHeight: 1,
							}}
						>
							BENEFITS
						</span>
					</div>

					<h2
						style={{
							fontFamily: "'Roboto Condensed', sans-serif",
							fontSize: 'clamp(36px, 5vw, 64px)',
							lineHeight: 0.98,
							fontWeight: 900,
							letterSpacing: '-0.04em',
							color: '#0f172a',
							textTransform: 'uppercase',
							margin: '0 0 16px',
						}}
					>
						EVERYTHING PLACEMENT. UNIFIED.
					</h2>

					<p
						style={{
							fontFamily: '"Geist", "Inter", sans-serif',
							fontSize: 'clamp(14px, 1.2vw, 16px)',
							lineHeight: 1.6,
							color: '#475569',
							maxWidth: '680px',
							margin: '0 auto',
						}}
					>
						Our ecosystem unifies quantitative aptitude, reasoning, technical coding, and mock
						interviews — giving you the speed, clarity, and confidence to ace every recruitment drive.
					</p>
				</div>

				{/* 2. Horizontal 4-Card Connected Roadmap */}
				<div style={{ position: 'relative', width: '100%', marginBottom: '80px', paddingTop: '40px' }}>
					{/* Top Blue Connecting Weaving Curve (Desktop & Tablet) */}
					<div
						className="programs-connecting-curve-wrap"
						style={{
							position: 'absolute',
							top: '0px',
							left: '0',
							width: '100%',
							height: '55px',
							pointerEvents: 'none',
							zIndex: 10,
						}}
					>
						<svg
							viewBox="0 0 1200 55"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							style={{ width: '100%', height: '100%', overflow: 'visible' }}
							preserveAspectRatio="none"
						>
							{/* Soft Glow Path */}
							<path
								d="M 65 52 C 85 48, 110 40, 140 38 C 220 32, 310 10, 440 22 C 540 34, 630 46, 740 32 C 830 18, 930 6, 1060 28 C 1085 32, 1112 48, 1135 52"
								stroke="#93c5fd"
								strokeWidth="5"
								strokeLinecap="round"
								opacity="0.6"
							/>
							{/* Crisp Core Blue Path */}
							<path
								d="M 65 52 C 85 48, 110 40, 140 38 C 220 32, 310 10, 440 22 C 540 34, 630 46, 740 32 C 830 18, 930 6, 1060 28 C 1085 32, 1112 48, 1135 52"
								stroke="#2563eb"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeDasharray="6 5"
							/>
							{/* Glowing Node Dots */}
							<circle
								cx="140"
								cy="38"
								r={activeStep === 1 ? 9 : 6.5}
								fill="#2563eb"
								stroke="#ffffff"
								strokeWidth={activeStep === 1 ? 3.5 : 2.5}
								style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0 2px 8px rgba(37,99,235,0.5))' }}
							/>
							<circle
								cx="440"
								cy="22"
								r={activeStep === 2 ? 9 : 6.5}
								fill="#2563eb"
								stroke="#ffffff"
								strokeWidth={activeStep === 2 ? 3.5 : 2.5}
								style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0 2px 8px rgba(37,99,235,0.5))' }}
							/>
							<circle
								cx="740"
								cy="32"
								r={activeStep === 3 ? 9 : 6.5}
								fill="#38bdf8"
								stroke="#ffffff"
								strokeWidth={activeStep === 3 ? 3.5 : 2.5}
								style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0 2px 8px rgba(56,189,248,0.6))' }}
							/>
							<circle
								cx="1060"
								cy="28"
								r={activeStep === 4 ? 9 : 6.5}
								fill="#2563eb"
								stroke="#ffffff"
								strokeWidth={activeStep === 4 ? 3.5 : 2.5}
								style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0 2px 8px rgba(37,99,235,0.5))' }}
							/>
						</svg>
					</div>

					{/* 4 Cards Grid */}
					<div
						className="programs-cards-grid"
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(4, 1fr)',
							gap: '20px',
							position: 'relative',
							zIndex: 2,
							marginTop: '25px',
						}}
					>
						{/* CARD 1: Aptitude Mastery */}
						<div
							className={`program-card ${activeStep === 1 ? 'program-card-highlighted' : ''}`}
							onMouseEnter={() => setHoveredCard(1)}
							onMouseLeave={() => setHoveredCard(null)}
							onClick={() => setSelectedCard(selectedCard === 1 ? null : 1)}
							style={{
								background: '#ffffff',
								border: activeStep === 1 ? '1.5px solid #2563eb' : '1px solid #e2e8f0',
								borderRadius: '26px',
								padding: '24px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								boxShadow:
									activeStep === 1
										? '0 25px 60px -10px rgba(37, 99, 235, 0.25), 0 0 0 1px #2563eb'
										: '0 10px 30px -10px rgba(0,0,0,0.06), 0 4px 6px -2px rgba(0,0,0,0.02)',
								transform: activeStep === 1 ? 'translateY(-14px) scale(1.03)' : 'translateY(0) scale(1)',
								zIndex: activeStep === 1 ? 20 : 2,
								opacity: activeStep && activeStep !== 1 ? 0.75 : 1,
								transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
								cursor: 'pointer',
								position: 'relative',
							}}
						>
							<div>
								{/* Header */}
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										marginBottom: '14px',
									}}
								>
									<span
										style={{
											fontSize: '11px',
											fontWeight: 800,
											letterSpacing: '0.08em',
											color: '#2563eb',
											textTransform: 'uppercase',
										}}
									>
										01 / PREPARE
									</span>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
										<path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" />
									</svg>
								</div>

								<h3
									style={{
										fontFamily: "'Roboto Condensed', sans-serif",
										fontSize: '22px',
										fontWeight: 900,
										textTransform: 'uppercase',
										letterSpacing: '-0.025em',
										color: '#0f172a',
										margin: '0 0 4px',
									}}
								>
									Aptitude Mastery
								</h3>
								<p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 22px' }}>
									Quantitative. Logical. Verbal.
								</p>

								{/* Circular Donut Gauge & 3 Progress Bars */}
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										gap: '16px',
										marginBottom: '24px',
										background: '#f8fafc',
										padding: '16px 14px',
										borderRadius: '18px',
										border: '1px solid #f1f5f9',
									}}
								>
									{/* Donut Gauge */}
									<div
										style={{
											position: 'relative',
											width: '84px',
											height: '84px',
											flexShrink: 0,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										<svg width="84" height="84" viewBox="0 0 84 84">
											<circle cx="42" cy="42" r="34" stroke="#e2e8f0" strokeWidth="8" fill="none" />
											<circle
												cx="42"
												cy="42"
												r="34"
												stroke="url(#blueGaugeGrad)"
												strokeWidth="8"
												strokeDasharray="213"
												strokeDashoffset="24"
												strokeLinecap="round"
												fill="none"
												transform="rotate(-90 42 42)"
											/>
											<defs>
												<linearGradient id="blueGaugeGrad" x1="0" y1="0" x2="1" y2="1">
													<stop offset="0%" stopColor="#38bdf8" />
													<stop offset="100%" stopColor="#2563eb" />
												</linearGradient>
											</defs>
										</svg>
										<div style={{ position: 'absolute', textAlign: 'center' }}>
											<div
												style={{
													fontFamily: "'Plus Jakarta Sans', sans-serif",
													fontSize: '18px',
													fontWeight: 800,
													color: '#0f172a',
													lineHeight: 1,
												}}
											>
												99.4
											</div>
											<div style={{ fontSize: '10px', color: '#64748b', fontWeight: 600 }}>%ile</div>
										</div>
									</div>

									{/* 3 Horizontal Progress Bars */}
									<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
										{/* Quant */}
										<div>
											<div
												style={{
													display: 'flex',
													justifyContent: 'space-between',
													fontSize: '11px',
													fontWeight: 700,
													color: '#334155',
													marginBottom: '3px',
												}}
											>
												<span>Quant</span>
												<span style={{ color: '#2563eb' }}>98%</span>
											</div>
											<div style={{ width: '100%', height: '5px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
												<div style={{ width: '98%', height: '100%', background: '#2563eb', borderRadius: '999px' }} />
											</div>
										</div>
										{/* Logical */}
										<div>
											<div
												style={{
													display: 'flex',
													justifyContent: 'space-between',
													fontSize: '11px',
													fontWeight: 700,
													color: '#334155',
													marginBottom: '3px',
												}}
											>
												<span>Logical</span>
												<span style={{ color: '#38bdf8' }}>94%</span>
											</div>
											<div style={{ width: '100%', height: '5px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
												<div style={{ width: '94%', height: '100%', background: '#0284c7', borderRadius: '999px' }} />
											</div>
										</div>
										{/* Verbal */}
										<div>
											<div
												style={{
													display: 'flex',
													justifyContent: 'space-between',
													fontSize: '11px',
													fontWeight: 700,
													color: '#334155',
													marginBottom: '3px',
												}}
											>
												<span>Verbal</span>
												<span style={{ color: '#6366f1' }}>91%</span>
											</div>
											<div style={{ width: '100%', height: '5px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
												<div style={{ width: '91%', height: '100%', background: '#6366f1', borderRadius: '999px' }} />
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Bottom Action Pill */}
							<a
								href="#" data-open-contact="true"
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									padding: '10px 14px',
									background: '#ffffff',
									border: '1px solid #e2e8f0',
									borderRadius: '14px',
									textDecoration: 'none',
									transition: 'background 0.2s, border-color 0.2s',
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
									<div
										style={{
											width: '28px',
											height: '28px',
											borderRadius: '8px',
											background: '#eff6ff',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
											<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z" />
										</svg>
									</div>
									<div>
										<div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
											Personalized Practice
										</div>
										<div style={{ fontSize: '10px', color: '#64748b' }}>Adaptive tests tailored to you</div>
									</div>
								</div>
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5">
									<path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</a>

							{/* Learn More & Explore Button */}
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									gap: '8px',
									marginTop: '12px',
									padding: '9px 14px',
									borderRadius: '12px',
									background: '#0f172a',
									color: '#ffffff',
									fontSize: '12px',
									fontWeight: 700,
								}}
							>
								<span>Explore on LMS</span>
								<span>→</span>
							</div>
						</div>

						{/* CARD 2: Technical & DSA Coding */}
						<div
							className={`program-card ${activeStep === 2 ? 'program-card-highlighted' : ''}`}
							onMouseEnter={() => setHoveredCard(2)}
							onMouseLeave={() => setHoveredCard(null)}
							onClick={() => setSelectedCard(selectedCard === 2 ? null : 2)}
							style={{
								background: '#ffffff',
								border: activeStep === 2 ? '1.5px solid #2563eb' : '1px solid #e2e8f0',
								borderRadius: '26px',
								padding: '24px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								boxShadow:
									activeStep === 2
										? '0 25px 60px -10px rgba(37, 99, 235, 0.25), 0 0 0 1px #2563eb'
										: '0 10px 30px -10px rgba(0,0,0,0.06), 0 4px 6px -2px rgba(0,0,0,0.02)',
								transform: activeStep === 2 ? 'translateY(-14px) scale(1.03)' : 'translateY(0) scale(1)',
								zIndex: activeStep === 2 ? 20 : 2,
								opacity: activeStep && activeStep !== 2 ? 0.75 : 1,
								transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
								cursor: 'pointer',
								position: 'relative',
							}}
						>
							<div>
								{/* Header */}
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										marginBottom: '14px',
									}}
								>
									<span
										style={{
											fontSize: '11px',
											fontWeight: 800,
											letterSpacing: '0.08em',
											color: '#2563eb',
											textTransform: 'uppercase',
										}}
									>
										02 / PRACTICE
									</span>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
										<path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>

								<h3
									style={{
										fontFamily: "'Roboto Condensed', sans-serif",
										fontSize: '22px',
										fontWeight: 900,
										textTransform: 'uppercase',
										letterSpacing: '-0.025em',
										color: '#0f172a',
										margin: '0 0 4px',
									}}
								>
									Technical & DSA Coding
								</h3>
								<p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 16px' }}>Practice. Code. Master.</p>

								{/* Dark Code Editor Mockup */}
								<div
									style={{
										background: '#0d1117',
										borderRadius: '16px',
										padding: '12px 14px',
										marginBottom: '20px',
										boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
									}}
								>
									{/* Top Window Bar */}
									<div
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											alignItems: 'center',
											borderBottom: '1px solid rgba(255,255,255,0.08)',
											paddingBottom: '8px',
											marginBottom: '10px',
										}}
									>
										<div style={{ display: 'flex', gap: '5px' }}>
											<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
											<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
											<span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
										</div>
										<span style={{ fontSize: '10px', color: '#94a3b8', fontFamily: "'Fira Code', monospace" }}>
											solution.cpp
										</span>
										<span
											style={{
												fontSize: '9px',
												background: 'rgba(59,130,246,0.2)',
												color: '#60a5fa',
												padding: '2px 6px',
												borderRadius: '4px',
												fontFamily: 'monospace',
											}}
										>
											C++ ▾
										</span>
									</div>

									{/* Code Snippet */}
									<pre
										style={{
											margin: 0,
											fontFamily: "'Fira Code', monospace",
											fontSize: '10px',
											lineHeight: 1.45,
											color: '#e2e8f0',
											overflow: 'hidden',
										}}
									>
										<code>
											<span style={{ color: '#64748b' }}>1 </span>
											<span style={{ color: '#f43f5e' }}>vector</span>
											<span style={{ color: '#38bdf8' }}>&lt;int&gt; </span>
											<span style={{ color: '#a78bfa' }}>twoSum</span>(
											<span style={{ color: '#f43f5e' }}>vector</span>
											<span style={{ color: '#38bdf8' }}>&lt;int&gt;</span>&amp; nums,
											{'\n'}
											<span style={{ color: '#64748b' }}>2 </span>
											{'   '}
											<span style={{ color: '#f43f5e' }}>int </span>target) &#123;
											{'\n'}
											<span style={{ color: '#64748b' }}>3 </span>
											{'   '}unordered_map&lt;int, int&gt; mp;
											{'\n'}
											<span style={{ color: '#64748b' }}>4 </span>
											{'   '}
											<span style={{ color: '#f43f5e' }}>for </span>(
											<span style={{ color: '#f43f5e' }}>int </span>i = 0; i &lt; nums.size(); i++) &#123;
											{'\n'}
											<span style={{ color: '#64748b' }}>5 </span>
											{'     '}
											<span style={{ color: '#f43f5e' }}>int </span>comp = target - nums[i];
											{'\n'}
											<span style={{ color: '#64748b' }}>6 </span>
											{'     '}
											<span style={{ color: '#f43f5e' }}>if </span>(mp.count(comp))
											<span style={{ color: '#38bdf8' }}> return </span>&#123;mp[comp], i&#125;;
											{'\n'}
											<span style={{ color: '#64748b' }}>7 </span>
											{'     '}mp[nums[i]] = i;
											{'\n'}
											<span style={{ color: '#64748b' }}>8 </span>
											{'   '}&#125;
											{'\n'}
											<span style={{ color: '#64748b' }}>9 </span>
											{'   '}
											<span style={{ color: '#38bdf8' }}>return </span>&#123;&#125;;
											{'\n'}
											<span style={{ color: '#64748b' }}>10</span>&#125;
										</code>
									</pre>
								</div>
							</div>

							{/* Bottom Action Pill */}
							<a
								href="#" data-open-contact="true"
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									padding: '10px 14px',
									background: '#ecfdf5',
									border: '1px solid #a7f3d0',
									borderRadius: '14px',
									textDecoration: 'none',
									transition: 'background 0.2s',
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
									<span
										style={{
											width: '20px',
											height: '20px',
											borderRadius: '50%',
											background: '#10b981',
											color: '#ffffff',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											fontSize: '11px',
											fontWeight: 800,
										}}
									>
										✓
									</span>
									<div>
										<div style={{ fontSize: '11px', fontWeight: 800, color: '#065f46', lineHeight: 1.2 }}>
											All Test Cases Passed
										</div>
										<div style={{ fontSize: '9.5px', color: '#047857' }}>Runtime: 12 ms | Memory: 10.4 MB</div>
									</div>
								</div>
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5">
									<path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</a>

							{/* Learn More & Explore Button */}
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									gap: '8px',
									marginTop: '12px',
									padding: '9px 14px',
									borderRadius: '12px',
									background: '#0f172a',
									color: '#ffffff',
									fontSize: '12px',
									fontWeight: 700,
								}}
							>
								<span>Explore on LMS</span>
								<span>→</span>
							</div>
						</div>

						{/* CARD 3: Proven Placements (FEATURED DARK OBSIDIAN CARD) */}
						{/* CARD 3: Proven Placements (WHITE HIGHLIGHTED CARD) */}
						<div
							className={`program-card ${activeStep === 3 ? 'program-card-highlighted' : ''}`}
							onMouseEnter={() => setHoveredCard(3)}
							onMouseLeave={() => setHoveredCard(null)}
							onClick={() => setSelectedCard(selectedCard === 3 ? null : 3)}
							style={{
								background: 'linear-gradient(165deg, #e0f2fe 0%, #f0f7ff 35%, #ffffff 100%)',
								border: activeStep === 3 ? '2px solid #2563eb' : '1.5px solid #93c5fd',
								borderRadius: '26px',
								padding: '24px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								boxShadow:
									activeStep === 3
										? '0 25px 60px -10px rgba(37, 99, 235, 0.25), 0 0 0 1px #2563eb'
										: '0 10px 30px -10px rgba(37, 99, 235, 0.12), 0 4px 12px -2px rgba(37, 99, 235, 0.06)',
								transform: activeStep === 3 ? 'translateY(-14px) scale(1.03)' : 'translateY(0) scale(1)',
								zIndex: activeStep === 3 ? 20 : 2,
								opacity: activeStep && activeStep !== 3 ? 0.75 : 1,
								transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
								position: 'relative',
								cursor: 'pointer',
							}}
						>
							<div>
								{/* Header */}
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										marginBottom: '14px',
									}}
								>
									<span
										style={{
											fontSize: '11px',
											fontWeight: 800,
											letterSpacing: '0.08em',
											color: '#2563eb',
											textTransform: 'uppercase',
										}}
									>
										03 / PROVE
									</span>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
										<path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>

								<h3
									style={{
										fontFamily: "'Roboto Condensed', sans-serif",
										fontSize: '22px',
										fontWeight: 900,
										textTransform: 'uppercase',
										letterSpacing: '-0.025em',
										color: '#0f172a',
										margin: '0 0 4px',
									}}
								>
									Proven Placements
								</h3>
								<p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 20px' }}>
									Real outcomes. Real opportunities.
								</p>

								{/* 2 Big Metrics */}
								<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
									<div>
										<div
											style={{
												fontFamily: "'Roboto Condensed', sans-serif",
												fontSize: '32px',
												fontWeight: 900,
												letterSpacing: '-0.02em',
												color: '#0f172a',
												lineHeight: 1,
											}}
										>
											1,000+
										</div>
										<div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>Students Placed</div>
									</div>
									<div>
										<div
											style={{
												fontFamily: "'Roboto Condensed', sans-serif",
												fontSize: '32px',
												fontWeight: 900,
												letterSpacing: '-0.02em',
												color: '#2563eb',
												lineHeight: 1,
											}}
										>
											94.8%
										</div>
										<div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>Placement Ratio</div>
									</div>
								</div>

								{/* Refined Area Chart with Floating Growth Badge */}
								<div style={{ position: 'relative', height: '65px', marginBottom: '16px' }}>
									<svg
										viewBox="0 0 240 65"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										style={{ width: '100%', height: '100%' }}
										preserveAspectRatio="none"
									>
										<defs>
											<linearGradient id="cleanPlacementChartGradLight" x1="0" y1="0" x2="0" y2="1">
												<stop offset="0%" stopColor="#2563eb" stopOpacity="0.18" />
												<stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
											</linearGradient>
										</defs>
										<path
											d="M0 55 Q 40 50, 70 38 T 140 25 T 190 18 T 240 8 L 240 65 L 0 65 Z"
											fill="url(#cleanPlacementChartGradLight)"
										/>
										<path
											d="M0 55 Q 40 50, 70 38 T 140 25 T 190 18 T 240 8"
											stroke="#2563eb"
											strokeWidth="2.5"
											strokeLinecap="round"
										/>
									</svg>

									{/* Floating Pill Badge */}
									<div
										style={{
											position: 'absolute',
											top: '8px',
											right: '30px',
											background: '#eff6ff',
											border: '1px solid #bfdbfe',
											color: '#1d4ed8',
											fontSize: '10px',
											fontWeight: 700,
											padding: '3px 8px',
											borderRadius: '999px',
											display: 'inline-flex',
											alignItems: 'center',
											gap: '4px',
											boxShadow: '0 2px 6px rgba(37, 99, 235, 0.1)',
										}}
									>
										<span>↑ +18.4%</span>
										<span style={{ opacity: 0.85, fontSize: '9px' }}>YoY Growth</span>
									</div>
								</div>
							</div>

							{/* Bottom Recruiters Row with Clean Unboxed Logos */}
							<div
								style={{
									borderTop: '1px solid #f1f5f9',
									paddingTop: '12px',
								}}
							>
								<div
									style={{
										fontSize: '10px',
										color: '#94a3b8',
										textTransform: 'uppercase',
										letterSpacing: '0.08em',
										fontWeight: 700,
										marginBottom: '10px',
									}}
								>
									TOP RECRUITERS
								</div>
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										padding: '2px 2px',
									}}
								>
									{/* TCS Logo */}
									<div title="Tata Consultancy Services" style={{ display: 'flex', alignItems: 'center' }}>
										<img
											src="/assets/recruiter-tcs.png"
											alt="TCS"
											style={{
												height: '20px',
												width: 'auto',
												objectFit: 'contain',
												display: 'block',
											}}
										/>
									</div>

									{/* Infosys Logo */}
									<div title="Infosys" style={{ display: 'flex', alignItems: 'center' }}>
										<svg width="54" height="20" viewBox="0 0 100 32" fill="none">
											<text
												x="50%"
												y="48%"
												dominantBaseline="middle"
												textAnchor="middle"
												fill="#007CC3"
												fontFamily="'Helvetica Neue', Arial, sans-serif"
												fontWeight="800"
												fontSize="18"
												letterSpacing="-0.5"
											>
												Infosys
											</text>
											<path d="M16 26 C40 29, 65 29, 84 25" stroke="#007CC3" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
										</svg>
									</div>

									{/* Accenture Logo */}
									<div title="Accenture" style={{ display: 'flex', alignItems: 'center' }}>
										<span
											style={{
												fontFamily: "'Inter', sans-serif",
												fontWeight: 800,
												fontSize: '12.5px',
												color: '#0f172a',
												display: 'inline-flex',
												alignItems: 'center',
											}}
										>
											<span style={{ color: '#a855f7', marginRight: '2px', fontWeight: 900 }}>&gt;</span>accenture
										</span>
									</div>

									{/* PwC Logo */}
									<div title="PricewaterhouseCoopers (PwC)" style={{ display: 'flex', alignItems: 'center' }}>
										<img
											src="/assets/recruiter-pwc.png"
											alt="PwC"
											style={{
												height: '18px',
												width: 'auto',
												objectFit: 'contain',
												display: 'block',
											}}
										/>
									</div>
								</div>
							</div>

							{/* Learn More & Explore Button */}
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									gap: '8px',
									marginTop: '14px',
									padding: '9px 14px',
									borderRadius: '12px',
									background: '#2563eb',
									color: '#ffffff',
									fontSize: '12px',
									fontWeight: 700,
									boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
									transition: 'all 0.2s ease',
								}}
							>
								<span>Explore Placements on LMS</span>
								<span>→</span>
							</div>
						</div>

						{/* CARD 4: Interview Ready */}
						<div
							className={`program-card ${activeStep === 4 ? 'program-card-highlighted' : ''}`}
							onMouseEnter={() => setHoveredCard(4)}
							onMouseLeave={() => setHoveredCard(null)}
							onClick={() => setSelectedCard(selectedCard === 4 ? null : 4)}
							style={{
								background: '#ffffff',
								border: activeStep === 4 ? '1.5px solid #2563eb' : '1px solid #e2e8f0',
								borderRadius: '26px',
								padding: '24px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								boxShadow:
									activeStep === 4
										? '0 25px 60px -10px rgba(37, 99, 235, 0.25), 0 0 0 1px #2563eb'
										: '0 10px 30px -10px rgba(0,0,0,0.06), 0 4px 6px -2px rgba(0,0,0,0.02)',
								transform: activeStep === 4 ? 'translateY(-14px) scale(1.03)' : 'translateY(0) scale(1)',
								zIndex: activeStep === 4 ? 20 : 2,
								opacity: activeStep && activeStep !== 4 ? 0.75 : 1,
								transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
								cursor: 'pointer',
								position: 'relative',
							}}
						>
							<div>
								{/* Header */}
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										marginBottom: '14px',
									}}
								>
									<span
										style={{
											fontSize: '11px',
											fontWeight: 800,
											letterSpacing: '0.08em',
											color: '#2563eb',
											textTransform: 'uppercase',
										}}
									>
										04 / PERFORM
									</span>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
										<circle cx="9" cy="7" r="4" />
										<path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
									</svg>
								</div>

								<h3
									style={{
										fontFamily: "'Roboto Condensed', sans-serif",
										fontSize: '22px',
										fontWeight: 900,
										textTransform: 'uppercase',
										letterSpacing: '-0.025em',
										color: '#0f172a',
										margin: '0 0 4px',
									}}
								>
									Interview Ready
								</h3>
								<p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 16px' }}>Be confident. Be ready.</p>

								{/* 4 Interactive Prep Tracks */}
								<div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
									{/* Track 1: Mock Interviews */}
									<a
										href="#" data-open-contact="true"
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											padding: '8px 10px',
											borderRadius: '12px',
											background: '#f8fafc',
											border: '1px solid #f1f5f9',
											textDecoration: 'none',
											transition: 'background 0.2s',
										}}
									>
										<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
											<span
												style={{
													width: '26px',
													height: '26px',
													borderRadius: '8px',
													background: '#eff6ff',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													fontSize: '12px',
												}}
											>
												🛡️
											</span>
											<div>
												<div style={{ fontSize: '11.5px', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
													Mock Interviews
												</div>
												<div style={{ fontSize: '9.5px', color: '#64748b' }}>AI + Expert Feedback</div>
											</div>
										</div>
										<span style={{ color: '#94a3b8', fontSize: '12px' }}>›</span>
									</a>

									{/* Track 2: Technical Rounds */}
									<a
										href="#" data-open-contact="true"
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											padding: '8px 10px',
											borderRadius: '12px',
											background: '#f8fafc',
											border: '1px solid #f1f5f9',
											textDecoration: 'none',
											transition: 'background 0.2s',
										}}
									>
										<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
											<span
												style={{
													width: '26px',
													height: '26px',
													borderRadius: '8px',
													background: '#f0fdfa',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													fontSize: '12px',
												}}
											>
												💬
											</span>
											<div>
												<div style={{ fontSize: '11.5px', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
													Technical Rounds
												</div>
												<div style={{ fontSize: '9.5px', color: '#64748b' }}>Company specific prep</div>
											</div>
										</div>
										<span style={{ color: '#94a3b8', fontSize: '12px' }}>›</span>
									</a>

									{/* Track 3: HR & Behavioral */}
									<a
										href="#" data-open-contact="true"
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											padding: '8px 10px',
											borderRadius: '12px',
											background: '#f8fafc',
											border: '1px solid #f1f5f9',
											textDecoration: 'none',
											transition: 'background 0.2s',
										}}
									>
										<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
											<span
												style={{
													width: '26px',
													height: '26px',
													borderRadius: '8px',
													background: '#fff7ed',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													fontSize: '12px',
												}}
											>
												👥
											</span>
											<div>
												<div style={{ fontSize: '11.5px', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
													HR & Behavioral
												</div>
												<div style={{ fontSize: '9.5px', color: '#64748b' }}>Real interview simulations</div>
											</div>
										</div>
										<span style={{ color: '#94a3b8', fontSize: '12px' }}>›</span>
									</a>

									{/* Track 4: Communication */}
									<a
										href="#" data-open-contact="true"
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											padding: '8px 10px',
											borderRadius: '12px',
											background: '#f8fafc',
											border: '1px solid #f1f5f9',
											textDecoration: 'none',
											transition: 'background 0.2s',
										}}
									>
										<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
											<span
												style={{
													width: '26px',
													height: '26px',
													borderRadius: '8px',
													background: '#eff6ff',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													fontSize: '12px',
												}}
											>
												🎯
											</span>
											<div>
												<div style={{ fontSize: '11.5px', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
													Communication
												</div>
												<div style={{ fontSize: '9.5px', color: '#64748b' }}>Build your confidence</div>
											</div>
										</div>
										<span style={{ color: '#94a3b8', fontSize: '12px' }}>›</span>
									</a>
								</div>
							</div>

							{/* Bottom Avatar Stack */}
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									borderTop: '1px solid #f1f5f9',
									paddingTop: '12px',
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
									<div style={{ display: 'flex', marginLeft: '6px' }}>
										<span
											style={{
												width: '22px',
												height: '22px',
												borderRadius: '50%',
												background: '#3b82f6',
												color: '#ffffff',
												fontSize: '9px',
												fontWeight: 700,
												display: 'inline-flex',
												alignItems: 'center',
												justifyContent: 'center',
												border: '1.5px solid #ffffff',
												marginLeft: '-6px',
											}}
										>
											S
										</span>
										<span
											style={{
												width: '22px',
												height: '22px',
												borderRadius: '50%',
												background: '#10b981',
												color: '#ffffff',
												fontSize: '9px',
												fontWeight: 700,
												display: 'inline-flex',
												alignItems: 'center',
												justifyContent: 'center',
												border: '1.5px solid #ffffff',
												marginLeft: '-6px',
											}}
										>
											A
										</span>
										<span
											style={{
												width: '22px',
												height: '22px',
												borderRadius: '50%',
												background: '#f59e0b',
												color: '#ffffff',
												fontSize: '9px',
												fontWeight: 700,
												display: 'inline-flex',
												alignItems: 'center',
												justifyContent: 'center',
												border: '1.5px solid #ffffff',
												marginLeft: '-6px',
											}}
										>
											R
										</span>
									</div>
									<span style={{ fontSize: '10.5px', fontWeight: 700, color: '#334155' }}>
										Join 10,000+ learners
									</span>
								</div>
								<span style={{ color: '#94a3b8', fontSize: '12px' }}>›</span>
							</div>

							{/* Learn More & Explore Button */}
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									gap: '8px',
									marginTop: '12px',
									padding: '9px 14px',
									borderRadius: '12px',
									background: '#0f172a',
									color: '#ffffff',
									fontSize: '12px',
									fontWeight: 700,
								}}
							>
								<span>Start Free on LMS</span>
								<span>→</span>
							</div>
						</div>
					</div>
				</div>

				{/* 3. Bottom Timeline Stepper */}
				<div
					className="programs-bottom-stepper"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						borderTop: '1px solid #e2e8f0',
						paddingTop: '24px',
						flexWrap: 'wrap',
						gap: '20px',
					}}
				>
					{/* Left Category Label */}
					<div style={{ flexShrink: 0 }}>
						<div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: '#94a3b8' }}>
							ONE ECOSYSTEM
						</div>
						<div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: '#94a3b8' }}>
							FOUR STAGES
						</div>
					</div>

					{/* 4 Center Connected Steps with Progression Line Between Pills */}
					<div
						style={{
							position: 'relative',
							flex: 1,
							maxWidth: '840px',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						{/* Progression Line connecting behind the pills */}
						<div
							style={{
								position: 'absolute',
								top: '50%',
								left: '12.5%',
								right: '12.5%',
								height: '3px',
								background: '#e2e8f0',
								borderRadius: '999px',
								transform: 'translateY(-50%)',
								zIndex: 1,
								pointerEvents: 'none',
							}}
						>
							<div
								style={{
									height: '100%',
									width:
										activeStep === 1
											? '0%'
											: activeStep === 2
											? '33.33%'
											: activeStep === 3
											? '66.66%'
											: activeStep === 4
											? '100%'
											: '0%',
									background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)',
									borderRadius: '999px',
									transition: 'width 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
									boxShadow: '0 0 10px rgba(37, 99, 235, 0.45)',
								}}
							/>
						</div>

						{/* 4 Steps Grid Row */}
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(4, 1fr)',
								gap: '14px',
								width: '100%',
								position: 'relative',
								zIndex: 2,
							}}
						>
							{/* Step 1: PREPARE */}
							<div
								onMouseEnter={() => setHoveredCard(1)}
								onMouseLeave={() => setHoveredCard(null)}
								onClick={() => setSelectedCard(selectedCard === 1 ? null : 1)}
								style={{
									display: 'flex',
									justifyContent: 'center',
									cursor: 'pointer',
									userSelect: 'none',
								}}
							>
								<div
									style={{
										padding: '8px 16px',
										borderRadius: '12px',
										background: activeStep === 1 ? '#eff6ff' : '#ffffff',
										border: activeStep === 1 ? '1.5px solid #2563eb' : '1px solid #e2e8f0',
										transform: activeStep === 1 ? 'translateY(-2px) scale(1.03)' : 'none',
										boxShadow:
											activeStep === 1
												? '0 6px 18px rgba(37, 99, 235, 0.16), 0 0 0 1px #bfdbfe'
												: '0 2px 6px rgba(0,0,0,0.03)',
										transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
										textAlign: 'center',
										width: '100%',
										maxWidth: '180px',
									}}
								>
									<div
										style={{
											fontSize: '11px',
											fontWeight: 800,
											color: activeStep === 1 ? '#2563eb' : '#0f172a',
											letterSpacing: '0.04em',
											transition: 'color 0.2s ease',
										}}
									>
										PREPARE
									</div>
									<div style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>Build your basics</div>
								</div>
							</div>

							{/* Step 2: PRACTICE */}
							<div
								onMouseEnter={() => setHoveredCard(2)}
								onMouseLeave={() => setHoveredCard(null)}
								onClick={() => setSelectedCard(selectedCard === 2 ? null : 2)}
								style={{
									display: 'flex',
									justifyContent: 'center',
									cursor: 'pointer',
									userSelect: 'none',
								}}
							>
								<div
									style={{
										padding: '8px 16px',
										borderRadius: '12px',
										background: activeStep === 2 ? '#eff6ff' : '#ffffff',
										border: activeStep === 2 ? '1.5px solid #2563eb' : '1px solid #e2e8f0',
										transform: activeStep === 2 ? 'translateY(-2px) scale(1.03)' : 'none',
										boxShadow:
											activeStep === 2
												? '0 6px 18px rgba(37, 99, 235, 0.16), 0 0 0 1px #bfdbfe'
												: '0 2px 6px rgba(0,0,0,0.03)',
										transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
										textAlign: 'center',
										width: '100%',
										maxWidth: '180px',
									}}
								>
									<div
										style={{
											fontSize: '11px',
											fontWeight: 800,
											color: activeStep === 2 ? '#2563eb' : '#0f172a',
											letterSpacing: '0.04em',
											transition: 'color 0.2s ease',
										}}
									>
										PRACTICE
									</div>
									<div style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>Sharpen your skills</div>
								</div>
							</div>

							{/* Step 3: PROVE */}
							<div
								onMouseEnter={() => setHoveredCard(3)}
								onMouseLeave={() => setHoveredCard(null)}
								onClick={() => setSelectedCard(selectedCard === 3 ? null : 3)}
								style={{
									display: 'flex',
									justifyContent: 'center',
									cursor: 'pointer',
									userSelect: 'none',
								}}
							>
								<div
									style={{
										padding: '8px 16px',
										borderRadius: '12px',
										background: activeStep === 3 ? '#eff6ff' : '#ffffff',
										border: activeStep === 3 ? '1.5px solid #2563eb' : '1px solid #e2e8f0',
										transform: activeStep === 3 ? 'translateY(-2px) scale(1.03)' : 'none',
										boxShadow:
											activeStep === 3
												? '0 6px 18px rgba(37, 99, 235, 0.16), 0 0 0 1px #bfdbfe'
												: '0 2px 6px rgba(0,0,0,0.03)',
										transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
										textAlign: 'center',
										width: '100%',
										maxWidth: '180px',
									}}
								>
									<div
										style={{
											fontSize: '11px',
											fontWeight: 800,
											color: activeStep === 3 ? '#2563eb' : '#0f172a',
											letterSpacing: '0.04em',
											transition: 'color 0.2s ease',
										}}
									>
										PROVE
									</div>
									<div style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>Get placed</div>
								</div>
							</div>

							{/* Step 4: PERFORM */}
							<div
								onMouseEnter={() => setHoveredCard(4)}
								onMouseLeave={() => setHoveredCard(null)}
								onClick={() => setSelectedCard(selectedCard === 4 ? null : 4)}
								style={{
									display: 'flex',
									justifyContent: 'center',
									cursor: 'pointer',
									userSelect: 'none',
								}}
							>
								<div
									style={{
										padding: '8px 16px',
										borderRadius: '12px',
										background: activeStep === 4 ? '#eff6ff' : '#ffffff',
										border: activeStep === 4 ? '1.5px solid #2563eb' : '1px solid #e2e8f0',
										transform: activeStep === 4 ? 'translateY(-2px) scale(1.03)' : 'none',
										boxShadow:
											activeStep === 4
												? '0 6px 18px rgba(37, 99, 235, 0.16), 0 0 0 1px #bfdbfe'
												: '0 2px 6px rgba(0,0,0,0.03)',
										transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
										textAlign: 'center',
										width: '100%',
										maxWidth: '180px',
									}}
								>
									<div
										style={{
											fontSize: '11px',
											fontWeight: 800,
											color: activeStep === 4 ? '#2563eb' : '#0f172a',
											letterSpacing: '0.04em',
											transition: 'color 0.2s ease',
										}}
									>
										PERFORM
									</div>
									<div style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>Excel in your career</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Label */}
					<div style={{ flexShrink: 0, textAlign: 'right' }}>
						<div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', color: '#94a3b8' }}>
							MORE THAN PREPARATION
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
