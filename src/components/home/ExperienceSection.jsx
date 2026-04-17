"use client";

import { motion } from "framer-motion";
import ExperienceList from "@/components/home/ExperienceList";
import { experiences } from "@/components/home/content";

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

export default function ExperienceSection() {
  return (
    <section className="bg-brand-white text-white py-2 sm:py-8 mb-24 selection:bg-brand-orange selection:text-brand-black">
      <motion.div
        className="max-w-[1600px] mx-auto relative"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <ExperienceList items={experiences} />
        <div className="border-t border-white/20 w-full" />
      </motion.div>
    </section>
  );
}
