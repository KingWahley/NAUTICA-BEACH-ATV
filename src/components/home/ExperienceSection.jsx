import ServiceCard from "@/components/ServiceCard";

export default function ExperienceSection() {
  const experiences = [
    { title: "ATV Rides", tags: ["Individual", "Fun", "Fast"], image: "/images/IMG_0471.JPG" },
    { title: "Group Rides", tags: ["Friends", "Packages", "Deals"], image: "/images/IMG_0473.JPG" },
    { title: "Beach Adventure", tags: ["Scenic", "Ocean", "Vibrant"], image: "/images/IMG_0481.JPG" },
    { title: "Corporate Bonding", tags: ["Teams", "Outings", "Events"], image: "/images/IMG_0483.JPG" }
  ];

  return (
    <section className="bg-brand-ocean text-white py-24 mb-24 selection:bg-brand-orange selection:text-brand-black">
      <div className="max-w-[1600px] mx-auto relative">
        {experiences.map((svc, i) => (
          <ServiceCard key={i} index={i + 1} title={svc.title} tags={svc.tags} image={svc.image} />
        ))}
        <div className="border-t border-white/20 w-full" />
      </div>
    </section>
  );
}
