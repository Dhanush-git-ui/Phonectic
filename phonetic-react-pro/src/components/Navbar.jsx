import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Navbar() {
  const navRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 80) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0)',
        boxShadow: isScrolled
          ? '0 4px 12px rgba(37, 99, 235, 0.12)'
          : '0 0px 0px rgba(37, 99, 235, 0)',
        duration: 0.6,
        ease: 'power2.out',
      })
    }
  }, [isScrolled])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Programs', href: '#programs' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
      style={{
        backdropFilter: 'blur(0px)',
        backgroundColor: 'rgba(255, 255, 255, 0)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="text-xl font-bold text-ink hidden sm:inline">Phonetic</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink hover:text-blue-600 transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:px-4 sm:py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors sm:block">
            Login
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-md hover:shadow-lg">
            Start Free Trial
          </button>
        </div>
      </div>
    </nav>
  )
}
