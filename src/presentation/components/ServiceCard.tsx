import type {IconType} from "react-icons";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: IconType;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
            <Icon className="text-4xl text-[#65B2CC] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-[#2C4375] mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
};

export default ServiceCard;
