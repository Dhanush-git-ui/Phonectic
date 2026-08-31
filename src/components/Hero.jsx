import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()

  const phoneY = useTransform(scrollY, [0, 600], [0, 60])
  const cardLeftY = useTransform(scrollY, [0, 600], [0, -30])
  const cardRightY = useTransform(scrollY, [0, 600], [0, -40])

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    const x = (clientX / innerWidth - 0.5) * 15
    const y = (clientY / innerHeight - 0.5) * 15
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  const logos = [
    '/assets/2phuXW9stHbgs2KqeS2qJXecQU.png',
    '/assets/BABkIc0DHDlPXr264luo8fkOPc.png',
    '/assets/6OWI5hWP9XNWB6J7P9DwSjCJ1U.png',
    '/assets/10sPZOUu5uOWPPKlnTRTifBhL4.png',
    '/assets/naPlymY0TwrMMRjo2oDY1ZIBc.png',
    '/assets/XHYAA3kcuQbAQQetwjd4ZkZcE.png',
  ]

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen pt-28 pb-16 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-between overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #5b71ea 0%, #7e90f6 28%, #b8c4fc 62%, #5869e8 100%)',
        borderBottomLeftRadius: '56px',
        borderBottomRightRadius: '56px',
      }}
    >
      {/* Background SVG vector texture & light arcs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-90 mix-blend-screen">
        <img
          src="/assets/YpA3FeRkDtKfdjuRHhZkSgjzA.svg"
          alt="hero-texture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-[10%] left-[25%] w-[450px] h-[450px] bg-[#6d55e2]/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[15%] right-[20%] w-[400px] h-[400px] bg-[#a855f7]/25 rounded-full blur-[100px] pointer-events-none" />

      {/* ══════════════════════════════════════════════════════════════
          HERO 3D VISUAL STACK (Phone, Cards, Glass Panels)
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center min-h-[420px] sm:min-h-[480px] md:min-h-[540px] my-auto mt-2">
        
        {/* Large Rounded Frosted Glass Card (Behind Phone) */}
        <div className="absolute w-[85%] max-w-[780px] h-[340px] sm:h-[400px] md:h-[440px] rounded-[48px] border border-white/40 bg-white/20 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.06)] z-0" />

        {/* Behind Left Card: Card details preview */}
        <motion.div
          style={{ y: cardLeftY }}
          animate={{
            x: mousePos.x * -0.6 - 190,
            y: mousePos.y * -0.6 - 50,
            rotate: -35,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="absolute z-10 w-[180px] sm:w-[220px] md:w-[260px] pointer-events-none hidden sm:block"
        >
          <img
            src="/assets/vjfNXT3YtLcFhZPYvUQA52BP4o.png"
            alt="Card preview"
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Behind Right Card */}
        <motion.div
          style={{ y: cardRightY }}
          animate={{
            x: mousePos.x * 0.6 + 190,
            y: mousePos.y * -0.6 - 60,
            rotate: -15,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="absolute z-10 w-[200px] sm:w-[240px] md:w-[280px] pointer-events-none hidden sm:block"
        >
          <img
            src="/assets/OBaLn3NhNxon0JBcph43NiC8nw.png"
            alt="Card preview"
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Center High-Res 3D iPhone Mockup */}
        <motion.div
          style={{ y: phoneY }}
          animate={{
            rotateY: mousePos.x * 0.4,
            rotateX: mousePos.y * -0.4,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative z-20 w-[260px] sm:w-[320px] md:w-[370px] lg:w-[410px] drop-shadow-[0_35px_80px_rgba(20,10,80,0.38)]"
        >
          <img
            src="/assets/z9IXBYMYvb7NP5mQUyhfjrNGNIM.png"
            alt="OneFin Phone Mockup"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </motion.div>

        {/* Front Left Data Card: $27,40K /week + Pay Button */}
        <motion.div
          style={{ y: cardLeftY }}
          animate={{
            x: mousePos.x * -1.1 - 95,
            y: mousePos.y * -0.8 + 35,
            rotate: -6,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute z-30 w-[180px] sm:w-[220px] md:w-[250px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
        >
          <img
            src="/assets/LLKlVGCKmbBn9ZfaasOGfBKso.png"
            alt="$27,40K / week Pay"
            className="w-full h-auto select-none pointer-events-none"
          />
        </motion.div>

        {/* Front Right Data Card: Total expense $6,850 + Gradient Bar Chart */}
        <motion.div
          style={{ y: cardRightY }}
          animate={{
            x: mousePos.x * 1.1 + 115,
            y: mousePos.y * -0.8 - 15,
            rotate: 22,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute z-30 w-[180px] sm:w-[220px] md:w-[250px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.2)]"
        >
          <img
            src="/assets/L9o68QoionLOT0n8qVJq2jR8.png"
            alt="Total expense $6,850"
            className="w-full h-auto select-none pointer-events-none"
          />
        </motion.div>

      </div>

      {/* ══════════════════════════════════════════════════════════════
          HERO HEADLINE, SUBTITLE & CTAs (Matching Image 4)
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative z-30 text-center max-w-4xl mx-auto -mt-6 sm:-mt-10 md:-mt-14 w-full">
        
        {/* Main Massive Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h1
            className="font-black text-5xl sm:text-7xl md:text-8xl lg:text-[96px] tracking-[-0.035em] uppercase leading-[0.92]"
            style={{
              color: '#381ac9',
              fontFamily: "'Geist', 'Inter', -apple-system, sans-serif",
            }}
          >
            SMARTER FINANCE
          </h1>
          <h1
            className="font-black text-5xl sm:text-7xl md:text-8xl lg:text-[96px] tracking-[-0.035em] uppercase leading-[0.92] text-[#121214] mt-1"
            style={{
              fontFamily: "'Geist', 'Inter', -apple-system, sans-serif",
            }}
          >
            MADE SIMPLE
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-700 text-sm sm:text-base md:text-lg font-normal max-w-xl mx-auto mt-5 leading-relaxed"
        >
          A complete platform for managing spend, payments, investments, and forecasting—all in one place.
        </motion.p>

        {/* Dual CTA Buttons with Framer Gloss Effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          {/* Primary Button */}
          <a
            href="#pricing"
            className="px-8 py-3.5 rounded-full text-white font-bold text-xs tracking-wide shadow-[0_10px_25px_rgba(56,26,201,0.4),inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-2px_2px_rgb(40,16,155)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            style={{
              background: 'linear-gradient(180deg, #6262fe 0%, #381ac9 100%)',
            }}
          >
            Get started
          </a>

          {/* Secondary Button */}
          <a
            href="#features"
            className="px-8 py-3.5 rounded-full text-white font-bold text-xs tracking-wide shadow-[0_8px_20px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-2px_2px_rgb(0,0,0)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            style={{
              background: 'linear-gradient(180deg, #282828 0%, #060606 100%)',
            }}
          >
            Download now
          </a>
        </motion.div>

        {/* Infinite Scrolling Logoipsum Partner Bar (Matching Image 4) */}
        <div className="w-full mt-14 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#5869e8] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#5869e8] to-transparent z-10 pointer-events-none" />

          <div className="flex items-center gap-12 sm:gap-16 animate-[marquee_25s_linear_infinite] whitespace-nowrap w-max opacity-90">
            {[...logos, ...logos, ...logos].map((src, i) => (
              <div key={i} className="h-7 sm:h-8 flex-shrink-0 flex items-center justify-center">
                <img
                  src={src}
                  alt="Partner logo"
                  className="h-full w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
