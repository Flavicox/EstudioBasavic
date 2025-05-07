import { MdLocationCity, MdChair, MdViewInAr } from "react-icons/md";
import { FaDraftingCompass, FaTools } from "react-icons/fa";
import type {IconType} from "react-icons";

interface Service {
    title: string;
    description: string;
    icon: IconType;
}

export const SERVICES: Service[] = [
    {
        title: "Diseño Arquitectónico y Urbano",
        description: "Proyectos integrales que transforman ideas en espacios funcionales y estéticos.",
        icon: MdLocationCity,
    },
    {
        title: "Diseño de Interiores",
        description: "Soluciones personalizadas para hogares y comercios que combinan estilo y funcionalidad.",
        icon: MdChair,
    },
    {
        title: "Ingeniería estructural y sanitaria",
        description: "Cálculos y sistemas que garantizan seguridad, eficiencia y normativas al día.",
        icon: FaDraftingCompass,
    },
    {
        title: "Modelado y visualización 3D",
        description: "Representaciones realistas de proyectos para mejor entendimiento y presentación.",
        icon: MdViewInAr,
    },
    {
        title: "Asesorías técnicas",
        description: "Consultoría experta para tomar decisiones técnicas acertadas en tu proyecto.",
        icon: FaTools,
    },
];
