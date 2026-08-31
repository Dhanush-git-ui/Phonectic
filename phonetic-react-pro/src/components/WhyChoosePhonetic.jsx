import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { staggerFadeInUp } from '../animations/gsapSetup'

gsap.registerPlugin(ScrollTrigger)

export default function WhyChoosePhonetic() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    if (!sectionRef.current) return

    // Title animation
    gsap.set(titleRef.current, { opacity: 0, y: 24 })
    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
    })

    // Stagger cards animation
    gsap.set(cardsRef.current, { opacity: 0, y: 32 })
    gsap.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    })
  }, [])

  const pillars = [
    {
      title: 'Aptitude Enhancement',
      description: 'Master Quantitative, Logical Reasoning, and Data Interpretation with proven methodologies',
      icon: '📈',
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Technical Mastery',
      description: 'Deep dive into Algorithms, Data Structures, and System Design with hands-on projects',
      icon: '💻',
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Soft Skills',
      description: 'Develop Communication, Group Discussion, and Leadership skills for corporate environments',
      icon: '🎯',
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Interview Prep',
      description: 'Mock interviews, resume building, and HR round preparation from industry experts',
      icon: '🏆',
      color: 'from-blue-500 to-blue-700',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-32 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-16 opacity-0 translate-y-6">
          <div className="inline-block text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-4">
            WHY CHOOSE PHONETIC
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-4">
            Four Pillars of Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive training designed to transform students into industry-ready professionals
          </p>
        </div>

        {/* 4-pillar grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="group relative bg-white rounded-2xl p-8 border border-blue-100 hover:border-blue-400 transition-all duration-500 card-hover cursor-pointer overflow-hidden opacity-0"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-blue-600 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
