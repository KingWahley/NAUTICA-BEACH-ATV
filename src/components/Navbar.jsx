"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/book-now", label: "Book Now" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/faqs", label: "FAQ" },
  { href: "/rules", label: "Rules" },
  { href: "/waiver", label: "WAIVER" },
  { href: "/contact-us", label: "Contact" },
];

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -24,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.34,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    y: -18,
    scale: 0.97,
    transition: {
      duration: 0.24,
      ease: [0.4, 0, 1, 1],
      when: "afterChildren",
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const mobileItemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    rotate: -2,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 12,
    rotate: 1,
    transition: {
      duration: 0.18,
    },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActiveLink = (href) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[200] font-mono text-[12px] transition-all duration-300 ${
        isScrolled
          ? "bg-brand-black/95 text-brand-white backdrop-blur-md border-b-2 border-brand-black px-4 md:px-6 py-2.5"
          : "bg-transparent text-brand-black p-4 md:p-6"
      }`}
    >
      <div className="relative flex justify-between items-center w-full gap-4">
        <Link
          href="/"
          className="font-archivo text-2xl uppercase tracking-[-0.04em] leading-none pointer-events-auto shrink-0 relative z-20"
        >
          <Image
            src={isScrolled ? "/images/logo2.png" : "/images/logo.png"}
            alt="Logo"
            width={isScrolled ? 54 : 100}
            height={isScrolled ? 54 : 100}
          />
        </Link>

        <div
          className={`hidden md:flex items-center justify-center flex-wrap pointer-events-auto transition-all duration-300 ${
            isScrolled
              ? "gap-2 rounded-none border-0 bg-transparent px-0 py-0 text-brand-white"
              : "gap-2 rounded-full border-2 border-brand-black bg-brand-black px-6 py-3 text-brand-white"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActiveLink(item.href) ? "page" : undefined}
              className={`px-3 py-1 uppercase font-bold tracking-[-0.02em] whitespace-nowrap rounded transition-colors ${
                isActiveLink(item.href)
                  ? "text-brand-orange"
                  : isScrolled
                    ? "hover:bg-brand-orange hover:text-brand-black"
                    : "hover:bg-brand-white hover:text-brand-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex font-bold pointer-events-auto gap-4 uppercase shrink-0">
          <a href="#" className={isScrolled ? "hover:text-brand-orange" : "hover:text-white"}>
            TW
          </a>
          <a href="#" className={isScrolled ? "hover:text-brand-orange" : "hover:text-white"}>
            IG
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className={`md:hidden relative z-20 flex h-14 w-14 items-center justify-center border-2 transition-colors ${
            isMenuOpen || isScrolled
              ? "border-brand-white bg-brand-orange text-brand-black"
              : "border-brand-black bg-brand-black text-brand-white rounded-full"
          }`}
        >
          <div className="relative h-5 w-7">
            <span
              className={`absolute left-0 top-0 h-[3px] w-7 origin-center bg-current transition-transform duration-300 ${
                isMenuOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[8px] h-[3px] w-7 bg-current transition-all duration-200 ${
                isMenuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[16px] h-[3px] w-7 origin-center bg-current transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden absolute top-full left-0 right-0 mt-3 origin-top"
            >
              <div className="max-h-[calc(100dvh-7rem)] overflow-y-auto overflow-x-hidden overscroll-contain mobile-nav-scroll border-2 border-brand-black bg-brand-orange text-brand-black shadow-[10px_10px_0_0_#000000]">
                <div className="grid grid-cols-3 border-b-2 border-brand-black">
                  <div className="h-3 bg-brand-black" />
                  <div className="h-3 bg-brand-white border-x-2 border-brand-black" />
                  <div className="h-3 bg-brand-black" />
                </div>

                <div className="px-4 py-4">
                  <div className="mb-4 flex items-center justify-between border-2 border-brand-black bg-brand-white px-4 py-3">
                    <span className="font-archivo text-2xl leading-none">MENU</span>
                    <span className="text-[10px] font-bold tracking-[0.25em]">
                      ......
                    </span>
                  </div>

                  <motion.div className="grid gap-2">
                    {navItems.map((item, index) => (
                      <motion.div key={item.href} variants={mobileItemVariants}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          aria-current={isActiveLink(item.href) ? "page" : undefined}
                          className={`flex items-center justify-between border-2 border-brand-black px-4 py-4 transition-colors ${
                            isActiveLink(item.href)
                              ? "bg-brand-black text-brand-orange"
                              : "bg-brand-black text-brand-white hover:bg-brand-white hover:text-brand-black"
                          }`}
                        >
                          <span className="font-archivo text-2xl leading-none">
                            {item.label}
                          </span>
                          <span className="font-bold">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    variants={mobileItemVariants}
                    className="mt-4 grid grid-cols-2 gap-2"
                  >
                    <a
                      href="#"
                      className="border-2 border-brand-black bg-brand-white px-4 py-3 text-center font-bold tracking-[0.2em] transition-colors hover:bg-brand-black hover:text-brand-white"
                    >
                      TW
                    </a>
                    <a
                      href="#"
                      className="border-2 border-brand-black bg-brand-white px-4 py-3 text-center font-bold tracking-[0.2em] transition-colors hover:bg-brand-black hover:text-brand-white"
                    >
                      IG
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
