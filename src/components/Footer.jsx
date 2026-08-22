import { MapPin, Mail, Phone, Clock, ArrowUpRight } from 'lucide-react';
import logoWordmark from '../assets/brand/logo-wordmark-light.png';

const SocialIcons = {
  Instagram: () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
      <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z"/>
    </svg>
  ),
  TikTok: () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
      <path d="M16.5 2h-3v13.5a2.5 2.5 0 11-2.5-2.5c.2 0 .4 0 .6.05V9.9a5.6 5.6 0 00-.6 0A5.6 5.6 0 1016.5 15.5V8.3a7.4 7.4 0 004.5 1.5v-3a4.4 4.4 0 01-4.5-4.3z"/>
    </svg>
  ),
};

const cols = {
  Layanan: [
    { label: 'Sewa Alat Geodesi', href: '#layanan' },
    { label: 'Jual & Beli Alat', href: '#layanan' },
    { label: 'Servis (Perbaikan)', href: '#layanan' },
    { label: 'Kalibrasi', href: '#layanan' },
  ],
  Perusahaan: [
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Visi & Misi', href: '#tentang' },
    { label: 'Alur Kerja', href: '#alur-kerja' },
    { label: 'Proyek Kami', href: '#proyek' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: '#0d2818', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logoWordmark} alt="Trisula Persada Utama" className="h-9 mb-5 object-contain" />

            <p className="text-sm leading-relaxed mb-2 max-w-sm" style={{ color: 'rgba(220,236,225,0.7)' }}>
              Penyedia solusi sewa, jual-beli, servis, dan kalibrasi alat geodesi & topografi terpercaya di Indonesia.
            </p>
            <p className="text-xs italic mb-6" style={{ color: 'rgba(220,236,225,0.45)' }}>
              "We took care of your instrument like it's ours."
            </p>

            <div className="space-y-2.5 mb-6">
              {[
                { Icon: MapPin, text: 'Jl. Genjer No. 35, Lengkong, Lingkar Selatan, Kota Bandung' },
                { Icon: Phone, text: '0813-8868-196 (Telp/WhatsApp)' },
                { Icon: Mail, text: 'trisulasurveyindonesia@gmail.com' },
                { Icon: Clock, text: 'Senin–Jumat 09.00–17.00, Sabtu 09.00–14.00 WIB' },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs" style={{ color: 'rgba(220,236,225,0.6)' }}>
                  <Icon size={13} className="mt-0.5 shrink-0" style={{ color: '#8fcba4' }}/>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              {[
                { Icon: SocialIcons.Instagram, label: 'Instagram', href: 'https://instagram.com/trisulapersadautama' },
                { Icon: SocialIcons.Facebook,  label: 'Facebook',  href: 'https://facebook.com/' },
                { Icon: SocialIcons.TikTok,    label: 'TikTok',    href: 'https://tiktok.com/@trisulapersadautama' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(220,236,225,0.6)' }}
                  onMouseEnter={e => Object.assign(e.currentTarget.style, { background: '#226138', color: '#fff', borderColor: '#226138' })}
                  onMouseLeave={e => Object.assign(e.currentTarget.style, { background: 'rgba(255,255,255,0.06)', color: 'rgba(220,236,225,0.6)', borderColor: 'rgba(255,255,255,0.1)' })}
                >
                  <Icon/>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(cols).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold mb-5 tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-[13px] transition-colors duration-200"
                      style={{ color: 'rgba(220,236,225,0.6)' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#8fcba4'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(220,236,225,0.6)'}
                    >
                      {link.label}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold mb-5 tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Legalitas
            </h4>
            <div className="space-y-2.5 text-[12px]" style={{ color: 'rgba(220,236,225,0.55)' }}>
              <p>NIB: 0806260052344</p>
              <p>NPWP: 1000000009927625</p>
              <p>Akta: AHU-A094611.AH.01.30.2026</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(220,236,225,0.4)' }}
        >
          <p>© {new Date().getFullYear()} PT Trisula Persada Utama. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Use'].map((t) => (
              <a key={t} href="#" className="transition-colors duration-200" style={{ color: 'rgba(220,236,225,0.4)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(220,236,225,0.7)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(220,236,225,0.4)'}
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
