import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PHONE = '628138868196'; // 0813-8868-196 in international format, no leading 0
const MESSAGE = 'Halo Trisula Persada Utama, saya ingin bertanya mengenai layanan sewa/jual-beli/servis/kalibrasi alat geodesi.';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
    <path
      fill="#fff"
      d="M16.02 3C9.4 3 4 8.36 4 14.94c0 2.34.68 4.52 1.86 6.37L4 29l7.9-1.83a12.98 12.98 0 0 0 4.12.67c6.62 0 12.02-5.36 12.02-11.94C28.04 8.36 22.65 3 16.02 3Z"
    />
    <path
      fill="#25D366"
      d="M16.02 4.6c-5.72 0-10.38 4.63-10.38 10.34 0 2.06.6 3.98 1.65 5.6l.27.42-1.1 4.02 4.15-1.08.4.24a10.4 10.4 0 0 0 5.01 1.28c5.72 0 10.38-4.63 10.38-10.34S21.74 4.6 16.02 4.6Z"
    />
    <path
      fill="#fff"
      d="M12.6 9.9c-.24-.53-.5-.54-.73-.55h-.62c-.22 0-.57.08-.87.4-.3.32-1.13 1.1-1.13 2.7 0 1.58 1.16 3.11 1.32 3.33.16.21 2.24 3.59 5.53 4.89 2.74 1.08 3.3.86 3.89.8.6-.05 1.94-.79 2.21-1.55.28-.77.28-1.42.2-1.56-.09-.14-.32-.22-.66-.39-.35-.17-2.05-1.01-2.37-1.13-.32-.11-.55-.17-.78.17-.23.34-.9 1.13-1.1 1.36-.2.23-.4.26-.75.09-.35-.18-1.46-.54-2.78-1.72-1.03-.92-1.72-2.05-1.92-2.4-.2-.34-.02-.53.15-.7.15-.15.34-.4.5-.6.17-.2.22-.35.34-.58.11-.23.06-.43-.02-.6-.08-.18-.75-1.9-1.06-2.6Z"
    />
  </svg>
);

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(true), 2500);
    const hide = setTimeout(() => setShowTooltip(false), 7000);
    return () => { clearTimeout(t); clearTimeout(hide); };
  }, []);

  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[60] flex items-center gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="hidden sm:block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800"
            style={{ background: '#fff', boxShadow: '0 8px 28px rgba(13,40,24,0.18)' }}
          >
            Chat via WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full"
        style={{ background: '#25D366', boxShadow: '0 10px 30px rgba(37,211,102,0.45)' }}
      >
        <span
          className="absolute inset-0 rounded-full"
          style={{ background: '#25D366', animation: 'wa-pulse 2.4s ease-out infinite' }}
        />
        <span className="relative z-10">
          <WhatsAppIcon />
        </span>
      </motion.a>

      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: 0.55; }
          70%  { transform: scale(1.7); opacity: 0; }
          100% { transform: scale(1.7); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
