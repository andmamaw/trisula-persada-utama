import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, ShieldCheck, Wrench, Repeat } from 'lucide-react';
import heroPhoto from '../assets/photos/hero.jpg';
import TextReveal from './ui/TextReveal';
import Magnetic from './ui/Magnetic';

const float = {
  hidden: { opacity: 0, y: 20 },
  visible: (d) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: [0.22,1,0.36,1] } }),
};

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Background photo drifts slower than the page (classic parallax depth)
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  // Foreground content fades + rises out a touch faster
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="beranda" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#0d2818' }}>
      {/* Photo background — parallax layer */}
      <motion.div className="absolute inset-0" style={{ y: photoY, scale: photoScale }}>
        <img src={heroPhoto} alt="Alat geodesi Trisula Persada Utama" className="w-full h-full object-cover" />
      </motion.div>
      {/* Green wash + topo pattern */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(115deg, rgba(8,27,16,0.95) 0%, rgba(13,40,24,0.9) 45%, rgba(18,52,32,0.75) 100%)' }} />
      <div className="absolute inset-0 topo-pattern" />

      {/* Content — parallax layer (opposite drift + fade) */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full pt-28 pb-24 lg:pt-36 lg:pb-32"
      >
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

          {/* Headline — staggered word reveal */}
          <h1
            className="heading-xl text-white mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.6rem)' }}
          >
            <TextReveal text="Solusi Penyewaan" delay={0.15} />
            <br />
            <TextReveal text="Alat Geodesi Terpercaya" delay={0.45} className="[&_*]:!text-[#8fcba4]" />
          </h1>

          <motion.p
            custom={0.9} variants={float} initial="hidden" animate="visible"
            className="text-base sm:text-lg leading-relaxed mb-4 max-w-xl"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            Layanan penyewaan dan penyediaan instrumen topografi serta geodesi (Total Station, Theodolite, GNSS/GPS Geodetik, Auto Level, dll.) untuk proyek jangka pendek maupun panjang dengan armada alat yang terawat, terkalibrasi, dan siap pakai.
          </motion.p>

          <motion.p
            custom={1.0} variants={float} initial="hidden" animate="visible"
            className="text-sm italic mb-8"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            "We took care of your instrument like it's ours."
          </motion.p>

          <motion.div
            custom={1.1} variants={float} initial="hidden" animate="visible"
            className="flex flex-wrap gap-3"
          >
            <Magnetic>
              <a href="#layanan" onClick={(e)=>{e.preventDefault();document.querySelector('#layanan')?.scrollIntoView({behavior:'smooth'})}} className="btn-primary">
                Layanan Kami <ArrowRight size={16}/>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#kontak" onClick={(e)=>{e.preventDefault();document.querySelector('#kontak')?.scrollIntoView({behavior:'smooth'})}} className="btn-outline">
                Hubungi Kami
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Floating info cards */}
        <motion.div
          custom={1.3} variants={float} initial="hidden" animate="visible"
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
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>Scroll</span>
        <ChevronDown size={16} style={{ color: 'rgba(255,255,255,0.3)' }} className="animate-bounce"/>
      </div>
    </section>
  );
}
