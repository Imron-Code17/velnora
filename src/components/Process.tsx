import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="proses" className="py-20 sm:py-28 bg-[#F5F0E8]/70 border-t border-[#E8E2D9] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#8C827A] mb-3">
            <span className="w-6 h-[1px] bg-[#8C827A]" />
            <span>Alur Rancang Bangun</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#1A1918] font-normal leading-tight mb-4">
            Proses Kerja Kami
          </h2>
          <p className="text-base sm:text-lg text-[#5A544E] font-light leading-relaxed">
            Metodologi terstruktur dari sesi konsultasi awal hingga serah terima kunci untuk memastikan transparansi waktu, anggaran, dan kepuasan hasil.
          </p>
        </div>

        {/* Step Flow Navigation Badges (Quick overview) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-12">
          {PROCESS_STEPS.map((stepItem, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 sm:p-4 rounded-2xl text-left border transition-all ${
                activeStep === idx
                  ? 'bg-[#262422] text-[#FAF8F5] border-[#262422] shadow-md'
                  : 'bg-[#FAF8F5] text-[#262422] border-[#E8E2D9] hover:bg-[#EFEAE2]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-serif-luxury text-lg ${activeStep === idx ? 'text-[#D4C9BC]' : 'text-[#8C827A]'}`}>
                  {stepItem.step}
                </span>
                <Clock className={`w-3.5 h-3.5 ${activeStep === idx ? 'text-[#D4C9BC]' : 'text-[#A69B90]'}`} />
              </div>
              <div className="text-xs sm:text-sm font-medium line-clamp-1">
                {stepItem.title.split(' & ')[0].split(' ')[0]}
              </div>
              <div className={`text-[10px] mt-0.5 ${activeStep === idx ? 'text-[#D4C9BC]' : 'text-[#8C827A]'}`}>
                {stepItem.duration}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Feature Box */}
        <div className="rounded-3xl bg-[#FAF8F5] border border-[#E8E2D9] p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Step Explanation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="px-3.5 py-1 rounded-full bg-[#EAE3D9] text-[#262422] text-xs font-semibold uppercase tracking-wider">
                  Langkah {PROCESS_STEPS[activeStep].step} dari 05
                </span>
                <span className="text-xs font-medium text-[#8C827A]">
                  Durasi: {PROCESS_STEPS[activeStep].duration}
                </span>
              </div>

              <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#1A1918]">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-base sm:text-lg text-[#5A544E] font-light leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8C827A] block">
                  Aktivitas & Hasil Tahap Ini:
                </span>
                <ul className="space-y-2.5">
                  {PROCESS_STEPS[activeStep].details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-3 text-sm text-[#47413B]">
                      <CheckCircle2 className="w-4 h-4 text-[#8C827A] flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step Navigator */}
              <div className="flex items-center space-x-3 pt-6 border-t border-[#ECE6DC]">
                {activeStep > 0 && (
                  <button
                    onClick={() => setActiveStep((prev) => prev - 1)}
                    className="px-4 py-2 rounded-full border border-[#D4C9BC] text-xs text-[#262422] hover:bg-[#EFEAE2] transition-colors"
                  >
                    ← Langkah Sebelumnya
                  </button>
                )}
                {activeStep < PROCESS_STEPS.length - 1 ? (
                  <button
                    onClick={() => setActiveStep((prev) => prev + 1)}
                    className="inline-flex items-center space-x-1.5 px-5 py-2 rounded-full bg-[#262422] text-xs font-medium text-[#FAF8F5] hover:bg-[#3D3A36] transition-colors"
                  >
                    <span>Langkah Selanjutnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="text-xs text-[#736B63] flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#8C827A]" />
                    <span>Siap Serah Terima & Garansi Pemeliharaan 12 Bulan</span>
                  </span>
                )}
              </div>
            </div>

            {/* Visual Step Representation */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#EAE3D9] shadow-inner editorial-img-container">
                <img
                  src={
                    activeStep === 0
                      ? 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80'
                      : activeStep === 1
                      ? 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80'
                      : activeStep === 2
                      ? 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80'
                      : activeStep === 3
                      ? 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80'
                      : 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80'
                  }
                  alt={`Proses ${PROCESS_STEPS[activeStep].title}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
