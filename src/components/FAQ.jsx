import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: 'Is my financial data secure?',
      a: 'Yes. We use bank-grade 256-bit AES encryption and OAuth2 tokens to protect your information. We never store or sell your sensitive financial credentials.',
    },
    {
      q: 'How do I connect my bank accounts or cards?',
      a: 'You can link accounts in seconds via our secure Open Banking and Plaid integrations. Simply choose your financial institution and authenticate directly.',
    },
    {
      q: 'Does it cost anything to use the app?',
      a: 'Our Free plan is 100% free forever and includes real-time spend tracking and 2 connected accounts. You can upgrade to Plus or Premium anytime for advanced AI tools.',
    },
    {
      q: 'What makes this app different from other finance tools?',
      a: 'OneFin unifies spending, digital payments, automated invoicing, and AI investment forecasting into a single cohesive ecosystem, replacing 3-4 separate apps.',
    },
    {
      q: 'Can I use the app internationally?',
      a: 'Yes! We support multi-currency conversion, cross-border accounts, and global payment rails across over 140 countries.',
    },
  ]

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section id="faq" className="relative w-full py-32 px-4 sm:px-6 md:px-12 bg-[#121214] text-white overflow-hidden rounded-[48px] md:rounded-[64px] my-6">
      
      {/* Ambient background glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#381ac9]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
          <span className="text-[10px] font-bold text-neutral-400">07</span>
          <span className="text-[11px] font-bold text-[#bebeff] tracking-wider uppercase">FAQ</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-center tracking-tight text-white uppercase max-w-3xl leading-[1.08]">
          GOT QUESTIONS? WE’VE GOT CLEAR ANSWERS.
        </h2>

        {/* Subheading */}
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg text-center max-w-2xl mt-4 font-normal leading-relaxed">
          Everything you need to know about our features, security, and pricing.
        </p>

        {/* Accordion List */}
        <div className="w-full mt-16 space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className={`rounded-[24px] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#1b1b22] border-white/20 shadow-xl'
                    : 'bg-[#18181c] border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all flex-shrink-0 ${
                    isOpen ? 'bg-[#6262fe] text-white rotate-45' : 'bg-white/10 text-neutral-400'
                  }`}>
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 text-sm sm:text-base text-neutral-300 font-normal leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Still Have More Questions? prompt */}
        <div className="text-center mt-16 text-xs sm:text-sm text-neutral-400 font-medium">
          Still have more questions?{' '}
          <a href="#pricing" className="text-[#9696ff] hover:text-white underline font-semibold transition-colors">
            contact us so we can help.
          </a>
        </div>

      </div>
    </section>
  )
}
