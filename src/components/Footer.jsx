import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const SocialIcons = {
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  ),
  YouTube: () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
    </svg>
  ),
};

const cols = {
  Perusahaan: ['Tentang Kami', 'Tim Kami', 'Karir', 'Berita', 'Partnership'],
  Layanan: ['Survei Topografi', 'Drone Mapping', 'Bathymetry', 'GIS & Analytics', 'Remote Sensing'],
  Resources: ['Case Studies', 'Dokumentasi', 'FAQ', 'Blog', 'Hubungi Kami'],
};

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="10" fill="rgba(37,99,235,0.2)"/>
                <path d="M20 7 L31 27 H9 Z" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M20 14 L27 27 H13 Z" fill="rgba(96,165,250,0.2)" stroke="#60a5fa" strokeWidth="1.2" strokeLinejoin="round"/>
                <circle cx="20" cy="7" r="2" fill="#60a5fa"/>
              </svg>
              <div>
                <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 13, color: '#fff', letterSpacing: '0.06em' }}>
                  PT TRISULA <span style={{ color: '#60a5fa' }}>PERSADA UTAMA</span>
                </p>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'rgba(148,163,184,0.6)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 3 }}>
                  Geodesy & Geospatial Solution
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: 'rgba(148,163,184,0.7)' }}>
              Penyedia solusi survei geodesi dan geospasial terintegrasi untuk mendukung pembangunan infrastruktur dan pengambilan keputusan berbasis data di seluruh Indonesia.
            </p>

            <div className="space-y-2.5 mb-6">
              {[
                { Icon: MapPin, text: 'Jl. Cilandak KKO No.1, Jakarta Selatan 12560' },
                { Icon: Mail, text: 'info@trisulapersada.co.id' },
                { Icon: Phone, text: '+62 811 1200 3300' },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs" style={{ color: 'rgba(148,163,184,0.6)' }}>
                  <Icon size={13} className="mt-0.5 shrink-0" style={{ color: '#60a5fa' }}/>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              {[
                { Icon: SocialIcons.LinkedIn, label: 'LinkedIn' },
                { Icon: SocialIcons.Instagram, label: 'Instagram' },
                { Icon: SocialIcons.YouTube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(148,163,184,0.6)' }}
                  onMouseEnter={e => Object.assign(e.currentTarget.style, { background: '#2563eb', color: '#fff', borderColor: '#2563eb' })}
                  onMouseLeave={e => Object.assign(e.currentTarget.style, { background: 'rgba(255,255,255,0.06)', color: 'rgba(148,163,184,0.6)', borderColor: 'rgba(255,255,255,0.1)' })}
                >
                  <Icon/>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(cols).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-xs font-semibold mb-5 tracking-wider uppercase"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-1 text-[13px] transition-colors duration-200"
                      style={{ color: 'rgba(148,163,184,0.6)' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#93c5fd'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(148,163,184,0.6)'}
                    >
                      {link}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(148,163,184,0.4)' }}
        >
          <p>© {new Date().getFullYear()} PT Trisula Persada Utama. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((t) => (
              <a
                key={t}
                href="#"
                className="transition-colors duration-200 hover:text-slate-300"
                style={{ color: 'rgba(148,163,184,0.4)' }}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
