import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Zap, TrendingUp } from 'lucide-react'

const INSIGHTS_DATA = {
	header: 'PHONETIC INSIGHTS',
	toasts: [
		{
			id: 1,
			title: 'Heads up!',
			desc: 'Solve speed up 42%',
			timestamp: 'now',
		},
		{
			id: 2,
			title: 'TCS Prime Cutoff',
			desc: 'Advanced logic cleared',
			timestamp: '3m ago',
		},
	],
	card: {
		label: 'WEEKLY SPEED & ACCURACY',
		pill: '+38% VS PEERS',
		heroNum: 42,
		heroSuffix: '%',
		heroSub: 'faster than last week',
		footerLeft: 'Beating 98% of TCS Prime applicants',
		footerRight: 'Live',
	},
	bars: [
		{ day: 'M', height: 26, isFriday: false },
		{ day: 'T', height: 38, isFriday: false },
		{ day: 'W', height: 48, isFriday: false },
		{ day: 'T', height: 56, isFriday: false },
		{ day: 'F', height: 82, isFriday: true, acc: '99.4% ACC' },
		{ day: 'S', height: 62, isFriday: false },
		{ day: 'S', height: 68, isFriday: false },
	],
	benchmarkY: 42, // TCS Prime Median
}

export default function PerformanceInsights({ className = '' }) {
	const containerRef = useRef(null)
	const [countVal, setCountVal] = useState(0)

	useEffect(() => {
		const prefersReduced =
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches

		const ctx = gsap.context(() => {
			if (prefersReduced) {
				setCountVal(INSIGHTS_DATA.card.heroNum)
				return
			}

			// 1. Dark card rises
			gsap.fromTo(
				'.device-card',
				{ y: 24, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
			)

			// 2. Floating toasts fan in
			gsap.fromTo(
				'.fan-toast',
				{ y: -12, opacity: 0, scale: 0.94 },
				{
					y: 0,
					opacity: 1,
					scale: 1,
					duration: 0.55,
					ease: 'power3.out',
					stagger: 0.08,
					delay: 0.25,
				},
			)

			// 3. Bars grow from 0 height
			gsap.fromTo(
				'.chart-bar-rect',
				{ scaleY: 0, transformOrigin: 'bottom' },
				{
					scaleY: 1,
					duration: 0.6,
					ease: 'power2.out',
					stagger: 0.05,
					delay: 0.35,
					onComplete: () => {
						gsap.to('.tooltip-badge', {
							opacity: 1,
							y: 0,
							duration: 0.3,
							ease: 'power2.out',
						})
					},
				},
			)

			// 4. Hero number count up
			const counter = { val: 0 }
			gsap.to(counter, {
				val: INSIGHTS_DATA.card.heroNum,
				duration: 0.8,
				ease: 'power2.out',
				delay: 0.4,
				onUpdate: () => setCountVal(Math.round(counter.val)),
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
							{INSIGHTS_DATA.header}
						</span>
					</div>
					<div className="flex items-center gap-1.5 opacity-40">
						<span className="w-1.5 h-1.5 rounded-full bg-white" />
						<span className="w-1.5 h-1.5 rounded-full bg-white" />
					</div>
				</div>

				{/* Stacked Area with Toast Overlapping Front Card */}
				<div className="relative w-full h-[285px] flex items-end justify-center pt-2">
					{/* Faded Toast 2 (Peeking behind Toast 1, rotated -2deg) */}
					<div
						className="fan-toast absolute w-[86%] rounded-[20px] p-2.5 px-3.5 flex items-center justify-between"
						style={{
							top: '0px',
							transform: 'rotate(-2.5deg)',
							zIndex: 10,
							background:
								'linear-gradient(135deg, rgba(35, 36, 46, 0.7) 0%, rgba(20, 20, 26, 0.75) 100%)',
							backdropFilter: 'blur(10px)',
							WebkitBackdropFilter: 'blur(10px)',
							border: '1px solid rgba(255, 255, 255, 0.08)',
							opacity: 0.45,
						}}
					>
						<div className="flex items-center gap-2">
							<span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
							<span className="text-[10px] text-white/70 font-semibold truncate">
								{INSIGHTS_DATA.toasts[1].title} · {INSIGHTS_DATA.toasts[1].desc}
							</span>
						</div>
						<span className="text-[9px] font-mono text-white/40">
							{INSIGHTS_DATA.toasts[1].timestamp}
						</span>
					</div>

					{/* Primary Notification Toast (Floating above card, rotated 1.5deg, blue-tinted border) */}
					<div
						className="fan-toast absolute w-[92%] rounded-[22px] p-3 px-4 flex items-center justify-between cursor-pointer transition-all duration-300 hover:scale-[1.02]"
						style={{
							top: '18px',
							transform: 'rotate(1.2deg)',
							zIndex: 20,
							background:
								'linear-gradient(135deg, rgba(30, 27, 34, 0.95) 0%, rgba(18, 18, 22, 0.98) 100%)',
							backdropFilter: 'blur(16px)',
							WebkitBackdropFilter: 'blur(16px)',
							border: '1px solid rgba(79, 124, 255, 0.4)',
							boxShadow:
								'0 15px 35px -5px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
						}}
					>
						<div className="flex items-center gap-2.5">
							{/* Purple-Blue Circle Icon */}
							<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md flex-shrink-0">
								<Zap className="w-3.5 h-3.5 fill-current" strokeWidth={1.5} />
							</div>

							<div className="flex items-baseline gap-1.5 truncate">
								<span className="text-xs font-bold text-white tracking-tight">
									{INSIGHTS_DATA.toasts[0].title}
								</span>
								<span className="text-xs text-slate-400 truncate">
									{INSIGHTS_DATA.toasts[0].desc}
								</span>
							</div>
						</div>

						{/* Mono Timestamp */}
						<span className="text-[10px] font-mono font-semibold text-[#4F7CFF] bg-[#4F7CFF]/15 px-2 py-0.5 rounded-full border border-[#4F7CFF]/30 flex-shrink-0">
							{INSIGHTS_DATA.toasts[0].timestamp}
						</span>
					</div>

					{/* Front Card: Dark Glass with Live Bar Chart */}
					<div
						className="relative w-full h-[210px] rounded-[28px] p-4 md:p-5 flex flex-col justify-between transition-all duration-300"
						style={{
							zIndex: 30,
							background:
								'linear-gradient(135deg, rgba(35, 36, 46, 0.88) 0%, rgba(20, 20, 26, 0.94) 100%)',
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

						{/* Front Card Header: Label + Green Pill */}
						<div className="flex items-center justify-between">
							<span
								className="text-[11px] font-bold text-slate-300 uppercase tracking-wider"
								style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
							>
								{INSIGHTS_DATA.card.label}
							</span>

							<div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold shadow-sm">
								<span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
								<span>{INSIGHTS_DATA.card.pill}</span>
							</div>
						</div>

						{/* Hero Number Display */}
						<div className="flex items-baseline gap-2 pt-0.5">
							<span className="text-3xl md:text-4xl font-black text-white tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] tabular-nums">
								{countVal}
								{INSIGHTS_DATA.card.heroSuffix}
							</span>
							<span className="text-xs font-bold text-[#4F7CFF] tracking-normal">
								{INSIGHTS_DATA.card.heroSub}
							</span>
						</div>

						{/* Hand-written Inline SVG Chart (7 Slim Rounded Bars M-S) */}
						<div className="w-full relative my-1">
							<svg
								viewBox="0 0 340 100"
								className="w-full h-auto overflow-visible"
								style={{ maxHeight: 95 }}
							>
								<defs>
									{/* Exact Hero Coral-to-Orange Gradient */}
									<linearGradient
										id="coralGradient"
										x1="0%"
										y1="0%"
										x2="100%"
										y2="100%"
									>
										<stop offset="0%" stopColor="#ff5e62" />
										<stop offset="50%" stopColor="#ff9966" />
										<stop offset="100%" stopColor="#ea580c" />
									</linearGradient>
								</defs>

								{/* Dotted Horizontal Benchmark Line (TCS PRIME MEDIAN) */}
								<line
									x1="10"
									y1={INSIGHTS_DATA.benchmarkY}
									x2="225"
									y2={INSIGHTS_DATA.benchmarkY}
									stroke="rgba(255, 255, 255, 0.22)"
									strokeWidth="1"
									strokeDasharray="3 3"
								/>
								<text
									x="235"
									y={INSIGHTS_DATA.benchmarkY + 3}
									fill="#94A3B8"
									fontSize="8"
									fontFamily="'JetBrains Mono', monospace"
									fontWeight="600"
									letterSpacing="0.05em"
								>
									TCS PRIME MEDIAN
								</text>

								{/* 7 Bars */}
								{INSIGHTS_DATA.bars.map((bar, i) => {
									const barWidth = 14
									const x = 20 + i * 44
									const y = 84 - bar.height

									return (
										<g key={bar.day}>
											{/* Bar Rectangle */}
											<rect
												className="chart-bar-rect"
												x={x}
												y={y}
												width={barWidth}
												height={bar.height}
												rx="4"
												fill={bar.isFriday ? 'url(#coralGradient)' : '#2A2A33'}
												style={{
													filter: bar.isFriday
														? 'drop-shadow(0 4px 12px rgba(255, 94, 98, 0.45))'
														: 'none',
												}}
											/>

											{/* Friday Floating Tooltip (White pill, dark text) */}
											{bar.isFriday && (
												<g
													className="tooltip-badge"
													style={{ opacity: 0, transform: 'translateY(2px)' }}
												>
													<rect
														x={x - 22}
														y={y - 20}
														width="58"
														height="16"
														rx="8"
														fill="#FFFFFF"
														filter="drop-shadow(0 4px 10px rgba(0,0,0,0.3))"
													/>
													<text
														x={x + 7}
														y={y - 9}
														textAnchor="middle"
														fill="#111318"
														fontSize="8"
														fontWeight="800"
														fontFamily="'Roboto Condensed', sans-serif"
													>
														{bar.acc}
													</text>
													{/* Tiny pointer */}
													<polygon
														points={`${x + 4},${y - 4} ${x + 10},${y - 4} ${x + 7},${y - 1}`}
														fill="#FFFFFF"
													/>
												</g>
											)}

											{/* X-axis Day Label */}
											<text
												x={x + barWidth / 2}
												y="96"
												textAnchor="middle"
												fill={bar.isFriday ? '#FFFFFF' : '#64748B'}
												fontSize="9"
												fontWeight={bar.isFriday ? '800' : '600'}
												fontFamily="'Roboto Condensed', sans-serif"
											>
												{bar.day}
											</text>
										</g>
									)
								})}
							</svg>
						</div>

						{/* Bottom Micro Footer */}
						<div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/[0.08] pt-1.5">
							<span className="flex items-center gap-1.5">
								<span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
								<span>{INSIGHTS_DATA.card.footerLeft}</span>
							</span>
							<span className="flex items-center gap-1 text-white/80 font-mono font-semibold">
								<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
								<span>{INSIGHTS_DATA.card.footerRight}</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
