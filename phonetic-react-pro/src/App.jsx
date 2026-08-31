import './styles/tokens.css'
import './index.css'
import { useEffect } from 'react'
import { initLenis } from './animations/gsapSetup'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChoosePhonetic from './components/WhyChoosePhonetic'
import FounderManifesto from './components/FounderManifesto'
import MarqueeStats from './components/MarqueeStats'
import TrainingJourney from './components/TrainingJourney'
import PartnerColleges from './components/PartnerColleges'
import Testimonials from './components/Testimonials'
import TrainingGallery from './components/TrainingGallery'
import FAQ from './components/FAQ'
import AppCTA from './components/AppCTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    initLenis()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyChoosePhonetic />
      <FounderManifesto />
      <MarqueeStats />
      <TrainingJourney />
      <PartnerColleges />
      <Testimonials />
      <TrainingGallery />
      <FAQ />
      <AppCTA />
      <Footer />
    </div>
  )
}

export default App
