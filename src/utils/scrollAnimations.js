import { useEffect } from 'react'

export function useScrollAnimations() {
  useEffect(() => {
    // 1. Automatically tag section headers, cards, and grid items for Framer scroll reveals
    const revealSelectors = [
      '[data-framer-name="Header"]',
      '[data-framer-name="Heading & Title"]',
      '[data-framer-name="Heading"]',
      '[data-framer-name="SubHead"]',
      '[data-framer-name="Price Card"]',
      '[data-framer-name="Step"]',
      '[data-framer-name="Card"]',
      '[data-framer-name="Testimonial"]',
      '.framer-n789ul',
      '.framer-1dympnd',
      '.framer-1rpbdej',
      '.framer-1u039q2',
      '.framer-1v95j3x',
      '.framer-u51m0c',
      '.framer-1m7420m',
      '.framer-1p5v77a',
      '.framer-157s9wh',
      '.framer-1vy09qj',
      '.framer-1m3j62n'
    ]

    const allRevealTargets = new Set()
    revealSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        // Skip elements inside hero to let Hero handle its custom entrance & parallax
        if (!el.closest('#hero')) {
          allRevealTargets.add(el)
        }
      })
    })

    allRevealTargets.forEach(el => {
      if (!el.classList.contains('framer-scroll-reveal') && 
          !el.classList.contains('framer-reveal-scale') && 
          !el.classList.contains('framer-reveal-left') && 
          !el.classList.contains('framer-reveal-right')) {
        el.classList.add('framer-scroll-reveal')
      }
    })

    // Setup IntersectionObserver for reveal elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in-view')
            // Once revealed, unobserve to maintain stability
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const revealElements = document.querySelectorAll(
      '.framer-scroll-reveal, .framer-reveal-scale, .framer-reveal-left, .framer-reveal-right'
    )
    revealElements.forEach((el) => observer.observe(el))

    // 2. High-performance RAF Parallax ("Scroll by Movement") Loop
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateParallax()
          ticking = false
        })
        ticking = true
      }
    }

    const updateParallax = () => {
      const scrollY = window.scrollY
      const winHeight = window.innerHeight

      // A. Integrations Arched Logo Fan expansion on scroll
      const integrationsSection = document.querySelector('.framer-1r5117f, [data-framer-name="Integrations"]')
      if (integrationsSection) {
        const rect = integrationsSection.getBoundingClientRect()
        if (rect.top < winHeight && rect.bottom > 0) {
          // Progress 0 when top enters viewport, 1 when section center reaches viewport
          const progress = Math.min(Math.max((winHeight - rect.top) / (winHeight + rect.height * 0.5), 0), 1)
          const logos = integrationsSection.querySelectorAll('.framer-19i96k, .framer-18kgh6u, .framer-1ug35de, .framer-1yw7i64, .framer-1f3sf0s, .framer-92sp21')
          logos.forEach((logo, idx) => {
            const spreadFactor = (idx - 2.5) * 12
            const targetX = spreadFactor * progress
            const targetRotate = (idx - 2.5) * 4 * progress
            logo.style.transform = `translateX(${targetX}px) rotate(${targetRotate}deg)`
            logo.style.transition = 'transform 0.15s ease-out'
          })
        }
      }

      // B. CTA Section Rising Phone & Floating Badges Parallax
      const ctaSection = document.querySelector('.framer-1m7420m, [data-framer-name="CTA"]')
      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect()
        if (rect.top < winHeight + 200 && rect.bottom > 0) {
          const progress = Math.min(Math.max((winHeight - rect.top) / (winHeight + rect.height), 0), 1)
          
          // Phone rises from below
          const ctaPhone = ctaSection.querySelector('.framer-1eicwsq')
          if (ctaPhone) {
            const translateY = (1 - progress) * 80
            ctaPhone.style.transform = `translateY(${translateY}px)`
            ctaPhone.style.transition = 'transform 0.1s ease-out'
          }

          // Floating social badges sway on scroll
          const socialBadges = ctaSection.querySelectorAll('.framer-1v95j3x, .framer-1u039q2')
          socialBadges.forEach((badge, idx) => {
            const dir = idx % 2 === 0 ? 1 : -1
            const badgeY = (progress - 0.5) * 30 * dir
            badge.style.transform = `translate3d(0, ${badgeY}px, 0)`
            badge.style.transition = 'transform 0.15s ease-out'
          })
        }
      }

      // C. Generic [data-parallax-speed] elements
      const parallaxEls = document.querySelectorAll('[data-parallax-speed]')
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0.1
        const rect = el.getBoundingClientRect()
        if (rect.top < winHeight + 100 && rect.bottom > -100) {
          const deltaY = (rect.top + rect.height / 2 - winHeight / 2) * speed
          el.style.transform = `translate3d(0, ${-deltaY}px, 0)`
        }
      })
    }

    // Trigger initial calculation
    updateParallax()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])
}
