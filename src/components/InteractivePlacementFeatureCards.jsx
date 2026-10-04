import { useEffect, useRef, useState } from 'react'

function AnimatedCounter({ end, duration = 150, triggerKey, prefix = '', suffix = '%', decimals = 0 }) {
	const [val, setVal] = useState(0)

	useEffect(() => {
		let startTimestamp = null
		let rafId

		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp
			const elapsed = timestamp - startTimestamp
			const progress = Math.min(elapsed / duration, 1)
			// Smooth ease-out exponential curve
			const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
			const current = eased * end
			setVal(decimals > 0 ? current.toFixed(decimals) : Math.round(current))

			if (progress < 1) {
				rafId = requestAnimationFrame(step)
			}
		}

		setVal(0)
		rafId = requestAnimationFrame(step)
		return () => cancelAnimationFrame(rafId)
	}, [end, duration, triggerKey, decimals])

	return <span>{prefix}{val}{suffix}</span>
}

function RebalancingVisual({ isActive }) {
	const [hoverCount, setHoverCount] = useState(0)
	const [inViewCount, setInViewCount] = useState(0)
	const containerRef = useRef(null)

	useEffect(() => {
		const el = containerRef.current
		if (!el) return
		const obs = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setInViewCount(prev => prev + 1)
			}
		}, { threshold: 0.25 })
		obs.observe(el)
		return () => obs.disconnect()
	}, [])

	const triggerKey = `${isActive ? 'active' : 'inactive'}-${hoverCount}-${inViewCount}`

	return (
		<div
			ref={containerRef}
			onMouseEnter={() => setHoverCount(prev => prev + 1)}
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
				borderRadius: 30,
				background: 'linear-gradient(180deg, #dbeafe 0%, #bfdbfe 55%, #93c5fd 100%)',
				padding: '24px 20px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				overflow: 'hidden',
				boxShadow: 'inset 0 2px 6px rgba(255, 255, 255, 0.7)',
				cursor: 'pointer',
			}}
		>
			{/* 4 Pastel / Gradient Module Blocks */}
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					gap: 12,
					width: '100%',
					maxWidth: 340,
					position: 'relative',
				}}
			>
				{/* Block 1: Peach / Coral */}
				<div
					className="float-subtle-1 hover-lift-scale"
					onMouseEnter={(e) => {
						e.stopPropagation()
						setHoverCount(prev => prev + 1)
					}}
					style={{
						borderRadius: 20,
						padding: '16px 14px',
						backgroundColor: '#ffedd5',
						border: '1.5px solid #fed7aa',
						boxShadow: '0 10px 24px rgba(249, 115, 22, 0.1)',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						height: 110,
						textAlign: 'left',
						transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
					}}
				>
					<div style={{ fontSize: 11, fontWeight: 800, color: '#9a3412' }}>Full-Stack DSA</div>
					<div>
						<div style={{ fontSize: 26, fontWeight: 900, color: '#c2410c', lineHeight: 1 }}>
							<AnimatedCounter end={38} triggerKey={triggerKey} />
						</div>
						<div style={{ fontSize: 10, color: '#9a3412', fontWeight: 600, marginTop: 4 }}>
							Arrays · Trees · DP
						</div>
					</div>
				</div>

				{/* Block 2: Electric Sapphire Blue */}
				<div
					className="float-subtle-2 hover-lift-scale"
					onMouseEnter={(e) => {
						e.stopPropagation()
						setHoverCount(prev => prev + 1)
					}}
					style={{
						borderRadius: 20,
						padding: '16px 14px',
						backgroundColor: '#dbeafe',
						border: '1.5px solid #93c5fd',
						boxShadow: '0 10px 24px rgba(37, 99, 235, 0.12)',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						height: 110,
						textAlign: 'left',
						transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
					}}
				>
					<div style={{ fontSize: 11, fontWeight: 800, color: '#1e3a8a' }}>System Design</div>
					<div>
						<div style={{ fontSize: 26, fontWeight: 900, color: '#1d4ed8', lineHeight: 1 }}>
							<AnimatedCounter end={24} triggerKey={triggerKey} />
						</div>
						<div style={{ fontSize: 10, color: '#1e3a8a', fontWeight: 600, marginTop: 4 }}>
							HLD · LLD · Scaling
						</div>
					</div>
				</div>

				{/* Block 3: Mint / Emerald */}
				<div
					className="float-subtle-3 hover-lift-scale"
					onMouseEnter={(e) => {
						e.stopPropagation()
						setHoverCount(prev => prev + 1)
					}}
					style={{
						borderRadius: 20,
						padding: '16px 14px',
						backgroundColor: '#dcfce7',
						border: '1.5px solid #86efac',
						boxShadow: '0 10px 24px rgba(22, 163, 74, 0.1)',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						height: 110,
						textAlign: 'left',
						transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
					}}
				>
					<div style={{ fontSize: 11, fontWeight: 800, color: '#14532d' }}>Core CS &amp; DBMS</div>
					<div>
						<div style={{ fontSize: 26, fontWeight: 900, color: '#15803d', lineHeight: 1 }}>
							<AnimatedCounter end={20} triggerKey={triggerKey} />
						</div>
						<div style={{ fontSize: 10, color: '#14532d', fontWeight: 600, marginTop: 4 }}>
							OS · Networks · SQL
						</div>
					</div>
				</div>

				{/* Block 4: Cyan / Ice Blue */}
				<div
					className="float-subtle-4 hover-lift-scale"
					onMouseEnter={(e) => {
						e.stopPropagation()
						setHoverCount(prev => prev + 1)
					}}
					style={{
						borderRadius: 20,
						padding: '16px 14px',
						backgroundColor: '#e0f2fe',
						border: '1.5px solid #7dd3fc',
						boxShadow: '0 10px 24px rgba(2, 132, 199, 0.1)',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						height: 110,
						textAlign: 'left',
						transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
					}}
				>
					<div style={{ fontSize: 11, fontWeight: 800, color: '#0c4a6e' }}>Behavioral &amp; HR</div>
					<div>
						<div style={{ fontSize: 26, fontWeight: 900, color: '#0284c7', lineHeight: 1 }}>
							<AnimatedCounter end={18} triggerKey={triggerKey} />
						</div>
						<div style={{ fontSize: 10, color: '#0c4a6e', fontWeight: 600, marginTop: 4 }}>
							STAR · Leadership
						</div>
					</div>
				</div>

				{/* Center Floating Pill Badge */}
				<div
					onMouseEnter={(e) => {
						e.stopPropagation()
						setHoverCount(prev => prev + 1)
					}}
					style={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						backgroundColor: '#090d16',
						color: '#ffffff',
						padding: '7px 18px',
						borderRadius: 999,
						fontSize: 11,
						fontWeight: 800,
						letterSpacing: '0.03em',
						boxShadow: '0 10px 25px rgba(0, 0, 0, 0.35)',
						display: 'flex',
						alignItems: 'center',
						gap: 6,
						whiteSpace: 'nowrap',
						zIndex: 10,
						transition: 'transform 0.2s ease',
					}}
				>
					<span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} />
					<span>
						<AnimatedCounter end={100} triggerKey={triggerKey} suffix="% Preparedness" />
					</span>
				</div>
			</div>
		</div>
	)
}

