import Link from 'next/link';
import ScrollIndicator from "@/components/ScrollIndicator";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] pt-[100px] md:pt-[120px] pb-6 flex flex-col justify-end px-8 uppercase overflow-hidden">
      {/* Background Image */}
      <img 
        src="/images/hero.JPG"
        alt="Nautica Beach ATV Background"
        className="absolute   inset-0 w-full h-full object-cover z-0"
      />
      
    
    <div className="absolute  inset-0 bg-brand-orange/10 backdrop-blur-xs z-0"></div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto h-full flex flex-col justify-end">
        <h1 className="font-archivo text-7xl leading-[0.85] tracking-[-0.04em] text-center w-full break-words mb-6 selection:bg-brand-black selection:text-brand-orange mt-auto">
          NAUTICA BEACH ATV
        </h1>
        
        <div className="text-center font-mono font-bold text-xs md:text-sm mb-6 max-w-2xl mx-auto text-brand-black leading-loose">
          PREMIUM ATV EXPERIENCE — FAST, FUN, AND UNFORGETTABLE ATV RIDES IN A VIBRANT BEACH SETTING. PERFECT FOR FRIENDS, FAMILIES, AND GROUP OUTINGS LOOKING FOR ADVENTURE AND FUN.
        </div>

        <div className="flex justify-center gap-4 font-mono mb-8 relative z-20 flex-wrap shrink-0">
            <Link href="/book-now" className="bg-brand-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-white hover:text-brand-black transition-colors border-2 border-brand-black border-solid pointer-events-auto text-sm md:text-base">
                BOOK NOW
            </Link>
            <Link href="/book-now" className="bg-transparent text-brand-black px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-brand-black hover:text-white transition-colors border-2 border-brand-black border-solid pointer-events-auto text-sm md:text-base backdrop-blur-sm bg-white/10">
                VIEW PACKAGES
            </Link>
        </div>
        
        <div className="border-t-2 border-brand-black w-full grid grid-cols-2 md:grid-cols-3 items-center pt-4 gap-4 shrink-0">
          <div className="font-mono text-[10px] md:text-[12px] font-bold">
            [ LOCATED IN LAGOS ]<br />
            NAUTICA BEACH RESORT
          </div>
          
          <div className="flex justify-center hidden md:flex">
            {/* Using a smaller wrapper to constrain the ScrollIndicator visual footprint */}
            <div className="scale-60 origin-top relative -mt-1">
               <ScrollIndicator />
            </div>
          </div>
          
          <div className="font-mono text-[10px] md:text-[12px] font-bold text-right">
            LEISURE SPORTS<br />
            THRILLS & ADVENTURE
          </div>
        </div>
      </div>
    </section>
  );
}
