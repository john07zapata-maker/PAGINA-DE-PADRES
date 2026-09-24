import React from 'react';
import { ShieldCheck, ArrowRight, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface GuaranteeProps {
  onOpenCheckout: () => void;
}

export const Guarantee: React.FC<GuaranteeProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-[#E8ECE9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Guarantee Badge - Calidad Premium Garantizada Medallion */}
        <div className="flex justify-center mb-6">
          <svg
            viewBox="0 0 320 270"
            className="w-48 sm:w-56 h-auto drop-shadow-md select-none"
            aria-label="Calidad Premium Garantizada"
            role="img"
          >
            <defs>
              {/* Outer Gold Rim Gradient */}
              <linearGradient id="goldRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2A8" />
                <stop offset="25%" stopColor="#F5C84C" />
                <stop offset="50%" stopColor="#D99B26" />
                <stop offset="75%" stopColor="#FEDE7B" />
                <stop offset="100%" stopColor="#BA7916" />
              </linearGradient>

              {/* Inner Medallion Center Gold Gradient */}
              <radialGradient id="goldCenterGrad" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#FFFADB" />
                <stop offset="35%" stopColor="#FED766" />
                <stop offset="70%" stopColor="#E9A825" />
                <stop offset="100%" stopColor="#B87714" />
              </radialGradient>

              {/* Ribbon Gold Gradient */}
              <linearGradient id="ribbonGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E2A222" />
                <stop offset="20%" stopColor="#FEDD74" />
                <stop offset="50%" stopColor="#FFF2A6" />
                <stop offset="80%" stopColor="#FEDD74" />
                <stop offset="100%" stopColor="#E2A222" />
              </linearGradient>

              {/* Ribbon Tail Left Gradient */}
              <linearGradient id="ribbonTailLeft" x1="100%" y1="50%" x2="0%" y2="50%">
                <stop offset="0%" stopColor="#D1921B" />
                <stop offset="100%" stopColor="#FAD463" />
              </linearGradient>

              {/* Ribbon Tail Right Gradient */}
              <linearGradient id="ribbonTailRight" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#D1921B" />
                <stop offset="100%" stopColor="#FAD463" />
              </linearGradient>

              {/* Top Text Path (Curving over top from left to right) */}
              <path
                id="topCalidadArc"
                d="M 76,135 A 84,84 0 1,1 244,135"
                fill="none"
              />

              {/* Bottom Text Path (Curving along bottom reading right-side up from left to right) */}
              <path
                id="bottomCalidadArc"
                d="M 76,135 A 84,84 0 0,0 244,135"
                fill="none"
              />

              {/* Ribbon Arch Path for GARANTIZADA */}
              <path
                id="ribbonTextArc"
                d="M 44,151 Q 160,137 276,151"
                fill="none"
              />

              {/* Reusable White 5-point Star */}
              <g id="pureWhiteStar">
                <polygon
                  points="0,-8 2.4,-2.5 8.4,-2.5 3.5,1.1 5.4,6.8 0,3.2 -5.4,6.8 -3.5,1.1 -8.4,-2.5 -2.4,-2.5"
                  fill="#FFFFFF"
                />
              </g>
            </defs>

            {/* Ribbon Background Wings / Tails (Folded behind the medallion) */}
            <g id="ribbonTails">
              {/* Left Wing Tail */}
              <path
                d="M 50,136 L 10,146 L 34,163 L 10,182 L 50,172 Z"
                fill="url(#ribbonTailLeft)"
                stroke="#A86E12"
                strokeWidth="1.2"
              />
              {/* Left Shadow Triangle */}
              <polygon
                points="42,136 54,166 42,170"
                fill="#734708"
              />

              {/* Right Wing Tail */}
              <path
                d="M 270,136 L 310,146 L 286,163 L 310,182 L 270,172 Z"
                fill="url(#ribbonTailRight)"
                stroke="#A86E12"
                strokeWidth="1.2"
              />
              {/* Right Shadow Triangle */}
              <polygon
                points="278,136 266,166 278,170"
                fill="#734708"
              />
            </g>

            {/* Outer Circular Gold Rim */}
            <circle
              cx="160"
              cy="135"
              r="110"
              fill="url(#goldRimGrad)"
              stroke="#B87B17"
              strokeWidth="2"
            />

            {/* Inner Golden Rim Line */}
            <circle
              cx="160"
              cy="135"
              r="103"
              fill="none"
              stroke="#FFF8C9"
              strokeWidth="1.5"
              opacity="0.85"
            />

            {/* Solid Black Disc */}
            <circle
              cx="160"
              cy="135"
              r="100"
              fill="#0A0A0A"
            />

            {/* Top Text: CALIDAD PREMIUM */}
            <text
              fill="#FFFFFF"
              fontSize="16"
              fontWeight="900"
              letterSpacing="2.8"
              fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
            >
              <textPath href="#topCalidadArc" startOffset="50%" textAnchor="middle">
                CALIDAD PREMIUM
              </textPath>
            </text>

            {/* Bottom Text: CALIDAD PREMIUM */}
            <text
              fill="#FFFFFF"
              fontSize="16"
              fontWeight="900"
              letterSpacing="2.8"
              fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
            >
              <textPath href="#bottomCalidadArc" startOffset="50%" textAnchor="middle">
                CALIDAD PREMIUM
              </textPath>
            </text>

            {/* Inner Gold Disc */}
            <circle
              cx="160"
              cy="135"
              r="68"
              fill="url(#goldCenterGrad)"
              stroke="#DF9E23"
              strokeWidth="2.5"
            />

            {/* Inner Gold Disc Highlight Line */}
            <circle
              cx="160"
              cy="135"
              r="65"
              fill="none"
              stroke="#FFF5BD"
              strokeWidth="1.2"
              opacity="0.75"
            />

            {/* Top Stars (3 white stars in an arc) */}
            <use href="#pureWhiteStar" x="160" y="93" transform="scale(1.15) translate(-21, -12)" />
            <use href="#pureWhiteStar" x="139" y="100" transform="scale(0.95) translate(7, 5)" />
            <use href="#pureWhiteStar" x="181" y="100" transform="scale(0.95) translate(-9, 5)" />

            {/* Bottom Stars (3 white stars in an inverted arc) */}
            <use href="#pureWhiteStar" x="160" y="177" transform="scale(1.15) translate(-21, -23)" />
            <use href="#pureWhiteStar" x="139" y="170" transform="scale(0.95) translate(7, 9)" />
            <use href="#pureWhiteStar" x="181" y="170" transform="scale(0.95) translate(-9, 9)" />

            {/* Front Curved Ribbon Banner */}
            <path
              d="M 42,126 Q 160,110 278,126 L 278,170 Q 160,154 42,170 Z"
              fill="url(#ribbonGoldGrad)"
              stroke="#B37715"
              strokeWidth="1.5"
            />

            {/* Ribbon Edge Pinstripes for 3D depth */}
            <path
              d="M 44,129 Q 160,113 276,129"
              fill="none"
              stroke="#FFFAD4"
              strokeWidth="1.2"
              opacity="0.9"
            />
            <path
              d="M 44,167 Q 160,151 276,167"
              fill="none"
              stroke="#C48818"
              strokeWidth="1.2"
            />

            {/* Ribbon Banner Text: GARANTIZADA */}
            <text
              fill="#111111"
              fontSize="20.5"
              fontWeight="900"
              letterSpacing="3.5"
              fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
            >
              <textPath href="#ribbonTextArc" startOffset="50%" textAnchor="middle">
                GARANTIZADA
              </textPath>
            </text>
          </svg>
        </div>

        <span className="text-xs uppercase font-bold tracking-widest text-[#0E6B63] block mb-2">
          Cero Riesgo para Ti
        </span>

        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A4F49] mb-4">
          Garantía Incondicional de Tranquilidad Total
        </h2>

        <p className="text-sm sm:text-base text-[#405650] max-w-2xl mx-auto leading-relaxed mb-8">
          Prueba la guía completa con tu familia durante 10 días completos. Aplica el Termómetro de la Espiral y utiliza los guiones en la próxima rabieta o momento de culpa. Si sientes que no te dio alivio inmediato o no mejoró la conexión con tu hijo, simplemente escríbenos a <span className="font-semibold text-[#0E6B63] underline">soporte@creceencalma.com</span> y te reembolsaremos el 100% de tu dinero de inmediato.
        </p>

        <div className="bg-[#FAF7F2] max-w-xl mx-auto rounded-2xl p-5 border border-[#A9C4AD] mb-8 text-xs sm:text-sm text-[#20302C] text-left space-y-2.5">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#0E6B63] shrink-0" />
            <span>Sin preguntas incómodas ni explicaciones</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#0E6B63] shrink-0" />
            <span>Reembolso procesado en menos de 24 horas</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#0E6B63] shrink-0" />
            <span>Puedes conservar los archivos PDF descargados como agradecimiento</span>
          </div>
        </div>

        <button
          onClick={onOpenCheckout}
          className="w-full sm:w-auto py-4 px-10 rounded-xl bg-[#E85D36] hover:bg-[#D94B22] text-white font-bold text-base sm:text-lg tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98] inline-flex items-center justify-center gap-3 cursor-pointer group"
        >
          <span>Sí, Quiero Probar la Guía sin Riesgo ($14.90)</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#5B6B63]">
          <ShieldCheck className="w-4 h-4 text-[#0E6B63]" />
          <span>Tu pago está 100% protegido con cifrado SSL bancario de 256 bits</span>
        </div>

      </div>
    </section>
  );
};
