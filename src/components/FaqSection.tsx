import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/landingData';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  const additionalFaqs = [
    ...FAQ_ITEMS,
    {
      q: "¿Sirve para niños con Alta Sensibilidad (PAS) o TDAH?",
      a: "Sí, es especialmente efectiva con ellos. Los niños neurodivergentes o con alta sensibilidad procesan los errores con una intensidad emocional mucho mayor y caen en la espiral de vergüenza con facilidad. Los guiones están diseñados para regular su sistema nervioso simpático sin sobrecargar su procesamiento sensorial."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#FAF7F2] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9EFC4] text-[#0A4F49] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#0E6B63]" />
            <span>Respuestas Claras</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A4F49] mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-base text-[#405650]">
            Resolvemos todas tus dudas antes de que comiences a aplicar el método en casa.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-10">
          {additionalFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#DDE5E0] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2]/50 transition-colors"
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-[#0A4F49]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0E6B63] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#405650] leading-relaxed border-t border-[#F0F4F2]">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Support Box */}
        <div className="bg-white rounded-2xl p-6 border border-[#A9C4AD] text-center max-w-xl mx-auto shadow-2xs">
          <p className="text-xs font-bold uppercase tracking-wider text-[#0E6B63] mb-1">
            ¿Tienes otra pregunta sobre tu pedido?
          </p>
          <p className="text-xs text-[#5B6B63] mb-3">
            Escríbenos directamente a nuestro equipo de soporte humano y te responderemos con cariño.
          </p>
          <a
            href="mailto:soporte@creceencalma.com"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0A4F49] bg-[#FAF7F2] hover:bg-[#EFF6EC] px-4 py-2 rounded-lg border border-[#A9C4AD] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#0E6B63]" />
            <span>soporte@creceencalma.com</span>
          </a>
        </div>

      </div>
    </section>
  );
};
