import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function MarqueeStats() {
  const [activeCard, setActiveCard] = useState(1) // 1 = 2M+ Individual Users

  const stats = [
    {
      num: '01',
      value: '$10B+',
      label: 'Transactions Managed',
      desc: 'Seamless, high-volume processing with enterprise-grade encryption and 99.99% uptime.',
    },
    {
      num: '02',
      value: '2M+',
      label: 'Individual Users',
      desc: 'Managing their money, goals, and investments with clarity and control.',
    },
    {
      num: '03',
      value: '50K+',
      label: 'Active Businesses',
      desc: 'From growing startups to global corporations scaling operations with automated tools.',
    },
  ]

  // Auto-cycle through stats
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % stats.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [stats.length])

  return (
    <section className="relative w-full py-44 bg-white text-neutral-950 overflow-hidden flex flex-col items-center justify-center min-h-[640px]">
      
      {/* ══════════════════════════════════════════════════════════════
          GIANT BACKGROUND MARQUEE TICKER (Matching Image 3)
      ══════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none opacity-90 z-0">
        <div className="flex whitespace-nowrap animate-[marquee_24s_linear_infinite]">
          <span className="text-[100px] sm:text-[150px] md:text-[180px] lg:text-[210px] font-black tracking-tighter uppercase text-neutral-900 mx-6">
            PERFORMANCE. TRUST. LEADERS. PROVEN PERFORMANCE. TRUST. LEADERS.
          </span>
          <span className="text-[100px] sm:text-[150px] md:text-[180px] lg:text-[210px] font-black tracking-tighter uppercase text-neutral-900 mx-6">
            PERFORMANCE. TRUST. LEADERS. PROVEN PERFORMANCE. TRUST. LEADERS.
          </span>
        </div>
      </div>

      {/* Ambient gradient glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#818cf8]/40 to-[#c084fc]/40 rounded-full blur-[100px] pointer-events-none z-10" />

      {/* ══════════════════════════════════════════════════════════════
          CENTER 3D FROSTED GLASS METRIC CARDS STACK (Matching Image 3)
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 w-full max-w-xl mx-auto px-4 flex flex-col items-center justify-center min-h-[380px]">
        
        {/* Behind Top Card (01) */}
        <motion.div
          animate={{
            y: activeCard === 0 ? 0 : -50,
            scale: activeCard === 0 ? 1.05 : 0.9,
            opacity: activeCard === 0 ? 1 : 0.6,
            rotate: activeCard === 0 ? 0 : -4,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          onClick={() => setActiveCard(0)}
          className="absolute top-4 w-[85%] sm:w-[440px] p-6 rounded-[32px] bg-gradient-to-br from-white/80 via-blue-50/70 to-indigo-100/60 backdrop-blur-2xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.1)] cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl font-black text-neutral-900">$10B+</span>
            <span className="text-xs font-bold text-neutral-400">01</span>
          </div>
        </motion.div>

        {/* Center Main Card (02 2M+ Individual Users) */}
        <motion.div
          animate={{
            y: activeCard === 1 ? 0 : activeCard === 0 ? 60 : -40,
            scale: activeCard === 1 ? 1.05 : 0.92,
            opacity: activeCard === 1 ? 1 : 0.65,
            rotate: activeCard === 1 ? -2 : 3,
            zIndex: activeCard === 1 ? 30 : 15,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          onClick={() => setActiveCard(1)}
          className="relative w-[90%] sm:w-[460px] p-8 rounded-[36px] bg-gradient-to-br from-white/95 via-sky-50/85 to-indigo-100/70 backdrop-blur-2xl border border-white/90 shadow-[0_30px_70px_rgba(30,20,90,0.2)] cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl sm:text-5xl font-black text-neutral-950 tracking-tight">
                2M+
              </div>
              <div className="text-sm sm:text-base font-bold text-neutral-800 mt-1">
                Individual Users
              </div>
            </div>
            <div className="text-xs font-bold text-neutral-400 self-start">
              02
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 font-normal mt-6 leading-relaxed">
            Managing their money, goals, and investments with clarity and control.
          </p>
        </motion.div>

        {/* Behind Bottom Card (03) */}
        <motion.div
          animate={{
            y: activeCard === 2 ? 0 : 70,
            scale: activeCard === 2 ? 1.05 : 0.9,
            opacity: activeCard === 2 ? 1 : 0.6,
            rotate: activeCard === 2 ? 0 : 5,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          onClick={() => setActiveCard(2)}
          className="absolute bottom-4 w-[85%] sm:w-[440px] p-6 rounded-[32px] bg-gradient-to-br from-white/80 via-purple-50/70 to-indigo-100/60 backdrop-blur-2xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.1)] cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl font-black text-neutral-900">50K+</span>
            <span className="text-xs font-bold text-neutral-400">03</span>
          </div>
        </motion.div>

      </div>

      {/* Pagination Dots */}
      <div className="flex items-center gap-2 mt-8 z-20">
        {stats.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveCard(i)}
            className={`h-2 rounded-full transition-all ${
              activeCard === i ? 'w-8 bg-[#6262fe]' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
            }`}
          />
        ))}
      </div>

    </section>
  )
}