function PerformanceTrackingVisual({ isActive }) {
	const companies = [
		{
			id: 'tcs',
			label: 'TCS Prime',
			benchmark: '₹ 9,00,000',
			badge: 'Prime Offer Letter',
			rating: '9.2 / 10',
			verdict: 'Verified Clearance',
			verdictColor: '#16a34a',
		},
		{
			id: 'amazon',
			label: 'Amazon SDE-1',
			benchmark: '₹ 28,45,000',
			badge: 'Tier-1 Offer Letter',
			rating: '9.8 / 10',
			verdict: 'Recommended Hire',
			verdictColor: '#16a34a',
		},
		{
			id: 'google',
			label: 'Google L4',
			benchmark: '₹ 44,50,000',
			badge: 'Super Dream Offer',
			rating: '9.9 / 10',
			verdict: 'Elite Tier Selection',
			verdictColor: '#2563eb',
		},
	]

	const [companyIndex, setCompanyIndex] = useState(0)

	// Automatically cycle between TCS Prime -> Amazon SDE-1 -> Google L4
	useEffect(() => {
		const interval = setInterval(() => {
			setCompanyIndex((prev) => (prev + 1) % companies.length)
		}, 900)

		return () => clearInterval(interval)
	}, [companies.length])

	const current = companies[companyIndex]

	return (
		<div
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
				borderRadius: 30,
				background: 'linear-gradient(180deg, #dbeafe 0%, #bfdbfe 55%, #93c5fd 100%)',
				padding: '24px 20px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				overflow: 'hidden',
				boxShadow: 'inset 0 2px 6px rgba(255, 255, 255, 0.7)',
			}}
		>
			{/* White Base Earnings / CTC Card Matching hi.mp4 Frame 3 */}
			<div
				className="float-subtle-1"
				style={{
					width: '100%',
					maxWidth: 340,
					backgroundColor: '#ffffff',
					borderRadius: 24,
					padding: '22px 20px 18px',
					boxShadow: '0 20px 45px rgba(29, 78, 216, 0.15), 0 4px 12px rgba(0, 0, 0, 0.05)',
					textAlign: 'center',
					position: 'relative',
				}}
			>
				{/* 3 Pills Row at top */}
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 12 }}>
					{companies.map((comp, idx) => {
						const isSelected = idx === companyIndex
						return (
							<button
								key={comp.id}
								type="button"
								onClick={(e) => {
									e.stopPropagation()
									setCompanyIndex(idx)
								}}
								style={{
									fontSize: 10,
									fontWeight: isSelected ? 800 : 600,
									color: isSelected ? '#2563eb' : '#64748b',
									backgroundColor: isSelected ? '#dbeafe' : '#f1f5f9',
									border: isSelected ? '1px solid #93c5fd' : '1px solid transparent',
									padding: '3px 9px',
									borderRadius: 12,
									cursor: 'pointer',
									transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
									boxShadow: isSelected ? '0 2px 8px rgba(37, 99, 235, 0.15)' : 'none',
									transform: isSelected ? 'scale(1.05)' : 'scale(1)',
								}}
							>
								{comp.label}
							</button>
						)
					})}
				</div>

				<div style={{ fontSize: 10.5, fontWeight: 700, color: '#64748b', letterSpacing: '0.04em' }}>
					QUALIFIED CTC BENCHMARK
				</div>
				<div
					key={current.benchmark}
					style={{
						fontSize: 34,
						fontWeight: 900,
						color: '#0f172a',
						margin: '4px 0 12px',
						letterSpacing: '-0.02em',
						fontFamily: '"Plus Jakarta Sans", sans-serif',
						transition: 'all 0.3s ease',
					}}
				>
					{current.benchmark}
				</div>

				{/* Dark Pill Action Button */}
				<div style={{ display: 'inline-flex', marginBottom: 14 }}>
					<span
						key={current.badge}
						style={{
							backgroundColor: '#090d16',
							color: '#ffffff',
							padding: '6px 18px',
							borderRadius: 999,
							fontSize: 12,
							fontWeight: 800,
							boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
							transition: 'all 0.3s ease',
						}}
					>
						{current.badge}
					</span>
				</div>

				{/* Bottom Audit Row */}
				<div
					style={{
						borderTop: '1px solid #f1f5f9',
						paddingTop: 10,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						textAlign: 'left',
					}}
				>
					<div>
						<div style={{ fontSize: 10.5, fontWeight: 700, color: '#0f172a' }}>Mock Interview Rating</div>
						<div style={{ fontSize: 9.5, color: '#64748b' }}>Mentor: Santhosh Kumar Ananta</div>
					</div>
					<div style={{ textAlign: 'right' }}>
						<div
							key={current.rating}
							style={{ fontSize: 13, fontWeight: 900, color: '#2563eb', transition: 'all 0.3s ease' }}
						>
							{current.rating}
						</div>
						<div
							key={current.verdict}
							style={{ fontSize: 9, color: current.verdictColor, fontWeight: 700, transition: 'all 0.3s ease' }}
						>
							{current.verdict}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default function InteractivePlacementFeatureCards() {
	const [activeIndex, setActiveIndex] = useState(0)
	const [isPaused, setIsPaused] = useState(false)
	const timerRef = useRef(null)


	const cardsData = [
		{
			id: 0,
			num: '1',
			title: 'AI-Driven Forecasting',
			desc: 'Predict technical round clearance, benchmark coding velocity, and pinpoint critical weak topics before campus drives.',
			icon: (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
				</svg>
			),
			// Visual Window (Top Half)
			renderVisual: (isActive) => (
				<div
					style={{
						position: 'relative',
						width: '100%',
						height: '100%',
						borderRadius: 30,
						background: 'linear-gradient(180deg, #dbeafe 0%, #bfdbfe 55%, #93c5fd 100%)',
						padding: '24px 20px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						overflow: 'hidden',
						boxShadow: 'inset 0 2px 6px rgba(255, 255, 255, 0.7)',
					}}
				>
					{/* White Base Chart Card */}
					<div
						className="float-subtle-1"
						style={{
							width: '100%',
							maxWidth: 340,
							backgroundColor: '#ffffff',
							borderRadius: 24,
							padding: '20px 22px 18px',
							boxShadow: '0 20px 45px rgba(29, 78, 216, 0.15), 0 4px 12px rgba(0, 0, 0, 0.05)',
							textAlign: 'left',
							position: 'relative',
						}}
					>
						{/* Chart Header Pill */}
						<div
							style={{
								display: 'inline-flex',
								alignItems: 'center',
								gap: 6,
								backgroundColor: '#f1f5f9',
								padding: '4px 10px',
								borderRadius: 999,
								fontSize: 10,
								fontWeight: 700,
								color: '#475569',
								marginBottom: 14,
							}}
						>
							<span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#38bdf8', display: 'inline-block' }} />
							OA Prediction Velocity
						</div>

						{/* Dynamic Wave Chart SVG */}
						<div style={{ position: 'relative', height: 105, width: '100%', marginBottom: 12 }}>
							<svg
								viewBox="0 0 300 110"
								preserveAspectRatio="none"
								style={{ width: '100%', height: '100%', overflow: 'visible' }}
							>
								<defs>
									<linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
										<stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
										<stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
									</linearGradient>
								</defs>

								{/* Area Fill */}
								<path
									d="M 0,85 Q 40,92 75,65 T 150,45 T 225,28 T 300,8 L 300,110 L 0,110 Z"
									fill="url(#areaGrad)"
								/>

								{/* Vibrant Neon Blue Gradient Curve */}
								<path
									d="M 0,85 Q 40,92 75,65 T 150,45 T 225,28 T 300,8"
									fill="none"
									stroke="#2563eb"
									strokeWidth="3.5"
									strokeLinecap="round"
								/>

								{/* Animated Glow Dot at Peak */}
								<circle cx="300" cy="8" r="6" fill="#0284c7" />
								<circle cx="300" cy="8" r="10" fill="#38bdf8" opacity="0.4" className="live-glow-dot" />
							</svg>

							{/* Floating Pill on top of curve */}
							<div
								className="float-subtle-2"
								style={{
									position: 'absolute',
									top: 4,
									right: 0,
									transform: 'translateY(-50%)',
									backgroundColor: '#090d16',
									color: '#ffffff',
									padding: '3px 9px',
									borderRadius: 999,
									fontSize: 10,
									fontWeight: 800,
									letterSpacing: '0.02em',
									boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
								}}
							>
								98.4% Accuracy
							</div>
						</div>

						{/* 5 Vertical Indicator Live Pulse Bars */}
						<div
							style={{
								display: 'flex',
								alignItems: 'flex-end',
								justifyContent: 'space-between',
								gap: 6,
								height: 38,
								padding: '0 4px',
							}}
						>
							{[
								{ h: '38%', bg: '#e2e8f0', delay: '0.1s' },
								{ h: '55%', bg: '#cbd5e1', delay: '0.3s' },
								{ h: '72%', bg: '#93c5fd', delay: '0.2s' },
								{ h: '86%', bg: '#60a5fa', delay: '0.4s' },
								{ h: '100%', bg: '#2563eb', delay: '0s' },
							].map((bar, i) => (
								<div
									key={i}
									style={{
										flex: 1,
										height: bar.h,
										backgroundColor: bar.bg,
										borderRadius: 4,
										animation: isActive ? `barLivePulse 2.4s ease-in-out infinite alternate ${bar.delay}` : 'none',
										transformOrigin: 'bottom',
									}}
								/>
							))}
						</div>
					</div>

					{/* Center Floating +64 Pill Badge Matching Screenshot Frame 1 */}
					<div
						className="float-subtle-3 hover-lift-scale"
						style={{
							position: 'absolute',
							bottom: 22,
							left: 20,
							right: 20,
							backgroundColor: '#090d16',
							borderRadius: 20,
							padding: '14px 16px',
							boxShadow: '0 16px 36px rgba(0, 0, 0, 0.45)',
							border: '1px solid rgba(255, 255, 255, 0.12)',
							zIndex: 10,
						}}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: 6,
								fontSize: 11,
								fontWeight: 700,
								color: '#38bdf8',
								marginBottom: 4,
							}}
						>
							<span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#38bdf8' }} />
							Placement Predictor
						</div>
						<div
							style={{
								fontSize: 26,
								fontWeight: 900,
								color: '#ffffff',
								letterSpacing: '-0.02em',
								lineHeight: 1.1,
							}}
						>
							<AnimatedCounter end={64} prefix="+" triggerKey={isActive ? 'active' : 'inactive'} />
						</div>
						<div
							style={{
								fontSize: 9.5,
								fontWeight: 500,
								color: 'rgba(255, 255, 255, 0.85)',
								marginTop: 4,
								lineHeight: 1.35,
							}}
						>
							Your OA clearance velocity is projected to reach Tier-1 product cutoff.
						</div>
					</div>
				</div>
			),
		},
		{
			id: 1,
			num: '2',
			title: 'Automated Rebalancing',
			desc: 'Keep your preparation balanced automatically with structured milestones across algorithms, system architecture, and behavioral rounds.',
			icon: (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
					<rect x="3" y="3" width="7" height="7" rx="2" />
					<rect x="14" y="3" width="7" height="7" rx="2" />
					<rect x="14" y="14" width="7" height="7" rx="2" />
					<rect x="3" y="14" width="7" height="7" rx="2" />
				</svg>
			),
			// Visual Window (Top Half)
			renderVisual: (isActive) => <RebalancingVisual isActive={isActive} />,
		},
		{
			id: 2,
			num: '3',
			title: 'Performance Tracking',
			desc: 'Track real-time offer qualifications, monitor mock interview performance, and view verified CTC tier certification.',
			icon: (
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
					<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
					<path d="M4 22h16" />
					<path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34" />
					<path d="M14 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34" />
					<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
				</svg>
			),
			// Visual Window (Top Half)
			renderVisual: (isActive) => <PerformanceTrackingVisual isActive={isActive} />,
		},
	]

	const SLIDE_DURATION = 1400 // Rapid 1.4 seconds duration for each slide

	// Continuous auto-shift timer for every card
	useEffect(() => {
		const timer = setTimeout(() => {
			setActiveIndex((prev) => (prev + 1) % cardsData.length)
		}, SLIDE_DURATION)

		return () => clearTimeout(timer)
	}, [activeIndex, cardsData.length])

	const handleSelectCard = (index) => {
		setActiveIndex(index)
	}

	// 3D Carousel Transform Calculations
	const getCardTransform = (index) => {
		const diff = (index - activeIndex + 3) % 3

		if (diff === 0) {
			// Center Active Card
			return {
				transform: 'translateX(0px) scale(1) rotateY(0deg) translateZ(0px)',
				opacity: 1,
				zIndex: 20,
				cursor: 'default',
				boxShadow:
					'0 28px 70px -10px rgba(0, 0, 0, 0.85), 0 0 50px -10px rgba(37, 99, 235, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
				borderColor: 'rgba(56, 189, 248, 0.45)',
			}
		} else if (diff === 1) {
			// Right Card
			return {
				transform: 'translateX(340px) scale(0.88) rotateY(-7deg) translateZ(-60px)',
				opacity: 0.42,
				zIndex: 10,
				cursor: 'pointer',
				boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
				borderColor: 'rgba(255, 255, 255, 0.08)',
			}
		} else {
			// Left Card (diff === 2)
			return {
				transform: 'translateX(-340px) scale(0.88) rotateY(7deg) translateZ(-60px)',
				opacity: 0.42,
				zIndex: 10,
				cursor: 'pointer',
				boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
				borderColor: 'rgba(255, 255, 255, 0.08)',
			}
		}
	}

	return (
		<div
			className="framer-345ywe"
			data-framer-name="Feature 3"
			style={{
				position: 'relative',
				width: '100%',
				padding: '75px 20px 110px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				overflow: 'hidden',
				fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, sans-serif',
			}}
		>
			{/* Embedded Keyframe Animations for Smooth Floating & Live Waves */}
			<style>{`
				@keyframes barLivePulse {
					0%, 100% {
						transform: scaleY(1);
					}
					50% {
						transform: scaleY(0.84);
					}
				}
				.bar-live-pulse {
					animation: barLivePulse 2.8s ease-in-out infinite;
					transform-origin: bottom;
				}
				@keyframes floatHeroCard {
					0%, 100% {
						transform: translateY(0px) rotate(0deg);
					}
					50% {
						transform: translateY(-8px) rotate(-1deg);
					}
				}
				.float-hero-card {
					animation: floatHeroCard 4.2s ease-in-out infinite;
				}
				@keyframes floatSlowChip {
					0%, 100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-4px);
					}
				}
				.float-slow-chip {
					animation: floatSlowChip 3.6s ease-in-out infinite;
				}
				@keyframes floatSubtle1 {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(-4px); }
				}
				.float-subtle-1 {
					animation: floatSubtle1 4s ease-in-out infinite;
				}
				@keyframes floatSubtle2 {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(4px); }
				}
				.float-subtle-2 {
					animation: floatSubtle2 4.5s ease-in-out infinite 0.3s;
				}
				@keyframes floatSubtle3 {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(-3px); }
				}
				.float-subtle-3 {
					animation: floatSubtle3 4.2s ease-in-out infinite 0.6s;
				}
				@keyframes floatSubtle4 {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(3px); }
				}
				.float-subtle-4 {
					animation: floatSubtle4 4.8s ease-in-out infinite 0.9s;
				}
			`}</style>

			{/* Soft Bottom Ambient Electric Blue Glow */}
			<div
				style={{
					position: 'absolute',
					bottom: 0,
					left: '50%',
					transform: 'translateX(-50%)',
					width: '85%',
					maxWidth: 960,
					height: 400,
					background:
						'radial-gradient(ellipse at bottom, rgba(37, 99, 235, 0.24) 0%, rgba(56, 189, 248, 0.08) 45%, transparent 75%)',
					filter: 'blur(65px)',
					pointerEvents: 'none',
					zIndex: 0,
				}}
			/>

			{/* Section Header */}
			<div
				style={{
					textAlign: 'center',
					maxWidth: 780,
					marginBottom: 40,
					position: 'relative',
					zIndex: 5,
				}}
			>
				{/* Top Tag Pill in Pure Sapphire Blue */}
				<div
					style={{
						display: 'inline-flex',
						alignItems: 'center',
						gap: 7,
						backgroundColor: 'rgba(37, 99, 235, 0.12)',
						border: '1px solid rgba(59, 130, 246, 0.32)',
						borderRadius: 20,
						padding: '5px 16px',
						marginBottom: 16,
					}}
				>
					<span
						style={{
							fontSize: 11.5,
							fontWeight: 700,
							color: '#60a5fa',
							textTransform: 'uppercase',
							letterSpacing: '0.06em',
						}}
					>
						Placement Training Matrix
					</span>
				</div>

				<h2
					style={{
						fontFamily: '"Roboto Condensed", sans-serif',
						fontSize: 'clamp(34px, 4.8vw, 58px)',
						fontWeight: 900,
						textTransform: 'uppercase',
						letterSpacing: '-0.04em',
						lineHeight: 1.0,
						color: '#ffffff',
						margin: '0 0 14px',
					}}
				>
					Interview Ready with Mentors.
				</h2>

				<p
					style={{
						fontSize: 'clamp(14px, 1.8vw, 16.5px)',
						lineHeight: 1.6,
						color: 'rgba(255, 255, 255, 0.7)',
						margin: '0 auto',
						maxWidth: 620,
						fontWeight: 400,
					}}
				>
					From core data structures to executive 1-on-1 mock interviews, get personalized training modules calibrated to clear Tier-1 placement drives.
				</p>
			</div>

			{/* 3D Cards Carousel Stage Matching hi.mp4 */}
			<div
				onMouseEnter={() => setIsPaused(true)}
				onMouseLeave={() => setIsPaused(false)}
				style={{
					position: 'relative',
					width: '100%',
					maxWidth: 1040,
					height: 600,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					perspective: 1200,
					zIndex: 5,
				}}
			>
				{cardsData.map((card, idx) => {
					const cardStyle = getCardTransform(idx)
					return (
						<div
							key={card.id}
							onClick={() => handleSelectCard(idx)}
							style={{
								position: 'absolute',
								width: '92%',
								maxWidth: 440,
								height: 560,
								borderRadius: 38,
								backgroundColor: '#0e121a',
								border: '1px solid',
								padding: '16px 16px 24px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
								willChange: 'transform, opacity',
								userSelect: 'none',
								...cardStyle,
							}}
						>
							{/* 1. TOP HALF: Tinted Visual Window */}
							<div style={{ width: '100%', height: 350, flexShrink: 0 }}>
								{card.renderVisual(idx === activeIndex)}
							</div>

							{/* 2. BOTTOM HALF: Icon, Number Badge, Title, Description Matching Screenshot */}
							<div style={{ padding: '16px 14px 6px', textAlign: 'left' }}>
								{/* Row with Squircle Icon on Left, Number Badge on Right */}
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
									{/* Squircle Icon Container */}
									<div
										style={{
											width: 46,
											height: 46,
											borderRadius: 15,
											background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #3b82f6 100%)',
											boxShadow: '0 4px 16px rgba(29, 78, 216, 0.45)',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											flexShrink: 0,
										}}
									>
										{card.icon}
									</div>

									{/* White Number Pill Badge Matching Screenshot */}
									<div
										style={{
											width: 28,
											height: 28,
											borderRadius: '50%',
											backgroundColor: '#ffffff',
											color: '#0f172a',
											fontSize: 13,
											fontWeight: 900,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
											fontFamily: '"Plus Jakarta Sans", sans-serif',
										}}
									>
										{card.num}
									</div>
								</div>

								{/* Title */}
								<h3
									style={{
										fontFamily: '"Roboto Condensed", sans-serif',
										fontSize: 22,
										fontWeight: 900,
										textTransform: 'uppercase',
										letterSpacing: '-0.025em',
										color: '#ffffff',
										margin: '0 0 6px 0',
										lineHeight: 1.15,
									}}
								>
									{card.title}
								</h3>

								{/* Description */}
								<p
									style={{
										fontSize: 13,
										color: '#94a3b8',
										lineHeight: 1.5,
										margin: 0,
										fontWeight: 400,
									}}
								>
									{card.desc}
								</p>
							</div>
						</div>
					)
				})}
			</div>

			{/* Pagination Dots with Auto-Shift Indicator */}
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: 8,
					marginTop: 24,
					position: 'relative',
					zIndex: 5,
				}}
			>
				{cardsData.map((_, idx) => {
					const isSelected = activeIndex === idx
					return (
						<button
							key={idx}
							type="button"
							onClick={() => handleSelectCard(idx)}
							style={{
								width: isSelected ? 24 : 8,
								height: 7,
								borderRadius: 4,
								backgroundColor: isSelected ? '#38bdf8' : 'rgba(255, 255, 255, 0.18)',
								border: 'none',
								cursor: 'pointer',
								transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
								boxShadow: isSelected ? '0 0 10px rgba(56, 189, 248, 0.5)' : 'none',
								padding: 0,
							}}
							aria-label={`Go to slide ${idx + 1}`}
						/>
					)
				})}
			</div>
		</div>
	)
}
