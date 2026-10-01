import { useState, useEffect, useRef } from 'react'

const FAQ_ITEMS = [
	{
		id: 1,
		number: '1.',
		numberShort: '01',
		title: "HOW DOES PHONETICEDU'S GAMIFIED LEARNING METHOD WORK?",
		shortAnswer:
			'We turn dry aptitude formulas into high-speed arcade drills, visual logic teasers, and timed sprints that build instant mental calculation muscle.',
		theme: {
			bg: '#728FCE', // 1. Light Purple Blue (Lightest shade)
			textColor: '#ffffff',
			subtextColor: 'rgba(255, 255, 255, 0.95)',
			btnBg: '#ffffff',
			btnIconColor: '#728FCE',
			collapsedBtnBg: '#0f172a',
			collapsedBtnColor: '#ffffff',
			accentPillBg: 'rgba(255, 255, 255, 0.25)',
			accentPillBorder: 'rgba(255, 255, 255, 0.4)',
		},
		cards: [
			{
				title: 'Speed Quant',
				subtitle: 'Duration: 3 Weeks',
				type: 'pills',
				pills: [
					{ label: 'Functionality', color: '#bfdbfe', textColor: '#1e3a8a' },
					{ label: 'Vedic Math', color: '#dbeafe', textColor: '#1e40af' },
					{ label: 'Mental Speed', color: '#4169E1', textColor: '#ffffff' },
					{ label: 'Elimination', color: '#6495ED', textColor: '#ffffff' },
				],
				footerText: 'Average response: 18s vs 60s benchmark',
			},
			{
				title: 'Visual Logic',
				subtitle: 'Duration: 2 Weeks',
				type: 'pills',
				pills: [
					{ label: 'Pattern Clues', color: '#dbeafe', textColor: '#1e40af' },
					{ label: 'Target OA', color: '#2B547E', textColor: '#ffffff' },
					{ label: 'Flow Charts', color: '#6495ED', textColor: '#ffffff' },
					{ label: 'Syllogisms', color: '#4169E1', textColor: '#ffffff' },
				],
				footerText: 'Cognitive reasoning for Capgemini & Accenture',
			},
			{
				title: 'Exam Arcade',
				subtitle: 'Duration: 4 Weeks',
				type: 'pills',
				pills: [
					{ label: 'Live Battles', color: '#0f172a', textColor: '#ffffff' },
					{ label: 'Speed Sprints', color: '#93c5fd', textColor: '#1e3a8a' },
					{ label: 'Streaks', color: '#bfdbfe', textColor: '#1e3a8a' },
					{ label: 'National Rank', color: '#4169E1', textColor: '#ffffff' },
				],
				footerText: 'Real exam timers with negative marking simulation',
			},
		],
	},
	{
		id: 2,
		number: '2.',
		numberShort: '02',
		title: 'WHICH COMPANY RECRUITMENT PATTERNS ARE COVERED?',
		shortAnswer:
			'We provide authenticated syllabus coverage for mass IT drives, game-based aptitude rounds, and high-CTC product companies.',
		theme: {
			bg: '#6495ED', // 2. Cornflower Blue (Soft Medium-Light Blue)
			textColor: '#ffffff',
			subtextColor: 'rgba(255, 255, 255, 0.95)',
			btnBg: '#ffffff',
			btnIconColor: '#6495ED',
			collapsedBtnBg: '#0f172a',
			collapsedBtnColor: '#ffffff',
			accentPillBg: 'rgba(255, 255, 255, 0.25)',
			accentPillBorder: 'rgba(255, 255, 255, 0.4)',
		},
		cards: [
			{
				title: 'Recruitment Patterns',
				subtitle: 'Top IT Services',
				type: 'swatches',
				swatches: [
					{ code: 'TCS NQT', bg: '#0041C2', text: '#ffffff' },
					{ code: 'Infosys', bg: '#93c5fd', text: '#1e3a8a' },
					{ code: 'Accenture', bg: '#728FCE', text: '#ffffff' },
					{ code: 'Wipro', bg: '#4169E1', text: '#ffffff' },
				],
				footerText: 'Full aptitude + technical syllabus updated for 2025-26',
			},
			{
				title: 'Screening Rounds',
				subtitle: 'Cognitive & Games',
				type: 'typography',
				headline: 'OA',
				headlineSub: 'Online Assessment',
				tags: ['Capgemini Game Aptitude', 'Cognizant GenC Next', 'L&T Infotech'],
				footerText: 'Adaptive difficulty with real repeat question banks',
			},
			{
				title: 'Product & FinTech',
				subtitle: 'Super Dream (12-40 LPA)',
				type: 'preview',
				roleTag: 'High CTC',
				companies: ['Amazon OA', 'Google Foobar', 'Oracle', 'Deloitte'],
				footerText: 'Data structures, algorithms & system round prep',
			},
		],
	},
	{
		id: 3,
		number: '3.',
		numberShort: '03',
		title: 'ARE NON-CS AND DEGREE STUDENTS ELIGIBLE?',
		shortAnswer:
			'Our process begins from fundamental arithmetic to advanced coding, ensuring students from any branch or degree can confidently clear campus rounds.',
		theme: {
			bg: '#4863A0', // 3. Azure Blue (Medium Slate/Rich Blue)
			textColor: '#ffffff',
			subtextColor: 'rgba(255, 255, 255, 0.92)',
			btnBg: '#ffffff',
			btnIconColor: '#4863A0',
			collapsedBtnBg: '#0f172a',
			collapsedBtnColor: '#ffffff',
			accentPillBg: 'rgba(255, 255, 255, 0.2)',
			accentPillBorder: 'rgba(255, 255, 255, 0.35)',
		},
		cards: [
			{
				title: 'Zero Prerequisite',
				subtitle: '1-3 Sprints • 2.30 hrs/day',
				type: 'checklist',
				checkColor: '#6495ED',
				headline: 'Discovery & Foundations',
				description:
					'Step-by-step arithmetic from scratch. Non-programmers learn logic building without overwhelming syntax jargon.',
			},
			{
				title: 'Branch-Specific Tracks',
				subtitle: 'Notes for Every Stream',
				type: 'stickyNotes',
				notes: [
					{ text: 'ECE / EEE: Core logic + C++ track', bg: '#dbeafe', color: '#1e40af' },
					{ text: 'Mech / Civil: High-scoring quants', bg: '#e0f2fe', color: '#0369a1' },
					{ text: 'B.Sc / BCA: IT drive fast-track', bg: '#bae6fd', color: '#0041C2' },
					{ text: '1-on-1 mentor guidance weekly', bg: '#93c5fd', color: '#1e3a8a' },
				],
			},
			{
				title: 'Offer Readiness',
				subtitle: '3-5 Sprints',
				type: 'checklist',
				checkColor: '#6495ED',
				headline: 'Confidence & Placement',
				description:
					'Over 40% of our placed students come from non-CS backgrounds, successfully placed in TCS, Accenture & Capgemini.',
			},
		],
	},
	{
		id: 4,
		number: '4.',
		numberShort: '04',
		title: 'HOW ARE 1-ON-1 MOCK INTERVIEWS CONDUCTED?',
		shortAnswer:
			'We simulate actual interview panel pressure with founder Santhosh Kumar Ananta and industry mentors, giving precise feedback on tech, communication, and body language.',
		theme: {
			bg: '#4169E1', // 4. Royal Blue (Vibrant Rich Blue)
			textColor: '#ffffff',
			subtextColor: 'rgba(255, 255, 255, 0.92)',
			btnBg: '#ffffff',
			btnIconColor: '#4169E1',
			collapsedBtnBg: '#0f172a',
			collapsedBtnColor: '#ffffff',
			accentPillBg: 'rgba(255, 255, 255, 0.2)',
			accentPillBorder: 'rgba(255, 255, 255, 0.35)',
		},
		cards: [
			{
				title: 'Live Panel Simulation',
				subtitle: 'Technical & HR Rounds',
				type: 'barchart',
				headline: 'Competency Scoring',
				bars: [
					{ label: 'Problem Solving', val: '9.4', h: '88%', color: '#6495ED' },
					{ label: 'Logic Clarity', val: '8.8', h: '80%', color: '#93c5fd' },
					{ label: 'Tech Depth', val: '7.6', h: '70%', color: '#bfdbfe' },
					{ label: 'Confidence', val: '9.1', h: '85%', color: '#dbeafe' },
				],
			},
			{
				title: 'Placement Conversion',
				subtitle: 'Industry benchmarks Q3',
				type: 'metrics',
				headline: 'First-Attempt Clearance',
				statValue: '85%',
				statLabel: 'Offer Rate Post Mock Rounds',
				barColor: '#6495ED',
			},
		],
	},
	{
		id: 5,
		number: '5.',
		numberShort: '05',
		title: 'WHERE IS PHONETICEDU & HOW DO I ACCESS LMS?',
		shortAnswer:
			'PhoneticEdu is headquartered in Hyderabad, India with cloud LMS access available 24/7 worldwide on laptop, tablet, or smartphone.',
		theme: {
			bg: '#0041C2', // 5. Blueberry Blue (Deepest Dark Blue)
			textColor: '#ffffff',
			subtextColor: 'rgba(255, 255, 255, 0.92)',
			btnBg: '#ffffff',
			btnIconColor: '#0041C2',
			collapsedBtnBg: '#0f172a',
			collapsedBtnColor: '#ffffff',
			accentPillBg: 'rgba(255, 255, 255, 0.2)',
			accentPillBorder: 'rgba(255, 255, 255, 0.35)',
		},
		cards: [
			{
				title: 'Universal LMS Access',
				subtitle: '24/7 Cloud Practice',
				type: 'pills',
				pills: [
					{ label: 'Desktop & Web', color: '#93c5fd', textColor: '#1e3a8a' },
					{ label: 'Mobile Optimized', color: '#bfdbfe', textColor: '#1e40af' },
					{ label: 'Offline Sync', color: '#e0f2fe', textColor: '#0041C2' },
					{ label: 'Leaderboards', color: '#6495ED', textColor: '#ffffff' },
				],
				footerText: 'Synchronized test history, time analytics, and rankings',
			},
			{
				title: 'Hyderabad Hub',
				subtitle: 'Elite Training Center',
				type: 'pills',
				pills: [
					{ label: 'In-Person Bootcamps', color: '#dbeafe', textColor: '#1e40af' },
					{ label: 'College Partnerships', color: '#bae6fd', textColor: '#0041C2' },
					{ label: 'Live Q&A Sessions', color: '#93c5fd', textColor: '#1e3a8a' },
					{ label: 'Campus Drives', color: '#6495ED', textColor: '#ffffff' },
				],
				footerText: 'Direct campus hiring alliances across Telangana & AP',
			},
			{
				title: 'Start Free Journey',
				subtitle: 'Diagnostic Assessment',
				type: 'cta',
				headline: 'Instant Evaluation',
				description:
					'Sign up free on our LMS, take a 15-minute diagnostic test, and receive your personalized placement roadmap.',
				ctaLabel: 'Open LMS Dashboard →',
				ctaUrl: "#",
			},
		],
	},
]

