import ServiceCard from "@/components/ServiceCard";

export default function ExperienceSection() {
  const experiences = [
    { title: "ATV Rides", tags: ["Individual", "Fun", "Fast"] },
    { title: "Group Rides", tags: ["Friends", "Packages", "Deals"] },
    { title: "Beach Adventure", tags: ["Scenic", "Ocean", "Vibrant"] },
    { title: "Corporate Bonding", tags: ["Teams", "Outings", "Events"] }
  ];

  return (
    <section className="bg-brand-ocean text-white py-24 mb-24 selection:bg-brand-orange selection:text-brand-black">
      <div className="max-w-[1600px] mx-auto">
        {experiences.map((svc, i) => (
          <ServiceCard key={i} index={i + 1} title={svc.title} tags={svc.tags} />
        ))}
        <div className="border-t border-white/20 w-full" />
      </div>
    </section>
  );
}
