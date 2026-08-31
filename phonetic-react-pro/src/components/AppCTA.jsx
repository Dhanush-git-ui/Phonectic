import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AppCTA() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const qrRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Content animation
    gsap.set(contentRef.current, { opacity: 0, y: 32 })
    gsap.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
    })

    // QR code pulse animation
    if (qrRef.current) {
      gsap.to(qrRef.current, {
        boxShadow: [
          '0 0 0 0 rgba(37, 99, 235, 0.7)',
          '0 0 0 15px rgba(37, 99, 235, 0)',
        ],
        duration: 2,
        repeat: -1,
        ease: 'power1.inOut',
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div ref={contentRef} className="opacity-0">
            <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-6">
              Master Aptitude Anytime, Anywhere
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The Phonetic mobile app brings world-class training directly to your pocket. Practice anytime, track progress in real-time, and get expert guidance whenever you need it.
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
                <span className="text-ink font-medium">Offline access to all learning materials</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
                <span className="text-ink font-medium">Personalized learning paths</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
                <span className="text-ink font-medium">Real-time progress tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
                <span className="text-ink font-medium">Push notifications for live sessions</span>
              </div>
            </div>

            {/* App store badges */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                <span className="text-xl">🍎</span>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                <span className="text-xl">▶️</span>
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Currently in beta. Sign up to get early access.
            </p>
          </div>

          {/* Right - QR code */}
          <div className="flex justify-center lg:justify-end">
            <div
              ref={qrRef}
              className="w-64 h-64 bg-white rounded-3xl p-8 shadow-2xl flex items-center justify-center border-4 border-blue-600"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <div className="font-semibold text-ink">Scan to Join</div>
                <div className="text-sm text-gray-600 mt-2">Beta access waitlist</div>
                {/* Placeholder for actual QR code */}
                <div className="mt-4 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
