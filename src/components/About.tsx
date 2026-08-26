import React from 'react';
import { ArrowUpRight, Sparkles, Feather, Compass, Award } from 'lucide-react';

interface AboutProps {
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  return (
    <section id="tentang-kami" className="py-20 sm:py-28 bg-[#F5F0E8]/70 border-y border-[#E8E2D9] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#8C827A] mb-3">
            <span className="w-6 h-[1px] bg-[#8C827A]" />
            <span>Tentang VELNORA</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#1A1918] font-normal leading-tight">
            Kami percaya bahwa ruang tinggal terbaik tidak berteriak untuk diperhatikan, melainkan memberi rasa damai saat Anda melangkah masuk.
          </h2>
        </div>

        {/* 2-Column Story & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-md editorial-img-container bg-[#E6DEC4]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Studio Filosofi Desain Interior VELNORA"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918]/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-[#FAF8F5] text-xs sm:text-sm font-light">
                <span className="font-medium text-[#D4C9BC]">Warm Minimalism:</span> Eksplorasi material kayu jati, batu alam, dan pencahayaan lembut.
              </div>
            </div>

            {/* Secondary small photo strip */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden editorial-img-container">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
                  alt="Detail material joinery VELNORA"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden editorial-img-container">
                <img
                  src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80"
                  alt="Ruang makan minimalis hangat VELNORA"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Editorial Text & Philosophy Column */}
          <div className="lg:col-span-6 space-y-8">
            {/* Profil Singkat */}
            <div className="space-y-4">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#1A1918]">
                Profil Singkat
              </h3>
              <p className="text-base sm:text-lg text-[#5A544E] leading-relaxed font-light">
                Didirikan di Jakarta pada tahun 2018, <strong className="font-medium text-[#262422]">VELNORA</strong> adalah studio konsultan desain interior dan kontraktor pelaksana rancang bangun (design & build) yang mengusung prinsip <em className="italic">warm luxury minimalism</em>.
              </p>
              <p className="text-sm sm:text-base text-[#6B635B] leading-relaxed font-light">
                Kami melayani perancangan rumah tinggal mewah, villa retret, penthouse eksklusif, hingga ruang komersial butik di seluruh Indonesia—mulai dari Jabodetabek, Bandung, Surabaya, hingga Bali.
              </p>
            </div>

            {/* Filosofi Desain */}
            <div className="space-y-4 pt-6 border-t border-[#E2DAD0]">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#1A1918] flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-[#8C827A]" />
                <span>Filosofi Desain</span>
              </h3>
              <p className="text-base sm:text-lg text-[#5A544E] leading-relaxed font-light">
                Filosofi kami berakar pada keyakinan bahwa keindahan sejati lahir dari pengurangan elemen yang tidak esensial. Kami mereduksi kebisingan visual untuk menonjolkan tekstur asli material, aliran udara alami, dan ritme cahaya tropis Indonesia.
              </p>

              {/* 3 Pillars of Philosophy */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <Feather className="w-4 h-4 text-[#8C827A] mb-2" />
                  <h4 className="font-medium text-sm text-[#262422] mb-1">Keheningan Spasial</h4>
                  <p className="text-xs text-[#736B63] leading-relaxed">Ruang yang lapang dan menenangkan pikiran tanpa ornamen berlebih.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <Compass className="w-4 h-4 text-[#8C827A] mb-2" />
                  <h4 className="font-medium text-sm text-[#262422] mb-1">Material Tropis</h4>
                  <p className="text-xs text-[#736B63] leading-relaxed">Pemanfaatan kayu jati, batu alam lokal, dan linen yang menua anggun.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <Award className="w-4 h-4 text-[#8C827A] mb-2" />
                  <h4 className="font-medium text-sm text-[#262422] mb-1">Presisi Eksekusi</h4>
                  <p className="text-xs text-[#736B63] leading-relaxed">Integrasi langsung desain dengan workshop pembuatan interior kami.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                id="about-btn-consultation"
                onClick={onOpenConsultation}
                className="inline-flex items-center space-x-2 text-sm font-medium tracking-wide text-[#262422] hover:text-[#7A6F64] border-b border-[#262422] pb-1 transition-colors group"
              >
                <span>Konsultasikan Kebutuhan Ruang Anda Bersama Kami</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
