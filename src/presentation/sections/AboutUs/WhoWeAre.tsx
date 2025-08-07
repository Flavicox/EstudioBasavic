const WhoWeAre = () => {
    return (
        <section className="bg-[#0B152B] pt-30 px-6 sm:px-10 md:px-20 py-30">
            <h1 className="text-4xl text-white text-center md:text-left mb-10">
                ¿QUIÉNES SOMOS?
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">
                {/* Imagen */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/BasavicCEO.png"
                        alt="Basavic CEO's Photo"
                        className="h-auto max-h-[700px] w-auto object-contain"
                    />
                </div>

                {/* Texto */}
                <div className="flex-1 px-2 md:px-0">
                    <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl text-justify">
                        Somos profesionales apasionados por el diseño, la arquitectura, la ingeniería y la tecnología 3D. <br /><br />
                        Combinamos creatividad, precisión técnica y una visión innovadora para transformar tus ideas en espacios reales, funcionales y con carácter. <br /><br />
                        Creemos en el trabajo colaborativo y en la confianza como base para construir grandes proyectos.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;