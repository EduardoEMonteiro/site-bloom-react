export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 px-[5%] bg-black">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-[#fff8af] to-[#D4AF37] bg-clip-text text-transparent">
          Especialidades em Colorimetria SJDR
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 rounded-2xl border border-[rgba(255,248,175,0.2)] bg-[rgba(255,255,255,0.04)] backdrop-blur-md hover:border-[#D4AF37] transition-all group">
            <h3 className="text-2xl font-bold mb-6 text-[#fff8af] group-hover:text-[#D4AF37] transition-colors">
              Especialista em Ruivos em São João del Rei
            </h3>
            <p className="text-lg text-[rgba(232,232,232,0.9)] leading-relaxed">
              Domínio completo de tonalidades acobreadas e máxima durabilidade da cor. Utilizamos técnica de pigmentação seletiva para ruivos vibrantes e saudáveis.
            </p>
          </div>

          <div className="p-10 rounded-2xl border border-[rgba(255,248,175,0.2)] bg-[rgba(255,255,255,0.04)] backdrop-blur-md hover:border-[#D4AF37] transition-all group">
            <h3 className="text-2xl font-bold mb-6 text-[#fff8af] group-hover:text-[#D4AF37] transition-colors">
              Loiros de Elite em SJDR
            </h3>
            <p className="text-lg text-[rgba(232,232,232,0.9)] leading-relaxed">
              Foco absoluto na preservação da saúde do fio. Criamos mechas personalizadas que respeitam a integridade da fibra capilar com tecnologia de ponta.
            </p>
          </div>

          <div className="p-10 rounded-2xl border border-[rgba(255,248,175,0.2)] bg-[rgba(255,255,255,0.04)] backdrop-blur-md hover:border-[#D4AF37] transition-all group">
            <h3 className="text-2xl font-bold mb-6 text-[#fff8af] group-hover:text-[#D4AF37] transition-colors">
              Cabelos Coloridos em São João del Rei
            </h3>
            <p className="text-lg text-[rgba(232,232,232,0.9)] leading-relaxed">
              Referência em técnicas criativas e pigmentos de alta performance. Cores fantasia e personalizadas executadas com precisão de colorimetrista.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
