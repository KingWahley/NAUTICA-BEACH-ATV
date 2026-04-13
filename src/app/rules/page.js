export default function Rules() {
  const rules = [
    "Helmet is compulsory at all times",
    "Damage to ATV attracts ₦200,000 penalty",
    "Follow all staff instructions",
    "No stunts or reckless riding",
    "Stay within designated areas",
    "Only one rider per bike unless permitted",
  ];
  return (
    <main className="flex-1 w-full pt-[200px] px-8 max-w-[1600px] mx-auto pb-24">
      <h1 className="font-archivo text-[12vw] uppercase leading-[0.85] tracking-[-0.04em] mb-16 selection:bg-brand-black selection:text-brand-orange">
        RULES
      </h1>
      <ul className="space-y-8 font-mono text-xl lg:text-3xl uppercase font-bold pr-4 max-w-5xl">
        {rules.map((rule, i) => (
          <li key={i} className="flex gap-6 items-start border-b-2 border-brand-black pb-4 hover:translate-x-4 transition-transform text-brand-black">
            <span className="text-brand-white bg-brand-black px-2 py-1 text-sm rounded">0{i+1}</span>
            {rule}
          </li>
        ))}
      </ul>
    </main>
  );
}
