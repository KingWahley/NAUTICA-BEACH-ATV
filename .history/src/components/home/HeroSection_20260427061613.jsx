"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroActions from "@/components/home/HeroActions";
import HeroMeta from "@/components/home/HeroMeta";
import { heroContent } from "@/components/home/content";

const heroContentVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.14,
    },
  },
};

const heroItemVariants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] pt-[88px] md:pt-[120px] pb-6 flex flex-col justify-center md:justify-end px-8 uppercase overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroContent.image}
          alt="Nautica Beach ATV Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-brand-orange/10 backdrop-blur-xs z-0" />

      <motion.div
        variants={heroContentVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[1600px] mx-auto h-auto md:h-full flex flex-col justify-end"
      >
        <motion.h1
          variants={heroItemVariants}
          className="font-archivo text-5xl leading-[0.85] tracking-[-0.04em] text-center w-full break-words mb-6 selection:bg-brand-black text-brand-white mt-0 md:mt-auto md:text-7xl"
        >
          {heroContent.title}
        </motion.h1>

        <motion.div
          variants={heroItemVariants}
          className="text-center font-mono font-extrabold text-xs md:text-sm mb-6 max-w-2xl mx-auto text-brand-black leading-loose bg-white/60 px-4 py-3 rounded-2xl md:bg-transparent md:px-0 md:py-0 md:rounded-none"
          style={{
            textShadow: `
            0 0 1px #fff,
            0 0 2px #fff,
            0 0 3px #fff
    `,
          }}
        >
          {heroContent.description}
        </motion.div>

        <motion.div variants={heroItemVariants}>
          <HeroActions
            primaryAction={heroContent.primaryAction}
            secondaryAction={heroContent.secondaryAction}
          />
        </motion.div>

        <motion.div variants={heroItemVariants}>
          <HeroMeta
            location={heroContent.meta.location}
            category={heroContent.meta.category}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
