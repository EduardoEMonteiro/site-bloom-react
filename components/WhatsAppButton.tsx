'use client'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5532998063010?text=Olá!%20Vim%20pelo%20site"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-[99999] w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 hover:rotate-[5deg]"
      aria-label="Falar no WhatsApp"
    >
      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] animate-ping opacity-75"></span>

      {/* WhatsApp icon */}
      <i className="fab fa-whatsapp text-white text-[28px] sm:text-[30px] md:text-[35px] relative z-10"></i>
    </a>
  )
}
