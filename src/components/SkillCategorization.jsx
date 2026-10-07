import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Code2, Sparkles, BookOpen } from 'lucide-react'

const LIBRARY_DATA = {
	header: 'PHONETIC LIBRARY',
	cards: [
		{
			id: 'dp',
			type: 'dark',
			title: 'DYNAMIC PROGRAMMING',
			tag: 'COMPANY MATCHED',
			stat: '48/50',
			statSub: 'Top 1% Speed',
			desc: 'Auto-grouped by company pattern, difficulty and topic.',
			chips: ['Amazon', 'Easy-Med-Hard', 'Arrays & DP'],
			footerLeft: 'Auto-categorized',
			footerRight: '128 Questions',
		},
		{
			id: 'amazon',
			type: 'coral',
			pill: 'AMAZON PATTERN',
			difficulty: 'Difficulty: Hard',
			qs: '128 Qs',
			subtitle: 'Trees, Graphs & Dynamic Programming',
			bench: '99.4% Tier-1 Match',
			candidate: 'TCS Prime & Amazon Track',
		},
		{
			id: 'aptitude',
			type: 'white',
			pill: 'INFOSYS & ACCENTURE',
			label: 'APTITUDE · 312 Qs',
			subtitle: 'Quantitative Speed & Logical Reasoning',
			mastery: '98% Mastery',
			status: 'VERIFIED SYLLABUS',
		},
	],
}

