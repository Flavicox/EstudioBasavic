const Persons = () => {
    return (
        <section className="bg-white px-6 sm:px-10 md:px-20 py-10">

            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-7xl mx-auto mb-10">
                {/* Texto */}
                <div className="flex-1 px-2 md:px-0">
                    <h1 className=" text-2xl sm:text-3xl lg:text-4xl text-[#2C4375] text-center lg:text-right mb-5 w-full">
                        FLAVIA VILLACORTA
                    </h1>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#2C4375] text-center lg:text-right mb-12 w-full">
                        Co-fundadora de Estudio Basavic
                    </h2>
                    <p className="text-[#2C4375] text-base sm:text-lg md:text-xl lg:text-xl text-justify lg:text-right">
                        En Estudio Basavic creemos que cada proyecto debe ser funcional, auténtico y con carácter. Diseñamos espacios que transmiten esencia, cuidando cada detalle para lograr ambientes únicos, acogedores y llenos de personalidad. <br /><br />
                        Nos inspira cada cliente y su historia. A partir de sus ideas, damos vida a espacios que conectan emocionalmente, transformando sus necesidades en experiencias habitables que reflejan quiénes son.
                    </p>
                </div>
                {/* Imagen */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/FlaviaVillacorta.png"
                        alt="Flavia Villacorta"
                        className="h-auto max-h-[700px] w-auto object-contain"
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-10 max-w-7xl mx-auto">

                {/* Texto */}
                <div className="flex-1 px-2 md:px-0">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#2C4375] text-center lg:text-left mb-5 w-full">
                        CRISTIAN BARRERA
                    </h1>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#2C4375] text-center lg:text-left mb-12 w-full">
                        Co-fundador de Estudio Basavic
                    </h2>
                    <p className="text-[#2C4375] text-base sm:text-lg md:text-xl lg:text-xl text-justify lg:text-left">
                        Apasionado por la innovación, especializándome en impresión 3D, integro esta tecnología como una herramienta clave en nuestros procesos creativos. Nos permite desarrollar prototipos con alto nivel de detalle y diseñar piezas únicas que enriquecen cada proyecto.<br/><br/>
                        Mi enfoque está en crear de forma consciente, generando un impacto positivo desde lo estético hasta lo sostenible. En Estudio Basavic utilizamos materiales ecológicos como bioplásticos derivados del maíz, buscando siempre aportar valor al entorno. <br/><br/>
                        Nuestro propósito es que cada cliente se sienta identificado con nuestras creaciones, tanto en el diseño arquitectónico como en los productos de impresión 3D que desarrollamos.
                    </p>
                </div>

                {/* Imagen */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/CristianBarrera.png"
                        alt="Cristian Barrera"
                        className="h-auto max-h-[700px] w-auto object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default Persons;