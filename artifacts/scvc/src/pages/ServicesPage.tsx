import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  Stethoscope, Syringe, Scissors, FlaskConical, Zap, Bug,
  Cpu, FileText, Phone, ChevronDown, ChevronUp, HeartPulse, Sparkles
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SeoHead from "@/components/SeoHead";

const services = [
  {
    id: "consultation",
    icon: Stethoscope,
    title: "General Consultation",
    color: "bg-blue-100 text-blue-600",
    tagline: "Your pet's health starts with a conversation.",
    description:
      "A thorough general consultation forms the foundation of every pet's healthcare journey at SCVC. Our veterinarians take the time to understand your pet's history, lifestyle, and any concerns you may have — creating a full picture before any recommendation is made.",
    benefits: [
      "Complete physical examination from nose to tail",
      "Personalized health advice based on breed, age and lifestyle",
      "Dietary and nutritional guidance",
      "Early detection of underlying conditions",
      "Clear, jargon-free explanations of every finding",
    ],
    when: "We recommend scheduling a general consultation at least once a year for healthy adult pets, twice a year for seniors over seven years old, and any time you notice a change in behaviour, appetite, energy levels or appearance.",
    expect:
      "Your appointment begins with a calm welcome for both you and your pet. The doctor will take a detailed history, perform a systematic physical examination, discuss any findings openly, and outline a care plan together with you. There's no rush — every question is welcomed.",
  },
  {
    id: "vaccinations",
    icon: Syringe,
    title: "Vaccinations",
    color: "bg-green-100 text-green-600",
    tagline: "Prevention is the most powerful form of care.",
    description:
      "Vaccinations are one of the most cost-effective ways to protect your pet's long-term health. At SCVC, we tailor vaccination protocols to your pet's species, age, lifestyle and travel plans — ensuring full protection without unnecessary procedures.",
    benefits: [
      "Protection against life-threatening diseases",
      "Customised vaccination schedule for dogs, cats and rabbits",
      "Gentle, low-stress administration technique",
      "Digital vaccination record maintained for you",
      "Travel certificate preparation support",
    ],
    when: "Puppies and kittens begin their vaccination series at 6–8 weeks of age, with follow-up boosters every 3–4 weeks until 16 weeks. Adult pets require annual or triennial boosters depending on vaccine type. Senior pets still need their vaccines — immunity can weaken with age.",
    expect:
      "The visit is brief, typically 20–30 minutes. The vet will confirm your pet is healthy enough for vaccination, administer it painlessly, and advise you on what to watch for in the following 24 hours. You'll leave with a printed and digital record.",
  },
  {
    id: "surgery",
    icon: HeartPulse,
    title: "Surgery",
    color: "bg-red-100 text-red-600",
    tagline: "Precision, care, and complete transparency.",
    description:
      "From elective procedures like neutering to more complex interventional surgeries, SCVC's surgical team combines technical skill with an unwavering commitment to patient safety. We use modern anaesthetic protocols and monitoring equipment to ensure your pet is in the safest possible hands.",
    benefits: [
      "Pre-operative blood panel to confirm surgical fitness",
      "Modern anaesthetic monitoring throughout procedure",
      "Dedicated recovery suite with continuous supervision",
      "Detailed post-operative care instructions",
      "Follow-up consultation included",
    ],
    when: "Surgery is recommended when a condition cannot be resolved through medication or conservative management alone — for example, soft-tissue injuries, tumour removal, bladder stones, or elective neutering and spaying.",
    expect:
      "You'll have a pre-surgical consultation to discuss the procedure, risks and recovery. On the day, you'll drop your pet at the clinic; we'll call you when surgery is complete. A full debrief and written aftercare plan is provided before you take your pet home.",
  },
  {
    id: "dental",
    icon: Sparkles,
    title: "Dental Care",
    color: "bg-yellow-100 text-yellow-600",
    tagline: "A healthy mouth means a healthier, happier pet.",
    description:
      "Dental disease is the most commonly diagnosed health problem in pets over three years old, yet it remains one of the most overlooked. SCVC provides professional dental scaling, polishing and extractions — all performed under anaesthesia for a completely safe and stress-free experience.",
    benefits: [
      "Professional scaling removes built-up tartar below the gumline",
      "Polishing protects enamel and slows plaque re-accumulation",
      "Full oral assessment including gum health grading",
      "Home dental care guidance and product recommendations",
      "Prevents systemic disease linked to poor oral health",
    ],
    when: "Annual dental checks are recommended for all pets. If you notice bad breath, difficulty eating, pawing at the mouth, drooling, or discoloured teeth, schedule a dental appointment immediately.",
    expect:
      "Dental procedures are performed under general anaesthesia for your pet's comfort and to allow the vet to access all areas of the mouth safely. The whole process is typically two to three hours. You'll receive a full report of findings and home care instructions.",
  },
  {
    id: "grooming",
    icon: Scissors,
    title: "Grooming",
    color: "bg-purple-100 text-purple-600",
    tagline: "Looking good is part of feeling great.",
    description:
      "SCVC's grooming service goes beyond aesthetics. Regular professional grooming maintains coat and skin health, allows early identification of lumps or skin conditions, and keeps your pet comfortable and clean. Our groomers are trained to handle anxious pets with patience and skill.",
    benefits: [
      "Full bath and blow-dry with pet-safe products",
      "Breed-appropriate trim and styling",
      "Ear cleaning and nail trimming included",
      "Skin and coat health assessment",
      "Calm, unhurried environment for anxious pets",
    ],
    when: "Most dogs benefit from professional grooming every 4–8 weeks depending on coat type. Cats, particularly long-haired breeds, may need grooming every 6–8 weeks. Between visits, regular home brushing is recommended.",
    expect:
      "Your pet will be welcomed into a calm, clean grooming area. Sessions typically take 1–3 hours depending on size and coat condition. We'll send you a message when your pet is ready for pickup — or our Pet Taxi can return them directly to your door.",
  },
  {
    id: "laboratory",
    icon: FlaskConical,
    title: "Laboratory Tests",
    color: "bg-teal-100 text-teal-600",
    tagline: "Answers, not guesses.",
    description:
      "SCVC is equipped with in-house laboratory capabilities, enabling us to run blood panels, urinalysis and other diagnostic tests with rapid turnaround. When deeper analysis is needed, we partner with specialist veterinary laboratories in the UAE for extended diagnostics.",
    benefits: [
      "In-house results typically available within the same appointment",
      "Complete blood count, biochemistry and urinalysis",
      "Allergy testing and parasite screens",
      "Pre-anaesthetic bloodwork for surgical patients",
      "Ongoing monitoring for pets on long-term medication",
    ],
    when: "Laboratory tests are recommended as part of annual wellness checks, before any surgical procedure, when your pet is unwell and a diagnosis is needed, or to monitor the effect of ongoing treatment.",
    expect:
      "A small blood or urine sample is collected quickly and with minimal stress. Results are reviewed by your vet during the same consultation, and you'll receive a full written report with explanations of each value and what it means for your pet.",
  },
  {
    id: "emergency",
    icon: Zap,
    title: "Emergency Support",
    color: "bg-orange-100 text-orange-600",
    tagline: "There when it matters most.",
    description:
      "Pet emergencies don't follow a schedule. SCVC provides urgent veterinary support for serious and life-threatening situations, with rapid triage and a calm, experienced team ready to act. If your pet is in distress, call us immediately.",
    benefits: [
      "Priority triage for critical patients",
      "Experienced vets trained in emergency protocols",
      "IV fluid therapy, oxygen support and pain management on-site",
      "Direct referral pathways to specialist centres if needed",
      "Clear communication with owners throughout",
    ],
    when: "Contact us immediately if your pet is: unconscious or unresponsive, having seizures, bleeding heavily, struggling to breathe, has ingested a toxic substance, has suffered trauma, or if you have any concern that your pet is in serious distress.",
    expect:
      "Call ahead so we can prepare. Upon arrival, a vet will triage your pet immediately. You'll be kept informed at every stage, and if specialist referral is required we'll coordinate directly on your behalf.",
  },
  {
    id: "deworming",
    icon: Bug,
    title: "Deworming",
    color: "bg-lime-100 text-lime-700",
    tagline: "Keep internal parasites far away from your pet.",
    description:
      "Internal parasites are a year-round concern in the UAE's climate. SCVC provides evidence-based deworming protocols for puppies, kittens, adults and senior pets — using safe, well-tolerated medications appropriate for each animal's age and weight.",
    benefits: [
      "Protection against roundworm, tapeworm, hookworm and more",
      "Safe medications with minimal side effects",
      "Tailored protocol based on age, lifestyle and risk level",
      "Faecal analysis to confirm parasite status when needed",
      "Family protection — some parasites are transmissible to humans",
    ],
    when: "Puppies and kittens should be dewormed every two weeks from two weeks of age until 12 weeks old, then monthly until 6 months. Adults in high-exposure environments should be treated every 1–3 months. All pets should be dewormed at least every 6 months.",
    expect:
      "A quick, stress-free appointment. The vet will weigh your pet, recommend the appropriate medication and administer or prescribe it. You'll receive a written schedule for future treatments.",
  },
  {
    id: "microchipping",
    icon: Cpu,
    title: "Microchipping",
    color: "bg-indigo-100 text-indigo-600",
    tagline: "A permanent link between you and your pet.",
    description:
      "Microchipping provides a permanent, tamper-proof identification for your pet that can never be lost or removed. It is a legal requirement for dogs in the UAE, and strongly recommended for all cats and rabbits. SCVC uses ISO-standard chips registered to international databases.",
    benefits: [
      "Permanent ID that cannot be lost like a collar tag",
      "Required by UAE law for all dogs",
      "Fast reunification with your pet if they go missing",
      "Essential for international pet travel",
      "Registration to international databases included",
    ],
    when: "Microchipping can be performed at any age from 8 weeks onwards. It is strongly recommended before allowing any pet outdoors, is mandatory before travelling internationally, and should be done as early in your pet's life as possible.",
    expect:
      "The procedure takes less than a minute. A tiny chip — the size of a grain of rice — is injected under the skin between the shoulder blades with a sterile applicator. It requires no anaesthesia and most pets don't react at all. You'll leave with your pet's chip number and registration confirmation.",
  },
  {
    id: "travel",
    icon: FileText,
    title: "Pet Travel Documentation",
    color: "bg-pink-100 text-pink-600",
    tagline: "Travelling with your pet, made simple.",
    description:
      "Travelling internationally with a pet involves a complex set of documentation, vaccination records, health certificates and country-specific requirements. SCVC's team is experienced in UAE pet export regulations and will guide you through every step, ensuring your paperwork is accurate and accepted.",
    benefits: [
      "Official health certificates recognised internationally",
      "Guidance on destination country requirements",
      "Coordination with vaccination and microchipping records",
      "Rabies titration testing where required",
      "Export and import documentation support",
    ],
    when: "Start your travel documentation process at least 4–8 weeks before your travel date, as some countries require specific waiting periods after vaccinations or titre tests. Contact us as early as possible to avoid last-minute issues.",
    expect:
      "An initial consultation to understand your travel destination and timeline. We'll create a preparation plan, schedule any required tests or vaccinations, and prepare all official documentation for signing by our licensed veterinarians. We'll also advise on airline-specific requirements.",
  },
];

