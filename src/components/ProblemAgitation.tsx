import React from 'react';
import { AlertCircle, Brain, HeartHandshake, Eye, Sparkles, X } from 'lucide-react';

export const ProblemAgitation: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#E8ECE9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#0E6B63] mb-2 block">
            El Origen del Dolor
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A4F49] mb-4">
            ¿Por qué cuando le dices &ldquo;¡no eres malo!&rdquo; parece que se enoja o se encierra aún más?
          </h2>
          <p className="text-base text-[#405650] leading-relaxed">
            Tu hijo derrama un vaso, se le rompe un dibujo o tiene un roce con su hermano. En lugar de aprender del error, algo en su interior se quiebra y dice con angustia: <em>&ldquo;soy el peor&rdquo;</em>, <em>&ldquo;no me quieres&rdquo;</em> o <em>&ldquo;no sirvo para nada&rdquo;</em>.
          </p>
        </div>

        {/* 3 Real Life Scenes */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          <div className="bg-[#FAF7F2] p-6 rounded-2xl border-l-4 border-[#F0A08C] shadow-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C94324] mb-2">
              Escenario 1
            </div>
            <h3 className="font-bold text-[#0A4F49] text-base mb-2">
              El dibujo arrugado
            </h3>
            <p className="text-sm text-[#405650] leading-relaxed">
              Una línea le sale torcida en su tarea escolar. De pronto arruga la hoja con furia y lágrimas: <em>&ldquo;¡Todo me sale mal, soy un tonto!&rdquo;</em>.
            </p>
          </div>

          <div className="bg-[#FAF7F2] p-6 rounded-2xl border-l-4 border-[#F0A08C] shadow-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C94324] mb-2">
              Escenario 2
            </div>
            <h3 className="font-bold text-[#0A4F49] text-base mb-2">
              El conflicto entre hermanos
            </h3>
            <p className="text-sm text-[#405650] leading-relaxed">
              Le quita un juguete a su hermanito. Al intervenir tú con calma, te grita desesperado: <em>&ldquo;¡Ya sé que a él lo quieres más, yo soy el malo de la casa!&rdquo;</em>.
            </p>
          </div>

          <div className="bg-[#FAF7F2] p-6 rounded-2xl border-l-4 border-[#F0A08C] shadow-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C94324] mb-2">
              Escenario 3
            </div>
            <h3 className="font-bold text-[#0A4F49] text-base mb-2">
              El muro de hielo
            </h3>
            <p className="text-sm text-[#405650] leading-relaxed">
              Le llamas la atención sin gritar. En lugar de responder, baja la cabeza, se encierra en su habitación y no acepta ni palabras ni caricias durante horas.
            </p>
          </div>
        </div>

        {/* The Core Neurobiology Breakdown: Culpa vs Vergüenza */}
        <div className="bg-gradient-to-br from-[#FAF6EC] to-[#F1F7F3] rounded-3xl p-6 sm:p-10 border border-[#A9C4AD]/50 mb-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#0E6B63] mb-2">
                <Brain className="w-4 h-4" />
                <span>La diferencia que cambia todo</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0A4F49] mb-4">
                La gran trampa: Culpa sana vs. Vergüenza tóxica
              </h3>
              <p className="text-sm text-[#384C46] leading-relaxed mb-4">
                La mayoría de los padres confunden la culpa con la vergüenza, pero en el cerebro del niño operan en circuitos neurológicos opuestos:
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#D9EFC4]">
                  <span className="w-6 h-6 rounded-full bg-[#D9EFC4] text-[#0A4F49] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <span className="font-bold text-[#0A4F49]">Culpa saludable:</span>
                    <span className="text-[#405650] block text-xs mt-0.5">
                      <em>&ldquo;Hice algo que no estuvo bien, pero sigo siendo una buena persona y puedo repararlo.&rdquo;</em> Genera aprendizaje y empatía.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#F0A08C]/60">
                  <span className="w-6 h-6 rounded-full bg-[#FCECE8] text-[#C94324] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✕
                  </span>
                  <div>
                    <span className="font-bold text-[#C94324]">Vergüenza tóxica (La Espiral):</span>
                    <span className="text-[#405650] block text-xs mt-0.5">
                      <em>&ldquo;Yo soy el problema. Yo estoy roto por dentro. No merezco que me quieran.&rdquo;</em> Dispara la amígdala, bloquea el razonamiento y genera rabia o parálisis.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0A4F49] text-white p-6 sm:p-7 rounded-2xl relative shadow-lg">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D9EFC4] block mb-2">
                ¿Qué siente tu hijo?
              </span>
              <p className="text-sm sm:text-base leading-relaxed text-[#EFF6EC] mb-4 font-light">
                &ldquo;Cuando escuchas <em>'soy malo'</em> y respondes rápidamente <em>'¡no, no eres malo!'</em>, para ti es un consuelo de amor. Pero para su cerebro infantil en plena tormenta química, esa negación suena a: <strong>no me estás creyendo, no me estás entendiendo y estoy solo con esto</strong>.&rdquo;
              </p>
              <div className="pt-3 border-t border-[#16645D] text-xs text-[#A9C4AD] flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#D9EFC4]" />
                <span>Necesita conexión en los primeros 10 segundos antes de cualquier lección.</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Disguised Faces of the Shame Spiral */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#E3ECE6]">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0A4F49] text-center mb-6">
            La Espiral de Vergüenza no siempre se ve como llanto. Tiene 3 disfraces:
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-[#E8ECE9]">
              <span className="text-xs font-bold text-[#0E6B63] uppercase tracking-wider block mb-1">
                Disfraz 1
              </span>
              <h4 className="font-bold text-[#0A4F49] text-base mb-2">
                Perfeccionismo feroz
              </h4>
              <p className="text-xs text-[#5B6B63] leading-relaxed">
                Se enfada consigo mismo antes de que nadie le diga nada. No tolera equivocarse en un juego, un deporte o un trazo y prefiere no intentar cosas nuevas.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8ECE9]">
              <span className="text-xs font-bold text-[#0E6B63] uppercase tracking-wider block mb-1">
                Disfraz 2
              </span>
              <h4 className="font-bold text-[#0A4F49] text-base mb-2">
                Necesidad de control y rabia
              </h4>
              <p className="text-xs text-[#5B6B63] leading-relaxed">
                Necesita que todo salga exactamente según sus reglas. Si algo cambia, estalla con agresividad o berrinche reactivo para tapar la vulnerabilidad.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E8ECE9]">
              <span className="text-xs font-bold text-[#0E6B63] uppercase tracking-wider block mb-1">
                Disfraz 3
              </span>
              <h4 className="font-bold text-[#0A4F49] text-base mb-2">
                Cierre y mutismo total
              </h4>
              <p className="text-xs text-[#5B6B63] leading-relaxed">
                Deja de hablar, evita la mirada, se esconde debajo de una cobija o se encierra. Rechaza los abrazos porque siente que no es digno de recibirlos.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
