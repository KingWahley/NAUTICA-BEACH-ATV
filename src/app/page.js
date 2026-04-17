import {
  ExperienceSection,
  HeroSection,
  MarqueeSection,
  ReviewSection,
} from "@/components/home";

export default function Home() {
  return (
    <main className="flex-1 w-full overflow-hidden">
      <HeroSection />
      <MarqueeSection />
      <ExperienceSection />
      <ReviewSection />
    </main>
  );
}
