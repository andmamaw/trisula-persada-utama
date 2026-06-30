import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, MapPin, Target, Crosshair } from 'lucide-react';

/* Landscape + Surveyor SVG Scene */
const HeroScene = () => (
  <svg
    viewBox="0 0 1200 600"
    className="absolute inset-0 w-full h-full"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
  >
    {/* Sky gradient */}
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0%" stopColor="#0a1628"/>
        <stop offset="40%" stopColor="#0f2a5e"/>
        <stop offset="75%" stopColor="#1a3a6e"/>
        <stop offset="100%" stopColor="#1e4a3a"/>
      </linearGradient>
      <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0%" stopColor="#1e4a30"/>
        <stop offset="100%" stopColor="#0f2a18"/>
      </linearGradient>
      <linearGradient id="hill1" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0%" stopColor="#1a3d28"/>
        <stop offset="100%" stopColor="#0d2418"/>
      </linearGradient>
      <linearGradient id="hill2" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0%" stopColor="#152f1e"/>
        <stop offset="100%" stopColor="#0a1e12"/>
      </linearGradient>
      <linearGradient id="scanBeam" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25"/>
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
      </radialGradient>
      <filter id="blur4">
        <feGaussianBlur stdDeviation="4"/>
      </filter>
    </defs>

    {/* Background */}
    <rect width="1200" height="600" fill="url(#sky)"/>

    {/* Stars / atmosphere dots */}
    {[
      [120,40],[250,80],[400,30],[550,60],[700,40],[850,70],[1000,35],[1100,55],
      [180,110],[320,90],[480,120],[630,95],[780,115],[930,85],[1050,100],
    ].map(([x,y], i) => (
      <circle key={i} cx={x} cy={y} r={i%3===0?1.5:1} fill="#fff" opacity={0.3+Math.random()*0.3}/>
    ))}

    {/* Distant mountains */}
    <path d="M0 420 L150 260 L280 340 L420 200 L560 310 L700 180 L840 280 L980 160 L1100 260 L1200 210 L1200 600 L0 600 Z"
      fill="url(#hill2)" opacity="0.7"/>
    {/* Mid mountains */}
    <path d="M0 480 L100 360 L200 420 L340 300 L480 390 L620 320 L760 400 L900 340 L1040 420 L1200 350 L1200 600 L0 600 Z"
      fill="url(#hill1)"/>
    {/* Foreground ground */}
    <path d="M0 520 Q300 500 600 510 Q900 520 1200 505 L1200 600 L0 600 Z"
      fill="url(#ground)"/>

    {/* Tree silhouettes left */}
    {[60,90,130].map((x, i) => (
      <g key={i} opacity="0.6">
        <polygon points={`${x},${480-i*10} ${x-12},${520-i*10} ${x+12},${520-i*10}`} fill="#0a2010"/>
        <rect x={x-3} y={520-i*10} width="6" height={15+i*5} fill="#091a0d"/>
      </g>
    ))}
    {/* Tree silhouettes right */}
    {[1090,1130,1160].map((x, i) => (
      <g key={i} opacity="0.5">
        <polygon points={`${x},${475-i*8} ${x-10},${510-i*8} ${x+10},${510-i*8}`} fill="#0a2010"/>
        <rect x={x-3} y={510-i*8} width="5" height={12+i*4} fill="#091a0d"/>
      </g>
    ))}

    {/* Topographic grid lines */}
    {Array.from({length:14},(_,i)=>(
      <line key={`v${i}`} x1={i*100} y1="0" x2={i*100} y2="600"
        stroke="#3b82f6" strokeWidth="0.4" opacity="0.08"/>
    ))}
    {Array.from({length:7},(_,i)=>(
      <line key={`h${i}`} x1="0" y1={i*100} x2="1200" y2={i*100}
        stroke="#3b82f6" strokeWidth="0.4" opacity="0.08"/>
    ))}

    {/* Contour lines (topographic effect) */}
    {[0,1,2].map(i => (
      <path key={i}
        d={`M 200 ${540+i*6} Q 400 ${530+i*5} 600 ${535+i*6} Q 800 ${540+i*5} 1000 ${535+i*6}`}
        stroke="#60a5fa" strokeWidth="0.5" opacity={0.12-i*0.03}/>
    ))}

    {/* Surveyor figure */}
    <g transform="translate(820, 360)">
      {/* Tripod legs */}
      <line x1="0" y1="70" x2="-35" y2="145" stroke="#d4b896" strokeWidth="3" strokeLinecap="round"/>
      <line x1="0" y1="70" x2="35" y2="145" stroke="#d4b896" strokeWidth="3" strokeLinecap="round"/>
      <line x1="0" y1="70" x2="0" y2="145" stroke="#c4a882" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Cross bar */}
      <line x1="-20" y1="120" x2="20" y2="120" stroke="#b8936a" strokeWidth="1.5"/>

      {/* Total Station instrument */}
      <rect x="-14" y="48" width="28" height="24" rx="5" fill="#e8e0d5" stroke="#c4b89e" strokeWidth="1.5"/>
      <rect x="-8" y="52" width="16" height="10" rx="2" fill="#2563eb" opacity="0.7"/>
      <circle cx="0" cy="62" r="4" fill="#60a5fa" opacity="0.8"/>
      {/* Instrument base */}
      <rect x="-10" y="70" width="20" height="6" rx="3" fill="#c4b89e"/>

      {/* Person - legs */}
      <line x1="-8" y1="145" x2="-12" y2="200" stroke="#1e3a5f" strokeWidth="9" strokeLinecap="round"/>
      <line x1="8" y1="145" x2="12" y2="200" stroke="#1e3a5f" strokeWidth="9" strokeLinecap="round"/>
      {/* Safety vest / torso */}
      <rect x="-18" y="90" width="36" height="58" rx="6" fill="#f59e0b"/>
      <rect x="-10" y="92" width="20" height="54" fill="#fbbf24" rx="4"/>
      {/* Arms */}
      <line x1="-18" y1="100" x2="-32" y2="130" stroke="#f59e0b" strokeWidth="10" strokeLinecap="round"/>
      <line x1="18" y1="100" x2="28" y2="75" stroke="#f59e0b" strokeWidth="10" strokeLinecap="round"/>
      {/* Hard hat */}
      <ellipse cx="0" cy="78" rx="22" ry="9" fill="#fbbf24"/>
      <ellipse cx="0" cy="80" rx="18" ry="13" fill="#fcd34d"/>
      {/* Face */}
      <ellipse cx="0" cy="82" rx="12" ry="10" fill="#dba57a"/>
      {/* Safety reflective stripe */}
      <rect x="-18" y="120" width="36" height="5" rx="2" fill="#fcd34d" opacity="0.8"/>
    </g>

    {/* Scanning beam from instrument */}
    <path d="M 820 410 L 640 540 L 700 540 Z" fill="url(#scanBeam)" opacity="0.2"/>
    <line x1="820" y1="410" x2="680" y2="540" stroke="#60a5fa" strokeWidth="0.8"
      strokeDasharray="8 6" opacity="0.4">
      <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="1.5s" repeatCount="indefinite"/>
    </line>

    {/* Survey target points on ground */}
    {[[350,530,'#ef4444'],[550,522,'#60a5fa'],[680,528,'#10b981'],[430,537,'#f59e0b']].map(([x,y,c],i)=>(
      <g key={i}>
        <circle cx={x} cy={y} r="5" fill={c} opacity="0.9"/>
        <circle cx={x} cy={y} r="12" stroke={c} strokeWidth="1" fill="none" opacity="0.5">
          <animate attributeName="r" values="5;18;5" dur={`${3+i*0.7}s`} repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.5;0;0.5" dur={`${3+i*0.7}s`} repeatCount="indefinite"/>
        </circle>
        {/* Crosshair */}
        <line x1={x-8} y1={y} x2={x+8} y2={y} stroke={c} strokeWidth="0.8" opacity="0.6"/>
        <line x1={x} y1={y-8} x2={x} y2={y+8} stroke={c} strokeWidth="0.8" opacity="0.6"/>
      </g>
    ))}

    {/* Connecting lines between survey points */}
    <line x1="350" y1="530" x2="550" y2="522" stroke="#60a5fa" strokeWidth="0.6"
      strokeDasharray="5 5" opacity="0.3">
      <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite"/>
    </line>
    <line x1="550" y1="522" x2="680" y2="528" stroke="#60a5fa" strokeWidth="0.6"
      strokeDasharray="5 5" opacity="0.3">
      <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite"/>
    </line>
    <line x1="350" y1="530" x2="430" y2="537" stroke="#60a5fa" strokeWidth="0.6"
      strokeDasharray="5 5" opacity="0.3"/>

    {/* Glow around instrument */}
    <circle cx="820" cy="410" r="60" fill="url(#glow)" filter="url(#blur4)"/>

    {/* Altitude markers */}
    <text x="840" y="420" fontSize="9" fill="#60a5fa" fontFamily="JetBrains Mono" opacity="0.7">H: 142.35m</text>
    <text x="840" y="432" fontSize="9" fill="#34d399" fontFamily="JetBrains Mono" opacity="0.7">± 0.02cm</text>

    {/* Data readout floating box */}
    <g transform="translate(950, 300)">
      <rect width="130" height="80" rx="8" fill="rgba(15,32,64,0.85)" stroke="rgba(59,130,246,0.4)" strokeWidth="1"/>
      <text x="10" y="18" fontSize="8" fill="#60a5fa" fontFamily="JetBrains Mono">GNSS RTK</text>
      <text x="10" y="33" fontSize="9" fill="#fff" fontFamily="JetBrains Mono">-7.2541°S</text>
      <text x="10" y="46" fontSize="9" fill="#fff" fontFamily="JetBrains Mono">107.4382°E</text>
      <rect x="10" y="55" width="110" height="1" fill="rgba(59,130,246,0.3)"/>
      <text x="10" y="70" fontSize="8" fill="#34d399" fontFamily="JetBrains Mono">FIX · 12 SAT · 0.8cm</text>
    </g>

    {/* Bottom overlay for text contrast */}
    <rect width="1200" height="600" fill="rgba(5,10,25,0.38)"/>
  </svg>
);

