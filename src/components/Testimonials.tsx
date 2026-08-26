import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimoni" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#8C827A] mb-3">
            <span className="w-6 h-[1px] bg-[#8C827A]" />
            <span>Kisah Klien</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#1A1918] font-normal leading-tight mb-4">
            Testimoni Pemilik Hunian
          </h2>
          <p className="text-base sm:text-lg text-[#5A544E] font-light leading-relaxed">
            Kepercayaan adalah fondasi utama kami. Berikut adalah pengalaman mereka yang telah mempercayakan ruang hidupnya kepada VELNORA.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              id={`testi-card-${item.id}`}
              className="rounded-3xl bg-[#F5F0E8]/70 border border-[#E8E2D9] p-8 flex flex-col justify-between space-y-6 hover:border-[#D4C9BC] transition-all"
            >
              <div className="space-y-4">
                {/* Rating stars & Quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#A89885] text-[#A89885]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#C9BFB4]" />
                </div>

                {/* Highlight text */}
                <p className="font-serif-luxury text-lg text-[#1A1918] font-medium leading-snug">
                  "{item.highlight}"
                </p>

                {/* Full Review */}
                <p className="text-xs sm:text-sm text-[#5C554F] font-light leading-relaxed">
                  {item.content}
                </p>
              </div>

              {/* Author & Project Details */}
              <div className="pt-6 border-t border-[#E2DAD0] flex items-center space-x-3.5">
                <img
                  src={item.avatar}
                  alt={item.clientName}
                  className="w-11 h-11 rounded-full object-cover border border-[#D4C9BC]"
                  loading="lazy"
                />
                <div className="space-y-0.5">
                  <h4 className="text-sm font-medium text-[#1A1918]">{item.clientName}</h4>
                  <p className="text-xs text-[#8C827A]">{item.role}</p>
                  <div className="flex items-center space-x-1 text-[11px] text-[#A69B90]">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
