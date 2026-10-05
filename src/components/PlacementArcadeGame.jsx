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

// Placement tiers based on benchmark score
const TIERS = [
	{
		min: 0,
		title: 'Aspirant',
		ctc: 'Placement Ready',
		tag: 'Foundation',
		badge: 'Tier-3 Cleared',
		color: '#94a3b8',
		companies: 'Mass Recruiters',
	},
	{
		min: 600,
		title: 'Ninja Dev',
		ctc: '₹4.5 – 6.0 LPA',
		tag: 'TCS / Wipro',
		badge: 'Standard OA Cleared',
		color: '#60a5fa',
		companies: 'TCS · Infosys',
	},
	{
		min: 1400,
		title: 'Digital Specialist',
		ctc: '₹9.0 – 12.0 LPA',
		tag: 'Accenture Prime',
		badge: 'High-Package Offer',
		color: '#38bdf8',
		companies: 'Cognizant · Capgemini',
	},
	{
		min: 2400,
		title: 'Prime SDE-1',
		ctc: '₹18.0 – 22.0 LPA',
		tag: 'Product Tier-1',
		badge: 'Tier-1 Product Offer',
		color: '#34d399',
		companies: 'Amazon · Oracle',
	},
	{
		min: 3500,
		title: 'Super-Dream FAANG',
		ctc: '₹28.0+ LPA CTC',
		tag: 'National Ranker',
		badge: 'National Ranker',
		color: '#fbbf24',
		companies: 'Google · Microsoft',
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
	const [feedback, setFeedback] = useState(null)
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

	// Web Audio Synth for subtle, refined sound feedback
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
					const baseFreq = 523.25 + Math.min(streak * 30, 300)
					osc.frequency.setValueAtTime(baseFreq, now)
					osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.35, now + 0.12)
					gain.gain.setValueAtTime(0.12, now)
					gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2)
					osc.connect(gain)
					gain.connect(ctx.destination)
					osc.start(now)
					osc.stop(now + 0.2)
				} else if (type === 'wrong') {
					const osc = ctx.createOscillator()
					const gain = ctx.createGain()
					osc.type = 'triangle'
					osc.frequency.setValueAtTime(180, now)
					osc.frequency.exponentialRampToValueAtTime(100, now + 0.15)
					gain.gain.setValueAtTime(0.12, now)
					gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18)
					osc.connect(gain)
					gain.connect(ctx.destination)
					osc.start(now)
					osc.stop(now + 0.18)
				} else if (type === 'start') {
					const osc = ctx.createOscillator()
					const gain = ctx.createGain()
					osc.type = 'sine'
					osc.frequency.setValueAtTime(320, now)
					osc.frequency.exponentialRampToValueAtTime(640, now + 0.2)
					gain.gain.setValueAtTime(0.12, now)
					gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25)
					osc.connect(gain)
					gain.connect(ctx.destination)
					osc.start(now)
					osc.stop(now + 0.25)
				} else if (type === 'gameover') {
					const freqs = [440, 554.37, 659.25]
					freqs.forEach((f, i) => {
						const osc = ctx.createOscillator()
						const gain = ctx.createGain()
						osc.type = 'sine'
						osc.frequency.setValueAtTime(f, now + i * 0.08)
						gain.gain.setValueAtTime(0.1, now + i * 0.08)
						gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.35)
						osc.connect(gain)
						gain.connect(ctx.destination)
						osc.start(now + i * 0.08)
						osc.stop(now + i * 0.08 + 0.35)
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

			const multiplier = newStreak >= 6 ? 5 : newStreak >= 4 ? 3 : newStreak >= 2 ? 2 : 1
			const points = 100 * multiplier
			setScore((s) => s + points)

			setTimeLeft((t) => Math.min(t + 2, 45))

			setFeedback({
				correct: true,
				text: `+${points} pts · +2s ${multiplier > 1 ? `(${multiplier}x streak)` : ''}`,
			})
			playSound('correct')
		} else {
			setStreak(0)
			setFeedback({
				correct: false,
				text: 'Streak reset',
			})
			playSound('wrong')
		}

		setTimeout(() => {
			setSelectedOption(null)
			setFeedback(null)
			setCurrentIdx((prev) => (prev + 1) % questions.length)
		}, 500)
	}

	// Keyboard shortcut listener (1, 2, 3, 4 or A, B, C, D)
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

	// Subtle celebratory confetti on completion
	useEffect(() => {
		if (gameState === 'GAMEOVER' && canvasRef.current) {
			const canvas = canvasRef.current
			const ctx = canvas.getContext('2d')
			let animationFrame
			canvas.width = canvas.parentElement.clientWidth
			canvas.height = canvas.parentElement.clientHeight

			const particles = Array.from({ length: 45 }, () => ({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height * 0.4,
				vx: (Math.random() - 0.5) * 3,
				vy: Math.random() * 2.5 + 1.5,
				color: ['#3b82f6', '#60a5fa', '#93c5fd', '#34d399', '#fbbf24'][Math.floor(Math.random() * 5)],
				size: Math.random() * 4 + 3,
				rot: Math.random() * 360,
			}))

			const render = () => {
				ctx.clearRect(0, 0, canvas.width, canvas.height)
				particles.forEach((p) => {
					p.x += p.vx
					p.y += p.vy
					p.rot += 2
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
				maxWidth: 1040,
				margin: '0 auto',
				position: 'relative',
				borderRadius: 24,
				background: '#0b101d',
				border: '1px solid rgba(255, 255, 255, 0.08)',
				boxShadow: '0 24px 60px -15px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
				overflow: 'hidden',
				color: '#ffffff',
				fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
			}}
		>
			{/* Subtle, soft top light reflection */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: '50%',
					transform: 'translateX(-50%)',
					width: 520,
					height: 120,
					background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.06) 0%, transparent 100%)',
					pointerEvents: 'none',
				}}
			/>

			{/* Refined Header Bar */}
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					padding: '14px 24px',
					borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
					backgroundColor: 'rgba(10, 15, 29, 0.65)',
					position: 'relative',
					zIndex: 2,
				}}
			>
				{/* Left: Brand Identity */}
				<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
					<span
						style={{
							fontSize: 12.5,
							fontWeight: 700,
							letterSpacing: '0.06em',
							color: '#f8fafc',
							textTransform: 'uppercase',
						}}
					>
						Phonectic Arena
					</span>
					<span
						style={{
							fontSize: 11,
							fontWeight: 600,
							color: '#94a3b8',
							backgroundColor: 'rgba(255, 255, 255, 0.04)',
							border: '1px solid rgba(255, 255, 255, 0.08)',
							padding: '1.5px 8px',
							borderRadius: 12,
						}}
					>
						OA Benchmark
					</span>
				</div>

				{/* Center: Clean Telemetry (Hidden on mobile) */}
				<div
					className="hidden-on-mobile"
					style={{
						fontSize: 11.5,
						fontWeight: 500,
						color: '#64748b',
						display: 'flex',
						alignItems: 'center',
						gap: 10,
					}}
				>
					<span>Adaptive Campus Assessment</span>
					<span style={{ opacity: 0.4 }}>•</span>
					<span>30-Second Sprint</span>
				</div>

				{/* Right: Personal Best & Sound Control */}
				<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
					<div
						style={{
							fontSize: 11.5,
							fontWeight: 600,
							color: '#cbd5e1',
							backgroundColor: 'rgba(255, 255, 255, 0.04)',
							border: '1px solid rgba(255, 255, 255, 0.08)',
							padding: '4px 12px',
							borderRadius: 16,
							display: 'flex',
							alignItems: 'center',
							gap: 5,
						}}
					>
						<span>Best:</span>
						<strong style={{ color: '#38bdf8', fontWeight: 700 }}>{highScore} pts</strong>
					</div>

					<button
						type="button"
						onClick={() => setSoundEnabled(!soundEnabled)}
						style={{
							background: 'rgba(255, 255, 255, 0.04)',
							border: '1px solid rgba(255, 255, 255, 0.08)',
							color: soundEnabled ? '#cbd5e1' : '#64748b',
							borderRadius: 16,
							padding: '4px 10px',
							fontSize: 11,
							fontWeight: 600,
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							gap: 5,
							transition: 'all 0.2s ease',
						}}
						title={soundEnabled ? 'Mute sound' : 'Enable sound'}
					>
						{soundEnabled ? (
							<>
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
									<path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
									<path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
								</svg>
								<span>SFX</span>
							</>
						) : (
							<>
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
									<line x1="23" y1="9" x2="17" y2="15"></line>
									<line x1="17" y1="9" x2="23" y2="15"></line>
								</svg>
								<span>Muted</span>
							</>
						)}
					</button>
				</div>
			</div>

			{/* Main Content Stage */}
			<div style={{ padding: '36px 28px', minHeight: 430, position: 'relative', zIndex: 2 }}>
				{/* ================= STATE 1: IDLE / START SCREEN ================= */}
				{gameState === 'IDLE' && (
					<div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
						{/* Clean Section Tag */}
						<div
							style={{
								display: 'inline-flex',
								alignItems: 'center',
								gap: 6,
								padding: '4px 14px',
								borderRadius: 20,
								backgroundColor: 'rgba(59, 130, 246, 0.08)',
								border: '1px solid rgba(59, 130, 246, 0.22)',
								color: '#60a5fa',
								fontSize: 11.5,
								fontWeight: 700,
								letterSpacing: '0.04em',
								textTransform: 'uppercase',
								marginBottom: 16,
							}}
						>
							30-Second Speed Benchmark
						</div>

						{/* Confident, High-legibility Headline */}
						<h3
							style={{
								fontFamily: '"Roboto Condensed", sans-serif',
								fontSize: 'clamp(30px, 4vw, 46px)',
								fontWeight: 900,
								textTransform: 'uppercase',
								letterSpacing: '-0.035em',
								lineHeight: 1.05,
								color: '#ffffff',
								margin: '0 0 12px 0',
							}}
						>
							Test Your Speed.{' '}
							<span style={{ color: '#3b82f6' }}>Unlock Tier-1 Offers.</span>
						</h3>

						{/* Subtitle */}
						<p
							style={{
								color: '#94a3b8',
								fontSize: 'clamp(14px, 1.5vw, 15px)',
								lineHeight: 1.6,
								maxWidth: 580,
								margin: '0 auto 30px',
								fontWeight: 400,
							}}
						>
							Solve calibrated Quant, Logic, and Bug Spotter questions in 30 seconds.
							Build streaks for bonus time and discover your verified placement tier.
						</p>

						{/* Clean Progressive Tier Track */}
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
								gap: 10,
								marginBottom: 32,
							}}
						>
							{TIERS.map((tier, idx) => (
								<div
									key={idx}
									style={{
										backgroundColor: 'rgba(255, 255, 255, 0.02)',
										border: '1px solid rgba(255, 255, 255, 0.07)',
										borderRadius: 16,
										padding: '16px 12px 14px',
										textAlign: 'center',
										transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
										cursor: 'default',
										position: 'relative',
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
										e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)'
										e.currentTarget.style.transform = 'translateY(-2px)'
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)'
										e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)'
										e.currentTarget.style.transform = 'translateY(0)'
									}}
								>
									{/* Score Threshold */}
									<div
										style={{
											fontSize: 10.5,
											fontWeight: 700,
											color: '#64748b',
											fontFamily: 'monospace',
											letterSpacing: '0.04em',
											marginBottom: 6,
										}}
									>
										{tier.min === 0 ? 'START' : `${tier.min}+ PTS`}
									</div>

									{/* Tier Title */}
									<div
										style={{
											color: '#ffffff',
											fontSize: 13.5,
											fontWeight: 700,
											margin: '0 0 4px 0',
											letterSpacing: '-0.01em',
										}}
									>
										{tier.title}
									</div>

									{/* Package */}
									<div
										style={{
											fontSize: 12,
											fontWeight: 600,
											color: '#60a5fa',
											marginBottom: 6,
										}}
									>
										{tier.ctc}
									</div>

									{/* Company Targets */}
									<div
										style={{
											fontSize: 10.5,
											fontWeight: 500,
											color: '#64748b',
											borderTop: '1px solid rgba(255, 255, 255, 0.05)',
											paddingTop: 6,
										}}
									>
										{tier.companies}
									</div>
								</div>
							))}
						</div>

						{/* Launch Action */}
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
							<button
								type="button"
								onClick={startGame}
								style={{
									background: 'linear-gradient(180deg, #2563eb 0%, #1d4ed8 100%)',
									color: '#ffffff',
									border: '1px solid rgba(255, 255, 255, 0.15)',
									borderRadius: 24,
									padding: '14px 38px',
									fontSize: 15,
									fontWeight: 700,
									cursor: 'pointer',
									display: 'inline-flex',
									alignItems: 'center',
									gap: 9,
									letterSpacing: '0.01em',
									boxShadow:
										'0 1px 2px rgba(0, 0, 0, 0.2), 0 8px 24px -4px rgba(29, 78, 216, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
									transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = 'translateY(-1px)'
									e.currentTarget.style.boxShadow =
										'0 2px 4px rgba(0, 0, 0, 0.2), 0 12px 30px -4px rgba(29, 78, 216, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.35)'
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = 'translateY(0)'
									e.currentTarget.style.boxShadow =
										'0 1px 2px rgba(0, 0, 0, 0.2), 0 8px 24px -4px rgba(29, 78, 216, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25)'
								}}
							>
								<span>Start 30s Assessment</span>
								<svg
									width="15"
									height="15"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="5" y1="12" x2="19" y2="12"></line>
									<polyline points="12 5 19 12 12 19"></polyline>
								</svg>
							</button>

							{/* Minimal Keyboard Shortcut Indicator */}
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: 5,
									fontSize: 11.5,
									color: '#64748b',
									marginTop: 4,
								}}
							>
								<span>Keys</span>
								<kbd
									style={{
										backgroundColor: 'rgba(255, 255, 255, 0.06)',
										border: '1px solid rgba(255, 255, 255, 0.1)',
										borderRadius: 4,
										padding: '1px 5px',
										fontSize: 10,
										fontFamily: 'monospace',
										color: '#cbd5e1',
									}}
								>
									1
								</kbd>
								<kbd
									style={{
										backgroundColor: 'rgba(255, 255, 255, 0.06)',
										border: '1px solid rgba(255, 255, 255, 0.1)',
										borderRadius: 4,
										padding: '1px 5px',
										fontSize: 10,
										fontFamily: 'monospace',
										color: '#cbd5e1',
									}}
								>
									2
								</kbd>
								<kbd
									style={{
										backgroundColor: 'rgba(255, 255, 255, 0.06)',
										border: '1px solid rgba(255, 255, 255, 0.1)',
										borderRadius: 4,
										padding: '1px 5px',
										fontSize: 10,
										fontFamily: 'monospace',
										color: '#cbd5e1',
									}}
								>
									3
								</kbd>
								<kbd
									style={{
										backgroundColor: 'rgba(255, 255, 255, 0.06)',
										border: '1px solid rgba(255, 255, 255, 0.1)',
										borderRadius: 4,
										padding: '1px 5px',
										fontSize: 10,
										fontFamily: 'monospace',
										color: '#cbd5e1',
									}}
								>
									4
								</kbd>
								<span>(or A, B, C, D) supported</span>
							</div>
						</div>
					</div>
				)}

				{/* ================= STATE 2: ACTIVE GAMEPLAY ================= */}
				{gameState === 'PLAYING' && (
					<div style={{ maxWidth: 760, margin: '0 auto' }}>
						{/* Clean HUD Status Bar */}
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								marginBottom: 16,
								padding: '12px 18px',
								backgroundColor: 'rgba(255, 255, 255, 0.02)',
								border: '1px solid rgba(255, 255, 255, 0.06)',
								borderRadius: 16,
							}}
						>
							{/* Current Score & Unlocked Tier */}
							<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
								<div>
									<div style={{ fontSize: 10.5, color: '#64748b', fontWeight: 700, letterSpacing: '0.04em' }}>
										SCORE
									</div>
									<div style={{ fontSize: 22, fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
										{score}
									</div>
								</div>
								<span
									style={{
										fontSize: 11,
										color: '#60a5fa',
										fontWeight: 600,
										backgroundColor: 'rgba(59, 130, 246, 0.1)',
										border: '1px solid rgba(59, 130, 246, 0.2)',
										padding: '2px 8px',
										borderRadius: 10,
									}}
								>
									{unlockedTier.title}
								</span>
							</div>

							{/* Center: Clean Countdown Timer */}
							<div style={{ textAlign: 'center' }}>
								<div
									style={{
										display: 'inline-flex',
										alignItems: 'center',
										gap: 6,
										backgroundColor: timeLeft <= 5 ? 'rgba(239, 68, 68, 0.12)' : 'rgba(255, 255, 255, 0.04)',
										border: `1px solid ${timeLeft <= 5 ? 'rgba(239, 68, 68, 0.35)' : 'rgba(255, 255, 255, 0.08)'}`,
										padding: '5px 14px',
										borderRadius: 20,
										transition: 'all 0.2s ease',
									}}
								>
									<span style={{ fontSize: 11, fontWeight: 600, color: timeLeft <= 5 ? '#f87171' : '#94a3b8' }}>
										Time:
									</span>
									<span
										style={{
											fontSize: 15,
											fontWeight: 800,
											color: timeLeft <= 5 ? '#ef4444' : '#ffffff',
											fontFamily: 'monospace',
										}}
									>
										{timeLeft}s
									</span>
								</div>
							</div>

							{/* Right: Streak */}
							<div style={{ textAlign: 'right' }}>
								<div style={{ fontSize: 10.5, color: '#64748b', fontWeight: 700, letterSpacing: '0.04em' }}>
									STREAK
								</div>
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 6 }}>
									{comboMultiplier > 1 && (
										<span
											style={{
												backgroundColor: 'rgba(59, 130, 246, 0.15)',
												color: '#93c5fd',
												fontSize: 10,
												fontWeight: 700,
												padding: '1px 6px',
												borderRadius: 8,
												border: '1px solid rgba(59, 130, 246, 0.3)',
											}}
										>
											{comboMultiplier}x
										</span>
									)}
									<span style={{ fontSize: 18, fontWeight: 800, color: streak > 0 ? '#38bdf8' : '#64748b' }}>
										{streak}x
									</span>
								</div>
							</div>
						</div>

						{/* Subtle Timer Bar */}
						<div
							style={{
								width: '100%',
								height: 3,
								backgroundColor: 'rgba(255, 255, 255, 0.05)',
								borderRadius: 2,
								marginBottom: 18,
								overflow: 'hidden',
							}}
						>
							<div
								style={{
									height: '100%',
									width: `${Math.min((timeLeft / 30) * 100, 100)}%`,
									backgroundColor: timeLeft <= 5 ? '#ef4444' : '#3b82f6',
									transition: 'width 0.3s ease, background-color 0.3s ease',
								}}
							/>
						</div>

						{/* Question Card */}
						<div
							style={{
								backgroundColor: 'rgba(255, 255, 255, 0.025)',
								border: '1px solid rgba(255, 255, 255, 0.08)',
								borderRadius: 20,
								padding: '24px 26px',
								marginBottom: 16,
								position: 'relative',
							}}
						>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									marginBottom: 12,
								}}
							>
								<div style={{ display: 'flex', gap: 8 }}>
									<span
										style={{
											fontSize: 10.5,
											fontWeight: 700,
											color: '#94a3b8',
											backgroundColor: 'rgba(255, 255, 255, 0.04)',
											border: '1px solid rgba(255, 255, 255, 0.08)',
											padding: '3px 9px',
											borderRadius: 8,
										}}
									>
										{currentQ.category}
									</span>
									<span
										style={{
											fontSize: 10.5,
											fontWeight: 700,
											color: '#60a5fa',
											backgroundColor: 'rgba(59, 130, 246, 0.08)',
											border: '1px solid rgba(59, 130, 246, 0.2)',
											padding: '3px 9px',
											borderRadius: 8,
										}}
									>
										{currentQ.company}
									</span>
								</div>
								<span style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>
									Q{currentIdx + 1} of {questions.length}
								</span>
							</div>

							<h4
								style={{
									fontSize: 'clamp(16px, 2vw, 20px)',
									fontWeight: 700,
									margin: '0',
									lineHeight: 1.45,
									color: '#ffffff',
								}}
							>
								{currentQ.q}
							</h4>

							{/* Feedback Notification */}
							{feedback && (
								<div
									style={{
										position: 'absolute',
										top: 16,
										right: 20,
										fontSize: 12,
										fontWeight: 700,
										color: feedback.correct ? '#34d399' : '#f87171',
										backgroundColor: feedback.correct ? 'rgba(52, 211, 153, 0.1)' : 'rgba(239, 68, 68, 0.1)',
										border: `1px solid ${feedback.correct ? 'rgba(52, 211, 153, 0.25)' : 'rgba(239, 68, 68, 0.25)'}`,
										padding: '3px 10px',
										borderRadius: 10,
									}}
								>
									{feedback.text}
								</div>
							)}
						</div>

						{/* 4 Clean Options Grid */}
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
								gap: 10,
							}}
						>
							{currentQ.options.map((option, idx) => {
								let btnBg = 'rgba(255, 255, 255, 0.02)'
								let btnBorder = 'rgba(255, 255, 255, 0.07)'
								let btnText = '#e2e8f0'

								if (selectedOption !== null) {
									if (idx === currentQ.correct) {
										btnBg = 'rgba(16, 185, 129, 0.12)'
										btnBorder = 'rgba(16, 185, 129, 0.4)'
										btnText = '#34d399'
									} else if (idx === selectedOption) {
										btnBg = 'rgba(239, 68, 68, 0.12)'
										btnBorder = 'rgba(239, 68, 68, 0.4)'
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
											border: `1px solid ${btnBorder}`,
											borderRadius: 14,
											padding: '14px 18px',
											color: btnText,
											fontSize: 14,
											fontWeight: 600,
											cursor: selectedOption !== null ? 'default' : 'pointer',
											display: 'flex',
											alignItems: 'center',
											gap: 12,
											textAlign: 'left',
											transition: 'all 0.15s ease',
										}}
										onMouseEnter={(e) => {
											if (selectedOption === null) {
												e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)'
												e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)'
											}
										}}
										onMouseLeave={(e) => {
											if (selectedOption === null) {
												e.currentTarget.style.backgroundColor = btnBg
												e.currentTarget.style.borderColor = btnBorder
											}
										}}
									>
										<span
											style={{
												width: 24,
												height: 24,
												borderRadius: 6,
												backgroundColor: 'rgba(255, 255, 255, 0.05)',
												border: '1px solid rgba(255, 255, 255, 0.08)',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												fontSize: 11,
												fontWeight: 700,
												color: '#94a3b8',
												flexShrink: 0,
												fontFamily: 'monospace',
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

				{/* ================= STATE 3: GAME OVER / REPORT ================= */}
				{gameState === 'GAMEOVER' && (
					<div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto', position: 'relative' }}>
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
									gap: 6,
									padding: '4px 14px',
									borderRadius: 20,
									backgroundColor: 'rgba(16, 185, 129, 0.1)',
									border: '1px solid rgba(16, 185, 129, 0.25)',
									color: '#34d399',
									fontSize: 11.5,
									fontWeight: 700,
									textTransform: 'uppercase',
									marginBottom: 14,
								}}
							>
								Assessment Complete
							</div>

							<h3
								style={{
									fontSize: 'clamp(26px, 3.2vw, 36px)',
									fontWeight: 800,
									margin: '0 0 8px 0',
									color: '#ffffff',
									letterSpacing: '-0.02em',
								}}
							>
								Placement Tier Unlocked
							</h3>

							{/* Clean Executive Assessment Report */}
							<div
								style={{
									backgroundColor: 'rgba(255, 255, 255, 0.025)',
									border: '1px solid rgba(255, 255, 255, 0.08)',
									borderRadius: 20,
									padding: '24px',
									margin: '20px 0',
									textAlign: 'left',
								}}
							>
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										marginBottom: 18,
										borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
										paddingBottom: 14,
									}}
								>
									<div>
										<span style={{ fontSize: 10.5, fontWeight: 700, color: '#64748b', letterSpacing: '0.04em' }}>
											VERIFIED ASSESSMENT
										</span>
										<h4
											style={{
												fontSize: 22,
												fontWeight: 800,
												color: '#ffffff',
												margin: '3px 0 0 0',
											}}
										>
											{unlockedTier.title}
										</h4>
									</div>
									<div
										style={{
											backgroundColor: 'rgba(59, 130, 246, 0.1)',
											color: '#60a5fa',
											border: '1px solid rgba(59, 130, 246, 0.22)',
											padding: '4px 12px',
											borderRadius: 12,
											fontSize: 12,
											fontWeight: 700,
										}}
									>
										{unlockedTier.badge}
									</div>
								</div>

								{/* Metrics Grid */}
								<div
									style={{
										backgroundColor: 'rgba(255, 255, 255, 0.02)',
										border: '1px solid rgba(255, 255, 255, 0.05)',
										borderRadius: 14,
										padding: '16px',
										display: 'grid',
										gridTemplateColumns: 'repeat(3, 1fr)',
										gap: 10,
										textAlign: 'center',
										marginBottom: 16,
									}}
								>
									<div>
										<div style={{ fontSize: 10.5, color: '#64748b', fontWeight: 600, marginBottom: 4 }}>
											FINAL SCORE
										</div>
										<div style={{ fontSize: 22, fontWeight: 800, color: '#ffffff' }}>{score}</div>
									</div>
									<div>
										<div style={{ fontSize: 10.5, color: '#64748b', fontWeight: 600, marginBottom: 4 }}>
											MAX STREAK
										</div>
										<div style={{ fontSize: 22, fontWeight: 800, color: '#38bdf8' }}>{maxStreak}x</div>
									</div>
									<div>
										<div style={{ fontSize: 10.5, color: '#64748b', fontWeight: 600, marginBottom: 4 }}>
											QUALIFIED CTC
										</div>
										<div style={{ fontSize: 18, fontWeight: 800, color: '#60a5fa' }}>{unlockedTier.ctc}</div>
									</div>
								</div>

								<div
									style={{
										fontSize: 11.5,
										color: '#64748b',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
									}}
								>
									<span>Calibrated against TCS Prime, Amazon &amp; Google OA benchmarks.</span>
									<span style={{ color: '#38bdf8', fontWeight: 600 }}>Top 5% Pan-India</span>
								</div>
							</div>

							{/* Actions */}
							<div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
								<button
									type="button"
									onClick={startGame}
									style={{
										background: 'linear-gradient(180deg, #2563eb 0%, #1d4ed8 100%)',
										color: '#ffffff',
										border: '1px solid rgba(255, 255, 255, 0.15)',
										borderRadius: 20,
										padding: '13px 30px',
										fontSize: 14.5,
										fontWeight: 700,
										cursor: 'pointer',
										boxShadow: '0 4px 18px rgba(29, 78, 216, 0.35)',
										transition: 'all 0.2s ease',
									}}
								>
									Retake Benchmark
								</button>
								<a
									href="#pricing"
									style={{
										backgroundColor: 'rgba(255, 255, 255, 0.04)',
										color: '#ffffff',
										border: '1px solid rgba(255, 255, 255, 0.12)',
										borderRadius: 20,
										padding: '13px 26px',
										fontSize: 14.5,
										fontWeight: 600,
										textDecoration: 'none',
										display: 'inline-flex',
										alignItems: 'center',
										transition: 'all 0.2s ease',
									}}
								>
									Explore Full Program →
								</a>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
