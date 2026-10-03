import React from 'react'

export default function IdeaTokPreview({ className = '' }) {
	return (
		<div
			className={`relative w-full h-full min-h-[460px] max-h-[580px] bg-gradient-to-br from-[#120f0c] via-[#0d0a08] to-[#080705] border border-amber-500/20 rounded-2xl md:rounded-3xl p-5 md:p-7 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.12)] text-white select-none ${className}`}
			style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
		>
			{/* Ambient Warm Amber Gradient Glows */}
			<div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute -bottom-24 -right-24 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-coral-500/10 rounded-full blur-3xl pointer-events-none" />

			{/* Subtle Dot Grid */}
			<div
				className="absolute inset-0 opacity-[0.03] pointer-events-none"
				style={{
					backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.9) 1px, transparent 1px)`,
					backgroundSize: '24px 24px',
				}}
			/>

			{/* Top Window / HUD Bar */}
			<div className="relative z-10 flex items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
				<div className="flex items-center gap-2.5">
					<div className="flex items-center gap-1.5">
						<span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
						<span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block" />
						<span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
					</div>
					<div className="h-3.5 w-px bg-white/10 hidden sm:block" />
					<span
						className="text-[11px] md:text-xs font-bold tracking-wider uppercase text-amber-300"
						style={{ fontFamily: "'DM Mono', monospace" }}
					>
						IDEATOK BRAIN BITES
					</span>
					<span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
						60s High-Retention Cheat Cards
					</span>
				</div>

				{/* Bite Counter Badge */}
				<div className="flex items-center gap-2 bg-black/40 border border-amber-500/30 rounded-xl px-3 py-1.5 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
					<span className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
						<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
					</span>
					<span className="text-[10px] tracking-wider text-slate-400 font-semibold uppercase">
						BITE
					</span>
					<span
						className="text-sm md:text-base font-bold text-amber-400 tracking-tight"
						style={{ fontFamily: "'JetBrains Mono', monospace" }}
					>
						#24 / 50
					</span>
				</div>
			</div>

			{/* Middle Section: Vertical Swipeable Card Stack Mockup */}
			<div className="relative z-10 py-3 flex flex-col items-center justify-center my-auto">
				{/* Perspective Stack Wrapper */}
				<div className="relative w-full max-w-[460px] h-[260px] md:h-[280px] flex items-center justify-center">
					{/* Stack Card 3 (Bottom-most peek, scaled & rotated left) */}
					<div
						className="absolute w-[92%] h-[240px] rounded-2xl bg-[#130f0c] border border-white/[0.04] shadow-2xl pointer-events-none"
						style={{
							transform: 'translateY(-18px) scale(0.88) rotate(-3.5deg)',
							opacity: 0.35,
						}}
					/>

					{/* Stack Card 2 (Middle peek, scaled & rotated right) */}
					<div
						className="absolute w-[96%] h-[250px] rounded-2xl bg-[#18130e] border border-amber-500/20 shadow-2xl flex items-start justify-between px-5 pt-3 pointer-events-none"
						style={{
							transform: 'translateY(-9px) scale(0.94) rotate(2.5deg)',
							opacity: 0.7,
						}}
					>
						<span className="text-[10px] font-bold text-amber-400/60 uppercase tracking-wider">
							NEXT BITE: MODULAR INVERSE TRICKS
						</span>
						<span className="text-[10px] text-slate-500">BITE #25</span>
					</div>

					{/* Stack Card 1 (Active Foreground Card) */}
					<div
						className="relative w-full h-[255px] md:h-[270px] rounded-2xl bg-gradient-to-br from-[#1d1711] via-[#16120d] to-[#0f0c09] border border-amber-500/40 p-4 md:p-5 flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(245,158,11,0.2),inset_0_1px_1px_rgba(255,255,255,0.25)]"
						style={{ transform: 'translateY(0) scale(1) rotate(0deg)' }}
					>
						{/* Card Header Tags */}
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-2">
								<span className="px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
									<svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
										<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
									</svg>
									<span>QUANTS SHORTCUT</span>
								</span>
								<span className="text-[11px] text-slate-400 font-medium">Remainder Theorem</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-amber-400 font-bold flex items-center gap-1">
									<svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
										<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
									</svg>
									<span>SAVED</span>
								</span>
								<span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-bold hidden sm:inline-flex items-center gap-1">
									<svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
										<polygon points="5 3 19 12 5 21 5 3" />
									</svg>
									<span>0:18s</span>
								</span>
							</div>
						</div>

						{/* Question / Concept Headline */}
						<div>
							<h4
								className="text-base md:text-lg font-bold text-white leading-snug tracking-tight mb-2"
								style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
							>
								How to find remainder of <span className="text-amber-300 font-black">7¹⁰⁰ ÷ 8</span> in under 3 seconds?
							</h4>

							{/* Formula Breakdown Container */}
							<div className="rounded-xl bg-black/45 border border-amber-500/25 p-3 flex flex-col gap-1 shadow-inner">
								<div className="flex items-center justify-between text-xs">
									<span className="text-slate-400 font-medium">Step 1: Express 7 relative to 8</span>
									<span className="text-amber-400 font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
										7 ≡ -1 (mod 8)
									</span>
								</div>
								<div className="flex items-center justify-between text-xs">
									<span className="text-slate-400 font-medium">Step 2: Raise power</span>
									<span className="text-amber-400 font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
										(-1)¹⁰⁰ = +1
									</span>
								</div>
								<div className="flex items-center justify-between text-xs pt-1 border-t border-white/[0.08] mt-1 font-bold">
									<span className="text-emerald-400">➔ Correct Answer:</span>
									<span
										className="text-sm font-black text-amber-300"
										style={{ fontFamily: "'JetBrains Mono', monospace" }}
									>
										Remainder = 1
									</span>
								</div>
							</div>
						</div>

						{/* Swipe Up Hint & Practice Action */}
						<div className="flex items-center justify-between pt-1 border-t border-white/[0.06] text-xs">
							<div className="flex items-center gap-1.5 text-amber-400/90 text-[11px] font-bold">
								<span className="animate-bounce">⇡</span>
								<span>Swipe Up for Next Bite</span>
							</div>
							<div className="flex items-center gap-1 text-[11px] text-slate-400 font-semibold cursor-pointer hover:text-white transition-colors">
								<span>Practice drill</span>
								<span>➔</span>
							</div>
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
						RETENTION RATE
					</span>
					<span
						className="text-sm md:text-base font-extrabold text-amber-400"
						style={{ fontFamily: "'JetBrains Mono', monospace" }}
					>
						94.8% Active
					</span>
				</div>

				<div className="flex flex-col text-center">
					<span
						className="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
						style={{ fontFamily: "'DM Mono', monospace" }}
					>
						DAILY DIGEST
					</span>
					<span
						className="text-xs md:text-sm font-bold text-slate-200"
						style={{ fontFamily: "'JetBrains Mono', monospace" }}
					>
						16 Bites Consumed
					</span>
				</div>

				<div className="flex flex-col items-end">
					<span
						className="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
						style={{ fontFamily: "'DM Mono', monospace" }}
					>
						DAILY GOAL (50 BITES)
					</span>
					<div className="w-full max-w-[110px] mt-1.5 h-1.5 rounded-full bg-white/10 overflow-hidden">
						<div className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full w-[48%]" />
					</div>
				</div>
			</div>
		</div>
	)
}
