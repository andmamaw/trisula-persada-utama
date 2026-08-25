import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Subtle 3D tilt + glare on hover, desktop-only. Wraps a card so the
 * existing card className/styles keep working unchanged.
 */
export default function TiltCard({ children, className, style, max = 7 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [max, -max]), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-max, max]), { stiffness: 220, damping: 20 });
  const glareX = useTransform(mx, [0, 1], ['0%', '100%']);
  const glareY = useTransform(my, [0, 1], ['0%', '100%']);

  if (reduce || isTouch) {
    return <div className={className} style={style}>{children}</div>;
  }

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.015, y: -4 }}
      transition={{ scale: { duration: 0.25 }, y: { duration: 0.25 } }}
      style={{ ...style, rotateX, rotateY, transformPerspective: 800 }}
      className={`${className} relative`}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.16), transparent 55%)`
          ),
        }}
      />
    </motion.div>
  );
}
