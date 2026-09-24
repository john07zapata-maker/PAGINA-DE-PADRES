import React, { useState } from 'react';
import { X, ShieldCheck, Check, Lock, Download, Sparkles, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [includeAudioBump, setIncludeAudioBump] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [country, setCountry] = useState<string>('España');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!isOpen) return null;

  const basePrice = 14.90;
  const bumpPrice = 4.90;
  const totalPrice = (basePrice + (includeAudioBump ? bumpPrice : 0)).toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Por favor ingresa tu nombre completo.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Por favor ingresa un correo electrónico válido para enviarte el material.');
      return;
    }

    setErrorMsg('');
    setIsProcessing(true);

    // Realistic immediate processing simulation
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setIsProcessing(false);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#A9C4AD] overflow-hidden my-6 transition-all"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="bg-[#0A4F49] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#D9EFC4]" />
            <span className="font-heading font-bold text-sm sm:text-base tracking-wide">
              {isSuccess ? '¡Acceso Confirmado!' : 'Pago Seguro · Acceso Inmediato'}
            </span>
          </div>
          <button
            onClick={handleReset}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSuccess ? (
          /* Success Screen */
          <div className="p-6 sm:p-8 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#D9EFC4] text-[#0A4F49] flex items-center justify-center mx-auto shadow-sm">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#0E6B63] block mb-1">
                Transacción completada con éxito
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#0A4F49]">
                ¡Gracias por dar este paso, {name.split(' ')[0]}!
              </h3>
              <p className="text-xs sm:text-sm text-[#405650] mt-2">
                Hemos enviado tus credenciales y el enlace de descarga permanente a: <strong className="text-[#0A4F49]">{email}</strong>.
              </p>
            </div>

            {/* Instant Download Action Cards */}
            <div className="space-y-3 text-left">
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#0E6B63] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0E6B63] text-white flex items-center justify-center shrink-0">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#0A4F49]">
                      Guía Completa + 3 Bonos (PDF)
                    </h4>
                    <p className="text-[11px] text-[#5B6B63]">
                      Listo para leer en celular o imprimir (8.4 MB)
                    </p>
                  </div>
                </div>
                <a
                  href="#descargar"
                  onClick={e => {
                    e.preventDefault();
                    alert('Iniciando descarga de tu Guía Crece en Calma en PDF...');
                  }}
                  className="px-3.5 py-2 bg-[#0E6B63] hover:bg-[#0A4F49] text-white text-xs font-bold rounded-lg transition-colors shrink-0"
                >
                  Descargar
                </a>
              </div>

              {includeAudioBump && (
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E85D36] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E85D36] text-white flex items-center justify-center shrink-0">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#0A4F49]">
                        Audio-Guía MP3 Guiada
                      </h4>
                      <p className="text-[11px] text-[#5B6B63]">
                        18 pistas de audio para el coche (42 MB)
                      </p>
                    </div>
                  </div>
                  <a
                    href="#descargar-audio"
                    onClick={e => {
                      e.preventDefault();
                      alert('Iniciando descarga del paquete de Audio-Guías MP3...');
                    }}
                    className="px-3.5 py-2 bg-[#E85D36] hover:bg-[#D94B22] text-white text-xs font-bold rounded-lg transition-colors shrink-0"
                  >
                    Descargar
                  </a>
                </div>
              )}
            </div>

            <div className="p-3 bg-[#EFF6EC] rounded-xl text-xs text-[#20302C] border border-[#D9EFC4]">
              Tienes 10 días para probar la guía. Si necesitas soporte, contáctanos a <strong>soporte@creceencalma.com</strong>.
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl bg-[#FAF7F2] text-[#0A4F49] font-bold text-xs border border-[#A9C4AD] hover:bg-[#EFF5F1] transition-colors cursor-pointer"
            >
              Volver a la página principal
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-5">
            
            {/* Order Summary Recap */}
            <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#D1DDD5]">
              <div className="flex justify-between items-center text-xs pb-2 border-b border-[#E3ECE6]">
                <span className="font-semibold text-[#20302C]">Guía Crece en Calma + 3 Bonos</span>
                <span className="font-mono font-bold text-[#0A4F49]">$14.90 USD</span>
              </div>
              {includeAudioBump && (
                <div className="flex justify-between items-center text-xs py-2 border-b border-[#E3ECE6] text-[#E85D36]">
                  <span className="font-semibold">+ Audio-Guía MP3 (Oferta Especial)</span>
                  <span className="font-mono font-bold">+$4.90 USD</span>
                </div>
              )}
              <div className="flex justify-between items-center pt-2.5">
                <span className="text-xs uppercase font-bold tracking-wider text-[#5B6B63]">Total a pagar:</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold font-mono text-[#0A4F49]">${totalPrice}</span>
                  <span className="text-xs text-[#5B6B63]">USD</span>
                </div>
              </div>
            </div>

            {/* High Converting Order Bump */}
            <div className="bg-[#FFF9F5] p-3.5 sm:p-4 rounded-2xl border-2 border-[#E85D36]/60 relative">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeAudioBump}
                  onChange={e => setIncludeAudioBump(e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#E85D36] accent-[#E85D36] rounded cursor-pointer"
                />
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="bg-[#E85D36] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded">
                      ¡OFERTA ÚNICA! (Añadir por solo +$4.90 USD)
                    </span>
                  </div>
                  <p className="text-xs font-bold text-[#0A4F49] mt-1">
                    🎧 Audio-Guía MP3 con los 30 Guiones y tono de voz guiado
                  </p>
                  <p className="text-[11px] text-[#5B6B63] mt-0.5 leading-snug">
                    Escucha las respuestas en el auto antes de recoger a tus hijos de la escuela. Aprende la modulación y las pausas exactas.
                  </p>
                </div>
              </label>
            </div>

            {/* Error message */}
            {errorMsg && (
              <div className="p-3 bg-[#FCECE8] text-[#C94324] rounded-xl text-xs font-semibold">
                {errorMsg}
              </div>
            )}

            {/* Form Fields */}
            <div className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A4F49] mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Ej: Carolina Martínez"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#D1DDD5] focus:outline-none focus:ring-2 focus:ring-[#0E6B63] bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A4F49] mb-1">
                  Tu Correo Electrónico (Para recibir el PDF)
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#D1DDD5] focus:outline-none focus:ring-2 focus:ring-[#0E6B63] bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A4F49] mb-1">
                    País
                  </label>
                  <select
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#D1DDD5] focus:outline-none focus:ring-2 focus:ring-[#0E6B63] bg-white"
                  >
                    <option value="España">España</option>
                    <option value="México">México</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Chile">Chile</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                    <option value="Perú">Perú</option>
                    <option value="Otro">Otro país</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A4F49] mb-1">
                    Método de Pago
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition-colors cursor-pointer ${
                        paymentMethod === 'card'
                          ? 'bg-[#0A4F49] text-white border-[#0A4F49]'
                          : 'bg-white text-[#5B6B63] border-[#D1DDD5]'
                      }`}
                    >
                      Tarjeta
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition-colors cursor-pointer ${
                        paymentMethod === 'paypal'
                          ? 'bg-[#0070BA] text-white border-[#0070BA]'
                          : 'bg-white text-[#5B6B63] border-[#D1DDD5]'
                      }`}
                    >
                      PayPal
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Purchase Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 rounded-xl bg-[#E85D36] hover:bg-[#D94B22] text-white font-bold text-sm sm:text-base tracking-wide shadow-md transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <span>Procesando pago seguro...</span>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Completar Pago Seguro (${totalPrice} USD)</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Reassurance Footnote */}
            <div className="flex items-center justify-center gap-4 text-[11px] text-[#5B6B63] pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0E6B63]" />
                Garantía 10 días
              </span>
              <span>·</span>
              <span>Cifrado SSL 256 bits</span>
              <span>·</span>
              <span>Entrega inmediata</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
