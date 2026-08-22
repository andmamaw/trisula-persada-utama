import { motion } from 'framer-motion';
import esdm from '../assets/clients/esdm.png';
import atrbpn from '../assets/clients/atrbpn.png';
import kementerianpu from '../assets/clients/kementerianpu.png';
import adhi from '../assets/clients/adhi.png';
import wika from '../assets/clients/wika.png';
import ikpt from '../assets/clients/ikpt.png';
import bep from '../assets/clients/bep.png';
import lpo from '../assets/clients/lpo.png';
import soilens from '../assets/clients/soilens.png';
import hotel88 from '../assets/clients/88hotel.png';

const clients = [
  { name: 'Kementerian ESDM', logo: esdm },
  { name: 'Kementerian ATR/BPN', logo: atrbpn },
  { name: 'Kementerian Pekerjaan Umum', logo: kementerianpu },
  { name: 'Adhi Karya', logo: adhi },
  { name: 'WIKA', logo: wika },
  { name: 'IKPT', logo: ikpt },
  { name: 'BEP Precast & Prestress Concrete', logo: bep },
  { name: 'Lentera Permai Oetama', logo: lpo },
  { name: 'Soilens', logo: soilens },
  { name: '88 Hotel', logo: hotel88 },
];

export default function ClientsSection() {
  return (
    <section style={{ background: '#fff' }} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">Mitra & Klien</p>
          <div className="section-divider mx-auto mb-5" />
          <h2 className="heading-lg text-slate-900 mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Dipercaya oleh <span className="text-gradient">Instansi & Korporasi Nasional</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
            Kepercayaan adalah bukti dari kualitas layanan kami. Hanya dalam kurun waktu 1 tahun, kami telah membantu menyelesaikan kebutuhan lebih dari 100 klien — mulai dari skala perorangan hingga korporasi besar di tingkat nasional.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {clients.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.06 }}
              className="client-tile h-24"
              title={c.name}
            >
              <img src={c.logo} alt={c.name} className="max-h-12 max-w-[85%] object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
