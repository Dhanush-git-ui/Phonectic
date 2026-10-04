import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

// 9 Satellite Photos matching exact reference composition
const SATELLITE_PHOTOS = [
	{
		id: 1,
		src: '/assets/fan_flag_pint.jpg',
		alt: 'England Flag Pint Fans',
		style: { left: '22%', top: '7%', width: '11.5%', minWidth: '130px', maxWidth: '175px' },
		exitX: -260,
		exitY: -320,
		rotate: -4,
	},
	{
		id: 2,
		src: '/assets/fan_sunglasses_beer.jpg',
		alt: 'Sunglasses Fan',
		style: { left: '10.5%', top: '41%', width: '10%', minWidth: '110px', maxWidth: '155px' },
		exitX: -360,
		exitY: -60,
		rotate: 4,
	},
	{
		id: 3,
		src: '/assets/fan_pint_ball.webp',
		alt: 'Goalkeeper Pint & Ball',
		style: { left: '15.5%', top: '46%', width: '9.5%', minWidth: '105px', maxWidth: '145px' },
		exitX: -300,
		exitY: 80,
		rotate: -5,
	},
	{
		id: 4,
		src: '/assets/fan_couch_celebration.jpg',
		alt: 'Fans on Couch',
		style: { left: '12%', bottom: '9%', width: '12%', minWidth: '130px', maxWidth: '180px' },
		exitX: -320,
		exitY: 340,
		rotate: 5,
	},
	{
		id: 5,
		src: '/assets/fan_outdoor_cheer.jpg',
		alt: 'Fans Outdoor Cheer',
		style: { left: '59%', top: '19%', width: '10.5%', minWidth: '115px', maxWidth: '160px' },
		exitX: 200,
		exitY: -280,
		rotate: -5,
	},
	{
		id: 6,
		src: '/assets/fan_crowd_diverse.jpg',
		alt: 'Diverse Crowd',
		style: { right: '8.5%', top: '8%', width: '11.5%', minWidth: '125px', maxWidth: '170px' },
		exitX: 340,
		exitY: -340,
		rotate: 4,
	},
	{
		id: 7,
		src: '/assets/fan_bar_tense.webp',
		alt: 'Bar Fans Watching Match',
		style: { right: '9%', top: '42%', width: '10%', minWidth: '110px', maxWidth: '155px' },
		exitX: 360,
		exitY: -40,
		rotate: -4,
	},
	{
		id: 8,
		src: '/assets/fan_sitting_ground.jpg',
		alt: 'Fans in Red Jerseys',
		style: { right: '19%', top: '48%', width: '11%', minWidth: '115px', maxWidth: '165px' },
		exitX: 280,
		exitY: 100,
		rotate: 6,
	},
	{
		id: 9,
		src: '/assets/fan_girls_facepaint.jpg',
		alt: 'Girls Facepaint Flag',
		style: { right: '25%', bottom: '8%', width: '11%', minWidth: '120px', maxWidth: '165px' },
		exitX: 220,
		exitY: 340,
		rotate: -5,
	},
]

// Full-bleed Slideshow sequence
const SLIDES = [
	{
		id: 1,
		image: '/assets/fan_hero_center.webp',
		kicker: 'A MOMENT OF PEACE',
		headlineTop: 'FOOTBALL NEEDS',
		headlineBottom: 'NO TRANSLATION.',
	},
	{
		id: 2,
		image: '/assets/fan_subway_argentina.webp',
		kicker: 'THE GLOBAL PASSION',
		headlineTop: 'A UNIVERSAL',
		headlineBottom: 'LANGUAGE.',
	},
	{
		id: 3,
		image: '/assets/slide_ronaldo.png',
		kicker: 'HISTORIC MOMENTS',
		headlineTop: 'ICONIC MEMORIES',
		headlineBottom: 'NEVER DIE.',
	},
]

