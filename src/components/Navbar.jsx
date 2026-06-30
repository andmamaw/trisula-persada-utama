import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { name: 'Beranda',   href: '#beranda' },
  { name: 'Tentang Kami', href: '#tentang' },
  { name: 'Layanan',   href: '#layanan' },
  { name: 'Teknologi', href: '#teknologi' },
  { name: 'Proyek',    href: '#proyek' },
  { name: 'Kontak',    href: '#kontak' },
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
        background: scrolled ? '#fff' : 'rgba(255,255,255,0.96)',
        borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
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
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="10" fill="#eff6ff"/>
                <path d="M20 7 L31 27 H9 Z" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M20 14 L27 27 H13 Z" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.2" strokeLinejoin="round"/>
                <circle cx="20" cy="7" r="2" fill="#2563eb"/>
              </svg>
            </div>
            <div>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 14, color: '#0f172a', letterSpacing: '0.05em', lineHeight: 1.2 }}>
                PT TRISULA <span style={{ color: '#2563eb' }}>PERSADA UTAMA</span>
              </p>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: '#94a3b8', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 2 }}>
                Geodesy & Geospatial Solution
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
                className="relative px-3.5 py-2 text-[13.5px] font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200 no-underline group"
              >
                {l.name}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] rounded-full bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+628111200330"
              className="flex items-center gap-2 text-[13px] font-medium text-slate-600 hover:text-blue-600 transition-colors no-underline"
            >
              <Phone size={14} />
              +62 811 1200 3300
            </a>
            <a
              href="#kontak"
              onClick={(e) => go(e, '#kontak')}
              className="btn-primary text-[13px]"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
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
            style={{ background: '#fff', borderTop: '1px solid #e2e8f0', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
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
                  className="block py-3 px-4 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all no-underline"
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
                  Konsultasi Gratis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
