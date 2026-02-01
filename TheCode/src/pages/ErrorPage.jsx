import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ErrorPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse"
          style={{ 
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Glitchy 404 */}
        <div className="relative mb-8">
          <h1 
            className="text-[150px] md:text-[200px] font-black text-slate-900/5 leading-none select-none"
            style={{
              transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          >
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <span 
                className="text-6xl md:text-8xl font-black text-slate-900 relative z-10"
                style={{
                  transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)`,
                  transition: 'transform 0.15s ease-out'
                }}
              >
                Oops!
              </span>
              {/* Glitch layers */}
              <span 
                className="absolute top-0 left-0 text-6xl md:text-8xl font-black text-violet-500/50 z-0 animate-glitch-1"
                aria-hidden="true"
              >
                Oops!
              </span>
              <span 
                className="absolute top-0 left-0 text-6xl md:text-8xl font-black text-amber-500/50 z-0 animate-glitch-2"
                aria-hidden="true"
              >
                Oops!
              </span>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">
            Page Not Found
          </h2>
          <p className="text-slate-500 text-lg max-w-md mx-auto">
            Looks like you've ventured into the unknown. The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="group flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-slate-900/20"
          >
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          
          <Link
            to="/contact"
            className="group flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-medium border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 hover:scale-105"
          >
            Report Issue
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Fun interactive element */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-slate-400 text-sm mb-4">Or explore these pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Projects', path: '/projects', icon: '💼' },
              { name: 'About', path: '/about', icon: '👋' },
              { name: 'Contact', path: '/contact', icon: '✉️' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-sm border border-slate-100 hover:border-slate-300 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{item.icon}</span>
                <span className="text-slate-600 text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for glitch animation */}
      <style>{`
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(2px, -2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(-2px, 2px); }
        }
        .animate-glitch-1 {
          animation: glitch-1 0.3s infinite;
        }
        .animate-glitch-2 {
          animation: glitch-2 0.3s infinite;
          animation-delay: 0.15s;
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;
