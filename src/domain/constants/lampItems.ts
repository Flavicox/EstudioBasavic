// src/domain/constants/lampItems.ts
export interface LampItem {
    imageSrc: string;
    title: string;
    href?: string;
}

export const LAMP_ITEMS: LampItem[] = [
    {
        imageSrc: "https://res.cloudinary.com/dnjarfszg/image/upload/v1762906842/Bruma_bydopk.png",
        title: "BRUMA",
    },
    {
        imageSrc: "https://res.cloudinary.com/dnjarfszg/image/upload/v1762906679/Senda_wxcdwt.png",
        title: "SENDA",
    },
    {
        imageSrc: "https://res.cloudinary.com/dnjarfszg/image/upload/v1762906702/Noma_zshsua.png",
        title: "NUMA",
    },
    {
        imageSrc: "https://res.cloudinary.com/dnjarfszg/image/upload/v1762906690/Oasis_tzihyn.png",
        title: "OASIS",
    },
    {
        imageSrc: "https://res.cloudinary.com/dnjarfszg/image/upload/v1762906726/Luna_htk8em.png",
        title: "LUNA",
    },
    {
        imageSrc: "https://res.cloudinary.com/dnjarfszg/image/upload/v1762906714/Mini_Lamparas_dhfkfs.png",
        title: "MINI LÁMPARAS",
    },
];