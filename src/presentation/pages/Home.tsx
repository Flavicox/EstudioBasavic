import HeroSection from "../sections/Home/HeroSection.tsx";
import ServicesOverview from "../sections/Home/ServicesOverview.tsx";
import ProductsPreview from "../sections/Home/ProductsPreview.tsx";
import PortfolioHighlights from "../sections/Home/PortfolioHighlights.tsx";
import CallToAction from "../sections/Home/CallToAction.tsx";
import { useLocation } from "react-router";
import {useEffect} from "react";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const sectionId = params.get("scroll");
        if (sectionId) {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <>
            <HeroSection/>
            <ServicesOverview/>
            <PortfolioHighlights/>
            <ProductsPreview/>
            <CallToAction/>
        </>
    );
};

export default Home;
