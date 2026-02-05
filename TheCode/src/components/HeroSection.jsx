import { useState, useEffect } from 'react';
import SocialIcons from './SocialIcons';
import CVModal from './CVModal';
import { BlurText, BlurFade, SlideIn, MotionBlur } from './Animations';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  
  const roles = [
    'Software Developer',
    'Mobile App Developer',
    'Fullstack Developer',
    'UI/UX Designer',
    'Back-end Developer',
    'Front-end Developer',
  ];
  
  const heroImages = [
    'hero2.png',
    'hero1.png',
    'hero3.png',
  ];

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  // Auto-switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="home" className="px-8 py-4">
      <div className="grid grid-cols-12 gap-8">
        {/* Left Content */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center pt-4">
          <BlurFade delay={0} duration={0.5}>
            <span className="text-sm text-slate-500 mb-6 block">👋 Hello there, I'm</span>
          </BlurFade>
          
          <h1 className="text-[3.5rem] lg:text-[4rem] font-light leading-[1.1] mb-8 tracking-tight">
            <BlurText 
              text="Ahmed&nbsp;Wael" 
              delay={40} 
              animateBy="letters"
              className="inline"
            />
          
            {' '}
            <span className="inline-flex items-center justify-center w-28 h-14 bg-slate-700 rounded-full overflow-hidden mx-1 align-middle">
              {/* Mountain image placeholder */}
              <img 
                src="max.png" 
                alt="Mountain"
                className="w-full h-full object-cover"
              />
            </span>{' '}
            <br />
            <span className="inline-flex items-center text-2xl sm:text-3xl md:text-4xl">
              <span className="text-slate-900">{displayText}</span>
              <span className="w-[2px] h-[1em] bg-slate-900 ml-1 animate-pulse"></span>
            </span>
          </h1>

          <BlurFade delay={0.3} duration={0.6}>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider leading-relaxed mb-8 max-w-sm">
              I design intuitive user experiences and build scalable full-stack applications.
              Bridging UI/UX design with powerful engineering to create digital products that are fast, functional, and user-centered.
            </p>
          </BlurFade>

          <BlurFade delay={0.4} duration={0.5}>
            <button
              onClick={() => setIsCVModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg w-fit"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </button>
          </BlurFade>
        </div>

        {/* Right Content - Hero Image */}
        <SlideIn direction="right" delay={0.2} duration={0.7} className="col-span-12 lg:col-span-7 relative">
          <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-transparent aspect-[5/4] lg:aspect-[4/3]">
            {/* Hero images with transition */}
            {heroImages.map((img, idx) => (
              <img 
                key={img}
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                  idx === currentSlide 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
                src={img} 
                alt={`Hero ${idx + 1}`} 
              />
            ))}

            {/* Slide indicators - left side */}
            <div className="absolute left-2 sm:left-3 md:left-5 top-[15%] flex flex-col gap-2 sm:gap-3 md:gap-5">
              {['01', '02', '03'].map((num, idx) => (
                <button
                  key={num}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-medium transition-all duration-300 ${
                    idx === currentSlide
                      ? 'bg-white text-black shadow-lg scale-110'
                      : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'
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
                    <h3 className="text-sm sm:text-lg md:text-xl font-semibold tracking-wide">My Story</h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 md:mt-1 leading-relaxed">
                      Let me tell you my story
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

      {/* CV Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </section>
  );
};

export default HeroSection;
