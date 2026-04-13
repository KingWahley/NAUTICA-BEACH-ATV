export default function MarqueeSection() {
  return (
    <section className="bg-brand-black outline outline-2 outline-brand-black w-[110vw] -ml-[5vw] -skew-y-2 py-16 my-24 overflow-hidden relative z-10 selection:bg-brand-orange selection:text-brand-black">
      <div className="flex flex-col gap-4 font-archivo text-[10vw] leading-none uppercase whitespace-nowrap tracking-[-0.04em]">
        <div className="text-brand-orange flex gap-8">
            <div className="animate-marquee flex gap-8 whitespace-nowrap shrink-0">
              <span>PREMIUM ATV EXPERIENCE • BEACH ADVENTURE •</span>
              <span>PREMIUM ATV EXPERIENCE • BEACH ADVENTURE •</span>
            </div>
            <div className="animate-marquee flex gap-8 whitespace-nowrap shrink-0" aria-hidden="true">
              <span>PREMIUM ATV EXPERIENCE • BEACH ADVENTURE •</span>
              <span>PREMIUM ATV EXPERIENCE • BEACH ADVENTURE •</span>
            </div>
        </div>
        <div className="text-white/80 flex gap-8 relative left-[-50%]">
            <div className="animate-marquee-reverse flex gap-8 whitespace-nowrap shrink-0">
              <span>FAST & UNFORGETTABLE • NO EXPERIENCE NEEDED •</span>
              <span>FAST & UNFORGETTABLE • NO EXPERIENCE NEEDED •</span>
            </div>
            <div className="animate-marquee-reverse flex gap-8 whitespace-nowrap shrink-0" aria-hidden="true">
              <span>FAST & UNFORGETTABLE • NO EXPERIENCE NEEDED •</span>
              <span>FAST & UNFORGETTABLE • NO EXPERIENCE NEEDED •</span>
            </div>
        </div>
      </div>
    </section>
  );
}
