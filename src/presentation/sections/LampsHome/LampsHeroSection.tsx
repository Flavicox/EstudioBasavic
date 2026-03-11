import LampCard from "../../components/cards/LampCard";
import type {LampItem} from "../../../domain/constants/lampItems";

interface Props {
    titleImageSrc: string;
    items: LampItem[];
}

export default function LampsHeroSection({ titleImageSrc, items }: Props) {
    return (
        <section className="w-full bg-[#f4f4f4] text-black">
            <div className="container mx-auto px-4 py-1 md:py-2 max-w-6xl">
                {/* Título */}
                <div className="flex justify-center mb-8 md:mb-10">
                    <img
                        src={titleImageSrc}
                        alt="Título de Lámparas"
                        className="h-20 md:h-30 w-auto"
                        loading="eager"
                    />
                </div>

                {/* Grid de lámparas */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 place-items-center">
                    {items.map((lamp) => (
                        <LampCard
                            key={lamp.slug}
                            imageSrc={lamp.presentationImage}
                            title={lamp.name}
                            href={`/productos/hogar/lamparas/${lamp.slug}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}