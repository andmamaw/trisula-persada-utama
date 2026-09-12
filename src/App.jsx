import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollProgress from './components/ui/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import useLenis from './hooks/useLenis';

// the landing page should not carry the detail pages' code or photos
const LayananPage = lazy(() => import('./pages/LayananPage'));
const TentangPage = lazy(() => import('./pages/TentangPage'));
const AlurKerjaPage = lazy(() => import('./pages/AlurKerjaPage'));
const ProyekPage = lazy(() => import('./pages/ProyekPage'));

function PageLoading() {
  return <div style={{ minHeight: '70vh', background: '#0d2818' }} />;
}

export default function App() {
  useLenis();

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* clip, not hidden — `overflow: hidden` would break the hero's sticky stage */}
      <div className="bg-white text-slate-900 overflow-x-clip">
        <ScrollProgress />
        <Navbar />
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/layanan" element={<LayananPage />} />
            <Route path="/tentang" element={<TentangPage />} />
            <Route path="/alur-kerja" element={<AlurKerjaPage />} />
            <Route path="/proyek" element={<ProyekPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
