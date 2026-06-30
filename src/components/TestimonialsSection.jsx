import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: 'PT Trisula Persada Utama menyediakan data survei topografi dengan akurasi luar biasa. Tim mereka sangat profesional dan memahami kebutuhan proyek infrastruktur berskala besar.',
    name: 'Ir. Budi Santoso',
    role: 'Project Manager',
    company: 'PT Waskita Karya',
    logo: 'W',
    color: '#1d4ed8',
  },
  {
    quote: 'Efisiensi drone mapping mereka sangat mengesankan — area 1.200 hektar selesai dalam 4 hari kerja dengan akurasi 2 cm. Menghemat waktu dan biaya proyek secara signifikan.',
    name: 'David Tanuwijaya',
    role: 'Survey Manager',
    company: 'PT Vale Indonesia',
    logo: 'V',
    color: '#059669',
  },
  {
    quote: 'Mitra survei terpercaya dengan teknologi terkini dan tim yang berpengalaman. Data bathymetric yang dihasilkan sangat akurat dan deliverable selalu tepat waktu.',
    name: 'Capt. Ahmad Fauzi',
    role: 'Construction Lead',
    company: 'PT Pertamina (Persero)',
    logo: 'P',
    color: '#dc2626',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section style={{ background: '#fff', borderTop: '1px solid #e2e8f0' }} className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label mb-3">Testimoni Klien</p>
          <div className="section-divider mx-auto mb-10" />
        </motion.div>

        {/* Large quote mark */}
        <div
          className="text-8xl leading-none mb-4 font-serif select-none"
          style={{ color: '#dbeafe', fontFamily: 'Georgia, serif' }}
        >
          &ldquo;
        </div>

        {/* Quote */}
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="text-slate-700 leading-relaxed mb-10 font-medium"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
          >
            {t.quote}
          </motion.blockquote>
        </AnimatePresence>

        {/* Author */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`a${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg text-white"
              style={{ background: t.color }}
            >
              {t.logo}
            </div>
            <div className="text-left">
              <p className="font-display font-semibold text-slate-900">{t.name}</p>
              <p className="text-sm text-slate-500">{t.role} · {t.company}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                background: i === active ? '#2563eb' : '#e2e8f0',
              }}
            />
          ))}
        </div>

        {/* Client logos strip */}
        <div className="mt-16 pt-12" style={{ borderTop: '1px solid #f1f5f9' }}>
          <p className="text-xs font-medium text-slate-400 mb-8 tracking-wider uppercase">
            Dipercaya oleh perusahaan terkemuka Indonesia
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { name: 'Waskita Karya', initial: 'W', color: '#1d4ed8' },
              { name: 'Vale Indonesia', initial: 'V', color: '#059669' },
              { name: 'Pertamina', initial: 'P', color: '#dc2626' },
              { name: 'Pelindo', initial: 'PL', color: '#0891b2' },
              { name: 'BNPB', initial: 'B', color: '#7c3aed' },
              { name: 'Waskita Beton', initial: 'WB', color: '#0369a1' },
            ].map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl"
                style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs"
                  style={{ background: c.color }}
                >
                  {c.initial}
                </div>
                <span className="text-sm font-medium text-slate-600">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
