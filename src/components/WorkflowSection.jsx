import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Konsultasi & Scoping',
    desc: 'Diskusi kebutuhan proyek, area cakupan, spesifikasi teknis, dan estimasi waktu bersama tim ahli kami.',
    color: '#2563eb',
  },
  {
    num: '02',
    title: 'Perencanaan & Perizinan',
    desc: 'Survey design, flight plan, perizinan terbang, serta mobilisasi tim dan peralatan ke lokasi.',
    color: '#0891b2',
  },
  {
    num: '03',
    title: 'Pengambilan Data',
    desc: 'Survei lapangan menggunakan GNSS, Total Station, Drone, atau Echosounder sesuai kebutuhan proyek.',
    color: '#059669',
  },
  {
    num: '04',
    title: 'Pengolahan & QA/QC',
    desc: 'Komputasi data dengan software geodetik berlisensi, quality control ketat, dan validasi akurasi berlapis.',
    color: '#7c3aed',
  },
  {
    num: '05',
    title: 'Deliverable Siap Pakai',
    desc: 'Penyerahan peta, model 3D, laporan teknis, dan data geospasial dalam format yang diinginkan klien.',
    color: '#2563eb',
  },
];

export default function WorkflowSection() {
  return (
    <section
      id="workflow"
      style={{ background: '#f8fafc' }}
      className="py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Alur Kerja</p>
          <div className="section-divider mx-auto mb-5" />
          <h2 className="heading-lg text-slate-900 mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Dari Data ke <span className="text-gradient">Keputusan</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-base">
            Proses terstruktur memastikan setiap proyek diselesaikan dengan standar presisi dan kualitas tertinggi.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-[2px] z-0"
                  style={{
                    background: `linear-gradient(90deg, ${step.color}, ${steps[i+1].color})`,
                    opacity: 0.2,
                    width: 'calc(100% - 64px)',
                    left: 64,
                  }}
                />
              )}

              <div className="card p-6 relative z-10 h-full">
                {/* Number circle */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-bold text-base mb-5"
                  style={{ background: `${step.color}12`, color: step.color, border: `1.5px solid ${step.color}25` }}
                >
                  {step.num}
                </div>
                <h3 className="font-display font-semibold text-slate-900 text-[15px] mb-2.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
