const HeroSection = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-[#2C4375] mb-6">
                    ¡Bienvenid@ a Estudio Bassavic!
                </h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                    Somos un equipo creativo que fusiona arquitectura, diseño e ingeniería con tecnología de impresión 3D para construir espacios y objetos funcionales, innovadores y personalizados.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <a
                        href="#servicios"
                        className="bg-[#65B2CC] text-white font-semibold px-6 py-3 rounded hover:bg-[#5a9fba] transition"
                    >
                        Conoce nuestros servicios
                    </a>
                    {/*<a*/}
                    {/*    href="/productos"*/}
                    {/*    className="border-2 border-[#65B2CC] text-[#65B2CC] font-semibold px-6 py-3 rounded hover:bg-[#65B2CC] hover:text-white transition"*/}
                    {/*>*/}
                    {/*    Ver productos 3D*/}
                    {/*</a>*/}
                </div>
            </div>
        </section>
    );
}

export default HeroSection;