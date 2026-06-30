import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Akurasi Tinggi',
    desc: 'Data presisi dengan standar mutu terbaik menggunakan peralatan terkalibr dan metode survei terkini.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.8" opacity="0.5"/>
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.8" opacity="0.7"/>
        <circle cx="20" cy="20" r="3" fill="currentColor"/>
        <line x1="20" y1="4" x2="20" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="20" y1="30" x2="20" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="4" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="30" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Teknologi Terkini',
    desc: 'Menggunakan peralatan GNSS RTK, drone LiDAR, Multibeam Echosounder, dan software geodetik terbaru.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect x="6" y="8" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="1.8" opacity="0.5"/>
        <rect x="6" y="12" width="28" height="12" rx="2" fill="currentColor" opacity="0.08"/>
        <line x1="14" y1="32" x2="26" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="20" y1="28" x2="20" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <polyline points="10,20 14,14 18,18 22,12 26,16 30,14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Tim Profesional',
    desc: 'Didukung tenaga ahli berpengalaman di bidangnya — surveyor bersertifikat, geodesist, dan GIS analyst.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="13" r="5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 34 C8 26 12 22 20 22 C28 22 32 26 32 34" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="30" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
        <path d="M24 30 C24 26 26 24 30 24 C34 24 36 26 36 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: 'Pengerjaan Cepat',
    desc: 'Efisien, tepat waktu dan dapat diandalkan. Mobilisasi cepat ke seluruh wilayah Indonesia.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.8" opacity="0.5"/>
        <polyline points="20,10 20,20 27,27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="20" r="2" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="teknologi"
      style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #1e40af 100%)' }}
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }}/>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-blue-200 mb-3">Mengapa Memilih Kami?</p>
          <div style={{ width: 48, height: 3, background: '#60a5fa', borderRadius: 2, margin: '0 auto 20px' }}/>
          <h2 className="heading-lg text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Keunggulan yang Membedakan Kami
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto text-base leading-relaxed">
            Dengan pengalaman lebih dari 15 tahun dan lebih dari 1.250 proyek selesai, kami menjadi mitra terpercaya survei geospasial di Indonesia.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="text-center p-6 lg:p-8 rounded-2xl group"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.14)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="icon-box-lg mx-auto mb-5">
                {r.icon}
              </div>
              <h3 className="font-display font-semibold text-white text-base mb-3">{r.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
