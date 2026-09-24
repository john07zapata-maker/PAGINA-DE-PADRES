import React from 'react';
import { ShieldCheck, Lock, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E3ECE6] pt-12 pb-20 text-[#5B6B63] text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E3ECE6] text-center md:text-left">
          {/* Brand */}
          <div>
            <span className="font-heading text-xl font-bold text-[#0A4F49]">
              crece <span className="font-script text-2xl text-[#E85D36] -ml-1">en calma</span>
            </span>
            <p className="text-xs text-[#7A8E85] mt-1">
              Guía práctica para transformar la culpa y la vergüenza infantil en conexión amorosa.
            </p>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-[#405650]">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#0E6B63]" />
              Pago 100% Encriptado
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0E6B63]" />
              Garantía de 10 días
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#E85D36]" />
              Hecho con amor para familias
            </span>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 space-y-3 text-center md:text-left text-[11px] text-[#7A8E85] leading-relaxed">
          <p>
            <strong>Aviso Legal y de Salud:</strong> El material contenido en la guía digital &ldquo;Crece en Calma&rdquo; tiene carácter exclusivamente formativo, psicoeducativo y de apoyo a la crianza respetuosa. No constituye diagnóstico, terapia psicológica, psiquiátrica ni sustituye la atención personalizada de un profesional de la salud mental infanto-juvenil.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-[#8FB196]">
            <p>© {currentYear} Crece en Calma. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="#terminos" onClick={e => e.preventDefault()} className="hover:text-[#0A4F49] transition-colors">Términos de Servicio</a>
              <a href="#privacidad" onClick={e => e.preventDefault()} className="hover:text-[#0A4F49] transition-colors">Política de Privacidad</a>
              <a href="mailto:soporte@creceencalma.com" className="hover:text-[#0A4F49] transition-colors">Contacto de Soporte</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
