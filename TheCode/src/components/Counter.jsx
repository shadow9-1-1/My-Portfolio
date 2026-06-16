import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export const Counter = ({ 
  value, 
  direction = 'up', 
  delay = 0,
  duration = 1.5,
  className,
  fontSize = 48,
  suffix = ''
}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 200,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === 'down' ? 0 : value);
    }
  }, [motionValue, isInView, direction, value]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Intl.NumberFormat('en-US').format(latest.toFixed(0))}${suffix}`;
      }
    });
  }, [springValue, suffix]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ fontSize: `${fontSize}px` }}
    />
  );
};