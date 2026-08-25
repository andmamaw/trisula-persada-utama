import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

/**
 * Wraps a single child (typically a button/link) and nudges it toward
 * the cursor within a small radius — a subtle "magnetic" hover feel.
 * No-ops on touch devices and when reduced-motion is requested.
 */
export default function Magnetic({ children, strength = 0.35, className }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  if (reduce || isTouch) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
