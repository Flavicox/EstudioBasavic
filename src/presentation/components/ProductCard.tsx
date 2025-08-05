interface ProductCardProps {
    title: string;
    category: string;
    subCategory: string;
    image: string;
    price: number;
}

const ProductCard = ({ title, category, subCategory, image, price }: ProductCardProps) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
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
