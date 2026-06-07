import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import gsap from "gsap";

const testimonials = [
  {
    quote: "I couldn't be happier with the care my fur babies receive. The veterinarians are compassionate and always take time to explain everything.",
    name: "Sarah M.",
    img: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    quote: "The pick-up and drop-off service made everything incredibly convenient.",
    name: "James R.",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "My rescued cat recovered thanks to their guidance and support.",
    name: "Amira K.",
    img: "https://randomuser.me/api/portraits/women/56.jpg"
  },
  {
    quote: "The staff genuinely love animals. You can feel it from the moment you arrive.",
    name: "Priya S.",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "They stayed beyond closing hours to make sure my pet was okay.",
    name: "Omar A.",
    img: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];

export default function SocialProof() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    
    // Simple auto-scroll implementation
    let animationId: number;
    let scrollPos = 0;
    
    const scroll = () => {
      scrollPos += 0.5;
      if (scrollPos >= scroller.scrollWidth / 2) {
        scrollPos = 0;
      }
      scroller.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-sans text-center">Trusted By Pet Owners Across Dubai</h2>
      </div>
      
      {/* Infinite Carousel Container */}
      <div 
        ref={scrollRef} 
        className="flex gap-6 px-6 overflow-hidden pointer-events-none pb-8"
        style={{ width: "200vw" }} // Make it wider to accommodate duplicates
      >
        {/* Double the items for infinite scroll effect */}
        {[...testimonials, ...testimonials].map((t, idx) => (
          <div 
            key={idx} 
            className="w-[350px] md:w-[400px] shrink-0 bg-background rounded-3xl p-8 shadow-sm border border-border flex flex-col"
          >
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
            </div>
            
            <p className="font-serif text-lg leading-relaxed text-foreground flex-1 mb-8">"{t.quote}"</p>
            
            <div className="flex items-center gap-4 mt-auto">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary/10" />
              <span className="font-bold font-sans text-foreground">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
