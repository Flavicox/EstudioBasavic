interface PortfolioCardProps {
    title: string;
    location: string;
    year: string;
    image: string;
    description: string;
}

const PortfolioCard = ({ title, location, year, image, description }: PortfolioCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={image} alt={title} className="w-full h-80 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-[#2C4375]">{title}</h3>
                <p className="text-sm text-gray-500 mb-2">{location} • {year}</p>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default PortfolioCard;
