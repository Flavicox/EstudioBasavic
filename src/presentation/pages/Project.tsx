import { useParams } from "react-router";
import { PORTFOLIO_ITEMS } from "../../domain/constants/portfolio";
import { useState } from "react";

const Project = () => {
    const { key } = useParams<{ key: string }>();
    const project = PORTFOLIO_ITEMS.find(item => item.key === key);

    const [mainImage, setMainImage] = useState(project?.principalImage || "");

    if (!project) {
        return <div className="p-10 text-red-600">Proyecto no encontrado</div>;
    }

    return (
        <div className="bg-[#0B152B] text-white flex flex-col lg:flex-row gap-8 px-5 sm:px-10 lg:px-20 py-30 min-h-screen">
            {/* Lado Izquierdo */}
            <div className="w-full lg:w-2/5 flex flex-col gap-4 justify-center">
                <div className="flex flex-wrap gap-4 items-center">
                    <h1 className="text-xl sm:text-2xl font-bold">{project.title.toUpperCase()}</h1>
                    <h2 className="text-lg sm:text-xl">{project.date}</h2>
                </div>
                <h3 className="text-lg sm:text-2xl text-gray-300 italic">{project.projectTypeShow}</h3>
                <p
                    className="text-base sm:text-xl text-justify sm:pl-8"
                    dangerouslySetInnerHTML={{
                        __html: project.description.replace(/\n/g, "<br/>"),
                    }}
                />
            </div>

            {/* Lado Derecho */}
            <div className="w-full lg:w-3/5 flex flex-col items-center gap-4">
                {/* Imagen principal */}
                <img
                    src={mainImage}
                    alt={project.title}
                    className="w-full max-h-[60vh] object-contain rounded-lg"
                />

                {/* Miniaturas */}
                {project.images && project.images.length > 0 && (
                    <div className="flex gap-3 overflow-x-auto max-w-full p-1">
                        {project.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`${project.title} - ${idx}`}
                                className={`h-16 sm:h-20 w-24 sm:w-28 object-cover rounded-lg cursor-pointer border-2 ${
                                    mainImage === img ? "border-white" : "border-transparent"
                                }`}
                                onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Project;
