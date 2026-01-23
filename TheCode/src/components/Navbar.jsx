const Navbar = () => {
  const navItems = ['Home', 'Products', 'About', 'Contact'];

  return (
    <nav className="flex items-center justify-between px-8 py-6">
      {/* Left Navigation */}
      <div className="flex items-center gap-1 bg-white rounded-full px-2 py-2 shadow-sm">
        {navItems.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              index === 0
                ? 'bg-black text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right CTA */}
      <button className="bg-black text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
        Discover more
      </button>
    </nav>
  );
};

export default Navbar;
