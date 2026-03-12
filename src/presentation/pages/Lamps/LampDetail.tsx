import { useMemo } from "react";
import { Link, useParams } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import { LAMP_ITEMS } from "../../../domain/constants/lampItems";
import { MATERIAL_INFO } from "../../../domain/constants/materialInfo";

export default function LampDetail() {
    const { slug } = useParams<{ slug: string }>();

    const lamp = useMemo(
        () => LAMP_ITEMS.find((item) => item.slug === slug),
        [slug]
    );

    if (!lamp) {
        return (
            <main className="min-h-screen bg-[#E9E9E9] text-[#3D2F3D] px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    <Link
                        to="/productos/hogar/lamparas"
                        className="inline-flex items-center gap-2 italic text-lg hover:opacity-70 transition"
                    >
                        <IoArrowBack className="text-2xl" />
                        <span>Regresar al catálogo</span>
                    </Link>

                    <div className="mt-16 text-center">
                        <h1 className="text-3xl font-semibold">Lámpara no encontrada</h1>
                    </div>
                </div>
            </main>
        );
    }

    const currentIndex = LAMP_ITEMS.findIndex((item) => item.slug === lamp.slug);

    const previousLamp = currentIndex > 0 ? LAMP_ITEMS[currentIndex - 1] : null;
    const nextLamp =
        currentIndex < LAMP_ITEMS.length - 1
            ? LAMP_ITEMS[currentIndex + 1]
            : null;

    const materialDescription =
        lamp.material.customDescription ||
        MATERIAL_INFO[lamp.material.key].description;

    const descriptionParagraphs = lamp.description
        .split("\n\n")
        .filter(Boolean);

    const handlePurchase = () => {
        if (!lamp.purchaseLink) return;
        window.open(lamp.purchaseLink, "_blank", "noopener,noreferrer");
    };

    return (
        <main className="bg-[#E9E9E9] text-[#3D2F3D]">
            <section className="w-full py-10 md:py-14">
                <div className="max-w-[1250px] mx-auto px-6">
                    {/* Botón volver */}
                    <div className="mb-10">
                        <Link
                            to="/productos/hogar/lamparas"
                            className="inline-flex items-center gap-2 italic text-lg md:text-xl hover:opacity-70 transition"
                        >
                            <IoArrowBack className="text-2xl" />
                            <span>Regresar al catálogo</span>
                        </Link>
                    </div>

                    {/* Bloque superior */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Texto */}
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={lamp.nameImage}
                                alt={lamp.name}
                                className="h-24 md:h-32 lg:h-40 w-auto object-contain mb-10"
                                loading="eager"
                            />

                            <div className="max-w-[520px] space-y-8 text-[22px] leading-[1.45] md:text-[25px] lg:text-[27px]">
                                {descriptionParagraphs.map((paragraph, index) => (
                                    <p key={`${lamp.slug}-paragraph-${index}`}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Video principal */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="w-full max-w-[560px] aspect-square overflow-hidden bg-black/5">
                                <video
                                    className="w-full h-full object-cover"
                                    src={lamp.presentationVideo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="auto"
                                    controls={false}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Galería inferior */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-20">
                        {lamp.galleryImages.map((image, index) => (
                            <div
                                key={`${lamp.slug}-gallery-${index}`}
                                className="aspect-[1.12/1] overflow-hidden bg-black/5"
                            >
                                <img
                                    src={image}
                                    alt={`${lamp.name} ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Información técnica */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 text-center">
                        {/* Dimensiones */}
                        <div>
                            <h2 className="text-[20px] md:text-[24px] font-semibold tracking-[0.18em] uppercase mb-4">
                                Dimensiones
                            </h2>

                            {lamp.dimensions.length === 1 ? (
                                <div className="space-y-2 text-[16px] md:text-[18px] leading-[1.35]">
                                    <p>ALTURA : {lamp.dimensions[0].height}</p>
                                    <p>DIÁMETRO : {lamp.dimensions[0].diameter}</p>
                                </div>
                            ) : (
                                <div className="space-y-6 text-[16px] md:text-[18px] leading-[1.35]">
                                    {lamp.dimensions.map((dimension) => (
                                        <div key={`${lamp.slug}-${dimension.label}`}>
                                            {dimension.label && (
                                                <p className="font-semibold uppercase tracking-[0.08em] mb-2">
                                                    {dimension.label}
                                                </p>
                                            )}
                                            <p>ALTURA : {dimension.height}</p>
                                            <p>DIÁMETRO : {dimension.diameter}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Materialidad */}
                        <div>
                            <h2 className="text-[20px] md:text-[24px] font-semibold tracking-[0.18em] uppercase mb-4">
                                Materialidad
                            </h2>

                            <p className="text-[16px] md:text-[18px] leading-[1.35] max-w-[360px] mx-auto">
                                {materialDescription}
                            </p>
                        </div>

                        {/* Iluminación */}
                        <div>
                            <h2 className="text-[20px] md:text-[24px] font-semibold tracking-[0.18em] uppercase mb-4">
                                Iluminación
                            </h2>

                            <div className="space-y-2 text-[16px] md:text-[18px] leading-[1.35]">
                                <p>Potencia: {lamp.lighting.powerWatts} W</p>
                                <p>Tipo de rosca {lamp.lighting.socketType}</p>
                                <p>{lamp.lighting.bulbType}</p>
                                <p>Flujo luminoso: {lamp.lighting.luminousFluxLm} lm.</p>
                            </div>
                        </div>
                    </div>

                    {/* Botón adquirir */}
                    <div className="mt-12 flex justify-center">
                        {lamp.purchaseLink ? (
                            <button
                                type="button"
                                onClick={handlePurchase}
                                className="min-w-[240px] md:min-w-[300px] rounded-full bg-[#DDD9D7] px-6 py-3 text-[18px] md:text-[20px] font-semibold text-[#3D2F3D] shadow-sm hover:shadow-md hover:opacity-85 transition cursor-pointer"
                            >
                                {lamp.purchaseLabel || `Adquirir Lámpara ${lamp.name}`}
                            </button>
                        ) : (
                            <button
                                type="button"
                                disabled
                                className="min-w-[320px] md:min-w-[420px] rounded-full bg-[#DDD9D7] px-8 py-4 text-[24px] md:text-[30px] font-semibold text-[#3D2F3D] opacity-80 cursor-not-allowed"
                            >
                                {lamp.purchaseLabel || `Adquirir Lámpara ${lamp.name}`}
                            </button>
                        )}
                    </div>
                    <div className="mt-14 flex items-center justify-between max-w-[900px] mx-auto">

                        {/* Lámpara anterior */}
                        {previousLamp ? (
                            <Link
                                to={`/productos/hogar/lamparas/${previousLamp.slug}`}
                                className="flex items-center gap-2 text-[18px] md:text-[20px] italic hover:opacity-70 transition"
                            >
                                <span className="text-2xl">←</span>
                                <span>{previousLamp.name}</span>
                            </Link>
                        ) : (
                            <div />
                        )}

                        {/* Lámpara siguiente */}
                        {nextLamp ? (
                            <Link
                                to={`/productos/hogar/lamparas/${nextLamp.slug}`}
                                className="flex items-center gap-2 text-[18px] md:text-[20px] italic hover:opacity-70 transition"
                            >
                                <span>{nextLamp.name}</span>
                                <span className="text-2xl">→</span>
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}