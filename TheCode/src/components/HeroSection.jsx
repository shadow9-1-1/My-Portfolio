import SocialIcons from './SocialIcons';
import { BlurText, BlurFade, SlideIn, MotionBlur } from './Animations';

const HeroSection = () => {
  return (
    <section id="home" className="px-8 py-4">
      <div className="grid grid-cols-12 gap-8">
        {/* Left Content */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center pt-4">
          <BlurFade delay={0} duration={0.5}>
            <span className="text-sm text-slate-500 mb-6 block">Cosmic brand</span>
          </BlurFade>
          
          <h1 className="text-[3.5rem] lg:text-[4rem] font-light leading-[1.1] mb-8 tracking-tight">
            <BlurText 
              text="Annatar" 
              delay={40} 
              animateBy="letters"
              className="inline"
            />
            {' '}
            <span className="inline-flex items-center justify-center w-28 h-14 bg-slate-700 rounded-full overflow-hidden mx-1 align-middle">
              {/* Mountain image placeholder */}
              <svg viewBox="0 0 100 40" className="w-20 h-8 text-slate-400">
                <path d="M0,35 L20,20 L35,28 L55,10 L70,22 L85,8 L100,25 L100,40 L0,40 Z" fill="currentColor" opacity="0.5"/>
                <path d="M0,35 L20,25 L35,30 L55,15 L70,25 L85,12 L100,28" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </span>{' '}
            <BlurText text="forge" delay={40} animateBy="letters" className="inline" />
            <br />
            <BlurText text="in secret elegant" delay={30} className="inline" />
            <br />
            <BlurText text="clothes" delay={40} animateBy="letters" className="inline" />
          </h1>

          <BlurFade delay={0.3} duration={0.6}>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider leading-relaxed mb-8 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              pellentesque libero eget urna pellentesque hendrerit. Cras id
              viverra orci, sed placerat ligula. Aenean mi leo.
            </p>
          </BlurFade>

          <BlurFade delay={0.4} duration={0.5}>
            <a
              href="#discover"
              className="text-sm font-medium underline underline-offset-4 hover:text-slate-600 transition-colors w-fit"
            >
              Discover more
            </a>
          </BlurFade>
        </div>

        {/* Right Content - Hero Image */}
        <SlideIn direction="right" delay={0.2} duration={0.7} className="col-span-12 lg:col-span-7 relative">
          <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-transparent aspect-[5/4] lg:aspect-[4/3]">
            {/* Placeholder for hero image - teal/mint colored person */}
            <img className="absolute inset-0 w-full h-full " src="hero2.png" alt="Hero" />

            {/* Slide indicators - left side */}
            <div className="absolute left-2 sm:left-3 md:left-5 top-[15%] flex flex-col gap-2 sm:gap-3 md:gap-5">
              {['01', '02', '03'].map((num, idx) => (
                <button
                  key={num}
                  className={`w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-medium transition-all ${
                    idx === 0
                      ? 'bg-white text-black shadow-lg'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            {/* Social icons - right side */}
            <div className="absolute right-2 sm:right-3 md:right-5 top-[20%] flex flex-col gap-2 sm:gap-3 md:gap-4 scale-75 sm:scale-90 md:scale-100 origin-top-right">
              <SocialIcons vertical />
            </div>
          </div>

          {/* Info card - bottom right corner, outside hero image */}
          <BlurFade delay={0.6} className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 -right-2 sm:-right-3 md:-right-4 z-10">
            <div className="bg-black rounded-xl md:rounded-2xl p-1 md:p-1.5">
              <div className="bg-white rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 min-w-[120px] sm:min-w-[150px] md:min-w-[180px]">
                <div className="flex items-start justify-between gap-2 md:gap-3">
                  <div>
                    <h3 className="text-sm sm:text-lg md:text-xl font-semibold tracking-wide">EVEREST</h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 md:mt-1 leading-relaxed">
                      April 21, You can climb<br />today
                    </p>
                  </div>
                  <button className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </BlurFade>
        </SlideIn>
      </div>
    </section>
  );
};

export default HeroSection;
