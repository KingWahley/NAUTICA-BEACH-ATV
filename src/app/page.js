import HeroSection from "@/components/home/HeroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main className="flex-1 w-full overflow-hidden">
      <HeroSection />
      <MarqueeSection />
      <ExperienceSection />
      <CTASection />
    </main>
  );
}
