import React from 'react';
import { Sparkles, Layers, Compass, CheckCircle } from 'lucide-react';
import { ADVANTAGES_DATA } from '../data/content';

export const Advantages: React.FC = () => {
  return (
    <section id="keunggulan" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#8C827A] mb-3">
            <span className="w-6 h-[1px] bg-[#8C827A]" />
            <span>Nilai Utama Kami</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#1A1918] font-normal leading-tight mb-4">
            Mengapa Memilih VELNORA
          </h2>
          <p className="text-base sm:text-lg text-[#5A544E] font-light leading-relaxed">
            Kami mendedikasikan standar perancangan arsitektur dan keahlian kriya tertinggi untuk memastikan setiap sudut ruang Anda memiliki jiwa dan bernilai abadi.
          </p>
        </div>

        {/* 3 Core Advantages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ADVANTAGES_DATA.map((adv) => {
            const Icon = adv.iconName === 'Sparkles' ? Sparkles : adv.iconName === 'Layers' ? Layers : Compass;

            return (
              <div
                key={adv.id}
                id={`advantage-${adv.id}`}
                className="rounded-3xl bg-[#F5F0E8]/80 border border-[#E8E2D9] p-8 flex flex-col justify-between space-y-6 hover:bg-[#F2ECE3] transition-colors"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#EAE3D9] flex items-center justify-center text-[#262422]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif-luxury text-2xl text-[#A69B90] font-light">
                      {adv.number}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#1A1918]">
                      {adv.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#524B45] font-light leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2DAD0] flex items-start space-x-2 text-xs text-[#736B63]">
                  <CheckCircle className="w-4 h-4 text-[#8C827A] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{adv.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tactile Material Palette Strip */}
        <div className="mt-16 p-8 rounded-3xl bg-[#262422] text-[#FAF8F5] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D4C9BC]">
              Jaminan Keaslian Material
            </span>
            <h4 className="font-serif-luxury text-2xl sm:text-3xl text-[#FAF8F5]">
              Kurasi Material Alami & Sertifikasi Resmi
            </h4>
            <p className="text-xs sm:text-sm text-[#D4C9BC] font-light">
              Kami secara langsung menyeleksi kayu jati Perhutani legal, marmer impor pilihan, dan finishing berbasis air non-toksik yang aman bagi keluarga Anda.
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <div className="px-4 py-2 rounded-xl bg-[#3D3A36] text-xs text-[#EAE3D9] border border-[#524E49]">
              Kayu Jati Solid Legal
            </div>
            <div className="px-4 py-2 rounded-xl bg-[#3D3A36] text-xs text-[#EAE3D9] border border-[#524E49]">
              Batu Travertine Alami
            </div>
            <div className="px-4 py-2 rounded-xl bg-[#3D3A36] text-xs text-[#EAE3D9] border border-[#524E49]">
              Hardware Garansi Seumur Hidup
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
