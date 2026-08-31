import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef(null)
  const columnsRef = useRef([])
  const bottomRef = useRef(null)

  useEffect(() => {
    if (!footerRef.current) return

    // Columns animation
    gsap.set(columnsRef.current, { opacity: 0, y: 24 })
    gsap.to(columnsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 80%',
      },
    })

    // Bottom section
    gsap.set(bottomRef.current, { opacity: 0, y: 16 })
    gsap.to(bottomRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.4,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 80%',
      },
    })
  }, [])

  const footerLinks = {
    Product: [
      { label: 'Programs', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Features', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    Resources: [
      { label: 'Learning Hub', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Support', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Compliance', href: '#' },
    ],
  }

  return (
    <footer
      ref={footerRef}
      className="bg-blue-900 text-blue-100 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-800 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
      </div>

      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Columns */}
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand column */}
            <div
              ref={(el) => (columnsRef.current[0] = el)}
              className="opacity-0"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold text-white">Phonetic</span>
              </div>
              <p className="text-sm text-blue-200 mb-6">
                Your pathway to career success through expert-led training and mentorship.
              </p>
              {/* Social links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors group"
                  title="LinkedIn"
                >
                  <span className="text-blue-200 group-hover:text-white">in</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors group"
                  title="Instagram"
                >
                  <span className="text-blue-200 group-hover:text-white">📷</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors group"
                  title="Twitter"
                >
                  <span className="text-blue-200 group-hover:text-white">𝕏</span>
                </a>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links], idx) => (
              <div
                key={title}
                ref={(el) => (columnsRef.current[idx + 1] = el)}
                className="opacity-0"
              >
                <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-blue-200 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-blue-800" />

          {/* Bottom section */}
          <div
            ref={bottomRef}
            className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-blue-200 opacity-0"
          >
            <div>
              <p>
                © 2026 Phonetic Education. All rights reserved.
              </p>
              <p className="text-xs text-blue-300 mt-1">
                Founded by Santhosh Kumar Ananta | Hyderabad, India
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
