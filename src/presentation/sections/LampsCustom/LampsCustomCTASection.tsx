import { FaWhatsapp } from "react-icons/fa";

interface Props {
    subtitle: string;
    paragraph: string;
    phraseImage: string;
    whatsappLink: string;
    logo: string;
}

export default function LampsCustomCTASection({
                                                  subtitle,
                                                  paragraph,
                                                  phraseImage,
                                                  whatsappLink,
                                                  logo,
                                              }: Props) {
    return (
        <section className="py-16 text-center">

            <div className="max-w-[900px] mx-auto px-6">

                <h2 className="text-[22px] md:text-[26px] mb-4 font-medium">
                    {subtitle}
                </h2>

                <p className="text-[18px] md:text-[20px] leading-relaxed mb-10">
                    {paragraph}
                </p>

                <div className="flex justify-center mb-10">
                    <img
                        src={phraseImage}
                        alt="Frase"
                        className="h-20 md:h-35"
                    />
                </div>

                <div className="flex items-center justify-center gap-10">

                    <a
                        href={whatsappLink}
                        target="_blank"
                        className="flex items-center gap-3 bg-[#DDD9D7] px-6 py-3 rounded-full text-[18px] hover:opacity-80 transition"
                    >
                        Escríbenos
                        <FaWhatsapp className="text-xl"/>
                    </a>

                    <img
                        src={logo}
                        alt="Basavic"
                        className="h-12"
                    />

                </div>

            </div>

        </section>
    );
}