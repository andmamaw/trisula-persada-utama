import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ShieldCheck, MessageCircle, MapPin } from 'lucide-react';
import useCountUp from '../hooks/useCountUp';

// Scrubbing a real video beats redrawing an image sequence: the decoder keeps
// only a few frames in memory instead of hundreds of full-size bitmaps, so it
// stays smooth on phones and downloads a fraction of the bytes.
const VIDEO = { d: '/hero/hero-d.mp4', m: '/hero/hero-m.mp4' };

const services = [
  { title: 'Sewa Alat Geodesi', desc: 'Penyewaan instrumen topografi untuk proyek jangka pendek maupun panjang, dengan armada alat terawat dan siap pakai.' },
  { title: 'Jual & Beli Alat', desc: 'Total Station, Theodolite, GNSS/GPS Geodetik, Auto Level. Melayani pembelian alat bekas dengan valuasi transparan.' },
  { title: 'Servis (Perbaikan)', desc: 'Penanganan kerusakan fisik maupun sistem, dengan estimasi waktu dan rincian komponen yang 100% transparan.' },
  { title: 'Kalibrasi', desc: 'Penyesuaian dan pengujian akurasi instrumen agar selalu presisi dan memenuhi standar proyek besar.' },
];

const reasons = [
  { Icon: Clock, title: 'Tepat Waktu', desc: 'Servis, pengiriman alat, hingga administrasi selesai sesuai target waktu yang disepakati.' },
  { Icon: ShieldCheck, title: '100% Transparan', desc: 'Tidak ada hidden fee. Setiap rincian pekerjaan dan penawaran harga kami buka penuh.' },
  { Icon: MessageCircle, title: 'Komunikatif & Solutif', desc: 'Tim kami mitra diskusi yang siap membantu menyelesaikan hambatan teknis Anda.' },
];

const stats = [
  { value: 100, suffix: '+', label: 'Klien Terlayani' },
  { value: 2022, plain: true, label: 'Mulai Beroperasi' },
  { value: 4, label: 'Layanan Utama' },
  { value: 10, suffix: '+', label: 'Mitra & Instansi' },
];

const workflow = [
  { title: 'Konsultasi & Pemilihan Alat', desc: 'Identifikasi kebutuhan proyek, lokasi, durasi, dan spesifikasi alat.' },
  { title: 'Pemeriksaan & Kalibrasi', desc: 'Pengecekan kondisi, fungsi, dan kelengkapan sebelum alat diserahkan.' },
  { title: 'Persetujuan & Serah Terima', desc: 'Konfirmasi harga, administrasi, lalu alat dikirim ke lokasi Anda.' },
  { title: 'Penggunaan Alat', desc: 'Didukung panduan operasional dari tim kami apabila diperlukan.' },
  { title: 'Pengembalian & Pemeriksaan', desc: 'Alat diperiksa kembali sebelum proses rental dinyatakan selesai.' },
];

const projects = [
  { title: 'Fertilicality Tower Silo Indofood', loc: 'Kota Baru Parahyangan', year: '2024' },
  { title: 'Training GNSS Metode RTK', loc: 'BPN Kota Bandung', year: '2025' },
  { title: 'Pengukuran Lahan Warehouse', loc: 'Soreang, Kab. Bandung', year: '2026' },
  { title: 'Jalan & Jembatan Mandalika', loc: 'Lombok Tengah, NTB', year: '2026' },
];

const stages = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'layanan', label: 'Layanan' },
  { id: 'keunggulan', label: 'Keunggulan' },
  { id: 'angka', label: 'Dalam Angka' },
  { id: 'tentang', label: 'Tentang Kami' },
  { id: 'alur-kerja', label: 'Alur Kerja' },
  { id: 'proyek', label: 'Proyek' },
];
const TOTAL = stages.length;

// Each chapter fades out fully before the next fades in. Overlapping the two
// would leave two blocks of text stacked on top of each other, unreadable.
function band(i, share = 0.22) {
  const seg = 1 / TOTAL;
  const start = i / TOTAL;
  const end = (i + 1) / TOTAL;
  const f = seg * share;
  if (i === 0) return { input: [0, 0, end - f, end], output: [1, 1, 1, 0] };
  if (i === TOTAL - 1) return { input: [start, start + f, 1, 1], output: [0, 1, 1, 1] };
  return { input: [start, start + f, end - f, end], output: [0, 1, 1, 0] };
}

// Framer's accelerated scroll path mis-maps multi-stop ranges, so interpolate in JS.
function ramp(v, input, output) {
  if (v <= input[0]) return output[0];
  for (let i = 1; i < input.length; i++) {
    if (v <= input[i]) {
      const span = input[i] - input[i - 1];
      const t = span === 0 ? 1 : (v - input[i - 1]) / span;
      return output[i - 1] + t * (output[i] - output[i - 1]);
    }
  }
  return output[output.length - 1];
}

