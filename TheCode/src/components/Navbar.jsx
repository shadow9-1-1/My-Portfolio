const Navbar = () => {
  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-slate-50/80 backdrop-blur-md">
      {/* Logo */}
      <a href="#" className="text-xl font-bold text-slate-900">
        JD<span className="text-slate-400">.</span>
      </a>

      {/* Center Navigation */}
      <div className="hidden md:flex items-center gap-1 bg-white rounded-full px-2 py-2 shadow-sm">
        {navItems.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              index === 0
                ? 'bg-black text-white'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right CTA */}
      <a 
        href="#contact" 
        className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
      >
        Hire Me
      </a>
    </nav>
  );
};

export default Navbar;
