import LampsHeader from "../components/common/LampsHeader.tsx";
import {Outlet} from "react-router";
import {Footer} from "../components/common/Footer.tsx";
import ScrollToTop from "../components/common/ScrollToTop.tsx";

const LampsLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />

            <LampsHeader/>

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default LampsLayout;