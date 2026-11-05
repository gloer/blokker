import config from "@payload-config";
import { getPayload } from "payload";
import CallToActionComponent from "@/components/CallToActionComponent/CallToActionComponent";
import RenderBlocks from "@/components/RenderBlocks/RenderBlocks";


export default async function SalesPage() {
    const payload = await getPayload({ config });
    const page = await payload.findGlobal({
        slug: "sales-page-global"
    })

    if (!page || !page.layout) {
        throw new Error("Fant ikke noe her");
    }

    const blocks = page.layout;

    return (
        <>
            <header className="site-header">
                <a href="#" className="logo">BookDragons</a>
                <nav>
                    <a href="#">Om oss</a>
                    <a href="/salg">Salg!</a>
                    <a href="#">Logg inn</a>
                </nav>
            </header>
            <RenderBlocks blocks={blocks} />
        </>
    );
}