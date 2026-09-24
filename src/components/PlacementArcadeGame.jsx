import { useCallback, useEffect, useRef, useState } from 'react'

// Question bank spanning Quants, Logic & DSA Bugs with authenticated company tags
const QUESTION_BANK = [
	{
		category: 'SPEED QUANT',
		company: 'TCS PRIME',
		q: 'A train 180m long crosses a pole in 9 seconds. What is its speed in km/h?',
		options: ['64 km/h', '72 km/h', '80 km/h', '90 km/h'],
		correct: 1, // 72 km/h (180/9 = 20 m/s * 18/5 = 72)
		explanation: 'Speed = 20 m/s × (18/5) = 72 km/h',
	},
	{
		category: 'DSA LOGIC',
		company: 'AMAZON OA',
		q: 'What is the time complexity to search an element in a Balanced BST of N nodes?',
		options: ['O(1)', 'O(log N)', 'O(N)', 'O(N log N)'],
		correct: 1,
		explanation: 'Balanced BST height is bounded by log₂(N).',
	},
	{
		category: 'NUMBER SERIES',
		company: 'INFOSYS SPECIALIST',
		q: 'Find the next term in the sequence: 2, 6, 12, 20, 30, ?',
		options: ['38', '40', '42', '44'],
		correct: 2, // 1*2, 2*3, 3*4, 4*5, 5*6, 6*7 = 42
		explanation: 'Pattern: n(n+1) -> 6 × 7 = 42',
	},
	{
		category: 'SPEED MATH',
		company: 'ACCENTURE COGNITIVE',
		q: 'What is 15% of 640 plus 25% of 240?',
		options: ['146', '156', '164', '172'],
		correct: 1, // 96 + 60 = 156
		explanation: '15% of 640 = 96, 25% of 240 = 60 -> 96 + 60 = 156',
	},
	{
		category: 'BUG SPOTTER',
		company: 'CAPGEMINI TECH',
		q: 'In C/C++, what occurs with: int *p = NULL; *p = 10; ?',
		options: ['Memory Leak', 'Segmentation Fault', 'Buffer Overflow', 'Compilation Error'],
		correct: 1,
		explanation: 'Dereferencing a NULL pointer causes a segmentation fault.',
	},
	{
		category: 'TIME & WORK',
		company: 'WIPRO TURBO',
		q: 'A can do a job in 12 days, B in 24 days. How many days together?',
		options: ['6 days', '8 days', '10 days', '16 days'],
		correct: 1, // (12*24)/(36) = 8
		explanation: '(12 × 24) / (12 + 24) = 288 / 36 = 8 days',
	},
	{
		category: 'LOGICAL DEDUCTION',
		company: 'COGNIZANT GENC NEXT',
		q: 'If CAT = 24 and DOG = 26, what is ELEPHANT in the standard alphabet sum?',
		options: ['81', '84', '87', '92'],
		correct: 0, // E=5+L=12+E=5+P=16+H=8+A=1+N=14+T=20 = 81
		explanation: 'Sum of letter positions: 5+12+5+16+8+1+14+20 = 81',
	},
	{
		category: 'DSA BIT MANIPULATION',
		company: 'GOOGLE FOOBAR',
		q: 'What does the bitwise operation (n & (n - 1)) == 0 check?',
		options: ['n is Odd', 'n is Power of 2', 'n is Prime', 'n is Negative'],
		correct: 1,
		explanation: 'n & (n-1) removes the lowest set bit. If 0, n is a power of 2.',
	},
	{
		category: 'PROBABILITY',
		company: 'TCS DIGITAL',
		q: 'Two unbiased dice are rolled. What is the probability of getting sum = 7?',
		options: ['1/12', '1/6', '5/36', '7/36'],
		correct: 1, // 6 outcomes / 36 = 1/6
		explanation: '6 favorable outcomes out of 36 -> 6/36 = 1/6',
	},
	{
		category: 'REASONING MATRIX',
		company: 'CAPGEMINI GAME APTITUDE',
		q: 'If SOUTH-EAST becomes NORTH, and NORTH-EAST becomes WEST, what does WEST become?',
		options: ['NORTH-EAST', 'SOUTH-EAST', 'SOUTH-WEST', 'NORTH-WEST'],
		correct: 1,
		explanation: 'Compass is rotated 135° counter-clockwise. West becomes South-East.',
	},
	{
		category: 'SPEED QUANT',
		company: 'INFOSYS OA',
		q: 'Square root of 1764 is equal to:',
		options: ['38', '42', '44', '48'],
		correct: 1, // 42^2 = 1764
		explanation: '40² = 1600, 42² = 1764',
	},
	{
		category: 'CODE LOGIC',
		company: 'ORACLE OA',
		q: 'What is the space complexity of an in-order traversal of a Tree using recursion?',
		options: ['O(1)', 'O(Height)', 'O(N²)', 'O(log Height)'],
		correct: 1,
		explanation: 'Call stack requires memory proportional to the tree height O(H).',
	},
]

