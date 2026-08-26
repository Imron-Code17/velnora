import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Advantages } from './components/Advantages';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  const handleViewProjects = () => {
    const el = document.getElementById('proyek');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#262422] flex flex-col selection:bg-[#E2D8CC] selection:text-[#1A1918]">
      {/* Fixed Luxury Navigation (Desktop + Non-dropdown Mobile Bar) */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onViewProjects={handleViewProjects}
        />

        {/* 2. Tentang Kami */}
        <About onOpenConsultation={handleOpenConsultation} />

        {/* 3. Proyek Pilihan */}
        <Projects onOpenConsultation={handleOpenConsultation} />

        {/* 4. Layanan */}
        <Services onOpenConsultation={handleOpenConsultation} />

        {/* 5. Keunggulan */}
        <Advantages />

        {/* 6. Proses Kerja */}
        <Process />

        {/* 7. Testimoni */}
        <Testimonials />

        {/* 8. CTA & Kontak */}
        <CTA onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Interactive Consultation Drawer / Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}
