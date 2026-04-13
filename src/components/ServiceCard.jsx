"use client";

import { ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';

export default function ServiceCard({ index, title, tags, image }) {
  const [isHovered, setIsHovered] = useState(false);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (imgRef.current && isHovered) {
      const x = e.clientX - 150; // Center the 300px wide image
      const y = e.clientY - 100; // Center the 200px tall image
      
      // Use direct DOM manipulation for high performance cursor tracking
      imgRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  return (
    <>
      <div 
        className="group relative w-full border-t border-white/20 transition-colors duration-300 hover:bg-white/5 cursor-pointer overflow-hidden px-8 py-12 flex flex-col md:flex-row items-baseline gap-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Mobile Background Image */}
        {image && (
          <div 
            className="absolute inset-0 z-0 md:hidden opacity-30 object-cover transition-opacity duration-300 group-hover:opacity-50"
            style={{ 
              backgroundImage: `url(${image})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center'
            }}
          />
        )}

        {/* Index */}
        <div className="relative z-10 font-mono text-brand-white text-xl font-bold shrink-0 w-24">
          {index < 10 ? `0${index}` : index}
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col gap-6 transition-transform duration-300 group-hover:translate-x-4">
          <h3 className="font-archivo text-[7vw] leading-[0.85] uppercase tracking-[-0.04em] text-white m-0">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase font-bold text-brand-black">
            {tags.map((tag, i) => (
              <span key={i} className="bg-brand-orange px-4 py-2 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Reveal Arrow */}
        <div className="relative z-10 text-brand-white transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 group-hover:-rotate-45 ml-auto self-center pl-8 md:pl-0">
          <ArrowRight className="w-12 h-12 md:w-20 md:h-20" strokeWidth={3} />
        </div>
      </div>

      {/* Floating Image Reveal (Visible on Desktop only) */}
      {image && (
        <div 
          ref={imgRef}
          className={`fixed top-0 left-0 w-[300px] h-[200px] pointer-events-none z-[100] transition-all duration-[400ms] ease-out hidden md:block ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          style={{ willChange: 'transform' }}
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover outline outline-2 outline-brand-black shadow-2xl rounded-sm"
          />
        </div>
      )}
    </>
  );
}
