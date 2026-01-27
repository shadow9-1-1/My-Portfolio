import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform, useInView, AnimatePresence } from 'framer-motion';

/**
 * BlurText - Animates text with blur and fade effect (ReactBits style)
 */
export const BlurText = ({ 
  text, 
  animateBy = 'words', 
  direction = 'top',
  delay = 50,
  stepDuration = 0.4,
  threshold = 0.1,
  className = '',
  as: Component = 'span'
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold, rootMargin: '0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, hasAnimated]);

  const items = animateBy === 'words' ? text.split(' ') : text.split('');

  return (
    <Component ref={containerRef} className={className}>
      {items.map((item, index) => (
        <span
          key={index}
          className="inline-block transition-all"
          style={{
            transitionProperty: 'opacity, filter, transform',
            transitionDuration: `${stepDuration}s`,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: isVisible ? `${index * delay}ms` : '0ms',
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? 'blur(0px)' : 'blur(10px)',
            transform: isVisible 
              ? 'translateY(0)' 
              : direction === 'top' 
                ? 'translateY(-20px)' 
                : 'translateY(20px)',
          }}
        >
          {item}{animateBy === 'words' ? '\u00A0' : ''}
        </span>
      ))}
    </Component>
  );
};

/**
 * FadeIn - Simple fade in animation on scroll
 */
export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  threshold = 0.1,
  className = '',
  direction = 'up', // 'up', 'down', 'left', 'right', 'none'
  distance = 30
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, hasAnimated]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return `translateY(${distance}px)`;
        case 'down': return `translateY(-${distance}px)`;
        case 'left': return `translateX(${distance}px)`;
        case 'right': return `translateX(-${distance}px)`;
        default: return 'none';
      }
    }
    return 'translate(0, 0)';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

/**
 * BlurFade - Combines blur and fade effect (like ReactBits)
 */
export const BlurFade = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  blur = 10,
  threshold = 0.1,
  className = '',
  direction = 'up',
  distance = 30
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, hasAnimated]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return `translateY(${distance}px)`;
        case 'down': return `translateY(-${distance}px)`;
        case 'left': return `translateX(${distance}px)`;
        case 'right': return `translateX(-${distance}px)`;
        default: return 'none';
      }
    }
    return 'translate(0, 0)';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : `blur(${blur}px)`,
        transform: getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, filter ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

/**
 * StaggerContainer - Staggers children animations
 */
export const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.1,
  threshold = 0.1,
  className = ''
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, hasAnimated]);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <div
              key={index}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                filter: isVisible ? 'blur(0px)' : 'blur(5px)',
                transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * staggerDelay}s`,
              }}
            >
              {child}
            </div>
          ))
        : children
      }
    </div>
  );
};

/**
 * ScaleIn - Scale animation on scroll
 */
export const ScaleIn = ({ 
  children, 
  delay = 0, 
  duration = 0.5,
  threshold = 0.1,
  className = '',
  initialScale = 0.9
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, hasAnimated]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : `scale(${initialScale})`,
        transition: `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

/**
 * SlideIn - Slide animation from any direction
 */
export const SlideIn = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  threshold = 0.1,
  className = '',
  direction = 'left', // 'left', 'right', 'top', 'bottom'
  distance = 50
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, hasAnimated]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'left': return `translateX(-${distance}px)`;
        case 'right': return `translateX(${distance}px)`;
        case 'top': return `translateY(-${distance}px)`;
        case 'bottom': return `translateY(${distance}px)`;
        default: return 'none';
      }
    }
    return 'translate(0, 0)';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

/**
 * RevealText - Character by character reveal animation
 */
export const RevealText = ({ 
  text,
  delay = 20,
  duration = 0.3,
  threshold = 0.1,
  className = '',
  as: Component = 'span'
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, hasAnimated]);

  return (
    <Component ref={ref} className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) rotateX(0)' : 'translateY(20px) rotateX(-90deg)',
            transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${index * delay}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Component>
  );
};

