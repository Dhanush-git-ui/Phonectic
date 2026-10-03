import React, { useState } from 'react'

export default function PerformanceInsightsPreview({ className = '' }) {
	const [activeBar, setActiveBar] = useState(4) // Friday highlighted

	const barData = [
		{ day: 'M', height: 48, value: '88% Acc', label: 'Mon' },
		{ day: 'T', height: 65, value: '92% Acc', label: 'Tue' },
		{ day: 'W', height: 42, value: '85% Acc', label: 'Wed' },
		{ day: 'T', height: 78, value: '96% Acc', label: 'Thu' },
		{ day: 'F', height: 96, value: '99.4% Acc', label: 'Fri', isPeak: true },
		{ day: 'S', height: 72, value: '94% Acc', label: 'Sat' },
		{ day: 'S', height: 55, value: '90% Acc', label: 'Sun' },
	]

	return (
		<div
			className={`relative w-full h-full min-h-[460px] lg:min-h-[520px] rounded-[40px] md:rounded-[48px] flex flex-col justify-between p-6 md:p-8 select-none overflow-hidden ${className}`}
			style={{
				backgroundColor: '#dbeafe',
				fontFamily: "'Plus Jakarta Sans', sans-serif",
			}}
		>
			{/* Ambient background glow */}
			<div
				className="absolute -top-12 -left-12 w-72 h-72 rounded-full pointer-events-none opacity-40"
				style={{
					background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(219, 234, 254, 0) 70%)',
				}}
			/>
			<div
				className="absolute -bottom-12 -right-12 w-72 h-72 rounded-full pointer-events-none opacity-40"
				style={{
					background: 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, rgba(219, 234, 254, 0) 70%)',
				}}
			/>

			{/* Top Stacked Floating Notifications Area */}
			<div className="relative z-10 w-full max-w-[390px] mx-auto pt-3">
				{/* Back Stacked Card: Forecast Insight */}
				<div
					className="absolute top-1 left-4 right-4 h-14 rounded-2xl bg-white/70 backdrop-blur-sm px-4 py-2.5 flex items-center justify-between shadow-sm border border-white/60 transition-transform duration-300"
					style={{
						transform: 'translateY(-12px) scale(0.93)',
						zIndex: 1,
					}}
				>
					<div className="flex items-center gap-2">
						<span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
							📈
						</span>
						<span className="text-xs font-bold text-slate-600">
							Trend Forecast: 98.4% Tier-1 Probability
						</span>
					</div>
					<span className="text-[10px] font-bold text-slate-400">
						AI Model
					</span>
				</div>

				{/* Front Alert Card: Heads up! */}
				<div
					className="relative z-10 bg-white rounded-3xl p-5 shadow-[0_16px_36px_rgba(25,18,70,0.12)] border border-white/90 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
				>
					<div className="flex items-start justify-between gap-3">
						<div className="flex items-center gap-2.5">
							<div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md text-base">
								⚡
							</div>
							<div className="flex flex-col">
								<span className="text-sm font-black text-slate-900 tracking-tight">
									Heads up!
								</span>
								<span className="text-[11px] text-slate-400 font-medium">
									Solve speed increased by 42%
								</span>
							</div>
						</div>

						<span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
							now
						</span>
					</div>

					<p className="text-xs md:text-sm text-slate-600 leading-relaxed mt-2.5 font-medium">
						Your Quant solve speed is <strong className="text-indigo-600 font-bold">42% faster</strong> than last week — beating 98% of TCS Prime applicants.
					</p>
				</div>
			</div>

			{/* Bottom Modern Bar Chart Area */}
			<div className="relative z-10 w-full max-w-[390px] mx-auto pt-4 pb-2">
				{/* Chart Title Header */}
				<div className="flex items-center justify-between mb-3 px-2">
					<div className="flex items-center gap-2">
						<span className="text-xs font-extrabold text-slate-700 tracking-tight">
							Weekly Speed &amp; Accuracy Velocity
						</span>
					</div>
					<span className="text-[11px] font-bold text-indigo-600 bg-white px-2.5 py-1 rounded-full shadow-sm">
						+38% vs Peers
					</span>
				</div>

				{/* Vertical Bars Grid */}
				<div className="relative h-44 flex items-end justify-between px-3 gap-2 bg-white/40 backdrop-blur-sm rounded-3xl p-4 border border-white/50 shadow-sm">
					{/* Subtle Horizontal Benchmark Lines */}
					<div className="absolute inset-x-4 top-8 border-b border-indigo-200/50 pointer-events-none" />
					<div className="absolute inset-x-4 top-20 border-b border-indigo-200/40 pointer-events-none" />

					{barData.map((bar, idx) => {
						const isSelected = activeBar === idx

						return (
							<div
								key={idx}
								onClick={() => setActiveBar(idx)}
								className="relative flex-1 flex flex-col items-center h-full justify-end group cursor-pointer"
							>
								{/* Tooltip on hover/active */}
								{isSelected && (
									<div className="absolute -top-7 px-2 py-0.5 rounded-md bg-slate-900 text-white text-[10px] font-bold shadow-md whitespace-nowrap z-20 animate-fadeIn">
										{bar.value}
									</div>
								)}

								{/* Rounded Bar Pillar */}
								<div
									className={`w-full max-w-[32px] rounded-t-xl transition-all duration-500 ${
										bar.isPeak || isSelected
											? 'shadow-[0_8px_20px_rgba(99,102,241,0.45)]'
											: 'opacity-70 group-hover:opacity-100'
									}`}
									style={{
										height: `${bar.height}%`,
										background:
											bar.isPeak || isSelected
												? 'linear-gradient(180deg, #4f46e5 0%, #312e81 100%)'
												: 'linear-gradient(180deg, #818cf8 0%, #a5b4fc 100%)',
									}}
								/>

								{/* Day Label */}
								<span
									className={`text-[10px] font-bold mt-2 transition-colors ${
										isSelected ? 'text-indigo-950 font-black' : 'text-slate-500'
									}`}
								>
									{bar.day}
								</span>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
