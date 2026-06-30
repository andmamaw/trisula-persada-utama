import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function DroneSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scanY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section id="teknologi" ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-navy-900">
      {/* Terrain visualization */}
      <div className="absolute inset-0">
        {/* Base terrain gradient */}
        <div className="absolute inset-0 terrain-gradient opacity-50" />
        {/* Contour lines */}
        <div className="absolute inset-0 contour-lines opacity-40" />
        {/* Topo circles */}
        <div className="absolute inset-0 topo-bg opacity-40" />
        {/* Radial spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-glow/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Drone visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-navy-950/50">
              {/* Terrain map inside */}
              <div className="absolute inset-0 grid-overlay-dense" />
              <div className="absolute inset-0 topo-bg opacity-60" />

              {/* Elevation bands */}
              <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neon/10 to-transparent" />
                <div className="absolute bottom-1/3 left-0 right-0 h-1/3 bg-gradient-to-t from-cyan-glow/5 to-transparent" />
              </div>

              {/* Drone + Scan cone */}
              <motion.div style={{ y: scanY }} className="absolute inset-0 flex flex-col items-center">
                {/* Drone icon */}
                <div className="relative mt-8">
                  <svg width="80" height="50" viewBox="0 0 80 50" fill="none" className="drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">
                    <rect x="30" y="18" width="20" height="14" rx="4" fill="rgba(0,229,255,0.2)" stroke="#00e5ff" strokeWidth="1.2" />
                    <line x1="32" y1="20" x2="12" y2="8" stroke="#00e5ff" strokeWidth="1" opacity="0.7" />
                    <line x1="48" y1="20" x2="68" y2="8" stroke="#00e5ff" strokeWidth="1" opacity="0.7" />
                    <line x1="32" y1="30" x2="12" y2="42" stroke="#00e5ff" strokeWidth="1" opacity="0.7" />
                    <line x1="48" y1="30" x2="68" y2="42" stroke="#00e5ff" strokeWidth="1" opacity="0.7" />
                    <circle cx="12" cy="8" r="8" fill="none" stroke="#00e5ff" strokeWidth="0.6" opacity="0.4">
                      <animateTransform attributeName="transform" type="rotate" from="0 12 8" to="360 12 8" dur="0.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="68" cy="8" r="8" fill="none" stroke="#00e5ff" strokeWidth="0.6" opacity="0.4">
                      <animateTransform attributeName="transform" type="rotate" from="0 68 8" to="360 68 8" dur="0.4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="12" cy="42" r="8" fill="none" stroke="#00e5ff" strokeWidth="0.6" opacity="0.4">
                      <animateTransform attributeName="transform" type="rotate" from="0 12 42" to="360 12 42" dur="0.45s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="68" cy="42" r="8" fill="none" stroke="#00e5ff" strokeWidth="0.6" opacity="0.4">
                      <animateTransform attributeName="transform" type="rotate" from="0 68 42" to="360 68 42" dur="0.35s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="40" cy="25" r="3" fill="#00e5ff" opacity="0.8" />
                  </svg>
                </div>

                {/* Scan cone */}
                <div className="w-0 h-0 border-l-[80px] border-r-[80px] border-b-[200px] border-l-transparent border-r-transparent border-b-cyan-glow/[0.04]" />
              </motion.div>

              {/* Scan line */}
              <motion.div
                animate={{ y: [0, 300, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-glow/40 to-transparent"
                style={{ top: '30%' }}
              />

              {/* Corner marks */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-cyan-glow/30" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-cyan-glow/30" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-cyan-glow/30" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-cyan-glow/30" />

              {/* Data overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                <span className="text-cyan-glow/50 text-[10px] font-mono">LAT -6.2088°</span>
                <span className="text-cyan-glow/50 text-[10px] font-mono">LON 106.8456°</span>
                <span className="text-neon/50 text-[10px] font-mono animate-blink">● REC</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-neon/40" />
              <span className="text-neon/70 text-xs font-mono tracking-[0.3em] uppercase">Drone Mapping</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              See the World from a{' '}
              <span className="gradient-text-cyan">Smarter Angle</span>
            </h2>

            <p className="text-white/40 text-sm lg:text-base leading-relaxed mb-8">
              Pemetaan udara resolusi tinggi untuk menghasilkan orthophoto, DTM, DSM, model 3D, dan data spasial yang akurat. Teknologi drone mapping kami memungkinkan survei area luas dengan efisiensi waktu dan biaya yang optimal.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Orthophoto', value: '2cm/px' },
                { label: 'Area Coverage', value: '500 Ha/day' },
                { label: '3D Model', value: 'Point Cloud' },
                { label: 'Accuracy', value: '±3cm GSD' },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-4">
                  <p className="text-white/30 text-[10px] font-mono uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-cyan-glow font-heading font-semibold text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
