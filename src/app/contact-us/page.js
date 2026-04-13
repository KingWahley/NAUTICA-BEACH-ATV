export default function Contact() {
  return (
    <main className="flex-1 w-full pt-[200px] px-8 max-w-[1600px] mx-auto pb-24">
      <h1 className="font-archivo text-[10vw] xl:text-[8vw] uppercase leading-[0.85] tracking-[-0.04em] mb-16 selection:bg-brand-black selection:text-brand-orange">
        CONTACT US
      </h1>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
        <div className="space-y-12">
            <div>
                <h3 className="font-mono text-sm font-bold uppercase text-brand-orange mb-4 border-b-2 border-brand-black inline-block tracking-widest">Phone / WhatsApp</h3>
                <p className="font-archivo text-4xl lg:text-6xl uppercase hover:text-white transition-colors text-brand-black">09133333436</p>
            </div>
            <div>
                <h3 className="font-mono text-sm font-bold uppercase text-brand-orange mb-4 border-b-2 border-brand-black inline-block tracking-widest">Email</h3>
                <p className="font-archivo text-4xl lg:text-[4vw] uppercase hover:text-white transition-colors break-words leading-none text-brand-black">Leisure<br/>sportsatv<br />@gmail.com</p>
            </div>
            <div>
                <h3 className="font-mono text-sm font-bold uppercase text-brand-orange mb-4 border-b-2 border-brand-black inline-block tracking-widest">Location</h3>
                <p className="font-archivo text-4xl lg:text-5xl uppercase leading-none hover:text-white transition-colors text-brand-black">Nautica Beach<br/>Resort, Elegushi</p>
            </div>
        </div>
        
        <div className="border-2 border-brand-black p-8 lg:p-16 bg-brand-black text-brand-white shadow-[16px_16px_0_0_#FF4D00]">
            <h2 className="font-archivo text-4xl uppercase mb-12 text-brand-orange">Send a Message</h2>
            <form className="space-y-8 font-mono font-bold text-sm uppercase flex flex-col">
                <input type="text" placeholder="NAME" className="w-full bg-transparent border-b-2 border-white/30 p-4 focus:outline-none focus:border-brand-orange transition-colors tracking-widest" />
                <input type="email" placeholder="EMAIL" className="w-full bg-transparent border-b-2 border-white/30 p-4 focus:outline-none focus:border-brand-orange transition-colors tracking-widest" />
                <textarea placeholder="MESSAGE" rows="6" className="w-full bg-transparent border-b-2 border-white/30 p-4 focus:outline-none focus:border-brand-orange transition-colors resize-none tracking-widest"></textarea>
                <button type="button" className="mt-8 bg-brand-orange text-brand-black px-12 py-6 rounded-full hover:bg-white transition-colors w-full tracking-[0.2em] border-2 border-transparent hover:border-brand-black lg:w-max block lg:inline-block">SEND MESSAGE</button>
            </form>
        </div>
      </div>
    </main>
  );
}
