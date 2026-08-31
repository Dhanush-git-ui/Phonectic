import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const sectionRef = useRef(null)
  const carouselRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const testimonials = [
    {
      quote: 'Phonetic transformed my approach to aptitude training. The structured curriculum and personalized mentorship helped me crack my first technical interview.',
      author: '[Student Name]',
      role: 'Placed at Microsoft',
      rating: 5,
    },
    {
      quote: 'The mock interview sessions were incredibly realistic. I felt completely prepared when I walked into my actual interviews.',
      author: '[Student Name]',
      role: 'Placed at Amazon',
      rating: 5,
    },
    {
      quote: 'What impressed me most was the focus on soft skills alongside technical training. It made all the difference in the HR rounds.',
      author: '[Student Name]',
      role: 'Placed at TCS',
      rating: 5,
    },
    {
      quote: 'The expert trainers genuinely care about student success. Every doubt was addressed, and the learning materials were comprehensive.',
      author: '[Student Name]',
      role: 'Placed at Accenture',
      rating: 5,
    },
  ]

  useEffect(() => {
    let interval

    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 6000)
    }

    return () => clearInterval(interval)
  }, [autoPlay, testimonials.length])

  useEffect(() => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: -currentIndex * 100 + '%',
        duration: 0.8,
        ease: 'power2.out',
      })
    }
  }, [currentIndex])

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-32 bg-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Hear from students who transformed their careers with Phonetic
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <div className="flex gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  if (idx === 0) carouselRef.current = el?.parentElement
                }}
                className="w-full flex-shrink-0"
              >
                <div className="bg-white rounded-2xl p-8 sm:p-10 border border-blue-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-lg">⭐</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg sm:text-xl text-ink mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-blue-100 pt-6">
                    <div className="font-semibold text-ink">{testimonial.author}</div>
                    <div className="text-sm text-blue-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx)
                  setAutoPlay(false)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-blue-300 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
