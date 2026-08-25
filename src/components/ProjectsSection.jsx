import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import TiltCard from './ui/TiltCard';
import project1 from '../assets/photos/project-1.jpg';
import project2 from '../assets/photos/project-2.jpg';
import project3 from '../assets/photos/project-3.jpg';

const projects = [
  {
    title: 'Fertilicality Tower Silo Indofood',
    location: 'Kota Baru Parahyangan',
    type: 'Survei Topografi',
    client: 'PT Lentera Permai Oetama',
    year: '2024',
    photo: project1,
  },
  {
    title: 'Training GNSS Metode RTK',
    location: 'Mekarwangi, Bandung',
    type: 'Pelatihan',
    client: 'BPN Kota Bandung',
    year: '2025',
    photo: project2,
  },
  {
    title: 'Pengukuran Lahan untuk Warehouse',
    location: 'Soreang, Kabupaten Bandung',
    type: 'Survei Topografi',
    client: 'PT Bhumi Ekatama',
    year: '2026',
    photo: project3,
  },
  {
    title: 'Pengujian Pembangunan Jalan & Jembatan Mandalika',
    location: 'Desa Kuta, Kec. Pujut, Lombok Tengah, NTB',
    type: 'Konsultan Sipil',
    client: 'LAPI ITB',
    year: '2026',
    photo: null,
  },
];

const PlaceholderVisual = () => (
  <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #123420, #1a4a2e)' }}>
    <div className="absolute inset-0 topo-pattern opacity-80" />
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 60 60" className="w-14 h-14 opacity-30" fill="none">
        <path d="M10 45 L22 25 L32 35 L50 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="25" r="2.5" fill="#fff"/>
        <circle cx="50" cy="12" r="2.5" fill="#fff"/>
      </svg>
    </div>
  </div>
);

export default function ProjectsSection() {
  return (
    <section
      id="proyek"
      style={{ background: '#fff' }}
      className="py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Proyek Kami</p>
          <div className="section-divider mb-5" />
          <h2 className="heading-lg text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Kepercayaan yang <span className="text-gradient">Terbukti di Lapangan</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <TiltCard className="card overflow-hidden group cursor-pointer">
                <div className="relative h-56 overflow-hidden">
                  {p.photo ? (
                    <>
                      <img src={p.photo} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,40,24,0.05) 0%, rgba(13,40,24,0.6) 100%)' }}/>
                    </>
                  ) : (
                    <PlaceholderVisual />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.92)', color: '#1a4a2e' }}>
                      {p.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="font-mono text-[10px] text-white/80">{p.year}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/15 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight size={14} className="text-white"/>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-slate-900 text-[15px] mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <MapPin size={11} className="text-slate-400"/>
                    <span className="text-xs text-slate-500">{p.location}</span>
                  </div>
                  <p className="text-xs text-slate-400">Klien: {p.client}</p>
                </div>
              </TiltCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
