import type { MaterialKey } from "./materialInfo";

export interface LampDimension {
    label?: string;
    height: string;
    diameter: string;
}

export interface LampLighting {
    powerWatts: number;
    socketType?: string;
    bulbType: string;
    luminousFluxLm: number;
}

export interface LampMaterial {
    key: MaterialKey;
    customDescription?: string;
}

export interface LampItem {
    slug: string;
    name: string;
    description: string;

    presentationImage: string;
    presentationVideo: string;

    galleryImages: [string, string, string];

    nameImage: string;
    transparentImage: string;

    dimensions: LampDimension[];

    material: LampMaterial;

    lighting: LampLighting;

    purchaseLink: string;
    purchaseChannel: "whatsapp" | "mercadolibre";
    purchaseLabel?: string;
}

export const LAMP_ITEMS: LampItem[] = [
    {
        slug: "bruma",
        name: "Bruma",
        description: "Diseñada para transmitir una sensación de calma y suavidad mediante  su diseño orgánico. \n" +
            "\n" +
            "Bruma, en conjunto a su tono de iluminación cálido nos traslada hacia una atmósfera  de relajo  y bienestar que  envuelve.",

        presentationImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1762906842/Bruma_bydopk.png",
        presentationVideo: "https://res.cloudinary.com/dnjarfszg/video/upload/v1773158899/Bruma_Presentacion_fizj7g.mp4",

        galleryImages: ["https://res.cloudinary.com/dnjarfszg/image/upload/v1762906842/Bruma_bydopk.png",
                        "https://res.cloudinary.com/dnjarfszg/image/upload/v1773159115/Bruma_2_x13pkx.png",
                        "https://res.cloudinary.com/dnjarfszg/image/upload/v1773159114/Bruma_3_oryyqo.png"],

        nameImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1773162390/Bruma_Nombre_n4ez9g.png",
        transparentImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1773159240/Bruma_Sin_Fondo_mcp83u.png",

        dimensions: [
            {
                height: "20 CM",
                diameter: "12 CM",
            },
        ],

        material: {
            key: "PLA+",
        },

        lighting: {
            powerWatts: 60,
            socketType: "E27",
            bulbType: "Foco de Luz LED cálida",
            luminousFluxLm: 806,
        },

        purchaseLink: "https://wa.me/c/51992266070",
        purchaseChannel: "whatsapp",
        purchaseLabel: "Adquirir Lámpara Bruma",
    },

    {
        slug: "minis",
        name: "Minis",
        description: "Nuestras lámparas en versión pequeña con un toque encantador y lleno de detalles. \n" +
            "\n" +
            "Perfectas para regalar, llevar en la mochila o la cartera, ambientar eventos especiales o utilizar como piezas de muestra y prototipos.",

        presentationImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1762906714/Mini_Lamparas_dhfkfs.png",
        presentationVideo: "https://res.cloudinary.com/dnjarfszg/video/upload/v1773159655/Minis_Presentacion_iposrl.mp4",

        galleryImages: ["https://res.cloudinary.com/dnjarfszg/image/upload/v1773159655/Minis_1_bzyldt.png",
                        "https://res.cloudinary.com/dnjarfszg/image/upload/v1773159654/Minis_2_ccppjx.png",
                        "https://res.cloudinary.com/dnjarfszg/image/upload/v1773159654/Minis_3_knrqnh.png"],

        nameImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1773162391/Minis_Nombre_nuekgc.png",
        transparentImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1773162024/Minis_Sin_Fondo_wfxgnh.png",

        dimensions: [
            {
                height: "8",
                diameter: "5",
            },
        ],

        material: {
            key: "PLA+",
        },

        lighting: {
            powerWatts: 60,
            bulbType: "Foco de Luz LED",
            luminousFluxLm: 806,
        },

        purchaseLink: "https://wa.me/c/51992266070",
        purchaseChannel: "whatsapp",
        purchaseLabel: "Adquirir Lámpara Minis",
    },

    {
        slug: "noma",
        name: "Noma",
        description: "Transmite la simplicidad y la calma; su forma curva y textura acanalada aportan calidez y armonía, integrándose con naturalidad a tus espacios, aportándoles un punto de luz sereno y atemporal.",

        presentationImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1762906679/Senda_wxcdwt.png",
        presentationVideo: "https://res.cloudinary.com/dnjarfszg/video/upload/v1773160181/Noma_Presentacion_b89lhi.mp4",

        galleryImages: ["https://res.cloudinary.com/dnjarfszg/image/upload/v1773160178/Noma_1_lusitk.png",
                        "https://res.cloudinary.com/dnjarfszg/image/upload/v1773160177/Noma_2_o53f7j.png",
                        "https://res.cloudinary.com/dnjarfszg/image/upload/v1773160177/Noma_3_g74gzu.png"],

        nameImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1773162392/Noma_Nombre_olj3el.png",
        transparentImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1773160241/Numa_Sin_Fondo_npkthe.png",

        dimensions: [
            {
                height: "22",
                diameter: "24",
            },
        ],

        material: {
            key: "PLA+",
        },

        lighting: {
            powerWatts: 60,
            socketType: "E27",
            bulbType: "Foco de Luz LED cálida",
            luminousFluxLm: 806,
        },

        purchaseLink: "https://wa.me/c/51992266070",
        purchaseChannel: "whatsapp",
        purchaseLabel: "Adquirir Lámpara Noma",
    },

    {
        slug: "luna",
        name: "Luna",
        description: "Diseñada para la Exposición de Diseño TDW 2025, esta pieza busca trasladar la esencia de un oasis de paz al interior del hogar.\n" +
            "\n" +
            "Su forma esférica y textura suave se asemejan a la serenidad de la luna llena, llenando cualquier espacio con una luz cálida y envolvente. Ideal para crear ambientes tranquilos, íntimos y llenos de encanto.",

        presentationImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1762906726/Luna_htk8em.png",
        presentationVideo: "https://res.cloudinary.com/dnjarfszg/video/upload/v1773160731/Luna_Presentacion_nztpaq.mp4",

        galleryImages: ["https://res.cloudinary.com/dnjarfszg/image/upload/v1773160731/Luna_1_nhk0zl.png",
                        "https://res.cloudinary.com/dnjarfszg/image/upload/v1773160731/Luna_2_iguicd.png",
                        "https://res.cloudinary.com/dnjarfszg/image/upload/v1773160730/Luna_3_pgrstt.png"],

        nameImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1773162387/Luna_Nombre_wzpiqk.png",
        transparentImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1773160728/Luna_Sin_Fondo_mrnmxn.png",

        dimensions: [
            {
                height: "18",
                diameter: "18",
            },
        ],

        material: {
            key: "PLA+",
        },

        lighting: {
            powerWatts: 60,
            socketType: "E27",
            bulbType: "Foco de Luz LED cálida",
            luminousFluxLm: 806,
        },

        purchaseLink: "https://wa.me/c/51992266070",
        purchaseChannel: "whatsapp",
        purchaseLabel: "Adquirir Lámpara Luna",
    },

    {
        slug: "oasis",
        name: "Oasis",
        description: "Diseñada exclusivamente para la Exposición de Diseño TDW 2025, en colaboración con la Arq. Bárbara Ysu, esta pieza busca trasladar la esencia de un oasis de paz al interior del hogar.\n" +
            "\n" +
            " Su forma curva y textura acanalada evocan las ondulaciones naturales del Bosque Cañoncillo, ubicado en el departamento de La Libertad, reinterpretando su paisaje en un objeto de luz y calma.",

        presentationImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1762906690/Oasis_tzihyn.png",
        presentationVideo: "https://res.cloudinary.com/dnjarfszg/video/upload/v1773160980/Oasis_Presentacion_wzfzfv.mp4",

        galleryImages: ["https://res.cloudinary.com/dnjarfszg/image/upload/v1773160977/Oasis_1_l9qbe8.png",
                        "https://res.cloudinary.com/dnjarfszg/image/upload/v1773160978/Oasis_2_xdrudw.png",
                        "https://res.cloudinary.com/dnjarfszg/image/upload/v1773160978/Oasis_3_lmejar.png"],

        nameImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1773162388/Oasis_Nombre_ph9pkq.png",
        transparentImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1773160976/Oasis_Sin_Fondo_iisoig.png",

        dimensions: [
            {
                label: "Oasis Regular",
                height: "22",
                diameter: "22",
            },
            {
                label: "Oasis Pequeño",
                height: "17",
                diameter: "17",
            },
        ],

        material: {
            key: "PLA+",
        },

        lighting: {
            powerWatts: 60,
            socketType: "E27",
            bulbType: "Foco de Luz LED cálida",
            luminousFluxLm: 806,
        },

        purchaseLink: "https://wa.me/c/51992266070",
        purchaseChannel: "whatsapp",
        purchaseLabel: "Adquirir Lámpara Oasis",
    },

    {
        slug: "senda",
        name: "Senda",
        description: "Nuestro diseño representa el camino suave y natural que guía hacia la luz. \n" +
            "\n" +
            "Esa luz cálida con textura delicada que invita a la calma, transformando el espacio en un refugio sereno.",

        presentationImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1762906702/Noma_zshsua.png",
        presentationVideo: "https://res.cloudinary.com/dnjarfszg/video/upload/v1773161443/Senda_Presentacion_ruyyod.mp4",

        galleryImages: ["https://res.cloudinary.com/dnjarfszg/image/upload/v1773161443/Senda_1_dsuxeb.png",
                        "https://res.cloudinary.com/dnjarfszg/image/upload/v1762906702/Noma_zshsua.png",
                        "https://res.cloudinary.com/dnjarfszg/image/upload/v1773161444/Senda_3_kvuuhv.png"],

        nameImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1773162388/Senda_Nombre_ilnkgp.png",
        transparentImage: "https://res.cloudinary.com/dnjarfszg/image/upload/v1773161442/Senda_Sin_Fondo_wtejsi.png",

        dimensions: [
            {
                height: "20",
                diameter: "12",
            },
        ],

        material: {
            key: "PLA+",
        },

        lighting: {
            powerWatts: 60,
            socketType: "E27",
            bulbType: "Foco de Luz LED cálida",
            luminousFluxLm: 806,
        },

        purchaseLink: "https://wa.me/c/51992266070",
        purchaseChannel: "whatsapp",
        purchaseLabel: "Adquirir Lámpara Senda",
    },
];