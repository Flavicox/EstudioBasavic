interface Props {
    backgroundImageSrc: string;
    headline: string;
    paragraph1: string;
    paragraph2: string;
}

export default function LampsWelcomeSection({
                                                backgroundImageSrc,
                                                headline,
                                                paragraph1,
                                                paragraph2,
                                            }: Props) {
    return (
        <section className="relative w-full overflow-visible">
            <img
                src={backgroundImageSrc}
                alt="Fondo lámparas"
                className="block w-full h-auto max-w-none shrink-0"
                loading="eager"
                onError={() => console.warn("No se pudo cargar:", backgroundImageSrc)}
            />

            {/* Texto centrado, overlay solo para legibilidad */}
            <div className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-transparent" />
                <div className="relative z-10 max-w-4xl text-center pointer-events-auto">
                    <h2 className="text-[#f4f4f4] text-2xl md:text-4xl lg:text-6xl font-semibold tracking-wide mb-4">
                        {headline}
                    </h2>
                    <p className="text-[#f4f4f4]/90 leading-relaxed mb-3 text-sm md:text-lg lg:text-xl">{paragraph1}</p>
                    <p className="text-[#f4f4f4]/90 leading-relaxed text-sm md:text-lg lg:text-xl">{paragraph2}</p>
                </div>
            </div>
        </section>
    );
}
