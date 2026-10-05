import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Target, Clock, Bell } from 'lucide-react'

const TARGETS_DATA = {
	header: 'PHONECTIC TARGETS',
	backCard: {
		pill: 'TCS NQT CLOSES IN 2D',
		rightText: 'Daily goal 200',
		subtitle: 'National Qualifier Test · Batch 2026 Shortlist',
	},
	hero: {
		title: "TODAY'S PLACEMENT TARGETS",
		tag: 'ON TRACK',
		current: 184,
		total: 200,
		sub: '92% done',
		footerLeft: 'Reminder 24h before deadline',
		footerRight: '4 Active Goals',
	},
	grid: [
		{
			id: 'coding',
			label: 'CODING DRILLS',
			current: 184,
			total: 200,
			percentage: 92,
		},
		{
			id: 'aptitude',
			label: 'SPEED APTITUDE',
			current: 420,
			total: 500,
			percentage: 84,
		},
		{
			id: 'hr',
			label: 'AI MOCK HR',
			current: 9,
			total: 10,
			percentage: 90,
		},
		{
			id: 'benchmarks',
			label: 'TARGET BENCHMARKS',
			current: 14,
			total: 15,
			percentage: 93,
		},
	],
}

const RING_RADIUS = 16
const CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS // ~100.53

