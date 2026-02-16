import { useState, useEffect, useRef } from 'react';
import { 
  motion, 
  AnimatePresence, 
  useMotionValue, 
  useTransform,
  useSpring,
  useDragControls
} from 'motion/react';
import { AnimateText } from 'motion-plus-react';

const testimonials = [
  {
    id: 1,
    quote: "The quality exceeded my expectations. Every detail is carefully crafted.",
    author: "Sarah Chen",
    role: "Adventure Photographer",
    avatar: "SC",
    gradient: "from-rose-400 to-orange-300",
  },
  {
    id: 2,
    quote: "Perfect blend of style and functionality. My go-to brand for expeditions.",
    author: "Marcus Rivera",
    role: "Mountain Guide",
    avatar: "MR",
    gradient: "from-blue-400 to-cyan-300",
  },
  {
    id: 3,
    quote: "Sustainable fashion that doesn't compromise on design. Absolutely love it.",
    author: "Emma Thompson",
    role: "Travel Blogger",
    avatar: "ET",
    gradient: "from-violet-400 to-purple-300",
  },
  {
    id: 4,
    quote: "Outstanding craftsmanship and attention to detail. Highly recommended!",
    author: "David Park",
    role: "Wildlife Photographer",
    avatar: "DP",
    gradient: "from-emerald-400 to-teal-300",
  },
  {
    id: 5,
    quote: "The best investment I've made for my outdoor adventures. Simply amazing.",
    author: "Lisa Wong",
    role: "Hiking Enthusiast",
    avatar: "LW",
    gradient: "from-amber-400 to-yellow-300",
  },
];

// Slide variants for entrance/exit animations
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? 45 : -45,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 },
      rotateY: { duration: 0.4 },
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
    rotateY: direction < 0 ? 45 : -45,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    },
  }),
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, isActive }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-150, 150], [5, -5]);
  const rotateY = useTransform(mouseX, [-150, 150], [-5, 5]);
  
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl max-w-2xl mx-auto"
    >
      {/* Decorative gradient blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${testimonial.gradient} blur-3xl`}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br ${testimonial.gradient} blur-3xl`}
      />

      {/* Quote icon */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="absolute top-6 right-6 text-slate-200 dark:text-slate-700"
      >
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </motion.div>

      {/* Stars */}
      <div className="flex gap-1.5 mb-8">
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.1 + i * 0.08,
              type: "spring",
              stiffness: 200,
            }}
            className="w-6 h-6 text-amber-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </motion.svg>
        ))}
      </div>

      {/* Quote */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-slate-700 dark:text-slate-300 text-xl md:text-2xl leading-relaxed relative z-10 font-light"
      >
        "{testimonial.quote}"
      </motion.p>

      {/* Author */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center gap-4 mt-10"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-lg font-bold text-white shadow-xl`}
        >
          {testimonial.avatar}
        </motion.div>
        <div>
          <p className="font-semibold text-lg dark:text-white">{testimonial.author}</p>
          <p className="text-slate-500 dark:text-slate-400">{testimonial.role}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TestimonialSection = () => {
  const [[activeIndex, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const dragControls = useDragControls();
  const containerRef = useRef(null);
  
  // Wrap around index
  const testimonialIndex = ((activeIndex % testimonials.length) + testimonials.length) % testimonials.length;

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setPage(([prev]) => [prev + 1, 1]);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const paginate = (newDirection) => {
    setPage(([prev]) => [prev + newDirection, newDirection]);
    setIsAutoPlaying(false);
    // Resume auto-play after interaction
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index) => {
    const diff = index - testimonialIndex;
    setPage(([prev]) => [prev + diff, diff > 0 ? 1 : -1]);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  // Drag handling
  const handleDragEnd = (_, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      paginate(1);
    } else if (info.offset.x > swipeThreshold) {
      paginate(-1);
    }
  };

  return (
    <section className="px-6 py-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 text-xs text-slate-600 dark:text-slate-300 uppercase tracking-widest bg-slate-100 dark:bg-slate-800 rounded-full mb-4"
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
            className="text-3xl md:text-5xl font-light dark:text-white"
          >
            What Our Customers Say
          </AnimateText>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-500 dark:text-slate-400 mt-4 max-w-md mx-auto"
        >
          Hear from adventurers who trust our products
        </motion.p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-4xl mx-auto" style={{ perspective: 1000 }}>
        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>

        {/* Carousel Container */}
        <div 
          ref={containerRef}
          className="relative h-[420px] md:h-[380px] overflow-hidden"
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragControls={dragControls}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              <TestimonialCard
                testimonial={testimonials[testimonialIndex]}
                isActive={true}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {testimonials.map((testimonial, idx) => (
            <motion.button
              key={testimonial.id}
              onClick={() => goToSlide(idx)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="relative h-3 rounded-full overflow-hidden transition-all duration-300"
              style={{ width: testimonialIndex === idx ? 40 : 12 }}
              aria-label={`Go to testimonial ${idx + 1}`}
            >
              <motion.span
                className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                  testimonialIndex === idx
                    ? `bg-gradient-to-r ${testimonial.gradient}`
                    : 'bg-slate-300 dark:bg-slate-600'
                }`}
              />
              {/* Auto-play progress */}
              {testimonialIndex === idx && isAutoPlaying && (
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute inset-0 bg-white/40 rounded-full origin-left"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Auto-play Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2 px-4 py-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
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

        {/* Keyboard hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-xs text-slate-400 dark:text-slate-500 mt-4"
        >
          Drag or swipe to navigate
        </motion.p>
      </div>
    </section>
  );
};

export default TestimonialSection;
