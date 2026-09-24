import React, { useState } from 'react'
import SpeedMathPreview from './SpeedMathPreview.jsx'
import VisualLogicPreview from './VisualLogicPreview.jsx'
import IdeaTokPreview from './IdeaTokPreview.jsx'
import BatchLeaderboardsPreview from './BatchLeaderboardsPreview.jsx'

const features = [
	{
		id: 0,
		num: '1',
		title: 'Timed Speed Math',
		desc: 'Sharpen mental math and fast calculation shortcuts with live benchmark time attacks.',
		accentColor: '#3b82f6',
		glowColor: 'rgba(59, 130, 246, 0.4)',
		activeBg: 'rgba(59, 130, 246, 0.12)',
		activeBorder: 'rgba(96, 165, 250, 0.5)',
		iconSrc: '/assets/icon-speed-math.png',
		component: SpeedMathPreview,
	},
	{
		id: 1,
		num: '2',
		title: 'Visual Logic Puzzles',
		desc: 'Master spatial, direction, and deductive reasoning patterns through matrix drills.',
		accentColor: '#a855f7',
		glowColor: 'rgba(168, 85, 247, 0.4)',
		activeBg: 'rgba(168, 85, 247, 0.12)',
		activeBorder: 'rgba(192, 132, 252, 0.5)',
		iconSrc: '/assets/icon-brain-logic.png',
		component: VisualLogicPreview,
	},
	{
		id: 2,
		num: '3',
		title: 'IdeaTok Brain Bites',
		desc: 'Digest bite-sized aptitude concepts, formulas, and memory tricks in 60-second swipeable stacks.',
		accentColor: '#f59e0b',
		glowColor: 'rgba(245, 158, 11, 0.4)',
		activeBg: 'rgba(245, 158, 11, 0.12)',
		activeBorder: 'rgba(251, 191, 36, 0.5)',
		iconSrc: '/assets/icon-ideatok-bites.png',
		component: IdeaTokPreview,
	},
	{
		id: 3,
		num: '4',
		title: 'Batch Leaderboards',
		desc: 'Compete with peers across India, track national percentiles, and unlock FAANG shortlist guarantees.',
		accentColor: '#fbbf24',
		glowColor: 'rgba(251, 191, 36, 0.4)',
		activeBg: 'rgba(251, 191, 36, 0.12)',
		activeBorder: 'rgba(252, 211, 77, 0.5)',
		iconSrc: '/assets/icon-batch-leaderboards.png',
		component: BatchLeaderboardsPreview,
	},
]

