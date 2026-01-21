import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StatsCarousel from './components/StatsCarousel'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Stats Carousel */}
        <StatsCarousel />
      </main>
    </div>
  )
}

export default App
