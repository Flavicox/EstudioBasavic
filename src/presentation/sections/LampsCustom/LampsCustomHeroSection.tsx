interface Props {
    titleImage: string;
    description: string;
    image: string;
}

export default function LampsCustomHeroSection({
                                                   titleImage,
                                                   description,
                                                   image,
                                               }: Props) {
    return (
        <section className="w-full py-1">
            <div className="max-w-[1200px] mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-10 gap-10 items-center">

                    {/* Texto 70% */}
                    <div className="md:col-span-7 text-center md:text-left">

                        <img
                            src={titleImage}
                            alt="Customización"
                            className="h-28 md:h-40 mb-8"
                        />

                        <p className="text-[18px] md:text-[20px] leading-relaxed max-w-[640px]">
                            {description}
                        </p>

                    </div>

                    {/* Imagen 30% */}
                    <div className="md:col-span-3 flex justify-center md:justify-end">
                        <img
                            src={image}
                            alt="Diseña tu lámpara"
                            className="max-w-[420px] md:max-w-[480px] w-full"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}