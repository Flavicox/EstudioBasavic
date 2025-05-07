import {SERVICES} from "../../../domain/constants/services.ts";
import ServiceCard from "../../components/ServiceCard.tsx";


const ServicesOverview = () => {
    return (
        <section className="bg-[#f2f2f2] py-20" id="servicios">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2C4375] mb-12">
                    Nuestros Servicios
                </h2>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {SERVICES.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
