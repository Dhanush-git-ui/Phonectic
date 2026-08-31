import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PartnerColleges() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const logosRef = useRef([])

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

    // Stagger logo animation
    gsap.set(logosRef.current, { opacity: 0, scale: 0.8 })
    gsap.to(logosRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.06,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    })
  }, [])

  const colleges = [
    { name: 'Aurora', color: 'from-blue-400 to-blue-600' },
    { name: 'AVN Institute', color: 'from-blue-500 to-blue-700' },
    { name: 'HITAM', color: 'from-blue-400 to-blue-600' },
    { name: 'Krishnaveni', color: 'from-blue-500 to-blue-700' },
    { name: 'Kshetra', color: 'from-blue-400 to-blue-600' },
    { name: 'LJIT', color: 'from-blue-500 to-blue-700' },
  ]

  const companies = [
    'Microsoft',
    'Netflix',
    'Oracle',
    'Salesforce',
    'TCS',
    'Uber',
    'Wipro',
    'Accenture',
    'Adobe',
    'Amazon',
    'Apple',
    'Capgemini',
    'Cisco',
    'Cognizant',
    'Deloitte',
    'Goldman Sachs',
  ]

  return (
    <section ref={sectionRef} className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner Colleges */}
        <div className="mb-20">
          <div ref={titleRef} className="text-center mb-12 opacity-0 translate-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-4">
              Partner Colleges
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by leading educational institutions across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {colleges.map((college, idx) => (
              <div
                key={idx}
                ref={(el) => (logosRef.current[idx] = el)}
                className="group relative aspect-square bg-white rounded-2xl border border-blue-100 hover:border-blue-400 flex items-center justify-center p-4 cursor-pointer transition-all duration-500 card-hover opacity-0"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${college.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                <div className="relative text-center">
                  <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700">
                    {college.name.split(' ')[0][0]}
                  </div>
                  <div className="text-xs text-gray-600 group-hover:text-gray-700 mt-2">
                    {college.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Companies */}
        <div className="border-t border-blue-100 pt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-ink mb-12 text-center">
            Hiring Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
            {companies.map((company, idx) => (
              <div
                key={idx}
                className="group relative bg-blue-50 rounded-lg p-4 flex items-center justify-center text-center hover:bg-blue-100 transition-all duration-300"
              >
                <div className="text-xs sm:text-sm font-semibold text-blue-700 group-hover:text-blue-800">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
