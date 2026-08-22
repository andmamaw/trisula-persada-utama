import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ShieldCheck, Wrench, Repeat } from 'lucide-react';
import heroPhoto from '../assets/photos/hero.jpg';

const float = {
  hidden: { opacity: 0, y: 20 },
  visible: (d) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: [0.22,1,0.36,1] } }),
};

export default function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#0d2818' }}>
      {/* Photo background */}
      <div className="absolute inset-0">
        <img src={heroPhoto} alt="Alat geodesi Trisula Persada Utama" className="w-full h-full object-cover" />
      </div>
      {/* Green wash + topo pattern */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(115deg, rgba(8,27,16,0.95) 0%, rgba(13,40,24,0.9) 45%, rgba(18,52,32,0.75) 100%)' }} />
      <div className="absolute inset-0 topo-pattern" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            custom={0.2} variants={float} initial="hidden" animate="visible"
            className="mb-6"
          >
            <span className="badge badge-white">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 anim-pulse inline-block" />
              Sewa · Jual-Beli · Servis · Kalibrasi Alat Geodesi
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={0.4} variants={float} initial="hidden" animate="visible"
            className="heading-xl text-white mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.6rem)' }}
          >
            Solusi Penyewaan
            <br />
            <span style={{ color: '#8fcba4' }}>Alat Geodesi Terpercaya</span>
          </motion.h1>

          <motion.p
            custom={0.6} variants={float} initial="hidden" animate="visible"
            className="text-base sm:text-lg leading-relaxed mb-4 max-w-xl"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            Layanan penyewaan dan penyediaan instrumen topografi serta geodesi (Total Station, Theodolite, GNSS/GPS Geodetik, Auto Level, dll.) untuk proyek jangka pendek maupun panjang dengan armada alat yang terawat, terkalibrasi, dan siap pakai.
          </motion.p>

          <motion.p
            custom={0.7} variants={float} initial="hidden" animate="visible"
            className="text-sm italic mb-8"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            "We took care of your instrument like it's ours."
          </motion.p>

          <motion.div
            custom={0.85} variants={float} initial="hidden" animate="visible"
            className="flex flex-wrap gap-3"
          >
            <a href="#layanan" onClick={(e)=>{e.preventDefault();document.querySelector('#layanan')?.scrollIntoView({behavior:'smooth'})}} className="btn-primary">
              Layanan Kami <ArrowRight size={16}/>
            </a>
            <a href="#kontak" onClick={(e)=>{e.preventDefault();document.querySelector('#kontak')?.scrollIntoView({behavior:'smooth'})}} className="btn-outline">
              Hubungi Kami
            </a>
          </motion.div>
        </div>

        {/* Floating info cards */}
        <motion.div
          custom={1.1} variants={float} initial="hidden" animate="visible"
          className="hidden lg:flex absolute bottom-16 right-10 gap-4"
        >
          {[
            { Icon: Repeat,      label: 'Layanan', value: 'Sewa & Jual-Beli' },
            { Icon: Wrench,      label: 'Dukungan', value: 'Servis & Kalibrasi' },
            { Icon: ShieldCheck, label: 'Jaminan', value: '100% Transparan' },
          ].map(({ Icon, label, value }, i) => (
            <div
              key={i}
              className="anim-float rounded-xl px-4 py-3 backdrop-blur-md"
              style={{
                background: 'rgba(13,40,24,0.7)',
                border: '1px solid rgba(255,255,255,0.15)',
                animationDelay: `${i * 0.8}s`,
              }}
            >
              <div className="flex items-center gap-2.5">
                <Icon size={14} style={{ color: '#8fcba4' }} />
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</p>
                  <p className="text-xs font-semibold text-white mt-0.5">{value}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>Scroll</span>
        <ChevronDown size={16} style={{ color: 'rgba(255,255,255,0.3)' }} className="animate-bounce"/>
      </div>
    </section>
  );
}
