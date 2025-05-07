import { FaCubes, FaGem, FaCube } from "react-icons/fa";
import type {IconType} from "react-icons";

interface Product {
    title: string;
    description: string;
    icon: IconType;
}

export const PRODUCTS: Product[] = [
    {
        title: "Decorativos personalizados",
        description: "Piezas únicas impresas en 3D con diseños originales para ambientar tus espacios.",
        icon: FaGem,
    },
    {
        title: "Modelos funcionales",
        description: "Objetos 3D con usos prácticos como soportes, organizadores y más.",
        icon: FaCubes,
    },
    {
        title: "Prototipos a medida",
        description: "Prototipado rápido para validar ideas o presentar productos antes de fabricar.",
        icon: FaCube,
    },
];
