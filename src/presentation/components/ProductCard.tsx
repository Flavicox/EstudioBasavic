interface ProductCardProps {
    title: string;
    category: string;
    subCategory: string;
    image: string;
    price: number;
    link?: string; // 🔹 Nueva propiedad para la URL
}

const ProductCard = ({ title, category, subCategory, image, price, link }: ProductCardProps) => {
    const handleClick = () => {
        if (link) {
            window.open(link, "_blank"); // Abre en nueva pestaña
        }
    };

    return (
        <div
            onClick={handleClick}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-72 object-contain bg-white"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-[#2C4375] mb-1">{title}</h3>
                <p className="text-sm text-gray-500 mb-2">{category} • {subCategory}</p>
                <p className="text-base font-bold text-[#2C4375]">S/. {price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
