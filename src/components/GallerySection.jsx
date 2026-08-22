import { motion } from 'framer-motion';
import g1 from '../assets/gallery/g1.jpg';
import g2 from '../assets/gallery/g2.jpg';
import g3 from '../assets/gallery/g3.jpg';
import g4 from '../assets/gallery/g4.jpg';
import g5 from '../assets/gallery/g5.jpg';
import g6 from '../assets/gallery/g6.jpg';
import g7 from '../assets/gallery/g7.jpg';
import g8 from '../assets/gallery/g8.jpg';

const photos = [g1, g2, g3, g4, g5, g6, g7, g8];

export default function GallerySection() {
  return (
    <section style={{ background: '#f7faf8' }} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">Dokumentasi</p>
          <div className="section-divider mx-auto mb-5" />
          <h2 className="heading-lg text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Aktivitas Tim di <span className="text-gradient">Lapangan</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="rounded-xl overflow-hidden aspect-[3/4] group cursor-pointer"
            >
              <img
                src={src}
                alt={`Dokumentasi lapangan ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
