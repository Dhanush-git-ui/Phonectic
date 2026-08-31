import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctasRef = useRef(null)
  const cardsRef = useRef([])
  const statsRef = useRef(null)

  useEffect(() => {
    if (!heroRef.current) return

    // Hero entrance timeline
    const tl = gsap.timeline()

    // Title animation - word by word reveal
    tl.to(
      titleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      0
    )

    // Subtitle animation
    tl.to(
      subtitleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      0.15
    )

    // CTA buttons animation
    tl.to(
      ctasRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      0.25
    )

    // Floating stat cards animation
    cardsRef.current.forEach((card, index) => {
      gsap.set(card, { opacity: 0, y: 32, x: -16 })
      tl.to(
        card,
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        0.3 + index * 0.1
      )

      // Continuous float animation
      gsap.to(card, {
        y: -12,
        duration: 3 + index * 0.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    })

    // Stats section fade in
    if (statsRef.current) {
      tl.to(
        statsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        0.5
      )
    }
  }, [])

  const stats = [
    { number: '1000+', label: 'Students Trained' },
    { number: '85%', label: 'Success Rate' },
    { number: '50+', label: 'Expert Trainers' },
    { number: '5+', label: 'Years Excellence' },
  ]

  const floatingCards = [
    { icon: '📊', label: '85% Success Rate', delay: 0 },
    { icon: '👥', label: '1000+ Students', delay: 0.1 },
    { icon: '🏆', label: 'Top Placements', delay: 0.2 },
  ]

  return (
    <section className="relative min-h-screen bg-white pt-20 pb-16 overflow-hidden flex items-center justify-center" id="home">
      {/* Background gradient blur elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-ink mb-6 opacity-0 translate-y-8"
            >
              Your Pathway to{' '}
              <span className="text-gradient">Career Success</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl text-gray-600 mb-8 opacity-0 translate-y-8 max-w-xl"
            >
              Master aptitude, reasoning, and technical skills with India's premier placement training institute. Learn from industry experts and get hired by top companies.
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctasRef}
              className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 translate-y-8"
            >
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Start Your Journey
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                Explore Programs
              </button>
            </div>

            {/* Stats strip */}
            <div
              ref={statsRef}
              className="flex flex-wrap gap-6 opacity-0 translate-y-8"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1 h-8 bg-blue-600 rounded-full" />
                  <div>
                    <div className="font-bold text-ink text-lg">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Floating cards */}
          <div className="relative h-96 hidden lg:flex items-center justify-center">
            {floatingCards.map((card, idx) => (
              <div
                key={idx}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="absolute w-48 h-32 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center border border-blue-100 opacity-0"
                style={{
                  left: `${Math.cos((idx / floatingCards.length) * Math.PI * 2) * 120}px`,
                  top: `${Math.sin((idx / floatingCards.length) * Math.PI * 2) * 80}px`,
                }}
              >
                <div className="text-4xl mb-2">{card.icon}</div>
                <div className="text-sm font-semibold text-ink">{card.label}</div>
              </div>
            ))}

            {/* Central dashboard mockup */}
            <div className="absolute w-72 h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-2xl border border-blue-200 p-6 flex flex-col items-center justify-center opacity-40">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-sm font-medium text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
