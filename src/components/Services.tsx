import React from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';

interface ServicesProps {
  onOpenConsultation: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  return (
    <section id="layanan" className="py-20 sm:py-28 bg-[#F3EFEA]/80 border-t border-[#E8E2D9] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#E8E2D9] pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#8C827A] mb-3">
              <span className="w-6 h-[1px] bg-[#8C827A]" />
              <span>Layanan Terpadu</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#1A1918] font-normal leading-tight">
              Keahlian & Layanan Kami
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B635B] max-w-md font-light">
            Dari sketsa konsep hingga kunci diserahkan, kami mendampingi setiap langkah dengan pengawasan ketat dan transparansi anggaran.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group rounded-3xl bg-[#FAF8F5] border border-[#E8E2D9] p-6 sm:p-8 flex flex-col justify-between hover:border-[#CFC5B8] hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between border-b border-[#ECE6DC] pb-4">
                  <span className="font-serif-luxury text-2xl sm:text-3xl text-[#8C827A] font-light">
                    {service.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#EFEAE2] text-[11px] font-medium text-[#615951] uppercase tracking-wider">
                    {service.highlightTag}
                  </span>
                </div>

                {/* Service Visual Preview */}
                <div className="rounded-2xl overflow-hidden aspect-[16/8] bg-[#EAE3D9] editorial-img-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#1A1918]">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#8C827A]">
                    {service.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-[#5A544E] font-light leading-relaxed pt-1">
                    {service.description}
                  </p>
                </div>

                {/* Scope Deliverables */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C827A] block">
                    Cakupan Pekerjaan:
                  </span>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#4F4943] font-light">
                        <Check className="w-4 h-4 text-[#8C827A] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA for this service */}
              <div className="pt-8 mt-6 border-t border-[#ECE6DC] flex items-center justify-between">
                <span className="text-xs text-[#8C827A]">Estimasi transparan & timeline terukur</span>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-medium text-[#1A1918] group-hover:text-[#6E645A] transition-colors"
                >
                  <span>Konsultasikan</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#736B63]">
            Memerlukan paket terpadu <span className="font-medium text-[#1A1918]">Design & Build (All-in-One)</span>? Kami memberikan efisiensi biaya dan koordinasi tanpa hambatan antara tim arsitek dan tim workshop.
          </p>
        </div>
      </div>
    </section>
  );
};
