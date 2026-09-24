import React from 'react';
import { BookOpen } from 'lucide-react';

interface HeaderProps {
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E3ECE6] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single element) */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-heading text-2xl font-bold tracking-tight text-[#0A4F49]">
            crece <span className="font-script text-3xl font-semibold text-[#E85D36] -ml-1">en calma</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#405650]">
          <a href="#metodo" className="hover:text-[#0A4F49] transition-colors">
            El Método
          </a>
          <a href="#simulador" className="hover:text-[#0A4F49] transition-colors">
            Ver Guiones
          </a>
          <a href="#contenido" className="hover:text-[#0A4F49] transition-colors">
            ¿Qué incluye?
          </a>
          <a href="#testimonios" className="hover:text-[#0A4F49] transition-colors">
            Testimonios
          </a>
          <a href="#faq" className="hover:text-[#0A4F49] transition-colors">
            Preguntas Frecuentes
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCheckout}
            className="bg-[#E85D36] hover:bg-[#D94B22] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-sm hover:shadow-md transition-all active:scale-[0.98] whitespace-nowrap flex items-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Obtener Guía · $14.90 USD</span>
          </button>
        </div>
      </div>
    </header>
  );
};
