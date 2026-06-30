import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Survei Topografi',
    desc: 'Pengukuran detail permukaan tanah dengan presisi tinggi untuk perencanaan konstruksi, pertambangan, dan infrastruktur.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <path d="M4 24 L10 14 L16 18 L22 10 L28 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 24 L28 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <circle cx="10" cy="14" r="2" fill="currentColor" opacity="0.7"/>
        <circle cx="22" cy="10" r="2" fill="currentColor" opacity="0.7"/>
      </svg>
    ),
  },
  {
    title: 'GNSS & Total Station',
    desc: 'Teknologi positioning satelit akurasi centimeter untuk referensi geodetik, kontrol survei, dan pengukuran presisi.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
        <circle cx="16" cy="16" r="2.5" fill="currentColor"/>
        <line x1="16" y1="4" x2="16" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="24" x2="16" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="4" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="24" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Fotogrametri UAV',
    desc: 'Pemetaan udara resolusi tinggi 2 cm/px menghasilkan orthophoto, DTM, DSM, dan model 3D area proyek.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <rect x="12" y="13" width="8" height="6" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="12" y1="15" x2="6" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="20" y1="15" x2="26" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="17" x2="6" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="20" y1="17" x2="26" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <ellipse cx="6" cy="11" rx="4" ry="1.5" stroke="currentColor" strokeWidth="1"/>
        <ellipse cx="26" cy="11" rx="4" ry="1.5" stroke="currentColor" strokeWidth="1"/>
        <ellipse cx="6" cy="21" rx="4" ry="1.5" stroke="currentColor" strokeWidth="1"/>
        <ellipse cx="26" cy="21" rx="4" ry="1.5" stroke="currentColor" strokeWidth="1"/>
        <line x1="16" y1="19" x2="16" y2="28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Hidro-Oseanografi',
    desc: 'Survei kedalaman laut dengan single/multibeam echosounder untuk pelabuhan, reklamasi, dan infrastruktur maritim.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <path d="M4 13 Q10 9 16 13 Q22 17 28 13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M4 18 Q10 14 16 18 Q22 22 28 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6"/>
        <path d="M4 23 Q10 19 16 23 Q22 27 28 23" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.3"/>
        <line x1="16" y1="4" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" opacity="0.5"/>
        <circle cx="16" cy="4" r="2" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: 'GIS & Penginderaan Jauh',
    desc: 'Pengolahan data spasial, pembuatan peta tematik berbasis SIG, dan analisis citra satelit multispektral.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
        <polygon points="4,16 14,8 22,14 28,10 28,28 4,28" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1"/>
        <circle cx="22" cy="10" r="2.5" fill="currentColor" opacity="0.8"/>
        <circle cx="10" cy="14" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="18" cy="20" r="1.5" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
  },
];

const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardV = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22,1,0.36,1] } },
};

export default function ServicesSection() {
  return (
    <section id="layanan" style={{ background: '#f8fafc' }} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Layanan Kami</p>
          <div className="section-divider mx-auto mb-5" />
          <h2 className="heading-lg text-slate-900 mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Solusi Lengkap Kebutuhan
            <br />
            <span className="text-gradient">Survei dan Pemetaan</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            Kami menyediakan berbagai layanan survei dan pemetaan berbasis teknologi terkini untuk menghasilkan data yang akurat, cepat dan dapat diandalkan.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={cardV}
              className="card p-6 group cursor-pointer relative overflow-hidden"
            >
              <div className="icon-box mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="font-display font-semibold text-slate-900 text-[15px] mb-2.5 leading-snug">
                {s.title}
              </h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">
                {s.desc}
              </p>
              <div className="mt-4 flex items-center gap-1 text-blue-600 text-[13px] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                Selengkapnya <ArrowRight size={13}/>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
