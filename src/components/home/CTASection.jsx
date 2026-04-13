import Link from 'next/link';

export default function CTASection() {
  return (
    <section 
      className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center text-center px-4 uppercase py-24 bg-brand-black selection:bg-brand-orange selection:text-brand-black overflow-hidden"
      style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/basketball.png")' }}
    >
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="font-archivo text-[10vw] md:text-[8vw] leading-[0.85] tracking-[-0.04em] text-brand-orange">
          READY TO<br />RIDE?
        </h2>
        <Link href="/book-now" className="mt-10 md:mt-12 bg-brand-orange text-brand-black rounded-full font-mono font-bold text-lg md:text-xl tracking-[-0.02em] px-8 py-4 md:px-10 md:py-5 transition-transform duration-300 hover:scale-[1.05] hover:bg-transparent hover:text-brand-orange border-2 border-brand-white">
          BOOK SESSION
        </Link>
      </div>
    </section>
  );
}
