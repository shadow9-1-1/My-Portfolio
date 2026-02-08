import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import { BlurFade } from './Animations';

const Footer = () => {
  const sitePages = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="px-4 sm:px-6 md:px-8 py-6 mt-12 border-t border-slate-200 dark:border-slate-800">
      <BlurFade delay={0.2} duration={0.5}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
            {/* Made with love */}
            <p className="text-sm text-slate-600 dark:text-slate-400 order-2 lg:order-1">
              Made with ❤️ by <span className="font-medium text-slate-900 dark:text-white">Ahmed Wael</span>
            </p>

            {/* Site pages */}
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 order-1 lg:order-2">
              {sitePages.map((page) => (
                <Link
                  key={page.name}
                  to={page.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {page.name}
                </Link>
              ))}
            </nav>

            {/* Social links */}
            <div className="order-3 scale-90 sm:scale-100">
              <SocialIcons className="[&>div]:gap-2 [&_a]:w-8 [&_a]:h-8 [&_a]:shadow-none [&_svg]:w-3.5 [&_svg]:h-3.5" />
            </div>
          </div>
        </div>
      </BlurFade>
    </footer>
  );
};

export default Footer;