function Panel({ progress, index, side = 'left', children }) {
  const { input, output } = band(index);
  const opacity = useTransform(progress, (v) => ramp(v, input, output));
  const y = useTransform(progress, (v) => ramp(v, [index / TOTAL, (index + 1) / TOTAL], [34, -34]));

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute inset-x-0 bottom-6 px-5 sm:px-0 sm:inset-x-auto sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 ${
        side === 'left' ? 'sm:left-8 lg:left-14' : 'sm:right-8 lg:right-14'
      } sm:w-[400px] lg:w-[440px]`}
    >
      <div
        className="rounded-2xl p-5 lg:p-7 backdrop-blur-xl max-h-[62vh] sm:max-h-[78vh] overflow-y-auto"
        style={{
          background: 'rgba(8,27,16,0.74)',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: '0 28px 70px rgba(0,0,0,0.4)',
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

function StageHead({ index, label, title }) {
  return (
    <>
      <div className="flex items-center gap-2.5 mb-3">
        <span className="font-mono text-[10px] tracking-[0.25em]" style={{ color: '#8fcba4' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="h-px flex-1" style={{ background: 'rgba(143,203,164,0.35)' }} />
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>
          {label}
        </span>
      </div>
      <h2 className="font-display font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(1.35rem, 2.4vw, 1.9rem)' }}>
        {title}
      </h2>
    </>
  );
}

function Counter({ value, suffix = '', plain, label }) {
  const { count, ref } = useCountUp(value, 1600);
  return (
    <div ref={ref}>
      <p className="font-display font-bold leading-none" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', color: '#8fcba4' }}>
        {plain ? value : count.toLocaleString('id-ID')}{suffix}
      </p>
      <p className="text-[12px] mt-1.5" style={{ color: 'rgba(255,255,255,0.6)' }}>{label}</p>
    </div>
  );
}

function goTo(sel) {
  document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });
}

function MoreLink({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1.5 mt-5 text-[13px] font-semibold no-underline transition-colors duration-200"
      style={{ color: '#8fcba4' }}
    >
      {children} <ArrowRight size={14} />
    </Link>
  );
}

export default function CinematicStory() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const durationRef = useRef(0);
  const lastTimeRef = useRef(0);
  const lastSeekRef = useRef(0);
  const rafRef = useRef(0);
  const reduced = useReducedMotion();

  const [perStage, setPerStage] = useState(95);
  const [ready, setReady] = useState(false);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const compute = () => {
      const small = window.innerWidth < 768;
      setPerStage(small ? 78 : 95);
      setNarrow(window.innerHeight / window.innerWidth > 1.2);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const applyTime = useCallback((t) => {
    const video = videoRef.current;
    const duration = durationRef.current;
    if (!video || !duration) return;
    // stacking up seeks while one is still in flight is what makes scrubbed
    // video stutter — let the decoder finish, the loop will catch up
    if (video.seeking) return;
    const clamped = Math.min(duration - 0.03, Math.max(0, t));
    if (Math.abs(video.currentTime - clamped) < 0.008) return;
    video.currentTime = clamped;
    lastSeekRef.current = performance.now();
  }, []);

  const tick = useCallback((now) => {
    const prev = lastTimeRef.current || now;
    const dt = Math.min(0.05, (now - prev) / 1000);
    lastTimeRef.current = now;

    const diff = targetTimeRef.current - currentTimeRef.current;
    if (Math.abs(diff) < 0.004) {
      currentTimeRef.current = targetTimeRef.current;
      applyTime(currentTimeRef.current);
      rafRef.current = 0;
      return;
    }
    // time-based damping, so a flick of the wheel glides instead of jumping
    currentTimeRef.current += diff * (1 - Math.exp(-dt * 10));
    applyTime(currentTimeRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, [applyTime]);

  const requestSeek = useCallback(() => {
    if (!rafRef.current) {
      lastTimeRef.current = 0;
      rafRef.current = requestAnimationFrame(tick);
    }
  }, [tick]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onMeta = () => { durationRef.current = video.duration || 0; };
    const onReady = () => {
      durationRef.current = video.duration || durationRef.current;
      setReady(true);
      applyTime(currentTimeRef.current);
    };

    video.addEventListener('loadedmetadata', onMeta);
    video.addEventListener('loadeddata', onReady);
    if (video.readyState >= 2) onReady();

    return () => {
      video.removeEventListener('loadedmetadata', onMeta);
      video.removeEventListener('loadeddata', onReady);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      // clear the id as well, or requestSeek sees a stale handle and never
      // schedules again — the stage would freeze for the rest of the session
      rafRef.current = 0;
    };
  }, [applyTime]);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const duration = durationRef.current;
    if (!duration) return;
    targetTimeRef.current = Math.min(duration, Math.max(0, v * duration));
    requestSeek();
    // Safety net: where requestAnimationFrame is throttled (low-power phones,
    // backgrounded tabs) the damped loop stalls and the stage would freeze.
    // Seek straight away instead of waiting for a frame callback.
    if (performance.now() - lastSeekRef.current > 150) {
      currentTimeRef.current = targetTimeRef.current;
      applyTime(currentTimeRef.current);
    }
  });

  const hintOpacity = useTransform(scrollYProgress, (v) => ramp(v, [0, 0.35 / TOTAL], [1, 0]));

  if (reduced) return <StaticFallback />;

  return (
    <section
      id="beranda"
      ref={sectionRef}
      className="relative"
      style={{ height: `${perStage * TOTAL}vh`, background: '#081b10' }}
    >
      {/* dvh keeps the stage flush with the visible area on phones, where the
          browser chrome makes 100vh taller than what you can actually see */}
      <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ height: '100dvh', background: '#081b10' }}>
        <video
          ref={videoRef}
          src={typeof window !== 'undefined' && window.innerWidth < 768 ? VIDEO.m : VIDEO.d}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          tabIndex={-1}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          // portrait crops hard, so bias the framing up towards the instrument
          style={{ objectPosition: narrow ? '50% 36%' : '50% 50%' }}
        />

        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: 'rgba(234,243,236,0.5)' }}>
              Memuat instrumen…
            </span>
          </div>
        )}

        {/* legibility scrims */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(8,27,16,0.82) 0%, rgba(8,27,16,0.28) 42%, rgba(8,27,16,0.28) 58%, rgba(8,27,16,0.82) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(8,27,16,0.6) 0%, transparent 20%, transparent 55%, rgba(8,27,16,0.85) 100%)' }} />
        <div className="absolute inset-0 topo-pattern opacity-60" />

        {/* 01 — Beranda */}
        <Panel progress={scrollYProgress} index={0} side="left">
          <span className="badge badge-white mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 anim-pulse inline-block" />
            Sewa · Jual-Beli · Servis · Kalibrasi
          </span>
          <h1 className="heading-xl text-white mb-4" style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)' }}>
            Solusi Penyewaan<br />
            <span style={{ color: '#8fcba4' }}>Alat Geodesi Terpercaya</span>
          </h1>
          <p className="text-[14px] leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.76)' }}>
            Total Station, Theodolite, GNSS/GPS Geodetik, dan Auto Level yang terawat,
            terkalibrasi, dan siap pakai untuk proyek jangka pendek maupun panjang.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <Link to="/layanan" className="btn-primary no-underline">
              Layanan Kami <ArrowRight size={15} />
            </Link>
            <a href="#kontak" onClick={(e) => { e.preventDefault(); goTo('#kontak'); }} className="btn-outline">
              Hubungi Kami
            </a>
          </div>
        </Panel>

        {/* 02 — Layanan */}
        <Panel progress={scrollYProgress} index={1} side="right">
          <StageHead index={1} label="Layanan" title="Spektrum Layanan Alat Topografi & Geodesi" />
          <div className="space-y-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl p-3.5" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="font-display font-semibold text-white text-[14px] mb-1">{s.title}</p>
                <p className="text-[12.5px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <MoreLink to="/layanan">Lihat detail layanan</MoreLink>
        </Panel>

        {/* 03 — Keunggulan */}
        <Panel progress={scrollYProgress} index={2} side="left">
          <StageHead index={2} label="Keunggulan" title="Koneksi dan Kepercayaan adalah Mata Uang Utama Kami" />
          <div className="space-y-4">
            {reasons.map(({ Icon, title, desc }) => (
              <div key={title} className="flex gap-3">
                <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(143,203,164,0.16)' }}>
                  <Icon size={16} style={{ color: '#8fcba4' }} />
                </span>
                <div>
                  <p className="font-display font-semibold text-white text-[14px] mb-0.5">{title}</p>
                  <p className="text-[12.5px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        {/* 04 — Dalam Angka */}
        <Panel progress={scrollYProgress} index={3} side="right">
          <StageHead index={3} label="Dalam Angka" title="Dipercaya Sejak Hari Pertama" />
          <div className="grid grid-cols-2 gap-x-5 gap-y-6">
            {stats.map((s) => (
              <Counter key={s.label} {...s} />
            ))}
          </div>
        </Panel>

        {/* 05 — Tentang Kami */}
        <Panel progress={scrollYProgress} index={4} side="left">
          <StageHead index={4} label="Tentang Kami" title="Pionir Kemudahan dan Transparansi Alat Geodesi" />
          <div className="space-y-3 text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <p>
              PT Trisula Persada Utama berakar dari dedikasi sebuah tim independen yang mulai
              beroperasi sejak tahun 2022, dan resmi menjadi Perseroan Terbatas pada Juni 2026.
            </p>
            <p>
              Kami lahir dari keresahan terhadap kurangnya transparansi, minimnya aksesibilitas,
              dan rumitnya jaringan layanan seputar alat geodesi.
            </p>
          </div>
          <p className="mt-4 text-[13px] italic" style={{ color: '#8fcba4' }}>
            "We take care of your instrument like it's ours."
          </p>
          <MoreLink to="/tentang">Selengkapnya tentang kami</MoreLink>
        </Panel>

        {/* 06 — Alur Kerja */}
        <Panel progress={scrollYProgress} index={5} side="right">
          <StageHead index={5} label="Alur Kerja" title="Proses yang Jelas & Terukur" />
          <div className="space-y-3">
            {workflow.map((w, i) => (
              <div key={w.title} className="flex gap-3">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 font-mono text-[11px] font-bold" style={{ background: 'rgba(143,203,164,0.16)', color: '#8fcba4' }}>
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-white text-[13px] mb-0.5">{w.title}</p>
                  <p className="text-[12px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <MoreLink to="/alur-kerja">Lihat semua alur layanan</MoreLink>
        </Panel>

        {/* 07 — Proyek */}
        <Panel progress={scrollYProgress} index={6} side="left">
          <StageHead index={6} label="Proyek" title="Kepercayaan yang Terbukti di Lapangan" />
          <div className="space-y-2.5 mb-5">
            {projects.map((p) => (
              <div key={p.title} className="flex items-start gap-3 rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <MapPin size={13} className="shrink-0 mt-0.5" style={{ color: '#8fcba4' }} />
                <div className="min-w-0">
                  <p className="font-semibold text-white text-[13px] leading-snug">{p.title}</p>
                  <p className="text-[11.5px] mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>{p.loc} · {p.year}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/proyek" className="btn-primary no-underline">
            Lihat semua proyek <ArrowRight size={15} />
          </Link>
        </Panel>

        {/* chapter rail */}
        <div className="hidden lg:flex flex-col gap-2 absolute right-6 top-1/2 -translate-y-1/2" aria-hidden="true">
          {stages.map((s, i) => (
            <Tick key={s.id} progress={scrollYProgress} index={i} />
          ))}
        </div>

        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function Tick({ progress, index }) {
  const { input, output } = band(index, 0.08);
  const opacity = useTransform(progress, (v) => ramp(v, input, output));
  return (
    <span className="block w-px h-7 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.2)' }}>
      <motion.span style={{ opacity, background: '#8fcba4' }} className="block w-full h-full" />
    </span>
  );
}

function StaticFallback() {
  return (
    <section id="beranda" style={{ background: '#081b10' }} className="relative">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-24 space-y-14">
        <div>
          <h1 className="heading-xl text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
            Solusi Penyewaan<br /><span style={{ color: '#8fcba4' }}>Alat Geodesi Terpercaya</span>
          </h1>
          <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Total Station, Theodolite, GNSS/GPS Geodetik, dan Auto Level yang terawat,
            terkalibrasi, dan siap pakai.
          </p>
          <a href="#kontak" className="btn-primary">Hubungi Kami <ArrowRight size={15} /></a>
        </div>

        <div id="layanan">
          <h2 className="font-display font-bold text-white text-2xl mb-4">Layanan Kami</h2>
          <div className="space-y-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="font-semibold text-white text-sm mb-1">{s.title}</p>
                <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.62)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="tentang">
          <h2 className="font-display font-bold text-white text-2xl mb-4">Tentang Kami</h2>
          <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            PT Trisula Persada Utama berakar dari tim independen yang mulai beroperasi sejak 2022,
            dan resmi menjadi Perseroan Terbatas pada Juni 2026.
          </p>
        </div>

        <div id="alur-kerja">
          <h2 className="font-display font-bold text-white text-2xl mb-4">Alur Kerja</h2>
          <div className="space-y-3">
            {workflow.map((w, i) => (
              <div key={w.title}>
                <p className="font-semibold text-white text-[13px]">{i + 1}. {w.title}</p>
                <p className="text-[12.5px]" style={{ color: 'rgba(255,255,255,0.58)' }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="proyek">
          <h2 className="font-display font-bold text-white text-2xl mb-4">Proyek Kami</h2>
          <div className="space-y-2.5">
            {projects.map((p) => (
              <div key={p.title} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="font-semibold text-white text-[13px]">{p.title}</p>
                <p className="text-[11.5px]" style={{ color: 'rgba(255,255,255,0.55)' }}>{p.loc} · {p.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
