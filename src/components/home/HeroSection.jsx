"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.22]);
  const overlayY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.12]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100vh] pt-[100px] md:pt-[120px] pb-6 flex flex-col justify-end px-8 uppercase overflow-hidden"
    >
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={heroContent.image}
          alt="Nautica Beach ATV Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        style={{ y: overlayY }}
        className="absolute inset-0 bg-brand-orange/10 backdrop-blur-xs z-0"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        variants={heroContentVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[1600px] mx-auto h-full flex flex-col justify-end"
      >
        <motion.h1
          variants={heroItemVariants}
          className="font-archivo text-7xl leading-[0.85] tracking-[-0.04em] text-center w-full break-words mb-6 selection:bg-brand-black selection:text-brand-orange mt-auto"
        >
          {heroContent.title}
        </motion.h1>

        <motion.div
          variants={heroItemVariants}
          className="text-center font-mono font-bold text-xs md:text-sm mb-6 max-w-2xl mx-auto text-brand-black leading-loose"
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
