export type MaterialKey = "PLA" | "PLA+";

export interface MaterialInfoItem {
    name: MaterialKey;
    description: string;
}

export const MATERIAL_INFO: Record<MaterialKey, MaterialInfoItem> = {
    PLA: {
        name: "PLA",
        description:
            "Ácido poliláctico, un bioplástico de origen renovable, ligero y versátil, ideal para piezas decorativas de acabado preciso.",
    },
    "PLA+": {
        name: "PLA+",
        description:
            "Ácido poliláctico con aditivos como carbonato de calcio (PLA+)",
    },
};