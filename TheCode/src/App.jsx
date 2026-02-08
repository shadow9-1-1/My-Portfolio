import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import IntroAnimation from './components/IntroAnimation'
import { HomePage, AboutPage, ProjectsPage, ContactPage, ErrorPage } from './pages'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      setShowIntro(true);
      sessionStorage.setItem('hasVisited', 'true');
    } else {
      setContentReady(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setContentReady(true);
  };

  return (
    <ThemeProvider>
      <Router>
        {/* Intro Animation */}
        {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
        
        <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 transition-all duration-300 ${contentReady ? 'opacity-100' : 'opacity-0'}`}>
          <Navbar />
          <main className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
