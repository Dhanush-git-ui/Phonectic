import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FAQ() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)
  const itemsRef = useRef([])

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

    // Items animation
    gsap.set(itemsRef.current, { opacity: 0, y: 24 })
    gsap.to(itemsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    })
  }, [])

  const faqs = [
    {
      question: 'How long does the training program take?',
      answer: 'Our comprehensive training programs typically range from 4-12 weeks depending on the module you choose. We offer flexible scheduling to accommodate your college and other commitments.',
    },
    {
      question: 'Are there different programs for college students and working professionals?',
      answer: '[CONFIRM WITH USER] We offer tailored programs for both segments. Our curriculum is designed specifically for students preparing for placements, competitive exams, and professionals looking to upskill.',
    },
    {
      question: 'What is your success rate?',
      answer: 'We maintain an 85%+ success rate across all our programs. Success is measured by student placements at top companies and performance in competitive exams.',
    },
    {
      question: 'Do you provide mock interviews?',
      answer: 'Yes! Mock interviews are a core part of our training. We conduct real-world simulations of technical and HR rounds with industry professionals.',
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: '[TODO: Confirm guarantee details with Phonetic] We stand behind our training quality. Please contact our team for specific guarantee details.',
    },
    {
      question: 'Can I access materials after the program ends?',
      answer: 'Yes, you get lifetime access to all course materials, recordings, and resources. This allows you to revisit concepts and stay updated with new content.',
    },
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="py-20 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16 opacity-0 translate-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Phonetic Education
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              ref={(el) => (itemsRef.current[idx] = el)}
              className="border border-blue-100 rounded-xl overflow-hidden hover:border-blue-400 transition-all duration-300 opacity-0"
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between bg-white hover:bg-blue-50 transition-colors duration-300 text-left"
              >
                <span className="font-semibold text-ink text-lg">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-blue-600 font-bold transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                >
                  ⌄
                </span>
              </button>

              {/* Answer */}
              {openIndex === idx && (
                <div className="px-6 py-4 sm:px-8 sm:py-5 bg-blue-50 border-t border-blue-100">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}
