import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Tepat Waktu (Punctuality)',
    desc: 'Kami sangat menghargai timeline operasional Anda. Setiap layanan servis, pengiriman alat, hingga penyelesaian administrasi dipastikan selesai sesuai dengan target waktu yang disepakati.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.8" opacity="0.5"/>
        <polyline points="20,10 20,20 27,27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="20" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: '100% Transparan',
    desc: 'Tidak ada hidden fee atau biaya siluman. Kami menjamin transparansi penuh terhadap setiap rincian pekerjaan dan penawaran harga yang diberikan.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <path d="M20 6 L32 12 V20 C32 27 27 32.5 20 34 C13 32.5 8 27 8 20 V12 Z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
        <path d="M14 20 L18 24 L27 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Komunikatif & Solutif',
    desc: 'Tim kami bukan sekadar teknisi atau sales, melainkan mitra diskusi yang siap diajak berkomunikasi kapan saja untuk membantu menyelesaikan hambatan teknis Anda.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <path d="M8 12 h24 a2 2 0 0 1 2 2 v11 a2 2 0 0 1 -2 2 H16 l-6 5 v-5 H8 a2 2 0 0 1 -2 -2 V14 a2 2 0 0 1 2 -2 Z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
        <circle cx="14" cy="19.5" r="1.4" fill="currentColor"/>
        <circle cx="20" cy="19.5" r="1.4" fill="currentColor"/>
        <circle cx="26" cy="19.5" r="1.4" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function WhyUsSection() {
  return (
    <section
      style={{ background: 'linear-gradient(135deg, #0d2818 0%, #1a4a2e 55%, #123420 100%)' }}
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 topo-pattern opacity-70" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-green-200 mb-3">Keunggulan Kami</p>
          <div style={{ width: 48, height: 3, background: '#8fcba4', borderRadius: 2, margin: '0 auto 20px' }}/>
          <h2 className="heading-lg text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Koneksi dan Kepercayaan adalah Mata Uang Utama Kami
          </h2>
          <p className="max-w-xl mx-auto text-base leading-relaxed" style={{ color: 'rgba(220,236,225,0.8)' }}>
            Kami memahami hal itu. Oleh karena itu, kami memberikan jaminan keunggulan berikut.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="text-center p-6 lg:p-8 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.24)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="icon-box-lg mx-auto mb-5">
                {r.icon}
              </div>
              <h3 className="font-display font-semibold text-white text-base mb-3">{r.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(220,236,225,0.75)' }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
