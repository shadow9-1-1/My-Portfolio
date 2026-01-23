import SocialIcons from './SocialIcons';

const HeroSection = () => {
  return (
    <section id="home" className="px-6 py-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Content */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
          <span className="text-sm text-slate-500 mb-4">👋 Hello, I'm</span>
          
          <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
            John{' '}
            <span className="inline-block w-24 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full overflow-hidden mx-2">
              {/* Decorative element */}
            </span>{' '}
            Doe
            <br />
            <span className="font-semibold">Full Stack</span>
            <br />
            Developer
          </h1>

          <p className="text-sm text-slate-500 mb-6 max-w-sm leading-relaxed">
            I craft beautiful digital experiences with clean code and modern technologies. 
            Passionate about turning ideas into reality through elegant solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-slate-300 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="col-span-12 lg:col-span-7 relative">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 aspect-[4/5] lg:aspect-[3/4]">
            {/* Placeholder for hero image */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-5xl font-bold text-white">
                  JD
                </div>
                <span className="text-lg">Your Photo Here</span>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {['React', 'Node', 'AWS'].map((tech, idx) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                    idx === 0
                      ? 'bg-white text-black shadow-lg'
                      : 'bg-white/70 text-slate-600'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Social icons */}
            <div className="absolute right-4 top-1/3 flex flex-col gap-3">
              <SocialIcons vertical />
            </div>

            {/* Info card */}
            <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-4 shadow-lg max-w-xs">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Available</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Open for freelance & full-time roles
                  </p>
                </div>
                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Stats card */}
            <div className="absolute bottom-6 left-6 bg-slate-900 rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">5+</p>
                  <p className="text-xs text-slate-400">Years</p>
                </div>
                <div className="w-px h-10 bg-slate-700" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p className="text-xs text-slate-400">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