/**
 * CountUp - Animated number counter
 */
export const CountUp = ({ 
  end, 
  start = 0,
  duration = 2,
  suffix = '',
  prefix = '',
  threshold = 0.1,
  className = ''
}) => {
  const ref = useRef(null);
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const startTime = performance.now();
          const animate = (currentTime) => {
            const elapsed = (currentTime - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(start + (end - start) * easeOut);
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, start, duration, threshold, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

/**
 * SlideDown - Slide down animation (useful for navbar)
 */
export const SlideDown = ({ 
  children, 
  delay = 0, 
  duration = 0.5,
  distance = 20,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : `translateY(-${distance}px)`,
        transition: `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    >
      {children}
    </div>
  );
};

/**
 * Counter - Animated rolling digit counter using framer-motion
 */
const CounterNumber = ({ mv, number, height }) => {
  const y = useTransform(mv, latest => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });

  return (
    <motion.span 
      style={{ 
        y,
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {number}
    </motion.span>
  );
};

const CounterDigit = ({ place, value, height }) => {
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace, {
    stiffness: 100,
    damping: 30
  });

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <span 
      className="relative inline-flex overflow-hidden" 
      style={{ 
        height, 
        width: '1ch',
        fontVariantNumeric: 'tabular-nums'
      }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <CounterNumber key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </span>
  );
};

export const Counter = ({
  value = 0,
  fontSize = 36,
  padding = 0,
  gap = 2,
  suffix = '',
  prefix = '',
  threshold = 0.1,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const height = fontSize + padding;
  const safeValue = typeof value === 'number' ? value : 0;

  const places = [...safeValue.toString()].map((_, i, a) => {
    return 10 ** (a.length - i - 1);
  });

  return (
    <span ref={ref} className={className} style={{ display: 'inline-flex', alignItems: 'center' }}>
      {prefix}
      <span style={{ fontSize, display: 'flex', gap, lineHeight: 1 }}>
        {places.map((place, idx) => (
          <CounterDigit 
            key={idx} 
            place={place} 
            value={isInView ? safeValue : 0} 
            height={height} 
          />
        ))}
      </span>
      {suffix}
    </span>
  );
};

/**
 * MotionFadeIn - Framer Motion based fade in
 */
export const MotionFadeIn = ({ 
  children, 
  delay = 0,
  duration = 0.5,
  direction = 'up',
  distance = 30,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: distance };
      case 'down': return { opacity: 0, y: -distance };
      case 'left': return { opacity: 0, x: distance };
      case 'right': return { opacity: 0, x: -distance };
      default: return { opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitial()}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

/**
 * MotionScale - Framer Motion scale animation
 */
export const MotionScale = ({ 
  children, 
  delay = 0,
  duration = 0.5,
  initialScale = 0.8,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: initialScale }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: initialScale }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

/**
 * MotionStagger - Staggered children animation
 */
export const MotionStagger = ({ 
  children, 
  staggerDelay = 0.1,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={itemVariants}>{children}</motion.div>
      }
    </motion.div>
  );
};

/**
 * MotionBlur - Blur fade animation with framer-motion
 */
export const MotionBlur = ({ 
  children, 
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 20,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getY = () => direction === 'up' ? distance : direction === 'down' ? -distance : 0;
  const getX = () => direction === 'left' ? distance : direction === 'right' ? -distance : 0;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: getY(), x: getX(), filter: 'blur(10px)' }}
      animate={isInView 
        ? { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' } 
        : { opacity: 0, y: getY(), x: getX(), filter: 'blur(10px)' }
      }
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default {
  BlurText,
  FadeIn,
  BlurFade,
  StaggerContainer,
  ScaleIn,
  SlideIn,
  RevealText,
  CountUp,
  SlideDown,
  Counter,
  MotionFadeIn,
  MotionScale,
  MotionStagger,
  MotionBlur
};
