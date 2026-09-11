import { motion } from 'framer-motion';
import { Users, CalendarRange, Layers, Handshake } from 'lucide-react';
import useCountUp from '../hooks/useCountUp';

const stats = [
  { Icon: Users,         value: 100,  suffix: '+', label: 'Klien Terlayani (1 Tahun Terakhir)' },
  { Icon: CalendarRange, value: 2022, suffix: '',  label: 'Tahun Mulai Beroperasi', plain: true },
  { Icon: Layers,        value: 4,    suffix: '',  label: 'Layanan Utama' },
  { Icon: Handshake,     value: 10,   suffix: '+', label: 'Mitra & Instansi Strategis' },
];

function Stat({ s, i }) {
  const { count, ref } = useCountUp(s.value, 1800);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative text-center py-10 px-5 group"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: '#dcece1' }}
      >
        <s.Icon size={18} style={{ color: '#1a4a2e' }} />
      </div>
      <div className="font-display font-bold leading-none mb-2 text-gradient"
        style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
        {s.plain ? s.value : count.toLocaleString('id-ID')}{s.suffix}
      </div>
      <p className="text-slate-500 text-sm font-medium max-w-[14rem] mx-auto">{s.label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#fff', borderTop: '1px solid #e1e9e4', borderBottom: '1px solid #e1e9e4' }}>
      <div className="absolute inset-0 topo-pattern opacity-[0.03]" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative">
        <div
          className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y"
          style={{ borderColor: '#e1e9e4' }}
        >
          {stats.map((s, i) => (
            <Stat key={i} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
