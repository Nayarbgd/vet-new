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
    <section id="hero" ref={containerRef} className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <div className="flex flex-col items-start z-10">
            <div className="hero-text-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-5 md:mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true"></span>
              Trusted Veterinary Care in Dubai
            </div>

            <h1 className="hero-text-element text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold text-foreground leading-[1.1] tracking-tight mb-4">
              Your Pet Deserves<br />
              Care That Feels Like<br />
              <span className="font-serif italic font-medium text-primary block mt-2 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">Family.</span>
            </h1>

            <p className="hero-text-element text-base md:text-lg xl:text-xl text-muted-foreground mt-5 mb-3 max-w-lg leading-relaxed">
              Professional veterinary medicine delivered with genuine compassion, clear communication, and stress-free convenience.
            </p>

            <p className="hero-text-element text-sm md:text-base text-muted-foreground mb-8 md:mb-10 max-w-lg leading-relaxed">
              From routine checkups to complex treatments, every pet receives expert care, personal attention, and the love they deserve.
            </p>

            <div className="hero-text-element flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                data-testid="btn-call-clinic"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-base font-bold transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 text-center active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Call the Clinic
              </Link>
              <Link
                href="/pet-taxi"
                data-testid="btn-book-taxi"
                className="bg-white hover:bg-primary/5 text-primary border border-primary/20 px-8 py-4 rounded-full text-base font-bold transition-all hover:border-primary/50 text-center active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Book Pet Taxi
              </Link>
            </div>

            <div className="hero-text-element flex items-center gap-4 mt-10 pt-8 border-t border-border w-full max-w-md">
              <div className="flex -space-x-3" aria-hidden="true">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" loading="lazy" decoding="async" className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" loading="lazy" decoding="async" className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" loading="lazy" decoding="async" className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-1" aria-label="5 star rating">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" aria-hidden="true" />)}
                </div>
                <span className="text-xs text-muted-foreground mt-1 font-medium">Trusted by hundreds of pet owners</span>
              </div>
            </div>
          </div>

          {/* Image collage — hidden on small screens, shown from lg up */}
          <div className="relative h-[420px] sm:h-[500px] lg:h-[600px] w-full mt-4 lg:mt-0 overflow-hidden rounded-[2rem]">
            <div className="absolute inset-0 bg-secondary/50 rounded-[3rem] -rotate-3 scale-95 origin-bottom-right transition-transform" aria-hidden="true"></div>

            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
              alt="Veterinarian gently holding a cat during a compassionate SCVC consultation"
              className="hero-image-element absolute top-0 right-6 sm:right-10 w-[58%] h-[50%] object-cover rounded-[1.5rem] sm:rounded-[2rem] shadow-xl z-20"
            />
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80"
              alt="Happy dog receiving attentive care from the SCVC veterinary team"
              className="hero-image-element absolute bottom-6 sm:bottom-10 right-0 w-[52%] h-[42%] object-cover rounded-[1.5rem] sm:rounded-[2rem] shadow-xl z-30"
            />
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80"
              alt="Relaxed cat comfortable in a stress-free vet environment"
              className="hero-image-element absolute top-16 sm:top-20 left-0 w-[43%] h-[38%] object-cover rounded-[1.5rem] sm:rounded-[2rem] shadow-lg z-10"
            />
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80"
              alt="Dog owner enjoying a calm and clear vet consultation at Safe Care Veterinary Clinic Dubai"
              loading="lazy"
              decoding="async"
              className="hero-image-element absolute bottom-0 left-6 sm:left-10 w-[38%] h-[32%] object-cover rounded-[1.5rem] sm:rounded-[2rem] shadow-lg z-20"
            />

            <div className="hero-image-element absolute top-1/4 right-2 sm:-right-4 bg-white/80 backdrop-blur-md p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl z-40 flex items-center gap-2 sm:gap-3 border border-white/40">
              <div className="bg-green-100 p-1.5 sm:p-2 rounded-full text-green-600" aria-hidden="true"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></div>
              <span className="text-xs sm:text-sm font-bold text-foreground">Free Pet Pickup</span>
            </div>

            <div className="hero-image-element absolute bottom-1/3 left-2 sm:left-0 bg-white/80 backdrop-blur-md p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl z-40 flex items-center gap-2 sm:gap-3 border border-white/40">
              <div className="bg-primary/10 p-1.5 sm:p-2 rounded-full text-primary" aria-hidden="true"><Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" /></div>
              <span className="text-xs sm:text-sm font-bold text-foreground">Compassionate Team</span>
            </div>

            <div className="hero-image-element absolute bottom-4 right-1/4 bg-white/80 backdrop-blur-md p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl z-40 flex items-center gap-2 sm:gap-3 border border-white/40">
              <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full text-blue-600" aria-hidden="true"><MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></div>
              <span className="text-xs sm:text-sm font-bold text-foreground">Clear Explanations</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
