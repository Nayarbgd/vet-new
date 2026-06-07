import { useEffect, useRef } from "react";
import { Phone, Car, Stethoscope, Home } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    num: "01",
    title: "Schedule Appointment",
    desc: "Call or message the clinic.",
    icon: Phone
  },
  {
    num: "02",
    title: "Pet Taxi Pickup",
    desc: "We collect your pet safely from home.",
    icon: Car
  },
  {
    num: "03",
    title: "Veterinary Care",
    desc: "Examination, diagnosis and treatment.",
    icon: Stethoscope
  },
  {
    num: "04",
    title: "Safe Return Home",
    desc: "Your pet returns comfortable and cared for.",
    icon: Home
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-step",
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
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
    <section id="process" ref={containerRef} className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">How We Care For Your Pet</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A seamless, stress-free process designed around the comfort of your pet and your convenience.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-10 right-10 h-0.5 bg-border z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="process-step relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 shadow-sm border border-primary/20 bg-background relative z-10">
                <step.icon className="w-7 h-7" />
              </div>
              <div className="text-5xl font-mono font-bold text-primary/20 mb-4 select-none">
                {step.num}
              </div>
              <h3 className="text-xl font-bold font-sans mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
