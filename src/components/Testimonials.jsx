import { motion } from 'framer-motion'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full py-32 px-4 sm:px-6 md:px-12 bg-[#121214] text-white overflow-hidden rounded-[48px] md:rounded-[64px] my-6">
      
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#381ac9]/30 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
          <span className="text-[10px] font-bold text-neutral-400">04</span>
          <span className="text-[11px] font-bold text-[#bebeff] tracking-wider uppercase">TESTIMONIALS</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-center tracking-tight text-white uppercase max-w-4xl leading-[1.08]">
          TRUSTED BY PROFESSIONALS, LOVED BY EVERYONE.
        </h2>

        {/* Subheading */}
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg text-center max-w-2xl mt-4 font-normal leading-relaxed">
          See how people from every background simplify their finances and reach their goals with our all-in-one app.
        </p>

        {/* Rating Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold text-neutral-300 shadow-sm">
            <span className="text-amber-400 font-bold">★ 4.9 / 5</span>
            <span className="text-neutral-500">(200+ Reviews)</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold text-neutral-300 shadow-sm">
            <span className="text-amber-400 font-bold">★ 4.98 / 5</span>
            <span className="text-neutral-500">(500+ Reviews)</span>
          </div>
        </div>

        {/* Floating Staggered Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-16 max-w-6xl">
          
          {/* Card 1: Dark Glassmorphic */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-7 rounded-[32px] bg-[#1a1a20]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="text-neutral-400 font-serif text-3xl leading-none mb-3">“</div>
              <p className="text-neutral-300 text-sm leading-relaxed italic">
                Security was my biggest concern before switching. Knowing my data is protected with bank-grade encryption gives me complete peace of mind. Now I check my financial dashboard more often than my email!
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
              <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center font-bold text-xs text-white">
                MC
              </div>
              <div>
                <div className="font-bold text-sm text-white">Marcus Chen</div>
                <div className="text-[11px] text-neutral-400">Chief Financial Officer</div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Vibrant Purple Accent Card */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-7 rounded-[32px] bg-gradient-to-br from-[#6832db] to-[#432096] border border-white/20 shadow-2xl flex flex-col justify-between text-white"
          >
            <div>
              <div className="flex items-center gap-1 text-amber-300 text-xs mb-3">
                ★★★★★
              </div>
              <p className="text-white/95 text-sm leading-relaxed italic">
                The budgeting insights helped me save for my first trip abroad. I love how the app gives a gentle nudge before I overspend... it's like having a money coach in my pocket.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/20">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/40 bg-purple-900">
                <img
                  src="/assets/1oAKuabwjNozu5cwZgBQXUdq8.png"
                  alt="Jaron Smith"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
                  }}
                />
              </div>
              <div>
                <div className="font-bold text-sm text-white">Jaron Smith</div>
                <div className="text-[11px] text-purple-200">Digital Marketer</div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Deep Blue Card */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-7 rounded-[32px] bg-[#1a2b5e] border border-white/15 shadow-2xl flex flex-col justify-between text-white"
          >
            <div>
              <div className="flex items-center gap-1 text-amber-300 text-xs mb-3">
                ★★★★★
              </div>
              <p className="text-white/95 text-sm leading-relaxed italic">
                I used to juggle three different apps for budgeting, payments, and investing. Now I do everything in one place, and actually understand where my money comes and goes. Love it!
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/20">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/40 bg-blue-900">
                <img
                  src="/assets/2phuXW9stHbgs2KqeS2qJXecQU.png"
                  alt="Eliza Stone"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
                  }}
                />
              </div>
              <div>
                <div className="font-bold text-sm text-white">Eliza Stone</div>
                <div className="text-[11px] text-blue-200">Freelancer & Creator</div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Clean White Card */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-7 rounded-[32px] bg-white text-neutral-900 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="text-neutral-400 font-serif text-3xl leading-none mb-3">“</div>
              <p className="text-neutral-700 text-sm leading-relaxed italic">
                The automated budgeting and forecast tools are brilliant. I used to manually update spreadsheets — now it's all done instantly. It's like having a personal finance assistant who never sleeps.
              </p>
            </div>
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-neutral-100">
              <div>
                <div className="font-bold text-sm text-neutral-900">Jaron Smith</div>
                <div className="text-[11px] text-neutral-500">Digital Marketer</div>
              </div>
              <div className="text-[10px] font-bold text-[#6262fe] bg-indigo-50 px-2.5 py-1 rounded-md">
                Verified User
              </div>
            </div>
          </motion.div>

          {/* Card 5: Lavender / Light Purple Card */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-7 rounded-[32px] bg-[#d9dcfd] text-neutral-900 shadow-2xl flex flex-col justify-between md:col-span-2 lg:col-span-2"
          >
            <div>
              <div className="flex items-center gap-1 text-amber-500 text-xs mb-3">
                ★★★★★
              </div>
              <p className="text-neutral-900 text-sm sm:text-base leading-relaxed italic font-medium">
                It's not just a finance app — it's a mindset shift. I've paid off two credit cards and started saving consistently for the first time in years. Truly life-changing platform with outstanding security and simplicity.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-neutral-300/60">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-400 bg-neutral-200">
                <img
                  src="/assets/2phuXW9stHbgs2KqeS2qJXecQU.png"
                  alt="Eliza Stone"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
                  }}
                />
              </div>
              <div>
                <div className="font-bold text-sm text-neutral-950">Eliza Stone</div>
                <div className="text-[11px] text-neutral-600">Product Designer</div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
