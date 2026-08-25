import { motion, useReducedMotion } from 'framer-motion';

/**
 * Splits text into words and reveals them with a staggered rise.
 * Reserve for the one or two most important headings per view —
 * not every heading on the page (keeps the "wow" from becoming noise).
 */
export default function TextReveal({ text, delay = 0, className, stagger = 0.045 }) {
  const reduce = useReducedMotion();
  const words = text.split(' ');

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} style={{ display: 'inline' }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
