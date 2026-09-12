import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logoMark from '../assets/brand/logo-mark-dark.png';
import Magnetic from './ui/Magnetic';

const links = [
  { name: 'Beranda',      to: '/' },
  { name: 'Layanan',      to: '/layanan' },
  { name: 'Tentang Kami', to: '/tentang' },
  { name: 'Alur Kerja',   to: '/alur-kerja' },
  { name: 'Proyek',       to: '/proyek' },
  { name: 'Kontak',       hash: '#kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  // the contact block sits at the bottom of every page, so it stays an anchor
  const goHash = (e, hash) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
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
          <Link to="/" className="flex items-center gap-3 no-underline group">
            <img src={logoMark} alt="Trisula Persada Utama" className="h-9 w-9 lg:h-10 lg:w-10 object-contain" />
            <div>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 14, color: '#14201a', letterSpacing: '0.04em', lineHeight: 1.2 }}>
                TRISULA <span style={{ color: '#226138' }}>PERSADA UTAMA</span>
              </p>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: '#8aa393', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 2 }}>
                Solusi Alat Geodesi
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) =>
              l.hash ? (
                <a
                  key={l.name}
                  href={l.hash}
                  onClick={(e) => goHash(e, l.hash)}
                  className="relative px-3.5 py-2 text-[13.5px] font-medium text-slate-700 hover:text-green-700 transition-colors duration-200 no-underline group"
                >
                  {l.name}
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] rounded-full bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              ) : (
                <NavLink
                  key={l.name}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `relative px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-200 no-underline group ${
                      isActive ? 'text-green-700' : 'text-slate-700 hover:text-green-700'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.name}
                      <span
                        className={`absolute bottom-1 left-3.5 right-3.5 h-[2px] rounded-full bg-green-600 transition-transform duration-200 origin-left ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+628138868196"
              className="flex items-center gap-2 text-[13px] font-medium text-slate-700 hover:text-green-700 transition-colors no-underline"
            >
              <Phone size={14} />
              0813-8868-196
            </a>
            <Magnetic>
              <a
                href="#kontak"
                onClick={(e) => goHash(e, '#kontak')}
                className="btn-primary text-[13px]"
              >
                Hubungi Kami
              </a>
            </Magnetic>
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
                <motion.div
                  key={l.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {l.hash ? (
                    <a
                      href={l.hash}
                      onClick={(e) => goHash(e, l.hash)}
                      className="block py-3 px-4 text-sm font-medium text-slate-700 hover:text-green-700 hover:bg-green-50 rounded-xl transition-all no-underline"
                    >
                      {l.name}
                    </a>
                  ) : (
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      className={({ isActive }) =>
                        `block py-3 px-4 text-sm font-medium rounded-xl transition-all no-underline ${
                          isActive ? 'text-green-700 bg-green-50' : 'text-slate-700 hover:text-green-700 hover:bg-green-50'
                        }`
                      }
                    >
                      {l.name}
                    </NavLink>
                  )}
                </motion.div>
              ))}
              <div className="pt-3 pb-2">
                <a
                  href="#kontak"
                  onClick={(e) => goHash(e, '#kontak')}
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
