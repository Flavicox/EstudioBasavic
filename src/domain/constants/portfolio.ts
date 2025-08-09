interface PortfolioItem {
    key: string;
    title: string;
    date: string;
    client: string;
    principalImage: string;
    images?: string[];
    description: string;
    projectType: string;
    projectTypeShow: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
    {
        key: "1",
        title: "Diseño de Fachada Velatorio Parroquia Santuario Señor de Huamán.",
        date: "Julio 2025",
        client: "Hermanos Franciscanos Capuchinos",
        principalImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1754695834/IMG_2650-EDIT_acajop.jpg",
        description: "Ubicado en el distrito de Víctor Larco Herrera, en la Parroquia Santuario Señor de Huamán. El proyecto ha sido diseñado tomando como referencia los lineamientos franciscanos, Humildad, Sencillez y Servicio. Es lo que refleja la fachada, trabajando materiales en su misma naturaleza como es el concreto expuesto, el concreto con color y la piedra pizarra, materiales que por su dureza y naturaleza nos demuestran la belleza de su esplendor natural, como el corazón de la comunidad capuchina, dispuesta a dar servicio viviendo en humildad con mucha vocación.",
        projectType: "arquitectura-comercial",
        projectTypeShow: "Diseño Comercial",
        images: [
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754695834/IMG_2650-EDIT_acajop.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754695836/IMG_2656_kc1pd2.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754695837/IMG_2655_ylntbt.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754695840/IMG_2850-EDIT_sflvjv.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754695841/IMG_2852-EDIT_skogen.jpg",
        ],
    },
    {
        key: "2",
        title: "Remodelación Complejo Parroquial Santuario Señor de Huamán",
        date: "Mayo 2025",
        client: "Hermanos Franciscanos Capuchinos",
        principalImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1754696487/21_tgp3vi.jpg",
        description: "Desde hace siglos, el Santuario Nuestro Señor de Huamán, en Víctor Larco – Trujillo, ha sido un lugar de encuentro espiritual, tradición y unión.\n" +
            "Hoy, con una comunidad más grande y activa, nace la necesidad de renovar y fortalecer este espacio para el servicio de todos.\n" +
            "\n" +
            "El proyecto Incluye los siguientes ambientes: \n" +
            "Nuevo escenario principal para misas al aire libre.\n" +
            "11 salones de catequesis para formación espiritual.\n" +
            "Salón de usos múltiples con función de velatorio.\n" +
            "Cocina comunitaria para actividades solidarias.\n" +
            " Plaza central para ferias y eventos parroquiales.\n" +
            "Un proyecto de Fe, Esperanza y de Vida. \n",
        projectType: "representacion-arquitectonica",
        projectTypeShow: "Diseño Arquitectónico",
        images: [
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754696487/21_tgp3vi.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754696491/24_wj7id3.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754696490/7_kaibt7.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754696488/16_oyjhrj.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754696488/AUDITORIO_1_cld8ou.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754696487/terraza_coro_ppnzca.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754696487/salon_parroquial_bep3ny.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754696491/es_r7ku80.png",
        ],
    },
    {
        key: "3",
        title: "Desarrollo Inmobiliario, Residencial Santa Catalina",
        date: "Julio 2025",
        client: "Constructora Libertad S.A.C",
        principalImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697383/F1_q1tx41.png",
        description: "Transformamos un proyecto inmobiliario de 3.9 hectáreas en una experiencia visual completa: modelado 3D de alta precisión, renders fotorrealistas en 4K, recorridos 360°, video animado y una maqueta física a escala 1:500. \n" +
            " Cada detalle fue diseñado para transmitir la magnitud y esencia del conjunto residencial, ofreciendo a clientes e inversionistas una visión clara y cautivadora del proyecto.",
        projectType: "diseño-residencial",
        projectTypeShow: "Proyecto de Visualización Arquitectónica y Modelo a escala",
        images: [
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697383/F1_q1tx41.png",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697383/F6_imr4ft.png",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697383/F2_iqcgxr.png",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697383/F4_ylj4v2.png",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697219/IMG_2693_ilt4r5.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697219/IMG_2713_ezyaku.jpg",
        ]
    },
    {
        key: "4",
        title: "Proyecto de Diseño Atemporal",
        date: "Marzo 2024",
        client: "Particular ",
        principalImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697645/PROPUESTA_1_-_VISTA_FRONTAL_eo2yzd.jpg",
        description: "Diseño de Sala de Estudio, Sala y Comedor \n" +
            " Este proyecto fue concebido para una familia joven con dos hijas en edad escolar, pensando no solo en sus necesidades actuales, sino también en su crecimiento y etapas futuras.\n" +
            "Para la Sala de Estudio, desarrollamos un diseño atemporal, adaptable a las distintas fases educativas de las niñas y con la capacidad de perdurar en el tiempo. Se incorporaron amplias soluciones de almacenamiento para la comodidad de la familia y un espacio de TV con mobiliario flexible, que optimiza el uso del área —ubicada estratégicamente en un pasillo— y lo convierte en un rincón útil para el entretenimiento e integración familiar.\n" +
            "En la Sala y Comedor, el reto fue transformar un espacio reducido en un ambiente visualmente amplio, cómodo y funcional. Optamos por un estilo Japandi, que combina la serenidad del diseño japonés con la calidez escandinava, transmitiendo calma en medio de la rutina diaria y fomentando la convivencia en el hogar.",
        projectType: "diseño-interior",
        projectTypeShow: "Proyecto de Diseño interior",
        images: [
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697645/PROPUESTA_1_-_VISTA_FRONTAL_eo2yzd.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697676/PROPUESTA_1_-_VISTA_LATERAL_1_lw4ein.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697676/IMG_20240220_200945_mvwi3l.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697677/IMG_20240220_202041_heh8iz.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697677/IMG_20240220_201116_t7yqr3.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697677/IMG_20240220_201145_krrtze.jpg",
        ]
    },
    {
        key: "5",
        title: "Proyecto de diseño “Dulce Calidez”",
        date: "Junio 2022",
        client: "Particular",
        principalImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697972/12.1_ws4u7f.png",
        description: "Diseño de Cocina y Servicios Higiénicos \n" +
            " En este proyecto de cocina buscamos transmitir calidez y armonía, entendiendo que este ambiente es el corazón del hogar. Creamos un espacio funcional y estético, donde los materiales y acabados —melamina en tonos madera, iluminación cálida y luminarias colgantes— invitan a compartir momentos en familia, disfrutar de comidas con tranquilidad y generar conversaciones de sobremesa memorables.\n" +
            "Para los servicios higiénicos, continuamos con el mismo lenguaje de calma y calidez. Diseñamos un ambiente pensado para el cuidado personal y el bienestar, utilizando una paleta de colores marrones y amaderados que transmiten serenidad. El resultado es un espacio que brinda confort diario y un inicio de jornada lleno de energía positiva.\n",
        projectType: "diseño-interior",
        projectTypeShow: "Proyecto de Diseño interior",
        images: [
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697972/12.1_ws4u7f.png",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697973/12.11_b8fuqi.png",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697973/14.1_gxbiau.png",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697915/18_fw6bqz.png",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697916/BA%C3%91O_1.1_w5q9jf.png",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697915/BA%C3%91O_1_j6jsr5.png",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754697915/19_wsans8.png",
        ]
    },
    {
        key: "6",
        title: "Remodelación de fachada y espacios de transición para CC. Corporación",
        date: "Agosto 2023",
        client: "Corporación Mercadotecnia",
        principalImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1754698302/2_bxzc4u.jpg",
        description: "Nuestra propuesta se desarrolla en un inmueble ubicado en el centro histórico de Trujillo, donde priorizamos la recuperación de su valor histórico y arquitectónico. Restauramos la casona a su forma original, rescatando el zaguán como elemento central y añadiendo maceteros de cemento que generan pequeños espacios de estancia. La incorporación de vegetación embellece el área central, integrando la naturaleza al patrimonio y devolviendo vida al inmueble.",
        projectType: "arquitectura-comercial",
        projectTypeShow: "Proyecto de Diseño Comercial",
        images:[
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754698302/2_bxzc4u.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754698308/8_anipei.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754698302/3_y7qtep.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754698302/4_qdbmp9.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754698302/5_tgfjxf.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754698306/6_aewot0.jpg",
            "https://res.cloudinary.com/dnjarfszg/image/upload/v1754698307/7_d0qktw.jpg",
        ]
    },
];
