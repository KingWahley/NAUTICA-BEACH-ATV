import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ index, title, tags }) {
  return (
    <div className="group relative w-full border-t border-white/20 transition-colors duration-300 hover:bg-white/5 cursor-pointer overflow-hidden px-8 py-12 flex flex-col md:flex-row items-baseline gap-8">
      {/* Index */}
      <div className="font-mono text-brand-orange text-xl font-bold shrink-0 w-24">
        {index < 10 ? `0${index}` : index}
      </div>
      
      {/* Content */}
      <div className="flex-1 flex flex-col gap-6 transition-transform duration-300 group-hover:translate-x-4">
        <h3 className="font-archivo text-[7vw] leading-[0.85] uppercase tracking-[-0.04em] text-white m-0">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase font-bold text-brand-black">
          {tags.map((tag, i) => (
            <span key={i} className="bg-brand-ocean px-4 py-2 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Reveal Arrow */}
      <div className="text-brand-orange opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-rotate-45 ml-auto self-center pl-8">
        <ArrowRight className="w-20 h-20" strokeWidth={3} />
      </div>
    </div>
  );
}
