import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 uppercase pb-24 selection:bg-brand-black selection:text-brand-orange">
      <h2 className="font-archivo text-[14vw] leading-[0.85] tracking-[-0.04em]">
        READY TO<br />RIDE?
      </h2>
      <Link href="/book-now" className="mt-16 bg-brand-black text-brand-white rounded-full font-mono font-bold text-2xl tracking-[-0.02em] px-16 py-8 transition-transform duration-300 hover:scale-110 hover:bg-brand-white hover:text-brand-black border-2 border-brand-black">
        BOOK SESSION
      </Link>
    </section>
  );
}
