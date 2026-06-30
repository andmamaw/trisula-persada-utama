import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Trans Java Toll Road',
    location: 'Jawa Timur, Indonesia',
    type: 'Survei Topografi',
    year: '2023',
    km: '340 km',
    css: 'photo-road',
    badge: 'Infrastruktur',
    badgeColor: '#2563eb',
    scene: () => (
      <svg viewBox="0 0 360 220" className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="roadSky" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#0f2040"/>
            <stop offset="100%" stopColor="#1a3a6e"/>
          </linearGradient>
          <linearGradient id="roadGround" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#1e4a2e"/>
            <stop offset="100%" stopColor="#0f2a18"/>
          </linearGradient>
        </defs>
        <rect width="360" height="220" fill="url(#roadSky)"/>
        <path d="M0 150 Q90 140 180 145 Q270 150 360 140 L360 220 L0 220Z" fill="url(#roadGround)"/>
        {/* Road */}
        <path d="M60 220 L130 140 L230 140 L300 220Z" fill="rgba(30,30,50,0.9)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
        {/* Road markings */}
        {[0,1,2,3,4].map(i=>(
          <line key={i} x1="180" y1={145+i*16} x2="180" y2={155+i*16}
            stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
        ))}
        {/* Hills */}
        <path d="M0 155 Q60 120 120 135 Q200 150 280 120 Q320 108 360 125 L360 155Z" fill="rgba(20,50,30,0.8)"/>
        {/* Drone overhead indicator */}
        <circle cx="180" cy="40" r="8" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0.8"/>
        <line x1="174" y1="40" x2="186" y2="40" stroke="#60a5fa" strokeWidth="1.2" opacity="0.8"/>
        <line x1="180" y1="34" x2="180" y2="46" stroke="#60a5fa" strokeWidth="1.2" opacity="0.8"/>
        {/* Coverage lines */}
        <line x1="180" y1="48" x2="100" y2="140" stroke="#60a5fa" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3"/>
        <line x1="180" y1="48" x2="260" y2="140" stroke="#60a5fa" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3"/>
        {/* Survey points */}
        {[[130,140],[180,143],[230,140]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="3" fill="#ef4444" opacity="0.9"/>
        ))}
        <rect width="360" height="220" fill="rgba(5,10,25,0.2)"/>
      </svg>
    ),
  },
  {
    title: 'Nickel Mining Area',
    location: 'Kendari, Sulawesi Tenggara',
    type: 'Drone Mapping 3D',
    year: '2023',
    km: '1.200 ha',
    css: 'photo-mining',
    badge: 'Pertambangan',
    badgeColor: '#d97706',
    scene: () => (
      <svg viewBox="0 0 360 220" className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice">
        <rect width="360" height="220" fill="#6b2a00"/>
        <path d="M0 80 Q90 60 180 70 Q270 80 360 60 L360 0 L0 0Z" fill="#4a1e00"/>
        {/* Pit terraces */}
        {[0,1,2,3,4].map(i=>(
          <ellipse key={i} cx="180" cy="130" rx={60+i*25} ry={20+i*10}
            stroke="rgba(255,200,100,0.3)" strokeWidth="1.5" fill="none"/>
        ))}
        <ellipse cx="180" cy="130" rx="30" ry="12" fill="rgba(90,50,0,0.8)" stroke="rgba(255,200,100,0.5)" strokeWidth="1"/>
        {/* Equipment dots */}
        {[[150,120],[180,125],[210,118]].map(([x,y],i)=>(
          <g key={i}>
            <rect x={x-4} y={y-4} width="8" height="8" rx="1" fill="#fbbf24" opacity="0.8"/>
            <circle cx={x} cy={y-8} r="3" stroke="#fbbf24" strokeWidth="1" fill="none" opacity="0.5"/>
          </g>
        ))}
        {/* Volume data overlay */}
        <rect x="20" y="160" width="120" height="40" rx="6" fill="rgba(0,0,0,0.6)" stroke="rgba(251,191,36,0.3)" strokeWidth="1"/>
        <text x="30" y="175" fontSize="8" fill="#fbbf24" fontFamily="JetBrains Mono">VOLUME: 2.4M m³</text>
        <text x="30" y="190" fontSize="8" fill="#fcd34d" fontFamily="JetBrains Mono">AREA: 1,200 ha</text>
        <rect width="360" height="220" fill="rgba(5,5,5,0.25)"/>
      </svg>
    ),
  },
  {
    title: 'Port of Benoa',
    location: 'Bali, Indonesia',
    type: 'Bathymetric Survey',
    year: '2022',
    km: 'Pelabuhan',
    css: 'photo-port',
    badge: 'Kelautan',
    badgeColor: '#0284c7',
    scene: () => (
      <svg viewBox="0 0 360 220" className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice">
        <rect width="360" height="220" fill="#0c3a5e"/>
        {/* Water ripples */}
        {[0,1,2,3].map(i=>(
          <path key={i} d={`M0 ${90+i*22} Q90 ${82+i*22} 180 ${90+i*22} Q270 ${98+i*22} 360 ${90+i*22}`}
            stroke={`rgba(96,165,250,${0.4-i*0.07})`} strokeWidth={i===0?1.5:0.8} fill="none"/>
        ))}
        {/* Sonar lines */}
        {[-30,-15,0,15,30].map((dx,i)=>(
          <line key={i} x1={180+dx} y1="60" x2={175+dx} y2="200"
            stroke="#60a5fa" strokeWidth="0.5" strokeDasharray="3 4" opacity={i===2?0.5:0.2}/>
        ))}
        {/* Depth markers */}
        {[[70,130,'5m'],[130,150,'12m'],[180,165,'18m'],[240,145,'10m']].map(([x,y,d],i)=>(
          <g key={i}>
            <circle cx={x} cy={y} r="3" fill="#60a5fa" opacity="0.7"/>
            <text x={x+5} y={y+3} fontSize="8" fill="#93c5fd" fontFamily="JetBrains Mono">{d}</text>
          </g>
        ))}
        {/* Vessel */}
        <path d="M140 75 L220 75 L215 88 L145 88 Z" fill="rgba(255,255,255,0.2)" stroke="#93c5fd" strokeWidth="1"/>
        <rect x="170" y="60" width="20" height="15" rx="2" fill="rgba(255,255,255,0.15)" stroke="#93c5fd" strokeWidth="0.8"/>
        {/* Port structures */}
        <rect x="0" y="55" width="80" height="25" rx="0" fill="rgba(30,60,100,0.8)" stroke="rgba(147,197,253,0.3)" strokeWidth="0.5"/>
        <rect x="280" y="50" width="80" height="30" rx="0" fill="rgba(30,60,100,0.8)" stroke="rgba(147,197,253,0.3)" strokeWidth="0.5"/>
        <rect width="360" height="220" fill="rgba(5,15,35,0.3)"/>
      </svg>
    ),
  },
  {
    title: 'Industrial Complex',
    location: 'Kalimantan Timur',
    type: 'Monitoring Proyek',
    year: '2023',
    km: 'Industri',
    css: 'photo-urban',
    badge: 'Industri',
    badgeColor: '#7c3aed',
    scene: () => (
      <svg viewBox="0 0 360 220" className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice">
        <rect width="360" height="220" fill="#1e1b4b"/>
        {/* Buildings */}
        {[
          [30,220,40,90],[80,220,35,120],[125,220,50,80],[185,220,45,140],
          [240,220,40,95],[290,220,35,110],[330,220,25,70],
        ].map(([x,y,w,h],i)=>(
          <g key={i}>
            <rect x={x} y={y-h} width={w} height={h} fill={`rgba(${50+i*10},${40+i*8},${120+i*10},0.9)`}
              stroke="rgba(139,92,246,0.3)" strokeWidth="0.5"/>
            {/* Windows */}
            {Array.from({length:Math.floor(h/18)},(_,r)=>
              Array.from({length:Math.floor(w/12)},(_,c)=>(
                <rect key={`${r}${c}`} x={x+4+c*10} y={y-h+8+r*14} width="5" height="7" rx="1"
                  fill="rgba(255,220,100,0.6)" opacity={Math.random()>0.3?1:0}/>
              ))
            )}
          </g>
        ))}
        {/* Ground */}
        <rect x="0" y="195" width="360" height="25" fill="rgba(10,10,30,0.9)"/>
        {/* Monitoring scan line */}
        <line x1="0" y1="140" x2="360" y2="140" stroke="#a78bfa" strokeWidth="1" opacity="0.4"
          strokeDasharray="8 4">
          <animate attributeName="y1" values="40;200" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="y2" values="40;200" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;0.4;0" dur="4s" repeatCount="indefinite"/>
        </line>
        <rect width="360" height="220" fill="rgba(10,8,30,0.3)"/>
      </svg>
    ),
  },
  {
    title: 'Landfill Volume Control',
    location: 'DKI Jakarta',
    type: 'Drone Survey',
    year: '2022',
    km: 'Lingkungan',
    css: 'photo-forest',
    badge: 'Lingkungan',
    badgeColor: '#059669',
    scene: () => (
      <svg viewBox="0 0 360 220" className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice">
        <rect width="360" height="220" fill="#052e16"/>
        {/* Terrain mounds */}
        {[0,1,2].map(i=>(
          <ellipse key={i} cx={120+i*60} cy={150+i*10} rx={80-i*15} ry={40-i*8}
            fill={`rgba(${10+i*5},${60+i*15},${20+i*8},0.9)`}/>
        ))}
        {/* Volume measurement lines */}
        <line x1="60" y1="110" x2="300" y2="110" stroke="#34d399" strokeWidth="1" strokeDasharray="6 4" opacity="0.6"/>
        <line x1="60" y1="150" x2="300" y2="150" stroke="#10b981" strokeWidth="1" strokeDasharray="6 4" opacity="0.4"/>
        {[80,140,200,260].map((x,i)=>(
          <g key={i}>
            <line x1={x} y1="108" x2={x} y2="155" stroke="#34d399" strokeWidth="0.8" opacity="0.5"/>
            <text x={x+3} y="132" fontSize="8" fill="#34d399" fontFamily="JetBrains Mono">{(2.1+i*0.3).toFixed(1)}m</text>
          </g>
        ))}
        {/* Data panel */}
        <rect x="200" y="20" width="145" height="60" rx="6" fill="rgba(0,0,0,0.7)" stroke="rgba(52,211,153,0.3)" strokeWidth="1"/>
        <text x="210" y="36" fontSize="8" fill="#34d399" fontFamily="JetBrains Mono">TOTAL VOLUME</text>
        <text x="210" y="52" fontSize="14" fill="#fff" fontFamily="Space Grotesk" fontWeight="700">2.4M m³</text>
        <text x="210" y="68" fontSize="8" fill="#6ee7b7" fontFamily="JetBrains Mono">PROGRESS: 73.2%</text>
        <rect width="360" height="220" fill="rgba(0,10,5,0.3)"/>
      </svg>
    ),
  },
  {
    title: 'Coastal Monitoring',
    location: 'Pesisir Sumatra',
    type: 'Remote Sensing',
    year: '2022',
    km: 'Pesisir',
    css: 'photo-coastal',
    badge: 'Monitoring',
    badgeColor: '#0284c7',
    scene: () => (
      <svg viewBox="0 0 360 220" className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice">
        <rect width="360" height="220" fill="#0c3a5e"/>
        {/* Sea */}
        <rect x="0" y="120" width="360" height="100" fill="#0f4c75" opacity="0.9"/>
        {/* Land */}
        <path d="M0 120 Q60 110 120 115 Q180 120 240 108 Q300 96 360 100 L360 0 L0 0Z" fill="#14532d"/>
        {/* Coastline highlight */}
        <path d="M0 120 Q60 110 120 115 Q180 120 240 108 Q300 96 360 100"
          stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.7"/>
        {/* Satellite path */}
        <path d="M340 20 Q180 80 20 160" stroke="#93c5fd" strokeWidth="1" strokeDasharray="5 5" opacity="0.4"/>
        <circle cx="190" cy="70" r="8" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0.8"/>
        <line x1="184" y1="70" x2="196" y2="70" stroke="#60a5fa" strokeWidth="1" opacity="0.8"/>
        <line x1="190" y1="64" x2="190" y2="76" stroke="#60a5fa" strokeWidth="1" opacity="0.8"/>
        {/* Change detection markers */}
        {[[80,115,'rgba(239,68,68,0.7)'],[200,107,'rgba(239,68,68,0.7)'],[300,99,'rgba(239,68,68,0.5)']].map(([x,y,c],i)=>(
          <g key={i}>
            <rect x={x-12} y={y-12} width="24" height="24" fill="none" stroke={c} strokeWidth="1.5" strokeDasharray="3 2"/>
            <circle cx={x} cy={y} r="2.5" fill={c}/>
          </g>
        ))}
        <rect width="360" height="220" fill="rgba(5,15,35,0.25)"/>
      </svg>
    ),
  },
];

