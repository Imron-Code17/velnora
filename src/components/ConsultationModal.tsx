import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Phone, Calendar, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Rumah Tinggal',
    location: 'Jakarta Selatan',
    estimatedArea: '150 - 300 m²',
    budgetRange: 'Medium Luxury (IDR 300jt - 700jt)',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Halo Tim VELNORA,\n\nSaya ingin konsultasi gratis untuk proyek interior:\n• Nama: ${formData.name || '-'}\n• Tipe Properti: ${formData.propertyType}\n• Lokasi: ${formData.location}\n• Estimasi Luas: ${formData.estimatedArea}\n• Catatan: ${formData.message || 'Mohon info ketersediaan jadwal survei & konsultasi.'}\n\nTerima kasih.`
    );
    window.open(`https://wa.me/6281189004220?text=${text}`, '_blank');
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      id="consultation-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A1918]/80 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div
        id="consultation-modal-content"
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl shadow-2xl overflow-y-auto max-h-[92vh] border border-[#E8E2D9] p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-consultation-modal-btn"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#EFEAE2] hover:bg-[#E2DAD0] text-[#262422] transition-colors"
          aria-label="Tutup formulir konsultasi"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 space-y-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#8C827A]">
                Sesi Perencanaan Eksklusif
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#1A1918]">
                Konsultasi Gratis Bersama Tim VELNORA
              </h3>
              <p className="text-xs sm:text-sm text-[#6B635B] font-light leading-relaxed">
                Ceritakan visi hunian Anda. Tim arsitek dan interior designer kami akan memberikan rekomendasi awal, estimasi timeline, dan penataan spasial yang tepat.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#262422]">Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Raden Satria"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#E0D7CB] text-sm text-[#1A1918] focus:outline-none focus:border-[#262422] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#262422]">Nomor WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="0812-XXXX-XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#E0D7CB] text-sm text-[#1A1918] focus:outline-none focus:border-[#262422] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#262422]">Tipe Properti</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#E0D7CB] text-sm text-[#1A1918] focus:outline-none focus:border-[#262422] transition-colors"
                  >
                    <option value="Rumah Tinggal">Rumah Tinggal / Residensial</option>
                    <option value="Penthouse / Apartemen">Penthouse / Apartemen</option>
                    <option value="Villa Retret">Villa Tropis / Retret</option>
                    <option value="Komersial / Butik / Resto">Komersial / Butik / Studio</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#262422]">Lokasi Properti</label>
                  <input
                    type="text"
                    placeholder="Contoh: Jakarta Selatan, BSD, Bali, Bandung"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#E0D7CB] text-sm text-[#1A1918] focus:outline-none focus:border-[#262422] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#262422]">Estimasi Luas Area</label>
                  <select
                    value={formData.estimatedArea}
                    onChange={(e) => setFormData({ ...formData, estimatedArea: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#E0D7CB] text-sm text-[#1A1918] focus:outline-none focus:border-[#262422] transition-colors"
                  >
                    <option value="Di bawah 100 m²">Di bawah 100 m²</option>
                    <option value="100 - 250 m²">100 – 250 m²</option>
                    <option value="250 - 500 m²">250 – 500 m²</option>
                    <option value="Di atas 500 m²">Di atas 500 m²</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#262422]">Email (Opsional)</label>
                  <input
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#E0D7CB] text-sm text-[#1A1918] focus:outline-none focus:border-[#262422] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#262422]">
                  Deskripsi Kebutuhan atau Nuansa yang Diinginkan
                </label>
                <textarea
                  rows={3}
                  placeholder="Ceritakan gambaran ruang impian Anda, preferensi material (misal: kayu jati, warm neutral), atau timeline yang diharapkan..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#E0D7CB] text-sm text-[#1A1918] focus:outline-none focus:border-[#262422] transition-colors resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#262422] text-[#FAF8F5] text-sm font-medium rounded-full hover:bg-[#3D3A36] transition-all shadow-sm"
                >
                  <Send className="w-4 h-4 text-[#D4C9BC]" />
                  <span>Kirim Pengajuan Konsultasi</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 bg-[#EAE3D9] text-[#262422] text-sm font-medium rounded-full hover:bg-[#DCD4C7] transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#262422]" />
                  <span>Chat WhatsApp Langsung</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#E5DFD4] text-[#262422] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif-luxury text-3xl text-[#1A1918]">
                Terima Kasih, {formData.name || 'Bapak/Ibu'}
              </h3>
              <p className="text-sm sm:text-base text-[#5A544E] max-w-md mx-auto leading-relaxed">
                Permintaan konsultasi gratis Anda telah kami terima. Lead Architect dan tim studio VELNORA akan menghubungi Anda via WhatsApp ({formData.phone || 'kontak Anda'}) dalam waktu 1x24 jam kerja.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[#E8E2D9] max-w-md mx-auto text-left text-xs space-y-1.5 text-[#6B635B]">
              <div><strong>Tipe:</strong> {formData.propertyType}</div>
              <div><strong>Lokasi:</strong> {formData.location}</div>
              <div><strong>Estimasi Luas:</strong> {formData.estimatedArea}</div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#262422] text-[#FAF8F5] text-xs sm:text-sm font-medium rounded-full hover:bg-[#3D3A36] transition-all"
              >
                <span>Buka WhatsApp Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={resetForm}
                className="px-6 py-3 text-xs sm:text-sm text-[#736B63] hover:text-[#1A1918] transition-colors"
              >
                Kembali ke Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
