import ScrollIndicator from "@/components/ScrollIndicator";

export default function HeroMeta({ location, category }) {
  return (
    <div className="border-t-2 text-brand-black font-bold border-brand-black w-full grid grid-cols-2 md:grid-cols-3 items-center pt-4 gap-4 shrink-0">
      <div className="font-mono text-[10px] md:text-[12px] font-bold">
        {location[0]}
        <br />
        {location[1]}
      </div>

      <div className="justify-center hidden md:flex">
        <div className="scale-60 origin-top relative -mt-1">
          <ScrollIndicator />
        </div>
      </div>

      <div className="font-mono text-[10px] md:text-[12px] font-bold text-right">
        {category[0]}
        <br />
        {category[1]}
      </div>
    </div>
  );
}
