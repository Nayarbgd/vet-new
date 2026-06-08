import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  Car, Phone, Shield, MapPin, Clock, Heart,
  CheckCircle, Star, ChevronDown, ChevronUp, CalendarCheck, Home, Stethoscope
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SeoHead from "@/components/SeoHead";

const steps = [
  {
    icon: CalendarCheck,
    label: "Book",
    title: "Schedule Your Pickup",
    desc: "Call or WhatsApp us to book a Pet Taxi. Tell us your address, your pet's needs, and the type of appointment. We confirm a time window that works for your day.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Car,
    label: "Pickup",
    title: "We Come To You",
    desc: "Our driver arrives at your door at the agreed time. Your pet is handled calmly and with care, placed securely in a clean, ventilated carrier for a stress-free journey to the clinic.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Stethoscope,
    label: "Treatment",
    title: "Expert Veterinary Care",
    desc: "While your pet receives treatment, we keep you updated in real time. You'll know exactly what's happening — the diagnosis, the plan, and any decisions we need to make together.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Home,
    label: "Return Home",
    title: "Safe Delivery Back",
    desc: "Once your pet is ready, we bring them home to you — calm, cared for, and comfortable. You'll receive a full treatment summary and aftercare instructions at the door.",
    color: "bg-orange-100 text-orange-600",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    desc: "No need to rearrange your day. We pick up and drop off your pet while you carry on with work, family and life.",
  },
  {
    icon: Heart,
    title: "Reduce Pet Stress",
    desc: "Cats and dogs can find car trips anxiety-inducing. Our experienced handlers keep them calm from door to door.",
  },
  {
    icon: Shield,
    title: "Safe & Secure Transport",
    desc: "Clean, well-ventilated carriers, gentle handling, and a direct route to the clinic — no unnecessary stops.",
  },
  {
    icon: Phone,
    title: "Real-Time Updates",
    desc: "You're never left wondering. We send you updates at every stage of the journey and during treatment.",
  },
  {
    icon: MapPin,
    title: "All Dubai Areas",
    desc: "We cover all major residential areas across Dubai. Contact us to confirm service availability in your neighbourhood.",
  },
  {
    icon: CheckCircle,
    title: "All Appointment Types",
    desc: "Pet Taxi is available for consultations, vaccinations, grooming, dental procedures, surgery drop-off and more.",
  },
];

const safetyPoints = [
  "Each carrier is sanitised between every trip",
  "Separate carriers for dogs and cats to prevent cross-stress",
  "Gentle, low-noise handling techniques used throughout",
  "Climate-controlled environment during transport",
  "Direct route — no multi-pet rides simultaneously",
  "Experienced handlers trained in animal behaviour",
];

