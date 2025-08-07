import { useState } from "react";
import { PORTFOLIO_ITEMS } from "../../domain/constants/portfolio.ts";
import PortfolioCard from "../components/PortfolioCard.tsx";
import {PROJECT_TYPE} from "../../domain/constants/projectTypes.ts";

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState("todos");

    const filteredItems =
        selectedCategory === "todos"
            ? PORTFOLIO_ITEMS
            : PORTFOLIO_ITEMS.filter((item) => item.projectType === selectedCategory)

    const selectedCategoryDescription =
        PROJECT_TYPE.find((cat) => cat.value === selectedCategory)?.description || "";

    return (
        <div className="pt-20 px-6 sm:px-10 md:px-20">
            <h1 className="text-3xl text-[#2C4375] mb-4">NUESTROS PROYECTOS</h1>

            {/* Filtro de categorías */}
            <div className="flex flex-wrap gap-4 text-sm sm:text-base font-medium mb-4">
                {PROJECT_TYPE.map((category) => (
                    <button
                        key={category.value}
                        className={`border-b-2 pb-1 transition-all ${
                            selectedCategory === category.value
                                ? "border-[#2C4375] text-[#2C4375]"
                                : "border-transparent text-gray-600 hover:text-[#2C4375]"
                        }`}
                        onClick={() => setSelectedCategory(category.value)}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            {/* Descripción de la categoría (excepto en "todos") */}
            {selectedCategory !== "todos" && (
                <p className="text-gray-700 mb-6">{selectedCategoryDescription}</p>
            )}

            {/* Grid de proyectos filtrados */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
                {filteredItems.map((project, index) => (
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
    );
};

export default Portfolio;
