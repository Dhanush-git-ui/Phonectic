import React, { useState, useEffect } from 'react'
import PlacementWalletPreview from './PlacementWalletPreview.jsx'
import SkillCategorizationPreview from './SkillCategorizationPreview.jsx'
import PerformanceInsightsPreview from './PerformanceInsightsPreview.jsx'
import PlacementTargetsPreview from './PlacementTargetsPreview.jsx'

const features = [
	{
		id: 0,
		num: '1',
		title: 'Unified Placement Passport',
		desc: 'See all your certifications, skill ratings, and mock scores in one verified wallet view.',
		icon: (
			<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
				<rect x="2" y="5" width="20" height="14" rx="3" />
				<path d="M2 10h20" />
				<circle cx="16" cy="14" r="1.5" fill="currentColor" />
			</svg>
		),
		component: PlacementWalletPreview,
	},
	{
		id: 1,
		num: '2',
		title: 'Smart Skill Categorization',
		desc: 'Automatically organize questions by company pattern, difficulty, and aptitude topics.',
		icon: (
			<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
				<path d="M4 6h16M4 12h10M4 18h14" />
			</svg>
		),
		component: SkillCategorizationPreview,
	},
	{
		id: 2,
		num: '3',
		title: 'Real-Time Performance Insights',
		desc: 'Get AI notifications, solve speed analysis, and national percentile trends in real time.',
		icon: (
			<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
				<path d="M18 20V10M12 20V4M6 20v-6" />
			</svg>
		),
		component: PerformanceInsightsPreview,
	},
	{
		id: 3,
		num: '4',
		title: 'Custom Placement Targets',
		desc: 'Set daily practice targets and get notified before company hiring test deadlines.',
		icon: (
			<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
				<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
				<path d="M13.73 21a2 2 0 0 1-3.46 0" />
			</svg>
		),
		component: PlacementTargetsPreview,
	},
]

