import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  // 15-minute persistent urgency countdown
  const [timeLeft, setTimeLeft] = useState<number>(14 * 60 + 38);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 14 * 60 + 59));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <aside aria-label="Aviso de oferta especial" className="bg-[#0A4F49] text-[#FAF6EC] py-2 px-4 text-xs font-medium tracking-wide">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9EFC4] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9EFC4]"></span>
          </span>
          <span className="font-semibold text-[#D9EFC4]">OFERTA ESPECIAL HOY:</span>
          <span>Guía digital completa + 3 Bonos exclusivos con 40% de descuento</span>
        </div>

        <div className="flex items-center gap-4 mx-auto sm:mx-0 text-[11px] opacity-95">
          <div className="flex items-center gap-1.5 font-mono">
            <span className="text-[#A9C4AD]">La oferta vence en:</span>
            <span className="bg-[#073632] text-[#D9EFC4] font-bold px-2 py-0.5 rounded tracking-wider">
              {minutes}:{seconds}
            </span>
          </div>
          <span className="hidden md:inline-flex items-center gap-1 text-[#A9C4AD]">
            <Zap className="w-3 h-3 text-[#D9EFC4]" />
            Acceso Inmediato en PDF
          </span>
        </div>
      </div>
    </aside>
  );
};
