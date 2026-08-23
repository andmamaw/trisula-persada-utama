import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';
import aboutPhoto from '../assets/photos/about.jpg';
import officePhoto from '../assets/photos/office.jpg';

const misi = [
  {
    title: 'Transparent, Helpful, Useful',
    desc: 'Menghadirkan layanan yang jelas, transparan, dan benar-benar memberikan manfaat nyata untuk operasional klien di lapangan.',
  },
  {
    title: 'The Number One Problem Solver',
    desc: 'Menjadi jalan keluar utama dan penyedia berbagai macam solusi aplikatif untuk setiap permasalahan alat geodesi Anda.',
  },
  {
    title: "We Take Care of Your Instrument Like It's Ours",
    desc: 'Memperlakukan, merawat, dan memperbaiki instrumen klien dengan standar kepedulian seolah itu adalah aset kami sendiri.',
  },
  {
    title: 'Klien Adalah Mitra',
    desc: 'Membangun relasi jangka panjang dengan menjadikan klien sebagai mitra strategis, bukan sekadar pembeli, serta selalu mengutamakan kemudahan dalam setiap interaksi.',
  },
];

export default function AboutSection() {
  return (
    <section id="tentang" style={{ background: '#fff' }} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Tentang Kami */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="relative pb-8 pr-8 sm:pb-10 sm:pr-10"
          >
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 24px 60px rgba(13,40,24,0.15)' }}>
              <img src={aboutPhoto} alt="Tim Trisula Persada Utama bersama BPN" className="w-full h-[420px] object-cover"/>
            </div>
            <p className="mt-3 text-xs italic text-slate-400">Tim Trisula Persada Utama bersama Badan Pertanahan Nasional (BPN)</p>

            {/* Office accent photo */}
            <div
              className="absolute bottom-0 right-0 w-36 sm:w-48 rounded-xl overflow-hidden"
              style={{ boxShadow: '0 16px 40px rgba(13,40,24,0.25)', border: '4px solid #fff' }}
            >
              <img src={officePhoto} alt="Kantor Trisula Persada Utama" className="w-full h-28 sm:h-36 object-cover"/>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="section-label mb-3">Tentang Kami</p>
            <div className="section-divider mb-5" />
            <h2 className="heading-lg text-slate-900 mb-5" style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)' }}>
              Pionir Kemudahan dan Transparansi Alat Geodesi
            </h2>
            <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
              <p>
                PT Trisula Persada Utama berakar dari dedikasi sebuah tim independen yang mulai beroperasi sejak tahun 2022. Seiring dengan peningkatan kepercayaan klien dan perluasan jangkauan layanan, kami secara resmi melakukan restrukturisasi dan berevolusi menjadi badan hukum berbentuk Perseroan Terbatas (PT) pada bulan Juni 2026.
              </p>
              <p>
                Kami lahir dari sebuah keresahan dan observasi mendalam terhadap masalah yang ada di masyarakat, khususnya mengenai kurangnya transparansi, minimnya aksesibilitas, dan rumitnya jaringan layanan seputar alat geodesi.
              </p>
              <p>
                Kami memposisikan diri sebagai pionir utama di kawasan yang mendobrak batasan tersebut dengan menawarkan kemudahan, kepercayaan, dan transparansi mutlak bagi seluruh klien dan partner bisnis kami.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Visi & Misi */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Visi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-2xl p-8 flex flex-col"
            style={{ background: 'linear-gradient(135deg, #0d2818, #1a4a2e)' }}
          >
            <div className="icon-box-lg mb-5">
              <Compass size={28}/>
            </div>
            <h3 className="font-display font-bold text-white text-xl mb-3">Visi Kami</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(220,236,225,0.85)' }}>
              Menjadi perusahaan penyedia solusi alat topografi teratas di kawasan yang paling dipercaya oleh klien dan mitra bisnis, serta selalu menjadi garda terdepan dalam menyelesaikan permasalahan instrumentasi geodesi.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="icon-box"><Target size={22}/></div>
              <h3 className="font-display font-bold text-slate-900 text-xl">Misi Kami</h3>
            </div>
            <div className="space-y-4">
              {misi.map((m, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-mono text-[11px] font-bold" style={{ background: '#dcece1', color: '#1a4a2e' }}>
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-0.5">{m.title}</p>
                    <p className="text-slate-500 text-[13.5px] leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
