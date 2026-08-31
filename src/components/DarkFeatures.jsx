import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DarkFeatures() {
  const [invoiceStep, setInvoiceStep] = useState(0)
  const [investStep, setInvestStep] = useState(1) // 0=Performance Tracking, 1=AI-Driven Forecasting, 2=Automated Rebalancing

  return (
    <section id="features" className="relative w-full py-32 px-4 sm:px-6 md:px-12 bg-[#121214] text-white overflow-hidden rounded-[56px] space-y-36">
      
      {/* Ambient background glows */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#6262fe]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#381ac9]/20 rounded-full blur-[160px] pointer-events-none" />

      {/* ══════════════════════════════════════════════════════════════
          PART 1: SECTION 02 KEY FEATURES - INVOICE AUTOMATION
      ══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
          <span className="text-[10px] font-bold text-neutral-400">02</span>
          <span className="text-[11px] font-bold text-[#bebeff] tracking-wider uppercase">KEY FEATURES</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-center tracking-tight text-white uppercase max-w-4xl leading-[1.08]">
          EVERYTHING FINANCE. UNIFIED.
        </h2>

        {/* Subheading */}
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg text-center max-w-2xl mt-4 font-normal leading-relaxed">
          From automated invoicing to multi-currency expense tracking, OneFin consolidates all your tools into a single workflow.
        </p>

        {/* Feature 1: Invoice Automation Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full mt-16 max-w-6xl items-center">
          
          {/* Left Column: Interactive Invoice Mockup */}
          <div className="lg:col-span-7 relative">
            
            {/* Main Invoice Card */}
            <div className="rounded-[36px] bg-[#1a1a20] border border-white/10 p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <div className="text-xs text-neutral-400 font-mono">INVOICE #12406TD12HF54</div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-1">Acme Studio Inc.</div>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-bold text-xs flex items-center gap-1.5">
                  <span>✓</span>
                  <span>Paid</span>
                </div>
              </div>

              {/* Itemized Table */}
              <div className="py-6 space-y-3.5 border-b border-white/10">
                <div className="flex items-center justify-between text-xs text-neutral-400 font-medium">
                  <span>Description</span>
                  <span>Amount</span>
                </div>
                <div className="flex items-center justify-between text-sm text-neutral-200">
                  <span>UI/UX Design System</span>
                  <span className="font-bold text-white">$2,400.00</span>
                </div>
                <div className="flex items-center justify-between text-sm text-neutral-200">
                  <span>Full-Stack Development</span>
                  <span className="font-bold text-white">$1,800.00</span>
                </div>
                <div className="flex items-center justify-between text-sm text-neutral-200">
                  <span>Cloud Infrastructure Setup</span>
                  <span className="font-bold text-white">$450.00</span>
                </div>
              </div>

              {/* Total Row */}
              <div className="pt-6 flex items-center justify-between">
                <span className="text-sm font-bold text-neutral-400">Total Paid</span>
                <span className="text-2xl sm:text-3xl font-black text-white">$4,650.00</span>
              </div>
            </div>

            {/* Floating "Direct pay + $500" Pill Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 sm:-right-6 px-4 py-2 rounded-2xl bg-[#6262fe] border border-white/20 shadow-2xl text-white text-xs font-bold flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>Direct pay + $500</span>
            </motion.div>
          </div>

          {/* Right Column: Copy & Step Switcher */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <div className="text-xs font-bold text-[#bebeff] uppercase tracking-wider">
                01 AUTOMATION
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-2 leading-tight">
                Instant Invoicing & One-Click Client Billing
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base mt-4 leading-relaxed">
                Generate professional, tax-compliant invoices in under 30 seconds. Automate payment reminders and receive instant payouts directly to your OneFin account.
              </p>
            </div>

            {/* Step Selector Pills */}
            <div className="flex items-center gap-3 pt-2">
              {['Auto-Generate', 'Instant Payout'].map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setInvoiceStep(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                    invoiceStep === idx
                      ? 'bg-white text-neutral-950 shadow-lg'
                      : 'bg-white/10 text-neutral-400 hover:text-white'
                  }`}
                >
                  Step {idx + 1}: {s}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ══════════════════════════════════════════════════════════════
          PART 2: INVESTING TOOLS & 3D CURVED CARDS (Matching Image 5)
      ══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 pt-10">
        
        {/* Section Pill Badge (Matching Image 5) */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
          <span className="text-[11px] font-bold text-[#bebeff] tracking-wider uppercase">
            INVESTING TOOLS
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-center tracking-tight text-white max-w-3xl leading-[1.1]">
          Grow your wealth with confidence.
        </h2>

        {/* Subheading */}
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg text-center max-w-2xl mt-4 font-normal leading-relaxed">
          From first-time investors to seasoned savers, get personalized tools that make growing your money simple and smart.
        </p>

        {/* ══════════════════════════════════════════════════════════════
            3D CURVED CARDS CAROUSEL (Matching Image 5)
        ══════════════════════════════════════════════════════════════ */}
        <div className="relative w-full max-w-6xl mt-20 flex items-center justify-center min-h-[520px]">
          
          {/* Card 1: Performance Tracking (Left Card) */}
          <motion.div
            animate={{
              x: investStep === 0 ? 0 : -280,
              y: investStep === 0 ? -20 : 40,
              scale: investStep === 0 ? 1.08 : 0.85,
              rotate: investStep === 0 ? 0 : -14,
              opacity: investStep === 0 ? 1 : 0.45,
              zIndex: investStep === 0 ? 30 : 10,
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onClick={() => setInvestStep(0)}
            className="absolute w-[320px] sm:w-[360px] md:w-[400px] p-6 rounded-[36px] bg-[#1a1a20] border border-white/10 shadow-2xl cursor-pointer flex flex-col justify-between"
          >
            {/* Top Mockup Content */}
            <div className="rounded-2xl bg-neutral-900/90 p-5 border border-white/5">
              <div className="flex items-center justify-between">
                <div className="text-[11px] text-neutral-400">Overall earning</div>
                <div className="flex gap-1">
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">+24%</span>
                </div>
              </div>
              <div className="text-3xl font-black text-white mt-1.5">$4,025.08</div>
              
              <button className="w-full mt-4 py-2 rounded-xl bg-white text-black font-bold text-xs">
                Withdraw
              </button>

              <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/10 text-xs">
                <div>
                  <div className="text-[10px] text-neutral-500">Total Earned</div>
                  <div className="font-bold text-white">$4,200.00</div>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500">Weekly Out</div>
                  <div className="font-bold text-rose-400">-$150.00</div>
                </div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Performance Tracking</h3>
                <span className="text-xs text-neutral-400 font-bold">01</span>
              </div>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Get a real-time overview of your portfolio performance, asset allocation, and market growth.
              </p>
            </div>
          </motion.div>

          {/* Card 2: AI-Driven Forecasting (Center Active Card) */}
          <motion.div
            animate={{
              x: investStep === 1 ? 0 : investStep === 0 ? 280 : -280,
              y: investStep === 1 ? -20 : 40,
              scale: investStep === 1 ? 1.08 : 0.85,
              rotate: investStep === 1 ? 0 : investStep === 0 ? 14 : -14,
              opacity: investStep === 1 ? 1 : 0.45,
              zIndex: investStep === 1 ? 30 : 10,
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onClick={() => setInvestStep(1)}
            className="relative w-[340px] sm:w-[380px] md:w-[420px] p-6 rounded-[36px] bg-[#1a1a20] border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.6)] cursor-pointer flex flex-col justify-between"
          >
            {/* Top Mockup with Lavender Screen */}
            <div className="rounded-3xl p-5 bg-gradient-to-b from-[#c0c7fe] via-[#b4beff] to-[#a5b4fc] text-neutral-900 shadow-inner">
              
              {/* Floating Stock Card */}
              <div className="p-3.5 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg border border-white/60">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-neutral-500">Stock</span>
                  <span className="text-xs font-black text-[#5244e8] bg-indigo-50 px-2 py-0.5 rounded-full">+64%</span>
                </div>
                <div className="text-[10px] text-neutral-600 font-medium mt-1">
                  Your revenue is projected to increase by the end of this month.
                </div>
              </div>

              {/* Bar Chart with $28,450.45 Marker */}
              <div className="mt-5 pt-3 relative">
                <div className="flex items-end justify-between h-24 gap-2 px-2">
                  <div className="w-3 h-10 rounded-full bg-[#5244e8]/40" />
                  <div className="w-3 h-16 rounded-full bg-[#5244e8]/60" />
                  <div className="w-3 h-12 rounded-full bg-[#5244e8]/50" />
                  <div className="w-3 h-20 rounded-full bg-[#5244e8]/80" />
                  <div className="w-3 h-24 rounded-full bg-[#5244e8] relative">
                    <div className="absolute -top-7 -left-7 bg-black text-white text-[9px] font-bold px-2 py-0.5 rounded-md whitespace-nowrap shadow-md">
                      $28,450.45
                    </div>
                  </div>
                  <div className="w-3 h-14 rounded-full bg-[#5244e8]/60" />
                  <div className="w-3 h-18 rounded-full bg-[#5244e8]/70" />
                </div>
                <div className="flex justify-between text-[9px] text-neutral-600 font-semibold mt-2 px-1">
                  <span>Mo</span>
                  <span>Tu</span>
                  <span>We</span>
                  <span>Th</span>
                  <span>Fr</span>
                  <span>Sa</span>
                  <span>Su</span>
                </div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#6262fe] flex items-center justify-center text-white">
                    ✦
                  </div>
                  <h3 className="text-lg font-bold text-white">AI-Driven Forecasting</h3>
                </div>
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                  2
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                Predict future cash flow, spending behavior, and financial trends with intelligent AI-powered projections.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Automated Rebalancing (Right Card) */}
          <motion.div
            animate={{
              x: investStep === 2 ? 0 : 280,
              y: investStep === 2 ? -20 : 40,
              scale: investStep === 2 ? 1.08 : 0.85,
              rotate: investStep === 2 ? 0 : 14,
              opacity: investStep === 2 ? 1 : 0.45,
              zIndex: investStep === 2 ? 30 : 10,
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onClick={() => setInvestStep(2)}
            className="absolute w-[320px] sm:w-[360px] md:w-[400px] p-6 rounded-[36px] bg-[#1a1a20] border border-white/10 shadow-2xl cursor-pointer flex flex-col justify-between"
          >
            {/* Top Mockup: Allocation Tiles */}
            <div className="rounded-2xl bg-neutral-900/90 p-4 border border-white/5 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30">
                  <div className="text-[10px] text-amber-300">Real Estate</div>
                  <div className="text-lg font-bold text-white mt-1">22%</div>
                </div>
                <div className="p-3 rounded-xl bg-indigo-500/15 border border-indigo-500/30">
                  <div className="text-[10px] text-indigo-300">Stocks</div>
                  <div className="text-lg font-bold text-white mt-1">38%</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-white/5">
                  <div className="text-[9px] text-neutral-400">Debt</div>
                  <div className="text-xs font-bold text-white">15%</div>
                </div>
                <div className="p-2 rounded-lg bg-white/5">
                  <div className="text-[9px] text-neutral-400">Bonds</div>
                  <div className="text-xs font-bold text-white">15%</div>
                </div>
                <div className="p-2 rounded-lg bg-white/5">
                  <div className="text-[9px] text-neutral-400">Crypto</div>
                  <div className="text-xs font-bold text-white">15%</div>
                </div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Automated Rebalancing</h3>
                <span className="text-xs text-neutral-400 font-bold">03</span>
              </div>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Keep your target risk level optimized automatically with hands-free portfolio balancing.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Step Switcher Controls */}
        <div className="flex items-center gap-3 mt-10 z-20">
          {['Performance', 'AI Forecast', 'Rebalancing'].map((label, idx) => (
            <button
              key={idx}
              onClick={() => setInvestStep(idx)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                investStep === idx
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-white/10 text-neutral-400 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

      </div>

    </section>
  )
}
