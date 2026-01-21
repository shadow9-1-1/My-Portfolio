import SocialIcons from './SocialIcons';

const HeroSection = () => {
  return (
    <section className="px-6 py-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Content */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
          <span className="text-sm text-slate-500 mb-4">Cosmic brand</span>
          
          <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
            Annatar{' '}
            <span className="inline-block w-24 h-12 bg-slate-700 rounded-full overflow-hidden mx-2">
              {/* Placeholder for mountain image */}
            </span>{' '}
            forge
            <br />
            in secret elegant
            <br />
            clothes
          </h1>

          <p className="text-xs text-slate-500 uppercase tracking-wide mb-6 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pellentesque libero eget urna pellentesque hendrerit. Cras id
            viverra orci, sed placerat ligula. Aenean mi leo.
          </p>

          <a
            href="#discover"
            className="text-sm font-medium underline underline-offset-4 hover:text-slate-600 transition-colors"
          >
            Discover more
          </a>
        </div>

        {/* Right Content - Hero Image */}
        <div className="col-span-12 lg:col-span-7 relative">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 aspect-[4/5] lg:aspect-[3/4]">
            {/* Placeholder for hero image */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
              <span className="text-lg">Hero Image</span>
            </div>

            {/* Slide indicators */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {['01', '02', '03'].map((num, idx) => (
                <button
                  key={num}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                    idx === 0
                      ? 'bg-white text-black shadow-lg'
                      : 'bg-white/50 text-slate-500'
                  }`}
                >
                  {num}
                </button>
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
                  <h3 className="text-xl font-semibold">EVEREST</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    April 21, You can climb today
                  </p>
                </div>
                <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