export default function GalleryScrollZoom() {
	const containerRef = useRef(null)

	// Scroll progress across 380vh pinned track
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	})

	// Smooth spring dampener for scroll scrubbing
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 22,
		mass: 0.15,
		restDelta: 0.001,
	})

	// ── 1. Center Hero Zoom (0% to 35% scroll) ───────────────────────────────
	// Initial: 48vw × 55vh -> Scales smoothly to fill 100vw × 100vh
	const centerScale = useTransform(smoothProgress, [0, 0.35], [1, 2.45])

	// ── 2. Satellite Photos: Fly outward and fade to 0 within first 26% ───────
	const satelliteOpacity = useTransform(smoothProgress, [0, 0.16, 0.26], [1, 0.6, 0])
	const satelliteScale = useTransform(smoothProgress, [0, 0.26], [1, 1.75])

	// ── 3. Slideshow Transitions (35% to 100% scroll) ─────────────────────────
	const slide1Opacity = useTransform(smoothProgress, [0, 0.45, 0.55], [1, 1, 0])
	const slide1Scale = useTransform(smoothProgress, [0.35, 0.55], [1, 1.06])

	const slide2Opacity = useTransform(smoothProgress, [0.45, 0.55, 0.75, 0.85], [0, 1, 1, 0])
	const slide2Scale = useTransform(smoothProgress, [0.45, 0.85], [1.06, 1])

	const slide3Opacity = useTransform(smoothProgress, [0.75, 0.85, 1], [0, 1, 1])
	const slide3Scale = useTransform(smoothProgress, [0.75, 1], [1.06, 1])

	// Headline 1 (Slide 1)
	const text1Opacity = useTransform(smoothProgress, [0, 0.44, 0.52], [1, 1, 0])
	const text1Y = useTransform(smoothProgress, [0, 0.52], [0, -30])

	// Headline 2 (Slide 2)
	const text2Opacity = useTransform(smoothProgress, [0.48, 0.56, 0.72, 0.8], [0, 1, 1, 0])
	const text2Y = useTransform(smoothProgress, [0.48, 0.56, 0.8], [25, 0, -25])

	// Headline 3 (Slide 3)
	const text3Opacity = useTransform(smoothProgress, [0.78, 0.86, 1], [0, 1, 1])
	const text3Y = useTransform(smoothProgress, [0.78, 0.86], [25, 0])

	return (
		<div
			id="pricing"
			ref={containerRef}
			className="relative w-full"
			style={{ height: '380vh' }}
		>
			{/* Sticky Viewport Canvas */}
			<div className="sticky top-0 h-screen w-full overflow-hidden bg-black text-white select-none">
				{/* ════════════════════════════════════════════════════════════════════
				    LEFT SIDE: 6 Vertical Dash Indicators (matching reference)
				   ════════════════════════════════════════════════════════════════════ */}
				<div className="absolute left-6 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col gap-2.5 pointer-events-none">
					{[0, 1, 2, 3, 4, 5].map((idx) => {
						const dashOpacity = useTransform(smoothProgress, (val) => {
							const step = idx / 5
							const diff = Math.abs(val - step)
							return diff < 0.15 ? 1 : 0.25
						})
						return (
							<motion.div
								key={idx}
								style={{ opacity: dashOpacity }}
								className="w-3.5 h-[1.5px] bg-white rounded-full transition-opacity duration-200"
							/>
						)
					})}
				</div>

				{/* ════════════════════════════════════════════════════════════════════
				    RIGHT SIDE: Floating Tab Badge (matching reference)
				   ════════════════════════════════════════════════════════════════════ */}
				<div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 pointer-events-none hidden md:flex items-center">
					<div className="bg-[#e8f0fe] text-black px-2.5 py-6 rounded-l-md border-y border-l border-white/40 shadow-2xl flex flex-col items-center justify-center gap-4">
						<span className="font-bold text-sm tracking-tighter font-serif">w.</span>
						<span className="text-[11px] font-bold uppercase tracking-widest text-zinc-800 [writing-mode:vertical-rl] rotate-180">
							Winner
						</span>
					</div>
				</div>

				{/* ════════════════════════════════════════════════════════════════════
				    BOTTOM RIGHT: Minimal Watermark Label (matching reference)
				   ════════════════════════════════════════════════════════════════════ */}
				<div className="absolute bottom-5 right-6 z-30 pointer-events-none flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400">
					<span className="text-white text-xs">⚡</span>
					<span>FRAMER HACKATHON'26 WINNER</span>
				</div>

				{/* ════════════════════════════════════════════════════════════════════
				    9 SATELLITE PHOTOS: Visible immediately in initial state
				   ════════════════════════════════════════════════════════════════════ */}
				<motion.div
					style={{ opacity: satelliteOpacity }}
					className="pointer-events-none absolute inset-0 z-[5]"
				>
					{SATELLITE_PHOTOS.map((photo) => {
						const x = useTransform(
							smoothProgress,
							[0, 0.26],
							[0, photo.exitX],
						)
						const y = useTransform(
							smoothProgress,
							[0, 0.26],
							[0, photo.exitY],
						)

						return (
							<motion.div
								key={photo.id}
								style={{
									position: 'absolute',
									...photo.style,
									x,
									y,
									scale: satelliteScale,
									rotate: photo.rotate,
									aspectRatio: '4/3',
								}}
								className="overflow-hidden shadow-2xl shadow-black bg-zinc-950 border border-white/10"
							>
								<img
									src={photo.src}
									alt={photo.alt}
									className="w-full h-full object-cover object-center"
									loading="eager"
								/>
							</motion.div>
						)
					})}
				</motion.div>

				{/* ════════════════════════════════════════════════════════════════════
				    CENTER HERO MEDIA: Clean sharp photo matching reference
				   ════════════════════════════════════════════════════════════════════ */}
				<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
					<motion.div
						style={{
							scale: centerScale,
						}}
						className="relative w-[48vw] min-w-[360px] max-w-[740px] h-[55vh] min-h-[380px] max-h-[560px] overflow-hidden bg-black shadow-2xl shadow-black rounded-none"
					>
						{/* SLIDE 1 (Hero Initial) */}
						<motion.div
							style={{
								opacity: slide1Opacity,
								scale: slide1Scale,
							}}
							className="absolute inset-0 w-full h-full"
						>
							<img
								src={SLIDES[0].image}
								alt="Slide 1"
								className="w-full h-full object-cover object-center"
							/>
							<div className="absolute inset-0 bg-black/15" />
						</motion.div>

						{/* SLIDE 2 (Crossfade Slideshow) */}
						<motion.div
							style={{
								opacity: slide2Opacity,
								scale: slide2Scale,
							}}
							className="absolute inset-0 w-full h-full"
						>
							<img
								src={SLIDES[1].image}
								alt="Slide 2"
								className="w-full h-full object-cover object-center"
							/>
							<div className="absolute inset-0 bg-black/25" />
						</motion.div>

						{/* SLIDE 3 (Crossfade Slideshow) */}
						<motion.div
							style={{
								opacity: slide3Opacity,
								scale: slide3Scale,
							}}
							className="absolute inset-0 w-full h-full"
						>
							<img
								src={SLIDES[2].image}
								alt="Slide 3"
								className="w-full h-full object-cover object-center"
							/>
							<div className="absolute inset-0 bg-black/25" />
						</motion.div>
					</motion.div>
				</div>

				{/* ════════════════════════════════════════════════════════════════════
				    CENTER DISPLAY TYPOGRAPHY: Exact Serif Headline overlapping center photo
				   ════════════════════════════════════════════════════════════════════ */}
				<div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
					{/* SLIDE 1 HEADLINE */}
					<motion.div
						style={{
							opacity: text1Opacity,
							y: text1Y,
						}}
						className="absolute flex flex-col items-center justify-center w-[66vw] min-w-[380px] max-w-[980px]"
					>
						{/* Small Amber Kicker */}
						<span
							style={{
								color: '#f59e0b',
								fontSize: '11px',
								fontWeight: 700,
								letterSpacing: '0.26em',
								textTransform: 'uppercase',
								marginBottom: '10px',
								textShadow: '0 2px 8px rgba(0,0,0,0.8)',
							}}
						>
							{SLIDES[0].kicker}
						</span>

						{/* High-Contrast Condensed Serif Giant Headline */}
						<h2
							style={{
								fontFamily: '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
								fontSize: 'clamp(44px, 6.2vw, 96px)',
								fontWeight: 400,
								lineHeight: 0.92,
								letterSpacing: '-0.02em',
								color: '#ffffff',
								textTransform: 'uppercase',
								textAlign: 'center',
								margin: 0,
								padding: 0,
								textShadow: '0 6px 30px rgba(0,0,0,0.95)',
							}}
						>
							<span>{SLIDES[0].headlineTop}</span>
							<br />
							<span>{SLIDES[0].headlineBottom}</span>
						</h2>
					</motion.div>

					{/* SLIDE 2 HEADLINE */}
					<motion.div
						style={{
							opacity: text2Opacity,
							y: text2Y,
						}}
						className="absolute flex flex-col items-center justify-center w-[66vw] min-w-[380px] max-w-[980px]"
					>
						<span
							style={{
								color: '#f59e0b',
								fontSize: '11px',
								fontWeight: 700,
								letterSpacing: '0.26em',
								textTransform: 'uppercase',
								marginBottom: '10px',
								textShadow: '0 2px 8px rgba(0,0,0,0.8)',
							}}
						>
							{SLIDES[1].kicker}
						</span>
						<h2
							style={{
								fontFamily: '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
								fontSize: 'clamp(44px, 6.2vw, 96px)',
								fontWeight: 400,
								lineHeight: 0.92,
								letterSpacing: '-0.02em',
								color: '#ffffff',
								textTransform: 'uppercase',
								textAlign: 'center',
								margin: 0,
								padding: 0,
								textShadow: '0 6px 30px rgba(0,0,0,0.95)',
							}}
						>
							<span>{SLIDES[1].headlineTop}</span>
							<br />
							<span>{SLIDES[1].headlineBottom}</span>
						</h2>
					</motion.div>

					{/* SLIDE 3 HEADLINE */}
					<motion.div
						style={{
							opacity: text3Opacity,
							y: text3Y,
						}}
						className="absolute flex flex-col items-center justify-center w-[66vw] min-w-[380px] max-w-[980px]"
					>
						<span
							style={{
								color: '#f59e0b',
								fontSize: '11px',
								fontWeight: 700,
								letterSpacing: '0.26em',
								textTransform: 'uppercase',
								marginBottom: '10px',
								textShadow: '0 2px 8px rgba(0,0,0,0.8)',
							}}
						>
							{SLIDES[2].kicker}
						</span>
						<h2
							style={{
								fontFamily: '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
								fontSize: 'clamp(44px, 6.2vw, 96px)',
								fontWeight: 400,
								lineHeight: 0.92,
								letterSpacing: '-0.02em',
								color: '#ffffff',
								textTransform: 'uppercase',
								textAlign: 'center',
								margin: 0,
								padding: 0,
								textShadow: '0 6px 30px rgba(0,0,0,0.95)',
							}}
						>
							<span>{SLIDES[2].headlineTop}</span>
							<br />
							<span>{SLIDES[2].headlineBottom}</span>
						</h2>
					</motion.div>
				</div>
			</div>
		</div>
	)
}
