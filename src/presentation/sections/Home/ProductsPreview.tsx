import {PRODUCTS} from "../../../domain/constants/products.ts";
import ProductCard from "../../components/ProductCard.tsx";


const ProductsPreview = () => {
    return (
        <section className="bg-white py-20" id="productos">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2C4375] mb-12">
                    Productos impresos en 3D
                </h2>
                <p className="text-center text-gray-600 max-w-xl mx-auto mb-8">
                    Explora nuestra línea de piezas decorativas, funcionales y personalizadas, creadas con tecnología de vanguardia.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRODUCTS.map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.title}
                            description={product.description}
                            icon={product.icon}
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-10 gap-4 flex-wrap">
                    {/*<a*/}
                    {/*    href="https://mercadolibre.com"*/}
                    {/*    target="_blank"*/}
                    {/*    rel="noopener noreferrer"*/}
                    {/*    className="bg-[#65B2CC] text-white font-semibold px-6 py-3 rounded hover:bg-[#5a9fba] transition"*/}
                    {/*>*/}
                    {/*    Comprar en Mercado Libre*/}
                    {/*</a>*/}
                    <a
                        href="/contacto"
                        className="border-2 border-[#65B2CC] text-[#65B2CC] font-semibold px-6 py-3 rounded hover:bg-[#65B2CC] hover:text-white transition"
                    >
                        Solicitar personalizado
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProductsPreview;