export default function PlacementTargets({ className = '' }) {
	const containerRef = useRef(null)
	const [heroCount, setHeroCount] = useState(0)
	const [gridCounts, setGridCounts] = useState(TARGETS_DATA.grid.map(() => 0))
	const [gridPcts, setGridPcts] = useState(TARGETS_DATA.grid.map(() => 0))

	useEffect(() => {
		const prefersReduced =
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches

		const ctx = gsap.context(() => {
			if (prefersReduced) {
				setHeroCount(TARGETS_DATA.hero.current)
				setGridCounts(TARGETS_DATA.grid.map((g) => g.current))
				setGridPcts(TARGETS_DATA.grid.map((g) => g.percentage))
				return
			}

			// 1. Dark container rises
			gsap.fromTo(
				'.device-card',
				{ y: 24, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
			)

			// 2. Back coral card fans out
			gsap.fromTo(
				'.fan-back-card',
				{ y: 16, opacity: 0, scale: 0.95 },
				{
					y: 0,
					opacity: 1,
					scale: 1,
					duration: 0.5,
					ease: 'power3.out',
					delay: 0.25,
				},
			)

			// 3. Ring progress arcs animate
			TARGETS_DATA.grid.forEach((item, idx) => {
				const ringEl = document.querySelector(`.target-ring-arc-${idx}`)
				if (ringEl) {
					const targetOffset = CIRCUMFERENCE * (1 - item.percentage / 100)
					gsap.fromTo(
						ringEl,
						{ strokeDashoffset: CIRCUMFERENCE },
						{
							strokeDashoffset: targetOffset,
							duration: 0.8,
							ease: 'power2.out',
							delay: 0.35 + idx * 0.1,
						},
					)
				}
			})

			// 4. Hero & mini counts animate up
			const heroCounter = { val: 0 }
			gsap.to(heroCounter, {
				val: TARGETS_DATA.hero.current,
				duration: 0.8,
				ease: 'power2.out',
				delay: 0.4,
				onUpdate: () => setHeroCount(Math.round(heroCounter.val)),
			})

			const gridTargets = TARGETS_DATA.grid.map((g) => ({
				val: 0,
				target: g.current,
				pct: 0,
				targetPct: g.percentage,
			}))
			gsap.to(gridTargets, {
				val: (i) => gridTargets[i].target,
				pct: (i) => gridTargets[i].targetPct,
				duration: 0.8,
				ease: 'power2.out',
				delay: 0.45,
				onUpdate: () => {
					setGridCounts(gridTargets.map((t) => Math.round(t.val)))
					setGridPcts(gridTargets.map((t) => Math.round(t.pct)))
				},
			})
		}, containerRef)

		return () => ctx.revert()
	}, [])

	return (
		<div
			ref={containerRef}
			className={`relative w-full h-full min-h-[460px] lg:min-h-[520px] rounded-[40px] md:rounded-[48px] flex items-center justify-center p-6 md:p-10 select-none overflow-hidden ${className}`}
			style={{
				backgroundColor: '#dbeafe',
				fontFamily: "'Plus Jakarta Sans', sans-serif",
			}}
		>
			{/* Ambient soft glow highlights on the pastel canvas */}
			<div
				className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none opacity-60"
				style={{
					background:
						'radial-gradient(circle, rgba(147, 197, 253, 0.45) 0%, rgba(219, 234, 254, 0) 70%)',
				}}
			/>
			<div
				className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full pointer-events-none opacity-60"
				style={{
					background:
						'radial-gradient(circle, rgba(96, 165, 250, 0.35) 0%, rgba(219, 234, 254, 0) 70%)',
				}}
			/>

			{/* Centered Dark Device Card (~440px wide, radius 44-48px, near-black #16161A) */}
			<div
				className="device-card relative w-full max-w-[420px] md:max-w-[440px] min-h-[385px] rounded-[44px] md:rounded-[48px] flex flex-col justify-end p-5 md:p-6 transition-transform duration-500 hover:scale-[1.01]"
				style={{
					background: 'linear-gradient(180deg, #18181c 0%, #101013 100%)',
					boxShadow:
						'0 30px 60px -15px rgba(22, 16, 68, 0.28), 0 10px 24px -5px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
					border: '1px solid rgba(255, 255, 255, 0.08)',
				}}
			>
				{/* Top Header Row: 6px accent dot + tiny uppercase condensed label + 2 dots on right */}
				<div className="absolute top-5 left-0 right-0 flex items-center justify-between px-7">
					<div className="flex items-center gap-2">
						<span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF] animate-pulse" />
						<span
							className="text-[11px] font-black tracking-widest text-white/50 uppercase"
							style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
						>
							{TARGETS_DATA.header}
						</span>
					</div>
					<div className="flex items-center gap-1.5 opacity-40">
						<span className="w-1.5 h-1.5 rounded-full bg-white" />
						<span className="w-1.5 h-1.5 rounded-full bg-white" />
					</div>
				</div>

				{/* Stacked Cards Area */}
				<div className="relative w-full h-[285px] flex items-end justify-center pt-2">
					{/* Back Coral-to-Orange Hero Card (Rotated -2deg, Peeking out the top) */}
					<div
						className="fan-back-card absolute w-[96%] h-[190px] rounded-[24px] p-4 flex flex-col justify-between cursor-pointer transition-all duration-300 ease-out"
						style={{
							bottom: '56px',
							transform: 'rotate(-2.2deg)',
							zIndex: 10,
							background:
								'linear-gradient(135deg, #ff5e62 0%, #ff9966 50%, #ea580c 100%)',
							boxShadow:
								'0 20px 40px -8px rgba(235, 75, 90, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
						}}
					>
						{/* Top row */}
						<div className="flex items-center justify-between text-white">
							<div className="flex items-center gap-1.5 bg-black/25 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
								<Clock className="w-3 h-3 text-white" strokeWidth={1.5} />
								<span
									className="text-[10px] font-black tracking-wider uppercase"
									style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
								>
									{TARGETS_DATA.backCard.pill}
								</span>
							</div>
							<span className="text-[11px] font-mono font-bold text-white/90">
								{TARGETS_DATA.backCard.rightText}
							</span>
						</div>

						{/* Center */}
						<div className="flex flex-col gap-0.5 text-white drop-shadow">
							<span
								className="text-[10px] text-white/80 font-bold uppercase tracking-wider"
								style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
							>
								Priority Benchmark
							</span>
							<span className="text-xs font-bold tracking-tight">
								{TARGETS_DATA.backCard.subtitle}
							</span>
						</div>

						{/* Bottom */}
						<div className="flex items-center justify-between text-white/90 pt-1 border-t border-white/20 text-[9px] font-semibold">
							<span>Live Synchronized</span>
							<span className="font-mono bg-white/20 px-2 py-0.5 rounded-md">
								Target: 95%+
							</span>
						</div>
					</div>

					{/* Front Dark-Glass Card: Grid with 2x2 Progress Rings */}
					<div
						className="relative w-full h-[220px] rounded-[28px] p-4 md:p-5 flex flex-col justify-between transition-all duration-300"
						style={{
							zIndex: 30,
							background:
								'linear-gradient(135deg, rgba(35, 36, 46, 0.9) 0%, rgba(20, 20, 26, 0.95) 100%)',
							backdropFilter: 'blur(20px)',
							WebkitBackdropFilter: 'blur(20px)',
							boxShadow:
								'0 25px 50px -12px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 -1px 1px rgba(0, 0, 0, 0.4)',
							border: '1px solid rgba(255, 255, 255, 0.16)',
						}}
					>
						{/* Ambient Top Glow Line */}
						<div
							className="absolute top-0 left-8 right-8 h-[1px]"
							style={{
								background:
									'linear-gradient(90deg, transparent 0%, rgba(147, 197, 253, 0.8) 50%, transparent 100%)',
							}}
						/>

						{/* Front Card Header: Target Icon + Title + Green Pill + Bell with dot */}
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
									<Target className="w-3.5 h-3.5" strokeWidth={1.5} />
								</div>
								<span
									className="text-[11px] font-bold text-slate-300 uppercase tracking-wider"
									style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
								>
									{TARGETS_DATA.hero.title}
								</span>
							</div>

							<div className="flex items-center gap-2">
								<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold shadow-sm">
									<span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
									<span>{TARGETS_DATA.hero.tag}</span>
								</div>

								{/* Small Bell icon with 6px blue notification dot */}
								<div className="relative w-6 h-6 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-slate-300">
									<Bell className="w-3 h-3 text-slate-300" strokeWidth={1.5} />
									<span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
								</div>
							</div>
						</div>

						{/* Hero Number Display */}
						<div className="flex items-baseline gap-2 pt-0.5">
							<span className="text-3xl md:text-4xl font-black text-white tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] tabular-nums">
								{heroCount}/{TARGETS_DATA.hero.total}
							</span>
							<span className="text-xs font-bold text-[#4F7CFF] tracking-normal">
								{TARGETS_DATA.hero.sub}
							</span>
						</div>

						{/* 2x2 Grid of Mini Dark Cards */}
						<div className="grid grid-cols-2 gap-1.5 my-auto">
							{TARGETS_DATA.grid.map((item, idx) => (
								<div
									key={item.id}
									className="rounded-[14px] p-2 flex items-center justify-between"
									style={{
										background: 'rgba(255, 255, 255, 0.04)',
										border: '1px solid rgba(255, 255, 255, 0.08)',
									}}
								>
									{/* Left Text */}
									<div className="flex flex-col min-w-0 pr-1">
										<span
											className="text-[9px] font-bold text-slate-400 uppercase tracking-wider truncate"
											style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
										>
											{item.label}
										</span>
										<span className="text-[10px] font-mono text-white/90 font-semibold tabular-nums">
											{gridCounts[idx]}/{item.total}
										</span>
									</div>

									{/* Right: SVG Ring Progress (4px stroke, blue arc, dim track) */}
									<div className="relative w-9 h-9 flex-shrink-0 flex items-center justify-center">
										<svg
											className="w-9 h-9 transform -rotate-90"
											viewBox="0 0 38 38"
										>
											{/* Dim Track */}
											<circle
												cx="19"
												cy="19"
												r={RING_RADIUS}
												stroke="rgba(255, 255, 255, 0.12)"
												strokeWidth="3.5"
												fill="none"
											/>
											{/* Blue Arc */}
											<circle
												className={`target-ring-arc-${idx}`}
												cx="19"
												cy="19"
												r={RING_RADIUS}
												stroke="#4F7CFF"
												strokeWidth="3.5"
												strokeLinecap="round"
												fill="none"
												strokeDasharray={CIRCUMFERENCE}
												strokeDashoffset={CIRCUMFERENCE}
											/>
										</svg>
										{/* Centered % in Tabular Numerals */}
										<span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white tabular-nums">
											{gridPcts[idx]}%
										</span>
									</div>
								</div>
							))}
						</div>

						{/* Bottom Micro Footer */}
						<div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/[0.08] pt-1.5">
							<span className="flex items-center gap-1.5">
								<span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
								<span>{TARGETS_DATA.hero.footerLeft}</span>
							</span>
							<span className="text-white/80 font-mono font-semibold">
								{TARGETS_DATA.hero.footerRight}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
