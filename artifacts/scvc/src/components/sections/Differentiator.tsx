import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Differentiator() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".diff-fade",
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-32 bg-card relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <h2 className="diff-fade text-3xl md:text-5xl lg:text-6xl font-bold font-sans text-center mb-20">More Than A Veterinary Clinic</h2>
        
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-20 items-center">
          <div className="diff-fade text-3xl md:text-4xl font-serif text-muted-foreground italic leading-tight text-center md:text-right">
            "Most clinics focus on treatments."
          </div>
          <div className="diff-fade text-3xl md:text-4xl font-serif text-primary font-bold italic leading-tight text-center md:text-left">
            "We focus on relationships."
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <p className="diff-fade text-xl md:text-2xl text-foreground/80 leading-relaxed font-medium">
            We believe great veterinary care starts with trust, communication, and genuine love for animals.
          </p>
          
          <div className="diff-fade space-y-6 pt-8 border-t border-border/50">
            <p className="text-xl md:text-2xl font-serif text-foreground/90">Every decision is explained.</p>
            <p className="text-xl md:text-2xl font-serif text-foreground/90">Every question is welcomed.</p>
            <p className="text-xl md:text-2xl font-serif text-primary font-bold">Every pet is treated like family.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
