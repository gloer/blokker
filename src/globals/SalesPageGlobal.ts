import { CallToActionBlock } from "@/blocks/CallToActionBlock";
import { GlobalConfig } from "payload";

export const SalesPageGlobal: GlobalConfig = {
    slug: "sales-page-global",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "layout",
            label: "Layout elements",
            type: "blocks",
            blocks: [CallToActionBlock],
        }
    ],
};