// CTC tiers based on score with rich visual styling tokens
const TIERS = [
	{
		min: 0,
		title: 'Aspirant',
		ctc: 'Placement Ready',
		tag: 'Foundation',
		badge: 'Tier-3 Cleared',
		color: '#94a3b8',
		glow: 'rgba(148, 163, 184, 0.25)',
		companies: 'Mass Recruiters',
	},
	{
		min: 600,
		title: 'Ninja Dev',
		ctc: '₹4.5 - 6.0 LPA',
		tag: 'TCS / Wipro',
		badge: 'Standard OA Cleared',
		color: '#60a5fa',
		glow: 'rgba(96, 165, 250, 0.3)',
		companies: 'TCS · Infosys',
	},
	{
		min: 1400,
		title: 'Digital Specialist',
		ctc: '₹9.0 - 12.0 LPA',
		tag: 'Accenture Prime',
		badge: 'High-Package Offer',
		color: '#38bdf8',
		glow: 'rgba(56, 189, 248, 0.35)',
		companies: 'Cognizant · Capgemini',
	},
	{
		min: 2400,
		title: 'Prime SDE-1',
		ctc: '₹18.0 - 22.0 LPA',
		tag: 'Product Tier-1',
		badge: 'Tier-1 Product Offer',
		color: '#34d399',
		glow: 'rgba(52, 211, 153, 0.4)',
		companies: 'Amazon · Oracle',
	},
	{
		min: 3500,
		title: 'Super-Dream FAANG',
		ctc: '₹28.0+ LPA CTC',
		tag: 'National Ranker',
		badge: 'National Ranker 🏆',
		color: '#fbbf24',
		glow: 'rgba(251, 191, 36, 0.45)',
		companies: 'Google · Microsoft 👑',
	},
]