export default function FAQ() {
	const [activeId, setActiveId] = useState(1) // Item 1 open by default matching screenshot
	const [isHeaderRevealed, setIsHeaderRevealed] = useState(false)
	const sectionRef = useRef(null)
	const headerRef = useRef(null)

	useEffect(() => {
		const section = sectionRef.current
		if (!section) return

		// Scroll reveal for FAQ items with smooth observer
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('faq-revealed')
					}
				})
			},
			{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
		)

		const items = section.querySelectorAll('.faq-accordion-item')
		items.forEach((item) => observer.observe(item))

		// Scroll reveal for the Heading section
		const headerEl = headerRef.current
		let headerObserver
		if (headerEl) {
			headerObserver = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						setIsHeaderRevealed(true)
						headerObserver.disconnect()
					}
				},
				{ threshold: 0.15, rootMargin: '0px 0px -30px 0px' },
			)
			headerObserver.observe(headerEl)
		}

		return () => {
			observer.disconnect()
			if (headerObserver) headerObserver.disconnect()
		}
	}, [])

	const toggleItem = (id) => {
		setActiveId((prev) => (prev === id ? null : id))
	}

	return (
		<section
			id="faq"
			ref={sectionRef}
			className="framer-193gfb"
			data-framer-name="FAQs"
			style={{
				width: '100%',
				backgroundColor: '#ffffff',
				padding: '110px 24px 120px',
				position: 'relative',
				overflow: 'hidden',
				boxSizing: 'border-box',
			}}
		>
			<div
				style={{
					maxWidth: '1240px',
					margin: '0 auto',
					width: '100%',
				}}
			>
				{/* 1. Header Section matching reference with Scroll Reveal */}
				<div
					ref={headerRef}
					style={{
						textAlign: 'left',
						marginBottom: '56px',
					}}
				>
					{/* Tag Badge */}
					<div
						style={{
							display: 'inline-flex',
							alignItems: 'center',
							gap: '6px',
							marginBottom: '16px',
							transform: isHeaderRevealed ? 'translateY(0) scale(1)' : 'translateY(22px) scale(0.95)',
							opacity: isHeaderRevealed ? 1 : 0,
							transition: 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.75s ease',
							willChange: 'transform, opacity',
						}}
					>
						<span
							style={{
								fontSize: '13px',
								fontWeight: 900,
								letterSpacing: '0.12em',
								textTransform: 'uppercase',
								color: '#0041C2',
								fontFamily: "'Plus Jakarta Sans', sans-serif",
								display: 'inline-flex',
								alignItems: 'center',
								gap: '8px',
							}}
						>
							<span
								style={{
									width: '7px',
									height: '7px',
									borderRadius: '50%',
									backgroundColor: '#0041C2',
									display: 'inline-block',
									boxShadow: '0 0 10px rgba(0, 65, 194, 0.5)',
								}}
							/>
							HOW WE PREPARE YOU
						</span>
					</div>

					{/* Big Punchy Title with Masked Line-by-Line Scroll Reveal */}
					<h2
						style={{
							fontFamily: "'Roboto Condensed', sans-serif",
							fontSize: 'clamp(44px, 6.5vw, 84px)',
							lineHeight: 0.95,
							fontWeight: 900,
							letterSpacing: '-0.04em',
							color: '#0a0e17',
							textTransform: 'uppercase',
							margin: '0 0 16px',
						}}
					>
						<span style={{ display: 'block', overflow: 'hidden' }}>
							<span
								style={{
									display: 'block',
									transform: isHeaderRevealed ? 'translateY(0)' : 'translateY(115%)',
									opacity: isHeaderRevealed ? 1 : 0,
									transition:
										'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.12s, opacity 0.85s ease 0.12s',
									willChange: 'transform, opacity',
								}}
							>
								GOT QUESTIONS?
							</span>
						</span>
						<span style={{ display: 'block', overflow: 'hidden', marginTop: '4px' }}>
							<span
								style={{
									display: 'block',
									transform: isHeaderRevealed ? 'translateY(0)' : 'translateY(115%)',
									opacity: isHeaderRevealed ? 1 : 0,
									transition:
										'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.24s, opacity 0.85s ease 0.24s',
									willChange: 'transform, opacity',
								}}
							>
								WE’VE GOT CLEAR ANSWERS.
							</span>
						</span>
					</h2>

					{/* Subtitle Paragraph with Smooth Staggered Fade Up */}
					<p
						style={{
							fontFamily: '"Geist", "Inter", sans-serif',
							fontSize: 'clamp(15px, 1.2vw, 17px)',
							lineHeight: 1.6,
							color: '#64748b',
							maxWidth: '720px',
							margin: 0,
							transform: isHeaderRevealed ? 'translateY(0)' : 'translateY(28px)',
							opacity: isHeaderRevealed ? 1 : 0,
							transition:
								'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.36s, opacity 0.85s ease 0.36s',
							willChange: 'transform, opacity',
						}}
					>
						Everything you need to know about our gamified aptitude training, recruitment syllabus coverage,
						and campus placement offers. Click any item to explore.
					</p>
				</div>

				{/* 2. Accordion Container */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '24px',
						width: '100%',
					}}
				>
					{FAQ_ITEMS.map((item, index) => {
						const isExpanded = activeId === item.id
						const theme = item.theme

						return (
							<div
								key={item.id}
								className="faq-accordion-item"
								style={{
									width: '100%',
									transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
									opacity: 0,
									transform: 'translateY(28px)',
									animationDelay: `${index * 0.08}s`,
								}}
							>
								{isExpanded ? (
									/* EXPANDED STATE (Matching the Reference Screenshots!) */
									<div
										className="faq-expanded-card"
										style={{
											position: 'relative',
											backgroundColor: theme.bg,
											borderRadius: '34px',
											padding: '38px 40px 42px',
											color: theme.textColor,
											boxShadow:
												'0 25px 60px -15px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.04)',
											transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
											overflow: 'visible',
										}}
									>
										{/* Top Speech Bubble Pointer Notch (Exact Match with Reference Screenshots) */}
										<div
											style={{
												position: 'absolute',
												top: '-15px',
												right: '120px',
												width: 0,
												height: 0,
												borderLeft: '16px solid transparent',
												borderRight: '16px solid transparent',
												borderBottom: `16px solid ${theme.bg}`,
												pointerEvents: 'none',
											}}
										/>

										{/* Subtle Side Tab Curves (Organic Badge Aesthetic) */}
										<div
											style={{
												position: 'absolute',
												left: '-12px',
												top: '50%',
												transform: 'translateY(-50%)',
												width: '14px',
												height: '48px',
												backgroundColor: theme.bg,
												borderRadius: '10px 0 0 10px',
												pointerEvents: 'none',
											}}
										/>
										<div
											style={{
												position: 'absolute',
												right: '-12px',
												top: '50%',
												transform: 'translateY(-50%)',
												width: '14px',
												height: '48px',
												backgroundColor: theme.bg,
												borderRadius: '0 10px 10px 0',
												pointerEvents: 'none',
											}}
										/>

										{/* Top Row: Big Number, Title, Summary, and Collapse Toggle */}
										<div
											style={{
												display: 'grid',
												gridTemplateColumns: 'minmax(280px, 1.2fr) minmax(240px, 1.1fr) auto',
												alignItems: 'flex-start',
												gap: '24px',
												marginBottom: '36px',
											}}
											className="faq-expanded-top-grid"
										>
											{/* Left: Giant Number & Title */}
											<div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
												<span
													style={{
														fontFamily: "'Roboto Condensed', sans-serif",
														fontSize: 'clamp(52px, 5.5vw, 76px)',
														lineHeight: 0.85,
														fontWeight: 900,
														letterSpacing: '-0.04em',
														color: theme.textColor,
														flexShrink: 0,
													}}
												>
													{item.number}
												</span>
												<h3
													style={{
														fontFamily: "'Roboto Condensed', sans-serif",
														fontSize: 'clamp(24px, 2.5vw, 36px)',
														lineHeight: 1.05,
														fontWeight: 900,
														letterSpacing: '-0.025em',
														color: theme.textColor,
														textTransform: 'uppercase',
														margin: 0,
													}}
												>
													{item.title}
												</h3>
											</div>

											{/* Center: Detailed Subtitle Text */}
											<p
												style={{
													fontFamily: "'Plus Jakarta Sans', sans-serif",
													fontSize: 'clamp(14px, 1.1vw, 15.5px)',
													lineHeight: 1.55,
													color: theme.subtextColor,
													margin: 0,
													paddingTop: '4px',
												}}
											>
												{item.shortAnswer}
											</p>

											{/* Right: Circular Up Toggle Button */}
											<button
												type="button"
												onClick={() => toggleItem(item.id)}
												aria-label="Collapse answer"
												style={{
													width: '48px',
													height: '48px',
													borderRadius: '50%',
													backgroundColor: theme.btnBg,
													border: 'none',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													cursor: 'pointer',
													boxShadow: '0 8px 20px rgba(0,0,0,0.18)',
													transition: 'transform 0.2s ease, box-shadow 0.2s ease',
													flexShrink: 0,
													outline: 'none',
												}}
												onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
												onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
											>
												<svg
													width="18"
													height="18"
													viewBox="0 0 24 24"
													fill="none"
													stroke={theme.btnIconColor}
													strokeWidth="3.2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<polyline points="18 15 12 9 6 15" />
												</svg>
											</button>
										</div>

										{/* Inner White Cards Grid (Faithful to Reference Screenshots!) */}
										<div
											style={{
												display: 'grid',
												gridTemplateColumns: `repeat(${item.cards.length}, 1fr)`,
												gap: '18px',
												width: '100%',
											}}
											className="faq-white-cards-grid"
										>
											{item.cards.map((card, cIdx) => (
												<div
													key={cIdx}
													style={{
														backgroundColor: '#ffffff',
														borderRadius: '24px',
														padding: '24px 22px',
														boxShadow:
															'0 12px 30px -10px rgba(0,0,0,0.08), 0 4px 6px -2px rgba(0,0,0,0.02)',
														color: '#0f172a',
														display: 'flex',
														flexDirection: 'column',
														justifyContent: 'space-between',
														minHeight: '230px',
														position: 'relative',
														transition: 'transform 0.25s ease, box-shadow 0.25s ease',
													}}
													onMouseEnter={(e) => {
														e.currentTarget.style.transform = 'translateY(-4px)'
														e.currentTarget.style.boxShadow =
															'0 18px 36px -10px rgba(0,0,0,0.14)'
													}}
													onMouseLeave={(e) => {
														e.currentTarget.style.transform = 'translateY(0)'
														e.currentTarget.style.boxShadow =
															'0 12px 30px -10px rgba(0,0,0,0.08)'
													}}
												>
													<div>
														{/* Card Header */}
														<div style={{ textAlign: 'center', marginBottom: '18px' }}>
															<h4
																style={{
																	fontFamily: "'Roboto Condensed', sans-serif",
																	fontSize: '18px',
																	fontWeight: 900,
																	textTransform: 'uppercase',
																	letterSpacing: '-0.02em',
																	color: '#0f172a',
																	margin: '0 0 3px',
																}}
															>
																{card.title}
															</h4>
															<div
																style={{
																	fontSize: '11px',
																	color: '#64748b',
																	fontWeight: 600,
																}}
															>
																{card.subtitle}
															</div>
														</div>

														{/* Type 1: Pills Layout (Screenshot 1 Style) */}
														{card.type === 'pills' && (
															<div
																style={{
																	display: 'flex',
																	flexWrap: 'wrap',
																	gap: '8px',
																	justifyContent: 'center',
																	margin: '12px 0 16px',
																}}
															>
																{card.pills.map((pill, pIdx) => (
																	<span
																		key={pIdx}
																		style={{
																			backgroundColor: pill.color,
																			color: pill.textColor,
																			fontSize: '12px',
																			fontWeight: 700,
																			padding: '5px 12px',
																			borderRadius: '999px',
																			letterSpacing: '0.01em',
																			boxShadow: '0 2px 5px rgba(0,0,0,0.06)',
																		}}
																	>
																		{pill.label}
																	</span>
																))}
															</div>
														)}

														{/* Type 2: Swatches Layout (Screenshot 2 Color Palette Style) */}
														{card.type === 'swatches' && (
															<div
																style={{
																	display: 'grid',
																	gridTemplateColumns: 'repeat(2, 1fr)',
																	gap: '8px',
																	margin: '8px 0 16px',
																}}
															>
																{card.swatches.map((swatch, sIdx) => (
																	<div
																		key={sIdx}
																		style={{
																			backgroundColor: swatch.bg,
																			color: swatch.text,
																			borderRadius: '12px',
																			padding: '16px 8px',
																			textAlign: 'center',
																			fontWeight: 800,
																			fontSize: '12.5px',
																			letterSpacing: '0.02em',
																			boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
																		}}
																	>
																		{swatch.code}
																	</div>
																))}
															</div>
														)}

														{/* Type 3: Typography Style (Screenshot 2 Typography Aa Card) */}
														{card.type === 'typography' && (
															<div style={{ textAlign: 'center', margin: '8px 0 16px' }}>
																<div
																	style={{
																		fontFamily: "'Roboto Condensed', sans-serif",
																		fontSize: '48px',
																		fontWeight: 900,
																		letterSpacing: '-0.03em',
																		lineHeight: 1,
																		color: '#0f172a',
																		marginBottom: '8px',
																	}}
																>
																	{card.headline}
																</div>
																<div
																	style={{
																		display: 'flex',
																		flexDirection: 'column',
																		gap: '4px',
																		alignItems: 'center',
																	}}
																>
																	{card.tags.map((t, tIdx) => (
																		<span
																			key={tIdx}
																			style={{
																				fontSize: '11px',
																				fontWeight: 700,
																				color: '#475569',
																				backgroundColor: '#f1f5f9',
																				padding: '2px 8px',
																				borderRadius: '6px',
																			}}
																		>
																			{t}
																		</span>
																	))}
																</div>
															</div>
														)}

														{/* Type 4: Preview Card */}
														{card.type === 'preview' && (
															<div
																style={{
																	background: '#f8fafc',
																	borderRadius: '16px',
																	padding: '12px 14px',
																	margin: '8px 0 14px',
																	border: '1px solid #e2e8f0',
																}}
															>
																<div
																	style={{
																		display: 'flex',
																		justifyContent: 'space-between',
																		fontSize: '10.5px',
																		fontWeight: 800,
																		color: '#3b82f6',
																		marginBottom: '8px',
																	}}
																>
																	<span>{card.roleTag}</span>
																	<span>100% Verified</span>
																</div>
																<div
																	style={{
																		display: 'grid',
																		gridTemplateColumns: 'repeat(2, 1fr)',
																		gap: '6px',
																	}}
																>
																	{card.companies.map((co, coIdx) => (
																		<div
																			key={coIdx}
																			style={{
																				backgroundColor: '#ffffff',
																				border: '1px solid #e2e8f0',
																				borderRadius: '8px',
																				padding: '6px 4px',
																				textAlign: 'center',
																				fontSize: '11px',
																				fontWeight: 700,
																				color: '#0f172a',
																			}}
																		>
																			{co}
																		</div>
																	))}
																</div>
															</div>
														)}

														{/* Type 5: Checklist / Sprint Layout (Screenshot 3 Style) */}
														{card.type === 'checklist' && (
															<div style={{ margin: '8px 0 12px' }}>
																<div
																	style={{
																		display: 'flex',
																		alignItems: 'center',
																		gap: '10px',
																		marginBottom: '10px',
																	}}
																>
																	<div
																		style={{
																			width: '28px',
																			height: '28px',
																			borderRadius: '50%',
																			backgroundColor: card.checkColor || '#818cf8',
																			color: '#ffffff',
																			display: 'flex',
																			alignItems: 'center',
																			justifyContent: 'center',
																			fontSize: '14px',
																			fontWeight: 900,
																			flexShrink: 0,
																		}}
																	>
																		✓
																	</div>
																	<div
																		style={{
																			fontSize: '13px',
																			fontWeight: 800,
																			color: '#0f172a',
																			lineHeight: 1.2,
																		}}
																	>
																		{card.headline}
																	</div>
																</div>
																<p
																	style={{
																		fontSize: '12px',
																		lineHeight: 1.5,
																		color: '#64748b',
																		margin: 0,
																	}}
																>
																	{card.description}
																</p>
															</div>
														)}

														{/* Type 6: Sticky Notes Grid (Screenshot 3 Middle Card) */}
														{card.type === 'stickyNotes' && (
															<div
																style={{
																	display: 'grid',
																	gridTemplateColumns: 'repeat(2, 1fr)',
																	gap: '8px',
																	margin: '8px 0 12px',
																}}
															>
																{card.notes.map((note, nIdx) => (
																	<div
																		key={nIdx}
																		style={{
																			backgroundColor: note.bg,
																			color: note.color,
																			borderRadius: '8px',
																			padding: '10px 8px',
																			fontSize: '10.5px',
																			fontWeight: 700,
																			lineHeight: 1.35,
																			boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
																		}}
																	>
																		{note.text}
																	</div>
																))}
															</div>
														)}

														{/* Type 7: Bar Chart (Screenshot 4 Style) */}
														{card.type === 'barchart' && (
															<div style={{ margin: '10px 0 14px' }}>
																<div
																	style={{
																		display: 'flex',
																		alignItems: 'flex-end',
																		justifyContent: 'space-between',
																		height: '80px',
																		padding: '0 10px 8px',
																		borderBottom: '1.5px solid #e2e8f0',
																	}}
																>
																	{card.bars.map((bar, bIdx) => (
																		<div
																			key={bIdx}
																			style={{
																				display: 'flex',
																				flexDirection: 'column',
																				alignItems: 'center',
																				gap: '4px',
																				flex: 1,
																			}}
																		>
																			<span
																				style={{
																					fontSize: '10px',
																					fontWeight: 800,
																					color: '#475569',
																				}}
																			>
																				{bar.val}
																			</span>
																			<div
																				style={{
																					width: '22px',
																					height: bar.h,
																					backgroundColor: bar.color,
																					borderRadius: '5px 5px 0 0',
																				}}
																			/>
																		</div>
																	))}
																</div>
															</div>
														)}

														{/* Type 8: Metrics Card (Screenshot 4 Traffic / Results Card) */}
														{card.type === 'metrics' && (
															<div style={{ textAlign: 'center', margin: '14px 0 16px' }}>
																<div
																	style={{
																		fontFamily: "'Plus Jakarta Sans', sans-serif",
																		fontSize: '44px',
																		fontWeight: 900,
																		color: '#0f172a',
																		lineHeight: 1,
																		marginBottom: '4px',
																	}}
																>
																	{card.statValue}
																</div>
																<div
																	style={{
																		fontSize: '11px',
																		color: '#64748b',
																		fontWeight: 700,
																		marginBottom: '14px',
																	}}
																>
																	{card.statLabel}
																</div>
																{/* Striped progress bar */}
																<div
																	style={{
																		height: '14px',
																		borderRadius: '999px',
																		background:
																			'repeating-linear-gradient(45deg, #4169E1, #4169E1 6px, #6495ED 6px, #6495ED 12px)',
																		width: '100%',
																	}}
																/>
															</div>
														)}

														{/* Type 9: CTA Card */}
														{card.type === 'cta' && (
															<div style={{ margin: '8px 0 12px', textAlign: 'center' }}>
																<p
																	style={{
																		fontSize: '12px',
																		lineHeight: 1.5,
																		color: '#64748b',
																		margin: '0 0 16px',
																	}}
																>
																	{card.description}
																</p>
																<a
																	href={card.ctaUrl}
																	style={{
																		display: 'inline-flex',
																		alignItems: 'center',
																		justifyContent: 'center',
																		padding: '8px 16px',
																		backgroundColor: '#2563eb',
																		color: '#ffffff',
																		fontWeight: 800,
																		fontSize: '12px',
																		borderRadius: '12px',
																		textDecoration: 'none',
																		boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
																	}}
																>
																	{card.ctaLabel}
																</a>
															</div>
														)}
													</div>

													{/* Bottom Footer Note */}
													{card.footerText && (
														<div
															style={{
																fontSize: '10.5px',
																color: '#94a3b8',
																fontWeight: 600,
																textAlign: 'center',
																borderTop: '1px solid #f1f5f9',
																paddingTop: '10px',
																marginTop: '8px',
															}}
														>
															{card.footerText}
														</div>
													)}
												</div>
											))}
										</div>
									</div>
								) : (
									/* COLLAPSED STATE (Clean Minimalist Row matching Reference!) */
									<div
										onClick={() => toggleItem(item.id)}
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											padding: '24px 32px',
											backgroundColor: '#ffffff',
											border: '1px solid #e2e8f0',
											borderRadius: '24px',
											cursor: 'pointer',
											transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
											boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
										}}
										className="faq-collapsed-row"
										onMouseEnter={(e) => {
											e.currentTarget.style.backgroundColor = '#f8fafc'
											e.currentTarget.style.transform = 'translateY(-2px)'
											e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.06)'
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.backgroundColor = '#ffffff'
											e.currentTarget.style.transform = 'translateY(0)'
											e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)'
										}}
									>
										{/* Left: Number and Title */}
										<div
											style={{
												display: 'flex',
												alignItems: 'center',
												gap: '20px',
												flex: 1,
												marginRight: '20px',
											}}
										>
											<span
												style={{
													fontFamily: "'Roboto Condensed', sans-serif",
													fontSize: 'clamp(28px, 3.5vw, 42px)',
													lineHeight: 1,
													fontWeight: 900,
													color: '#0a0e17',
													letterSpacing: '-0.03em',
													flexShrink: 0,
												}}
											>
												{item.number}
											</span>
											<h3
												style={{
													fontFamily: "'Roboto Condensed', sans-serif",
													fontSize: 'clamp(18px, 2.2vw, 26px)',
													lineHeight: 1.1,
													fontWeight: 900,
													color: '#0a0e17',
													letterSpacing: '-0.02em',
													textTransform: 'uppercase',
													margin: 0,
												}}
											>
												{item.title}
											</h3>
										</div>

										{/* Center: Brief Summary (Hidden on Small Screens) */}
										<div
											className="faq-collapsed-teaser"
											style={{
												fontFamily: "'Plus Jakarta Sans', sans-serif",
												fontSize: '13.5px',
												lineHeight: 1.5,
												color: '#64748b',
												maxWidth: '380px',
												flexShrink: 1,
												marginRight: '24px',
											}}
										>
											{item.shortAnswer.slice(0, 95)}...
										</div>

										{/* Right: Dark Circle with Down Chevron */}
										<div
											style={{
												width: '44px',
												height: '44px',
												borderRadius: '50%',
												backgroundColor: '#0a0e17',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												flexShrink: 0,
												boxShadow: '0 4px 12px rgba(10,14,23,0.15)',
											}}
										>
											<svg
												width="18"
												height="18"
												viewBox="0 0 24 24"
												fill="none"
												stroke="#ffffff"
												strokeWidth="3.2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<polyline points="6 9 12 15 18 9" />
											</svg>
										</div>
									</div>
								)}
							</div>
						)
					})}
				</div>

			</div>
		</section>
	)
}
