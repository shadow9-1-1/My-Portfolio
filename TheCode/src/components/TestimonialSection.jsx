import { useState, useEffect, useRef, useCallback } from 'react';
import { BlurText, FadeIn, BlurFade } from './Animations';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "The quality exceeded my expectations. Every detail is carefully crafted.",
      author: "Sarah Chen",
      role: "Adventure Photographer",
      avatar: "SC",
      gradient: "from-rose-400 to-orange-300",
    },
    {
      quote: "Perfect blend of style and functionality. My go-to brand for expeditions.",
      author: "Marcus Rivera",
      role: "Mountain Guide",
      avatar: "MR",
      gradient: "from-blue-400 to-cyan-300",
    },
    {
      quote: "Sustainable fashion that doesn't compromise on design. Absolutely love it.",
      author: "Emma Thompson",
      role: "Travel Blogger",
      avatar: "ET",
      gradient: "from-violet-400 to-purple-300",
    },
    {
      quote: "Outstanding craftsmanship and attention to detail. Highly recommended!",
      author: "David Park",
      role: "Wildlife Photographer",
      avatar: "DP",
      gradient: "from-emerald-400 to-teal-300",
    },
    {
      quote: "The best investment I've made for my outdoor adventures. Simply amazing.",
      author: "Lisa Wong",
      role: "Hiking Enthusiast",
      avatar: "LW",
      gradient: "from-amber-400 to-yellow-300",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlaying && !isDragging) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, isDragging, testimonials.length]);

  // Scroll to active testimonial
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / testimonials.length;
      container.scrollTo({
        left: cardWidth * activeIndex,
        behavior: 'smooth',
      });
    }
  }, [activeIndex, testimonials.length]);

  // Drag to scroll handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = () => {
    setIsDragging(false);
    // Snap to nearest card
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / testimonials.length;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(Math.max(0, Math.min(newIndex, testimonials.length - 1)));
    }
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const goToSlide = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="px-6 py-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <FadeIn delay={0} direction="up">
          <span className="inline-block px-4 py-1.5 text-xs text-slate-600 dark:text-slate-300 uppercase tracking-widest bg-slate-100 dark:bg-slate-800 rounded-full mb-4">
            Testimonials
          </span>
        </FadeIn>
        <BlurText
          text="What Our Customers Say"
          className="text-3xl md:text-5xl font-light dark:text-white block"
          animateBy="words"
          delay={80}
        />
        <FadeIn delay={0.3} direction="up">
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-md mx-auto">
            Hear from adventurers who trust our products for their journeys
          </p>
        </FadeIn>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-110 active:scale-95"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-110 active:scale-95"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {testimonials.map((testimonial, idx) => (
            <BlurFade
              key={idx}
              delay={idx * 0.1}
              direction="up"
              className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div
                className={`
                  group relative bg-white dark:bg-slate-900 rounded-3xl p-8 
                  shadow-sm transition-all duration-500 h-full
                  ${activeIndex === idx 
                    ? 'shadow-xl scale-[1.02] ring-2 ring-slate-200 dark:ring-slate-700' 
                    : 'hover:shadow-lg hover:scale-[1.01]'
                  }
                `}
              >
                {/* Decorative gradient blob */}
                <div 
                  className={`
                    absolute -top-20 -right-20 w-40 h-40 rounded-full 
                    bg-gradient-to-br ${testimonial.gradient} opacity-10 
                    blur-3xl transition-opacity duration-500
                    group-hover:opacity-20
                  `}
                />

                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-slate-200 dark:text-slate-700">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Stars with animation */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current transition-transform duration-300"
                      style={{ 
                        transitionDelay: `${i * 50}ms`,
                        transform: activeIndex === idx ? 'scale(1.1)' : 'scale(1)'
                      }}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed text-lg relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <div 
                    className={`
                      w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient}
                      flex items-center justify-center text-sm font-semibold text-white
                      shadow-lg transition-transform duration-300 group-hover:scale-105
                    `}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                  </div>
                </div>

                {/* Active indicator line */}
                <div 
                  className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 h-1 rounded-full 
                    bg-gradient-to-r ${testimonial.gradient} transition-all duration-500
                    ${activeIndex === idx ? 'w-20 opacity-100' : 'w-0 opacity-0'}
                  `}
                />
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((testimonial, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`
                relative h-3 rounded-full transition-all duration-300 overflow-hidden
                ${activeIndex === idx ? 'w-10' : 'w-3 hover:w-5'}
              `}
              aria-label={`Go to testimonial ${idx + 1}`}
            >
              <span 
                className={`
                  absolute inset-0 rounded-full transition-all duration-300
                  ${activeIndex === idx 
                    ? `bg-gradient-to-r ${testimonial.gradient}` 
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }
                `}
              />
              {/* Auto-play progress indicator */}
              {activeIndex === idx && isAutoPlaying && (
                <span 
                  className="absolute inset-0 bg-white/30 rounded-full origin-left"
                  style={{
                    animation: 'progress 4s linear forwards',
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Auto-play toggle */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
          >
            {isAutoPlaying ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
                Pause
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play
              </>
            )}
          </button>
        </div>
      </div>

      {/* CSS for progress animation */}
      <style>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
