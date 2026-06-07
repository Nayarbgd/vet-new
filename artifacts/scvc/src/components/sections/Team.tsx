import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const team = [
  {
    name: "Dr. Mohammed Kizo",
    role: "Lead Veterinarian",
    img: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    name: "Dr. Thomas",
    role: "Veterinarian",
    img: "https://randomuser.me/api/portraits/men/43.jpg"
  },
  {
    name: "Dr. Mazen",
    role: "Veterinarian",
    img: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Support Team",
    role: "Pet Care Specialists",
    img: "https://randomuser.me/api/portraits/women/33.jpg"
  }
];

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-card",
        { y: 40, opacity: 0 },
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
    <section id="team" ref={containerRef} className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-6">Meet The Team Behind The Care</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our veterinarians combine medical expertise with genuine compassion, creating an environment where pets feel safe and owners feel informed.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, idx) => (
            <div 
              key={idx} 
              className="team-card group bg-secondary/40 rounded-3xl p-6 text-center transition-all duration-300 hover:shadow-md hover:bg-card border border-transparent hover:border-border hover:-translate-y-1"
            >
              <div className="mb-6 mx-auto w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full border-4 border-background shadow-sm group-hover:border-primary/20 transition-colors">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold font-sans text-foreground mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-primary">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
