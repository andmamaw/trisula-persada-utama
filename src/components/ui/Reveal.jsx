import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reusable scroll-reveal wrapper. Keeps every section's entrance
 * animation consistent (fade + rise + tiny blur-in) instead of
 * ad-hoc variants scattered per component.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.65,
  once = true,
  margin = '-60px',
  className,
  as: Tag = motion.div,
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    const El = Tag === motion.div ? 'div' : Tag;
    return <El className={className}>{children}</El>;
  }

  return (
    <Tag
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, margin }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
}
