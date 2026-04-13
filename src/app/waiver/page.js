export default function Waiver() {
  return (
    <main className="flex-1 w-full pt-[200px] px-8 max-w-[1600px] mx-auto pb-24">
      <h1 className="font-archivo text-[12vw] uppercase leading-[0.85] tracking-[-0.04em] mb-16 selection:bg-brand-black selection:text-brand-orange break-words">
        WAIVER
      </h1>
      <div className="border-2 border-brand-black p-8 lg:p-16 bg-brand-white font-mono text-lg lg:text-3xl font-bold uppercase leading-loose text-center shadow-[16px_16px_0_0_#FF4D00]">
        By participating in ATV activities, you acknowledge the risks involved and agree to follow all safety guidelines. Leisure Sports ATV is not liable for injuries or damages resulting from participation. A waiver must be signed before riding.
        <div className="mt-12">
            <button className="bg-brand-black text-brand-white px-12 py-6 rounded-full uppercase hover:scale-110 transition-transform">
                I AGREE
            </button>
        </div>
      </div>
    </main>
  );
}
