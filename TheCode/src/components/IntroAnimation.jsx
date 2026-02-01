import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const IntroAnimation = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const overlayRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        onComplete?.();
      }
    });

    // Initial state
    gsap.set([logoRef.current, textRef.current], { 
      opacity: 0, 
      y: 30 
    });
    gsap.set([line1Ref.current, line2Ref.current], { 
      scaleX: 0 
    });

    // Animation sequence
    tl
      // Lines animate in
      .to(line1Ref.current, {
        scaleX: 1,
        duration: 0.6,
        ease: 'power3.inOut'
      })
      .to(line2Ref.current, {
        scaleX: 1,
        duration: 0.6,
        ease: 'power3.inOut'
      }, '-=0.4')
      
      // Logo appears
      .to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.3')
      
      // Text appears
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.4')
      
      // Hold for a moment
      .to({}, { duration: 0.5 })
      
      // Everything fades out and slides up
      .to([logoRef.current, textRef.current], {
        opacity: 0,
        y: -30,
        duration: 0.5,
        ease: 'power3.in',
        stagger: 0.1
      })
      .to([line1Ref.current, line2Ref.current], {
        scaleX: 0,
        duration: 0.4,
        ease: 'power3.in'
      }, '-=0.3')
      
      // Overlay slides away
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut'
      }, '-=0.2');

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] pointer-events-none"
    >
      {/* Main overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center"
      >
        {/* Decorative lines */}
        <div 
          ref={line1Ref}
          className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
        />
        <div 
          ref={line2Ref}
          className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-right"
        />

        {/* Logo/Icon */}
        <div ref={logoRef} className="mb-6">
          <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center">
            {/* <span className="text-3xl font-bold text-slate-900">P</span> */}
            <img src="Shadow.jpg" alt="Logo" className="object-cover w-20 h-20" />
          </div>
        </div>

        {/* Text */}
        <div ref={textRef} className="text-center">
          <h1 className="text-3xl md:text-4xl font-light text-white mb-2">
            Welcome to my Portfolio
          </h1>
          <p className="text-white/60 text-sm tracking-widest uppercase">
            Loading experience...
          </p>
        </div>

        {/* Animated dots */}
        <div className="absolute bottom-20 flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-white/40 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