export default function GameZoneFeature1Section() {
	const [activeTab, setActiveTab] = useState(0)
	const activeFeature = features[activeTab]
	const ActivePreview = activeFeature.component

	return (
		<div className="framer-btjjzy" data-framer-name="Feature 1" style={{ width: '100%', position: 'relative' }}>
			<div className="framer-1wy9gdm" data-framer-name="Container" style={{ width: '100%' }}>
				{/* Desktop & Tablet Layout */}
				<div className="hidden md:flex flex-row items-stretch justify-between gap-8 lg:gap-12 w-full max-w-[1240px] mx-auto px-4 py-8">
					{/* Left Column: Dynamic Interactive Preview Panel */}
					<div
						className="w-full md:w-1/2 flex items-center justify-center relative min-h-[480px] lg:min-h-[540px]"
						style={{
							backgroundColor: 'transparent',
							borderRadius: '32px',
						}}
					>
						{/* Ambient Glow behind the active preview */}
						<div
							className="absolute inset-0 rounded-3xl blur-2xl transition-all duration-700 pointer-events-none"
							style={{
								background: `radial-gradient(circle at center, ${activeFeature.glowColor} 0%, transparent 70%)`,
								opacity: 0.6,
							}}
						/>

						{/* Component Display with smooth transition */}
						<div className="relative z-10 w-full h-full flex items-center justify-center transition-all duration-300 transform">
							<ActivePreview key={activeFeature.id} />
						</div>
					</div>

					{/* Right Column: Heading & 4 Feature Rows */}
					<div className="w-full md:w-1/2 flex flex-col justify-between py-2">
						{/* Header Titles */}
						<div className="flex flex-col gap-2 mb-6">
							<div className="flex items-center gap-2">
								<span
									className="text-xs font-black tracking-widest uppercase text-blue-400"
									style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
								>
									GAME ZONE &amp; APTITUDE
								</span>
							</div>
							<h3
								className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight"
								style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
							>
								Level up your problem-solving speed.
							</h3>
							<p className="text-sm lg:text-base text-slate-400 leading-relaxed max-w-xl">
								Solve timed challenges, pattern drills, and gamified quantitative questions designed for peak speed.
							</p>
						</div>

						{/* 4 Feature Rows List */}
						<div className="flex flex-col gap-3">
							{features.map((item) => {
								const isActive = activeTab === item.id

								return (
									<div
										key={item.id}
										onClick={() => setActiveTab(item.id)}
										className={`group relative flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
											isActive
												? 'shadow-lg'
												: 'hover:bg-white/[0.04]'
										}`}
										style={{
											backgroundColor: isActive ? item.activeBg : 'transparent',
											border: isActive ? `1.5px solid ${item.activeBorder}` : '1.5px solid transparent',
											boxShadow: isActive ? `0 8px 30px ${item.glowColor}` : 'none',
										}}
									>
										{/* Text Content */}
										<div className="flex flex-col gap-1 pr-4 flex-1">
											<div className="flex items-center gap-2.5">
												{isActive && (
													<span
														className="w-5 h-5 rounded-md bg-white text-black font-black text-xs flex items-center justify-center shadow"
														style={{ fontFamily: "'DM Mono', monospace" }}
													>
														{item.num}
													</span>
												)}
												<h4
													className={`text-base font-bold transition-colors ${
														isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
													}`}
												>
													{item.title}
												</h4>
											</div>

											{isActive && (
												<p className="text-xs text-slate-300/90 leading-relaxed mt-0.5 animate-fadeIn">
													{item.desc}
												</p>
											)}
										</div>

										{/* Thumbnail Icon Tile */}
										<div
											className={`relative w-12 h-12 min-w-[48px] min-h-[48px] rounded-xl overflow-hidden p-0 flex items-center justify-center transition-all duration-300 ${
												isActive ? 'scale-105' : 'group-hover:scale-105'
											}`}
											style={{
												backgroundColor: '#fdfbf7',
												border: isActive ? `2px solid ${item.accentColor}` : '1.5px solid rgba(255,255,255,0.18)',
												boxShadow: isActive
													? `0 0 20px ${item.glowColor}, 0 4px 12px rgba(0,0,0,0.5)`
													: '0 4px 12px rgba(0,0,0,0.4)',
											}}
										>
											<img
												src={item.iconSrc}
												alt={item.title}
												className="w-full h-full object-cover rounded-inherit transition-transform duration-300 group-hover:scale-110"
												style={{ transform: 'scale(1.06)' }}
											/>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>

				{/* Mobile Layout */}
				<div className="flex md:hidden flex-col gap-6 px-4 py-6 w-full">
					{/* Header */}
					<div className="flex flex-col gap-2 text-center items-center">
						<span
							className="text-xs font-black tracking-widest uppercase text-blue-400"
							style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
						>
							GAME ZONE &amp; APTITUDE
						</span>
						<h3 className="text-2xl font-black text-white leading-tight">
							Level up your problem-solving speed.
						</h3>
						<p className="text-xs text-slate-400 max-w-sm">
							Solve timed challenges, pattern drills, and gamified quantitative questions.
						</p>
					</div>

					{/* Mobile Tabs */}
					<div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none w-full justify-start">
						{features.map((item) => (
							<button
								key={item.id}
								onClick={() => setActiveTab(item.id)}
								className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
									activeTab === item.id
										? 'bg-white text-black shadow-md'
										: 'bg-white/[0.06] text-slate-400 hover:text-white'
								}`}
							>
								<span>{item.num}.</span>
								<span>{item.title}</span>
							</button>
						))}
					</div>

					{/* Active Preview on Mobile */}
					<div className="w-full relative rounded-2xl overflow-hidden shadow-2xl">
						<ActivePreview />
					</div>
				</div>
			</div>
		</div>
	)
}
