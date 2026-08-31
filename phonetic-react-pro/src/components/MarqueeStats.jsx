import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function MarqueeStats() {
  const marqueeRef = useRef(null)

  useEffect(() => {
    if (!marqueeRef.current) return

    const marqueeContent = marqueeRef.current.querySelector('[data-marquee-content]')
    if (!marqueeContent) return

    // Clone content for seamless loop
    const clone = marqueeContent.cloneNode(true)
    marqueeContent.parentElement.appendChild(clone)

    const marqueeWidth = marqueeContent.offsetWidth

    // Infinite marquee animation
    gsap.to('[data-marquee-content]', {
      x: -marqueeWidth,
      duration: 60,
      ease: 'none',
      repeat: -1,
    })

    // Pause on hover
    marqueeRef.current.addEventListener('mouseenter', () => {
      gsap.to('[data-marquee-content]', { paused: true })
    })

    marqueeRef.current.addEventListener('mouseleave', () => {
      gsap.to('[data-marquee-content]', { paused: false })
    })
  }, [])

  const stats = [
    { label: '1000+', value: 'Students Trained' },
    { label: '85%', value: 'Success Rate' },
    { label: '50+', value: 'Expert Trainers' },
    { label: '90%', value: 'Placement Rate' },
    { label: '25+', value: 'Programs' },
    { label: '7+', value: 'Years of Excellence' },
  ]

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-b border-blue-100 overflow-hidden">
      <div
        ref={marqueeRef}
        className="relative w-full"
      >
        <div data-marquee-content className="flex gap-8 sm:gap-16 whitespace-nowrap px-4">
          {stats.concat(stats).map((stat, idx) => (
            <div key={idx} className="flex items-center gap-6 flex-shrink-0">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.value}</div>
              </div>
              <div className="w-px h-12 bg-blue-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
