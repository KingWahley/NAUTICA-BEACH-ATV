import Link from "next/link";

export default function HeroActions({ primaryAction, secondaryAction }) {
  return (
    <div className="flex justify-center gap-4 font-mono mb-8 relative z-20 flex-wrap shrink-0">
      <Link
        href={primaryAction.href}
        className="bg-brand-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-white hover:text-brand-black transition-colors border-2 border-brand-black border-solid pointer-events-auto text-sm md:text-base"
      >
        {primaryAction.label}
      </Link>
      <Link
        href={secondaryAction.href}
        className="bg-transparent text-brand-black px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-brand-black hover:text-white transition-colors border-2 border-brand-black border-solid pointer-events-auto text-sm md:text-base backdrop-blur-sm bg-white/10"
      >
        {secondaryAction.label}
      </Link>
    </div>
  );
}
