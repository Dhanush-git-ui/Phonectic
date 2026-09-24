import React from 'react'

export default function SpeedMathPreview({ className = '' }) {
	return (
		<div
			className={`relative w-full h-full min-h-[460px] max-h-[580px] bg-gradient-to-br from-[#0c0f17] via-[#090c14] to-[#07090e] border border-cyan-500/20 rounded-2xl md:rounded-3xl p-5 md:p-7 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.12)] text-white select-none ${className}`}
			style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
		>
			{/* Ambient Gradient Glows */}
			<div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

			{/* Subtle Tech Grid Background */}
			<div
				className="absolute inset-0 opacity-[0.03] pointer-events-none"
				style={{
					backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
					backgroundSize: '24px 24px',
				}}
			/>

			{/* Top Window / HUD Bar */}
			<div className="relative z-10 flex items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
				<div className="flex items-center gap-2.5">
					<div className="flex items-center gap-1.5">
						<span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
						<span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
						<span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
					</div>
					<div className="h-3.5 w-px bg-white/10 hidden sm:block" />
					<span
						className="text-[11px] md:text-xs font-bold tracking-wider uppercase text-slate-400"
						style={{ fontFamily: "'DM Mono', monospace" }}
					>
						OA ACCELERATOR
					</span>
					<span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
						Mental Math Time Attack
					</span>
				</div>

				{/* Live Countdown Timer */}
				<div className="flex items-center gap-2 bg-black/40 border border-rose-500/30 rounded-xl px-3 py-1.5 shadow-[0_0_15px_rgba(244,63,94,0.15)]">
					<span className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
						<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
					</span>
					<span className="text-[10px] tracking-wider text-slate-400 font-semibold uppercase">
						TIME LEFT
					</span>
					<span
						className="text-sm md:text-base font-bold text-rose-400 tracking-tight"
						style={{ fontFamily: "'JetBrains Mono', monospace" }}
					>
						00:18.4s
					</span>
				</div>
			</div>

			{/* Middle Section: Live Question & Visual Shortcuts */}
			<div className="relative z-10 py-5 flex flex-col gap-4">
				{/* Benchmark & Streak Status */}
				<div className="flex items-center justify-between text-xs">
					<div className="flex items-center gap-2 text-slate-400 font-medium">
						<span
							className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-white font-bold"
							style={{ fontFamily: "'DM Mono', monospace" }}
						>
							18 of 25
						</span>
						<span>• TCS Prime Benchmark</span>
					</div>
					<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold shadow-[0_0_12px_rgba(245,158,11,0.2)]">
						<span>🔥</span>
						<span>14x Multiplier</span>
					</div>
				</div>

				{/* Primary Math Equation Card */}
				<div className="relative rounded-2xl bg-black/35 border border-cyan-500/20 p-5 md:p-6 text-center shadow-inner flex flex-col items-center justify-center">
					<div
						className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)] mb-2"
						style={{ fontFamily: "'Bebas Neue', 'Plus Jakarta Sans', sans-serif" }}
					>
						(84 × 12) + (720 ÷ 15) = ?
					</div>

					{/* Shortcut Decomposition Hint Chip */}
					<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-[11px] md:text-xs">
						<span className="text-cyan-400 font-bold">⚡ 1.2s target</span>
						<span className="text-slate-500">•</span>
						<span style={{ fontFamily: "'DM Mono', monospace" }}>
							Shortcut decomposition: (840 + 168) + 48 = 1,056
						</span>
					</div>
				</div>

				{/* Options Grid (4 options, option B glowing correct) */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
					{/* Option A */}
					<div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-3 text-center transition-all hover:bg-white/[0.06]">
						<div className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Option A</div>
						<div
							className="text-base md:text-lg font-bold text-slate-300"
							style={{ fontFamily: "'JetBrains Mono', monospace" }}
						>
							1,048
						</div>
					</div>

					{/* Option B: Active / Glowing Correct Answer */}
					<div className="relative rounded-xl bg-gradient-to-b from-emerald-500/20 to-emerald-950/30 border-2 border-emerald-400 p-3 text-center shadow-[0_0_24px_rgba(16,185,129,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)]">
						<div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.2 rounded-full bg-emerald-500 text-black text-[9px] font-black uppercase tracking-wider">
							CORRECT +120 PTS
						</div>
						<div className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold mb-0.5 flex items-center justify-center gap-1">
							<span>Option B</span>
							<span>✓</span>
						</div>
						<div
							className="text-base md:text-lg font-black text-emerald-300"
							style={{ fontFamily: "'JetBrains Mono', monospace" }}
						>
							1,056
						</div>
					</div>

					{/* Option C */}
					<div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-3 text-center transition-all hover:bg-white/[0.06]">
						<div className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Option C</div>
						<div
							className="text-base md:text-lg font-bold text-slate-300"
							style={{ fontFamily: "'JetBrains Mono', monospace" }}
						>
							1,064
						</div>
					</div>

					{/* Option D */}
					<div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-3 text-center transition-all hover:bg-white/[0.06]">
						<div className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Option D</div>
						<div
							className="text-base md:text-lg font-bold text-slate-300"
							style={{ fontFamily: "'JetBrains Mono', monospace" }}
						>
							1,032
						</div>
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
						NATIONAL BENCHMARK
					</span>
					<span
						className="text-sm md:text-base font-extrabold text-cyan-400"
						style={{ fontFamily: "'JetBrains Mono', monospace" }}
					>
						Top 0.8%
					</span>
				</div>

				<div className="flex flex-col text-center">
					<span
						className="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
						style={{ fontFamily: "'DM Mono', monospace" }}
					>
						DRILL ACCURACY
					</span>
					<div className="flex items-center justify-center gap-1">
						<span
							className="text-sm md:text-base font-extrabold text-emerald-400"
							style={{ fontFamily: "'JetBrains Mono', monospace" }}
						>
							99.4%
						</span>
						<span className="text-[10px] font-bold text-emerald-400/80">(+4.2%)</span>
					</div>
				</div>

				<div className="flex flex-col items-end">
					<span
						className="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
						style={{ fontFamily: "'DM Mono', monospace" }}
					>
						PACE (TARGET 2.0s)
					</span>
					<div className="w-full max-w-[110px] mt-1.5 h-1.5 rounded-full bg-white/10 overflow-hidden">
						<div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full w-[78%]" />
					</div>
				</div>
			</div>
		</div>
	)
}
