import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, ShieldCheck } from 'lucide-react';

const legalitas = [
  { label: 'NIB', value: '0806260052344' },
  { label: 'NPWP', value: '1000000009927625' },
  { label: 'Akta Pendirian', value: 'AHU-A094611.AH.01.30.Tahun 2026' },
];

export default function CTASection() {
  return (
    <section
      id="kontak"
      style={{ background: 'linear-gradient(135deg, #0d2818 0%, #1a4a2e 55%, #123420 100%)' }}
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 topo-pattern opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-green-200 mb-4">
              Mari Berkolaborasi
            </p>
            <h2 className="heading-lg text-white mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              Butuh Alat Geodesi untuk Proyek Anda?
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(220,236,225,0.85)' }}>
              Tim kami siap membantu kebutuhan sewa, jual-beli, servis, maupun kalibrasi alat topografi dan geodesi Anda. Hubungi kami sekarang.
            </p>

            <div className="space-y-3 mb-10">
              {[
                'Konsultasi kebutuhan alat tanpa syarat',
                '100% transparan, tanpa biaya siluman',
                'Armada alat terawat & terkalibrasi',
                'Tim komunikatif & solutif',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5 L4 7 L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm" style={{ color: 'rgba(220,236,225,0.9)' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Legalitas */}
            <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck size={16} style={{ color: '#8fcba4' }}/>
                <p className="text-xs font-semibold text-white uppercase tracking-wide">Legalitas Perusahaan</p>
              </div>
              <div className="space-y-1.5">
                {legalitas.map((l, i) => (
                  <div key={i} className="flex flex-wrap items-baseline gap-x-2 text-xs">
                    <span style={{ color: 'rgba(220,236,225,0.55)' }}>{l.label}:</span>
                    <span className="font-mono" style={{ color: 'rgba(220,236,225,0.9)' }}>{l.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: contact panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-2xl p-7 sm:p-8"
            style={{
              background: '#fff',
              boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
            }}
          >
            <h3 className="font-display font-bold text-slate-900 text-xl mb-1.5">Hubungi Kami</h3>
            <p className="text-slate-500 text-sm mb-6">Isi form di bawah atau hubungi langsung</p>

            <div className="space-y-4">
              {[
                { label: 'Nama Lengkap', placeholder: 'Nama Anda', type: 'text' },
                { label: 'Perusahaan / Instansi', placeholder: 'Nama Perusahaan (opsional)', type: 'text' },
                { label: 'Email', placeholder: 'email@perusahaan.com', type: 'email' },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full px-4 py-3 rounded-xl text-sm text-slate-900 outline-none transition-all duration-200"
                    style={{ border: '1.5px solid #e1e9e4', background: '#f7faf8' }}
                    onFocus={e => { e.target.style.borderColor = '#226138'; e.target.style.background = '#fff'; }}
                    onBlur={e => { e.target.style.borderColor = '#e1e9e4'; e.target.style.background = '#f7faf8'; }}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Kebutuhan Anda</label>
                <textarea
                  placeholder="Sewa / jual-beli / servis / kalibrasi alat apa?"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl text-sm text-slate-900 outline-none resize-none transition-all duration-200"
                  style={{ border: '1.5px solid #e1e9e4', background: '#f7faf8' }}
                  onFocus={e => { e.target.style.borderColor = '#226138'; e.target.style.background = '#fff'; }}
                  onBlur={e => { e.target.style.borderColor = '#e1e9e4'; e.target.style.background = '#f7faf8'; }}
                />
              </div>

              <button className="btn-primary w-full justify-center text-sm py-3.5">
                Kirim Pesan <ArrowRight size={15}/>
              </button>
            </div>

            <div className="mt-5 pt-5" style={{ borderTop: '1px solid #eef4f0' }}>
              <div className="grid grid-cols-1 gap-3">
                <a href="tel:+6208138868196" className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-green-700 transition-colors">
                  <Phone size={13} style={{ color: '#226138' }}/> 0813-8868-196 (Telp/WhatsApp)
                </a>
                <a href="mailto:trisulasurveyindonesia@gmail.com" className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-green-700 transition-colors">
                  <Mail size={13} style={{ color: '#226138' }}/> trisulasurveyindonesia@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
