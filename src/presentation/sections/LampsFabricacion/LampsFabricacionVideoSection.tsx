interface Props {
    paragraph1: string;
    paragraph2: string;
    videoSrc: string; // enlace directo de Cloudinary
    logoSrc?: string;
}

export default function LampsFabricacionVideoSection({
                                                         paragraph1,
                                                         paragraph2,
                                                         videoSrc,
                                                         logoSrc = "/BasavicImagotipoNegro.png",
                                                     }: Props) {
    return (
        <section className="w-full bg-[#e9e9e9] text-black py-16">
            <div className="container mx-auto px-4">
                {/* items-stretch asegura alturas iguales entre texto y video */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
                    {/* IZQUIERDA (2/3): texto centrado vertical/horizontal + logo */}
                    <div className="relative md:col-span-2 flex h-full">
                        <div className="m-auto max-w-2xl text-center px-2">
                            <p className="text-lg lg:text-2xl leading-relaxed mb-3">
                                {paragraph1}
                            </p>
                            <p className="text-lg lg:text-2xl leading-relaxed">
                                {paragraph2}
                            </p>
                        </div>

                        {/* Logo inferior izquierdo */}
                        <img
                            src={logoSrc}
                            alt="Basavic"
                            className="absolute left-0 bottom-0 h-10 md:h-15 w-auto opacity-90 pointer-events-none select-none"
                            loading="lazy"
                        />
                    </div>

                    {/* DERECHA (1/3): video tipo teléfono con altura máxima */}
                    <div className="md:col-span-1 flex justify-center md:justify-end">
                        <div className="w-full aspect-[9/18] max-h-[600px] overflow-hidden rounded-lg shadow-sm">
                            <video
                                className="w-full h-full object-cover"
                                src={videoSrc}
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                                controls={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
