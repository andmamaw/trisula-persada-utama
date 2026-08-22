import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import logoMark from '../assets/brand/logo-mark-dark.png';

const links = [
  { name: 'Beranda',     href: '#beranda' },
  { name: 'Layanan',     href: '#layanan' },
  { name: 'Tentang Kami',href: '#tentang' },
  { name: 'Alur Kerja',  href: '#alur-kerja' },
  { name: 'Proyek',      href: '#proyek' },
  { name: 'Kontak',      href: '#kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50"
      style={{
        background: scrolled ? '#fff' : 'rgba(255,255,255,0.97)',
        borderBottom: scrolled ? '1px solid #e1e9e4' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(13,40,24,0.07)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[68px] lg:h-20">

          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => go(e, '#beranda')}
            className="flex items-center gap-3 no-underline group"
          >
            <img src={logoMark} alt="Trisula Persada Utama" className="h-9 w-9 lg:h-10 lg:w-10 object-contain" />
            <div>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 14, color: '#14201a', letterSpacing: '0.04em', lineHeight: 1.2 }}>
                TRISULA <span style={{ color: '#226138' }}>PERSADA UTAMA</span>
              </p>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: '#8aa393', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 2 }}>
                Solusi Alat Geodesi
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                className="relative px-3.5 py-2 text-[13.5px] font-medium text-slate-700 hover:text-green-700 transition-colors duration-200 no-underline group"
              >
                {l.name}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] rounded-full bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+6208138868196"
              className="flex items-center gap-2 text-[13px] font-medium text-slate-700 hover:text-green-700 transition-colors no-underline"
            >
              <Phone size={14} />
              0813-8868-196
            </a>
            <a
              href="#kontak"
              onClick={(e) => go(e, '#kontak')}
              className="btn-primary text-[13px]"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-slate-700 hover:text-green-700 transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{ background: '#fff', borderTop: '1px solid #e1e9e4', boxShadow: '0 8px 20px rgba(13,40,24,0.1)' }}
          >
            <div className="px-5 py-4 space-y-1 max-w-7xl mx-auto">
              {links.map((l, i) => (
                <motion.a
                  key={l.name}
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="block py-3 px-4 text-sm font-medium text-slate-700 hover:text-green-700 hover:bg-green-50 rounded-xl transition-all no-underline"
                >
                  {l.name}
                </motion.a>
              ))}
              <div className="pt-3 pb-2">
                <a
                  href="#kontak"
                  onClick={(e) => go(e, '#kontak')}
                  className="btn-primary w-full justify-center"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
