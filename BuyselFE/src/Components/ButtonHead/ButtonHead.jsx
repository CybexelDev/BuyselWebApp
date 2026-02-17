import { ArrowUpRight } from 'lucide-react';

export default function ButtonHead() {
  return (
    <div className="relative inline-block">
      {/* Main button with curved notch using radial-gradient mask */}
      <div 
        className="relative bg-[#7AB92D] w text-white pl-6 pr-20 py-4 hover:bg-[#6BA025] transition-colors"
        style={{
          borderRadius: '12px',
          WebkitMaskImage: 'radial-gradient(circle 20px at calc(100% - 16px) 16px, transparent 0, transparent 20px, black 20px)',
          maskImage: 'radial-gradient(circle 20px at calc(100% - 16px) 16px, transparent 0, transparent 20px, black 20px)'
        }}
      >
        <button className="font-semibold text-lg">Explore Properties</button>
      </div>
      
      {/* Circular arrow container positioned in the curved notch */}
      <div className="absolute top-[2px] right-[2px] w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
        <ArrowUpRight className="w-4 h-4 text-[#7AB92D]" strokeWidth={2.5} />
      </div>
    </div>
  );
}