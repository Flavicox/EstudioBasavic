import {Outlet} from "react-router";
import {Header} from "../components/common/Header.tsx";
import {Footer} from "../components/common/Footer.tsx";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;