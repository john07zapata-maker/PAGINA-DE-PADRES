import React, { useState } from 'react';
import { ShieldCheck, Download, Star, Sparkles, ArrowRight, PlayCircle, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenCheckout: () => void;
  onExploreSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, onExploreSimulator }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE6] to-[#FAF7F2]">
      {/* Background subtle ambient warmth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-[#D9EFC4]/25 via-[#A9C4AD]/15 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Conversion Copy & Authority */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Social Proof & Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#A9C4AD]/50 shadow-xs mb-6 text-xs text-[#2A443D] font-medium">
              <div className="flex text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-[#0A4F49]">4.9/5</span>
              <span className="text-[#8FB196]">·</span>
              <span>Más de 2,400 familias acompañadas</span>
            </div>

            {/* Core Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A4F49] leading-[1.18] text-balance mb-6">
              Cuando tu hijo dice{' '}
              <span className="relative inline-block px-2 py-0.5 rounded-lg bg-[#D9EFC4] text-[#073632]">
                &ldquo;soy malo&rdquo;
              </span>
              , lo que respondas en los próximos 10 segundos importa más de lo que crees.
            </h1>

            {/* Subheadline & Emotional Resonance */}
            <p className="text-base sm:text-lg text-[#3F554F] leading-relaxed mb-6 max-w-2xl font-normal">
              La guía práctica paso a paso con los <strong className="font-semibold text-[#0A4F49]">30 guiones exactos</strong> para el momento en que tu hijo entra en la Espiral de Vergüenza. Sin minimizar lo que siente, sin sermones y sin dejarlo solo con la culpa.
            </p>

            {/* Bullet Value Highlights */}
            <div className="grid sm:grid-cols-2 gap-2.5 w-full mb-8 text-left text-xs sm:text-sm text-[#20302C]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0E6B63] shrink-0" />
                <span>Desactiva la culpa antes de que se vuelva rabia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0E6B63] shrink-0" />
                <span>30 situaciones reales (escuela, tareas, hermanos)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0E6B63] shrink-0" />
                <span>Termómetro visual de 2 minutos para actuar rápido</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0E6B63] shrink-0" />
                <span>Lectura rápida de 35 min + Tarjetas para el bolsillo</span>
              </div>
            </div>

            {/* Conversion Pricing Block */}
            <div className="w-full max-w-md bg-white rounded-2xl p-5 border border-[#A9C4AD]/60 shadow-sm mb-6">
              <div className="flex items-baseline justify-between mb-3 pb-3 border-b border-[#E8ECE9]">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#7FA687] block">
                    Precio especial de lanzamiento
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-[#0A4F49] font-mono">
                      $14.90
                    </span>
                    <span className="text-sm font-semibold text-[#5B6B63]">USD</span>
                    <span className="text-sm text-[#A0B0A8] line-through font-mono">
                      $24.90 USD
                    </span>
                  </div>
                </div>
                <span className="bg-[#D9EFC4] text-[#0A4F49] text-xs font-bold px-2.5 py-1 rounded-md">
                  AHORRAS 40%
                </span>
              </div>

              {/* Main Primary CTA Button */}
              <button
                onClick={onOpenCheckout}
                className="w-full py-4 px-6 rounded-xl bg-[#E85D36] hover:bg-[#D94B22] text-white font-bold text-base sm:text-lg tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Quiero Mi Guía Ahora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-[#5B6B63]">
                <span className="flex items-center gap-1">
                  <Download className="w-3.5 h-3.5 text-[#0E6B63]" />
                  Acceso inmediato en PDF
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0E6B63]" />
                  Garantía 10 días 100% segura
                </span>
              </div>
            </div>

            {/* Secondary Action Link */}
            <button
              onClick={onExploreSimulator}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E6B63] hover:text-[#0A4F49] underline decoration-[#8FB196] underline-offset-4 cursor-pointer"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Ver una muestra interactiva de los guiones gratis</span>
            </button>
          </div>

          {/* Right Column: Emotive Editorial Photography & Visual Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#0E6B63]/15 via-[#D9EFC4]/30 to-[#F0A08C]/15 rounded-3xl blur-lg -z-10" />

              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-[#FAF6EC] aspect-[4/5] sm:aspect-[4/5]">
                {/* Fallback container with warm gradient and SVG icon */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-[#0E6B63] to-[#0A4F49] p-8 flex flex-col justify-end text-white transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <p className="font-heading text-xl font-bold mb-2">Crece en Calma</p>
                  <p className="text-xs text-[#D9EFC4]">Acompañando con amor y presencia en los momentos difíciles.</p>
                </div>

                <img
                  src="/src/assets/images/hero_parent_child_calm_1790169660063.jpg"
                  alt="Madre acompañando con calma y empatía a su hijo a la altura de sus ojos en un momento difícil"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                />

                {/* Overlaid Micro-Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl py-2 px-3 shadow-md border border-[#E3ECE6] flex items-center gap-2.5 max-w-[210px]">
                  <div className="w-8 h-8 rounded-full bg-[#D9EFC4] flex items-center justify-center text-[#0A4F49] font-bold text-xs shrink-0">
                    10s
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold text-[#5B6B63] tracking-wider leading-none">
                      Regla de Oro
                    </p>
                    <p className="text-xs font-semibold text-[#0A4F49] leading-tight">
                      Respuesta antes de la espiral
                    </p>
                  </div>
                </div>

                {/* Bottom Quote Pill */}
                <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-md border border-[#E3ECE6]">
                  <p className="text-xs italic text-[#20302C] leading-snug">
                    &ldquo;No necesitaba que le dijera que todo estaba bien, necesitaba que validara su miedo sin asustarme yo.&rdquo;
                  </p>
                  <p className="text-[10px] font-bold text-[#0E6B63] mt-1 text-right">
                    — Natalia M., madre de 2 niños
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
