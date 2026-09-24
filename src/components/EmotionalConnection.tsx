import React, { useState } from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

interface EmotionalConnectionProps {
  onOpenCheckout: () => void;
}

export const EmotionalConnection: React.FC<EmotionalConnectionProps> = ({ onOpenCheckout }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <section className="py-16 sm:py-20 bg-[#073632] text-white relative overflow-hidden">
      {/* Gentle background accent lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#0E6B63]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A4F49] text-[#D9EFC4] text-xs font-bold uppercase tracking-wider mb-6">
          <Heart className="w-3.5 h-3.5 fill-current text-[#F0A08C]" />
          <span>Para la madre o padre que hace lo mejor que puede</span>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-[#EFF6EC] leading-tight">
          No tienes que seguir sintiendo que estás fallando como mamá o papá
        </h2>

        {/* Emotive Photo Card */}
        <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden border-4 border-[#0E6B63]/60 shadow-2xl mb-8 bg-[#0A4F49]">
          <div 
            className={`w-full aspect-[16/9] bg-[#0A4F49] flex items-center justify-center p-8 transition-opacity duration-500 ${
              imageLoaded ? 'hidden' : 'flex'
            }`}
          >
            <p className="text-sm text-[#A9C4AD] italic">&ldquo;La conexión no requiere perfección, requiere presencia y las palabras correctas.&rdquo;</p>
          </div>
          <img
            src="/src/assets/images/parent_connection_empathy_1790169691217.jpg"
            alt="Momento de conexión amorosa y abrazo sincero entre madre e hijo en casa"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            className="w-full h-auto object-cover object-center"
          />
        </div>

        <div className="max-w-xl mx-auto space-y-4 text-sm sm:text-base text-[#D3E5DB] leading-relaxed mb-8">
          <p>
            Eres una madre o un padre comprometido, con un hijo maravilloso, noble y profundamente sensible al mundo que le rodea.
          </p>
          <p>
            No necesitabas más paciencia infinita ni aguantar gritos en silencio: solo necesitabas las <strong>herramientas exactas</strong> para saber qué responder en esos 10 segundos críticos cuando él no sabe cómo contener la tormenta de su cabeza.
          </p>
        </div>

        {/* Quick Offer Recap */}
        <div className="inline-block bg-[#0A4F49]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#16645D] mb-6">
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-xs text-[#A9C4AD] uppercase font-bold tracking-wider">Precio de hoy:</span>
            <span className="text-3xl font-bold font-mono text-[#D9EFC4]">$14.90 USD</span>
            <span className="text-xs text-[#8FB196] line-through font-mono">Antes $24.90</span>
          </div>
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto py-3.5 px-8 rounded-xl bg-[#E85D36] hover:bg-[#D94B22] text-white font-bold text-sm tracking-wide shadow-md transition-all active:scale-[0.98] inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Quiero Mi Guía Ahora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
