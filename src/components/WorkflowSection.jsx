import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const flows = [
  {
    key: 'sewa',
    tab: 'Sewa Alat',
    steps: [
      { title: 'Konsultasi & Pemilihan Alat', desc: 'Identifikasi kebutuhan proyek, lokasi, durasi sewa, jenis pekerjaan, dan spesifikasi alat yang diperlukan.' },
      { title: 'Pemeriksaan & Kalibrasi Alat', desc: 'Pengecekan kondisi fisik, fungsi, kelengkapan, serta memastikan alat dalam kondisi siap digunakan sebelum diserahkan kepada pelanggan.' },
      { title: 'Persetujuan & Serah Terima', desc: 'Konfirmasi harga dan periode rental, penyelesaian administrasi, penandatanganan dokumen rental, kemudian alat diserahkan atau dikirim ke lokasi.' },
      { title: 'Penggunaan Alat', desc: 'Pelanggan menggunakan alat sesuai periode rental dengan dukungan informasi dan panduan operasional dari tim kami apabila diperlukan.' },
      { title: 'Pengembalian & Pemeriksaan', desc: 'Alat dikembalikan sesuai jadwal dan dilakukan pemeriksaan kondisi serta kelengkapan alat sebelum proses rental dinyatakan selesai.' },
    ],
  },
  {
    key: 'kalibrasi',
    tab: 'Kalibrasi',
    steps: [
      { title: 'Penerimaan & Identifikasi Alat', desc: 'Pencatatan jenis alat, merek, tipe, nomor seri, kondisi awal, serta kebutuhan kalibrasi dari pelanggan.' },
      { title: 'Pemeriksaan Kondisi Awal', desc: 'Pemeriksaan fisik dan fungsi alat untuk memastikan alat dapat menjalani proses kalibrasi dengan baik.' },
      { title: 'Proses Kalibrasi & Pengujian', desc: 'Pengujian parameter alat menggunakan metode dan standar kalibrasi yang sesuai untuk mengetahui tingkat akurasi dan penyimpangan alat.' },
      { title: 'Verifikasi & Penerbitan Sertifikat', desc: 'Hasil kalibrasi diverifikasi dan didokumentasikan dalam laporan/sertifikat kalibrasi sesuai hasil pengujian.' },
      { title: 'Pengembalian Alat', desc: 'Alat dikembalikan kepada pelanggan bersama dokumen hasil kalibrasi dan informasi terkait kondisi serta hasil pengujiannya.' },
    ],
  },
  {
    key: 'servis',
    tab: 'Servis & Perbaikan',
    steps: [
      { title: 'Penerimaan & Pemeriksaan Awal', desc: 'Identifikasi jenis alat, keluhan pelanggan, kondisi fisik, serta pemeriksaan awal untuk mengetahui indikasi kerusakan.' },
      { title: 'Diagnosa Kerusakan', desc: 'Teknisi melakukan pemeriksaan dan pengujian untuk menentukan sumber masalah serta komponen yang perlu diperbaiki atau diganti.' },
      { title: 'Estimasi & Persetujuan Perbaikan', desc: 'Pelanggan menerima informasi mengenai jenis pekerjaan, kebutuhan spare part, estimasi biaya, dan waktu pengerjaan untuk mendapatkan persetujuan.' },
      { title: 'Proses Perbaikan & Pengujian', desc: 'Perbaikan dilakukan oleh teknisi, kemudian alat diuji kembali untuk memastikan fungsi dan performanya sesuai.' },
      { title: 'Quality Check & Pengembalian', desc: 'Dilakukan pemeriksaan akhir sebelum alat diserahkan kembali kepada pelanggan beserta informasi mengenai pekerjaan yang telah dilakukan.' },
    ],
  },
  {
    key: 'jualbeli',
    tab: 'Jual / Beli Alat',
    steps: [
      { title: 'Konsultasi Kebutuhan', desc: 'Identifikasi kebutuhan alat berdasarkan jenis pekerjaan, spesifikasi teknis, kondisi lapangan, dan anggaran pelanggan.' },
      { title: 'Rekomendasi & Penawaran', desc: 'Tim memberikan rekomendasi alat yang sesuai beserta spesifikasi, harga, ketersediaan, dan pilihan pendukung lainnya.' },
      { title: 'Konfirmasi Pesanan', desc: 'Pelanggan melakukan konfirmasi pembelian dan menyelesaikan proses administrasi serta pembayaran sesuai kesepakatan.' },
      { title: 'Pemeriksaan & Persiapan Alat', desc: 'Alat diperiksa, diuji fungsi, dan dipersiapkan sebelum dikirim atau diserahkan kepada pelanggan.' },
      { title: 'Pengiriman & After Sales', desc: 'Alat dikirim atau diserahkan kepada pelanggan, disertai informasi penggunaan serta dukungan layanan purna jual apabila diperlukan.' },
    ],
  },
];

export default function WorkflowSection({ hideHeader = false }) {
  const [active, setActive] = useState(0);
  const flow = flows[active];

  return (
    <section
      id="alur-kerja"
      style={{ background: '#f7faf8' }}
      className="py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        {!hideHeader && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">Alur Kerja</p>
          <div className="section-divider mx-auto mb-5" />
          <h2 className="heading-lg text-slate-900 mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
            Proses yang <span className="text-gradient">Jelas & Terukur</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-base">
            Setiap layanan kami mengikuti alur kerja terstruktur agar hasil dan waktu pengerjaan dapat diandalkan.
          </p>
        </motion.div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {flows.map((f, i) => (
            <button
              key={f.key}
              onClick={() => setActive(i)}
              className="px-4 sm:px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-250"
              style={{
                background: active === i ? '#226138' : '#fff',
                color: active === i ? '#fff' : '#3a4a41',
                border: `1.5px solid ${active === i ? '#226138' : '#e1e9e4'}`,
              }}
            >
              {f.tab}
            </button>
          ))}
        </div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={flow.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {flow.steps.map((step, i) => (
              <div key={i} className="relative">
                {i < flow.steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 h-[2px] z-0"
                    style={{ background: '#c8ddcf', left: 'calc(100% - 12px)', width: '24px' }}
                  />
                )}
                <div className="card p-5 h-full relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-sm mb-4"
                    style={{ background: '#dcece1', color: '#1a4a2e' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display font-semibold text-slate-900 text-[14px] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-[12.5px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
