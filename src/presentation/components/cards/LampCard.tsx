import { NavLink } from "react-router";

interface Props {
    imageSrc: string;
    title: string;
    href?: string;
}

export default function LampCard({ imageSrc, title, href }: Props) {
    const CardContent = (
        <figure className="w-full mx-auto max-w-[220px] sm:max-w-[240px] md:max-w-[260px]">
            {/* Contenedor cuadrado */}
            <div className="aspect-square overflow-hidden">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <figcaption className="mt-2 text-center text-xs md:text-sm tracking-wider uppercase">
                {title}
            </figcaption>
        </figure>
    );

    return href ? (
        <NavLink to={href} className="block">
            {CardContent}
        </NavLink>
    ) : (
        CardContent
    );
}
