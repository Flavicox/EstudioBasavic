const HeroSection = () => {
    return (
        <section className="relative h-screen bg-cover bg-center bg-no-repeat bg-[url('/FachadaIglesia.jpg')]" id="inicio">
            {/* Degradado overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-transparent z-10"></div>
            {/* Contenido alineado a la izquierda */}
            <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
                <h1 className="text-3xl md:text-4xl mb-6 max-w-xl">
                    ¡Bienvenid@ a Estudio Bassavic!
                </h1>
                <p className="text-lg max-w-xl mb-8">
                    Somos un equipo creativo que fusiona arquitectura, diseño e ingeniería con tecnología de impresión 3D para construir espacios y objetos funcionales, innovadores y personalizados.
                </p>
                <div className="flex gap-4 flex-wrap">
                    <a
                        href="#servicios"
                        className="bg-[#213358] text-white text-xl px-6 py-3 rounded-md hover:bg-[#0D1E42] transition"
                    >
                        Conoce nuestros servicios
                    </a>
                </div>
            </div>
        </section>
    );
}


export default HeroSection;
