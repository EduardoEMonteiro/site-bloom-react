'use client'

export function SectionDivider() {
  return (
    <div className="h-[120px] w-full relative overflow-hidden bg-transparent -mt-[2px] pointer-events-none z-10">
      {/* Line */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent -translate-y-1/2 opacity-80 animate-[pulseLine_3s_ease-in-out_infinite]" />

      {/* Moving glow */}
      <div className="absolute top-1/2 left-[-100%] w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#fff8af] to-transparent -translate-y-1/2 animate-[slideGlow_3s_ease-in-out_infinite] blur-sm" />
    </div>
  )
}
