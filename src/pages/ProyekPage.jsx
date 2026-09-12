import PageHeader from '../components/PageHeader';
import ProjectsSection from '../components/ProjectsSection';
import GallerySection from '../components/GallerySection';
import CTASection from '../components/CTASection';

export default function ProyekPage() {
  return (
    <>
      <PageHeader
        label="Proyek"
        title="Kepercayaan yang Terbukti di Lapangan"
        desc="Sebagian pekerjaan yang telah kami dampingi bersama kontraktor, konsultan, dan instansi di berbagai lokasi."
      />
      <ProjectsSection hideHeader />
      <GallerySection />
      <CTASection />
    </>
  );
}
