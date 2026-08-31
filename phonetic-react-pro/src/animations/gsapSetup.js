import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

let lenis = null

export const initLenis = () => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000)
  })

  gsap.set('body', { overscrollBehavior: 'none' })
}

export const getLenis = () => lenis

// Shared easing functions
export const eases = {
  power2Out: 'power2.out',
  power3Out: 'power3.out',
  power4Out: 'power4.out',
  backOut: 'back.out(1.7)',
  elasticOut: 'elastic.out(1, 0.5)',
}

// Scroll-triggered fade+rise animation (universal pattern)
export const fadeInUp = (element, delay = 0) => {
  gsap.set(element, { opacity: 0, y: 24 })
  gsap.to(element, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay,
    ease: eases.power3Out,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 50%',
      markers: false,
    },
  })
}

// Staggered children animation
export const staggerFadeInUp = (parent, staggerDelay = 0.08) => {
  const children = parent.querySelectorAll('[data-animate]')
  gsap.set(children, { opacity: 0, y: 24 })

  gsap.to(children, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: staggerDelay,
    ease: eases.power3Out,
    scrollTrigger: {
      trigger: parent,
      start: 'top 75%',
      end: 'top 45%',
      markers: false,
    },
  })
}

// Number counter animation
export const animateCounter = (element, target, duration = 2) => {
  let isAnimating = false

  const startAnimation = () => {
    if (isAnimating) return
    isAnimating = true

    gsap.to(
      { value: 0 },
      {
        value: target,
        duration,
        ease: eases.power2Out,
        onUpdate: function () {
          element.textContent = Math.floor(this.targets()[0].value)
        },
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
        },
      }
    )
  }

  // Intersection Observer for better performance
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      startAnimation()
      observer.unobserve(element)
    }
  })

  observer.observe(element)
}

// Infinite marquee animation (horizontal looping)
export const createMarquee = (element, speed = 50) => {
  const marqueeContent = element.querySelector('[data-marquee-content]')
  const marqueeInner = marqueeContent.querySelector('div')

  gsap.set(marqueeInner, { x: 0 })

  gsap.to(marqueeInner, {
    x: -marqueeInner.offsetWidth / 2,
    duration: speed,
    ease: 'none',
    repeat: -1,
  })

  // Pause on hover
  element.addEventListener('mouseenter', () => {
    gsap.to(marqueeInner, { paused: true })
  })

  element.addEventListener('mouseleave', () => {
    gsap.to(marqueeInner, { paused: false })
  })
}

// Smooth height transition for accordion
export const animateHeight = (element, targetHeight, duration = 0.4) => {
  gsap.to(element, {
    height: targetHeight,
    opacity: 1,
    duration,
    ease: eases.power2Out,
    overwrite: 'auto',
  })
}

export default { initLenis, getLenis, eases, fadeInUp, staggerFadeInUp, animateCounter, createMarquee, animateHeight }
