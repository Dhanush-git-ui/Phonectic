import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative w-full py-36 px-4 sm:px-6 md:px-12 bg-[#121214] text-white overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#6262fe]/25 to-[#28119c]/30 rounded-full blur-[150px] pointer-events-none" />

      {/* Giant Typography Backdrop */}
      <div className="relative z-0 text-center select-none pointer-events-none uppercase font-black tracking-tighter leading-[0.88] opacity-80">
        <div className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] text-white">
          CLARITY.
        </div>
        <div className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] text-neutral-400">
          CONFIDENCE.
        </div>
        <div className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] text-neutral-700">
          CONTROL.
        </div>
      </div>

      {/* Central 3D Phone Mockup with Floating Social Icons */}
      <div className="relative z-10 -mt-28 sm:-mt-44 md:-mt-64 flex flex-col items-center">
        
        {/* The 3D Mockup Box */}
        <div className="relative w-[240px] sm:w-[290px] md:w-[340px] aspect-[9/16] max-h-[460px] rounded-[44px] p-3 bg-gradient-to-b from-neutral-800 to-black border-[5px] border-[#252528] shadow-[0_40px_90px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col items-center justify-center">
          
          {/* Dynamic Island */}
          <div className="absolute top-3 w-20 h-4 rounded-full bg-black z-30" />

          {/* Screen Content: Purple Gradient Sphere */}
          <div className="w-full h-full rounded-[34px] bg-gradient-to-b from-[#7a64f0] via-[#5244e8] to-[#251582] flex items-center justify-center relative overflow-hidden">
            <div className="absolute w-44 h-44 rounded-full border border-white/20" />
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-2xl flex items-center justify-center">
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* 5 Floating Social Badges around Phone */}
        
        {/* YouTube badge */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-6 -left-6 sm:-left-12 z-20"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-red-600 shadow-2xl border border-white/30 flex items-center justify-center text-white">
            <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
        </motion.div>

        {/* X / Twitter badge */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="absolute -top-4 -right-4 sm:-right-10 z-20"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black shadow-2xl border border-white/20 flex items-center justify-center text-white font-extrabold text-xl">
            𝕏
          </div>
        </motion.div>

        {/* Facebook badge */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          className="absolute top-[28%] -left-8 sm:-left-16 z-20"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-600 shadow-2xl border border-white/30 flex items-center justify-center text-white font-bold text-2xl">
            f
          </div>
        </motion.div>

        {/* Instagram badge */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
          className="absolute top-[42%] -right-6 sm:-right-14 z-20"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-2xl border border-white/30 flex items-center justify-center text-white">
            <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </div>
        </motion.div>

        {/* LinkedIn badge */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2.4 }}
          className="absolute bottom-8 -right-8 sm:-right-16 z-20"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0a66c2] shadow-2xl border border-white/30 flex items-center justify-center text-white font-bold text-xl">
            in
          </div>
        </motion.div>

        {/* App Store / Play Store Download Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 z-30">
          <a
            href="#pricing"
            className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-neutral-900/90 hover:bg-black border border-white/15 text-white shadow-xl transition-transform hover:scale-105 active:scale-95"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.9.04-1.99.6-2.64 1.36-.58.67-1.09 1.74-.95 2.78 1.01.08 2.05-.52 2.67-1.27z"/>
            </svg>
            <div className="text-left">
              <div className="text-[9px] uppercase tracking-wider text-neutral-400 font-medium">Download on the</div>
              <div className="text-xs font-bold leading-tight">App Store</div>
            </div>
          </a>

          <a
            href="#pricing"
            className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-neutral-900/90 hover:bg-black border border-white/15 text-white shadow-xl transition-transform hover:scale-105 active:scale-95"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186c-.352-.363-.61-.926-.61-1.636V3.45c0-.71.258-1.273.61-1.636zm11.306 11.306l2.124 2.124-11.83 6.76 9.706-8.884zm0-2.24L5.209 1.996l11.83 6.76-2.124 2.124zm1.536 1.12l3.414 1.95c1.08.617 1.08 1.633 0 2.25l-3.414 1.95-2.03-2.075 2.03-2.075z"/>
            </svg>
            <div className="text-left">
              <div className="text-[9px] uppercase tracking-wider text-neutral-400 font-medium">Get it on</div>
              <div className="text-xs font-bold leading-tight">Google Play</div>
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}
