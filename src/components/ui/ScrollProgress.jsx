import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        transformOrigin: '0% 50%',
        background: 'linear-gradient(90deg, #226138, #8fcba4)',
        zIndex: 100,
      }}
    />
  );
}
