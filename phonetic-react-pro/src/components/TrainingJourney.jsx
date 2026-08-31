import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TrainingJourney() {
  const sectionRef = useRef(null)
  const stepsRef = useRef([])
  const titleRef = useRef(null)

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

    // Stagger steps animation
    gsap.set(stepsRef.current, { opacity: 0, y: 32 })
    gsap.to(stepsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    })
  }, [])

  const steps = [
    {
      number: '01',
      title: 'Skill Assessment',
      description: 'Comprehensive evaluation of your current aptitude, reasoning, and technical skills',
      icon: '📋',
    },
    {
      number: '02',
      title: 'Intensive Training',
      description: 'Structured modules designed by industry experts with real-world applications',
      icon: '🎓',
    },
    {
      number: '03',
      title: 'Mock Interviews',
      description: 'Real-world simulation of technical and HR interviews from top companies',
      icon: '🎤',
    },
    {
      number: '04',
      title: 'Placement Drives',
      description: 'Direct access to hiring partners and placement opportunities',
      icon: '🚀',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-32 bg-blue-900 relative overflow-hidden"
    >
      {/* Background blur elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-800 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-700 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-16 opacity-0 translate-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Training Journey
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            A structured four-step process designed to transform you into a placement-ready professional
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              ref={(el) => (stepsRef.current[idx] = el)}
              className="group relative opacity-0"
            >
              {/* Connection line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 -right-4 w-8 h-1 bg-gradient-to-r from-blue-400 to-transparent" />
              )}

              {/* Step card */}
              <div className="bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-20 rounded-2xl p-8 h-full hover:bg-opacity-10 transition-all duration-500 group-hover:border-opacity-40">
                {/* Step number */}
                <div className="text-6xl font-bold text-blue-400 opacity-20 mb-4 group-hover:opacity-40 transition-opacity">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
