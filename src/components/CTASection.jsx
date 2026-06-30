import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      id="kontak"
      style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #1e40af 100%)' }}
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        }}/>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" fill="none">
          {/* Topo lines */}
          {[0,1,2,3].map(i=>(
            <ellipse key={i} cx="600" cy="200" rx={200+i*80} ry={80+i*40}
              stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
          ))}
          {Array.from({length:12},(_,i)=>(
            <line key={i} x1={i*110} y1="0" x2={i*110} y2="400"
              stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-blue-200 mb-4">
              Mari Berkolaborasi
            </p>
            <h2 className="heading-lg text-white mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              Butuh Data Geospasial Akurat untuk Proyek Anda?
            </h2>
            <p className="text-blue-200 text-base leading-relaxed mb-8">
              Tim ahli kami siap memberikan konsultasi gratis dan solusi survei geodesi terbaik di seluruh Indonesia. Hubungi kami sekarang.
            </p>

            {/* Trust list */}
            <div className="space-y-3">
              {[
                'Konsultasi gratis tanpa syarat',
                'Respon dalam 24 jam kerja',
                'Tim berpengalaman & berlisensi',
                'Cakupan seluruh wilayah Indonesia',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5 L4 7 L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-blue-100 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: contact form panel */}
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
                { label: 'Perusahaan', placeholder: 'Nama Perusahaan', type: 'text' },
                { label: 'Email', placeholder: 'email@perusahaan.com', type: 'email' },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full px-4 py-3 rounded-xl text-sm text-slate-900 outline-none transition-all duration-200"
                    style={{
                      border: '1.5px solid #e2e8f0',
                      background: '#f8fafc',
                    }}
                    onFocus={e => { e.target.style.borderColor = '#2563eb'; e.target.style.background = '#fff'; }}
                    onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.background = '#f8fafc'; }}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Kebutuhan Proyek</label>
                <textarea
                  placeholder="Ceritakan kebutuhan survei Anda..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl text-sm text-slate-900 outline-none resize-none transition-all duration-200"
                  style={{
                    border: '1.5px solid #e2e8f0',
                    background: '#f8fafc',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#2563eb'; e.target.style.background = '#fff'; }}
                  onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.background = '#f8fafc'; }}
                />
              </div>

              <button className="btn-primary w-full justify-center text-sm py-3.5">
                Kirim Pesan <ArrowRight size={15}/>
              </button>
            </div>

            <div className="mt-5 pt-5" style={{ borderTop: '1px solid #f1f5f9' }}>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+628111200330"
                  className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Phone size={13} style={{ color: '#2563eb' }}/>
                  +62 811 1200 3300
                </a>
                <a
                  href="mailto:info@trisulapersada.co.id"
                  className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Mail size={13} style={{ color: '#2563eb' }}/>
                  info@trisulapersada.co.id
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
