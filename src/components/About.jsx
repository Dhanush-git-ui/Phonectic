import { motion } from 'framer-motion'

export default function About() {
  const icons = [
    // Top right: Pie Chart icon
    {
      id: 1,
      pos: 'top-[8%] right-[22%]',
      anim: { y: [0, -12, 0], rotate: [0, 5, 0] },
      dur: 5.2,
      svg: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 2v9h9c0-4.97-4.03-9-9-9zm-2 2C4.48 4.45 1.05 8.76 2.08 14.15c.78 4.09 4.04 7.35 8.13 8.13 5.39 1.03 9.7-2.4 9.7-6.92v-1.36H9V4z" />
        </svg>
      ),
    },
    // Mid left: Credit Card icon
    {
      id: 2,
      pos: 'top-[34%] left-[12%]',
      anim: { y: [0, 14, 0], rotate: [0, -6, 0] },
      dur: 4.8,
      svg: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="2" y="5" width="20" height="14" rx="3" />
          <line x1="2" y1="10" x2="22" y2="10" />
          <circle cx="6" cy="15" r="1" fill="currentColor" />
        </svg>
      ),
    },
    // Bottom left: Wallet icon
    {
      id: 3,
      pos: 'bottom-[12%] left-[10%]',
      anim: { y: [0, -15, 0], rotate: [0, 8, 0] },
      dur: 5.6,
      svg: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      ),
    },
    // Mid right: Chain / Link icon
    {
      id: 4,
      pos: 'top-[42%] right-[10%]',
      anim: { y: [0, -10, 0], rotate: [0, -7, 0] },
      dur: 4.5,
      svg: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
        </svg>
      ),
    },
    // Bottom right: Bar Chart icon
    {
      id: 5,
      pos: 'bottom-[22%] right-[18%]',
      anim: { y: [0, 12, 0], rotate: [0, 6, 0] },
      dur: 5.1,
      svg: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative w-full py-40 px-6 sm:px-12 md:px-20 bg-white text-neutral-900 overflow-hidden flex items-center justify-center min-h-[580px]">
      
      {/* 5 Floating 3D Rounded Purple App Icons (Matching Image 1) */}
      {icons.map((item) => (
        <motion.div
          key={item.id}
          animate={item.anim}
          transition={{ duration: item.dur, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute ${item.pos} z-10 hidden sm:flex items-center justify-center w-14 h-14 rounded-2xl shadow-[0_15px_30px_rgba(98,98,254,0.35)] cursor-pointer transition-transform hover:scale-110 active:scale-95`}
          style={{
            background: 'linear-gradient(135deg, #6262fe 0%, #4f46e5 100%)',
          }}
        >
          {item.svg}
        </motion.div>
      ))}

      {/* Main Statement Typography with Inline Inset Badges (Matching Image 1) */}
      <div className="max-w-4xl mx-auto text-center relative z-20">
        <p className="text-2xl sm:text-4xl md:text-[44px] lg:text-[48px] font-normal leading-[1.35] tracking-tight text-neutral-950">
          From seamless{' '}
          <span className="inline-flex items-center px-5 py-1.5 rounded-full bg-[#f5f5f7] border border-neutral-200 shadow-sm text-sm sm:text-base font-semibold text-neutral-900 align-middle -translate-y-1">
            Spending
          </span>{' '}
          to confident{' '}
          <span className="inline-flex items-center px-5 py-1.5 rounded-full bg-[#f5f5f7] border border-neutral-200 shadow-sm text-sm sm:text-base font-semibold text-neutral-900 align-middle -translate-y-1">
            Growth
          </span>{' '}
          our platform unites every tool you need to take to charge of your to{' '}
          <span className="inline-flex items-center px-6 py-2 rounded-full bg-[#1b1b1f] text-white shadow-xl text-sm sm:text-base font-semibold align-middle -translate-y-1">
            Financial Future
          </span>{' '}
          — all in one to intuitive, secure space.
        </p>
      </div>
    </section>
  )
}
