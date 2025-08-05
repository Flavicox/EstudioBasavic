import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
    mode?: "scroll" | "transparent" | "white";
}

export const Header = ({ mode = "white" }: HeaderProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (mode !== "scroll") return;
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mode]);

    const showTransparent =
        (mode === "scroll" && !isScrolled) || mode === "transparent";

    const backgroundClass = menuOpen
        ? "bg-black"
        : showTransparent
            ? "bg-transparent"
            : "bg-white drop-shadow-md";

    const textColor = showTransparent && !menuOpen ? "text-white" : "text-[#2C4374]";

    const baseLink = `${textColor} px-3 py-2 transition border-b-2 border-transparent hover:border-current`;
    const activeLink = "border-current font-semibold";

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${backgroundClass}`}>
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <NavLink to="/" end>
                    <img
                        src={
                            showTransparent && !menuOpen
                                ? "/BasavicImagotipoBlanco.png"
                                : "/BasavicImagotipoColor.png"
                        }
                        alt="Logo Estudio Bassavic"
                        className="h-10 w-auto transition-all duration-300"
                    />
                </NavLink>

                {/* Botón hamburguesa para móvil */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`${textColor}`}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Menú desktop */}
                <nav className="hidden md:flex space-x-4">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? activeLink : ""}`
                        }
                    >
                        Inicio
                    </NavLink>
                    <a href="#servicios" className={baseLink}>Servicios</a>
                    <a href="#portafolio" className={baseLink}>Portafolio</a>
                    <a href="#productos" className={baseLink}>Productos</a>
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

            {/* Menú mobile expandido */}
            {menuOpen && (
                <div className="md:hidden bg-black text-white px-4 pb-4">
                    <nav className="flex flex-col space-y-3">
                        <NavLink to="/" end onClick={() => setMenuOpen(false)}>
                            Inicio
                        </NavLink>
                        <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
                        <a href="#portafolio" onClick={() => setMenuOpen(false)}>Portafolio</a>
                        <a href="#productos" onClick={() => setMenuOpen(false)}>Productos</a>
                        <NavLink to="/contacto" onClick={() => setMenuOpen(false)}>
                            Contacto
                        </NavLink>
                    </nav>
                </div>
            )}
        </header>
    );
};
