
export type CallToActionComponentProps = {
    imgSrc: string;
    title: string;
    content: string;
    buttonText: string;
    buttonLink: string;
};

export default function CallToActionComponent({ imgSrc, title, content, buttonText, buttonLink }: CallToActionComponentProps) {
    return (
        <section className="section section-yellow">
            <div className="container grid one-plus-two-columns large-gap">
                <div>
                    <img src={imgSrc} alt="" />
                </div>
                <div className="stack">
                    <h1 className="section-heading">{title}</h1>
                    <p>{content}</p>
                    <a className="button m-bs-xl" href={buttonLink}>{buttonText}</a>
                </div>
            </div>
        </section>
    );
}