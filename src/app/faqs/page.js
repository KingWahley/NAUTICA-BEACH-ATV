export default function FAQS() {
  const faqs = [
    { q: "What should I wear?", a: "Wear comfortable clothing and closed-toe shoes. Since this is a quad bike ride on a beach in Lagos, you may get dusty or sandy, so dress appropriately." },
    { q: "Is there an age limit?", a: "Children aged 9–12 can ride under supervision, while adults can ride independently." },
    { q: "Do I need experience?", a: "No prior experience is needed. Our team provides guidance before every ride." },
    { q: "Is it safe?", a: "Yes. Safety gear is provided and staff ensure a controlled riding environment." },
    { q: "Can I come with friends?", a: "Yes, group packages are available for friends and team outings." },
    { q: "Where are you located?", a: "Nautica Beach Resort, Elegushi, Lekki — one of the best spots for ATV rides in Lagos." },
    { q: "Do I need to book?", a: "Walk-ins are allowed, but booking ahead is recommended." },
    { q: "Is beach fee included?", a: "No, prices exclude the beach entrance fee." },
  ];

  return (
    <main className="flex-1 w-full pt-[200px] px-8 max-w-[1600px] mx-auto pb-24">
      <h1 className="font-archivo text-[12vw] uppercase leading-[0.85] tracking-[-0.04em] mb-16 selection:bg-brand-black selection:text-brand-orange">
        FAQS
      </h1>
      <div className="space-y-4 max-w-5xl mx-auto">
        {faqs.map((faq, i) => (
          <div key={i} className="border-2 border-brand-black p-8 lg:p-12 bg-brand-white hover:bg-brand-black hover:text-white transition-colors cursor-pointer group">
            <h2 className="font-archivo text-2xl md:text-3xl uppercase mb-4 text-brand-orange">{faq.q}</h2>
            <p className="font-mono text-sm md:text-base font-bold uppercase leading-loose">{faq.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
