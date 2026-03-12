import LampsCustomHeroSection from "../../sections/LampsCustom/LampsCustomHeroSection";
import LampsCustomCTASection from "../../sections/LampsCustom/LampsCustomCTASection";
import {Link} from "react-router";
import {IoArrowBack} from "react-icons/io5";

export default function LampsCustom() {
    return (
        <main className="bg-[#E9E9E9] text-[#3D2F3D]">

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

            <LampsCustomHeroSection
                titleImage="/Lamps/ServicioExclusivo.png"
                description="Estudio Basavic te presenta su servicio exclusivo de personalización de lámparas y luminarias. Ideal para arquitectos, diseñadores de interiores o aficionados del diseño, que buscan iluminar sus espacios o proyectos con un estilo único y sofisticado."
                image="/Lamps/LamparaHero.png"
            />

            <LampsCustomCTASection
                subtitle="Nos encargamos de acompañarte en todo el proceso:"
                paragraph="Desde el modelado 3D y el prototipado, hasta la creación del producto final, asegurando una pieza auténtica que refleje tu visión y eleve la estética de cada ambiente."
                phraseImage="/Lamps/FraseCustom.png"
                whatsappLink="https://wa.me/c/51992266070"
                logo="/BasavicImagotipoNegro.png"
            />

        </main>
    );
}