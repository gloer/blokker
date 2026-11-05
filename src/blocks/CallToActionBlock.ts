import { Block } from "payload";

export const CallToActionBlock: Block = {
    slug: "call-to-action-block",
    interfaceName: "CallToActionBlockType",
    labels: {
        singular: "Call to action block",
        plural: "Call to action blocks",
    },
    fields: [
        {
            name: "title",
            type: "text",
            label: "Tittel",
            required: true,
        },
        {
            name: "content",
            label: "Innhold",
            type: "textarea",
            required: true,            
        },
        {
            name: "imgSrc",
            label: "URL til bilde",
            type: "text",
            required: true,
        },
        {
            name: "buttonText",
            label: "Tekst til knappen",
            type: "text",
            required: true,
        },
        {
            name: "buttonLink",
            label: "URL knappen skal lede deg til",
            type: "text",
            required: true,
        }


    ],
};

/*  imgSrc: string;
    title: string;
    content: string;
    buttonText: string;
    buttonLink: string; */