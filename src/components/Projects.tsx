import React, { useState } from 'react';
import { ArrowUpRight, Maximize2, MapPin, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/content';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onOpenConsultation: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenConsultation }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="proyek" className="py-20 sm:py-28 bg-[#FAF8F5] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[#E8E2D9] pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#8C827A] mb-3">
              <span className="w-6 h-[1px] bg-[#8C827A]" />
              <span>Portofolio Editorial</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#1A1918] font-normal leading-tight">
              Proyek Pilihan
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B635B] max-w-md font-light">
            Eksplorasi karya rancang bangun interior kami yang memprioritaskan kenyamanan taktil, proporsi ruang, dan kehangatan material tropis.
          </p>
        </div>

        {/* Editorial Projects Grid */}
        <div className="space-y-16 sm:space-y-24">
          {PROJECTS_DATA.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#E5DFD4] cursor-pointer shadow-md border border-[#E0D8CD] editorial-img-container"
                  >
                    <div className="aspect-[16/10] w-full">
                      <img
                        src={project.heroImage}
                        alt={`${project.name} - ${project.tagline}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover view button pill */}
                    <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#FAF8F5]/95 backdrop-blur-md rounded-full text-xs font-medium text-[#1A1918] shadow-md">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Lihat Galeri & Detail</span>
                      </div>
                    </div>

                    {/* Top Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#FAF8F5]/90 backdrop-blur-sm rounded-full text-[11px] font-medium uppercase tracking-wider text-[#262422] shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Narrative & Details Column */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-xs font-medium text-[#8C827A] uppercase tracking-wider">
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{project.location}</span>
                      </span>
                      <span>•</span>
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.area}</span>
                    </div>

                    <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#1A1918] font-normal">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg text-[#524B45] font-light leading-relaxed">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-[#736B63] font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Material Tags */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8C827A] block">
                      Spesifikasi Material Kunci:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.materials.slice(0, 3).map((mat, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-[#F3EFEA] border border-[#E8E2D9] text-xs text-[#524B45]"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Button */}
                  <div className="pt-2 flex items-center space-x-4">
                    <button
                      id={`explore-btn-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#262422] text-[#FAF8F5] text-xs sm:text-sm font-medium tracking-wide rounded-full hover:bg-[#3D3A36] transition-all group"
                    >
                      <span>Eksplorasi Proyek</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D4C9BC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={onOpenConsultation}
                      className="text-xs sm:text-sm text-[#736B63] hover:text-[#1A1918] underline underline-offset-4 transition-colors"
                    >
                      Konsultasi Desain Serupa
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Portfolio Note */}
        <div className="mt-16 sm:mt-20 p-8 rounded-2xl bg-[#F3EFEA] border border-[#E8E2D9] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-xs font-semibold uppercase tracking-wider text-[#8C827A]">
              <Sparkles className="w-4 h-4 text-[#8C827A]" />
              <span>Kustomisasi Tanpa Batas</span>
            </div>
            <h4 className="font-serif-luxury text-xl sm:text-2xl text-[#1A1918]">
              Memiliki visi atau referensi ruang tersendiri?
            </h4>
            <p className="text-xs sm:text-sm text-[#736B63] font-light">
              Kami siap menerjemahkan kebutuhan spesifik Anda menjadi denah spasial dan visualisasi 3D presisi.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="flex-shrink-0 inline-flex items-center space-x-2 px-6 py-3 bg-[#262422] text-[#FAF8F5] text-xs sm:text-sm font-medium rounded-full hover:bg-[#3D3A36] transition-all shadow-sm"
          >
            <span>Mulai Konsultasi Gratis</span>
            <ArrowUpRight className="w-4 h-4 text-[#D4C9BC]" />
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={onOpenConsultation}
      />
    </section>
  );
};
