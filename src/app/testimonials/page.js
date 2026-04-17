export default function Testimonials() {
  const reviews = [
    "Amazing experience!",
    "Perfect for group outings",
    "Well organized and fun",
  ];

  return (
    <main className="flex-1 w-full pt-[200px] px-8 max-w-[1600px] mx-auto pb-24">
      <h1 className="font-archivo text-[10vw] uppercase leading-[0.85] tracking-[-0.04em] mb-16 selection:bg-brand-black selection:text-brand-orange text-center">
        TESTIMONIALS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review}
            className="border-2 border-brand-black p-12 bg-white flex flex-col justify-between shadow-[8px_8px_0_0_#FF4D00] hover:translate-y-[-8px] transition-transform"
          >
            <p className="font-archivo text-3xl uppercase leading-tight mb-8 text-brand-black">
              &quot;{review}&quot;
            </p>
            <div className="font-mono text-sm uppercase text-brand-orange font-bold text-right tracking-widest">
              - Guest
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
