import React from 'react'

export default function VisualLogicPreview({ className = '' }) {
	return (
		<div
			className={`relative w-full h-full min-h-[460px] max-h-[580px] bg-gradient-to-br from-[#0c0a18] via-[#090814] to-[#07060f] border border-purple-500/20 rounded-2xl md:rounded-3xl p-5 md:p-7 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.12)] text-white select-none ${className}`}
			style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
		>
			{/* Ambient Purple Gradient Glows */}
			<div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />

			{/* Geometric Lattice Background */}
			<div
				className="absolute inset-0 opacity-[0.025] pointer-events-none"
				style={{
					backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
					backgroundSize: '28px 28px',
				}}
			/>

			{/* Top Window / HUD Bar */}
			<div className="relative z-10 flex items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
				<div className="flex items-center gap-2.5">
					<div className="flex items-center gap-1.5">
						<span className="w-2.5 h-2.5 rounded-full bg-purple-500/80 inline-block" />
						<span className="w-2.5 h-2.5 rounded-full bg-indigo-500/80 inline-block" />
						<span className="w-2.5 h-2.5 rounded-full bg-cyan-500/80 inline-block" />
					</div>
					<div className="h-3.5 w-px bg-white/10 hidden sm:block" />
					<span
						className="text-[11px] md:text-xs font-bold tracking-wider uppercase text-purple-300"
						style={{ fontFamily: "'DM Mono', monospace" }}
					>
						SPATIAL REASONING LAB
					</span>
					<span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
						Capgemini &amp; Infosys Deductive Bench
					</span>
				</div>

				{/* Level Indicator */}
				<div className="flex items-center gap-2 bg-black/40 border border-purple-500/30 rounded-xl px-3 py-1.5 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
					<span className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
						<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
					</span>
					<span className="text-[10px] tracking-wider text-slate-400 font-semibold uppercase">
						LEVEL
					</span>
					<span
						className="text-sm md:text-base font-bold text-purple-400 tracking-tight"
						style={{ fontFamily: "'JetBrains Mono', monospace" }}
					>
						04 / 10
					</span>
				</div>
			</div>

			{/* Middle Section: 3x3 Puzzle Matrix */}
			<div className="relative z-10 py-4 flex flex-col gap-3">
				{/* Instruction & Rule Bar */}
				<div className="flex items-center justify-between text-xs">
					<div className="flex items-center gap-2 text-slate-400 font-medium">
						<span
							className="px-2 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 font-bold text-[10px]"
							style={{ fontFamily: "'DM Mono', monospace" }}
						>
							RULE MATRIX
						</span>
						<span className="text-[11px] text-slate-300">
							Rotational symmetry &amp; segment count (+2 per step)
						</span>
					</div>
					<div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-[11px] font-bold">
						<svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
							<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
						</svg>
						<span>98.2% Match</span>
					</div>
				</div>

				{/* 3x3 Pattern Matrix Container */}
				<div className="bg-black/40 border border-purple-500/20 rounded-2xl p-3 md:p-4 shadow-inner">
					<div className="grid grid-cols-3 gap-2 md:gap-3 max-w-[340px] mx-auto">
						{/* Slot 1: Concentric Circle - Top Right Filled */}
						<div className="aspect-square bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center p-2 hover:border-purple-500/30 transition-colors">
							<svg viewBox="0 0 40 40" className="w-8 h-8 text-purple-300 stroke-current" fill="none">
								<circle cx="20" cy="20" r="14" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
								<circle cx="20" cy="20" r="8" strokeWidth="2" />
								<path d="M20 20 L20 6 A14 14 0 0 1 34 20 Z" fill="currentColor" fillOpacity="0.4" stroke="none" />
							</svg>
						</div>

						{/* Slot 2: Concentric Circle - Bottom Right Filled (Rotated) */}
						<div className="aspect-square bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center p-2 hover:border-purple-500/30 transition-colors">
							<svg viewBox="0 0 40 40" className="w-8 h-8 text-purple-300 stroke-current" fill="none">
								<circle cx="20" cy="20" r="14" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
								<circle cx="20" cy="20" r="8" strokeWidth="2" />
								<path d="M20 20 L34 20 A14 14 0 0 1 20 34 Z" fill="currentColor" fillOpacity="0.5" stroke="none" />
							</svg>
						</div>

						{/* Slot 3: Concentric Circle - Bottom Left Filled */}
						<div className="aspect-square bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center p-2 hover:border-purple-500/30 transition-colors">
							<svg viewBox="0 0 40 40" className="w-8 h-8 text-purple-300 stroke-current" fill="none">
								<circle cx="20" cy="20" r="14" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
								<circle cx="20" cy="20" r="8" strokeWidth="2" />
								<path d="M20 20 L20 34 A14 14 0 0 1 6 20 Z" fill="currentColor" fillOpacity="0.6" stroke="none" />
							</svg>
						</div>

						{/* Slot 4: Hexagon with 1 inner vertex dot */}
						<div className="aspect-square bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center p-2 hover:border-purple-500/30 transition-colors">
							<svg viewBox="0 0 40 40" className="w-8 h-8 text-indigo-300 stroke-current" fill="none">
								<polygon points="20,7 32,13 32,27 20,33 8,27 8,13" strokeWidth="2" />
								<circle cx="20" cy="20" r="3" fill="currentColor" />
							</svg>
						</div>

						{/* Slot 5: Hexagon with 2 inner dots */}
						<div className="aspect-square bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center p-2 hover:border-purple-500/30 transition-colors">
							<svg viewBox="0 0 40 40" className="w-8 h-8 text-indigo-300 stroke-current" fill="none">
								<polygon points="20,7 32,13 32,27 20,33 8,27 8,13" strokeWidth="2" />
								<circle cx="15" cy="20" r="2.5" fill="currentColor" />
								<circle cx="25" cy="20" r="2.5" fill="currentColor" />
							</svg>
						</div>

						{/* Slot 6: Hexagon with 3 inner dots */}
						<div className="aspect-square bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center p-2 hover:border-purple-500/30 transition-colors">
							<svg viewBox="0 0 40 40" className="w-8 h-8 text-indigo-300 stroke-current" fill="none">
								<polygon points="20,7 32,13 32,27 20,33 8,27 8,13" strokeWidth="2" />
								<circle cx="20" cy="14" r="2.5" fill="currentColor" />
								<circle cx="14" cy="25" r="2.5" fill="currentColor" />
								<circle cx="26" cy="25" r="2.5" fill="currentColor" />
							</svg>
						</div>

						{/* Slot 7: Rotated Square with 2 inner spokes */}
						<div className="aspect-square bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center p-2 hover:border-purple-500/30 transition-colors">
							<svg viewBox="0 0 40 40" className="w-8 h-8 text-fuchsia-300 stroke-current" fill="none">
								<rect x="10" y="10" width="20" height="20" rx="3" strokeWidth="2" transform="rotate(45 20 20)" />
								<line x1="20" y1="9" x2="20" y2="31" strokeWidth="2" />
							</svg>
						</div>

						{/* Slot 8: Rotated Square with 4 crossed spokes */}
						<div className="aspect-square bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center p-2 hover:border-purple-500/30 transition-colors">
							<svg viewBox="0 0 40 40" className="w-8 h-8 text-fuchsia-300 stroke-current" fill="none">
								<rect x="10" y="10" width="20" height="20" rx="3" strokeWidth="2" transform="rotate(45 20 20)" />
								<line x1="20" y1="9" x2="20" y2="31" strokeWidth="2" />
								<line x1="9" y1="20" x2="31" y2="20" strokeWidth="2" />
							</svg>
						</div>

						{/* Slot 9: THE HIGHLIGHTED MISSING PIECE (?) */}
						<div className="relative aspect-square bg-gradient-to-b from-purple-500/25 to-purple-950/40 border-2 border-dashed border-purple-400 rounded-xl flex flex-col items-center justify-center p-1 shadow-[0_0_22px_rgba(168,85,247,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] animate-pulse">
							<span
								className="text-2xl md:text-3xl font-black text-purple-200 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
								style={{ fontFamily: "'Bebas Neue', sans-serif" }}
							>
								?
							</span>
							<span className="text-[8px] font-bold uppercase tracking-wider text-purple-300">
								MISSING PIECE
							</span>
						</div>
					</div>
				</div>

				{/* Candidate Options Row (Option C Selected) */}
				<div className="flex items-center justify-between gap-2 pt-1">
					<span
						className="text-[10px] uppercase font-bold text-slate-400 tracking-wider hidden sm:inline"
						style={{ fontFamily: "'DM Mono', monospace" }}
					>
						SELECT CANDIDATE:
					</span>
					<div className="flex items-center gap-2 flex-1 justify-end">
						{/* Candidate A */}
						<div className="w-12 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-xs font-bold text-slate-400 hover:bg-white/[0.08] transition-all cursor-pointer">
							A
						</div>
						{/* Candidate B */}
						<div className="w-12 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-xs font-bold text-slate-400 hover:bg-white/[0.08] transition-all cursor-pointer">
							B
						</div>
						{/* Candidate C (Selected / Correct Match) */}
						<div className="px-3 h-10 rounded-lg bg-purple-500/25 border-2 border-purple-400 flex items-center gap-1.5 text-xs font-bold text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.35)] cursor-pointer">
							<span>C</span>
							<span className="text-emerald-400 font-black">✓</span>
							<span className="text-[10px] text-purple-300 font-bold hidden md:inline">+150 PTS</span>
						</div>
						{/* Candidate D */}
						<div className="w-12 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-xs font-bold text-slate-400 hover:bg-white/[0.08] transition-all cursor-pointer">
							D
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
						DEDUCTIVE IQ
					</span>
					<span
						className="text-sm md:text-base font-extrabold text-purple-300"
						style={{ fontFamily: "'JetBrains Mono', monospace" }}
					>
						138 SCORE
					</span>
				</div>

				{/* Small Progress Dots as requested */}
				<div className="flex flex-col items-center">
					<span
						className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1"
						style={{ fontFamily: "'DM Mono', monospace" }}
					>
						DRILL PROGRESS
					</span>
					<div className="flex items-center gap-1.5">
						<span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
						<span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
						<span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
						<span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
						<span className="w-2 h-2 rounded-full bg-white/20" />
						<span className="w-2 h-2 rounded-full bg-white/20" />
						<span className="w-2 h-2 rounded-full bg-white/20" />
						<span className="w-2 h-2 rounded-full bg-white/20" />
					</div>
				</div>

				<div className="flex flex-col items-end">
					<span
						className="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
						style={{ fontFamily: "'DM Mono', monospace" }}
					>
						SPEED: 4.8s (AVG 14s)
					</span>
					<div className="w-full max-w-[110px] mt-1.5 h-1.5 rounded-full bg-white/10 overflow-hidden">
						<div className="h-full bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full w-[88%]" />
					</div>
				</div>
			</div>
		</div>
	)
}
