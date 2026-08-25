import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TiltCard from './ui/TiltCard';
import sewaPhoto from '../assets/photos/layanan-sewa.jpg';
import jualBeliPhoto from '../assets/photos/layanan-jualbeli.jpg';
import servisPhoto from '../assets/photos/servis-repair.jpg';
import kalibrasiPhoto from '../assets/photos/kalibrasi-detail.jpg';

const services = [
  {
    title: 'Sewa Alat Geodesi',
    desc: 'Layanan penyewaan instrumen topografi untuk kebutuhan proyek jangka pendek maupun jangka panjang dengan armada alat yang terawat, terkalibrasi, dan siap pakai di lapangan.',
    photo: sewaPhoto,
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <path d="M16 4 L16 28" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M9 10 L23 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M6 10 L9 5 L12 10 Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M20 10 L23 5 L26 10 Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M6 10 Q6 16 12 16" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5"/>
        <path d="M26 10 Q26 16 20 16" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5"/>
        <path d="M10 28 L22 28" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Jual & Beli Alat',
    desc: 'Penyediaan instrumen geodesi dan topografi (Total Station, Theodolite, GNSS/GPS Geodetik, Auto Level, dll) dengan jaminan kualitas terbaik. Kami juga melayani pembelian alat bekas dengan valuasi harga yang transparan dan kompetitif.',
    photo: jualBeliPhoto,
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <path d="M4 10 L28 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M6 10 L8 22 Q8 24 10 24 L22 24 Q24 24 24 22 L26 10" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
        <path d="M11 10 Q11 5 16 5 Q21 5 21 10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="16" cy="17" r="3.2" stroke="currentColor" strokeWidth="1.3" fill="none"/>
        <path d="M16 15.3 L16 18.7 M14.6 16 L17.4 18" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
      </svg>
    ),
  },
  {
    title: 'Servis (Perbaikan)',
    desc: 'Penanganan perbaikan alat yang mengalami kerusakan fisik maupun sistem. Kami menawarkan biaya servis yang masuk akal dengan estimasi waktu dan rincian komponen yang 100% transparan.',
    photo: servisPhoto,
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <path d="M20 7 a5 5 0 0 0 -6.9 6.9 L6 21 a2.2 2.2 0 0 0 3 3 l7.1 -7.1 A5 5 0 0 0 25 10 l-3.5 3.5 -2 -2 Z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Kalibrasi',
    desc: 'Penyesuaian dan pengujian akurasi instrumen ukur agar selalu presisi dan memenuhi standar operasional proyek-proyek besar.',
    photo: kalibrasiPhoto,
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <circle cx="16" cy="16" r="2.4" fill="currentColor"/>
        <line x1="16" y1="6" x2="16" y2="9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="16" y1="22.5" x2="16" y2="26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="6" y1="16" x2="9.5" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="22.5" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M16 16 L21 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
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
    <section id="layanan" style={{ background: '#f7faf8' }} className="py-20 lg:py-28">
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
            Spektrum Layanan
            <br />
            <span className="text-gradient">Alat Topografi & Geodesi</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            Sebagai penyedia solusi menyeluruh, kami menawarkan berbagai layanan untuk menunjang kebutuhan proyek pemetaan dan pengukuran Anda.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {services.map((s, i) => (
            <motion.div key={i} variants={cardV}>
              <TiltCard className="card overflow-hidden group cursor-pointer">
                <div className="relative h-44 overflow-hidden">
                  <img src={s.photo} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,40,24,0.1) 0%, rgba(13,40,24,0.55) 100%)' }}/>
                  <div className="absolute bottom-4 left-5 icon-box" style={{ background: 'rgba(255,255,255,0.92)' }}>
                    {s.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-slate-900 text-lg mb-2.5">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-[13.5px] leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-green-700 text-[13px] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                    Selengkapnya <ArrowRight size={13}/>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
