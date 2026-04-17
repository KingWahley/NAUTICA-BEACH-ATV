"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { reviews } from "@/components/home/content";

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
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

export default function ReviewSection() {
  return (
    <section className="relative overflow-hidden bg-brand-orange px-4 py-24 uppercase selection:bg-brand-black selection:text-brand-orange md:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-brand-black/20" />

      <motion.div
        className="mx-auto flex w-full max-w-[1600px] flex-col gap-14"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid gap-8 border-2 border-brand-black bg-brand-white/20 p-6 backdrop-blur-sm md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <motion.div variants={cardVariants}>
            <p className="font-mono text-[11px] font-bold tracking-[0.28em] text-brand-black/70">
              REAL RIDER ENERGY
            </p>
            <h2 className="mt-4 max-w-4xl font-archivo text-[16vw] leading-[0.86] tracking-[-0.05em] text-brand-black md:text-[7vw]">
              WHAT THE
              <br />
              RIDERS SAY
            </h2>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="flex flex-col justify-between gap-6 border-t-2 border-brand-black pt-6 md:border-l-2 md:border-t-0 md:pl-8 md:pt-0"
          >
            <p className="max-w-xl font-mono text-sm font-bold leading-7 text-brand-black">
              FAST RIDES. CLEAN SETUP. BEACH-SIDE MOMENTS PEOPLE ACTUALLY TALK
              ABOUT AFTERWARD.
            </p>
            <Link
              href="/testimonials"
              className="w-fit rounded-full border-2 border-brand-black bg-brand-black px-6 py-3 font-mono text-sm font-bold text-brand-white transition-colors duration-300 hover:bg-transparent hover:text-brand-black"
            >
              BOOK RIDE
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.author}
              variants={cardVariants}
              className="group relative flex min-h-[200px] flex-col justify-between border-2 border-brand-black bg-brand-white p-6 shadow-[10px_10px_0_0_#000000] transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between gap-4 border-b-2 border-brand-black pb-4 font-mono text-[9px] font-bold tracking-[0.18em] text-brand-black">
                <span>{`0${index + 1}`}</span>
                <span className="rounded-full bg-brand-orange px-3 py-1">
                  {review.highlight}
                </span>
              </div>

              <p className="mt-6 font-archivo text-[1.35rem] leading-tight tracking-[-0.035em] text-brand-black md:text-[1.6rem]">
                &quot;{review.quote}&quot;
              </p>

              <div className="mt-6 flex items-end justify-between gap-4 border-t-2 border-brand-black pt-4 font-mono font-bold text-brand-black">
                <div>
                  <p className="text-sm">{review.author}</p>
                  <p className="text-[9px] tracking-[0.18em] text-brand-black/70">
                    {review.detail}
                  </p>
                </div>
                <div className="text-[1.7rem] leading-none text-brand-orange transition-transform duration-300 group-hover:rotate-12">
                  +
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
