import React from 'react';
import { Compass, MessageSquareQuote, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section id="metodo" className="py-16 sm:py-20 bg-white border-y border-[#E8ECE9] scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#0E6B63] block mb-2">
            El Sistema Paso a Paso
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A4F49] mb-4">
            3 pasos sencillos, en orden estricto
          </h2>
          <p className="text-sm sm:text-base text-[#405650] leading-relaxed">
            No necesitas memorizar teorías complejas ni convertirte en terapeuta. Solo necesitas aplicar esta secuencia en el momento crítico.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          
          {/* Step 1 */}
          <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#A9C4AD]/50 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-[#0A4F49] text-white flex items-center justify-center font-heading font-bold text-lg">
                  1
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E6B63] bg-[#D9EFC4] px-2.5 py-1 rounded-md">
                  En 2 minutos
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0A4F49] mb-2">
                Reconocer
              </h3>
              <p className="text-xs sm:text-sm text-[#405650] leading-relaxed mb-4">
                Usa el <strong>Termómetro de la Espiral</strong> para distinguir si estás ante un simple berrinche de frustración o una herida activa de vergüenza infantil.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-[#20302C] pt-4 border-t border-[#E3ECE6]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6B63] shrink-0" />
                <span>Semáforo visual de 3 fases</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6B63] shrink-0" />
                <span>Identifica micro-señales corporales</span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="bg-[#FAF7F2] rounded-3xl p-7 border-2 border-[#0E6B63] flex flex-col justify-between shadow-xs relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0E6B63] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
              Paso Crítico
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-[#0E6B63] text-white flex items-center justify-center font-heading font-bold text-lg">
                  2
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E6B63] bg-[#D9EFC4] px-2.5 py-1 rounded-md">
                  En 10 segundos
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0A4F49] mb-2">
                Responder
              </h3>
              <p className="text-xs sm:text-sm text-[#405650] leading-relaxed mb-4">
                Aplica uno de los <strong>30 guiones exactos</strong>. Separa inmediatamente la conducta del niño de su valía personal sin caer en la trampa del sermón.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-[#20302C] pt-4 border-t border-[#E3ECE6]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6B63] shrink-0" />
                <span>Palabras que desactivan la amígdala</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6B63] shrink-0" />
                <span>Adaptados por edad (3 a 11 años)</span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#A9C4AD]/50 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-[#0A4F49] text-white flex items-center justify-center font-heading font-bold text-lg">
                  3
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E6B63] bg-[#D9EFC4] px-2.5 py-1 rounded-md">
                  A largo plazo
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0A4F49] mb-2">
                Reparar
              </h3>
              <p className="text-xs sm:text-sm text-[#405650] leading-relaxed mb-4">
                El <strong>Plan Antes-Durante-Después</strong> te guía para cerrar el momento con un abrazo sincero, restaurar el apego y enseñarle a solucionar lo ocurrido.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-[#20302C] pt-4 border-t border-[#E3ECE6]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6B63] shrink-0" />
                <span>Ritual de las 3 preguntas nocturnas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6B63] shrink-0" />
                <span>Reparación activa sin humillación</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
