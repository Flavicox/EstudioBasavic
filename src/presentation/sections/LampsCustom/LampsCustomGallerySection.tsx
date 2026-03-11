interface Props {
    images: string[];
}

export default function LampsCustomGallerySection({ images }: Props) {
    return (
        <section className="w-full">

            <div className="grid grid-cols-2 md:grid-cols-5">

                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`custom-${i}`}
                        className="w-full h-full object-cover"
                    />
                ))}

            </div>

        </section>
    );
}