export default function PlacementArcadeGame() {
	const [gameState, setGameState] = useState('IDLE') // 'IDLE', 'PLAYING', 'GAMEOVER'
	const [currentIdx, setCurrentIdx] = useState(0)
	const [score, setScore] = useState(0)
	const [streak, setStreak] = useState(0)
	const [maxStreak, setMaxStreak] = useState(0)
	const [timeLeft, setTimeLeft] = useState(30)
	const [highScore, setHighScore] = useState(0)
	const [selectedOption, setSelectedOption] = useState(null)
	const [feedback, setFeedback] = useState(null) // { correct: bool, text: string }
	const [soundEnabled, setSoundEnabled] = useState(true)
	const [questions, setQuestions] = useState(QUESTION_BANK)

	const timerRef = useRef(null)
	const audioCtxRef = useRef(null)
	const canvasRef = useRef(null)

	// Load high score from localStorage
	useEffect(() => {
		try {
			const saved = localStorage.getItem('phonectic_arcade_high_score')
			if (saved) setHighScore(Number.parseInt(saved, 10))
		} catch {
			// ignore storage errors
		}
	}, [])

	// Web Audio Synth for crisp arcade sound effects
	const playSound = useCallback(
		(type) => {
			if (!soundEnabled) return
			try {
				const AudioContext = window.AudioContext || window.webkitAudioContext
				if (!AudioContext) return
				if (!audioCtxRef.current) {
					audioCtxRef.current = new AudioContext()
				}
				const ctx = audioCtxRef.current
				if (ctx.state === 'suspended') ctx.resume()

				const now = ctx.currentTime

				if (type === 'correct') {
					const osc = ctx.createOscillator()
					const gain = ctx.createGain()
					osc.type = 'sine'
					const baseFreq = 523.25 + Math.min(streak * 40, 400)
					osc.frequency.setValueAtTime(baseFreq, now)
					osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, now + 0.15)
					gain.gain.setValueAtTime(0.15, now)
					gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25)
					osc.connect(gain)
					gain.connect(ctx.destination)
					osc.start(now)
					osc.stop(now + 0.25)
				} else if (type === 'wrong') {
					const osc = ctx.createOscillator()
					const gain = ctx.createGain()
					osc.type = 'sawtooth'
					osc.frequency.setValueAtTime(160, now)
					osc.frequency.exponentialRampToValueAtTime(80, now + 0.2)
					gain.gain.setValueAtTime(0.18, now)
					gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22)
					osc.connect(gain)
					gain.connect(ctx.destination)
					osc.start(now)
					osc.stop(now + 0.22)
				} else if (type === 'start') {
					const osc = ctx.createOscillator()
					const gain = ctx.createGain()
					osc.type = 'triangle'
					osc.frequency.setValueAtTime(220, now)
					osc.frequency.exponentialRampToValueAtTime(880, now + 0.3)
					gain.gain.setValueAtTime(0.2, now)
					gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35)
					osc.connect(gain)
					gain.connect(ctx.destination)
					osc.start(now)
					osc.stop(now + 0.35)
				} else if (type === 'gameover') {
					const freqs = [392, 523.25, 659.25, 783.99]
					freqs.forEach((f, i) => {
						const osc = ctx.createOscillator()
						const gain = ctx.createGain()
						osc.type = 'sine'
						osc.frequency.setValueAtTime(f, now + i * 0.08)
						gain.gain.setValueAtTime(0.12, now + i * 0.08)
						gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.4)
						osc.connect(gain)
						gain.connect(ctx.destination)
						osc.start(now + i * 0.08)
						osc.stop(now + i * 0.08 + 0.4)
					})
				}
			} catch {
				// Audio not permitted without user gesture
			}
		},
		[soundEnabled, streak],
	)

	// Timer countdown
	useEffect(() => {
		if (gameState === 'PLAYING') {
			timerRef.current = setInterval(() => {
				setTimeLeft((prev) => {
					if (prev <= 1) {
						clearInterval(timerRef.current)
						endGame()
						return 0
					}
					return prev - 1
				})
			}, 1000)
		}
		return () => clearInterval(timerRef.current)
	}, [gameState])

	const startGame = () => {
		const shuffled = [...QUESTION_BANK].sort(() => Math.random() - 0.5)
		setQuestions(shuffled)
		setCurrentIdx(0)
		setScore(0)
		setStreak(0)
		setMaxStreak(0)
		setTimeLeft(30)
		setSelectedOption(null)
		setFeedback(null)
		setGameState('PLAYING')
		playSound('start')
	}

	const endGame = () => {
		setGameState('GAMEOVER')
		playSound('gameover')
		setScore((finalScore) => {
			setHighScore((prevHigh) => {
				const best = Math.max(prevHigh, finalScore)
				try {
					localStorage.setItem('phonectic_arcade_high_score', best.toString())
				} catch {
					// ignore
				}
				return best
			})
			return finalScore
		})
	}

	const handleAnswer = (optionIdx) => {
		if (selectedOption !== null || gameState !== 'PLAYING') return
		setSelectedOption(optionIdx)

		const current = questions[currentIdx]
		const isCorrect = optionIdx === current.correct

		if (isCorrect) {
			const newStreak = streak + 1
			setStreak(newStreak)
			setMaxStreak((prev) => Math.max(prev, newStreak))

			// Multiplier logic: 1x, 2x (>=2), 3x (>=4), 5x (>=6)
			const multiplier = newStreak >= 6 ? 5 : newStreak >= 4 ? 3 : newStreak >= 2 ? 2 : 1
			const points = 100 * multiplier
			setScore((s) => s + points)

			// Time bonus: +2 seconds for correct answers
			setTimeLeft((t) => Math.min(t + 2, 45))

			setFeedback({
				correct: true,
				text: `+${points} PTS! ${multiplier > 1 ? `(${multiplier}x COMBO!)` : ''} +2s`,
			})
			playSound('correct')
		} else {
			setStreak(0)
			setFeedback({
				correct: false,
				text: 'MISSED! STREAK RESET',
			})
			playSound('wrong')
		}

		// Proceed to next question after tactile delay
		setTimeout(() => {
			setSelectedOption(null)
			setFeedback(null)
			setCurrentIdx((prev) => (prev + 1) % questions.length)
		}, 550)
	}

	// Keyboard shortcut listener
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (gameState !== 'PLAYING') return
			const key = e.key.toUpperCase()
			let idx = -1
			if (key === '1' || key === 'A') idx = 0
			if (key === '2' || key === 'B') idx = 1
			if (key === '3' || key === 'C') idx = 2
			if (key === '4' || key === 'D') idx = 3

			if (idx !== -1) {
				e.preventDefault()
				handleAnswer(idx)
			}
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [gameState, currentIdx, selectedOption])

	// Confetti particle celebration effect on game over
	useEffect(() => {
		if (gameState === 'GAMEOVER' && canvasRef.current) {
			const canvas = canvasRef.current
			const ctx = canvas.getContext('2d')
			let animationFrame
			canvas.width = canvas.parentElement.clientWidth
			canvas.height = canvas.parentElement.clientHeight

			const particles = Array.from({ length: 80 }, () => ({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height * 0.5,
				vx: (Math.random() - 0.5) * 6,
				vy: Math.random() * 4 + 2,
				color: ['#38bdf8', '#2563eb', '#34d399', '#f43f5e', '#fbbf24', '#a855f7'][Math.floor(Math.random() * 6)],
				size: Math.random() * 6 + 4,
				rot: Math.random() * 360,
			}))

			const render = () => {
				ctx.clearRect(0, 0, canvas.width, canvas.height)
				particles.forEach((p) => {
					p.x += p.vx
					p.y += p.vy
					p.rot += 4
					ctx.save()
					ctx.translate(p.x, p.y)
					ctx.rotate((p.rot * Math.PI) / 180)
					ctx.fillStyle = p.color
					ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
					ctx.restore()

					if (p.y > canvas.height) {
						p.y = -10
						p.x = Math.random() * canvas.width
					}
				})
				animationFrame = requestAnimationFrame(render)
			}
			render()

			return () => cancelAnimationFrame(animationFrame)
		}
	}, [gameState])

	const unlockedTier =
		TIERS.slice()
			.reverse()
			.find((t) => score >= t.min) || TIERS[0]
	const currentQ = questions[currentIdx] || questions[0]
	const comboMultiplier = streak >= 6 ? 5 : streak >= 4 ? 3 : streak >= 2 ? 2 : 1

	return (
		<div
			className="placement-arcade-wrapper"
			style={{
				width: '100%',
				maxWidth: 1140,
				margin: '0 auto',
				position: 'relative',
				borderRadius: 36,
				background:
					'radial-gradient(120% 120% at 50% -10%, rgba(37, 99, 235, 0.28) 0%, rgba(13, 20, 38, 0.98) 45%, rgba(7, 10, 20, 0.99) 100%)',
				border: '1px solid rgba(255, 255, 255, 0.12)',
				boxShadow:
					'0 0 0 1px rgba(56, 189, 248, 0.22), 0 35px 80px -20px rgba(0, 0, 0, 0.85), 0 0 60px -15px rgba(37, 99, 235, 0.35)',
				overflow: 'hidden',
				color: '#ffffff',
				fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
				backdropFilter: 'blur(20px)',
			}}
		>
			{/* Ambient Glowing Cyber Grid & Light Beams */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					height: '100%',
					backgroundImage:
						'radial-gradient(rgba(59, 130, 246, 0.12) 1px, transparent 1px), radial-gradient(rgba(14, 165, 233, 0.08) 1px, transparent 1px)',
					backgroundSize: '28px 28px, 56px 56px',
					backgroundPosition: '0 0, 14px 14px',
					pointerEvents: 'none',
					opacity: 0.65,
				}}
			/>
			<div
				style={{
					position: 'absolute',
					top: -120,
					left: '50%',
					transform: 'translateX(-50%)',
					width: 500,
					height: 240,
					background: 'radial-gradient(ellipse, rgba(56, 189, 248, 0.35) 0%, rgba(37, 99, 235, 0.15) 50%, transparent 80%)',
					filter: 'blur(35px)',
					pointerEvents: 'none',
				}}
			/>

			{/* Top Arcade Marquee Bar / Telemetry Header */}
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					padding: '16px 28px',
					borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
					backgroundColor: 'rgba(10, 15, 29, 0.82)',
					backdropFilter: 'blur(16px)',
					position: 'relative',
					zIndex: 2,
				}}
			>
				{/* Left: Brand Lockup & Status */}
				<div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
					<div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<div
							style={{
								width: 10,
								height: 10,
								borderRadius: '50%',
								backgroundColor: gameState === 'PLAYING' ? '#10b981' : '#38bdf8',
								boxShadow: gameState === 'PLAYING' ? '0 0 14px #10b981' : '0 0 12px #38bdf8',
							}}
						/>
						<div
							style={{
								position: 'absolute',
								width: 20,
								height: 20,
								borderRadius: '50%',
								border: `1px solid ${gameState === 'PLAYING' ? '#10b981' : '#38bdf8'}`,
								opacity: 0.5,
								animation: 'pulse 2s infinite ease-out',
							}}
						/>
					</div>

					<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
						<span
							style={{
								fontSize: 13,
								fontWeight: 800,
								letterSpacing: '0.08em',
								background: 'linear-gradient(90deg, #ffffff 0%, #93c5fd 100%)',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}
						>
							PHONECTIC ARENA
						</span>
						<span
							style={{
								fontSize: 10,
								fontWeight: 700,
								color: '#38bdf8',
								backgroundColor: 'rgba(56, 189, 248, 0.12)',
								border: '1px solid rgba(56, 189, 248, 0.25)',
								padding: '2px 8px',
								borderRadius: 10,
								letterSpacing: '0.04em',
							}}
						>
							v2.4 LIVE
						</span>
					</div>
				</div>

				{/* Center: Live Benchmark Telemetry (Hidden on narrow screens) */}
				<div
					className="hidden-on-mobile"
					style={{
						fontSize: 11,
						fontWeight: 700,
						color: '#64748b',
						letterSpacing: '0.06em',
						display: 'flex',
						alignItems: 'center',
						gap: 12,
					}}
				>
					<span>
						DIFFICULTY: <strong style={{ color: '#38bdf8' }}>ADAPTIVE OA</strong>
					</span>
					<span>•</span>
					<span>
						ACTIVE CANDIDATES: <strong style={{ color: '#10b981' }}>4,820+</strong>
					</span>
				</div>

				{/* Right: High Score & Sound Toggle */}
				<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
					<div
						style={{
							fontSize: 12,
							fontWeight: 800,
							color: '#fbbf24',
							background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(217, 119, 6, 0.08) 100%)',
							border: '1px solid rgba(245, 158, 11, 0.35)',
							padding: '5px 14px',
							borderRadius: 20,
							letterSpacing: '0.02em',
							display: 'flex',
							alignItems: 'center',
							gap: 6,
							boxShadow: '0 2px 10px rgba(245, 158, 11, 0.15)',
						}}
					>
						<span>★</span> BEST: {highScore} PTS
					</div>

					<button
						type="button"
						onClick={() => setSoundEnabled(!soundEnabled)}
						style={{
							background: 'rgba(255, 255, 255, 0.06)',
							border: '1px solid rgba(255, 255, 255, 0.12)',
							color: soundEnabled ? '#e2e8f0' : '#64748b',
							borderRadius: 18,
							padding: '6px 12px',
							fontSize: 11.5,
							fontWeight: 700,
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							gap: 5,
							transition: 'all 0.2s ease',
						}}
						title={soundEnabled ? 'Mute Sound' : 'Enable Sound'}
					>
						{soundEnabled ? '🔊 SFX' : '🔇 MUTED'}
					</button>
				</div>
			</div>

			{/* Main Game Screen Stage */}
			<div style={{ padding: '40px 32px', minHeight: 460, position: 'relative', zIndex: 2 }}>
				{/* ================= STATE 1: IDLE / START SCREEN ================= */}
				{gameState === 'IDLE' && (
					<div style={{ textAlign: 'center', maxWidth: 840, margin: '0 auto' }}>
						{/* Dual-Tone Cyber Kicker */}
						<div
							style={{
								display: 'inline-flex',
								alignItems: 'center',
								gap: 8,
								padding: '7px 20px',
								borderRadius: 24,
								background: 'linear-gradient(90deg, rgba(37, 99, 235, 0.25) 0%, rgba(6, 182, 212, 0.25) 100%)',
								border: '1px solid rgba(56, 189, 248, 0.45)',
								boxShadow: '0 4px 20px rgba(37, 99, 235, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
								color: '#38bdf8',
								fontSize: 12.5,
								fontWeight: 800,
								letterSpacing: '0.07em',
								marginBottom: 20,
								textTransform: 'uppercase',
							}}
						>
							<span style={{ color: '#fbbf24' }}>⚡</span> RAPID-FIRE CAMPUS OA SIMULATOR
						</div>

						{/* Headline: High-Contrast & Impactful */}
						<h3
							style={{
								fontSize: 'clamp(32px, 4.5vw, 48px)',
								fontWeight: 900,
								margin: '0 0 14px 0',
								letterSpacing: '-0.03em',
								lineHeight: 1.12,
							}}
						>
							Test Your Speed.{' '}
							<span
								style={{
									background: 'linear-gradient(90deg, #38bdf8 0%, #60a5fa 40%, #818cf8 80%, #c084fc 100%)',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
								}}
							>
								Unlock Tier-1 Offers.
							</span>
						</h3>

						{/* Subtitle */}
						<p
							style={{
								color: '#94a3b8',
								fontSize: 'clamp(14px, 1.8vw, 16.5px)',
								lineHeight: 1.6,
								maxWidth: 620,
								margin: '0 auto 36px',
								fontWeight: 500,
							}}
						>
							Solve calibrated <strong style={{ color: '#ffffff' }}>Speed Math</strong>,{' '}
							<strong style={{ color: '#ffffff' }}>Number Series</strong>, and{' '}
							<strong style={{ color: '#ffffff' }}>Bug Spotter</strong> questions in 30 seconds. Build streaks to earn +2s
							time bonus &amp; unlock your verified CTC tier certificate!
						</p>

						{/* 5 Rich, Premium Tier Cards Grid */}
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
								gap: 14,
								marginBottom: 36,
							}}
						>
							{TIERS.map((tier, idx) => (
								<div
									key={idx}
									className="tier-card-interactive"
									style={{
										background: 'linear-gradient(155deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
										border: `1.5px solid ${tier.color}44`,
										borderRadius: 20,
										padding: '16px 12px 14px',
										textAlign: 'center',
										position: 'relative',
										overflow: 'hidden',
										boxShadow: `0 8px 24px -6px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
										transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
										cursor: 'default',
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.transform = 'translateY(-4px)'
										e.currentTarget.style.borderColor = tier.color
										e.currentTarget.style.boxShadow = `0 14px 30px -8px ${tier.glow}, 0 0 20px ${tier.color}33, inset 0 1px 0 rgba(255, 255, 255, 0.2)`
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.transform = 'translateY(0)'
										e.currentTarget.style.borderColor = `${tier.color}44`
										e.currentTarget.style.boxShadow =
											'0 8px 24px -6px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
									}}
								>
									{/* Top ambient color dot & Points pill */}
									<div
										style={{
											display: 'inline-flex',
											alignItems: 'center',
											gap: 5,
											backgroundColor: `${tier.color}18`,
											border: `1px solid ${tier.color}44`,
											padding: '3px 9px',
											borderRadius: 12,
											fontSize: 10.5,
											fontWeight: 800,
											color: tier.color,
											letterSpacing: '0.03em',
											marginBottom: 8,
										}}
									>
										<span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: tier.color }} />
										{tier.min}+ PTS
									</div>

									{/* Tier Title */}
									<div
										style={{
											color: '#ffffff',
											fontSize: 14,
											fontWeight: 800,
											margin: '0 0 6px 0',
											letterSpacing: '-0.01em',
										}}
									>
										{tier.title}
									</div>

									{/* CTC Package */}
									<div
										style={{
											fontSize: 12.5,
											fontWeight: 800,
											color: tier.color,
											letterSpacing: '-0.01em',
											marginBottom: 6,
										}}
									>
										{tier.ctc}
									</div>

									{/* Recruiter / Track Tag */}
									<div
										style={{
											fontSize: 10,
											fontWeight: 600,
											color: '#64748b',
											borderTop: '1px solid rgba(255, 255, 255, 0.06)',
											paddingTop: 6,
										}}
									>
										{tier.companies}
									</div>
								</div>
							))}
						</div>

						{/* Launch CTA Button */}
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
							<button
								type="button"
								onClick={startGame}
								style={{
									background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 50%, #3b82f6 100%)',
									color: '#ffffff',
									border: 'none',
									borderRadius: 26,
									padding: '18px 46px',
									fontSize: 18,
									fontWeight: 900,
									cursor: 'pointer',
									boxShadow:
										'0 0 35px rgba(37, 99, 235, 0.6), 0 12px 30px rgba(6, 182, 212, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.45)',
									transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
									display: 'inline-flex',
									alignItems: 'center',
									gap: 10,
									letterSpacing: '0.02em',
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)'
									e.currentTarget.style.boxShadow =
										'0 0 45px rgba(37, 99, 235, 0.75), 0 16px 36px rgba(6, 182, 212, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.55)'
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = 'translateY(0) scale(1)'
									e.currentTarget.style.boxShadow =
										'0 0 35px rgba(37, 99, 235, 0.6), 0 12px 30px rgba(6, 182, 212, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.45)'
								}}
							>
								<span>⚡</span> LAUNCH 30s OA BLITZ ➔
							</button>

							<div
								style={{
									fontSize: 12,
									fontWeight: 600,
									color: '#64748b',
									display: 'flex',
									alignItems: 'center',
									gap: 6,
								}}
							>
								<span>⌨️</span> Keyboard shortcuts <strong style={{ color: '#94a3b8' }}>1, 2, 3, 4</strong> (or{' '}
								<strong style={{ color: '#94a3b8' }}>A, B, C, D</strong>) supported on desktop
							</div>
						</div>
					</div>
				)}

				{/* ================= STATE 2: ACTIVE GAMEPLAY ================= */}
				{gameState === 'PLAYING' && (
					<div style={{ maxWidth: 840, margin: '0 auto' }}>
						{/* Active Gameplay HUD */}
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: '1fr auto 1fr',
								alignItems: 'center',
								gap: 16,
								marginBottom: 20,
								background: 'rgba(15, 23, 42, 0.6)',
								border: '1px solid rgba(255, 255, 255, 0.08)',
								borderRadius: 24,
								padding: '16px 24px',
							}}
						>
							{/* Current Score & Unlocked Tier */}
							<div>
								<div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 800, letterSpacing: '0.06em' }}>
									CURRENT SCORE
								</div>
								<div style={{ fontSize: 34, fontWeight: 900, color: '#ffffff', lineHeight: 1.1 }}>
									{score}{' '}
									<span
										style={{
											fontSize: 13,
											color: unlockedTier.color,
											fontWeight: 800,
											backgroundColor: `${unlockedTier.color}1a`,
											border: `1px solid ${unlockedTier.color}44`,
											padding: '2px 8px',
											borderRadius: 10,
											marginLeft: 6,
										}}
									>
										{unlockedTier.title}
									</span>
								</div>
							</div>

							{/* Center: Radial Pulsing Timer */}
							<div style={{ textAlign: 'center' }}>
								<div
									style={{
										display: 'inline-flex',
										alignItems: 'center',
										justifyContent: 'center',
										width: 76,
										height: 76,
										borderRadius: '50%',
										backgroundColor: timeLeft <= 5 ? 'rgba(239, 68, 68, 0.2)' : 'rgba(37, 99, 235, 0.2)',
										border: `3px solid ${timeLeft <= 5 ? '#ef4444' : '#38bdf8'}`,
										boxShadow:
											timeLeft <= 5 ? '0 0 25px rgba(239, 68, 68, 0.6)' : '0 0 20px rgba(56, 189, 248, 0.45)',
										transition: 'all 0.3s ease',
									}}
								>
									<span
										style={{
											fontSize: 28,
											fontWeight: 900,
											color: timeLeft <= 5 ? '#ef4444' : '#ffffff',
											fontFamily: '"JetBrains Mono", monospace',
										}}
									>
										{timeLeft}s
									</span>
								</div>
							</div>

							{/* Right: Streak & Multiplier */}
							<div style={{ textAlign: 'right' }}>
								<div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 800, letterSpacing: '0.06em' }}>
									STREAK FRENZY
								</div>
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8 }}>
									{comboMultiplier > 1 && (
										<span
											style={{
												backgroundColor: '#ef4444',
												color: '#fff',
												fontSize: 11,
												fontWeight: 900,
												padding: '3px 8px',
												borderRadius: 10,
												boxShadow: '0 0 12px rgba(239, 68, 68, 0.5)',
											}}
										>
											{comboMultiplier}x COMBO
										</span>
									)}
									<span style={{ fontSize: 26, fontWeight: 900, color: '#fbbf24' }}>
										{streak > 0 ? `${streak}x 🔥` : '0x'}
									</span>
								</div>
							</div>
						</div>

						{/* Progress countdown bar */}
						<div
							style={{
								width: '100%',
								height: 7,
								backgroundColor: 'rgba(255, 255, 255, 0.08)',
								borderRadius: 4,
								marginBottom: 24,
								overflow: 'hidden',
							}}
						>
							<div
								style={{
									height: '100%',
									width: `${Math.min((timeLeft / 30) * 100, 100)}%`,
									background:
										timeLeft <= 5
											? 'linear-gradient(90deg, #ef4444, #dc2626)'
											: 'linear-gradient(90deg, #38bdf8, #2563eb)',
									transition: 'width 0.3s ease, background-color 0.3s ease',
									boxShadow: timeLeft <= 5 ? '0 0 10px #ef4444' : '0 0 10px #38bdf8',
								}}
							/>
						</div>

						{/* Question Card */}
						<div
							style={{
								backgroundColor: 'rgba(15, 23, 42, 0.85)',
								border: '1.5px solid rgba(59, 130, 246, 0.3)',
								borderRadius: 26,
								padding: '28px 30px',
								marginBottom: 20,
								position: 'relative',
								boxShadow: '0 12px 36px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
							}}
						>
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
								<div style={{ display: 'flex', gap: 8 }}>
									<span
										style={{
											fontSize: 11,
											fontWeight: 800,
											color: '#38bdf8',
											backgroundColor: 'rgba(56, 189, 248, 0.14)',
											border: '1px solid rgba(56, 189, 248, 0.3)',
											padding: '4px 10px',
											borderRadius: 12,
										}}
									>
										{currentQ.category}
									</span>
									<span
										style={{
											fontSize: 11,
											fontWeight: 800,
											color: '#fbbf24',
											backgroundColor: 'rgba(245, 158, 11, 0.14)',
											border: '1px solid rgba(245, 158, 11, 0.3)',
											padding: '4px 10px',
											borderRadius: 12,
										}}
									>
										{currentQ.company}
									</span>
								</div>
								<span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 700 }}>
									QUESTION #{currentIdx + 1}
								</span>
							</div>

							<h4
								style={{
									fontSize: 'clamp(18px, 2.2vw, 23px)',
									fontWeight: 800,
									margin: '0 0 8px 0',
									lineHeight: 1.4,
									letterSpacing: '-0.01em',
									color: '#ffffff',
								}}
							>
								{currentQ.q}
							</h4>

							{feedback && (
								<div
									style={{
										position: 'absolute',
										top: 18,
										right: 28,
										fontSize: 14,
										fontWeight: 900,
										color: feedback.correct ? '#34d399' : '#ef4444',
										animation: 'pulse 0.3s ease',
										backgroundColor: feedback.correct ? 'rgba(52, 211, 153, 0.15)' : 'rgba(239, 68, 68, 0.15)',
										border: `1px solid ${feedback.correct ? '#34d399' : '#ef4444'}`,
										padding: '4px 12px',
										borderRadius: 12,
									}}
								>
									{feedback.text}
								</div>
							)}
						</div>

						{/* 4 Interactive Option Buttons */}
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
								gap: 14,
							}}
						>
							{currentQ.options.map((option, idx) => {
								let btnBg = 'rgba(255, 255, 255, 0.04)'
								let btnBorder = 'rgba(255, 255, 255, 0.12)'
								let btnText = '#e2e8f0'

								if (selectedOption !== null) {
									if (idx === currentQ.correct) {
										btnBg = 'rgba(16, 185, 129, 0.25)'
										btnBorder = '#10b981'
										btnText = '#34d399'
									} else if (idx === selectedOption) {
										btnBg = 'rgba(239, 68, 68, 0.25)'
										btnBorder = '#ef4444'
										btnText = '#f87171'
									}
								}

								return (
									<button
										type="button"
										key={idx}
										onClick={() => handleAnswer(idx)}
										disabled={selectedOption !== null}
										style={{
											backgroundColor: btnBg,
											border: `1.5px solid ${btnBorder}`,
											borderRadius: 18,
											padding: '16px 20px',
											color: btnText,
											fontSize: 15,
											fontWeight: 700,
											cursor: selectedOption !== null ? 'default' : 'pointer',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'flex-start',
											gap: 12,
											textAlign: 'left',
											transition: 'all 0.18s ease',
											boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
										}}
										onMouseEnter={(e) => {
											if (selectedOption === null) {
												e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 0.15)'
												e.currentTarget.style.borderColor = '#38bdf8'
												e.currentTarget.style.transform = 'translateY(-2px)'
											}
										}}
										onMouseLeave={(e) => {
											if (selectedOption === null) {
												e.currentTarget.style.backgroundColor = btnBg
												e.currentTarget.style.borderColor = btnBorder
												e.currentTarget.style.transform = 'translateY(0)'
											}
										}}
									>
										<span
											style={{
												width: 28,
												height: 28,
												borderRadius: 8,
												backgroundColor: 'rgba(255, 255, 255, 0.08)',
												border: '1px solid rgba(255, 255, 255, 0.12)',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												fontSize: 12,
												fontWeight: 800,
												color: '#94a3b8',
												flexShrink: 0,
											}}
										>
											{['A', 'B', 'C', 'D'][idx]}
										</span>
										<span style={{ flex: 1 }}>{option}</span>
									</button>
								)
							})}
						</div>
					</div>
				)}

				{/* ================= STATE 3: GAME OVER / OFFER LETTER CERTIFICATE ================= */}
				{gameState === 'GAMEOVER' && (
					<div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto', position: 'relative' }}>
						<canvas
							ref={canvasRef}
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
								pointerEvents: 'none',
								zIndex: 1,
							}}
						/>

						<div style={{ position: 'relative', zIndex: 2 }}>
							<div
								style={{
									display: 'inline-flex',
									alignItems: 'center',
									gap: 8,
									padding: '7px 20px',
									borderRadius: 24,
									backgroundColor: 'rgba(16, 185, 129, 0.18)',
									border: '1px solid rgba(16, 185, 129, 0.35)',
									color: '#34d399',
									fontSize: 13,
									fontWeight: 800,
									marginBottom: 16,
								}}
							>
								<span>🎉</span> 30s CAMPUS OA DRILL COMPLETE!
							</div>

							<h3
								style={{
									fontSize: 'clamp(28px, 3.8vw, 40px)',
									fontWeight: 900,
									margin: '0 0 10px 0',
									color: '#ffffff',
									letterSpacing: '-0.02em',
								}}
							>
								Offer Letter Tier Unlocked!
							</h3>

							{/* Certified Placement Report Card */}
							<div
								style={{
									backgroundColor: 'rgba(13, 20, 38, 0.95)',
									border: `2px solid ${unlockedTier.color}`,
									borderRadius: 28,
									padding: '28px',
									margin: '24px 0',
									boxShadow: `0 0 40px ${unlockedTier.glow}, 0 20px 50px rgba(0, 0, 0, 0.6)`,
									textAlign: 'left',
									position: 'relative',
									overflow: 'hidden',
								}}
							>
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										marginBottom: 20,
										borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
										paddingBottom: 16,
									}}
								>
									<div>
										<span style={{ fontSize: 11, fontWeight: 800, color: '#94a3b8', letterSpacing: '0.08em' }}>
											PHONECTIC CANDIDATE BENCHMARK
										</span>
										<h4
											style={{
												fontSize: 24,
												fontWeight: 900,
												color: '#ffffff',
												margin: '4px 0 0 0',
												letterSpacing: '-0.01em',
											}}
										>
											{unlockedTier.title}
										</h4>
									</div>
									<div
										style={{
											backgroundColor: `${unlockedTier.color}22`,
											color: unlockedTier.color,
											border: `1.5px solid ${unlockedTier.color}`,
											padding: '6px 16px',
											borderRadius: 16,
											fontSize: 13,
											fontWeight: 800,
											boxShadow: `0 0 16px ${unlockedTier.glow}`,
										}}
									>
										{unlockedTier.badge}
									</div>
								</div>

								<div
									style={{
										backgroundColor: 'rgba(255, 255, 255, 0.04)',
										border: '1px solid rgba(255, 255, 255, 0.08)',
										borderRadius: 18,
										padding: '18px',
										display: 'grid',
										gridTemplateColumns: 'repeat(3, 1fr)',
										gap: 12,
										textAlign: 'center',
										marginBottom: 18,
									}}
								>
									<div>
										<div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700, marginBottom: 4 }}>FINAL SCORE</div>
										<div style={{ fontSize: 24, fontWeight: 900, color: '#ffffff' }}>{score}</div>
									</div>
									<div>
										<div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700, marginBottom: 4 }}>MAX STREAK</div>
										<div style={{ fontSize: 24, fontWeight: 900, color: '#fbbf24' }}>{maxStreak}x 🔥</div>
									</div>
									<div>
										<div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700, marginBottom: 4 }}>QUALIFIED CTC</div>
										<div style={{ fontSize: 20, fontWeight: 900, color: unlockedTier.color }}>{unlockedTier.ctc}</div>
									</div>
								</div>

								<div
									style={{
										fontSize: 12,
										color: '#94a3b8',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
									}}
								>
									<span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
										<span style={{ color: '#10b981', fontWeight: 800 }}>✔</span> Verified against TCS Prime, Infosys,
										Amazon &amp; Google OA standards
									</span>
									<span style={{ color: '#38bdf8', fontWeight: 700 }}>Percentile: Top 3%</span>
								</div>
							</div>

							{/* Actions */}
							<div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
								<button
									type="button"
									onClick={startGame}
									style={{
										background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
										color: '#ffffff',
										border: 'none',
										borderRadius: 22,
										padding: '16px 36px',
										fontSize: 16,
										fontWeight: 800,
										cursor: 'pointer',
										boxShadow: '0 8px 24px rgba(37, 99, 235, 0.45)',
									}}
								>
									⚡ PLAY AGAIN
								</button>
								<a
									href="#pricing"
									style={{
										backgroundColor: 'rgba(255, 255, 255, 0.08)',
										color: '#ffffff',
										border: '1px solid rgba(255, 255, 255, 0.2)',
										borderRadius: 22,
										padding: '16px 30px',
										fontSize: 16,
										fontWeight: 700,
										textDecoration: 'none',
										display: 'inline-flex',
										alignItems: 'center',
									}}
								>
									Join Full Program →
								</a>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
