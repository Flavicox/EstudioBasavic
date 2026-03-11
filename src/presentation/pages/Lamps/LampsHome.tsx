import LampsHeroSection from "../../sections/LampsHome/LampsHeroSection";
import LampsWelcomeSection from "../../sections/LampsHome/LampsWelcomeSection";
import { LAMP_ITEMS } from "../../../domain/constants/lampItems";

export default function LampsHome() {
    return (
        <main className="">
            <LampsHeroSection
                titleImageSrc="/Lamps/ColeccionHogarLamparas.png"
                items={LAMP_ITEMS}
            />

            <LampsWelcomeSection
                backgroundImageSrc="/Lamps/welcome-bg.jpg"
                headline="“Bienvenido a nuestra Colección Hogar”"
                paragraph1="Cada lámpara que ves aquí, ha sido diseñada y fabricada con dedicación, combinando diseño, tecnología e inspiración natural."
                paragraph2=" Fabricadas con impresión 3D en PLA+, un material ecológico y duradero, nuestras piezas están pensadas para llenar tus espacios de luz, estilo y personalidad."
            />
        </main>
    );
}