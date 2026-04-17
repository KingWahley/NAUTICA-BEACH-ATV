import MarqueeRow from "@/components/home/MarqueeRow";
import { marqueeRows } from "@/components/home/content";

export default function MarqueeSection() {
  return (
    <section className="bg-brand-black  outline-2 outline-brand-black w-[110vw] -ml-[5vw] -skew-y-2 py-8 my-4 overflow-hidden relative z-10 selection:bg-brand-orange selection:text-brand-black">
      <div className="flex flex-col gap-2 font-archivo text-[6vw] leading-none uppercase whitespace-nowrap tracking-[-0.04em]">
        {marqueeRows.map((row) => (
          <MarqueeRow
            key={row.items}
            className={row.className}
            animationClassName={row.animationClassName}
            items={row.items}
          />
        ))}
      </div>
    </section>
  );
}
