import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface StickyBottomBarProps {
  onOpenCheckout: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenCheckout }) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 500px
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#A9C4AD] py-2 px-4 shadow-lg transition-transform duration-300">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left side: Value & Pricing indicator */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <p className="text-xs font-bold text-[#0A4F49] leading-tight">
              Crece en Calma
            </p>
            <p className="text-[10px] text-[#5B6B63] leading-tight">
              30 Guiones + 3 Bonos
            </p>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base sm:text-lg font-bold font-mono text-[#0A4F49]">
              $14.90
            </span>
            <span className="text-[11px] font-semibold text-[#5B6B63]">USD</span>
            <span className="text-xs text-[#8FB196] line-through font-mono hidden xs:inline">
              $24.90
            </span>
            <span className="text-[10px] font-bold bg-[#D9EFC4] text-[#0A4F49] px-1.5 py-0.5 rounded">
              -40%
            </span>
          </div>
        </div>

        {/* Right side: Primary Action Button */}
        <button
          onClick={onOpenCheckout}
          className="py-2.5 px-5 rounded-full bg-[#E85D36] hover:bg-[#D94B22] text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow transition-all active:scale-[0.98] flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
        >
          <span>Quiero Mi Guía</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
