import { motion } from 'framer-motion'

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative w-full pt-20 pb-28 px-4 sm:px-6 md:px-12 bg-white text-neutral-900 -mt-10 rounded-t-[56px] z-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Pill Badge (Tilted dark badge matching Image 2) */}
        <div className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-[#1b1b1f] text-white shadow-md mb-6 transform -rotate-2">
          <span className="text-[10px] font-bold text-neutral-400">01</span>
          <span className="text-[11px] font-bold text-white tracking-wider uppercase">BENEFITS</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-center tracking-tight text-neutral-950 uppercase max-w-4xl leading-[1.08]">
          FINANCIAL CONTROL, SIMPLIFIED.
        </h2>

        {/* Subheading */}
        <p className="text-neutral-600 text-sm sm:text-base md:text-lg text-center max-w-2xl mt-4 font-normal leading-relaxed">
          Our platform unites spending, saving, investing, and forecasting — giving you the clarity, control, and confidence to make smarter financial decisions every day.
        </p>

        {/* ══════════════════════════════════════════════════════════════
            4-CARD GRID (Matching Image 2)
        ══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-16 max-w-6xl">
          
          {/* Card 1: Simplify your spend (Donut Chart) */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-[36px] bg-[#f5f5f7] border border-neutral-200/80 p-7 flex flex-col items-center justify-between min-h-[380px] shadow-sm hover:shadow-xl transition-all"
          >
            <div className="relative w-44 h-44 my-auto flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {/* Segment 1: 35% Purple */}
                <circle cx="50" cy="50" r="38" fill="none" stroke="#6262fe" strokeWidth="18" strokeDasharray="83.5 155" strokeDashoffset="0" />
                {/* Segment 2: 28% Cyan */}
                <circle cx="50" cy="50" r="38" fill="none" stroke="#5eead4" strokeWidth="18" strokeDasharray="66.8 172" strokeDashoffset="-86" />
                {/* Segment 3: 19% Blue */}
                <circle cx="50" cy="50" r="38" fill="none" stroke="#3b82f6" strokeWidth="18" strokeDasharray="45.3 193" strokeDashoffset="-155" />
                {/* Segment 4: 12% Dark Slate */}
                <circle cx="50" cy="50" r="38" fill="none" stroke="#334155" strokeWidth="18" strokeDasharray="28.6 210" strokeDashoffset="-203" />
                {/* Center hole */}
                <circle cx="50" cy="50" r="24" fill="#f5f5f7" />
                <circle cx="50" cy="50" r="4" fill="#1b1b1f" />
              </svg>

              {/* Badges */}
              <div className="absolute top-2 right-1 bg-black/60 backdrop-blur-md text-white text-[9px] font-bold px-1.5 py-0.5 rounded">35% 👕</div>
              <div className="absolute bottom-5 right-2 bg-black/60 backdrop-blur-md text-white text-[9px] font-bold px-1.5 py-0.5 rounded">28% 🛍️</div>
              <div className="absolute bottom-1 left-5 bg-black/60 backdrop-blur-md text-white text-[9px] font-bold px-1.5 py-0.5 rounded">19% ☕</div>
              <div className="absolute top-6 left-1 bg-black/60 backdrop-blur-md text-white text-[9px] font-bold px-1.5 py-0.5 rounded">12% 📄</div>
            </div>

            <div className="text-center font-bold text-base text-neutral-900 mt-2">
              Simplify your<br />spend
            </div>
          </motion.div>

          {/* Card 2: Get smart financial action */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-[36px] bg-[#f5f5f7] border border-neutral-200/80 p-7 flex flex-col items-center justify-between min-h-[380px] shadow-sm hover:shadow-xl transition-all"
          >
            <div className="text-center font-bold text-base text-neutral-900">
              Get smart<br />financial action
            </div>

            <div className="flex flex-col items-center gap-3 my-auto">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#6262fe] flex items-center justify-center text-white shadow-md">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 3v18h18" />
                    <path d="M18 9l-5 5-4-4-3 3" />
                  </svg>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#f97316] flex items-center justify-center text-white shadow-md">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="8" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
              </div>

              {/* Upward pointer triangle */}
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-neutral-900" />

              {/* User Avatar */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <img
                  src="/assets/5INzhiR9y5rJfQCaOayOHoPOfjg.png"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="h-4" />
          </motion.div>

          {/* Card 3: Growth your wealth (Photo + $1,802.00) */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-[36px] overflow-hidden relative min-h-[380px] shadow-sm hover:shadow-xl transition-all flex flex-col justify-end p-7 group"
            style={{
              background: 'linear-gradient(180deg, #8198f8 0%, #6366f1 100%)',
            }}
          >
            {/* Background photo of woman with pink glasses */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src="/assets/5INzhiR9y5rJfQCaOayOHoPOfjg.png"
                alt="Growth your wealth"
                className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-transparent to-transparent" />
            </div>

            {/* Price & Tag */}
            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-md">
                $1,802.00
              </div>
              <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/30 backdrop-blur-md border border-emerald-400/40 text-emerald-200 text-xs font-bold shadow-sm">
                <span>📈</span>
                <span>+ 24%</span>
              </div>
              <div className="text-white font-bold text-base mt-4 drop-shadow">
                Growth your wealth
              </div>
            </div>
          </motion.div>

          {/* Card 4: Secure every step (Debit Card UI) */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-[36px] bg-[#f5f5f7] border border-neutral-200/80 p-6 flex flex-col items-center justify-between min-h-[380px] shadow-sm hover:shadow-xl transition-all"
          >
            <div className="text-center font-bold text-base text-neutral-900">
              Secure<br />every step
            </div>

            {/* Shield & Debit Preview */}
            <div className="w-full rounded-2xl bg-white p-4 shadow-md border border-neutral-200/70 my-2">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-red-500/80" />
                  <div className="w-4 h-4 rounded-full bg-amber-500/80 -ml-2.5" />
                  <span className="text-[10px] font-bold text-neutral-700 ml-1">Debit</span>
                </div>
                <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                </div>
              </div>

              <div className="mt-2.5">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] text-neutral-400 font-medium">Current account</div>
                  <span className="text-[9px] bg-neutral-100 text-neutral-700 px-1.5 py-0.5 rounded font-bold">Add +</span>
                </div>
                <div className="text-xs font-extrabold text-neutral-900 mt-0.5">Total balance: $1288.00</div>
              </div>

              <div className="mt-2.5 space-y-1.5 text-[10px]">
                <div className="flex items-center justify-between py-1 px-1.5 rounded bg-neutral-50 text-neutral-600">
                  <span>Spending</span>
                  <span className="font-bold text-neutral-900">$425.64</span>
                </div>
                <div className="flex items-center justify-between py-1 px-1.5 rounded bg-neutral-50 text-neutral-600">
                  <span>Investment</span>
                  <span className="font-bold text-neutral-900">$280.00</span>
                </div>
              </div>
            </div>

            <div className="h-2" />
          </motion.div>

        </div>

      </div>
    </section>
  )
}
