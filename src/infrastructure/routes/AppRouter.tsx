import { createBrowserRouter } from "react-router";
import MainLayout from "../../presentation/layout/MainLayout.tsx";
import Home from "../../presentation/pages/Home.tsx";
import ContactUs from "../../presentation/pages/ContactUs.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "contacto", element: <ContactUs /> },
        ],
    },
]);
