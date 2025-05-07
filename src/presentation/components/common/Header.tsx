import { NavLink } from "react-router";

export const Header = () => {
    const baseLink =
        "text-[#2C4375] px-3 py-2 transition border-b-2 border-transparent hover:border-[#65B2CC]";
    const activeLink = "border-[#65B2CC] font-semibold";

    return (
        <header className="bg-white drop-shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <img
                    src="/LogoBasavic.jpg"
                    alt="Logo Estudio Bassavic"
                    className="h-10 w-auto"
                />

                <nav className="flex space-x-4">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? activeLink : ""}`
                        }
                    >
                        Inicio
                    </NavLink>
                    <a href="#servicios" className={baseLink}>
                        Servicios
                    </a>
                    <a href="#productos" className={baseLink}>
                        Productos
                    </a>
                    <a href="#portafolio" className={baseLink}>
                        Portafolio
                    </a>
                    <NavLink
                        to="/contacto"
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? activeLink : ""}`
                        }
                    >
                        Contacto
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};
