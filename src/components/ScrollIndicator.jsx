export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Arrow inside a pill container */}
      <div className="w-[30px] h-[50px] border-2 border-brand-black rounded-full flex items-start justify-center p-1 bg-transparent hover:bg-brand-black group transition-colors duration-300 cursor-pointer">
        <div className="w-[4px] h-[8px] bg-brand-black rounded-full mt-1 animate-bounce group-hover:bg-white transition-colors duration-300" />
      </div>
      <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-brand-black">
        SCROLL
      </span>
    </div>
  );
}
