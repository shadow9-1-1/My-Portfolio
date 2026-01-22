import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StatsCarousel from './components/StatsCarousel'
import BentoGrid from './components/BentoGrid'
import FullWidthHero from './components/FullWidthHero'
import ScrollIndicator from './components/ScrollIndicator'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Stats Carousel */}
        <StatsCarousel />

        {/* Bento Grid Categories */}
        <BentoGrid />

        {/* Full Width Hero */}
        <FullWidthHero />

        {/* Testimonials */}
        <TestimonialSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  )
}

export default App
