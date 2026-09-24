import React, { useState } from 'react';
import { BOOK_CHAPTERS, BookChapter } from '../data/landingData';
import { BookOpen, Check, FileText, Smartphone, Tablet, Printer, ChevronRight } from 'lucide-react';

interface BookPreviewProps {
  onOpenCheckout: () => void;
}

export const BookPreview: React.FC<BookPreviewProps> = ({ onOpenCheckout }) => {
  const [activeChapter, setActiveChapter] = useState<BookChapter>(BOOK_CHAPTERS[1]);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <section id="contenido" className="py-16 sm:py-20 bg-[#FAF7F2] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#0E6B63] block mb-2">
            Contenido Detallado
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A4F49] mb-4">
            Echa un vistazo dentro de la Guía Digital
          </h2>
          <p className="text-sm sm:text-base text-[#405650]">
            Diseñada en un formato directo y práctico de <strong>35 minutos de lectura</strong>, para que no tengas que leer un libro denso de 300 páginas cuando estás lidiando con la urgencia del día a día.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-14">
          
          {/* Left Column: Visual Product Package Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              
              <div 
                className={`w-full aspect-[4/3] bg-gradient-to-br from-[#0A4F49] to-[#0E6B63] p-8 flex flex-col justify-end text-white transition-opacity duration-500 ${
                  imageLoaded ? 'hidden' : 'flex'
                }`}
              >
                <span className="text-xs uppercase font-bold tracking-wider text-[#D9EFC4] mb-1">
                  Guía Digital + Bonos Imprimibles
                </span>
                <p className="font-heading text-2xl font-bold">Crece en Calma</p>
                <p className="text-xs text-[#A9C4AD] mt-1">30 Guiones Situacionales · Termómetro de 2 Minutos · Acceso Inmediato</p>
              </div>

              <img
                src="/src/assets/images/guide_bundle_mockup_1790169672679.jpg"
                alt="Pack completo de la Guía Digital Crece en Calma mostrado en tablet, móvil y hojas imprimibles de bolsillo"
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                className="w-full h-auto object-cover object-center"
              />

              <div className="p-4 sm:p-5 bg-white border-t border-[#E8ECE9] flex flex-wrap items-center justify-between gap-4 text-xs text-[#405650]">
                <div className="flex items-center gap-1.5 font-medium">
                  <Smartphone className="w-4 h-4 text-[#0E6B63]" />
                  <span>En tu teléfono</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Tablet className="w-4 h-4 text-[#0E6B63]" />
                  <span>En tu tablet</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Printer className="w-4 h-4 text-[#0E6B63]" />
                  <span>100% Imprimible</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-[#0A4F49]">
                  <FileText className="w-4 h-4 text-[#E85D36]" />
                  <span>PDF de alta resolución</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Chapter Navigation */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Chapters Accordion / Tab Buttons */}
            <div className="space-y-2.5">
              {BOOK_CHAPTERS.map(ch => {
                const isActive = activeChapter.number === ch.number;
                return (
                  <button
                    key={ch.number}
                    onClick={() => setActiveChapter(ch)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isActive
                        ? 'bg-white border-[#0E6B63] shadow-sm ring-1 ring-[#0E6B63]'
                        : 'bg-white/70 border-[#DDE5E0] hover:bg-white hover:border-[#A9C4AD]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                        isActive ? 'bg-[#0E6B63] text-white' : 'bg-[#EFF5F1] text-[#405650]'
                      }`}>
                        {ch.number.replace('Capítulo ', '')}
                      </span>
                      <div>
                        <p className="text-xs uppercase font-bold tracking-wider text-[#7FA687]">
                          {ch.number} · {ch.duration}
                        </p>
                        <h4 className="font-heading font-bold text-sm sm:text-base text-[#0A4F49]">
                          {ch.title}
                        </h4>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${
                      isActive ? 'rotate-90 text-[#0E6B63]' : 'text-[#8FB196]'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Active Chapter Details Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#A9C4AD] shadow-xs mt-2">
              <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-[#E8ECE9]">
                <span className="text-xs font-bold text-[#0E6B63] uppercase tracking-wider">
                  Detalle del {activeChapter.number}
                </span>
                <span className="text-xs bg-[#D9EFC4] text-[#0A4F49] font-bold px-2 py-0.5 rounded">
                  {activeChapter.duration}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#384C46] leading-relaxed mb-4">
                {activeChapter.summary}
              </p>

              <div className="space-y-2">
                <span className="text-xs font-bold text-[#0A4F49] uppercase tracking-wider block">
                  Puntos destacados:
                </span>
                {activeChapter.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#20302C]">
                    <span className="w-4 h-4 rounded-full bg-[#D9EFC4] text-[#0A4F49] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
