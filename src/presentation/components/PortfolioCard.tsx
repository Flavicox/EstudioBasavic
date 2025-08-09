interface PortfolioCardProps {
    title: string;
    image: string;
}

const PortfolioCard = ({ title, image }: PortfolioCardProps) => {
    return (
        <div className="relative group w-full h-80 overflow-hidden ">
            {/* Imagen */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay oscuro al hacer hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Caja con título, aparece en hover */}
            <div className="absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/80 text-white p-2">
                    <h3 className="text-md uppercase">{title}</h3>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
