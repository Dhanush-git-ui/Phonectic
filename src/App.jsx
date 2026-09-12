import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Benefits from './components/Benefits.jsx'
import About from './components/About.jsx'
import MarqueeStats from './components/MarqueeStats.jsx'
import DarkFeatures from './components/DarkFeatures.jsx'
import Integrations from './components/Integrations.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import Blog from './components/Blog.jsx'
import FAQ from './components/FAQ.jsx'
import CTASection from './components/CTASection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div
      id="main"
      className="framer-wfFB2 framer-pef12c"
      data-layout-template="true"
      style={{ minHeight: '100vh', width: 'auto' }}
    >
      <div className="framer-1amsqkl-container">
        <div></div>
      </div>
      <Navbar />
      <div
        data-framer-root=""
        className="framer-Tesak framer-bsC2E framer-qHZEM framer-iDV62 framer-skiHn framer-svtWx framer-zw0SP framer-ID2Ug framer-ZZsPj framer-TZPec framer-XVrSL framer-rXNCz framer-JJ5QF framer-72rtr7"
        style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}
      >
        <Hero />
        <Benefits />
        <About />
        <MarqueeStats />
        <DarkFeatures />
        <Integrations />
        <Testimonials />
        <Pricing />
        <Blog />
        <FAQ />
      </div>
      <CTASection />
      <Footer />
    </div>
  )
}
