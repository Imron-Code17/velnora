import React from 'react';
import { ArrowUp, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1C1B1A] text-[#FAF8F5] pt-16 pb-20 border-t border-[#33302C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#33302C]">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="font-serif-luxury text-3xl tracking-[0.18em] font-medium text-[#FAF8F5] uppercase">
                {BRAND_INFO.name}
              </span>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#A69B90]">
                {BRAND_INFO.tagline}
              </p>
            </div>

            <p className="text-sm text-[#A69B90] font-light max-w-sm leading-relaxed">
              Studio interior design & build luxury minimalism di Indonesia. Menciptakan ruang tinggal yang hangat, menenangkan, dan tahan uji waktu.
            </p>

            <div className="pt-2 flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-xs text-[#D4C9BC] hover:text-[#FAF8F5] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#D4C9BC]" />
                <span>{BRAND_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4C9BC] block">
              Navigasi Halaman
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A69B90]">
              <li>
                <button
                  onClick={() => scrollTo('proyek')}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Proyek Pilihan
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('layanan')}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Layanan & Keahlian
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('tentang-kami')}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Tentang VELNORA
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('keunggulan')}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Keunggulan Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('proses')}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Proses Kerja
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('testimoni')}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Testimoni Klien
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('kontak')}
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  Kontak & Lokasi
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4C9BC] block">
              Kantor & Studio
            </span>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#A69B90] font-light">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#D4C9BC] flex-shrink-0 mt-0.5" />
                <span>{BRAND_INFO.address}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#D4C9BC] flex-shrink-0" />
                <span>{BRAND_INFO.phone} / {BRAND_INFO.whatsapp}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#D4C9BC] flex-shrink-0" />
                <span>{BRAND_INFO.email}</span>
              </p>
              <p className="text-[11px] text-[#78716A] pt-1">
                Melayani proyek di Jakarta, Bogor, Depok, Tangerang, Bekasi, Bandung, Bali, dan Surabaya.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716A]">
          <div>
            © {new Date().getFullYear()} VELNORA Interior Design & Build. Hak Cipta Dilindungi. Jakarta, Indonesia.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1 text-xs text-[#A69B90] hover:text-[#FAF8F5] transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
