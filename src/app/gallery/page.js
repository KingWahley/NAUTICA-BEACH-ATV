import Image from "next/image";

export default function Gallery() {
  const images = [
    "/images/IMG_0471.JPG",
    "/images/IMG_0472.JPG",
    "/images/IMG_0473.JPG",
    "/images/IMG_0474.JPG",
    "/images/IMG_0475.JPG",
    "/images/IMG_0476.JPG",
    "/images/IMG_0477.JPG",
    "/images/IMG_0478.JPG",
    "/images/IMG_0479.JPG",
    "/images/IMG_0480.JPG",
    "/images/IMG_0481.JPG",
    "/images/IMG_0482.JPG",
    "/images/IMG_0483.JPG",
    "/images/IMG_0484.JPG",
    "/images/IMG_0485.JPG",
    "/images/IMG_0486.JPG",
    "/images/eZy Watermark_31-08-2023_09-59-33-2630AM.JPG",
    "/images/hero.JPG",
  ];

  return (
    <main className="flex-1 w-full pt-[200px] px-8 max-w-[1600px] mx-auto pb-24">
      <h1 className="font-archivo text-[12vw] uppercase leading-[0.85] tracking-[-0.04em] mb-16 selection:bg-brand-black selection:text-brand-orange text-center">
        GALLERY
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative aspect-square bg-brand-black border-2 border-brand-black flex items-center justify-center transition-all hover:scale-[1.02] duration-300 overflow-hidden"
          >
            <Image
              src={src}
              alt={`Gallery Image ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
