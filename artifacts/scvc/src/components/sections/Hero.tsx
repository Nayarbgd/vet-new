import { useEffect, useRef } from "react";
import { Check, Heart, MessageCircle, Star } from "lucide-react";
import { Link } from "wouter";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text-element",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-image-element",
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "power3.out", delay: 0.2 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col items-start z-10">
            <div className="hero-text-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Trusted Veterinary Care in Dubai
            </div>

            <h1 className="hero-text-element text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-foreground leading-[1.1] tracking-tight mb-4">
              Your Pet Deserves<br />
              Care That Feels Like<br />
              <span className="font-serif italic font-medium text-primary block mt-2 text-6xl md:text-7xl lg:text-8xl">Family.</span>
            </h1>

            <p className="hero-text-element text-lg md:text-xl text-muted-foreground mt-6 mb-4 max-w-lg leading-relaxed">
              Professional veterinary medicine delivered with genuine compassion, clear communication, and stress-free convenience.
            </p>

            <p className="hero-text-element text-base text-muted-foreground mb-10 max-w-lg leading-relaxed">
              From routine checkups to complex treatments, every pet receives expert care, personal attention, and the love they deserve.
            </p>

            <div className="hero-text-element flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                data-testid="btn-call-clinic"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-base font-bold transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 text-center"
              >
                Call the Clinic
              </Link>
              <Link
                href="/pet-taxi"
                data-testid="btn-book-taxi"
                className="bg-white hover:bg-primary/5 text-primary border border-primary/20 px-8 py-4 rounded-full text-base font-bold transition-all hover:border-primary/50 text-center"
              >
                Book Pet Taxi
              </Link>
            </div>

            <div className="hero-text-element flex items-center gap-4 mt-12 pt-8 border-t border-border w-full max-w-md">
              <div className="flex -space-x-3">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                </div>
                <span className="text-xs text-muted-foreground mt-1 font-medium">Trusted by hundreds of pet owners</span>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] w-full mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-secondary/50 rounded-[3rem] -rotate-3 scale-95 origin-bottom-right transition-transform"></div>

            <img src="https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=600&q=80" alt="Veterinarian with cat" className="hero-image-element absolute top-0 right-10 w-[60%] h-[50%] object-cover rounded-[2rem] shadow-xl z-20" />
            <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80" alt="Happy dog" className="hero-image-element absolute bottom-10 right-0 w-[55%] h-[45%] object-cover rounded-[2rem] shadow-xl z-30" />
            <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80" alt="Persian cat" className="hero-image-element absolute top-20 left-0 w-[45%] h-[40%] object-cover rounded-[2rem] shadow-lg z-10" />
            <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80" alt="Owner with dog" className="hero-image-element absolute bottom-0 left-10 w-[40%] h-[35%] object-cover rounded-[2rem] shadow-lg z-20" />

            <div className="hero-image-element absolute top-1/4 -right-4 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl z-40 flex items-center gap-3 border border-white/40">
              <div className="bg-green-100 p-2 rounded-full text-green-600"><Check className="w-4 h-4" /></div>
              <span className="text-sm font-bold text-foreground">Free Pet Pickup</span>
            </div>

            <div className="hero-image-element absolute bottom-1/3 -left-8 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl z-40 flex items-center gap-3 border border-white/40">
              <div className="bg-primary/10 p-2 rounded-full text-primary"><Heart className="w-4 h-4" fill="currentColor" /></div>
              <span className="text-sm font-bold text-foreground">Compassionate Team</span>
            </div>

            <div className="hero-image-element absolute bottom-4 right-1/4 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl z-40 flex items-center gap-3 border border-white/40">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600"><MessageCircle className="w-4 h-4" /></div>
              <span className="text-sm font-bold text-foreground">Clear Explanations</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
