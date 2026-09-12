import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ label, title, desc }) {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-20"
      style={{ background: 'linear-gradient(135deg, #0d2818 0%, #1a4a2e 60%, #123420 100%)' }}
    >
      <div className="absolute inset-0 topo-pattern opacity-70" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10"
      >
        <nav className="flex items-center gap-1.5 mb-5 font-mono text-[11px] tracking-wider uppercase">
          <Link to="/" className="no-underline" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Beranda
          </Link>
          <ChevronRight size={12} style={{ color: 'rgba(255,255,255,0.35)' }} />
          <span style={{ color: '#8fcba4' }}>{label}</span>
        </nav>

        <h1 className="heading-xl text-white mb-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
          {title}
        </h1>

        {desc && (
          <p className="max-w-2xl text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
            {desc}
          </p>
        )}
      </motion.div>
    </section>
  );
}
