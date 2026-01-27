import { Link, useLocation } from 'react-router-dom';
import { SlideDown } from './Animations';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <SlideDown delay={0.1} duration={0.6} distance={30}>
      <nav className="flex items-center justify-between px-8 py-6">
        {/* Left Navigation */}
        <div className="flex items-center gap-1 bg-white rounded-full px-2 py-2 shadow-sm">
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
          className="bg-black text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
        >
          Discover more
        </Link>
      </nav>
    </SlideDown>
  );
};

export default Navbar;
