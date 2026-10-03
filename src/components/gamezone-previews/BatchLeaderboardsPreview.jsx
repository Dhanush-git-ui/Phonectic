import React from 'react'

export default function BatchLeaderboardsPreview({ className = '' }) {
	return (
		<div
			className={`relative w-full h-full min-h-[460px] max-h-[580px] bg-gradient-to-br from-[#121118] via-[#0d0d12] to-[#07070a] border border-amber-500/20 rounded-2xl md:rounded-3xl p-5 md:p-7 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.12)] text-white select-none ${className}`}
			style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
		>
			{/* Ambient Gold & Champagne Glows */}
			<div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute -bottom-24 -right-24 w-80 h-80 bg-yellow-600/15 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-40 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

			{/* Subtle Tech Grid */}
			<div
				className="absolute inset-0 opacity-[0.025] pointer-events-none"
				style={{
					backgroundImage: `radial-gradient(rgba(251, 191, 36, 0.9) 1px, transparent 1px)`,
					backgroundSize: '24px 24px',
				}}
			/>

			{/* Top Window / HUD Bar */}
			<div className="relative z-10 flex items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
				<div className="flex items-center gap-2.5">
					<div className="flex items-center gap-1.5">
						<span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
						<span className="w-2.5 h-2.5 rounded-full bg-slate-300/80 inline-block" />
						<span className="w-2.5 h-2.5 rounded-full bg-yellow-600/80 inline-block" />
					</div>
					<div className="h-3.5 w-px bg-white/10 hidden sm:block" />
					<span
						className="text-[11px] md:text-xs font-bold tracking-wider uppercase text-amber-300"
						style={{ fontFamily: "'DM Mono', monospace" }}
					>
						ALL-INDIA BATCH LEADERBOARD
					</span>
				</div>

				{/* Filter Tabs & Live Count */}
				<div className="flex items-center gap-2">
					<div className="flex items-center gap-1 bg-black/40 border border-white/[0.08] rounded-lg p-0.5 text-[10px] font-bold">
						<span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
							<svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
								<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
							</svg>
							<span>Sprint</span>
						</span>
						<span className="px-2 py-0.5 text-slate-500 hidden sm:inline">Weekly OA</span>
					</div>
					<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold">
						<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
						<span>4,820 Active</span>
					</div>
				</div>
			</div>

			{/* Middle Section: Top 3 Podium & Peer Rankings */}
			<div className="relative z-10 py-3 flex flex-col gap-3">
				{/* Top 3 Podium Display */}
				<div className="grid grid-cols-3 gap-2 md:gap-3 items-end pt-2 pb-1 max-w-[420px] mx-auto w-full">
					{/* Rank 2 (Silver) */}
					<div className="flex flex-col items-center">
						<div className="relative mb-1">
							<div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 p-0.5 shadow-[0_0_14px_rgba(203,213,225,0.3)]">
								<div className="w-full h-full rounded-full bg-[#13141f] flex items-center justify-center text-xs font-black text-slate-200">
									AS
								</div>
							</div>
							<span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-slate-300 text-black text-[9px] font-black flex items-center justify-center">
								2
							</span>
						</div>
						<span className="text-[11px] font-bold text-slate-200 truncate max-w-[90px]">Aryan S.</span>
						<span className="text-[9px] text-slate-400 truncate max-w-[90px]">IIT Bombay</span>
						<div className="w-full mt-1.5 pt-2 pb-2 rounded-t-xl bg-slate-800/40 border-t border-x border-slate-400/30 text-center">
							<span
								className="text-xs md:text-sm font-extrabold text-slate-200"
								style={{ fontFamily: "'JetBrains Mono', monospace" }}
							>
								3,840
							</span>
							<span className="text-[9px] block text-slate-400">99.2% Acc</span>
						</div>
					</div>

					{/* Rank 1 (Gold - Center & Elevated) */}
					<div className="flex flex-col items-center">
						<div className="relative mb-1">
							<div className="absolute -top-3 left-1/2 -translate-x-1/2 animate-bounce">
								<svg className="w-4 h-4 text-amber-300 fill-current" viewBox="0 0 24 24">
									<path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
								</svg>
							</div>
							<div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-600 p-0.5 shadow-[0_0_24px_rgba(251,191,36,0.6)]">
								<div className="w-full h-full rounded-full bg-[#1a150b] flex items-center justify-center text-sm font-black text-yellow-300">
									DK
								</div>
							</div>
							<span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-yellow-400 text-black text-[10px] font-black flex items-center justify-center shadow-md">
								1
							</span>
						</div>
						<span className="text-xs font-black text-yellow-300 truncate max-w-[100px]">Devika K.</span>
						<span className="text-[10px] text-amber-200/80 truncate max-w-[100px]">BITS Pilani</span>
						<div className="w-full mt-1.5 pt-3 pb-2.5 rounded-t-xl bg-gradient-to-b from-amber-500/25 to-amber-950/40 border-t-2 border-x border-amber-400/60 text-center shadow-[0_0_20px_rgba(245,158,11,0.25)]">
							<span
								className="text-sm md:text-base font-black text-yellow-300"
								style={{ fontFamily: "'JetBrains Mono', monospace" }}
							>
								4,120
							</span>
							<span className="text-[9px] block font-bold text-emerald-400">100% Acc • FAANG</span>
						</div>
					</div>

					{/* Rank 3 (Bronze) */}
					<div className="flex flex-col items-center">
						<div className="relative mb-1">
							<div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 p-0.5 shadow-[0_0_14px_rgba(217,119,6,0.3)]">
								<div className="w-full h-full rounded-full bg-[#17120e] flex items-center justify-center text-xs font-black text-amber-200">
									RV
								</div>
							</div>
							<span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-600 text-white text-[9px] font-black flex items-center justify-center">
								3
							</span>
						</div>
						<span className="text-[11px] font-bold text-slate-200 truncate max-w-[90px]">Rahul V.</span>
						<span className="text-[9px] text-slate-400 truncate max-w-[90px]">IIIT Hyderabad</span>
						<div className="w-full mt-1.5 pt-1.5 pb-1.5 rounded-t-xl bg-amber-900/30 border-t border-x border-amber-600/30 text-center">
							<span
								className="text-xs md:text-sm font-extrabold text-amber-200"
								style={{ fontFamily: "'JetBrains Mono', monospace" }}
							>
								3,710
							</span>
							<span className="text-[9px] block text-slate-400">98.6% Acc</span>
						</div>
					</div>
				</div>

				{/* Scrollable Ranked Peer Row */}
				<div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs">
					<div className="flex items-center gap-2.5">
						<span
							className="font-bold text-slate-400 w-5 text-center"
							style={{ fontFamily: "'DM Mono', monospace" }}
						>
							#4
						</span>
						<div className="w-6 h-6 rounded-full bg-blue-900/60 border border-blue-400/30 flex items-center justify-center text-[10px] font-bold text-blue-300">
							PM
						</div>
						<div className="flex flex-col">
							<span className="font-semibold text-slate-200 text-[11px]">Pooja M. • VNR VJIET</span>
							<span className="text-[9px] text-slate-500">TCS Prime &amp; Capgemini Cleared</span>
						</div>
					</div>
					<div className="text-right">
						<span
							className="font-bold text-slate-300 text-xs"
							style={{ fontFamily: "'JetBrains Mono', monospace" }}
						>
							3,590 PTS
						</span>
						<span className="text-[9px] block text-emerald-400 font-semibold">+14 Today</span>
					</div>
				</div>

				{/* Highlighted "YOUR RANK" Row Pinned at Bottom */}
				<div className="relative flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-950/60 via-indigo-950/50 to-amber-950/40 border-2 border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]">
					<div className="flex items-center gap-2.5">
						<span
							className="font-black text-cyan-300 text-xs px-1.5 py-0.5 rounded bg-cyan-500/20 border border-cyan-400/40"
							style={{ fontFamily: "'JetBrains Mono', monospace" }}
						>
							#42
						</span>
						<div className="flex flex-col">
							<div className="flex items-center gap-1.5">
								<span className="font-black text-white text-xs">YOU (Learniverse Campus)</span>
								<span className="text-[9px] px-1.5 py-0.2 rounded-full bg-cyan-400 text-black font-black uppercase">
									YOUR RANK
								</span>
							</div>
							<span className="text-[10px] text-cyan-200/80">Top 0.6% India • +8 Ranks ↑ Today</span>
						</div>
					</div>
					<div className="text-right">
						<span
							className="font-black text-cyan-300 text-sm"
							style={{ fontFamily: "'JetBrains Mono', monospace" }}
						>
							3,340 PTS
						</span>
						<span className="text-[9px] block font-bold text-amber-300">₹24+ LPA Tier</span>
					</div>
				</div>
			</div>

			{/* Bottom Telemetry Strip */}
			<div className="relative z-10 pt-3 border-t border-white/[0.08] grid grid-cols-3 gap-3 items-center">
				<div className="flex flex-col">
					<span
						className="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
						style={{ fontFamily: "'DM Mono', monospace" }}
					>
						CAMPUS PERCENTILE
					</span>
					<span
						className="text-sm md:text-base font-extrabold text-amber-300"
						style={{ fontFamily: "'JetBrains Mono', monospace" }}
					>
						99.4 %ile
					</span>
				</div>

				<div className="flex flex-col text-center">
					<span
						className="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
						style={{ fontFamily: "'DM Mono', monospace" }}
					>
						TIER STATUS
					</span>
					<span className="text-xs md:text-sm font-bold text-yellow-300">
						Super-Dream FAANG
					</span>
				</div>

				<div className="flex flex-col items-end">
					<span
						className="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
						style={{ fontFamily: "'DM Mono', monospace" }}
					>
						BENCHMARK (4,000 PTS)
					</span>
					<div className="w-full max-w-[110px] mt-1.5 h-1.5 rounded-full bg-white/10 overflow-hidden">
						<div className="h-full bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full w-[84%]" />
					</div>
				</div>
			</div>
		</div>
	)
}
