import React, { useState } from 'react';
import { SCRIPT_SCENARIOS, ScriptScenario } from '../data/landingData';
import { Volume2, VolumeX, Sparkles, Check, X, ArrowRight, ShieldCheck, MessageCircleQuestion } from 'lucide-react';

interface InteractiveSimulatorProps {
  onOpenCheckout: () => void;
}

export const InteractiveSimulator: React.FC<InteractiveSimulatorProps> = ({ onOpenCheckout }) => {
  const [selectedScenario, setSelectedScenario] = useState<ScriptScenario>(SCRIPT_SCENARIOS[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const toggleSimulateTone = () => {
    setIsPlayingAudio(prev => !prev);
  };

  return (
    <section id="simulador" className="py-16 sm:py-20 bg-[#FAF7F2] scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9EFC4] text-[#0A4F49] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0E6B63]" />
            <span>Simulador Interactivo de Guiones</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A4F49] mb-3">
            Prueba cómo responden las palabras que sí llegan
          </h2>
          <p className="text-sm sm:text-base text-[#405650]">
            Selecciona una situación cotidiana que vivas con tu hijo para ver la diferencia entre la respuesta instintiva que agrava la culpa y el guion probado de 10 segundos.
          </p>
        </div>

        {/* Scenario Selection Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {SCRIPT_SCENARIOS.map(sc => {
            const isSelected = selectedScenario.id === sc.id;
            return (
              <button
                key={sc.id}
                onClick={() => {
                  setSelectedScenario(sc);
                  setIsPlayingAudio(false);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap border ${
                  isSelected
                    ? 'bg-[#0A4F49] text-white border-[#0A4F49] shadow-sm'
                    : 'bg-white text-[#405650] border-[#D1DDD5] hover:bg-[#EFF5F1]'
                }`}
              >
                {sc.triggerTitle}
              </button>
            );
          })}
        </div>

        {/* Selected Scenario Playground Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-9 shadow-sm border border-[#A9C4AD]/60 mb-10">
          
          {/* Situation Context Banner */}
          <div className="bg-[#FAF7F2] rounded-2xl p-4 sm:p-5 border-l-4 border-[#0E6B63] mb-8">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-xs uppercase font-bold tracking-wider text-[#0E6B63]">
                Momento de crisis · {selectedScenario.category}
              </span>
              <span className="text-[11px] text-[#7A8E85] font-medium hidden sm:inline">
                Guion de la Guía Digital
              </span>
            </div>
            <p className="font-heading text-lg sm:text-xl font-bold text-[#0A4F49] mb-1">
              {selectedScenario.childPhrase}
            </p>
            <p className="text-xs sm:text-sm text-[#5B6B63]">
              Contexto: {selectedScenario.childContext}
            </p>
          </div>

          {/* Comparison Grid: Impulsive vs. Calm Script */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            
            {/* The Impulsive Response (Why it fails) */}
            <div className="bg-[#FFF8F6] rounded-2xl p-5 sm:p-6 border border-[#F0A08C]/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#FCECE8] text-[#C94324] flex items-center justify-center font-bold text-xs">
                    <X className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C94324]">
                    Lo que solemos decir (No ayuda)
                  </span>
                </div>
                <blockquote className="font-heading text-base font-semibold text-[#20302C] italic mb-4 pl-3 border-l-2 border-[#F0A08C]">
                  {selectedScenario.wrongResponse.words}
                </blockquote>
              </div>
              <div className="pt-3 border-t border-[#FCDFD8] text-xs text-[#7A453B]">
                <strong className="font-bold text-[#C94324] block mb-0.5">Por qué falla en su cerebro:</strong>
                {selectedScenario.wrongResponse.whyFails}
              </div>
            </div>

            {/* The Crece en Calma 10-Second Script */}
            <div className="bg-[#F3FAF5] rounded-2xl p-5 sm:p-6 border-2 border-[#A9C4AD] flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#D9EFC4] text-[#0A4F49] flex items-center justify-center font-bold text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0A4F49]">
                      Guion &ldquo;Crece en Calma&rdquo; (Dilo así)
                    </span>
                  </div>
                  <span className="text-[10px] bg-[#D9EFC4] text-[#0A4F49] font-bold px-2 py-0.5 rounded-full">
                    10 Segundos
                  </span>
                </div>
                <blockquote className="font-heading text-base sm:text-lg font-semibold text-[#0A4F49] leading-snug mb-4 pl-3 border-l-2 border-[#0E6B63]">
                  {selectedScenario.calmResponse.words}
                </blockquote>
              </div>
              <div className="pt-3 border-t border-[#D5E8DA] text-xs text-[#2A4B42]">
                <strong className="font-bold text-[#0E6B63] block mb-0.5">La clave neurológica:</strong>
                {selectedScenario.calmResponse.whyWorks}
              </div>
            </div>

          </div>

          {/* Calming Tone Simulation Tip Box */}
          <div className="bg-[#FAF7F2] rounded-2xl p-4 sm:p-5 border border-[#E3ECE6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0E6B63] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Volume2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#0E6B63]">
                  Indicación de Tono y Postura Corporal
                </p>
                <p className="text-xs sm:text-sm text-[#384C46] mt-0.5">
                  {selectedScenario.calmResponse.toneTip}
                </p>
              </div>
            </div>

            <button
              onClick={toggleSimulateTone}
              className="text-xs font-bold px-3.5 py-2 rounded-lg bg-white border border-[#A9C4AD] text-[#0A4F49] hover:bg-[#F3FAF5] transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
            >
              {isPlayingAudio ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#C94324]" />
                  <span>Ocultar guía de ritmo</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#0E6B63]" />
                  <span>Ver guía de respiración y ritmo</span>
                </>
              )}
            </button>
          </div>

          {/* Interactive Rhythm Guidance Accordion */}
          {isPlayingAudio && (
            <div className="mt-4 p-4 rounded-xl bg-[#EFF6EC] border border-[#A9C4AD] text-xs text-[#20302C] animate-fadeIn">
              <div className="font-bold text-[#0A4F49] mb-1">
                Cómo regular tu propio sistema nervioso antes de hablar:
              </div>
              <ol className="list-decimal list-inside space-y-1 text-[#384C46]">
                <li><strong>Inhala en 4 segundos, exhala en 6 segundos</strong> (le indica a tu cerebro adulto que no hay peligro de vida o muerte).</li>
                <li><strong>Baja tu estatura:</strong> Nunca le hables de pie mirándolo hacia abajo; arrodíllate para estar a la altura de sus ojos.</li>
                <li><strong>Ritmo lento:</strong> Habla a la mitad de velocidad de tu voz normal; la calma se contagia por el tono, no por el volumen.</li>
              </ol>
            </div>
          )}

        </div>

        {/* Conversion Bridge to the Full 30 Scripts */}
        <div className="bg-gradient-to-r from-[#0E6B63] to-[#0A4F49] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="text-center sm:text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D9EFC4] block mb-1">
              Guía de Respuesta Inmediata
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold mb-1">
              Tienes 30 guiones listos para cada situación
            </h3>
            <p className="text-xs sm:text-sm text-[#EFF6EC]/90 max-w-xl">
              Imprime la tarjeta de bolsillo o consúltala en tu móvil en segundos cuando empiece el berrinche o el cierre emocional.
            </p>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-[#E85D36] hover:bg-[#D94B22] text-white font-bold text-sm tracking-wide shadow-md transition-all active:scale-[0.98] whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 shrink-0"
          >
            <span>Obtener los 30 Guiones ($14.90)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
