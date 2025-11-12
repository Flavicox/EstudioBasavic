import { createBrowserRouter } from "react-router";
import MainLayout from "../../presentation/layout/MainLayout.tsx";
import Home from "../../presentation/pages/Home.tsx";
import ContactUs from "../../presentation/pages/ContactUs.tsx";
import AboutUs from "../../presentation/pages/AboutUs.tsx";
import Portfolio from "../../presentation/pages/Portfolio.tsx";
import Project from "../../presentation/pages/Project.tsx";
import LampsLayout from "../../presentation/layout/LampsLayout.tsx";
import LampsHome from "../../presentation/pages/Lamps/LampsHome.tsx";
import LampsFabricacion from "../../presentation/pages/Lamps/LampsFabricacion.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "contacto", element: <ContactUs /> },
            { path: "nosotros", element: <AboutUs /> },
            { path: "portafolio", element: <Portfolio /> },
            { path: "portafolio/:key", element: <Project /> },
        ],
    },

    {
        path: "productos",
        children: [
            {
                path: "hogar",
                children: [
                    {
                        path: "lamparas",
                        element: <LampsLayout/>,
                        children: [
                            { index: true, element: <LampsHome /> },
                            { path: "fabricacion", element: <LampsFabricacion/> }
                        ],
                    }

                ]
            }
        ]
    }
]);
