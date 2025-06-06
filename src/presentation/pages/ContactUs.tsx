import ContactForm from "../sections/ContactForm.tsx";

const ContactUs = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2C4375] mb-6">
                    Contáctanos
                </h2>
                <p className="text-gray-700 mb-10 max-w-xl mx-auto">
                    ¿Tienes un proyecto en mente o quieres personalizar un producto 3D? Escríbenos y hagámoslo realidad.
                </p>
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactUs;
