"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 64,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardContentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const cardItemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServiceCard({ index, title, tags, image, href = "/book-now" }) {
  return (
    <Link href={href} className="block w-full">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
        className="group relative w-full border-t border-white/20 transition-colors duration-300 hover:bg-white/5 cursor-pointer hover:z-50 px-8 py-12 flex flex-col md:flex-row items-baseline gap-8"
      >
        {/* Mobile Background Image */}
        {image && (
          <div
            className="absolute inset-0 z-0 md:hidden opacity-30 transition-opacity duration-300 group-hover:opacity-50"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}

        {/* Index */}
        <motion.div
          variants={cardItemVariants}
          className="relative z-10 font-mono text-brand-orange text-xl font-bold shrink-0 w-24"
        >
          {index < 10 ? `0${index}` : index}
        </motion.div>

        {/* Content */}
        <motion.div
          variants={cardContentVariants}
          className="relative z-10 flex-1 flex flex-col gap-6 transition-transform duration-300 group-hover:translate-x-4"
        >
          <motion.h3
            variants={cardItemVariants}
            className="font-archivo text-5xl md:text-[7vw] leading-[0.85] uppercase tracking-[-0.04em] text-[#758BFD] m-0 md:max-w-[70%]"
          >
            {title}
          </motion.h3>
          <motion.div
            variants={cardContentVariants}
            className="flex flex-wrap gap-2 font-mono text-[10px] uppercase font-bold text-brand-black"
          >
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                variants={cardItemVariants}
                className="bg-brand-white px-4 py-2 rounded-full"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Static Image Reveal (Visible on Desktop only) */}
        {image && (
          <div className="absolute right-0 md:right-32 lg:right-29 top-1/2 -translate-y-1/2 w-[300px] h-[200px] pointer-events-none z-20 transition-all duration-[500ms] ease-out hidden md:block opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
            <Image
              src={image}
              alt={title}
              fill
              sizes="300px"
              className="w-full h-full object-cover outline outline-2 outline-brand-black shadow-2xl rounded-sm"
            />
          </div>
        )}

        {/* Reveal Arrow */}
        <motion.div
          variants={cardItemVariants}
          className="relative z-10 text-brand-orange transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 group-hover:-rotate-45 ml-auto self-center pl-8 md:pl-0"
        >
          <ArrowRight className="w-12 h-12 md:w-20 md:h-20" strokeWidth={3} />
        </motion.div>
      </motion.div>
    </Link>
  );
}