export default function GameZoneFeature1Section() {
	const [activeTab, setActiveTab] = useState(0)
	const activeFeature = features[activeTab]
	const ActivePreview = activeFeature.component

	useEffect(() => {
		const timer = setInterval(() => {
			setActiveTab((prev) => (prev + 1) % features.length)
		}, 2200)

		return () => clearInterval(timer)
	}, [])

	return (
		<div className="w-full relative py-8 px-4 md:px-6" style={{ overflow: 'visible' }}>
			<div className="max-w-[1200px] mx-auto w-full">
				{/* Desktop 2-Column Grid (OneFin Exact Spec) */}
				<div className="hidden md:grid md:grid-cols-2 gap-4 lg:gap-6 items-stretch w-full">
					{/* Left Column: Visual Showcase Card */}
					<div
						className="relative w-full rounded-[48px] lg:rounded-[64px] overflow-hidden flex items-center justify-center p-2 min-h-[540px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500"
						style={{
							backgroundColor: '#dbeafe',
						}}
					>
						<div key={activeFeature.id} className="tab-preview-animate">
							<ActivePreview />
						</div>
					</div>

					{/* Right Column: Content Box with 4 Tabs */}
					<div
						className="relative w-full rounded-[48px] lg:rounded-[64px] flex flex-col justify-between p-8 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/[0.06]"
						style={{
							backgroundColor: '#212124',
							fontFamily: "'Plus Jakarta Sans', sans-serif",
						}}
					>
						{/* Header Titles */}
						<div className="flex flex-col gap-3 mb-6">
							<span
								className="text-xs font-black tracking-widest uppercase text-[#60a5fa]"
								style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
							>
								PLACEMENT INTELLIGENCE
							</span>

							<h3
								className="text-3xl lg:text-4xl text-white leading-tight"
								style={{
									fontFamily: '"Roboto Condensed", sans-serif',
									fontWeight: 900,
									textTransform: 'uppercase',
									letterSpacing: '-0.03em',
								}}
							>
								Track your preparation effortlessly.
							</h3>

							<p className="text-sm lg:text-base text-white/60 leading-relaxed max-w-lg">
								Gain total visibility into where your skills stand, and make smarter prep choices with every test.
							</p>
						</div>

						{/* 4 Tabs List */}
						<div className="flex flex-col gap-2.5">
							{features.map((item) => {
								const isActive = activeTab === item.id

								return (
									<div
										key={item.id}
										onClick={() => setActiveTab(item.id)}
										className={`group relative flex items-center justify-between p-4 rounded-[22px] cursor-pointer transition-all duration-300 ${
											isActive
												? 'shadow-lg'
												: 'hover:bg-white/[0.04]'
										}`}
										style={{
											backgroundColor: isActive ? 'rgba(59, 130, 246, 0.12)' : 'transparent',
											border: isActive ? '1px solid rgba(59, 130, 246, 0.35)' : '1px solid transparent',
										}}
									>
										{/* Left Side: Number + Title & Description */}
										<div className="flex flex-col gap-1 pr-4 flex-1">
											<div className="flex items-center gap-2.5">
												{isActive ? (
													<span
														className="w-5 h-5 rounded-md bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-sm"
														style={{ fontFamily: "'DM Mono', monospace" }}
													>
														{item.num}
													</span>
												) : null}

												<h4
													className={`text-base transition-colors ${
														isActive ? 'text-white' : 'text-white/80 group-hover:text-white'
													}`}
													style={{
														fontFamily: '"Roboto Condensed", sans-serif',
														fontWeight: 900,
														textTransform: 'uppercase',
														letterSpacing: '-0.02em',
													}}
												>
													{item.title}
												</h4>
											</div>

											<div className={`tab-desc-wrapper ${isActive ? 'active' : ''}`}>
												<div className="tab-desc-inner">
													<p className="text-xs text-white/60 leading-relaxed pt-1">
														{item.desc}
													</p>
												</div>
											</div>
										</div>

										{/* Right Side: Icon Badge */}
										<div
											className={`relative w-11 h-11 min-w-[44px] min-h-[44px] rounded-2xl flex items-center justify-center transition-all duration-300 ${
												isActive
													? 'text-white scale-105 shadow-[0_4px_16px_rgba(37,99,235,0.5)]'
													: 'text-white/40 group-hover:text-white/70 group-hover:scale-105'
											}`}
											style={{
												backgroundColor: isActive ? '#2563eb' : 'rgba(255, 255, 255, 0.05)',
												boxShadow: isActive
													? '0 0 16px rgba(37,99,235,0.6), inset 0 0 6px rgba(255,255,255,0.2)'
													: 'inset 0 0 6px rgba(255,255,255,0.05)',
											}}
										>
											{item.icon}
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>

				{/* Mobile Layout */}
				<div className="flex md:hidden flex-col gap-6 w-full">
					{/* Header */}
					<div className="flex flex-col gap-2 text-center items-center">
						<span
							className="text-xs font-black tracking-widest uppercase text-[#60a5fa]"
							style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
						>
							PLACEMENT INTELLIGENCE
						</span>
						<h3 className="text-2xl font-black text-white leading-tight">
							Track your preparation effortlessly.
						</h3>
						<p className="text-xs text-white/60 max-w-sm">
							Gain total visibility into where your skills stand, and make smarter prep choices.
						</p>
					</div>

					{/* Mobile Tabs */}
					<div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none w-full justify-start">
						{features.map((item) => (
							<button
								key={item.id}
								onClick={() => setActiveTab(item.id)}
								className={`px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
									activeTab === item.id
										? 'bg-blue-600 text-white shadow-md'
										: 'bg-white/[0.06] text-white/60 hover:text-white'
								}`}
							>
								<span>{item.num}.</span>
								<span>{item.title}</span>
							</button>
						))}
					</div>

					{/* Active Preview on Mobile */}
					<div
						className="w-full relative rounded-3xl overflow-hidden shadow-2xl p-2 min-h-[460px] flex items-center justify-center"
						style={{ backgroundColor: '#dbeafe' }}
					>
						<div key={activeFeature.id} className="tab-preview-animate">
							<ActivePreview />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
