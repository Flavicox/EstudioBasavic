// src/presentation/components/LampsHeader.tsx
import { NavLink } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function LampsHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    const baseLink =
        "px-3 py-2 text-black border-b-2 border-transparent hover:border-black transition";
    const activeLink = "border-black font-semibold";

    return (
        <header className="w-full sticky top-0 z-40 bg-[#F4F4F4] shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo (izquierda) */}
                <NavLink to="/" end>
                    <img
                        src="/BasavicImagotipoNegro.png"
                        alt="Basavic"
                        className="h-10 w-auto"
                    />
                </NavLink>

                {/* Botón hamburguesa (mobile) */}
                <button
                    className="md:hidden text-black"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Navegación (derecha - desktop) */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a
                        href="https://wa.me/c/51992266070"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={baseLink}
                    >
                        Comprar
                    </a>
                    <NavLink
                        to="/productos/hogar/lamparas/fabricacion"
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? activeLink : ""}`
                        }
                    >
                        Fabricación
                    </NavLink>
                    <NavLink
                        to="/productos/hogar/lamparas/disena-tu-lampara"
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? activeLink : ""}`
                        }
                    >
                        Diseña tu Lámpara
                    </NavLink>
                </nav>
            </div>

            {/* Menú móvil desplegado */}
            {menuOpen && (
                <div className="md:hidden bg-[#F4F4F4] border-t border-black/10 shadow-inner">
                    <nav
                        className="flex flex-col px-4 py-3 space-y-3 text-black"
                        onClick={() => setMenuOpen(false)}
                    >
                        <a href="https://wa.me/c/51992266070" className="py-1" target="_blank" rel="noopener noreferrer">
                            Comprar
                        </a>
                        <NavLink to="/productos/hogar/lamparas/fabricacion" className="py-1">
                            Fabricación
                        </NavLink>
                        <NavLink to="/productos/hogar/lamparas/disena-tu-lampara" className="py-1">
                            Diseña tu Lámpara
                        </NavLink>
                    </nav>
                </div>
            )}
        </header>
    );
}
