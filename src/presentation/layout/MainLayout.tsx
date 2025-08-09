import { Outlet, useLocation } from "react-router";
import { Header } from "../components/common/Header.tsx";
import { Footer } from "../components/common/Footer.tsx";

const MainLayout = () => {
    const location = useLocation();
    const path = location.pathname;

    // Listas de rutas para cada tipo de header
    const scrollRoutes = ["/", "/inicio"];
    const whiteRoutes = ["/contacto", "/nosotros", "/portafolio"];

    // Determinar el modo según la ruta
    const getHeaderMode = (): "scroll" | "transparent" | "white" => {
        if (scrollRoutes.includes(path)) return "scroll";

        if (path.startsWith("/portafolio/")) return "transparent";

        if (whiteRoutes.includes(path)) return "white";

        return "white";
    };

    const shouldShowFooter = () => {
        // Si estás en una ruta tipo /portafolio/lo-que-sea, no mostrar footer
        if (path.startsWith("/portafolio/") && path !== "/portafolio") {
            return false;
        }
        return true;
    };

    const mode = getHeaderMode();

    return (
        <div className="flex flex-col min-h-screen">
            <Header mode={mode} />

            <main className="flex-grow">
                <Outlet />
            </main>

            {shouldShowFooter() && <Footer />}
        </div>
    );
};

export default MainLayout;
