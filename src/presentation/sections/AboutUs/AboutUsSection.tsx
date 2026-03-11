
export default function AboutUsSection() {
    return (
        <section className="w-full py-10 md:py-14">
            <div className="max-w-[1250px] mx-auto px-6">3
                {/* Título */}
                <div className="flex flex-col items-center text-center mb-12">
                    <img
                        src="/AboutUs/SobreNosotrosTitle.png"
                        alt="Sobre Nosotros"
                        className="h-24 md:h-32 lg:h-40 w-auto object-contain mb-4"
                        loading="eager"
                    />

                    <p className="max-w-[900px] text-[20px] md:text-[24px] lg:text-[28px] leading-[1.55]">
                        “Transformamos ideas en realidades tangibles a través de la
                        <span className="italic"> arquitectura, el diseño y la impresión 3D</span>,
                        entregando a cada cliente
                        <span className="italic"> exclusividad, confianza e innovación</span>”
                    </p>
                </div>

                {/* Bloque inferior */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
                    {/* Imagen */}
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src="/BasavicCEO2.png"
                            alt="Equipo Estudio Basavic"
                            className="w-full max-w-[420px] md:max-w-[520px] lg:max-w-[560px] h-auto object-contain"
                            loading="lazy"
                        />
                    </div>

                    {/* Misión */}
                    <div className="flex flex-col items-center text-center pb-4">
                        <h2 className="text-[34px] md:text-[38px] font-medium mb-6 text-black">
                            Nuestra Misión
                        </h2>

                        <p className="max-w-[720px] text-[20px] md:text-[24px] lg:text-[24px] leading-[1.55] mb-10">
                            Crear <span className="italic">espacios, productos y experiencias</span> que eleven el estilo de vida de nuestros clientes, combinando
                            <span className="italic"> Arte, Innovación y Sostenibilidad</span> para inspirar
                            <span className="italic"> Bienestar y Conexión con el Entorno</span>.
                        </p>

                        <img
                            src="/BasavicImagotipoNegro.png"
                            alt="Basavic"
                            className="h-20 md:h-24 w-auto object-contain"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}