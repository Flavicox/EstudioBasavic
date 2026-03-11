import { Link } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import { LAMP_ITEMS } from "../../../domain/constants/lampItems";

interface Props {
    videoSrc: string;
    logoSrc?: string;
}

export default function LampsFabricationCraftSection({
                                                         videoSrc,
                                                         logoSrc = "/BasavicImagotipoNegro.png",
                                                     }: Props) {
    return (
        <section className="w-full bg-[#E9E9E9] text-black py-20">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <div className="mb-8">
                        <Link
                            to="/productos/hogar/lamparas/fabricacion"
                            className="inline-flex items-center gap-2 text-black italic text-lg md:text-xl hover:opacity-70 transition-opacity"
                        >
                            <IoArrowBack className="text-2xl" />
                            <span>Volver al proceso</span>
                        </Link>
                    </div>

                    <div className="relative overflow-hidden">
                        <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[620px]">
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

                        <div className="absolute inset-0 flex items-center justify-center px-4">
                            <div className="bg-white/75 backdrop-blur-[2px] px-6 py-5 md:px-10 md:py-8 max-w-4xl text-center shadow-sm">
                                <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed">
                                    Luego, el acabado artesanal le da su carácter definitivo:
                                    lijamos, pintamos y ensamblamos cada lámpara a mano,
                                    asegurando que cada una sea realmente única.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 text-center">
                    <div className="flex justify-center mb-8">
                        <img
                            src={logoSrc}
                            alt="Basavic"
                            className="h-14 md:h-20 w-auto"
                            loading="lazy"
                        />
                    </div>

                    <p className="max-w-5xl mx-auto text-lg md:text-2xl leading-relaxed mb-16">
                        “Más que objetos decorativos, nuestras lámparas son piezas de diseño con alma,
                        creadas para acompañar tus momentos y llenar tus espacios de luz con intención”.
                    </p>

                    <div className="flex justify-center items-end gap-x-4 md:gap-x-6 lg:gap-x-8">
                        {LAMP_ITEMS.map((lamp) => (
                            <Link
                                key={lamp.slug}
                                to={`/productos/hogar/lamparas/${lamp.slug}`}
                                className="group flex flex-col items-center justify-end"
                            >
                                <img
                                    src={lamp.nameImage}
                                    alt={lamp.name}
                                    className="h-16 md:h-20 lg:h-24 w-auto object-contain mb-2 transition-opacity duration-300 group-hover:opacity-70"
                                    loading="lazy"
                                />

                                <img
                                    src={lamp.transparentImage}
                                    alt={lamp.name}
                                    className="h-[110px] md:h-[150px] lg:h-[190px] w-auto object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}