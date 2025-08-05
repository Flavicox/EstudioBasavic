import { PORTFOLIO_ITEMS } from "../../../domain/constants/portfolio";
import PortfolioCard from "../../components/PortfolioCard.tsx";


const PortfolioHighlights = () => {
    return (
        <section className="bg-[#0B152B] py-20" id="portafolio">
            <div className="container mx-auto px-4 flex flex-col items-center gap-10">
                <h2 className="text-3xl md:text-4xl text-center text-[#f2f2f2] ">
                    PROYECTOS DESTACADOS
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3">
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
                <div className="flex gap-4 flex-wrap">
                    <a
                        href="#portafolio"
                        className="bg-transparent border-2 text-white text-xl px-4 py-2 rounded-md hover:bg-white/20 transition"
                    >
                        Ver Mas Proyectos
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PortfolioHighlights;
