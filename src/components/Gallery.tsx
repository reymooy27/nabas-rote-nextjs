import AnimateOnScroll from "./AnimateOnScroll";

interface GalleryImg {
  id: string;
  imageUrl: string;
  altText: string | null;
  isTall: boolean;
  isWide: boolean;
}

interface GalleryProps {
  images: GalleryImg[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <section id="gallery" className="py-25 bg-cream max-md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="eyebrow text-gold mb-2 text-center">Galeri</p>
        <h2
          className="font-[Playfair_Display] text-spice-deep font-bold mb-12 text-center"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.2 }}
        >
          Suasana & Hidangan
        </h2>
        <div
          className="grid grid-cols-3 gap-4 auto-rows-[220px] max-md:grid-cols-2 max-md:auto-rows-[180px] max-[560px]:grid-cols-1 max-[560px]:auto-rows-[200px]"
        >
          {images.map((img, i) => (
            <AnimateOnScroll
              key={img.id}
              delay={(i % 3) * 0.1}
              className={`rounded-xl overflow-hidden cursor-pointer ring-1 ring-gold/15 ${
                img.isTall ? "row-span-2 max-[560px]:row-span-1" : ""
              } ${img.isWide ? "col-span-2 max-md:col-span-1" : ""}`}
            >
              <img
                src={img.imageUrl}
                alt={img.altText || ""}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
