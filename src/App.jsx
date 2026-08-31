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
    <div className="min-h-screen bg-[#121214] text-white selection:bg-[#6262fe] selection:text-white font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
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
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