export default function SkillCategorization({ className = '' }) {
	const [activeOrder, setActiveOrder] = useState([0, 1, 2]) // 0 is front
	const [hoveredIndex, setHoveredIndex] = useState(null)
	const [activeChip, setActiveChip] = useState(0)
	const [countVal, setCountVal] = useState(0)

	const containerRef = useRef(null)
	const cardStackRef = useRef(null)

	useEffect(() => {
		const prefersReduced =
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches

		const ctx = gsap.context(() => {
			if (prefersReduced) {
				setCountVal(48)
				return
			}

			// 1. Dark container rises
			gsap.fromTo(
				'.device-card',
				{ y: 24, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
			)

			// 2. Back layers fan out with stagger
			gsap.fromTo(
				'.fan-card',
				{ y: 16, opacity: 0, scale: 0.95 },
				{
					y: 0,
					opacity: 1,
					scale: 1,
					duration: 0.5,
					ease: 'power3.out',
					stagger: 0.08,
					delay: 0.25,
				},
			)

			// 3. Numbers count up
			const counter = { val: 0 }
			gsap.to(counter, {
				val: 48,
				duration: 0.8,
				ease: 'power2.out',
				delay: 0.4,
				onUpdate: () => setCountVal(Math.round(counter.val)),
			})
		}, containerRef)

		return () => ctx.revert()
	}, [])

	// Swap card to front with smooth GSAP transition
	const bringToFront = (clickedCardIdx) => {
		if (clickedCardIdx === activeOrder[0]) return

		const prefersReduced =
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches

		if (prefersReduced) {
			setActiveOrder((prev) => [
				clickedCardIdx,
				...prev.filter((idx) => idx !== clickedCardIdx),
			])
			return
		}

		gsap.to(`.card-layer-${clickedCardIdx}`, {
			y: -20,
			scale: 1.04,
			duration: 0.22,
			ease: 'power2.out',
			onComplete: () => {
				setActiveOrder((prev) => [
					clickedCardIdx,
					...prev.filter((idx) => idx !== clickedCardIdx),
				])
				gsap.fromTo(
					`.card-layer-${clickedCardIdx}`,
					{ y: -15, scale: 1.02 },
					{ y: 0, scale: 1, duration: 0.35, ease: 'power3.out' },
				)
			},
		})
	}

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
							{LIBRARY_DATA.header}
						</span>
					</div>
					<div className="flex items-center gap-1.5 opacity-40">
						<span className="w-1.5 h-1.5 rounded-full bg-white" />
						<span className="w-1.5 h-1.5 rounded-full bg-white" />
					</div>
				</div>

				{/* Stacked Cards Area */}
				<div
					ref={cardStackRef}
					className="relative w-full h-[285px] flex items-end justify-center pt-2"
				>
					{/* Layer Position 2: Furthest Back Card (Crisp White Card: Aptitude · 312 Qs) */}
					{activeOrder.map((cardIndex, position) => {
						const isFront = position === 0
						const isMiddle = position === 1
						const isBack = position === 2

						// Back Card 1: Crisp White
						if (cardIndex === 2) {
							return (
								<div
									key="card-aptitude"
									onClick={() => bringToFront(2)}
									onMouseEnter={() => setHoveredIndex(2)}
									onMouseLeave={() => setHoveredIndex(null)}
									className={`card-layer-2 fan-card absolute w-[94%] h-[190px] rounded-[24px] p-4 flex flex-col justify-between cursor-pointer transition-all duration-300 ease-out`}
									style={{
										bottom: isFront
											? '0px'
											: isMiddle
												? hoveredIndex === 2
													? '80px'
													: '48px'
												: hoveredIndex === 2
													? '98px'
													: '72px',
										transform: isFront
											? 'rotate(0deg)'
											: isMiddle
												? hoveredIndex === 2
													? 'rotate(3deg) translateY(-6px)'
													: 'rotate(2deg)'
												: hoveredIndex === 2
													? 'rotate(-4.5deg) translateY(-6px)'
													: 'rotate(-3deg)',
										zIndex: isFront ? 30 : isMiddle ? 20 : 10,
										background: 'linear-gradient(135deg, #ffffff 0%, #f4f4f7 100%)',
										boxShadow:
											'0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,0.06)',
									}}
								>
									{/* Top Row */}
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200">
											<BookOpen className="w-3 h-3 text-slate-600" strokeWidth={1.5} />
											<span
												className="text-[9px] font-black uppercase tracking-wider text-slate-700"
												style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
											>
												{LIBRARY_DATA.cards[2].pill}
											</span>
										</div>

										<span className="text-[10px] font-mono font-bold text-slate-500">
											312 Qs
										</span>
									</div>

									{/* Center */}
									<div>
										<span
											className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 block"
											style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
										>
											{LIBRARY_DATA.cards[2].label}
										</span>
										<span className="text-xs font-bold text-slate-800 tracking-tight">
											{LIBRARY_DATA.cards[2].subtitle}
										</span>
									</div>

									{/* Bottom */}
									<div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[9px]">
										<span className="font-mono text-slate-400">MODULO · RATIOS · DI</span>
										<span className="font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
											{LIBRARY_DATA.cards[2].status}
										</span>
									</div>
								</div>
							)
						}

						// Back Card 2: Coral-to-Orange Hero Card (Amazon Pattern · Hard)
						if (cardIndex === 1) {
							return (
								<div
									key="card-amazon"
									onClick={() => bringToFront(1)}
									onMouseEnter={() => setHoveredIndex(1)}
									onMouseLeave={() => setHoveredIndex(null)}
									className={`card-layer-1 fan-card absolute w-[96%] h-[190px] rounded-[24px] p-4 flex flex-col justify-between cursor-pointer transition-all duration-300 ease-out`}
									style={{
										bottom: isFront
											? '0px'
											: isMiddle
												? hoveredIndex === 1
													? '78px'
													: '48px'
												: hoveredIndex === 1
													? '98px'
													: '72px',
										transform: isFront
											? 'rotate(0deg)'
											: isMiddle
												? hoveredIndex === 1
													? 'rotate(3.5deg) translateY(-6px)'
													: 'rotate(2deg)'
												: hoveredIndex === 1
													? 'rotate(-4deg) translateY(-6px)'
													: 'rotate(-2.5deg)',
										zIndex: isFront ? 30 : isMiddle ? 20 : 10,
										background:
											'linear-gradient(135deg, #ff5e62 0%, #ff9966 50%, #ea580c 100%)',
										boxShadow:
											'0 20px 40px -8px rgba(235, 75, 90, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
									}}
								>
									{/* Top Row */}
									<div className="flex items-center justify-between text-white">
										<div className="flex items-center gap-1.5 bg-black/25 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
											<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
											<span
												className="text-[10px] font-black tracking-wider uppercase"
												style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
											>
												{LIBRARY_DATA.cards[1].pill}
											</span>
										</div>
										<span className="text-[11px] font-mono font-bold text-white/90">
											{LIBRARY_DATA.cards[1].qs}
										</span>
									</div>

									{/* Center */}
									<div className="flex flex-col gap-0.5 text-white drop-shadow">
										<span
											className="text-[10px] text-white/80 font-bold uppercase tracking-wider"
											style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
										>
											{LIBRARY_DATA.cards[1].difficulty}
										</span>
										<span className="text-sm font-extrabold tracking-tight">
											{LIBRARY_DATA.cards[1].subtitle}
										</span>
									</div>

									{/* Bottom */}
									<div className="flex items-center justify-between text-white/90 pt-1 border-t border-white/20 text-[10px] font-semibold">
										<span>{LIBRARY_DATA.cards[1].candidate}</span>
										<span className="font-mono bg-white/20 px-2 py-0.5 rounded-md">
											{LIBRARY_DATA.cards[1].bench}
										</span>
									</div>
								</div>
							)
						}

						// Front Dark-Glass Card (Dynamic Programming · Selected Category)
						return (
							<div
								key="card-dp"
								onClick={() => bringToFront(0)}
								className={`card-layer-0 relative w-full h-[195px] rounded-[28px] p-4 md:p-5 flex flex-col justify-between transition-all duration-300`}
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

								{/* Front Card Header: Blue circle icon + title + green pill */}
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2">
										<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
											<Code2 className="w-3.5 h-3.5" strokeWidth={1.5} />
										</div>
										<span
											className="text-[11px] font-bold text-slate-300 uppercase tracking-wider"
											style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
										>
											{LIBRARY_DATA.cards[0].title}
										</span>
									</div>

									<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold shadow-sm">
										<span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
										<span>{LIBRARY_DATA.cards[0].tag}</span>
									</div>
								</div>

								{/* Big Stat + Description */}
								<div className="my-auto py-0.5">
									<div className="flex items-baseline gap-2">
										<span className="text-3xl md:text-4xl font-black text-white tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] tabular-nums">
											{countVal}/50
										</span>
										<span className="text-xs font-bold text-[#4F7CFF] tracking-normal">
											{LIBRARY_DATA.cards[0].statSub}
										</span>
									</div>
									<p className="text-[10px] md:text-[11px] text-slate-400 font-medium mt-1 truncate">
										{LIBRARY_DATA.cards[0].desc}
									</p>
								</div>

								{/* Row of 3 Small Filter Chips */}
								<div className="flex items-center gap-1.5 pb-1">
									{LIBRARY_DATA.cards[0].chips.map((chip, idx) => {
										const isActive = activeChip === idx
										return (
											<button
												key={chip}
												type="button"
												onClick={(e) => {
													e.stopPropagation()
													setActiveChip(idx)
												}}
												className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium transition-all duration-150 cursor-pointer ${
													isActive
														? 'bg-[#4F7CFF] text-white shadow-sm'
														: 'bg-white/[0.06] text-slate-400 border border-white/10 hover:text-white'
												}`}
											>
												{chip}
											</button>
										)
									})}
								</div>

								{/* Bottom Micro Footer */}
								<div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/[0.08] pt-1.5">
									<span className="flex items-center gap-1.5">
										<span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
										<span>{LIBRARY_DATA.cards[0].footerLeft}</span>
									</span>
									<span className="text-white/80 font-mono font-semibold">
										{LIBRARY_DATA.cards[0].footerRight}
									</span>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
