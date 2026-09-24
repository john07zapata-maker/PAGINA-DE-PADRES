import React from 'react';
import { Gift, Check, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface ValueStackProps {
  onOpenCheckout: () => void;
}

export const ValueStack: React.FC<ValueStackProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-[#E8ECE9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9EFC4] text-[#0A4F49] text-xs font-bold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5 text-[#0E6B63]" />
            <span>Stack de Valor Completo</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A4F49] mb-4">
            Tu compra de hoy incluye todo este paquete completo
          </h2>
          <p className="text-sm sm:text-base text-[#405650]">
            Sin suscripciones ni cobros recurrentes. Acceso de por vida a la guía y sus 3 bonificaciones complementarias.
          </p>
        </div>

        {/* Value Stack Cards Grid */}
        <div className="space-y-4 max-w-3xl mx-auto mb-12">
          
          {/* Main Product */}
          <div className="bg-[#FAF7F2] rounded-2xl p-5 sm:p-6 border-2 border-[#0E6B63] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="w-9 h-9 rounded-xl bg-[#0E6B63] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                PDF
              </span>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E6B63]">
                  Producto Principal
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#0A4F49]">
                  Guía Digital &ldquo;Crece en Calma: Fuera de la Espiral de Vergüenza&rdquo;
                </h3>
                <p className="text-xs text-[#5B6B63] mt-1">
                  Los 5 capítulos completos con el Termómetro de 2 minutos y los 30 guiones de rescate emocional.
                </p>
              </div>
            </div>
            <div className="text-right shrink-0 self-end sm:self-center">
              <span className="text-xs text-[#8FB196] block line-through">Valor regular</span>
              <span className="text-base font-bold text-[#0A4F49] font-mono">$24.90 USD</span>
            </div>
          </div>

          {/* Bonus 1 */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#A9C4AD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-start gap-4">
              <span className="w-9 h-9 rounded-xl bg-[#D9EFC4] text-[#0A4F49] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                B1
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0A4F49] bg-[#D9EFC4] px-2 py-0.5 rounded">
                    Bono Gratuito #1
                  </span>
                  <span className="text-xs text-[#8FB196]">· Hoja Plastificable</span>
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#0A4F49] mt-1">
                  Tarjeta de Bolsillo con los 30 Guiones de Emergencia
                </h3>
                <p className="text-xs text-[#5B6B63] mt-1">
                  Formato rápido de consulta para pegar en la nevera o llevar doblada en la cartera. No necesitas abrir el PDF durante una crisis.
                </p>
              </div>
            </div>
            <div className="text-right shrink-0 self-end sm:self-center">
              <span className="text-xs text-[#8FB196] block line-through">Valor regular</span>
              <span className="text-base font-bold text-[#0E6B63] font-mono">$12.00 USD</span>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#A9C4AD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-start gap-4">
              <span className="w-9 h-9 rounded-xl bg-[#D9EFC4] text-[#0A4F49] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                B2
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0A4F49] bg-[#D9EFC4] px-2 py-0.5 rounded">
                    Bono Gratuito #2
                  </span>
                  <span className="text-xs text-[#8FB196]">· Guía Especial</span>
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#0A4F49] mt-1">
                  Protocolo &ldquo;Cuando Tú Pierdes la Calma Primero&rdquo;
                </h3>
                <p className="text-xs text-[#5B6B63] mt-1">
                  Qué decir y qué hacer cuando el que gritó o perdió la paciencia fuiste tú. Cómo reparar el apego sin perder tu rol de autoridad amorosa.
                </p>
              </div>
            </div>
            <div className="text-right shrink-0 self-end sm:self-center">
              <span className="text-xs text-[#8FB196] block line-through">Valor regular</span>
              <span className="text-base font-bold text-[#0E6B63] font-mono">$15.00 USD</span>
            </div>
          </div>

          {/* Bonus 3 */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#A9C4AD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-start gap-4">
              <span className="w-9 h-9 rounded-xl bg-[#D9EFC4] text-[#0A4F49] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                B3
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0A4F49] bg-[#D9EFC4] px-2 py-0.5 rounded">
                    Bono Gratuito #3
                  </span>
                  <span className="text-xs text-[#8FB196]">· En Entornos Públicos</span>
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#0A4F49] mt-1">
                  Guiones para Crisis Fuera de Casa (Sociales y Públicas)
                </h3>
                <p className="text-xs text-[#5B6B63] mt-1">
                  Estrategias para el supermercado, reuniones con abuelos, cumpleaños y la puerta de la escuela, protegiendo a tu hijo de las miradas juiciosas.
                </p>
              </div>
            </div>
            <div className="text-right shrink-0 self-end sm:self-center">
              <span className="text-xs text-[#8FB196] block line-through">Valor regular</span>
              <span className="text-base font-bold text-[#0E6B63] font-mono">$14.00 USD</span>
            </div>
          </div>

        </div>

        {/* Pricing Anchor & Conversion Calculation Box */}
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#0A4F49] to-[#073632] rounded-3xl p-7 sm:p-9 text-white shadow-xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-44 h-44 bg-[#D9EFC4]/10 rounded-full blur-2xl pointer-events-none" />

          <span className="inline-block bg-[#D9EFC4] text-[#0A4F49] text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
            Ahorras un 77% del valor total
          </span>

          <div className="mb-2">
            <span className="text-sm text-[#A9C4AD] block mb-1">
              Valor real de todo el paquete por separado: <span className="line-through font-mono">$65.90 USD</span>
            </span>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-xs text-[#D9EFC4] uppercase font-bold tracking-wider">Hoy solo</span>
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white">
                $14.90
              </span>
              <span className="text-base font-semibold text-[#A9C4AD]">USD</span>
            </div>
            <p className="text-xs text-[#D9EFC4]/80 mt-1">
              Pago único · Acceso inmediato y de por vida · Sin pagos mensuales
            </p>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto my-6 py-4 px-10 rounded-xl bg-[#E85D36] hover:bg-[#D94B22] text-white font-bold text-base sm:text-lg tracking-wide shadow-lg hover:shadow-xl transition-all active:scale-[0.98] inline-flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Quiero Todo el Paquete por $14.90</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="pt-4 border-t border-[#136159] flex flex-wrap items-center justify-center gap-4 text-xs text-[#EFF6EC]/85">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#D9EFC4]" />
              Descarga instantánea en tu email
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D9EFC4]" />
              Garantía de satisfacción de 10 días
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
