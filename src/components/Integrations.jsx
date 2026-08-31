import { motion } from 'framer-motion'

export default function Integrations() {
  const partners = [
    { name: 'Stripe', logo: '💳', category: 'Payments' },
    { name: 'Plaid', logo: '🔗', category: 'Banking' },
    { name: 'Apple Pay', logo: '🍎', category: 'Mobile Wallet' },
    { name: 'Google Pay', logo: '🌐', category: 'Checkout' },
    { name: 'Revolut', logo: '⚡', category: 'Global Transfer' },
    { name: 'Visa', logo: '✨', category: 'Cards' },
    { name: 'Mastercard', logo: '🟠', category: 'Network' },
    { name: 'Wise', logo: '🌍', category: 'Forex' },
    { name: 'PayPal', logo: '🅿️', category: 'Digital Pay' },
    { name: 'Coinbase', logo: '🪙', category: 'Crypto' },
    { name: 'QuickBooks', logo: '📊', category: 'Accounting' },
    { name: 'Square', logo: '⬛', category: 'POS Terminal' },
  ]

  return (
    <section id="integrations" className="relative w-full py-28 px-4 sm:px-6 md:px-12 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200/80 shadow-sm mb-6">
          <span className="text-[10px] font-bold text-neutral-400">03</span>
          <span className="text-[11px] font-bold text-neutral-800 tracking-wider uppercase">INTEGRATIONS</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-center tracking-tight text-neutral-950 uppercase max-w-4xl leading-[1.08]">
          SEAMLESS INTEGRATIONS FOR A SEAMLESS FINANCIAL LIFE.
        </h2>

        {/* Subheading */}
        <p className="text-neutral-600 text-sm sm:text-base md:text-lg text-center max-w-2xl mt-4 font-normal leading-relaxed">
          Connect your favorite banks, wallets, and finance tools in seconds for a truly unified financial experience.
        </p>

        {/* Partner Logos Orbit / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full mt-16">
          {partners.map((p, idx) => (
            <motion.div
              key={p.name}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-[#f5f5f7] border border-neutral-200/60 shadow-sm hover:shadow-md hover:border-[#6262fe]/40 transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {p.logo}
              </div>
              <div className="font-bold text-sm text-neutral-900">{p.name}</div>
              <div className="text-[10px] text-neutral-400 font-medium mt-0.5">{p.category}</div>
            </motion.div>
          ))}
        </div>

        {/* Phone Mockup Showing Live Integration */}
        <div className="w-full max-w-3xl mt-16 p-8 rounded-[36px] bg-gradient-to-b from-[#f3f4fd] to-[#d8dcfe] border border-neutral-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-xs font-bold text-[#5244e8] uppercase tracking-wider">Sync in 60 Seconds</div>
            <h3 className="text-2xl font-black text-neutral-900 mt-1">One-Click Bank Link</h3>
            <p className="text-neutral-600 text-xs sm:text-sm mt-2 max-w-md leading-relaxed">
              Authenticate securely via end-to-end encrypted Plaid & Open Banking APIs. Your credentials are never stored.
            </p>
          </div>
          <button className="px-6 py-3 rounded-full bg-[#1b1b1f] hover:bg-black text-white font-semibold text-xs shadow-lg transition-transform active:scale-95 whitespace-nowrap">
            Explore All 100+ Integrations
          </button>
        </div>

      </div>
    </section>
  )
}
