import {Link} from "react-router";

const CallToAction = () => {
    return (
        <section className="bg-[#65B2CC] text-white py-20" id="contacto">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    ¿Tienes un proyecto en mente?
                </h2>
                <p className="max-w-xl mx-auto text-lg mb-8">
                    Ya sea una obra arquitectónica, un diseño de interiores o un producto personalizado en 3D, estamos listos para ayudarte a hacerlo realidad.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <a
                        href="https://wa.me/51992266070"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#2C4375] font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
                    >
                        Escríbenos por WhatsApp
                    </a>
                    <Link
                        to="/contacto"
                        className="border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#2C4375] transition"
                    >
                        Ir a contacto
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
