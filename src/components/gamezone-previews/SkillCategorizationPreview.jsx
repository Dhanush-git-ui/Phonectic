import React from 'react'

export default function SkillCategorizationPreview({ className = '' }) {
	return (
		<div
			className={`relative w-full h-full min-h-[460px] lg:min-h-[520px] rounded-[40px] md:rounded-[48px] flex flex-col items-center justify-center p-6 md:p-8 select-none overflow-hidden ${className}`}
			style={{
				backgroundColor: '#dbeafe',
				fontFamily: "'Plus Jakarta Sans', sans-serif",
			}}
		>
			{/* Ambient pastel glow */}
			<div
				className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none opacity-50"
				style={{
					background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(219, 234, 254, 0) 70%)',
				}}
			/>
			<div
				className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full pointer-events-none opacity-50"
				style={{
					background: 'radial-gradient(circle, rgba(96, 165, 250, 0.35) 0%, rgba(219, 234, 254, 0) 70%)',
				}}
			/>

			{/* Floating Pills and Cards Showcase Container */}
			<div className="relative w-full max-w-[420px] flex flex-col gap-3.5 z-10">
				{/* Top Floating Category Pills */}
				<div className="flex items-center justify-between px-2">
					<div
						className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-slate-800 text-xs font-bold shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform cursor-pointer"
					>
						<span className="w-2 h-2 rounded-full bg-blue-500" />
						<span>Coding &amp; DSA</span>
					</div>

					<div
						className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#10b981] text-white text-xs font-bold shadow-[0_4px_16px_rgba(16,185,129,0.3)] hover:scale-105 transition-transform cursor-pointer"
					>
						<span>⚡</span>
						<span>Speed Quants</span>
					</div>

					<div
						className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-slate-600 text-xs font-semibold shadow-sm hover:scale-105 transition-transform cursor-pointer"
					>
						<span>Tier-1 MNCs</span>
					</div>
				</div>

				{/* Floating Card 1: Small Top Tag Card */}
				<div className="flex justify-end pr-6">
					<div
						className="bg-white rounded-2xl px-4 py-2 flex items-center gap-2.5 shadow-[0_6px_20px_rgba(0,0,0,0.06)] border border-white/60 transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
					>
						<div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">
							✓
						</div>
						<div className="flex flex-col">
							<span className="text-[11px] font-bold text-slate-800">
								Remainder Theorem (mod 8)
							</span>
							<span className="text-[10px] text-slate-400 font-semibold">
								1.2s Target • 100% Accuracy
							</span>
						</div>
					</div>
				</div>

				{/* Floating Card 2: Main Featured Category Card (DSA Marathon) */}
				<div
					className="bg-white rounded-3xl p-4 md:p-5 flex items-center justify-between shadow-[0_12px_32px_rgba(30,20,80,0.08)] border border-white/80 transition-all duration-300 hover:shadow-[0_16px_36px_rgba(30,20,80,0.12)] hover:-translate-y-1 cursor-pointer"
				>
					<div className="flex items-center gap-3.5">
						<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl shadow-[0_4px_14px_rgba(59,130,246,0.35)]">
							💻
						</div>
						<div className="flex flex-col">
							<div className="flex items-center gap-2">
								<span className="text-[10px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
									CODING ROUND
								</span>
								<span className="text-[11px] text-slate-400 font-semibold">
									Amazon Benchmark
								</span>
							</div>
							<h4 className="text-sm md:text-base font-bold text-slate-900 mt-0.5">
								Dynamic Programming Sprint
							</h4>
						</div>
					</div>

					<div className="text-right">
						<span className="text-base font-black text-slate-900 block">
							48 / 50
						</span>
						<span className="text-[11px] font-semibold text-emerald-600">
							Top 1% Speed
						</span>
					</div>
				</div>

				{/* Floating Card 3: AI Interview Card */}
				<div
					className="bg-white rounded-3xl p-4 md:p-5 flex items-center justify-between shadow-[0_10px_28px_rgba(30,20,80,0.07)] border border-white/80 transition-all duration-300 hover:shadow-[0_14px_32px_rgba(30,20,80,0.1)] hover:-translate-y-1 cursor-pointer"
				>
					<div className="flex items-center gap-3.5">
						<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white text-xl shadow-[0_4px_14px_rgba(168,85,247,0.35)]">
							🗣️
						</div>
						<div className="flex flex-col">
							<div className="flex items-center gap-2">
								<span className="text-[10px] font-black uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md">
									AI MOCK INTERVIEW
								</span>
								<span className="text-[11px] text-slate-400 font-semibold">
									Tech &amp; Behavioral
								</span>
							</div>
							<h4 className="text-sm md:text-base font-bold text-slate-900 mt-0.5">
								System Design Simulation
							</h4>
						</div>
					</div>

					<div className="text-right">
						<span className="text-base font-black text-slate-900 block">
							9.4 / 10
						</span>
						<span className="text-[11px] font-bold text-purple-600">
							Passed Round
						</span>
					</div>
				</div>

				{/* Floating Card 4: Deductive & Visual Reasoning Card */}
				<div
					className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 flex items-center justify-between shadow-[0_8px_24px_rgba(30,20,80,0.06)] border border-white/70 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
				>
					<div className="flex items-center gap-3">
						<div className="w-11 h-11 rounded-2xl bg-amber-500 flex items-center justify-center text-white text-lg shadow-[0_4px_12px_rgba(245,158,11,0.3)]">
							🧠
						</div>
						<div className="flex flex-col">
							<div className="flex items-center gap-2">
								<span className="text-[10px] font-black uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
									DEDUCTIVE MATRIX
								</span>
							</div>
							<h4 className="text-sm font-bold text-slate-900">
								Rotational Symmetry Drill
							</h4>
						</div>
					</div>

					<div className="text-right">
						<span className="text-sm font-black text-slate-900 block">
							42s avg
						</span>
						<span className="text-[10px] font-semibold text-slate-400">
							Infosys Bench
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
