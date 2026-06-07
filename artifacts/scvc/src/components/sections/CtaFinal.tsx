import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CtaFinal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax background effect
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-fade",
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Solid pink background with parallax inner element */}
      <div className="absolute inset-0 bg-[#E11D79] z-0 overflow-hidden">
        <div ref={bgRef} className="absolute -inset-y-1/4 -inset-x-10 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <h2 className="cta-fade text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-white mb-6">
          Speak With A Veterinarian Today
        </h2>
        
        <p className="cta-fade text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
          Get expert guidance, compassionate care, and stress-free support for your pet.
        </p>
        
        <div className="cta-fade flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button data-testid="btn-call-now-final" className="bg-white text-[#E11D79] px-10 py-5 rounded-full text-lg font-bold transition-all hover:shadow-xl hover:scale-105 active:scale-95">
            Call Now
          </button>
          <button className="bg-transparent text-white border-2 border-white/50 px-10 py-5 rounded-full text-lg font-bold transition-all hover:bg-white/10 hover:border-white">
            Book Pet Taxi
          </button>
        </div>
        
        <div className="cta-fade flex flex-col items-center justify-center gap-4">
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-white text-white" />)}
          </div>
          <p className="text-white/90 font-medium font-sans">Trusted by pet owners across Dubai</p>
          <div className="flex -space-x-3 mt-2">
            <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#E11D79] object-cover" />
            <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#E11D79] object-cover" />
            <img src="https://randomuser.me/api/portraits/women/64.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#E11D79] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
