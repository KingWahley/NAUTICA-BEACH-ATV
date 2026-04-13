export default function Gallery() {
  return (
    <main className="flex-1 w-full pt-[200px] px-8 max-w-[1600px] mx-auto pb-24">
      <h1 className="font-archivo text-[12vw] uppercase leading-[0.85] tracking-[-0.04em] mb-16 selection:bg-brand-black selection:text-brand-orange text-center">
        GALLERY
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square bg-brand-black border-2 border-brand-black flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:scale-[1.02] duration-300">
                <span className="font-mono text-white/50 text-sm uppercase font-bold tracking-widest text-center">Image<br/>Placeholder {i+1}</span>
            </div>
        ))}
      </div>
    </main>
  );
}
