import { Link } from "react-router";
import { IoArrowForward } from "react-icons/io5";

interface Props {
    paragraph1: string;
    paragraph2: string;
    videoSrc: string;
    logoSrc?: string;
}

export default function LampsFabricationVideoSection({
                                                         paragraph1,
                                                         paragraph2,
                                                         videoSrc,
                                                         logoSrc = "/BasavicImagotipoNegro.png",
                                                     }: Props) {
    return (
        <section className="w-full bg-[#E9E9E9] text-black py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
                    <div className="relative md:col-span-2 flex h-full">
                        <div className="m-auto max-w-2xl text-center px-2">
                            <p className="text-lg lg:text-2xl leading-relaxed mb-3">
                                {paragraph1}
                            </p>
                            <p className="text-lg lg:text-2xl leading-relaxed">
                                {paragraph2}
                            </p>
                        </div>

                        <img
                            src={logoSrc}
                            alt="Basavic"
                            className="absolute left-0 bottom-0 h-10 md:h-14 w-auto opacity-90 pointer-events-none select-none"
                            loading="lazy"
                        />
                    </div>

                    <div className="md:col-span-1 flex flex-col justify-center md:justify-end items-center md:items-end gap-6">
                        <Link
                            to="/productos/hogar/lamparas/fabricacion/acabado-artesanal"
                            className="inline-flex items-center gap-2 text-black italic text-lg md:text-xl hover:opacity-70 transition-opacity"
                        >
                            <span>Ver acabado artesanal</span>
                            <IoArrowForward className="text-2xl" />
                        </Link>

                        <div className="w-full max-w-[360px] aspect-[9/18] max-h-[600px] overflow-hidden rounded-lg shadow-sm">
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