const faqs = [
  {
    q: "How do I know which service my pet needs?",
    a: "Start with a general consultation. Our veterinarians will assess your pet comprehensively and recommend any additional services based on their findings. You're never pressured into treatments — every decision is made together.",
  },
  {
    q: "Are your services available for all types of pets?",
    a: "We treat dogs, cats and rabbits as our primary patients. Some services such as grooming and laboratory tests are available for other small animals — contact us to discuss your specific pet.",
  },
  {
    q: "Do I need an appointment for emergency cases?",
    a: "For emergencies, call us immediately. We will triage your pet upon arrival without requiring a pre-booked appointment. For non-urgent services, an appointment ensures the right vet and resources are available for your visit.",
  },
  {
    q: "Can I use the Pet Taxi for any service appointment?",
    a: "Yes. Our Pet Taxi service is available for all appointment types, including consultations, vaccinations, grooming and post-surgical drop-offs. Simply request it when booking.",
  },
  {
    q: "How long do appointments typically take?",
    a: "A general consultation is typically 30–45 minutes. Grooming takes 1–3 hours. Surgical procedures vary widely and you'll be given an estimated duration in advance. We never rush your visit.",
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

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      cardRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 85%" },
        delay: (index % 2) * 0.1,
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} id={service.id} className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-8">
        <div className="flex items-start gap-6 mb-6">
          <div className={`p-4 rounded-2xl shrink-0 ${service.color}`} aria-hidden="true">
            <Icon className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold font-sans text-foreground mb-2">{service.title}</h2>
            <p className="font-serif italic text-muted-foreground text-lg">{service.tagline}</p>
          </div>
        </div>

        <p className="text-foreground/80 leading-relaxed mb-6">{service.description}</p>

        <div className="mb-6">
          <h3 className="font-bold text-sm uppercase tracking-wider text-foreground mb-3">Key Benefits</h3>
          <ul className="space-y-2" aria-label={`Benefits of ${service.title}`}>
            {service.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={`${service.id}-details`}
          className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          {open ? "Show less" : "When is this needed & what to expect"}
          {open ? <ChevronUp className="w-4 h-4" aria-hidden="true" /> : <ChevronDown className="w-4 h-4" aria-hidden="true" />}
        </button>

        {open && (
          <div id={`${service.id}-details`} className="mt-6 pt-6 border-t border-border space-y-4">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-foreground mb-2">When Is It Needed?</h4>
              <p className="text-sm text-foreground/70 leading-relaxed">{service.when}</p>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-foreground mb-2">What To Expect</h4>
              <p className="text-sm text-foreground/70 leading-relaxed">{service.expect}</p>
            </div>
          </div>
        )}
      </div>

      <div className="px-8 pb-8">
        <Link
          href="/contact"
          aria-label={`Book ${service.title} appointment`}
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full text-sm font-bold transition-all hover:shadow-md hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Call Now
        </Link>
      </div>
    </div>
  );
}

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
        {open ? <ChevronUp className="w-5 h-5 text-primary shrink-0" aria-hidden="true" /> : <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" aria-hidden="true" />}
      </button>
      {open && (
        <div className="px-6 pb-5 text-foreground/70 leading-relaxed text-sm border-t border-border pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-hero-el",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out" }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SeoHead
        title="Veterinary Services Dubai | SCVC — Consultations, Surgery, Dental & More"
        description="Safe Care Veterinary Clinic offers comprehensive vet services in Dubai: general consultations, vaccinations, surgery, dental care, grooming, lab tests, deworming, microchipping and pet travel documentation."
        canonical="https://scvc.ae/services"
        schema={faqSchema}
      />
      <Navbar />

      <section ref={heroRef} className="relative pt-40 pb-24 bg-secondary/30 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="services-hero-el inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true"></span>
            Comprehensive Veterinary Care
          </div>
          <h1 className="services-hero-el text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-foreground leading-[1.1] tracking-tight mb-6">
            Complete Veterinary Care<br />
            <span className="font-serif italic font-medium text-primary">For Every Stage Of Your Pet's Life</span>
          </h1>
          <p className="services-hero-el text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From preventive care to advanced treatment, we provide comprehensive veterinary services with compassion and expertise. Every service is delivered by experienced professionals who genuinely love animals.
          </p>
        </div>
      </section>

      <nav aria-label="Jump to service" className="py-6 bg-background border-b border-border sticky top-[72px] z-30 backdrop-blur-md bg-background/80">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground/70 hover:border-primary hover:text-primary transition-colors bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="py-20 bg-background" aria-label="Our veterinary services">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30" aria-label="Frequently asked questions">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about our services.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden bg-[#E11D79]" aria-label="Book an appointment">
        <div className="absolute inset-0 opacity-10" aria-hidden="true" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-sans mb-6">Ready to Book?</h2>
          <p className="text-white/90 text-xl mb-10 font-medium">Call us today and let's take care of your pet together.</p>
          <Link href="/contact" className="inline-flex bg-white text-[#E11D79] px-10 py-5 rounded-full text-lg font-bold hover:shadow-xl hover:scale-105 transition-all active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50">
            Call Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
