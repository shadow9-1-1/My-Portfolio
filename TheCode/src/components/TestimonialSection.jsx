import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimateText } from 'motion-plus-react';

const testimonials = [
  {
    id: 1,
    quote: "The quality exceeded my expectations. Every detail is carefully crafted.",
    author: "Sarah Chen",
    role: "Adventure Photographer",
    avatar: "SC",
    gradient: "from-rose-400 to-orange-300",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=700&fit=crop",
  },
  {
    id: 2,
    quote: "Perfect blend of style and functionality. My go-to brand for expeditions.",
    author: "Marcus Rivera",
    role: "Mountain Guide",
    avatar: "MR",
    gradient: "from-blue-400 to-cyan-300",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=700&fit=crop",
  },
  {
    id: 3,
    quote: "Sustainable fashion that doesn't compromise on design. Absolutely love it.",
    author: "Emma Thompson",
    role: "Travel Blogger",
    avatar: "ET",
    gradient: "from-violet-400 to-purple-300",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=700&fit=crop",
  },
  {
    id: 4,
    quote: "Outstanding craftsmanship and attention to detail. Highly recommended!",
    author: "David Park",
    role: "Wildlife Photographer",
    avatar: "DP",
    gradient: "from-emerald-400 to-teal-300",
    image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=600&h=700&fit=crop",
  },
  {
    id: 5,
    quote: "The best investment I've made for my outdoor adventures. Simply amazing.",
    author: "Lisa Wong",
    role: "Hiking Enthusiast",
    avatar: "LW",
    gradient: "from-amber-400 to-yellow-300",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=700&fit=crop",
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const paginate = (newDirection) => {
    setActiveIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  // Get visible cards (previous, current, next)
  const getCardStyle = (index) => {
    const diff = index - activeIndex;
    const totalItems = testimonials.length;
    
    // Handle wrap-around
    let normalizedDiff = diff;
    if (diff > totalItems / 2) normalizedDiff = diff - totalItems;
    if (diff < -totalItems / 2) normalizedDiff = diff + totalItems;

    const isCenter = normalizedDiff === 0;
    const isLeft = normalizedDiff === -1;
    const isRight = normalizedDiff === 1;
    const isFarLeft = normalizedDiff === -2;
    const isFarRight = normalizedDiff === 2;

    if (isCenter) {
      return {
        x: 0,
        scale: 1,
        rotateY: 0,
        zIndex: 30,
        opacity: 1,
        filter: "brightness(1)",
      };
    } else if (isLeft) {
      return {
        x: -280,
        scale: 0.75,
        rotateY: 45,
        zIndex: 20,
        opacity: 0.7,
        filter: "brightness(0.6)",
      };
    } else if (isRight) {
      return {
        x: 280,
        scale: 0.75,
        rotateY: -45,
        zIndex: 20,
        opacity: 0.7,
        filter: "brightness(0.6)",
      };
    } else if (isFarLeft) {
      return {
        x: -420,
        scale: 0.5,
        rotateY: 60,
        zIndex: 10,
        opacity: 0.3,
        filter: "brightness(0.4)",
      };
    } else if (isFarRight) {
      return {
        x: 420,
        scale: 0.5,
        rotateY: -60,
        zIndex: 10,
        opacity: 0.3,
        filter: "brightness(0.4)",
      };
    } else {
      return {
        x: normalizedDiff > 0 ? 600 : -600,
        scale: 0.3,
        rotateY: normalizedDiff > 0 ? -70 : 70,
        zIndex: 0,
        opacity: 0,
        filter: "brightness(0.3)",
      };
    }
  };

  return (
    <section className="px-6 py-20 overflow-hidden bg-slate-100 dark:bg-black min-h-screen flex flex-col justify-center">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 text-xs text-slate-600 dark:text-slate-300 uppercase tracking-widest bg-white dark:bg-slate-800 rounded-full mb-4"
        >
          Testimonials
        </motion.span>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <AnimateText
            type="word"
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            className="text-3xl md:text-5xl font-light text-slate-900 dark:text-white"
          >
            What Our Customers Say
          </AnimateText>
        </motion.div>
      </div>

      {/* 3D Carousel */}
      <div 
        className="relative h-[500px] md:h-[550px] flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          className="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center text-slate-700 dark:text-white hover:bg-white dark:hover:bg-white/20 transition-colors shadow-lg dark:shadow-none"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          className="absolute right-4 md:right-20 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center text-slate-700 dark:text-white hover:bg-white dark:hover:bg-white/20 transition-colors shadow-lg dark:shadow-none"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>

        {/* Cards Container */}
        <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
          {testimonials.map((testimonial, index) => {
            const style = getCardStyle(index);
            
            return (
              <motion.div
                key={testimonial.id}
                className="absolute w-[280px] h-[380px] md:w-[320px] md:h-[420px] cursor-pointer"
                animate={{
                  x: style.x,
                  scale: style.scale,
                  rotateY: style.rotateY,
                  zIndex: style.zIndex,
                  opacity: style.opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  filter: style.filter,
                }}
                onClick={() => goToSlide(index)}
                whileHover={style.zIndex === 30 ? { scale: 1.02 } : {}}
              >
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 relative">
                  {/* Image */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  
                  {/* Gradient Overlay - with rounded bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-3xl" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 rounded-b-3xl">
                    <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-xs font-bold text-white`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{testimonial.author}</p>
                        <p className="text-white/60 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {testimonials.map((testimonial, idx) => (
          <motion.button
            key={testimonial.id}
            onClick={() => goToSlide(idx)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === idx ? 'w-8 bg-slate-800 dark:bg-white' : 'w-2 bg-slate-400/50 dark:bg-white/30 hover:bg-slate-500 dark:hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center mt-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="flex items-center gap-2 px-4 py-2 text-sm text-slate-500 dark:text-white/50 hover:text-slate-700 dark:hover:text-white/80 transition-colors"
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
        </motion.button>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
