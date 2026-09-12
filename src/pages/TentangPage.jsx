import PageHeader from '../components/PageHeader';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import ClientsSection from '../components/ClientsSection';
import CTASection from '../components/CTASection';

export default function TentangPage() {
  return (
    <>
      <PageHeader
        label="Tentang Kami"
        title="Tentang PT Trisula Persada Utama"
        desc="Berakar dari tim independen yang mulai beroperasi sejak 2022, dan resmi menjadi Perseroan Terbatas pada Juni 2026."
      />
      <StatsSection />
      <AboutSection />
      <ClientsSection />
      <CTASection />
    </>
  );
}
