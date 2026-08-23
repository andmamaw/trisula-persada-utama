import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyUsSection from './components/WhyUsSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import WorkflowSection from './components/WorkflowSection';
import ProjectsSection from './components/ProjectsSection';
import GallerySection from './components/GallerySection';
import ClientsSection from './components/ClientsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <StatsSection />
      <AboutSection />
      <WorkflowSection />
      <ProjectsSection />
      <GallerySection />
      <ClientsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
