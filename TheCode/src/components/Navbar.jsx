import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CVModal from './CVModal';
import { SlideDown } from './Animations';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Handle scroll to add background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <SlideDown delay={0.1} duration={0.6} distance={30}>
        <nav className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 relative z-50">
          {/* Mobile Menu Button */}
          <button 
            ref={buttonRef}
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 p-2 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span 
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-white rounded-full px-2 py-2 shadow-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => window.scrollTo(0, 0)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  location.pathname === item.path
                    ? 'bg-black text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setIsCVModalOpen(true)}
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-all text-slate-600 hover:bg-slate-100 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CV
            </button>
          </div>

          {/* Right CTA */}
          <Link 
            to="/contact"
            className="bg-black text-white px-5 py-2.5 md:px-7 md:py-3.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            Discover more
          </Link>
        </nav>
      </SlideDown>

      {/* Mobile Navigation Dropdown - slides from top */}
      <div 
        ref={menuRef}
        className={`lg:hidden absolute left-0 right-0 bg-white shadow-lg z-40 overflow-hidden transition-all duration-400 ease-out ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-4 px-4">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? 'bg-black text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                opacity: isMenuOpen ? 1 : 0,
              }}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsCVModalOpen(true);
              setIsMenuOpen(false);
            }}
            className="px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 text-slate-600 hover:bg-slate-100 flex items-center gap-2"
            style={{
              transitionDelay: isMenuOpen ? `${navItems.length * 50}ms` : '0ms',
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
              opacity: isMenuOpen ? 1 : 0,
            }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </button>
        </div>
      </div>

      {/* CV Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
};

export default Navbar;
