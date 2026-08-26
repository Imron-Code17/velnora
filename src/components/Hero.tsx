import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface HeroProps {
  onOpenConsultation: () => void;
  onViewProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onViewProjects }) => {
  return (
    <section id="hero" className="relative pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-16 sm:pb-24 overflow-hidden scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Label - Fully visible and responsive */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 border-b border-[#E8E2D9] pb-3.5 sm:pb-4 mb-8 sm:mb-12">
          <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-medium tracking-wider sm:tracking-widest uppercase text-[#7A7066]">
            <MapPin className="w-3.5 h-3.5 text-[#9E9286] shrink-0" />
            <span>Jakarta • Bandung • Bali • Surabaya</span>
          </div>
          <div className="text-[11px] sm:text-xs font-medium tracking-wider sm:tracking-widest uppercase text-[#7A7066]">
            Studio Interior Design & Build — Est. {BRAND_INFO.foundedYear}
          </div>
        </div>

        {/* Hero Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
          {/* Main Headline */}
          <div className="lg:col-span-8">
            <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.08] tracking-tight text-[#1A1918] font-normal">
              Menciptakan Ruang yang{' '}
              <span className="italic font-normal text-[#575048]">Terasa Seperti Rumah.</span>
            </h1>
          </div>

          {/* Subtext & Action Buttons */}
          <div className="lg:col-span-4 flex flex-col justify-end space-y-6">
            <p className="text-base sm:text-lg text-[#5A544E] leading-relaxed font-light">
              Studio desain & rancang bangun interior premium. Kami memadukan kehangatan material alami tropis dengan presisi modern untuk menghadirkan ketenangan hidup yang abadi.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                id="hero-btn-consultation"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#262422] text-[#FAF8F5] text-sm font-medium tracking-wide rounded-full hover:bg-[#3D3A36] active:scale-[0.98] transition-all shadow-sm group"
              >
                <span>Konsultasi Gratis</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4C9BC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-btn-projects"
                onClick={onViewProjects}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-transparent border border-[#CFC5B8] text-[#262422] text-sm font-medium tracking-wide rounded-full hover:bg-[#EFEAE2] hover:border-[#B5AAA0] active:scale-[0.98] transition-all"
              >
                <span>Lihat Proyek</span>
                <ArrowDown className="w-4 h-4 text-[#8C827A]" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Architectural Photography Showcase */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#ECE6DC] shadow-lg border border-[#E2DAD0]/60">
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full editorial-img-container">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=88"
              alt="Interior Rumah Senja oleh VELNORA Interior Design & Build"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Soft Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918]/60 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-[#FAF8F5]">
              <div className="space-y-1">
                <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#D4C9BC]">
                  Proyek Unggulan Terkini
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-3xl text-[#FAF8F5] tracking-wide font-normal">
                  Rumah Senja — Cilandak, Jakarta Selatan
                </h3>
                <p className="text-xs sm:text-sm text-[#E2D8CC] font-light max-w-md hidden sm:block">
                  Harmoni travertin alami, kisi-kisi kayu jati solid daur ulang, dan inner courtyard tropis.
                </p>
              </div>

              <div className="flex items-center space-x-6 sm:space-x-8 text-xs sm:text-sm text-[#FAF8F5]/90">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4C9BC]" />
                  <span>Desain 3D Fotorealistik</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4C9BC]" />
                  <span>In-House Workshop Build</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Anchor Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 pt-8 border-t border-[#E8E2D9]">
          <div className="space-y-1">
            <div className="font-serif-luxury text-2xl sm:text-3xl text-[#1A1918]">85+</div>
            <div className="text-xs sm:text-sm text-[#736B63] font-light">Proyek Interior Terselesaikan</div>
          </div>
          <div className="space-y-1">
            <div className="font-serif-luxury text-2xl sm:text-3xl text-[#1A1918]">100%</div>
            <div className="text-xs sm:text-sm text-[#736B63] font-light">Presisi & Garansi Pemeliharaan</div>
          </div>
          <div className="space-y-1">
            <div className="font-serif-luxury text-2xl sm:text-3xl text-[#1A1918]">8 Tahun</div>
            <div className="text-xs sm:text-sm text-[#736B63] font-light">Dedikasi Kemewahan Minimalis</div>
          </div>
          <div className="space-y-1">
            <div className="font-serif-luxury text-2xl sm:text-3xl text-[#1A1918]">In-House</div>
            <div className="text-xs sm:text-sm text-[#736B63] font-light">Workshop Kayu & Tim Konstruksi</div>
          </div>
        </div>
      </div>
    </section>
  );
};
