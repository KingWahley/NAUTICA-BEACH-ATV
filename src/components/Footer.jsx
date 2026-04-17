import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t-2 border-brand-black bg-brand-white text-brand-black font-mono text-[12px] p-8 flex flex-col lg:flex-row justify-between items-center uppercase font-bold mt-auto lg:h-[100px] gap-6 text-center lg:text-left selection:bg-brand-black selection:text-brand-orange">
      <div className="shrink-0">© {new Date().getFullYear()} LEISURE SPORTS ATV</div>
      
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 flex-wrap justify-center">
        <span>09133333436</span>
        <span>Leisuresportsatv@gmail.com</span>
        <span>Nautica Beach Resort, Elegushi</span>
      </div>
      
      <div className="flex gap-4 lg:gap-8 flex-wrap justify-center shrink-0 mt-4 lg:mt-0">
        <Link href="/gallery" className="hover:underline">Gallery</Link>
        <Link href="/faqs" className="hover:underline">FAQS</Link>
        <Link href="/waiver" className="hover:underline">Waiver</Link>
        <Link href="/testimonials" className="hover:underline">Reviews</Link>
      </div>
    </footer>
  );
}
