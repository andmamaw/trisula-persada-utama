import { motion } from 'framer-motion';

const industries = [
  {
    label: 'Pertambangan & Energi',
    desc: 'Pemetaan area tambang, volume stockpile, dan infrastruktur energi.',
    accent: '#00d4ff',
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <path d="M8 32 L16 18 L24 24 L32 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="18" r="2.5" fill="currentColor" opacity="0.7"/>
        <circle cx="24" cy="24" r="2.5" fill="currentColor" opacity="0.7"/>
        <path d="M6 36 L34 36" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    label: 'Konstruksi & Infrastruktur',
    desc: 'Survei as-built, pengawasan konstruksi, dan as-built drawing.',
    accent: '#00ff7f',
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <rect x="8" y="20" width="24" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <path d="M12 20 L20 10 L28 20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <line x1="20" y1="26" x2="20" y2="32" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="16" y1="26" x2="24" y2="26" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
      </svg>
    ),
  },
  {
    label: 'Pemerintah & Kadaster',
    desc: 'Pemetaan batas wilayah, kadaster tanah, dan data spasial nasional.',
    accent: '#00d4ff',
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <rect x="10" y="14" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <path d="M14 14 L20 8 L26 14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="16" y="24" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="20" y1="24" x2="20" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
  },
  {
    label: 'Pelabuhan & Kelautan',
    desc: 'Bathymetry, navigasi, dan perencanaan infrastruktur pelabuhan.',
    accent: '#3b82f6',
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <path d="M8 24 Q14 18 20 24 Q26 30 32 24" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M8 28 Q14 22 20 28 Q26 34 32 28" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4"/>
        <path d="M18 24 L18 12 L26 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="20" y1="8" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Minyak, Gas & Pipa',
    desc: 'Pipeline route survey, alignment sheet, dan deformasi jalur pipa.',
    accent: '#f59e0b',
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <path d="M8 20 L14 20 Q16 20 16 22 L16 26 Q16 28 18 28 L22 28 Q24 28 24 26 L24 22 Q24 20 26 20 L32 20" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <circle cx="8" cy="20" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <circle cx="32" cy="20" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <line x1="8" y1="16" x2="8" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
        <line x1="32" y1="16" x2="32" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
  },
  {
    label: 'Kehutanan & Lingkungan',
    desc: 'Inventarisasi hutan, monitoring perubahan lahan, dan REDD+.',
    accent: '#00ff7f',
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <path d="M20 8 L27 20 L23 20 L28 30 L12 30 L17 20 L13 20 Z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
        <line x1="20" y1="30" x2="20" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Pertanian & Ketahanan Pangan',
    desc: 'Pemetaan lahan pertanian, irigasi, dan analisis NDVI untuk produktivitas.',
    accent: '#00d4ff',
    icon: (
      <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
        <path d="M10 30 Q14 18 20 16 Q26 14 30 22" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M20 16 Q22 24 20 30" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6"/>
        <circle cx="20" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5"/>
        <line x1="10" y1="30" x2="30" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function IndustrySection() {
  return (
    <section
      id="industri"
      className="section-card relative overflow-hidden"
      style={{ background: '#04080f', zIndex: 6 }}
    >
      <div className="absolute inset-0 topo opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px]" style={{ background: '#00d4ff' }}/>
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: 'rgba(0,212,255,0.6)' }}>
              Industri
            </span>
            <div className="w-8 h-[1px]" style={{ background: '#00d4ff' }}/>
          </div>
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', color: '#fff' }}
          >
            Industri yang Kami <span className="text-glow-cyan">Layani</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="glass glass-hover rounded-2xl p-5 sm:p-6 group cursor-default relative overflow-hidden"
            >
              {/* Corner glow on hover */}
              <div
                className="absolute -top-10 -right-10 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: ind.accent }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                style={{ background: `${ind.accent}10`, color: ind.accent, border: `1px solid ${ind.accent}22` }}
              >
                {ind.icon}
              </div>
              <h3 className="font-display font-semibold text-sm mb-1.5 leading-snug" style={{ color: '#fff' }}>
                {ind.label}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.32)' }}>
                {ind.desc}
              </p>

              {/* Bottom accent on hover */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, ${ind.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
