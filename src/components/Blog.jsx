import { useState } from 'react'

export default function Blog() {
	const [activeFilter, setActiveFilter] = useState('all')

	const insights = [
		{
			id: 'tcs-nqt',
			tag: 'TCS NQT 2026',
			badgeColor: '#0284c7',
			category: 'exam-pattern',
			readTime: '6 min read',
			title: 'TCS NQT 2026: Sectional Cutoffs & 40 Repeated Patterns',
			desc: 'Official breakdown of the scoring algorithm, negative marking rules, and the 12 most frequent DSA question templates tested for Ninja vs Prime (9 LPA) offers.',
			highlights: [
				{ label: 'Numerical Cutoff', value: '72%+' },
				{ label: 'Verbal & Reasoning', value: '75%+' },
				{ label: 'Coding Problems', value: '2 Questions / 90m' },
			],
			previewType: 'tcs',
		},
		{
			id: 'capgemini-game',
			tag: 'Capgemini Assessment',
			badgeColor: '#2563eb',
			category: 'aptitude',
			readTime: '8 min read',
			title: 'Capgemini Game-Based Aptitude: All 24 Rules Decoded',
			desc: 'Master the 4 core gamified challenges (Geo-Symmetric, Motion, Grid Challenge, Inductive Logic). Learn the exact speed-vs-accuracy weighting to clear in under 30s per round.',
			highlights: [
				{ label: 'Core Mini-Games', value: '4 Modules' },
				{ label: 'Time Per Round', value: '24–30 secs' },
				{ label: 'Target Accuracy', value: '92% Benchmark' },
			],
			previewType: 'capgemini',
		},
		{
			id: 'dsa-patterns',
			tag: 'Coding Rounds',
			badgeColor: '#0ea5e9',
			category: 'coding',
			readTime: '10 min read',
			title: 'Top 45 DSA Patterns for Tier-1 Tech Rounds',
			desc: 'Two-Pointers, Sliding Window, Monotonic Stacks, and Tree Traversals that cover 85% of technical campus coding rounds for Accenture, Cognizant, and product giants.',
			highlights: [
				{ label: 'Pattern Templates', value: '45 Core Templates' },
				{ label: 'Languages', value: 'Java / C++ / Python' },
				{ label: 'Complexity', value: 'O(N) Optimal Solns' },
			],
			previewType: 'dsa',
		},
		{
			id: 'ats-resume',
			tag: 'Resume Screening',
			badgeColor: '#3b82f6',
			category: 'resume',
			readTime: '5 min read',
			title: 'Campus Fresher ATS Resume Blueprint (98+ Score)',
			desc: 'Eliminate bot filtering rejection errors. Use our battle-tested single-column hierarchy and Google XYZ impact metrics verified across 1,000+ campus placements.',
			highlights: [
				{ label: 'ATS Score', value: '98 / 100 Verified' },
				{ label: 'Hierarchy', value: 'Single-Column Clean' },
				{ label: 'Format', value: 'LaTeX & PDF Ready' },
			],
			previewType: 'resume',
		},
	]

	const filteredInsights =
		activeFilter === 'all' ? insights : insights.filter((item) => item.category === activeFilter)

	return (
		<section
			id="blog"
			data-framer-name="Blog"
			style={{
				width: '100%',
				background: 'linear-gradient(180deg, #0e121a 0%, #121214 50%, #121214 100%)',
				borderTopLeftRadius: '80px',
				borderTopRightRadius: '80px',
				borderBottomLeftRadius: '0px',
				borderBottomRightRadius: '0px',
				padding: '90px 24px 60px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				position: 'relative',
				zIndex: 10,
				boxSizing: 'border-box',
			}}
		>
			<div style={{ maxWidth: '1240px', width: '100%', margin: '0 auto' }}>
				{/* Section Header */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						textAlign: 'center',
						marginBottom: '48px',
					}}
				>
					{/* Eyebrow Pill */}
					<div
						style={{
							display: 'inline-flex',
							alignItems: 'center',
							gap: '8px',
							background: 'rgba(56, 189, 248, 0.12)',
							border: '1px solid rgba(56, 189, 248, 0.35)',
							borderRadius: '999px',
							padding: '6px 18px',
							marginBottom: '20px',
						}}
					>
						<span
							style={{
								fontSize: '11px',
								fontWeight: 900,
								color: '#ffffff',
								background: '#0066FF',
								padding: '2px 8px',
								borderRadius: '6px',
								letterSpacing: '0.04em',
							}}
						>
							06
						</span>
						<span
							style={{
								fontFamily: '"Roboto Condensed", sans-serif',
								fontSize: '13px',
								fontWeight: 800,
								color: '#38bdf8',
								textTransform: 'uppercase',
								letterSpacing: '0.06em',
							}}
						>
							Placement Playbooks &amp; Intelligence
						</span>
					</div>

					<h2
						style={{
							fontSize: 'clamp(32px, 4.5vw, 52px)',
							fontWeight: 800,
							letterSpacing: '-0.03em',
							lineHeight: 1.15,
							color: '#ffffff',
							margin: '0 0 16px',
							maxWidth: '800px',
						}}
					>
						Crack Every Campus Hiring Round.
					</h2>

					<p
						style={{
							fontSize: 'clamp(15px, 2vw, 17px)',
							lineHeight: 1.6,
							color: 'rgba(255, 255, 255, 0.7)',
							maxWidth: '680px',
							margin: '0 0 28px',
						}}
					>
						Master verified problem-solving shortcuts, test syllabus breakdowns, and hiring criteria tested across
						1,000+ top campus recruitment drives.
					</p>

					{/* Category Filter Pills */}
					<div
						style={{
							display: 'inline-flex',
							alignItems: 'center',
							background: 'rgba(255, 255, 255, 0.05)',
							border: '1px solid rgba(255, 255, 255, 0.1)',
							borderRadius: '999px',
							padding: '5px',
							gap: '4px',
							backdropFilter: 'blur(16px)',
							flexWrap: 'wrap',
							justifyContent: 'center',
						}}
					>
						{[
							{ id: 'all', label: 'All Playbooks' },
							{ id: 'exam-pattern', label: 'Exam Patterns' },
							{ id: 'aptitude', label: 'Game Aptitude' },
							{ id: 'coding', label: 'DSA & Coding' },
							{ id: 'resume', label: 'ATS Resume' },
						].map((tab) => {
							const isSel = activeFilter === tab.id
							return (
								<button
									key={tab.id}
									type="button"
									onClick={() => setActiveFilter(tab.id)}
									style={{
										padding: '7px 16px',
										borderRadius: '999px',
										border: 'none',
										cursor: 'pointer',
										background: isSel ? '#0066FF' : 'transparent',
										color: isSel ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
										fontWeight: isSel ? 700 : 500,
										fontSize: '13px',
										transition: 'all 0.2s ease',
										boxShadow: isSel ? '0 4px 12px rgba(0, 102, 255, 0.4)' : 'none',
									}}
								>
									{tab.label}
								</button>
							)
						})}
					</div>
				</div>

				{/* 4 Cards Grid */}
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
						gap: '28px',
						width: '100%',
					}}
				>
					{filteredInsights.map((card) => (
						<article
							key={card.id}
							style={{
								background: 'linear-gradient(180deg, #ffffff 0%, #f8faff 60%, #edf5ff 100%)',
								borderRadius: '32px',
								border: '1px solid rgba(186, 230, 253, 0.6)',
								boxShadow: '0 16px 40px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 102, 255, 0.08)',
								overflow: 'hidden',
								display: 'flex',
								flexDirection: 'column',
								transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease',
								cursor: 'pointer',
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = 'translateY(-6px)'
								e.currentTarget.style.boxShadow =
									'0 24px 50px rgba(0, 102, 255, 0.16), 0 8px 20px rgba(0, 0, 0, 0.25)'
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = 'translateY(0px)'
								e.currentTarget.style.boxShadow =
									'0 16px 40px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 102, 255, 0.08)'
							}}
						>
							{/* Top UI Preview Banner - Rich Light Blue & White SaaS presentation */}
							<div
								style={{
									height: '170px',
									background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%)',
									padding: '20px 24px',
									boxSizing: 'border-box',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									position: 'relative',
									overflow: 'hidden',
									borderBottom: '1px solid rgba(0, 102, 255, 0.12)',
								}}
							>
								{/* Decorative Ambient Pattern */}
								<div
									style={{
										position: 'absolute',
										inset: 0,
										opacity: 0.18,
										backgroundImage:
											'radial-gradient(#0284c7 1px, transparent 1px), radial-gradient(#0284c7 1px, transparent 1px)',
										backgroundSize: '20px 20px',
										backgroundPosition: '0 0, 10px 10px',
									}}
								/>

								{/* Top Header of Card Banner */}
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
										position: 'relative',
										zIndex: 2,
									}}
								>
									<span
										style={{
											background: '#ffffff',
											color: card.badgeColor,
											fontSize: '11.5px',
											fontWeight: 800,
											padding: '4px 12px',
											borderRadius: '999px',
											letterSpacing: '0.04em',
											boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
										}}
									>
										{card.tag}
									</span>
									<span
										style={{
											background: 'rgba(255, 255, 255, 0.7)',
											backdropFilter: 'blur(8px)',
											color: '#0369a1',
											fontSize: '11px',
											fontWeight: 700,
											padding: '3px 10px',
											borderRadius: '999px',
										}}
									>
										{card.readTime}
									</span>
								</div>

								{/* Dynamic Visual Blueprint Preview inside Banner */}
								<div
									style={{
										position: 'relative',
										zIndex: 2,
										background: 'rgba(255, 255, 255, 0.88)',
										backdropFilter: 'blur(10px)',
										borderRadius: '16px',
										padding: '10px 14px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-around',
										boxShadow: '0 4px 14px rgba(2, 132, 199, 0.12)',
									}}
								>
									{card.highlights.map((h, i) => (
										<div key={i} style={{ textAlign: 'center' }}>
											<div style={{ fontSize: '10px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>
												{h.label}
											</div>
											<div style={{ fontSize: '13px', color: '#0f172a', fontWeight: 800 }}>{h.value}</div>
										</div>
									))}
								</div>
							</div>

							{/* Card Body Content */}
							<div
								style={{
									padding: '24px 28px',
									display: 'flex',
									flexDirection: 'column',
									flexGrow: 1,
									justifyContent: 'space-between',
								}}
							>
								<div>
									<h3
										style={{
											fontSize: '19px',
											fontWeight: 800,
											lineHeight: 1.35,
											letterSpacing: '-0.02em',
											color: '#0f172a',
											margin: '0 0 10px',
										}}
									>
										{card.title}
									</h3>
									<p
										style={{
											fontSize: '14px',
											lineHeight: 1.55,
											color: '#475569',
											margin: '0 0 20px',
										}}
									>
										{card.desc}
									</p>
								</div>

								{/* Card Footer Link */}
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
										paddingTop: '16px',
										borderTop: '1px solid rgba(0, 102, 255, 0.08)',
									}}
								>
									<span
										style={{
											fontSize: '13.5px',
											fontWeight: 700,
											color: '#0066FF',
											display: 'inline-flex',
											alignItems: 'center',
											gap: '6px',
										}}
									>
										Read Playbook
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
											<line x1="5" y1="12" x2="19" y2="12" />
											<polyline points="12 5 19 12 12 19" />
										</svg>
									</span>
									<span
										style={{
											fontSize: '11px',
											color: '#94a3b8',
											fontWeight: 600,
										}}
									>
										Free Access
									</span>
								</div>
							</div>
						</article>
					))}
				</div>

				{/* Bottom Action Row - Seamless flow to CTA */}
				<div
					style={{
						marginTop: '56px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '12px',
					}}
				>
					<a
						href="#cta"
						style={{
							display: 'inline-flex',
							alignItems: 'center',
							gap: '10px',
							background: 'linear-gradient(135deg, #0066FF 0%, #2563eb 100%)',
							color: '#ffffff',
							fontSize: '15px',
							fontWeight: 700,
							padding: '14px 32px',
							borderRadius: '999px',
							textDecoration: 'none',
							boxShadow: '0 8px 24px rgba(0, 102, 255, 0.4)',
							transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'
							e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 102, 255, 0.55)'
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.transform = 'translateY(0px) scale(1)'
							e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 102, 255, 0.4)'
						}}
					>
						<span>Explore All Placement Roadmaps</span>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
							<line x1="7" y1="17" x2="17" y2="7" />
							<polyline points="7 7 17 7 17 17" />
						</svg>
					</a>
					<span
						style={{
							fontSize: '12.5px',
							color: 'rgba(255, 255, 255, 0.5)',
							letterSpacing: '0.02em',
						}}
					>
						Updated weekly with verified questions from 2026 ongoing drives
					</span>
				</div>
			</div>
		</section>
	)
}
