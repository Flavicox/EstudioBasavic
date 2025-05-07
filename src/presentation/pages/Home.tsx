import HeroSection from "../sections/Home/HeroSection.tsx";
import ServicesOverview from "../sections/Home/ServicesOverview.tsx";
import ProductsPreview from "../sections/Home/ProductsPreview.tsx";
import PortfolioHighlights from "../sections/Home/PortfolioHighlights.tsx";
import CallToAction from "../sections/Home/CallToAction.tsx";

const Home = () => {
    return (
        <>
            <HeroSection/>
            <ServicesOverview/>
            <ProductsPreview/>
            <PortfolioHighlights/>
            <CallToAction/>
        </>
    );
};

export default Home;
