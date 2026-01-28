import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SlideDown } from './Animations';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

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
    <div className="relative">
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
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  location.pathname === item.path
                    ? 'bg-black text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
