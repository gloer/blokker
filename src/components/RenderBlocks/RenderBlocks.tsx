import { CallToActionBlockType } from "@/payload-types";
import { Block } from "payload";
import CallToActionComponent from "../CallToActionComponent/CallToActionComponent";

export type RenderBlocksType = {
    blocks: CallToActionBlockType[];
};

export default function RenderBlocks({ blocks }: RenderBlocksType) {
    return (
        <>
            {
                blocks.map(block => {
                    switch (block.blockType) {
                        case "call-to-action-block": {
                            return (
                                <CallToActionComponent
                                    key={block.id}
                                    title={block.title}
                                    content={block.content}
                                    imgSrc={block.imgSrc}
                                    buttonText={block.buttonText}
                                    buttonLink={block.buttonLink}
                                />
                            )
                        }
                        default: {
                            return null;
                        }
                    }
                })
            }
        </>
    );
}