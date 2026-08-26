import React, { useState, useEffect } from 'react';
import { X, MapPin, Calendar, Maximize2, Layers, User, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenConsultation }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentGallery = project.gallery && project.gallery.length > 0 ? project.gallery : [project.heroImage];

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % currentGallery.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
  };

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#1A1918]/80 backdrop-blur-md transition-opacity animate-fade-in"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-content"
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#FAF8F5] rounded-2xl sm:rounded-3xl shadow-2xl overflow-y-auto border border-[#E8E2D9] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 bg-[#FAF8F5]/90 backdrop-blur-md px-6 py-4 border-b border-[#E8E2D9] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#8C827A]">
              {project.category} • {project.location}
            </span>
            <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#1A1918] font-normal">
              {project.name}
            </h3>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full bg-[#EFEAE2] hover:bg-[#E2DAD0] text-[#262422] transition-colors"
            aria-label="Tutup modal proyek"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          {/* Main Gallery Slider */}
          <div className="relative rounded-2xl overflow-hidden bg-[#E2DAD0] aspect-[16/10] sm:aspect-[21/10] group">
            <img
              src={currentGallery[activeImageIndex]}
              alt={`${project.name} photo ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-700"
            />

            {/* Navigation buttons */}
            {currentGallery.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#1A1918]/60 text-white hover:bg-[#1A1918]/90 transition-all opacity-80 group-hover:opacity-100"
                  aria-label="Foto sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#1A1918]/60 text-white hover:bg-[#1A1918]/90 transition-all opacity-80 group-hover:opacity-100"
                  aria-label="Foto berikutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#1A1918]/70 backdrop-blur-sm rounded-full text-white text-xs font-mono">
                  {activeImageIndex + 1} / {currentGallery.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Strip */}
          {currentGallery.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {currentGallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative flex-shrink-0 w-20 sm:w-28 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx ? 'border-[#262422] scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Architectural Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#F3EFEA] border border-[#E8E2D9]">
            <div className="space-y-1">
              <div className="flex items-center space-x-1.5 text-xs text-[#8C827A]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Lokasi</span>
              </div>
              <div className="text-sm font-medium text-[#1A1918]">{project.location}</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-1.5 text-xs text-[#8C827A]">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Luas Area</span>
              </div>
              <div className="text-sm font-medium text-[#1A1918]">{project.area}</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-1.5 text-xs text-[#8C827A]">
                <Calendar className="w-3.5 h-3.5" />
                <span>Tahun Selesai</span>
              </div>
              <div className="text-sm font-medium text-[#1A1918]">{project.year}</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-1.5 text-xs text-[#8C827A]">
                <User className="w-3.5 h-3.5" />
                <span>Lead Architect</span>
              </div>
              <div className="text-sm font-medium text-[#1A1918]">{project.leadArchitect}</div>
            </div>
          </div>

          {/* Project Story & Concept */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            <div className="space-y-3">
              <h4 className="font-serif-luxury text-xl text-[#1A1918]">Narasi & Kebutuhan Ruang</h4>
              <p className="text-sm sm:text-base text-[#5A544E] leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif-luxury text-xl text-[#1A1918]">Konsep Arsitektural</h4>
              <p className="text-sm sm:text-base text-[#5A544E] leading-relaxed font-light">
                {project.concept}
              </p>
            </div>
          </div>

          {/* Material Specs */}
          <div className="space-y-3 pt-4 border-t border-[#E8E2D9]">
            <div className="flex items-center space-x-2 text-sm font-medium text-[#1A1918]">
              <Layers className="w-4 h-4 text-[#8C827A]" />
              <span>Material Utama & Finishing:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.materials.map((mat, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full bg-[#EAE3D9] text-[#262422] text-xs font-medium"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Client Quote if available */}
          {project.clientQuote && (
            <div className="p-6 rounded-2xl bg-[#EFEAE2] border-l-4 border-[#262422] space-y-2">
              <p className="italic text-sm sm:text-base text-[#47413B] leading-relaxed">
                "{project.clientQuote.text}"
              </p>
              <div className="text-xs font-medium text-[#736B63] uppercase tracking-wider">
                — {project.clientQuote.author}
              </div>
            </div>
          )}

          {/* Bottom Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E8E2D9]">
            <div className="text-xs text-[#8C827A] text-center sm:text-left">
              Tertarik mewujudkan konsep serupa untuk ruang hunian Anda?
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#262422] text-[#FAF8F5] text-sm font-medium rounded-full hover:bg-[#3D3A36] transition-all"
            >
              <span>Konsultasikan Proyek Ini</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4C9BC]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
