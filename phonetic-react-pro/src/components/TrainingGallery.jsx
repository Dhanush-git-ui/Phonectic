import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TrainingGallery() {
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

    // Cards animation
    gsap.set(cardsRef.current, { opacity: 0, y: 32 })
    gsap.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    })
  }, [])

  const resources = [
    {
      title: 'Complete Aptitude Guide 2024',
      category: 'Guide',
      image: '📚',
      description: 'Comprehensive resource covering quantitative aptitude fundamentals',
      featured: true,
    },
    {
      title: 'Interview Success Stories',
      category: 'Blog',
      image: '📖',
      description: 'Real placements from our top students',
    },
    {
      title: 'Algorithm Masterclass',
      category: 'Course',
      image: '💻',
      description: 'Deep dive into data structures and algorithms',
    },
    {
      title: 'Resume Building Tips',
      category: 'Guide',
      image: '📋',
      description: 'Create a resume that gets noticed by top companies',
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="mb-16 opacity-0 translate-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-4">
            Training Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Comprehensive learning materials and guides to accelerate your preparation
          </p>
        </div>

        {/* Asymmetric grid: 1 large + 3 small */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured card (spans 2 rows on desktop) */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="lg:row-span-2 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 sm:p-10 text-white shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer opacity-0 card-hover overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="text-6xl mb-4">{resources[0].image}</div>
              <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-4">
                {resources[0].category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                {resources[0].title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {resources[0].description}
              </p>
              <button className="mt-6 px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Learn More →
              </button>
            </div>
          </div>

          {/* Smaller cards */}
          {resources.slice(1).map((resource, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx + 1] = el)}
              className="bg-white border border-blue-100 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-500 cursor-pointer opacity-0 card-hover group"
            >
              <div className="text-4xl mb-3">{resource.image}</div>
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full mb-3">
                {resource.category}
              </span>
              <h3 className="font-bold text-ink mb-2 group-hover:text-blue-600 transition-colors">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
