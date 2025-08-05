import { Outlet, useLocation } from "react-router";
import { Header } from "../components/common/Header.tsx";
import { Footer } from "../components/common/Footer.tsx";

const MainLayout = () => {
    const location = useLocation();
    const path = location.pathname;

    // Listas de rutas para cada tipo de header
    const scrollRoutes = ["/", "/inicio"];
    const transparentRoutes = ["/portafolio", "/galeria"];
    const whiteRoutes = ["/contacto", "/nosotros", "/servicios"];

    // Determinar el modo según la ruta
    const getHeaderMode = (): "scroll" | "transparent" | "white" => {
        if (scrollRoutes.includes(path)) return "scroll";
        if (transparentRoutes.includes(path)) return "transparent";
        if (whiteRoutes.includes(path)) return "white";
        return "white";
    };

    const mode = getHeaderMode();

    return (
        <div className="flex flex-col min-h-screen">
            <Header mode={mode} />

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
