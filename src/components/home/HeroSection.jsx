"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HeroActions from "@/components/home/HeroActions";
import HeroMeta from "@/components/home/HeroMeta";
import { heroContent } from "@/components/home/content";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Entrance animation
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children || [], {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5,
      });

      // Parallax effect
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100vh] pt-[88px] md:pt-[120px] pb-6 flex flex-col justify-center md:justify-end px-8 uppercase overflow-hidden"
    >
      <div className="absolute inset-0 z-0 scale-110">
        <Image
          ref={imageRef}
          src={heroContent.image}
          alt="Nautica Beach ATV Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-brand-orange/10 backdrop-blur-xs z-0" />

      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-[1600px] mx-auto h-auto md:h-full flex flex-col justify-end"
      >
        <h1 className="font-archivo text-5xl leading-[0.85] tracking-[-0.04em] text-center w-full break-words mb-6 selection:bg-brand-black text-brand-white mt-0 md:mt-auto md:text-7xl">
          {heroContent.title}
        </h1>

        <div
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
        </div>

        <div>
          <HeroActions
            primaryAction={heroContent.primaryAction}
            secondaryAction={heroContent.secondaryAction}
          />
        </div>

        <div>
          <HeroMeta
            location={heroContent.meta.location}
            category={heroContent.meta.category}
          />
        </div>
      </div>
    </section>
  );
}
