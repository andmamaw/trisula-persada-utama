import { motion } from 'framer-motion';
import useCountUp from '../hooks/useCountUp';

const stats = [
  { value: 100, suffix: '+', label: 'Klien Terlayani (1 Tahun Terakhir)' },
  { value: 2022, suffix: '',  label: 'Tahun Mulai Beroperasi' },
  { value: 4,   suffix: '',   label: 'Layanan Utama' },
  { value: 10,  suffix: '+',  label: 'Mitra & Instansi Strategis' },
];

function Stat({ s }) {
  const { count, ref } = useCountUp(s.value, 1800);

  return (
    <div ref={ref} className="text-center py-8 px-4">
      <div className="font-display font-bold leading-none mb-2 text-gradient"
        style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
        {count.toLocaleString('id-ID')}{s.suffix}
      </div>
      <p className="text-slate-500 text-sm font-medium">{s.label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section style={{ background: '#fff', borderTop: '1px solid #e1e9e4', borderBottom: '1px solid #e1e9e4' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div
          className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y"
          style={{ borderColor: '#e1e9e4' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ borderColor: '#e1e9e4' }}
            >
              <Stat s={s} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
