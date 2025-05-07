import { PORTFOLIO_ITEMS } from "../../../domain/constants/portfolio";
import PortfolioCard from "../../components/PortfolioCard.tsx";


const PortfolioHighlights = () => {
    return (
        <section className="bg-[#f2f2f2] py-20" id="portafolio">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2C4375] mb-12">
                    Proyectos Destacados
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PORTFOLIO_ITEMS.map((project, index) => (
                        <PortfolioCard
                            key={index}
                            title={project.title}
                            location={project.location}
                            year={project.year}
                            image={project.image}
                            description={project.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioHighlights;
