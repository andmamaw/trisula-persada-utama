import { motion } from 'framer-motion';
import useCountUp from '../hooks/useCountUp';

const stats = [
  { value: 1250, suffix: '+',  label: 'Proyek Selesai',   isDecimal: false },
  { value: 450,  suffix: '+',  label: 'Klien Dilayani',   isDecimal: false },
  { value: 34,   suffix: '',   label: 'Provinsi Cakupan', isDecimal: false },
  { value: 25,   suffix: 'M+', label: 'Hektar Dipetakan', isDecimal: true  },
  { value: 998,  suffix: '%',  label: 'Tingkat Akurasi',  isDecimal: true  },
];

function Stat({ s }) {
  const { count, ref } = useCountUp(s.value, 2000);
  const display = s.isDecimal ? (count / 10).toFixed(1) : count.toLocaleString('id-ID');

  return (
    <div ref={ref} className="text-center py-8 px-4">
      <div className="font-display font-bold leading-none mb-2 text-gradient"
        style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
        {display}{s.suffix}
      </div>
      <p className="text-slate-500 text-sm font-medium">{s.label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section style={{ background: '#fff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y"
          style={{ borderColor: '#e2e8f0' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ borderColor: '#e2e8f0' }}
            >
              <Stat s={s} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
