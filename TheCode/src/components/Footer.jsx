import SocialIcons from './SocialIcons';

const Footer = () => {
  const footerLinks = {
    Company: ['About', 'Careers', 'Press', 'Blog'],
    Support: ['Help Center', 'Contact', 'FAQ', 'Shipping'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'Licenses'],
  };

  return (
    <footer className="px-6 py-16 mt-12 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-2xl font-semibold mb-4">Cosmic Brand</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              Crafting timeless pieces for the modern explorer. Quality meets
              adventure in every detail.
            </p>
            <SocialIcons className="[&_a]:bg-slate-800 [&_a]:hover:bg-slate-700 [&_a]:text-white" />
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-6 md:col-span-2">
              <h4 className="font-medium mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-12 md:col-span-4">
            <h4 className="font-medium mb-4">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-800 rounded-full px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Cosmic Brand. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
