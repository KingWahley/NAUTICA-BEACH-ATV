import Link from 'next/link';

export default function BookNow() {
  return (
    <main className="flex-1 w-full pt-[200px] px-8 max-w-[1600px] mx-auto pb-24" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png")' }}>
      <h1 className="font-archivo hidden sm:block text-[12vw] uppercase leading-[0.85] tracking-[-0.04em] mb-16 selection:bg-brand-black selection:text-brand-orange break-words">
        BOOK NOW
      </h1>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
        <div>
          <h2 className="font-archivo text-6xl uppercase tracking-[-0.02em] mb-8">Packages</h2>
          
          <div className="border-2 border-brand-black p-8 font-mono mb-8 uppercase font-bold text-sm bg-brand-white shadow-[8px_8px_0_0_#000]">
            <h3 className="font-archivo text-3xl mb-4 text-brand-orange">Individual Rides</h3>
            <div className="mb-8">
              <span className="border-b-2 border-brand-black pb-1 mb-4 inline-block text-lg">Adults</span>
              <ul className="space-y-4 text-base">
                <li className="flex justify-between border-b border-brand-black/20 pb-2"><span>1 Lap</span> <span>₦7,000</span></li>
                <li className="flex justify-between border-b border-brand-black/20 pb-2"><span>2 Laps</span> <span>₦12,500</span></li>
                <li className="flex justify-between border-b border-brand-black/20 pb-2"><span>3 Laps</span> <span>₦19,500</span></li>
              </ul>
            </div>
            <div>
              <span className="border-b-2 border-brand-black pb-1 mb-4 inline-block text-lg">Children (9–12 Years)</span>
              <ul className="space-y-4 text-base">
                <li className="flex justify-between border-b border-brand-black/20 pb-2"><span>1 Lap</span> <span>₦4,500</span></li>
                <li className="flex justify-between border-b border-brand-black/20 pb-2"><span>2 Laps</span> <span>₦6,500</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-2 border-brand-black p-8 font-mono uppercase font-bold text-sm bg-brand-white shadow-[8px_8px_0_0_#000]">
            <h3 className="font-archivo text-3xl mb-4 text-brand-orange">Group Packages</h3>
            <ul className="space-y-8 text-base">
              <li>
                 <div className="border-b-2 border-brand-black pb-1 mb-2 inline-block">Group Package A — ₦32,000</div>
                 <div className="text-xs tracking-wider">Covers 5 adults (1 lap each)<br/>Additional adult — ₦6,000</div>
              </li>
              <li>
                 <div className="border-b-2 border-brand-black pb-1 mb-2 inline-block">Group Package B — ₦58,000</div>
                 <div className="text-xs tracking-wider">Covers 5 adults (2 laps each)<br/>Additional adult — ₦11,500</div>
              </li>
            </ul>
          </div>
          <div className="font-mono text-xs uppercase font-bold mt-4 px-2">
            * All prices are not inclusive of beach entrance fee.
          </div>
        </div>
        
        <div>
          <h2 className="font-archivo text-6xl uppercase tracking-[-0.02em] mb-8">Process</h2>
          <ol className="list-none font-mono text-xl lg:text-3xl uppercase font-bold leading-none space-y-4">
            <li className="border-2 border-brand-black p-6 bg-brand-orange flex gap-6 items-center"><span className="text-white">01</span> Select your ride</li>
            <li className="border-2 border-brand-black p-6 bg-brand-black text-white flex gap-6 items-center"><span className="text-brand-orange">02</span> Choose date & time</li>
            <li className="border-2 border-brand-black p-6 bg-brand-white flex gap-6 items-center"><span className="text-brand-orange">03</span> Confirm booking</li>
            <li className="border-2 border-brand-black p-6 bg-brand-white flex gap-6 items-center"><span className="text-brand-orange">04</span> Make payment</li>
          </ol>
          <div className="mt-16">
            <button className="w-full bg-brand-black text-brand-white py-8 uppercase font-mono font-bold text-3xl hover:bg-brand-orange hover:text-brand-black border-2 border-brand-black transition-colors rounded-full text-center block">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
