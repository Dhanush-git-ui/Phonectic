import React, { useState } from 'react'

export default function PlacementWalletPreview({ className = '' }) {
	const [hoveredCard, setHoveredCard] = useState(null)

	return (
		<div
			className={`relative w-full h-full min-h-[460px] lg:min-h-[520px] rounded-[40px] md:rounded-[48px] flex items-center justify-center p-6 md:p-10 select-none overflow-hidden ${className}`}
			style={{
				backgroundColor: '#dedbf7',
				fontFamily: "'Plus Jakarta Sans', sans-serif",
			}}
		>
			{/* Ambient soft glow highlights on the pastel canvas */}
			<div
				className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none opacity-60"
				style={{
					background: 'radial-gradient(circle, rgba(168, 154, 255, 0.45) 0%, rgba(222, 219, 247, 0) 70%)',
				}}
			/>
			<div
				className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full pointer-events-none opacity-60"
				style={{
					background: 'radial-gradient(circle, rgba(255, 182, 193, 0.35) 0%, rgba(222, 219, 247, 0) 70%)',
				}}
			/>

			{/* The Physical Wallet Container */}
			<div
				className="relative w-full max-w-[390px] h-[370px] rounded-[36px] flex flex-col justify-end p-5 transition-transform duration-500 hover:scale-[1.02]"
				style={{
					background: 'linear-gradient(180deg, #18181c 0%, #101013 100%)',
					boxShadow: '0 30px 60px -15px rgba(22, 16, 68, 0.28), 0 10px 24px -5px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
					border: '1px solid rgba(255, 255, 255, 0.08)',
				}}
			>
				{/* Top Debossed Wallet Header Tab */}
				<div className="absolute top-4 left-0 right-0 flex items-center justify-between px-7">
					<div className="flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-indigo-400/80 animate-pulse" />
						<span
							className="text-[11px] font-black tracking-widest text-white/50 uppercase"
							style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
						>
							PHONECTIC WALLET
						</span>
					</div>
					<div className="flex items-center gap-1.5 opacity-40">
						<span className="w-1.5 h-1.5 rounded-full bg-white" />
						<span className="w-1.5 h-1.5 rounded-full bg-white" />
					</div>
				</div>

				{/* Stacked Cards Area */}
				<div className="relative w-full h-[270px] flex items-end justify-center">
					{/* Card 1: Back Card (Crisp White Mastercard/Visa Style Tier-1 Pass) */}
					<div
						onMouseEnter={() => setHoveredCard(1)}
						onMouseLeave={() => setHoveredCard(null)}
						className="absolute w-[94%] h-[190px] rounded-[24px] p-4 flex flex-col justify-between cursor-pointer transition-all duration-500 ease-out"
						style={{
							bottom: hoveredCard === 1 ? '95px' : '68px',
							transform: hoveredCard === 1 ? 'rotate(-4deg) translateY(-8px)' : 'rotate(-2.5deg)',
							zIndex: 10,
							background: 'linear-gradient(135deg, #ffffff 0%, #f4f4f7 100%)',
							boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,0.06)',
						}}
					>
						{/* Top row: Logos */}
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								{/* Gold Chip */}
								<div
									className="w-8 h-6 rounded-md relative flex items-center justify-center overflow-hidden"
									style={{
										background: 'linear-gradient(135deg, #e6b960 0%, #caa043 100%)',
										boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.4)',
									}}
								>
									<div className="w-full h-[1px] bg-black/20" />
									<div className="absolute w-[1px] h-full bg-black/20" />
								</div>
								{/* Contactless symbol */}
								<svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M8.5 16.5a5 5 0 0 1 0-9M12 19a9 9 0 0 0 0-14M15.5 21.5a13 13 0 0 0 0-19" />
								</svg>
							</div>

							{/* Dual Overlapping Circles (Fintech Emblem) */}
							<div className="flex items-center -space-x-2">
								<span className="w-5 h-5 rounded-full bg-[#eb001b] opacity-90 inline-block shadow-sm" />
								<span className="w-5 h-5 rounded-full bg-[#f79e1b] opacity-90 inline-block shadow-sm" />
							</div>
						</div>

						{/* Center: Title */}
						<div>
							<span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 block">
								TIER-1 PLACEMENT PASS
							</span>
							<span className="text-xs font-bold text-slate-800 tracking-tight">
								Google • Amazon • Microsoft Track
							</span>
						</div>

						{/* Bottom: ID and Verified status */}
						<div className="flex items-center justify-between pt-1 border-t border-slate-100">
							<span className="text-[9px] font-mono text-slate-400 tracking-wider">
								PH-9842-ELITE
							</span>
							<span className="text-[9px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
								VERIFIED
							</span>
						</div>
					</div>

					{/* Card 2: Middle Card (Vibrant Sunset Holographic Gradient Tech Pass) */}
					<div
						onMouseEnter={() => setHoveredCard(2)}
						onMouseLeave={() => setHoveredCard(null)}
						className="absolute w-[96%] h-[190px] rounded-[24px] p-4 flex flex-col justify-between cursor-pointer transition-all duration-500 ease-out"
						style={{
							bottom: hoveredCard === 2 ? '75px' : '44px',
							transform: hoveredCard === 2 ? 'rotate(4deg) translateY(-8px)' : 'rotate(2.2deg)',
							zIndex: 20,
							background: 'linear-gradient(135deg, #ff5e62 0%, #ff9966 45%, #8a2387 100%)',
							boxShadow: '0 20px 40px -8px rgba(235, 75, 90, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
						}}
					>
						{/* Top row */}
						<div className="flex items-center justify-between text-white">
							<div className="flex items-center gap-1.5 bg-black/25 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
								<span className="text-[10px]">🔥</span>
								<span className="text-[10px] font-black tracking-wider uppercase">
									TCS PRIME & INFOSYS SP
								</span>
							</div>
							<span className="text-[11px] font-extrabold tracking-tight text-white/90">
								TOP 0.4%
							</span>
						</div>

						{/* Center: Graphic Holographic Ribbon */}
						<div className="flex flex-col gap-0.5 text-white drop-shadow">
							<span className="text-[10px] text-white/70 font-bold uppercase tracking-wider">
								National Benchmark
							</span>
							<span className="text-sm font-extrabold tracking-tight">
								Speed Aptitude & Coding Master
							</span>
						</div>

						{/* Bottom: Score */}
						<div className="flex items-center justify-between text-white/90 pt-1 border-t border-white/20 text-[10px] font-semibold">
							<span>Candidate: Dhanush K.</span>
							<span className="font-mono bg-white/20 px-2 py-0.5 rounded-md">
								Percentile: 99.6%
							</span>
						</div>
					</div>

					{/* Card 3: Front Card (Frosted Glassmorphic Live Balance / Readiness Pocket) */}
					<div
						className="relative w-full h-[180px] rounded-[28px] p-5 flex flex-col justify-between transition-all duration-300"
						style={{
							zIndex: 30,
							background: 'linear-gradient(135deg, rgba(35, 36, 46, 0.85) 0%, rgba(20, 20, 26, 0.92) 100%)',
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
								background: 'linear-gradient(90deg, transparent 0%, rgba(147, 197, 253, 0.8) 50%, transparent 100%)',
							}}
						/>

						{/* Front Card Header */}
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
									<svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
										<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
									</svg>
								</div>
								<span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
									Total Placement Readiness
								</span>
							</div>

							<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold shadow-sm">
								<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
								<span>SHORTLIST READY</span>
							</div>
						</div>

						{/* Score Value Display */}
						<div className="my-auto py-1">
							<div className="flex items-baseline gap-2">
								<span
									className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]"
									style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
								>
									99.4%
								</span>
								<span className="text-sm font-bold text-blue-400 tracking-normal">
									1,420 Score
								</span>
							</div>
							<p className="text-[11px] text-slate-400 font-medium mt-1">
								Top percentile across Coding, Speed Quants &amp; AI Mock Rounds.
							</p>
						</div>

						{/* Bottom Micro Footer */}
						<div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/[0.08] pt-2">
							<span className="flex items-center gap-1.5">
								<span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
								<span>All-Access Verified</span>
							</span>
							<span className="text-white/80 font-mono font-semibold">
								18 Completed Drills
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
