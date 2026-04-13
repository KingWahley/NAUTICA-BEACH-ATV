import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 font-mono text-[12px]">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/" className="font-archivo text-2xl uppercase tracking-[-0.04em] leading-none pointer-events-auto text-brand-black">
          Nautica
        </Link>

        {/* Floating Pill Navigation */}
        <div className="bg-brand-black text-brand-white rounded-full px-8 py-3 flex gap-8 items-center pointer-events-auto border-2 border-brand-black hidden md:flex">
          <Link href="/book-now" className="hover:bg-brand-white hover:text-brand-black px-3 py-1 rounded transition-colors uppercase font-bold tracking-[-0.02em]">Book Now</Link>
          <Link href="/about" className="hover:bg-brand-white hover:text-brand-black px-3 py-1 rounded transition-colors uppercase font-bold tracking-[-0.02em]">About</Link>
          <Link href="/rules" className="hover:bg-brand-white hover:text-brand-black px-3 py-1 rounded transition-colors uppercase font-bold tracking-[-0.02em]">Rules</Link>
          <Link href="/contact-us" className="hover:bg-brand-white hover:text-brand-black px-3 py-1 rounded transition-colors uppercase font-bold tracking-[-0.02em]">Contact</Link>
        </div>

        {/* Social Icons Placeholder */}
        <div className="font-bold pointer-events-auto flex gap-4 uppercase">
          <a href="#" className="hover:text-white">TW</a>
          <a href="#" className="hover:text-white">IG</a>
        </div>
      </div>
    </nav>
  );
}
