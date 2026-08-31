import { motion } from 'framer-motion'

export default function Blog() {
  const articles = [
    {
      title: 'The Future of Digital Payments: Trends to Watch in 2026',
      date: 'Jan 6, 2026',
      category: 'Fintech',
      image: '/assets/OmdxxK0MckII0ZhxLp3htbNFHs.png',
      featured: true,
    },
    {
      title: 'Investing for Beginners: How to Build a Resilient Portfolio',
      date: 'Jan 19, 2026',
      category: 'Investing',
      image: '/assets/fbSof4jMf1a0EjECjxpbcWkg.png',
      featured: false,
    },
    {
      title: 'How AI Is Changing Personal Finance Management Forever',
      date: 'Jan 4, 2026',
      category: 'AI & Tech',
      image: '/assets/6CbwTWOUsbOpSNj52T15yRoxGM.png',
      featured: false,
    },
    {
      title: 'How to Create a Budget That Actually Works Without Sacrifice',
      date: 'Jan 5, 2026',
      category: 'Budgeting',
      image: '/assets/5INzhiR9y5rJfQCaOayOHoPOfjg.png',
      featured: false,
    },
  ]

  const featured = articles[0]
  const secondaries = articles.slice(1)

  return (
    <section id="blog" className="relative w-full py-28 px-4 sm:px-6 md:px-12 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200/80 shadow-sm mb-6">
          <span className="text-[10px] font-bold text-neutral-400">06</span>
          <span className="text-[11px] font-bold text-neutral-800 tracking-wider uppercase">BLOG</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-center tracking-tight text-neutral-950 uppercase max-w-3xl leading-[1.08]">
          GROW YOUR KNOWLEDGE.
        </h2>

        {/* Subheading */}
        <p className="text-neutral-600 text-sm sm:text-base md:text-lg text-center max-w-2xl mt-4 font-normal leading-relaxed">
          Stay informed, inspired, and in control with expert advice, practical tips, and the latest fintech insights.
        </p>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full mt-16 max-w-6xl">
          
          {/* Featured Large Article */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 rounded-[36px] bg-[#f5f5f7] border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80"
                }}
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold">
                {featured.category}
              </div>
            </div>

            <div className="p-7">
              <div className="text-xs text-neutral-400 font-semibold">{featured.date}</div>
              <h3 className="text-xl sm:text-2xl font-black text-neutral-950 mt-2 leading-snug group-hover:text-[#5244e8] transition-colors">
                {featured.title}
              </h3>
            </div>
          </motion.div>

          {/* 3 Secondary Cards */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {secondaries.map((post, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-[28px] bg-[#f5f5f7] border border-neutral-200/80 shadow-sm hover:shadow-md transition-all flex items-center gap-5 group cursor-pointer"
              >
                <div className="w-28 sm:w-36 aspect-[4/3] rounded-2xl overflow-hidden flex-shrink-0 bg-neutral-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&auto=format&fit=crop&q=80"
                    }}
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-semibold">
                    <span className="text-[#5244e8] font-bold">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-neutral-950 mt-1 leading-snug group-hover:text-[#5244e8] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* View All Button */}
        <button className="mt-14 px-8 py-3.5 rounded-full bg-[#1b1b1f] hover:bg-black text-white font-semibold text-xs shadow-lg transition-transform active:scale-95">
          View All Articles
        </button>

      </div>
    </section>
  )
}