const taxiTestimonials = [
  {
    quote: "The Pet Taxi completely changed how I manage my dog's vet appointments. I work long hours and it was impossible to find time. Now SCVC picks him up and brings him back — I get updates the whole time. Absolutely brilliant service.",
    name: "Fatima Al-Rashidi",
    role: "Marketing Director, Dubai",
    img: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    quote: "My cat used to be terrified of the car. With the Pet Taxi, she's handled so gently she arrives at the clinic much calmer than before. The team are incredible with anxious animals.",
    name: "James R.",
    role: "Pet Owner, JBR",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "After my dog's surgery, I was nervous about the journey home. SCVC brought him back so carefully. He was comfortable and calm. The aftercare instructions were explained by the driver on delivery. Truly five stars.",
    name: "Priya S.",
    role: "Pet Owner, Business Bay",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const faqs = [
  {
    q: "Is there an extra charge for Pet Taxi?",
    a: "Pet Taxi pricing depends on distance and appointment type. Contact us for a quote — in many cases it's included or offered at minimal cost as part of your appointment booking.",
  },
  {
    q: "Can you transport multiple pets from the same household?",
    a: "Yes. We can transport multiple pets from the same address, though we use separate carriers to keep each animal calm and comfortable. Let us know when booking.",
  },
  {
    q: "What if my pet needs urgent care during transport?",
    a: "Our drivers are trained to contact the clinic immediately if any concern arises during transport. The veterinary team is briefed and ready upon arrival for any urgent situations.",
  },
  {
    q: "How far in advance do I need to book Pet Taxi?",
    a: "We recommend booking at least 24 hours in advance for planned appointments. For urgent situations, contact us and we'll do our best to accommodate same-day pickups.",
  },
  {
    q: "What areas does Pet Taxi cover?",
    a: "We cover all major areas of Dubai. Contact us to confirm service availability at your specific address — we're expanding coverage regularly.",
  },
  {
    q: "Can I track the taxi while my pet is in transit?",
    a: "We provide real-time WhatsApp updates throughout the journey. You'll know when we've picked up your pet, when we've arrived at the clinic, and when we're on our way back.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://scvc.ae/" },
    { "@type": "ListItem", position: 2, name: "Pet Taxi", item: "https://scvc.ae/pet-taxi" },
  ],
};

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-secondary/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
      >
        <span className="font-bold text-foreground pr-4">{q}</span>
        {open
          ? <ChevronUp className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
          : <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" aria-hidden="true" />
        }
      </button>
      {open && (
        <div className="px-6 pb-5 text-foreground/70 leading-relaxed text-sm border-t border-border pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function PetTaxiPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const heroCtx = gsap.context(() => {
      gsap.fromTo(
        ".taxi-hero-el",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out" }
      );
    }, heroRef);

    const tlCtx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-step",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: timelineRef.current, start: "top 75%" } }
      );
    }, timelineRef);

    const benCtx = gsap.context(() => {
      gsap.fromTo(
        ".benefit-card",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: benefitsRef.current, start: "top 75%" } }
      );
    }, benefitsRef);

    return () => { heroCtx.revert(); tlCtx.revert(); benCtx.revert(); };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SeoHead
        title="Pet Taxi Dubai | Door-to-Door Veterinary Transport — SCVC"
        description="Safe Care Veterinary Clinic's Pet Taxi collects your pet from your door, delivers expert vet care, and returns them home safely. Covering all Dubai areas. Book now."
        canonical="https://scvc.ae/pet-taxi"
        schema={[faqSchema, breadcrumbSchema]}
      />
      <Navbar />

      <section ref={heroRef} className="relative pt-40 pb-32 overflow-hidden bg-secondary/30">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="taxi-hero-el inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <Car className="w-3.5 h-3.5" aria-hidden="true" />
                Premium Concierge Transport
              </div>
              <h1 className="taxi-hero-el text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-foreground leading-[1.1] tracking-tight mb-6">
                Veterinary Care<br />
                Without The<br />
                <span className="font-serif italic font-medium text-primary">Travel Stress.</span>
              </h1>
              <p className="taxi-hero-el text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
                We safely pick up your pet, provide the required care, and return them home comfortably.
              </p>
              <p className="taxi-hero-el text-base text-muted-foreground mb-10 leading-relaxed">
                A premium door-to-door service designed for busy pet owners who want the best for their animals without disrupting their day.
              </p>
              <div className="taxi-hero-el flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  aria-label="Book Pet Taxi service"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-base font-bold transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Book Pet Taxi
                </Link>
                <Link
                  href="/services"
                  aria-label="View all veterinary services"
                  className="bg-white hover:bg-primary/5 text-primary border border-primary/20 px-8 py-4 rounded-full text-base font-bold transition-all hover:border-primary/50 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  View All Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full" aria-hidden="true">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Pet Taxi</p>
                    <p className="text-sm text-muted-foreground">Door-to-door veterinary transport</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></div>
                    Available
                  </div>
                </div>
                <ul className="space-y-4" aria-label="Pet Taxi features">
                  {["Pickup from your door", "Real-time WhatsApp updates", "Expert handling throughout", "Home delivery after care", "All appointment types covered"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                      <span className="text-sm font-medium text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-border flex items-center gap-3">
                  <div className="flex -space-x-2" aria-hidden="true">
                    {["women/44", "men/32", "women/68"].map((p, i) => (
                      <img key={i} src={`https://randomuser.me/api/portraits/${p}.jpg`} alt="" loading="lazy" decoding="async" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-0.5 mb-0.5" aria-label="5 star rating">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-primary text-primary" aria-hidden="true" />)}
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">Loved by pet owners across Dubai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={timelineRef} className="py-28 bg-background" aria-label="How Pet Taxi works">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">How Pet Taxi Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Four simple steps from your front door to expert care and back home again.</p>
          </div>

          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-[3.5rem] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent z-0" aria-hidden="true"></div>
            {steps.map((step, idx) => (
              <li key={idx} className="timeline-step relative z-10 flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10 border-4 border-background shadow-md ${step.color}`} aria-hidden="true">
                  <step.icon className="w-7 h-7" />
                </div>
                <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                  {step.label}
                </div>
                <h3 className="text-xl font-bold font-sans mb-3 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              aria-label="Book Pet Taxi now"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-base font-bold transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Car className="w-5 h-5" aria-hidden="true" />
              Book Pet Taxi Now
            </Link>
          </div>
        </div>
      </section>

      <section ref={benefitsRef} className="py-24 bg-secondary/30" aria-label="Pet Taxi benefits">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">Built for Busy Pet Owners</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Every detail of our Pet Taxi service is designed around you and your pet.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="benefit-card bg-card border border-border rounded-3xl p-7 hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-3 rounded-2xl w-fit mb-5" aria-hidden="true">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background" aria-label="Safety standards">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-sans mb-6">Safety Is Our First Priority</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Every aspect of our transport service is designed to keep your pet safe, calm and comfortable from the moment we arrive at your door.
              </p>
              <ul className="space-y-4" aria-label="Pet Taxi safety standards">
                {safetyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-foreground/80 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-secondary/50 rounded-[3rem] p-3 -rotate-2">
                <img
                  src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600&q=80"
                  alt="A calm dog being safely and gently transported in the SCVC Pet Taxi service"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[400px] object-cover rounded-[2.5rem]"
                />
              </div>
              <div className="absolute bottom-8 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-sm text-foreground">Safety Certified</p>
                    <p className="text-xs text-muted-foreground">Every trip, every time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30" aria-label="Client testimonials for Pet Taxi">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">Pet Taxi Stories</h2>
            <p className="text-muted-foreground text-lg">What pet owners say about the SCVC Pet Taxi experience.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {taxiTestimonials.map((t, i) => (
              <figure key={i} className="bg-card border border-border rounded-3xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-6" aria-label="5 out of 5 stars">
                  {[1,2,3,4,5].map(j => <Star key={j} className="w-4 h-4 fill-primary text-primary" aria-hidden="true" />)}
                </div>
                <blockquote className="font-serif text-lg text-foreground leading-relaxed flex-1 mb-8">"{t.quote}"</blockquote>
                <figcaption className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.img}
                    alt={`${t.name} — ${t.role}`}
                    loading="lazy"
                    decoding="async"
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/10"
                  />
                  <div>
                    <p className="font-bold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background" aria-label="Frequently asked questions about Pet Taxi">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about Pet Taxi.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden bg-[#E11D79]" aria-label="Book Pet Taxi">
        <div className="absolute inset-0 opacity-10" aria-hidden="true" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-sans mb-6">Ready for Stress-Free<br />Vet Visits?</h2>
          <p className="text-white/90 text-xl mb-10 font-medium">Book your Pet Taxi today and experience truly convenient veterinary care.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#E11D79] px-10 py-5 rounded-full text-lg font-bold hover:shadow-xl hover:scale-105 transition-all active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50">
              <Car className="w-5 h-5" aria-hidden="true" />
              Book Pet Taxi
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white/50 px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 hover:border-white transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
