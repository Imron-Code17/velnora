import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'proyek', 'layanan', 'tentang-kami', 'proses', 'kontak'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D9] py-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
          : 'bg-[#FAF8F5]/80 backdrop-blur-sm border-b border-[#E8E2D9]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            id="brand-logo-link"
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className="font-serif-luxury text-2xl sm:text-3xl tracking-[0.18em] font-medium text-[#1A1918] group-hover:text-[#615951] transition-colors uppercase">
              {BRAND_INFO.name}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-[#8C827A] font-medium -mt-1">
              Interior Design & Build
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" aria-label="Desktop Navigation" className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              id="desktop-nav-proyek"
              onClick={() => scrollTo('proyek')}
              className={`px-3 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-all rounded-full ${
                activeSection === 'proyek'
                  ? 'text-[#1A1918] bg-[#EAE3D9]'
                  : 'text-[#615951] hover:text-[#1A1918] hover:bg-[#F3EFEA]'
              }`}
            >
              Proyek
            </button>
            <button
              id="desktop-nav-layanan"
              onClick={() => scrollTo('layanan')}
              className={`px-3 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-all rounded-full ${
                activeSection === 'layanan'
                  ? 'text-[#1A1918] bg-[#EAE3D9]'
                  : 'text-[#615951] hover:text-[#1A1918] hover:bg-[#F3EFEA]'
              }`}
            >
              Layanan
            </button>
            <button
              id="desktop-nav-tentang"
              onClick={() => scrollTo('tentang-kami')}
              className={`px-3 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-all rounded-full ${
                activeSection === 'tentang-kami'
                  ? 'text-[#1A1918] bg-[#EAE3D9]'
                  : 'text-[#615951] hover:text-[#1A1918] hover:bg-[#F3EFEA]'
              }`}
            >
              Tentang Kami
            </button>
            <button
              id="desktop-nav-proses"
              onClick={() => scrollTo('proses')}
              className={`px-3 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-all rounded-full ${
                activeSection === 'proses'
                  ? 'text-[#1A1918] bg-[#EAE3D9]'
                  : 'text-[#615951] hover:text-[#1A1918] hover:bg-[#F3EFEA]'
              }`}
            >
              Proses
            </button>
            <button
              id="desktop-nav-kontak"
              onClick={() => scrollTo('kontak')}
              className={`px-3 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-all rounded-full ${
                activeSection === 'kontak'
                  ? 'text-[#1A1918] bg-[#EAE3D9]'
                  : 'text-[#615951] hover:text-[#1A1918] hover:bg-[#F3EFEA]'
              }`}
            >
              Kontak
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              id="desktop-header-cta"
              onClick={onOpenConsultation}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#262422] text-[#FAF8F5] text-xs lg:text-sm tracking-wide font-medium rounded-full hover:bg-[#3D3A36] active:scale-[0.98] transition-all shadow-sm group"
            >
              <span>Konsultasi Gratis</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4C9BC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Right CTA Pill (Direct Consultation Link) */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-header-consult-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#262422] text-[#FAF8F5] text-[11px] font-medium tracking-wide rounded-full hover:bg-[#3D3A36] active:scale-95 transition-all"
            >
              <Phone className="w-3 h-3 text-[#D4C9BC]" />
              <span>Konsultasi</span>
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Navigation Bar (NO hamburger, NO dropdown, strictly direct anchor links) */}
        <div className="md:hidden mt-2.5 pt-2 border-t border-[#E8E2D9]/70 flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
          <button
            id="mobile-nav-proyek"
            onClick={() => scrollTo('proyek')}
            className={`flex-1 py-1.5 px-1 text-center text-[12px] font-medium rounded-md whitespace-nowrap transition-colors ${
              activeSection === 'proyek'
                ? 'text-[#1A1918] bg-[#EAE3D9] font-semibold'
                : 'text-[#615951] active:bg-[#F3EFEA]'
            }`}
          >
            Proyek
          </button>
          <button
            id="mobile-nav-layanan"
            onClick={() => scrollTo('layanan')}
            className={`flex-1 py-1.5 px-1 text-center text-[12px] font-medium rounded-md whitespace-nowrap transition-colors ${
              activeSection === 'layanan'
                ? 'text-[#1A1918] bg-[#EAE3D9] font-semibold'
                : 'text-[#615951] active:bg-[#F3EFEA]'
            }`}
          >
            Layanan
          </button>
          <button
            id="mobile-nav-tentang"
            onClick={() => scrollTo('tentang-kami')}
            className={`flex-1 py-1.5 px-1 text-center text-[12px] font-medium rounded-md whitespace-nowrap transition-colors ${
              activeSection === 'tentang-kami'
                ? 'text-[#1A1918] bg-[#EAE3D9] font-semibold'
                : 'text-[#615951] active:bg-[#F3EFEA]'
            }`}
          >
            Tentang
          </button>
          <button
            id="mobile-nav-proses"
            onClick={() => scrollTo('proses')}
            className={`flex-1 py-1.5 px-1 text-center text-[12px] font-medium rounded-md whitespace-nowrap transition-colors ${
              activeSection === 'proses'
                ? 'text-[#1A1918] bg-[#EAE3D9] font-semibold'
                : 'text-[#615951] active:bg-[#F3EFEA]'
            }`}
          >
            Proses
          </button>
          <button
            id="mobile-nav-kontak"
            onClick={() => scrollTo('kontak')}
            className={`flex-1 py-1.5 px-1 text-center text-[12px] font-medium rounded-md whitespace-nowrap transition-colors ${
              activeSection === 'kontak'
                ? 'text-[#1A1918] bg-[#EAE3D9] font-semibold'
                : 'text-[#615951] active:bg-[#F3EFEA]'
            }`}
          >
            Kontak
          </button>
        </div>
      </div>
    </header>
  );
};
