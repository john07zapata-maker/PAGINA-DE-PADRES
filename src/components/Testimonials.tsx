import React, { useState } from 'react';
import { TESTIMONIALS, TestimonialItem } from '../data/landingData';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<'Todos' | 'Madre' | 'Padre' | 'Especialista'>('Todos');

  const filteredTestimonials = filter === 'Todos'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.tag === filter);

  return (
    <section id="testimonios" className="py-16 sm:py-20 bg-[#FAF7F2] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#0E6B63] block mb-2">
            Historias Reales de Familias
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A4F49] mb-4">
            Lo que ocurre en los hogares cuando cambian las palabras
          </h2>
          <p className="text-sm sm:text-base text-[#405650]">
            Más de 2,400 madres, padres y terapeutas infantiles ya utilizan los guiones de Crece en Calma a diario.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {(['Todos', 'Madre', 'Padre', 'Especialista'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                filter === tab
                  ? 'bg-[#0A4F49] text-white border-[#0A4F49] shadow-xs'
                  : 'bg-white text-[#405650] border-[#D1DDD5] hover:bg-[#EFF5F1]'
              }`}
            >
              {tab === 'Todos' ? 'Todas las experiencias' : tab === 'Madre' ? 'Madres' : tab === 'Padre' ? 'Padres' : 'Especialistas'}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filteredTestimonials.map(t => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#A9C4AD]/60 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Header with Rating and Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-[#F59E0B]">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#0E6B63] bg-[#D9EFC4] px-2.5 py-0.5 rounded-full">
                    {t.tag}
                  </span>
                </div>

                {/* Quote Body */}
                <p className="text-xs sm:text-sm text-[#384C46] leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8ECE9]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#0A4F49]">
                      {t.name}
                    </h4>
                    <p className="text-xs text-[#5B6B63]">
                      {t.role} · {t.location}
                    </p>
                    <p className="text-[11px] text-[#7FA687] font-medium mt-0.5">
                      {t.childInfo}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0E6B63]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0E6B63]" />
                      Compra verificada
                    </span>
                  </div>
                </div>

                <div className="mt-3 bg-[#FAF7F2] p-2.5 rounded-xl text-[11px] text-[#20302C] font-medium border border-[#E3ECE6]">
                  <strong className="text-[#0A4F49]">Resultado: </strong>
                  {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
