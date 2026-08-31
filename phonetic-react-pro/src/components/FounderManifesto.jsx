import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FounderManifesto() {
  const sectionRef = useRef(null)
  const manifestoRef = useRef(null)

  useEffect(() => {
    if (!manifestoRef.current) return

    // Split text into lines for staggered reveal
    const text = manifestoRef.current
    const lines = text.innerText.split('\n')
    text.innerHTML = lines
      .map(
        (line) =>
          `<span class="manifesto-line" style="display: block; overflow: hidden;"><span style="display: block;">${line || '&nbsp;'}</span></span>`
      )
      .join('')

    const lineElements = text.querySelectorAll('.manifesto-line')

    gsap.set(lineElements, { opacity: 0 })
    gsap.to(lineElements, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'center center',
        scrub: 1,
        markers: false,
      },
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-24 sm:py-40 bg-blue-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-800 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-700 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Mission
          </h2>
          <p className="text-blue-200">Since 2018, transforming careers</p>
        </div>

        <div
          ref={manifestoRef}
          className="text-2xl sm:text-3xl leading-relaxed text-white font-light text-center space-y-6"
        >
          Founded in 2018 by Santhosh Kumar Ananta, Phonetic Education was born from a simple vision:
          to bridge the gap in aptitude, reasoning, and technical training for students facing
          competitive exams and placements. We believe that every student deserves access to
          world-class training from industry experts. Our mission is not just to train, but to
          empower. To transform students into confident professionals ready to excel in any
          competitive environment. With 1000+ students trained and an 85% success rate, we're
          proving that structured learning, expert mentorship, and consistent effort create
          unstoppable careers. This is Phonetic's promise: Your pathway to success starts here.
        </div>
      </div>
    </section>
  )
}