const float = {
  hidden: { opacity: 0, y: 20 },
  visible: (d) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: [0.22,1,0.36,1] } }),
};

export default function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Scene */}
      <div className="absolute inset-0 photo-hero">
        <HeroScene />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            custom={0.2} variants={float} initial="hidden" animate="visible"
            className="mb-6"
          >
            <span className="badge badge-white">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 anim-pulse inline-block" />
              Geodesy & Geospatial Solution
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={0.4} variants={float} initial="hidden" animate="visible"
            className="heading-xl text-white mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
          >
            Solusi Survei Geodesi
            <br />
            <span style={{ color: '#93c5fd' }}>dan Geospatial Presisi</span>
          </motion.h1>

          <motion.p
            custom={0.6} variants={float} initial="hidden" animate="visible"
            className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Mendukung Infrastruktur, Konstruksi dan Pengembangan Wilayah yang Berkelanjutan dengan data survei presisi tinggi di seluruh Indonesia.
          </motion.p>

          <motion.div
            custom={0.8} variants={float} initial="hidden" animate="visible"
            className="flex flex-wrap gap-3"
          >
            <a href="#layanan" onClick={(e)=>{e.preventDefault();document.querySelector('#layanan')?.scrollIntoView({behavior:'smooth'})}} className="btn-primary">
              Layanan Kami <ArrowRight size={16}/>
            </a>
            <a href="#kontak" onClick={(e)=>{e.preventDefault();document.querySelector('#kontak')?.scrollIntoView({behavior:'smooth'})}} className="btn-outline">
              Hubungi Kami
            </a>
          </motion.div>
        </div>

        {/* Floating info cards */}
        <motion.div
          custom={1.1} variants={float} initial="hidden" animate="visible"
          className="hidden lg:flex absolute bottom-16 right-10 gap-4"
        >
          {[
            { Icon: MapPin, label: 'Lokasi', value: 'Indonesia, 34 Provinsi', color: '#60a5fa' },
            { Icon: Target, label: 'Survey Type', value: 'Topographic Mapping', color: '#34d399' },
            { Icon: Crosshair, label: 'Accuracy', value: '± 0.02 cm RTK', color: '#60a5fa' },
          ].map(({ Icon, label, value, color }, i) => (
            <div
              key={i}
              className="anim-float rounded-xl px-4 py-3 backdrop-blur-md"
              style={{
                background: 'rgba(10,22,40,0.75)',
                border: '1px solid rgba(59,130,246,0.3)',
                animationDelay: `${i * 0.8}s`,
              }}
            >
              <div className="flex items-center gap-2.5">
                <Icon size={14} style={{ color }} />
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</p>
                  <p className="text-xs font-semibold text-white mt-0.5">{value}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>Scroll</span>
        <ChevronDown size={16} style={{ color: 'rgba(255,255,255,0.3)' }} className="animate-bounce"/>
      </div>
    </section>
  );
}
