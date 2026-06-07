import { Heart } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1F1F23] pt-20 pb-10 text-white/80">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 border-b border-white/10 pb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#E11D79] p-2 rounded-full">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">SCVC</span>
            </div>
            <p className="text-lg font-serif italic text-white/60">Compassion. Expertise. Convenience.</p>
          </div>
          
          <div className="flex flex-wrap gap-6 md:gap-8">
            {["Services", "Pet Taxi", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(" ", "-"))}
                className="text-sm font-medium hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/50">
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
            <span className="font-mono">System Active</span>
          </div>
          
          <span className="font-mono">Veterinary Care Platform v1.0</span>
          
          <p>&copy; 2025 Safe Care Veterinary Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
