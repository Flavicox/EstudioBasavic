import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";

// Variables de entorno
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Validación con Zod
const schema = z.object({
    name: z.string().min(2, "El nombre es obligatorio"),
    email: z.string().email("Correo inválido"),
    message: z.string().min(5, "El mensaje debe tener al menos 5 caracteres"),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
            setSuccess(true);
            setError(false);
            reset();
        } catch {
            setSuccess(false);
            setError(true);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-6">
            <div>
                <label htmlFor="name" className="block mb-1 font-medium text-[#2C4375] text-xl">
                    Nombre
                </label>
                <input
                    id="name"
                    {...register("name")}
                    className="w-full border rounded px-4 py-2 shadow-md border-[#2C4375] focus:outline-none focus:ring-1 focus:ring-[#2C4375]"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
                <label htmlFor="email" className="block mb-1 font-medium text-[#2C4375] text-xl">
                    Correo
                </label>
                <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full border rounded px-4 py-2 shadow-md border-[#2C4375] focus:outline-none focus:ring-1 ring-[#2C4375]"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="message" className="block mb-1 font-medium text-[#2C4375] text-xl">
                    Mensaje
                </label>
                <textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    className="w-full border shadow-md border-[#2C4375] rounded px-4 py-2 resize-none focus:outline-none focus:ring-1 ring-[#2C4375]"
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#2C4375] text-white px-4 py-2 rounded text-xl hover:bg-[#0D1E42] transition disabled:opacity-50"
            >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>

            {success && <p className="text-green-600 mt-2">¡Mensaje enviado con éxito!</p>}
            {error && <p className="text-red-600 mt-2">Hubo un error al enviar. Inténtalo más tarde.</p>}
        </form>
    );
};

export default ContactForm;
