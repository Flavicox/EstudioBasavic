import { PRODUCTS } from "../../../domain/constants/products.ts";
import ProductCard from "../../components/ProductCard.tsx";

const ProductsPreview = () => {
    return (
        <section className="bg-[#F2F2F2] py-20" id="productos">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl text-center text-[#2C4375] mb-12">
                    PRODUCTOS IMPRESOS EN 3D
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {PRODUCTS.map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.title}
                            category={product.category}
                            subCategory={product.subCategory}
                            image={product.image}
                            price={product.price}
                            link={product.marcadoLibre} // 🔹 Le pasamos el enlace
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsPreview;
