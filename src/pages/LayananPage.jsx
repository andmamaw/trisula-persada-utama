import PageHeader from '../components/PageHeader';
import ServicesSection from '../components/ServicesSection';
import WhyUsSection from '../components/WhyUsSection';
import CTASection from '../components/CTASection';

export default function LayananPage() {
  return (
    <>
      <PageHeader
        label="Layanan"
        title="Spektrum Layanan Alat Topografi & Geodesi"
        desc="Sebagai penyedia solusi menyeluruh, kami menawarkan berbagai layanan untuk menunjang kebutuhan proyek pemetaan dan pengukuran Anda."
      />
      <ServicesSection hideHeader />
      <WhyUsSection />
      <CTASection />
    </>
  );
}
