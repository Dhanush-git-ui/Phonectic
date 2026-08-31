import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['home', 'benefits', 'features', 'integrations', 'testimonials', 'pricing', 'blog', 'faq']
      const scrollPos = window.scrollY + 250

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveLink(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#benefits', id: 'benefits' },
    { label: 'Feature', href: '#features', id: 'features' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'Blog', href: '#blog', id: 'blog' },
    { label: 'Careers', href: '#careers', id: 'careers' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    if (href === '#careers') {
      const el = document.getElementById('footer')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      return
    }
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 md:px-14 py-6 transition-all duration-300 pointer-events-none">
      {/* Brand Logo on Left */}
      <a
        href="#home"
        onClick={(e) => handleNavClick(e, '#home')}
        className="pointer-events-auto flex items-center gap-2.5 text-white font-extrabold text-2xl tracking-tight group cursor-pointer"
      >
        {/* Exact OneFin / NEFIN circular 4-quadrant emblem */}
        <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-md transition-transform group-hover:scale-105">
          <svg className="w-5 h-5 text-[#1b1b1f]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
          </svg>
        </div>
        <span className="font-extrabold tracking-tight text-white text-2xl">ONEFIN</span>
      </a>

      {/* Center Translucent Pill Capsule Navigation */}
      <nav className="pointer-events-auto hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1b1b22]/70 backdrop-blur-2xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
        {navLinks.map((link) => {
          const isActive = activeLink === link.id
          return (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-white/20 text-white shadow-sm backdrop-blur-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />}
              {link.label}
            </a>
          )
        })}
      </nav>

      {/* Right Action: White Pill "Contact us" */}
      <div className="pointer-events-auto flex items-center gap-3">
        <a
          href="#pricing"
          onClick={(e) => handleNavClick(e, '#pricing')}
          className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#121214] font-bold text-xs shadow-[0_4px_16px_rgba(0,0,0,0.12),inset_0_-2px_1px_rgba(26,20,51,0.2)] transition-all hover:bg-neutral-100 hover:scale-105 active:scale-95 cursor-pointer"
        >
          Contact us
        </a>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-4 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
          <span className={`w-4 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-0' : 'translate-y-0.5'}`} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="pointer-events-auto absolute top-full left-4 right-4 mt-2 p-4 rounded-3xl bg-[#1b1b22]/95 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, '#pricing')}
            className="mt-2 text-center py-2.5 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-100"
          >
            Contact us
          </a>
        </div>
      )}
    </header>
  )
}
