import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface CTAProps {
  onOpenConsultation: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenConsultation }) => {
  const [fastName, setFastName] = useState('');
  const [fastPhone, setFastPhone] = useState('');
  const [fastType, setFastType] = useState('Rumah Tinggal');
  const [fastMessage, setFastMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFastSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Halo VELNORA,\n\nSaya tertarik untuk konsultasi proyek interior ${fastType}.\nNama: ${fastName || '-'}\nNo Telp: ${fastPhone || '-'}\nCatatan: ${fastMessage || '-'}`
    );
    window.open(`https://wa.me/6281189004220?text=${text}`, '_blank');
  };

  return (
    <section id="kontak" className="py-20 sm:py-28 bg-[#262422] text-[#FAF8F5] relative overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#3D3A36]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline & Studio Contact Info */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#D4C9BC]">
                <span className="w-6 h-[1px] bg-[#D4C9BC]" />
                <span>Mulai Perjalanan Anda</span>
              </div>
              <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#FAF8F5] font-normal leading-[1.15]">
                Mari ciptakan ruang yang ingin Anda tinggali.
              </h2>
              <p className="text-base sm:text-lg text-[#D4C9BC] font-light leading-relaxed">
                Setiap proyek dimulai dari sebuah percakapan hangat. Diskusikan visi, sketsa ide, dan kebutuhan ruang hunian Anda bersama tim kurator dan arsitek VELNORA.
              </p>
            </div>

            {/* Direct Consultation Button Trigger */}
            <div className="pt-2">
              <button
                id="cta-main-consultation-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-[#FAF8F5] text-[#1A1918] text-sm sm:text-base font-medium rounded-full hover:bg-[#EAE3D9] active:scale-[0.98] transition-all shadow-md group"
              >
                <span>Konsultasi Gratis</span>
                <ArrowUpRight className="w-4 h-4 text-[#1A1918] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Studio Address & Details */}
            <div className="pt-8 border-t border-[#3D3A36] space-y-4 text-xs sm:text-sm text-[#D4C9BC]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C9BFB4] flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#FAF8F5] font-medium block">Studio Jakarta:</strong>
                  {BRAND_INFO.address}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#C9BFB4]" />
                  <span>{BRAND_INFO.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#C9BFB4]" />
                  <span>{BRAND_INFO.email}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs text-[#A69B90] pt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{BRAND_INFO.operatingHours}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Quick Inquiry Card */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#312E2B] border border-[#44403B] shadow-xl">
              {!isSuccess ? (
                <form onSubmit={handleFastSubmit} className="space-y-4">
                  <div className="space-y-1 mb-4">
                    <h3 className="font-serif-luxury text-2xl text-[#FAF8F5]">
                      Formulir Kontak Cepat
                    </h3>
                    <p className="text-xs text-[#C9BFB4] font-light">
                      Tinggalkan nomor Anda untuk dihubungi oleh Lead Architect kami.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-[#EAE3D9] font-medium">Nama Anda</label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Lengkap"
                      value={fastName}
                      onChange={(e) => setFastName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#262422] border border-[#4A4641] text-sm text-[#FAF8F5] placeholder-[#736B63] focus:outline-none focus:border-[#D4C9BC] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-[#EAE3D9] font-medium">Nomor WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="0812-XXXX-XXXX"
                      value={fastPhone}
                      onChange={(e) => setFastPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#262422] border border-[#4A4641] text-sm text-[#FAF8F5] placeholder-[#736B63] focus:outline-none focus:border-[#D4C9BC] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-[#EAE3D9] font-medium">Jenis Rencana Proyek</label>
                    <select
                      value={fastType}
                      onChange={(e) => setFastType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#262422] border border-[#4A4641] text-sm text-[#FAF8F5] focus:outline-none focus:border-[#D4C9BC] transition-colors"
                    >
                      <option value="Rumah Tinggal">Desain & Bangun Rumah Tinggal</option>
                      <option value="Apartemen & Penthouse">Apartemen / Penthouse</option>
                      <option value="Villa Retret Tropis">Villa Tropis (Bali / Bandung / etc)</option>
                      <option value="Renovasi Total">Renovasi Hunian Eksisting</option>
                      <option value="Komersial & Kantor">Komersial & Studio Butik</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-[#EAE3D9] font-medium">Catatan / Lokasi Properti</label>
                    <textarea
                      rows={2}
                      placeholder="Contoh: Lokasi di Kemang, luas tanah 350m², ingin nuansa Japandi warm minimalis."
                      value={fastMessage}
                      onChange={(e) => setFastMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#262422] border border-[#4A4641] text-sm text-[#FAF8F5] placeholder-[#736B63] focus:outline-none focus:border-[#D4C9BC] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#FAF8F5] text-[#1A1918] text-xs sm:text-sm font-medium rounded-full hover:bg-[#EAE3D9] transition-all"
                    >
                      <span>Jadwalkan Konsultasi</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="inline-flex items-center justify-center space-x-2 px-4 py-3 bg-[#3D3A36] text-[#FAF8F5] text-xs sm:text-sm font-medium rounded-full hover:bg-[#4D4943] transition-all"
                    >
                      <MessageSquare className="w-4 h-4 text-[#D4C9BC]" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#FAF8F5] text-[#1A1918] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-luxury text-2xl text-[#FAF8F5]">
                    Pengajuan Berhasil Dikirim
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D4C9BC] leading-relaxed">
                    Terima kasih, tim kami akan segera menghubungi Anda melalui nomor WhatsApp {fastPhone}.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-xs text-[#D4C9BC] underline underline-offset-4 hover:text-[#FAF8F5]"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
