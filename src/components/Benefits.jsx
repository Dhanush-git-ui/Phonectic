import { useState } from 'react'

export default function Benefits() {
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
				{/* 1. Header with Angled Badge */}
				<div style={{ textAlign: 'center', marginBottom: '60px' }}>
					<div
						style={{
							display: 'inline-flex',
							alignItems: 'center',
							gap: '6px',
							marginBottom: '20px',
						}}
					>
						<span
							style={{
								display: 'inline-block',
								padding: '4px 10px',
								background: '#f1f5f9',
								color: '#64748b',
								fontSize: '12px',
								fontWeight: 700,
								borderRadius: '8px',
								transform: 'rotate(-14deg)',
								border: '1px solid #e2e8f0',
								boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
							}}
						>
							01
						</span>
						<span
							style={{
								display: 'inline-block',
								padding: '4px 12px',
								background: '#1e293b',
								color: '#ffffff',
								fontSize: '11px',
								fontWeight: 800,
								letterSpacing: '0.08em',
								borderRadius: '9999px',
								transform: 'rotate(8deg)',
								boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
							}}
						>
							PROGRAMS
						</span>
					</div>

					<h2
						style={{
							fontFamily: "'Anton', sans-serif",
							fontSize: 'clamp(36px, 5vw, 64px)',
							lineHeight: 1.05,
							fontWeight: 900,
							letterSpacing: '-0.01em',
							color: '#0f172a',
							textTransform: 'uppercase',
							margin: '0 0 16px',
						}}
					>
						EVERYTHING PLACEMENT. UNIFIED.
					</h2>

					<p
						style={{
							fontFamily: "'Plus Jakarta Sans', sans-serif",
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
				<div style={{ position: 'relative', width: '100%', marginBottom: '80px' }}>
					{/* Top Blue Connecting Weaving Curve (Desktop & Tablet) */}
					<div
						className="programs-connecting-curve-wrap"
						style={{
							position: 'absolute',
							top: '-20px',
							left: '0',
							width: '100%',
							height: '60px',
							pointerEvents: 'none',
							zIndex: 1,
						}}
					>
						<svg
							viewBox="0 0 1200 60"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							style={{ width: '100%', height: '100%', overflow: 'visible' }}
							preserveAspectRatio="none"
						>
							{/* Soft Glow Path */}
							<path
								d="M 140 26 C 210 -15, 330 65, 440 26 C 510 -15, 630 65, 740 26 C 810 -15, 930 65, 1060 26"
								stroke="#93c5fd"
								strokeWidth="4"
								strokeLinecap="round"
								opacity="0.4"
							/>
							{/* Crisp Core Blue Path */}
							<path
								d="M 140 26 C 210 -15, 330 65, 440 26 C 510 -15, 630 65, 740 26 C 810 -15, 930 65, 1060 26"
								stroke="#2563eb"
								strokeWidth="2"
								strokeLinecap="round"
								strokeDasharray="6 4"
							/>
							{/* Glowing Node Dots */}
							<circle cx="140" cy="26" r="6" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" />
							<circle cx="440" cy="26" r="6" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" />
							<circle cx="740" cy="26" r="6" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" />
							<circle cx="1060" cy="26" r="6" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" />
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
						}}
					>
						{/* CARD 1: Aptitude Mastery */}
						<div
							className="program-card"
							style={{
								background: '#ffffff',
								border: '1px solid #e2e8f0',
								borderRadius: '26px',
								padding: '24px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								boxShadow: '0 10px 30px -10px rgba(0,0,0,0.06), 0 4px 6px -2px rgba(0,0,0,0.02)',
								transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
										fontFamily: "'Plus Jakarta Sans', sans-serif",
										fontSize: '20px',
										fontWeight: 800,
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
								href="https://www.phoneticedu.com/auth/login"
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
						</div>

						{/* CARD 2: Technical & DSA Coding */}
						<div
							className="program-card"
							style={{
								background: '#ffffff',
								border: '1px solid #e2e8f0',
								borderRadius: '26px',
								padding: '24px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								boxShadow: '0 10px 30px -10px rgba(0,0,0,0.06), 0 4px 6px -2px rgba(0,0,0,0.02)',
								transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
										02 / BUILD
									</span>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
										<path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>

								<h3
									style={{
										fontFamily: "'Plus Jakarta Sans', sans-serif",
										fontSize: '20px',
										fontWeight: 800,
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
								href="https://www.phoneticedu.com/auth/login"
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
						</div>

						{/* CARD 3: Proven Placements (FEATURED DARK OBSIDIAN CARD) */}
						<div
							className="program-card program-card-featured"
							style={{
								background: 'radial-gradient(ellipse at 50% 0%, #1e3a8a 0%, #090d16 100%)',
								border: '1.5px solid rgba(59, 130, 246, 0.45)',
								borderRadius: '26px',
								padding: '24px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								boxShadow:
									'0 20px 45px -10px rgba(37, 99, 235, 0.35), 0 0 0 1px rgba(255,255,255,0.08) inset',
								transition: 'transform 0.3s ease, box-shadow 0.3s ease',
								position: 'relative',
								overflow: 'hidden',
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
											color: '#38bdf8',
											textTransform: 'uppercase',
										}}
									>
										03 / PROVE
									</span>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
										<path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>

								<h3
									style={{
										fontFamily: "'Plus Jakarta Sans', sans-serif",
										fontSize: '20px',
										fontWeight: 800,
										color: '#ffffff',
										margin: '0 0 4px',
									}}
								>
									Proven Placements
								</h3>
								<p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 20px' }}>
									Real outcomes. Real opportunities.
								</p>

								{/* 2 Big Metrics */}
								<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '18px' }}>
									<div>
										<div
											style={{
												fontFamily: "'Anton', sans-serif",
												fontSize: '28px',
												color: '#ffffff',
												lineHeight: 1,
											}}
										>
											1,000+
										</div>
										<div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>Students Placed</div>
									</div>
									<div>
										<div
											style={{
												fontFamily: "'Anton', sans-serif",
												fontSize: '28px',
												color: '#38bdf8',
												lineHeight: 1,
											}}
										>
											94.8%
										</div>
										<div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>Placement Ratio</div>
									</div>
								</div>

								{/* Glowing Area Chart with Floating Badge */}
								<div style={{ position: 'relative', height: '70px', marginBottom: '16px' }}>
									<svg
										viewBox="0 0 240 70"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										style={{ width: '100%', height: '100%' }}
										preserveAspectRatio="none"
									>
										<defs>
											<linearGradient id="areaChartGrad" x1="0" y1="0" x2="0" y2="1">
												<stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
												<stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
											</linearGradient>
										</defs>
										<path
											d="M0 60 Q 40 55, 70 42 T 140 28 T 190 22 T 240 10 L 240 70 L 0 70 Z"
											fill="url(#areaChartGrad)"
										/>
										<path
											d="M0 60 Q 40 55, 70 42 T 140 28 T 190 22 T 240 10"
											stroke="#38bdf8"
											strokeWidth="2.5"
											strokeLinecap="round"
										/>
									</svg>

									{/* Floating Pill Badge */}
									<div
										style={{
											position: 'absolute',
											top: '12px',
											right: '40px',
											background: '#1d4ed8',
											color: '#ffffff',
											fontSize: '10px',
											fontWeight: 700,
											padding: '3px 8px',
											borderRadius: '999px',
											display: 'inline-flex',
											alignItems: 'center',
											gap: '4px',
											boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
										}}
									>
										<span>↑ +18.4%</span>
										<span style={{ opacity: 0.8, fontSize: '9px' }}>YoY Growth</span>
									</div>
								</div>
							</div>

							{/* Bottom Recruiters Row */}
							<div
								style={{
									borderTop: '1px solid rgba(255,255,255,0.1)',
									paddingTop: '12px',
								}}
							>
								<div
									style={{
										fontSize: '10px',
										color: '#64748b',
										textTransform: 'uppercase',
										letterSpacing: '0.06em',
										fontWeight: 700,
										marginBottom: '8px',
									}}
								>
									Top Recruiters
								</div>
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										opacity: 0.88,
									}}
								>
									<span style={{ color: '#ffffff', fontWeight: 800, fontSize: '13px', letterSpacing: '1px' }}>
										tcs
									</span>
									<span style={{ color: '#ffffff', fontWeight: 700, fontSize: '12px' }}>Infosys</span>
									<span style={{ color: '#ffffff', fontWeight: 700, fontSize: '12px' }}>&gt;accenture</span>
									<span style={{ color: '#ffffff', fontWeight: 700, fontSize: '12px' }}>Capgemini</span>
								</div>
							</div>
						</div>

						{/* CARD 4: Interview Ready */}
						<div
							className="program-card"
							style={{
								background: '#ffffff',
								border: '1px solid #e2e8f0',
								borderRadius: '26px',
								padding: '24px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								boxShadow: '0 10px 30px -10px rgba(0,0,0,0.06), 0 4px 6px -2px rgba(0,0,0,0.02)',
								transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
										fontFamily: "'Plus Jakarta Sans', sans-serif",
										fontSize: '20px',
										fontWeight: 800,
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
										href="https://www.phoneticedu.com/auth/login"
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
										href="https://www.phoneticedu.com/auth/login"
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
										href="https://www.phoneticedu.com/auth/login"
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
										href="https://www.phoneticedu.com/auth/login"
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

					{/* 4 Center Connected Steps */}
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '28px',
							flex: 1,
							maxWidth: '820px',
							justifyContent: 'space-around',
							flexWrap: 'wrap',
						}}
					>
						{/* Step 1 */}
						<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
							<span
								style={{
									width: '10px',
									height: '10px',
									borderRadius: '50%',
									background: '#2563eb',
									boxShadow: '0 0 8px rgba(37,99,235,0.6)',
								}}
							/>
							<div>
								<div style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a', letterSpacing: '0.04em' }}>
									PREPARE
								</div>
								<div style={{ fontSize: '10px', color: '#64748b' }}>Build your basics</div>
							</div>
						</div>

						{/* Step 2 */}
						<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
							<span
								style={{
									width: '10px',
									height: '10px',
									borderRadius: '50%',
									background: '#2563eb',
									boxShadow: '0 0 8px rgba(37,99,235,0.6)',
								}}
							/>
							<div>
								<div style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a', letterSpacing: '0.04em' }}>
									BUILD
								</div>
								<div style={{ fontSize: '10px', color: '#64748b' }}>Sharpen your skills</div>
							</div>
						</div>

						{/* Step 3 */}
						<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
							<span
								style={{
									width: '10px',
									height: '10px',
									borderRadius: '50%',
									background: '#2563eb',
									boxShadow: '0 0 8px rgba(37,99,235,0.6)',
								}}
							/>
							<div>
								<div style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a', letterSpacing: '0.04em' }}>
									PROVE
								</div>
								<div style={{ fontSize: '10px', color: '#64748b' }}>Get placed</div>
							</div>
						</div>

						{/* Step 4 */}
						<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
							<span
								style={{
									width: '10px',
									height: '10px',
									borderRadius: '50%',
									background: '#2563eb',
									boxShadow: '0 0 8px rgba(37,99,235,0.6)',
								}}
							/>
							<div>
								<div style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a', letterSpacing: '0.04em' }}>
									PERFORM
								</div>
								<div style={{ fontSize: '10px', color: '#64748b' }}>Excel in your career</div>
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
