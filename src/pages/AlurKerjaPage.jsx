import PageHeader from '../components/PageHeader';
import WorkflowSection from '../components/WorkflowSection';
import CTASection from '../components/CTASection';

export default function AlurKerjaPage() {
  return (
    <>
      <PageHeader
        label="Alur Kerja"
        title="Proses yang Jelas & Terukur"
        desc="Setiap layanan kami mengikuti alur kerja terstruktur agar hasil dan waktu pengerjaan dapat diandalkan."
      />
      <WorkflowSection hideHeader />
      <CTASection />
    </>
  );
}
