export function Spotify() {
    return (
        <section className="py-12 sm:py-16 md:py-20 px-[5%] bg-gradient-to-b from-black via-[#012220] to-black relative">
            <div className="relative z-10 max-w-[900px] mx-auto text-center">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-[#fff8af] to-[#D4AF37] bg-clip-text text-transparent">
                    Ouça o Clima do Nosso Salão
                </h2>

                <p className="text-xl md:text-2xl text-[rgba(232,232,232,0.7)] mb-12">
                    A trilha sonora que anima nossos atendimentos. Aperte o play e entre no clima!
                </p>

                <div className="bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(255,248,175,0.2)] rounded-[25px] p-4 sm:p-6 md:p-8 backdrop-blur-[20px] shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                    {/* Responsive iframe container with aspect ratio */}
                    <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-[15px] overflow-hidden">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            style={{ borderRadius: '15px' }}
                            src="https://open.spotify.com/embed/playlist/3fK9qQ2m9qNw9UhcQYjF8Y?utm_source=generator&theme=0"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
