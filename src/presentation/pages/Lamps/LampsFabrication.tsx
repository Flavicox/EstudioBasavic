import LampsFabricationVideoSection from "../../sections/LampsFabrication/LampsFabricationVideoSection.tsx";
import {Link} from "react-router";
import {IoArrowBack} from "react-icons/io5";

export default function LampsFabrication() {
    return (
        <main className="bg-[#E9E9E9] text-black">

            {/* BOTÓN REGRESAR */}
            <div className="max-w-[1200px] mx-auto px-6 pt-10">
                <Link
                    to="/productos/hogar/lamparas"
                    className="inline-flex items-center gap-2 italic text-lg md:text-xl hover:opacity-70 transition"
                >
                    <IoArrowBack className="text-2xl" />
                    <span>Regresar al catálogo</span>
                </Link>
            </div>
            <section className="w-full py-10">
                <div className="container mx-auto px-4 pb-8">
                    <div className="flex justify-center">
                        <img
                            src="/Lamps/FabricacionTitle.png"
                            alt="Fabricación"
                            className="h-20 md:h-28 w-auto"
                            loading="eager"
                        />
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
                        <div className="md:col-span-2 flex flex-col items-center md:items-start justify-between h-full text-center md:text-left">
                            <div className="max-w-2xl mx-auto text-center mt-10">
                                <p className="text-lg lg:text-2xl mb-4">
                                    Cada lámpara de Estudio Basavic nace de la unión entre el diseño y la emoción.
                                </p>
                                <p className="text-lg lg:text-2xl mb-4">
                                    Imaginamos formas que evocan calma, naturaleza y movimiento, para transformar cualquier espacio en un refugio de luz y armonía.
                                </p>
                            </div>

                            <div className="mt-8 w-full">
                                <img
                                    src="/Lamps/fabricacion-strip.png"
                                    alt="Proceso de fabricación"
                                    className="w-full h-auto block"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="md:col-span-1 flex justify-center md:justify-end">
                            <img
                                src="/Lamps/fabricacion-side.png"
                                alt="Detalle de fabricación"
                                className="w-full md:w-[90%] h-auto object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <LampsFabricationVideoSection
                paragraph1="A través de la impresión 3D, damos vida a cada pieza con una precisión única, utilizando PLA+, un material sostenible y resistente."
                paragraph2="Cada textura, cada curva, es el resultado de un proceso cuidadoso donde la tecnología se encuentra con el arte."
                videoSrc="https://res.cloudinary.com/dnjarfszg/video/upload/v1762913028/fabricacion_basavic_l5vb8d.mp4"
            />
        </main>
    );
}