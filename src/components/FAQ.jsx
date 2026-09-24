import { useState } from 'react'

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState(0)

	const faqData = [
		{
			id: 1,
			num: '1.',
			title: 'UNDERSTANDING YOUR BUSINESS & FOUNDATIONS',
			shortDesc:
				'We begin by getting to know your baseline skills across speed math, logical agility, and quantitative aptitude. By understanding your challenges, goals, and target companies, we lay the foundation.',
			bgColor: '#ff7600',
			textColor: '#ffffff',
			btnBg: '#ffffff',
			btnColor: '#0f172a',
			subcards: [
				{
					title: 'Strategy',
					subtitle: 'Duration: 3 Weeks',
					pills: [
						{ text: 'Speed Math', bg: '#d9f99d', color: '#365314' },
						{ text: 'Goals', bg: '#fed7aa', color: '#9a3412' },
						{ text: 'Ideation', bg: '#fecaca', color: '#991b1b' },
						{ text: 'Research', bg: '#a7f3d0', color: '#065f46' },
					],
					desc: 'Diagnostic benchmarking across 12 aptitude modules to build rapid mental math instincts and calculation velocity.',
				},
				{
					title: 'Discovery',
					subtitle: 'Duration: 2 Weeks',
					pills: [
						{ text: 'User Interviews', bg: '#bfdbfe', color: '#1e40af' },
						{ text: 'Target', bg: '#1e293b', color: '#ffffff' },
						{ text: 'Flow Chart', bg: '#ddd6fe', color: '#5b21b6' },
						{ text: 'Preliminary', bg: '#fecdd3', color: '#9f1239' },
					],
					desc: 'Identify weak-area patterns, time-per-question anomalies, and cognitive bottlenecks with targeted practice sprints.',
				},
				{
					title: 'Solution',
					subtitle: 'Duration: 4 Weeks',
					pills: [
						{ text: 'Design Materials', bg: '#0f172a', color: '#ffffff' },
						{ text: 'Copywriting', bg: '#bef264', color: '#365314' },
						{ text: 'Target', bg: '#fdba74', color: '#9a3412' },
						{ text: 'Contents', bg: '#c4b5fd', color: '#5b21b6' },
					],
					desc: 'Deploy comprehensive company-simulated mock exams with live national ranking percentiles and leaderboard streaks.',
				},
			],
		},
		{
			id: 2,
			num: '2.',
			title: 'STRATEGIC PLANNING AND CREATIVE EXECUTION',
			shortDesc:
				'We start by understanding your brand, industry, and audience, ensuring we address your challenges, define goals, and highlight your unique value through reverse-engineered hiring patterns.',
			bgColor: '#d2f826',
			textColor: '#0f172a',
			btnBg: '#0f172a',
			btnColor: '#ffffff',
			type: 'swatch_and_typography',
			subcards: [
				{
					type: 'palette',
					headerTag: 'Marketing Material Design',
					pageTag: 'Page 05',
					title: 'Color Pallete',
					desc: 'At Revento, we believe that colors speak louder than words.',
					swatches: [
						{ code: '#56DC3A', bg: '#56dc3a' },
						{ code: '#643GF6', bg: '#818cf8' },
						{ code: '#DFG89K', bg: '#facc15' },
						{ code: '#JS9653', bg: '#10b981' },
					],
				},
				{
					type: 'typography',
					headerTag: 'Typography',
					title: 'Typography That Amplifies',
					bigAa: 'Aa',
					primary: 'Anton',
					secondary: 'DM Sans',
					charset: '1234567890',
				},
				{
					type: 'card_preview',
					headerTag: 'Marketing Posts',
					desc: 'Engaging Designs That Drive Social Media Success',
					previewCard: {
						user: 'Revento',
						handle: '@revento_hq',
						badge: 'Verified',
						stats: '14.2k Shares · 98% Match',
					},
				},
			],
		},
		{
			id: 3,
			num: '3.',
			title: 'COLLABORATION AND OPTIMIZATION',
			shortDesc:
				'Our process begins with a deep dive into your brand, industry, and audience to uncover challenges, define goals, and craft tailored solutions with 1-on-1 expert mentor evaluations.',
			bgColor: '#ff4732',
			textColor: '#ffffff',
			btnBg: '#ffffff',
			btnColor: '#0f172a',
			type: 'sticky_notes',
			subcards: [
				{
					type: 'sprint_check',
					badge: '1-3 Sprints',
					time: '2.30 hrs',
					heading: 'Discovery and Strategy Development and Conduct market research',
					body: 'Identify target audience segments and key value propositions. Develop a comprehensive marketing strategy.',
				},
				{
					type: 'stickies',
					title: 'Note Taking Session',
					subtitle: 'Notes for Marketing Research',
					notes: [
						{ text: 'Identify who your ideal customers are by analyzing demographics', bg: '#fef08a', color: '#854d0e' },
						{ text: 'Analyze competitor positioning & differentiation', bg: '#99f6e4', color: '#115e59' },
						{ text: 'Prioritize high-impact speed math heuristics', bg: '#fde047', color: '#854d0e' },
						{ text: 'Validate problem statement with live code', bg: '#bef264', color: '#3f6212' },
					],
				},
				{
					type: 'sprint_check',
					badge: '3-5 Sprints',
					time: '4.00 hrs',
					heading: 'Discovery and Strategy Development',
					body: 'Identify target audience segments and key value propositions. Develop a comprehensive marketing strategy.',
				},
			],
		},
		{
			id: 4,
			num: '4.',
			title: 'DELIVERING AND REPORTING RESULTS',
			shortDesc:
				'We learn your brand, industry, and audience to identify challenges, align goals, and establish the groundwork for delivering impactful strategies across all engineering and degree backgrounds.',
			bgColor: '#2563eb',
			textColor: '#ffffff',
			btnBg: '#ffffff',
			btnColor: '#0f172a',
			subcards: [
				{
					title: 'Engineering All Branches',
					subtitle: 'CSE · ECE · EEE · Mech · Civil',
					pills: [
						{ text: 'Quant Edge', bg: '#dbeafe', color: '#1e40af' },
						{ text: 'Core to Tech', bg: '#fef3c7', color: '#92400e' },
						{ text: 'Logic Mastery', bg: '#d1fae5', color: '#065f46' },
					],
					desc: 'Non-programming students transition effortlessly with visual logic paradigms and step-by-step problem sets.',
				},
				{
					title: 'Degree & MCA Tracks',
					subtitle: 'BCA · B.Sc · MCA · B.Com',
					pills: [
						{ text: 'TCS Smart', bg: '#ede9fe', color: '#5b21b6' },
						{ text: 'Wipro WILP', bg: '#ffedd5', color: '#9a3412' },
						{ text: 'Cognizant GenC', bg: '#fee2e2', color: '#991b1b' },
					],
					desc: 'Dedicated syllabus tailored specifically for recruitment drives catering to 3-year degree and MCA candidates.',
				},
				{
					title: 'Placement Verification',
					subtitle: 'End-to-End Clearance',
					pills: [
						{ text: 'Resume ATS', bg: '#f1f5f9', color: '#0f172a' },
						{ text: 'HR Mock', bg: '#fce7f3', color: '#9d174d' },
						{ text: 'Offer Letter', bg: '#dcfce7', color: '#166534' },
					],
					desc: 'Comprehensive offer guidance, compensation negotiation advice, and final background verification prep.',
				},
			],
		},
	]

	return (
		<section
			id="faq"
			style={{
				position: 'relative',
				width: '100%',
				background: '#ffffff',
				padding: '90px 24px 110px',
				overflow: 'hidden',
			}}
		>
			<div
				style={{
					maxWidth: '1240px',
					margin: '0 auto',
				}}
			>
				{/* Section Header */}
				<div style={{ marginBottom: '50px' }}>
					<span
						style={{
							fontFamily: "'Plus Jakarta Sans', sans-serif",
							fontSize: '13px',
							fontWeight: 800,
							letterSpacing: '0.12em',
							color: '#ff4732',
							textTransform: 'uppercase',
							display: 'block',
							marginBottom: '10px',
						}}
					>
						HOW WE WORK
					</span>
					<h2
						style={{
							fontFamily: "'Anton', sans-serif",
							fontSize: 'clamp(40px, 6vw, 76px)',
							lineHeight: 1.0,
							fontWeight: 900,
							letterSpacing: '-0.02em',
							color: '#0f172a',
							textTransform: 'uppercase',
							margin: 0,
						}}
					>
						OUR WORKING METHOD
					</h2>
				</div>

				{/* Accordion Stack */}
				<div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
					{faqData.map((item, index) => {
						const isOpen = openIndex === index

						if (!isOpen) {
							// ==========================================
							// COLLAPSED ROW (Matches Images 3, 4, 5)
							// ==========================================
							return (
								<div
									key={item.id}
									onClick={() => setOpenIndex(index)}
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
										padding: '32px 10px',
										borderTop: '1px solid #e2e8f0',
										cursor: 'pointer',
										transition: 'background 0.2s',
										gap: '24px',
										flexWrap: 'wrap',
									}}
								>
									{/* Left Number & Title */}
									<div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: '1 1 360px' }}>
										<span
											style={{
												fontFamily: "'Anton', sans-serif",
												fontSize: 'clamp(48px, 5.5vw, 68px)',
												fontWeight: 900,
												color: '#0f172a',
												lineHeight: 1,
											}}
										>
											{item.num}
										</span>
										<h3
											style={{
												fontFamily: "'Anton', sans-serif",
												fontSize: 'clamp(22px, 2.5vw, 32px)',
												fontWeight: 900,
												color: '#0f172a',
												letterSpacing: '-0.01em',
												textTransform: 'uppercase',
												margin: 0,
												lineHeight: 1.1,
											}}
										>
											{item.title}
										</h3>
									</div>

									{/* Right Short Excerpt */}
									<p
										style={{
											flex: '1 1 420px',
											fontFamily: "'Plus Jakarta Sans', sans-serif",
											fontSize: '14.5px',
											lineHeight: 1.55,
											color: '#475569',
											margin: 0,
										}}
									>
										{item.shortDesc}
									</p>

									{/* Circular Down Button */}
									<button
										type="button"
										aria-label="Expand section"
										style={{
											width: '52px',
											height: '52px',
											borderRadius: '50%',
											background: '#0f172a',
											color: '#ffffff',
											border: 'none',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											cursor: 'pointer',
											flexShrink: 0,
											boxShadow: '0 4px 14px rgba(15,23,42,0.15)',
											transition: 'transform 0.2s',
										}}
									>
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3">
											<path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</button>
								</div>
							)
						}

						// ==========================================
						// EXPANDED VIBRANT CARD (Matches Images 3, 4, 5)
						// ==========================================
						return (
							<div
								key={item.id}
								className="faq-expanded-bubble"
								style={{
									position: 'relative',
									background: item.bgColor,
									borderRadius: '36px',
									padding: '44px 40px 48px',
									boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
									transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
									overflow: 'visible',
								}}
							>
								{/* Stylized Speech-Bubble Notches */}
								{/* Top Right Triangular Peak */}
								<div
									style={{
										position: 'absolute',
										top: '-16px',
										right: '180px',
										width: 0,
										height: 0,
										borderLeft: '18px solid transparent',
										borderRight: '18px solid transparent',
										borderBottom: `18px solid ${item.bgColor}`,
										pointerEvents: 'none',
									}}
								/>
								{/* Left Side Bubble Contour Notch */}
								<div
									style={{
										position: 'absolute',
										top: '50%',
										left: '-14px',
										transform: 'translateY(-50%)',
										width: '18px',
										height: '42px',
										borderRadius: '12px 0 0 12px',
										background: item.bgColor,
										pointerEvents: 'none',
									}}
								/>

								{/* Top Header Row */}
								<div
									style={{
										display: 'flex',
										alignItems: 'flex-start',
										justifyContent: 'space-between',
										marginBottom: '40px',
										gap: '24px',
										flexWrap: 'wrap',
									}}
								>
									{/* Number & Title */}
									<div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flex: '1 1 360px' }}>
										<span
											style={{
												fontFamily: "'Anton', sans-serif",
												fontSize: 'clamp(54px, 6vw, 76px)',
												fontWeight: 900,
												color: item.textColor,
												lineHeight: 0.95,
											}}
										>
											{item.num}
										</span>
										<h3
											style={{
												fontFamily: "'Anton', sans-serif",
												fontSize: 'clamp(24px, 2.8vw, 38px)',
												fontWeight: 900,
												color: item.textColor,
												letterSpacing: '-0.01em',
												textTransform: 'uppercase',
												margin: 0,
												lineHeight: 1.05,
											}}
										>
											{item.title}
										</h3>
									</div>

									{/* Description Text */}
									<p
										style={{
											flex: '1 1 380px',
											fontFamily: "'Plus Jakarta Sans', sans-serif",
											fontSize: '15px',
											lineHeight: 1.55,
											color: item.textColor,
											opacity: 0.95,
											margin: 0,
										}}
									>
										{item.shortDesc}
									</p>

									{/* Circular Up Button */}
									<button
										type="button"
										onClick={() => setOpenIndex(-1)}
										aria-label="Collapse section"
										style={{
											width: '52px',
											height: '52px',
											borderRadius: '50%',
											background: item.btnBg,
											color: item.btnColor,
											border: 'none',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											cursor: 'pointer',
											flexShrink: 0,
											boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
											transition: 'transform 0.2s',
										}}
									>
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={item.btnColor} strokeWidth="3">
											<path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</button>
								</div>

								{/* ======================================================== */}
								{/* 3 NESTED WHITE SUBCARDS (Matches Images 3, 4, 5)        */}
								{/* ======================================================== */}
								<div
									style={{
										display: 'grid',
										gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
										gap: '20px',
									}}
								>
									{/* ITEM 2: SWATCHES & TYPOGRAPHY SPECIMEN (Matches Image 3) */}
									{item.type === 'swatch_and_typography' ? (
										<>
											{/* Subcard 1: Palette */}
											<div
												style={{
													background: '#ffffff',
													borderRadius: '24px',
													padding: '24px',
													color: '#0f172a',
													boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
													display: 'flex',
													flexDirection: 'column',
													justifyContent: 'space-between',
												}}
											>
												<div>
													<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b', fontWeight: 600, marginBottom: '12px' }}>
														<span>Marketing Material Design</span>
														<span>Page 05</span>
													</div>
													<h4 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 6px' }}>Color Pallete</h4>
													<p style={{ fontSize: '12.5px', color: '#475569', lineHeight: 1.4, margin: '0 0 16px' }}>
														At Revento, we believe that colors speak louder than words.
													</p>
												</div>
												{/* 4 Swatches */}
												<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
													{item.subcards[0].swatches.map((sw, idx) => (
														<div
															key={idx}
															style={{
																background: sw.bg,
																height: '54px',
																borderRadius: '12px',
																display: 'flex',
																alignItems: 'flex-end',
																padding: '6px 8px',
															}}
														>
															<span style={{ fontSize: '10px', fontWeight: 800, color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
																{sw.code}
															</span>
														</div>
													))}
												</div>
											</div>

											{/* Subcard 2: Typography */}
											<div
												style={{
													background: '#ffffff',
													borderRadius: '24px',
													padding: '24px',
													color: '#0f172a',
													boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
												}}
											>
												<div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, marginBottom: '6px' }}>
													Typography
												</div>
												<h4 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 12px' }}>
													Typography That Amplifies
												</h4>
												<div
													style={{
														fontFamily: "'Anton', sans-serif",
														fontSize: '72px',
														lineHeight: 1,
														color: '#0f172a',
														marginBottom: '10px',
													}}
												>
													Aa
												</div>
												<div style={{ fontSize: '12px', color: '#64748b', marginBottom: '2px' }}>Primary font</div>
												<div style={{ fontFamily: "'Anton', sans-serif", fontSize: '18px', fontWeight: 900, marginBottom: '8px' }}>
													Anton
												</div>
												<div style={{ fontSize: '12px', color: '#64748b', marginBottom: '2px' }}>Secondary font</div>
												<div style={{ fontSize: '14px', fontWeight: 800, marginBottom: '6px' }}>DM Sans</div>
												<div style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '2px' }}>1234567890</div>
											</div>

											{/* Subcard 3: Card preview */}
											<div
												style={{
													background: '#ffffff',
													borderRadius: '24px',
													padding: '24px',
													color: '#0f172a',
													boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
													display: 'flex',
													flexDirection: 'column',
													justifyContent: 'space-between',
												}}
											>
												<div>
													<div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, marginBottom: '4px' }}>
														Marketing Posts
													</div>
													<h4 style={{ fontSize: '15px', fontWeight: 800, margin: '0 0 14px' }}>
														Engaging Designs That Drive Social Media Success
													</h4>
												</div>
												{/* Mock Social Card */}
												<div
													style={{
														background: '#f8fafc',
														borderRadius: '16px',
														border: '1px solid #e2e8f0',
														padding: '14px',
													}}
												>
													<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
														<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
															<div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#6366f1' }} />
															<span style={{ fontSize: '12px', fontWeight: 800 }}>Revento</span>
														</div>
														<span style={{ color: '#94a3b8', fontSize: '12px' }}>•••</span>
													</div>
													<div
														style={{
															height: '75px',
															borderRadius: '10px',
															background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
															display: 'flex',
															alignItems: 'center',
															justifyContent: 'center',
															color: '#3b82f6',
															fontSize: '11px',
															fontWeight: 700,
														}}
													>
														Social Post Canvas
													</div>
												</div>
											</div>
										</>
									) : item.type === 'sticky_notes' ? (
										// ==========================================
										// ITEM 3: STICKY NOTES GRID (Matches Image 4)
										// ==========================================
										<>
											{/* Subcard 1: 1-3 Sprints */}
											<div
												style={{
													background: '#ffffff',
													borderRadius: '24px',
													padding: '24px',
													color: '#0f172a',
													boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
													display: 'flex',
													flexDirection: 'column',
													justifyContent: 'space-between',
												}}
											>
												<div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
													<span
														style={{
															width: '32px',
															height: '32px',
															borderRadius: '50%',
															background: '#a855f7',
															color: '#ffffff',
															display: 'flex',
															alignItems: 'center',
															justifyContent: 'center',
															fontWeight: 800,
															fontSize: '14px',
														}}
													>
														✓
													</span>
													<div>
														<span style={{ fontSize: '14px', fontWeight: 800 }}>1-3 Sprints</span>
														<span style={{ fontSize: '12px', color: '#64748b', marginLeft: '6px' }}>2.30 hrs</span>
													</div>
												</div>
												<h4 style={{ fontSize: '15px', fontWeight: 800, lineHeight: 1.3, margin: '0 0 10px' }}>
													Discovery and Strategy Development and Conduct market research
												</h4>
												<p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.45, margin: 0 }}>
													Identify target audience segments and key value propositions. Develop a comprehensive marketing strategy.
												</p>
											</div>

											{/* Subcard 2: Post-It / Sticky Notes Grid */}
											<div
												style={{
													background: '#ffffff',
													borderRadius: '24px',
													padding: '22px',
													color: '#0f172a',
													boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
												}}
											>
												<div style={{ fontSize: '13px', fontWeight: 800, marginBottom: '2px' }}>
													Note Taking Session
												</div>
												<div style={{ fontSize: '11px', color: '#64748b', marginBottom: '14px' }}>
													Notes for Marketing Research
												</div>
												{/* 4 Colored Stickies */}
												<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
													{item.subcards[1].notes.map((note, idx) => (
														<div
															key={idx}
															style={{
																background: note.bg,
																color: note.color,
																padding: '10px',
																borderRadius: '10px',
																fontSize: '10px',
																fontWeight: 700,
																lineHeight: 1.35,
																boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
															}}
														>
															{note.text}
														</div>
													))}
												</div>
											</div>

											{/* Subcard 3: 3-5 Sprints */}
											<div
												style={{
													background: '#ffffff',
													borderRadius: '24px',
													padding: '24px',
													color: '#0f172a',
													boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
													display: 'flex',
													flexDirection: 'column',
													justifyContent: 'space-between',
												}}
											>
												<div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
													<span
														style={{
															width: '32px',
															height: '32px',
															borderRadius: '50%',
															background: '#a855f7',
															color: '#ffffff',
															display: 'flex',
															alignItems: 'center',
															justifyContent: 'center',
															fontWeight: 800,
															fontSize: '14px',
														}}
													>
														✓
													</span>
													<span style={{ fontSize: '14px', fontWeight: 800 }}>3-5 Sprints</span>
												</div>
												<h4 style={{ fontSize: '15px', fontWeight: 800, lineHeight: 1.3, margin: '0 0 10px' }}>
													Discovery and Strategy Development
												</h4>
												<p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.45, margin: 0 }}>
													Identify target audience segments and key value propositions. Develop a comprehensive marketing strategy.
												</p>
											</div>
										</>
									) : (
										// ==========================================
										// ITEM 1 & 4: PILL TAGS CARDS (Matches Image 5)
										// ==========================================
										item.subcards.map((sub, idx) => (
											<div
												key={idx}
												style={{
													background: '#ffffff',
													borderRadius: '24px',
													padding: '24px',
													color: '#0f172a',
													boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
													display: 'flex',
													flexDirection: 'column',
													justifyContent: 'space-between',
													minHeight: '220px',
												}}
											>
												<div>
													<div style={{ textAlign: 'center', marginBottom: '14px' }}>
														<h4 style={{ fontSize: '17px', fontWeight: 800, margin: '0 0 2px' }}>
															{sub.title}
														</h4>
														<div style={{ fontSize: '11.5px', color: '#64748b' }}>{sub.subtitle}</div>
													</div>

													{/* Pill Tag Cloud */}
													<div
														style={{
															display: 'flex',
															flexWrap: 'wrap',
															gap: '6px',
															justifyContent: 'center',
															marginBottom: '16px',
														}}
													>
														{sub.pills.map((pill, pIdx) => (
															<span
																key={pIdx}
																style={{
																	background: pill.bg,
																	color: pill.color,
																	padding: '4px 12px',
																	borderRadius: '999px',
																	fontSize: '11px',
																	fontWeight: 800,
																}}
															>
																{pill.text}
															</span>
														))}
													</div>
												</div>

												<p style={{ fontSize: '12.5px', color: '#475569', lineHeight: 1.45, margin: 0, textAlign: 'center' }}>
													{sub.desc}
												</p>
											</div>
										))
									)}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