export default function ProjectsSection() {
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 360;
    scrollRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanLeft(scrollLeft > 10);
    setCanRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  return (
    <section
      id="proyek"
      style={{ background: '#0f172a' }}
      className="py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4"
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-blue-400 mb-3">Proyek Kami</p>
            <div style={{ width: 48, height: 3, background: '#2563eb', borderRadius: 2, marginBottom: 16 }}/>
            <h2 className="heading-lg text-white" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Hasil Kerja Nyata
              <br />
              <span style={{ color: '#93c5fd' }}>di Seluruh Indonesia</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              disabled={!canLeft}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{
                background: canLeft ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: canLeft ? '#fff' : 'rgba(255,255,255,0.2)',
              }}
            >
              <ChevronLeft size={18}/>
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canRight}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{
                background: canRight ? '#2563eb' : 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: canRight ? '#fff' : 'rgba(255,255,255,0.2)',
              }}
            >
              <ChevronRight size={18}/>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll container — full bleed */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-5 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: 'none',
          paddingLeft: 'max(20px, calc((100vw - 1280px) / 2 + 40px))',
          paddingRight: 'max(20px, calc((100vw - 1280px) / 2 + 40px))',
          msOverflowStyle: 'none',
        }}
      >
        {projects.map((p, i) => {
          const Scene = p.scene;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
              style={{
                width: '300px',
                background: '#1e293b',
                border: '1px solid rgba(255,255,255,0.07)',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Photo area */}
              <div className={`relative h-48 ${p.css} overflow-hidden`}>
                <Scene />
                {/* Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-lg"
                    style={{
                      background: `${p.badgeColor}22`,
                      color: p.badgeColor === '#2563eb' ? '#93c5fd' : p.badgeColor === '#d97706' ? '#fcd34d' : p.badgeColor === '#0284c7' ? '#7dd3fc' : p.badgeColor === '#7c3aed' ? '#c4b5fd' : p.badgeColor === '#059669' ? '#6ee7b7' : '#7dd3fc',
                      border: `1px solid ${p.badgeColor}44`,
                    }}
                  >
                    {p.badge}
                  </span>
                </div>
                <div className="absolute top-3 right-3 z-10">
                  <span className="font-mono text-[10px] text-white/40">{p.year}</span>
                </div>
                {/* Arrow hover */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <ArrowUpRight size={14} className="text-white"/>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-white text-[15px] mb-1.5 group-hover:text-blue-300 transition-colors">
                  {p.title}
                </h3>
                <div className="flex items-center gap-1.5 mb-2.5">
                  <MapPin size={11} style={{ color: 'rgba(255,255,255,0.3)' }}/>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.location}</span>
                </div>
                <p className="font-mono text-[11px]" style={{ color: 'rgba(255,255,255,0.3)' }}>{p.type}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* View all link */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mt-8">
        <a
          href="#kontak"
          onClick={(e)=>{e.preventDefault();document.querySelector('#kontak')?.scrollIntoView({behavior:'smooth'})}}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
        >
          Lihat Semua Proyek <ArrowUpRight size={15}/>
        </a>
      </div>
    </section>
  );
}
