import ServiceCard from "@/components/ServiceCard";

export default function ExperienceList({ items }) {
  return (
    <>
      {items.map((experience, index) => (
        <ServiceCard
          key={experience.title}
          index={index + 1}
          title={experience.title}
          tags={experience.tags}
          image={experience.image}
        />
      ))}
    </>
  );
}
