import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Heart, Star, Award, Users, MessageCircle, Zap, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SeoHead from "@/components/SeoHead";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://scvc.ae/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://scvc.ae/about" },
  ],
};

const values = [
  {
    icon: Heart,
    title: "Compassion",
    desc: "Every animal that walks through our doors is treated with the same gentle care we would want for our own pets. Compassion is not a policy — it is the foundation of everything we do.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    desc: "We earn your trust through transparency. Every diagnosis, every decision and every treatment plan is explained clearly, honestly and without unnecessary jargon.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    desc: "You are always informed. From the moment your pet arrives to the moment they return home, we keep you updated and welcome every question — because you know your pet best.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Award,
    title: "Expertise",
    desc: "Our veterinary team is formally trained, continually developing their knowledge, and experienced across a wide range of species and conditions common in the UAE.",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: Zap,
    title: "Convenience",
    desc: "We removed every possible barrier to getting your pet the care they need. From Pet Taxi to flexible scheduling, we work around your life — not the other way around.",
    color: "bg-purple-100 text-purple-600",
  },
];

const team = [
  {
    name: "Dr. Mohammed Kizo",
    role: "Lead Veterinarian & Founder",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Dr. Mohammed Kizo founded Safe Care Veterinary Clinic with a single conviction: that veterinary medicine in Dubai could be more compassionate, more communicative, and more accessible to every pet owner. With over a decade of clinical experience across small animal medicine, surgery and preventive care, Dr. Kizo leads the team both clinically and philosophically. His approach — built on taking time with every patient, explaining every finding, and treating every animal as an individual — defines the culture of SCVC.",
    specialties: ["Small Animal Medicine", "Soft Tissue Surgery", "Preventive Care", "Client Education"],
    imgAlt: "Dr. Mohammed Kizo, Lead Veterinarian and Founder at Safe Care Veterinary Clinic Dubai",
  },
  {
    name: "Dr. Thomas",
    role: "Veterinarian",
    img: "https://randomuser.me/api/portraits/men/43.jpg",
    bio: "Dr. Thomas brings warmth, clinical precision and a particular affinity for anxious or sensitive animals. He has a talent for creating calm in difficult consultations — for both the patient and the owner. His clinical interests span internal medicine, dermatology and pain management, and he is especially skilled at working with cats, who often find veterinary visits stressful. Dr. Thomas believes that fear-free medicine is not just kinder — it leads to better clinical outcomes.",
    specialties: ["Internal Medicine", "Dermatology", "Pain Management", "Fear-Free Handling"],
    imgAlt: "Dr. Thomas, Veterinarian specialising in internal medicine and fear-free handling at SCVC Dubai",
  },
  {
    name: "Dr. Mazen",
    role: "Veterinarian",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    bio: "Dr. Mazen combines technical skill with a genuine curiosity about each patient's unique case. He is the team's diagnostician — methodical, thorough, and excellent at identifying underlying conditions that others may miss. He has extensive experience with laboratory diagnostics, dental procedures and vaccination protocols. Dr. Mazen's clients appreciate his honesty: he never oversells treatment, and he always gives you his genuine professional opinion about what your pet actually needs.",
    specialties: ["Diagnostics & Pathology", "Dental Procedures", "Vaccination Protocols", "Laboratory Medicine"],
    imgAlt: "Dr. Mazen, Veterinarian specialising in diagnostics and dental procedures at SCVC Dubai",
  },
];

const trustReasons = [
  {
    quote: "Dr. Kizo spent a full 45 minutes on our first consultation explaining exactly what was happening with our elderly cat. No rushing, no jargon. I felt like we finally had someone in our corner.",
    name: "Sarah M.",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    quote: "My dog is terrified of strangers. The team at SCVC worked with him so patiently on every visit. They remember him, they know his fears, and they adapt every time. That's not normal — that's exceptional.",
    name: "Omar A.",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    quote: "We moved to Dubai not knowing anyone. Finding SCVC was one of the best things to happen to us as pet owners here. They've cared for our rabbit through three health scares and we trust them completely.",
    name: "Amira K.",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    quote: "What sets SCVC apart is that the vets genuinely love animals. You can see it in how they handle patients. Our cats have never been calmer at a vet, and that says everything.",
    name: "Priya S.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const stats = [
  { number: "500+", label: "Pets Treated" },
  { number: "3", label: "Specialist Vets" },
  { number: "10+", label: "Years Combined Experience" },
  { number: "5★", label: "Average Client Rating" },
];

const vetClinicImages = [
  { url: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&q=80", alt: "Veterinarian performing a careful examination on a pet at SCVC Dubai" },
  { url: "https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=400&q=80", alt: "Vet gently handling a cat during a consultation at Safe Care Veterinary Clinic" },
  { url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80", alt: "Happy dog receiving attentive care from the SCVC veterinary team" },
  { url: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&q=80", alt: "Dog owner and pet enjoying a stress-free vet visit at SCVC Dubai" },
];

const teamImages = [
  "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&q=80",
  "https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=500&q=80",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&q=80",
];
const teamImageAlts = [
  "Dr. Mohammed Kizo in consultation with a patient at Safe Care Veterinary Clinic",
  "Dr. Thomas calmly examining a cat using fear-free handling techniques",
  "Dr. Mazen conducting a thorough diagnostic assessment at SCVC Dubai",
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const heroCtx = gsap.context(() => {
      gsap.fromTo(".about-hero-el", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out" });
    }, heroRef);

    const valCtx = gsap.context(() => {
      gsap.fromTo(".value-card", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: valuesRef.current, start: "top 75%" },
      });
    }, valuesRef);

    const teamCtx = gsap.context(() => {
      gsap.fromTo(".team-member", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: teamRef.current, start: "top 70%" },
      });
    }, teamRef);

    const trustCtx = gsap.context(() => {
      gsap.fromTo(".trust-card", { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: trustRef.current, start: "top 75%" },
      });
    }, trustRef);

    return () => { heroCtx.revert(); valCtx.revert(); teamCtx.revert(); trustCtx.revert(); };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SeoHead
        title="About Safe Care Veterinary Clinic Dubai | Our Vets & Story"
        description="Meet the team behind SCVC — Dubai's most compassionate veterinary clinic. Led by Dr. Mohammed Kizo, our vets provide expert, stress-free care for dogs, cats and rabbits."
        canonical="https://scvc.ae/about"
        schema={breadcrumbSchema}
      />
      <Navbar />

      <section ref={heroRef} className="relative pt-40 pb-32 overflow-hidden bg-secondary/30">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="about-hero-el inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <Heart className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true" />
            Our Story
          </div>
          <h1 className="about-hero-el text-4xl md:text-5xl lg:text-7xl font-bold font-sans text-foreground leading-[1.05] tracking-tight mb-8">
            The People<br />
            <span className="font-serif italic font-medium text-primary">Behind The Care.</span>
          </h1>
          <p className="about-hero-el text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Safe Care Veterinary Clinic was founded on the belief that great veterinary medicine requires both clinical excellence and genuine human connection. We are a team of animal lovers first, and clinicians second.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background border-b border-border" aria-label="Clinic statistics">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-bold font-sans text-primary mb-2">{s.number}</p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-background" aria-label="Our story">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-sans mb-8">Our Story</h2>
              <div className="space-y-5 text-foreground/75 leading-relaxed">
                <p>
                  Safe Care Veterinary Clinic was born from a frustration that many Dubai pet owners know well: veterinary care that is technically adequate but emotionally disconnected — rushed consultations, unexplained decisions, and the constant logistical challenge of actually getting your pet to and from the clinic.
                </p>
                <p>
                  Dr. Mohammed Kizo founded SCVC with a different vision. He wanted to build a clinic where time was never rushed, where every owner left feeling informed and confident, and where the barriers between a pet owner and expert care were removed one by one.
                </p>
                <p>
                  The Pet Taxi was one of the first innovations — recognising that for many Dubai residents, the biggest obstacle to regular veterinary care was simply the logistics of getting there. Today, it remains one of the services our clients value most.
                </p>
                <p>
                  Today, SCVC is a growing team of veterinarians and support staff united by a shared philosophy: that excellent medicine and genuine compassion are not competing priorities — they are inseparable.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {vetClinicImages.map((img, i) => (
                  <img
                    key={i}
                    src={img.url}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-48 object-cover rounded-3xl shadow-md${i % 2 !== 0 ? " mt-8" : ""}`}
                  />
                ))}
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40">
                <p className="font-bold text-sm text-foreground">Founded in Dubai</p>
                <p className="text-xs text-muted-foreground">With love for every pet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card relative overflow-hidden" aria-label="Our mission">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-10">Our Mission</h2>
          <p className="text-3xl md:text-4xl font-serif italic text-primary leading-relaxed mb-12">
            "To make expert, compassionate veterinary care genuinely accessible to every pet owner in Dubai — by removing every barrier between your animal and the care they deserve."
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "For Pets", body: "Every animal is treated as an individual, not a case number. We take the time to understand their personality, their fears, and their health history." },
              { title: "For Owners", body: "You are always informed, always heard, and always supported. Veterinary care works best when owners and vets work as partners." },
              { title: "For Community", body: "We believe healthier pets create happier families and a stronger community. Our goal is to raise the standard of animal welfare in the UAE." },
            ].map((item, i) => (
              <div key={i} className="bg-background rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="py-28 bg-background" aria-label="Our core values">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">What We Stand For</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Five core values that guide every decision we make, every interaction we have, and every patient we treat.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className={`value-card bg-card border border-border rounded-3xl p-8 hover:shadow-md transition-shadow ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                <div className={`p-4 rounded-2xl w-fit mb-5 ${v.color}`} aria-hidden="true">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={teamRef} className="py-28 bg-secondary/30" aria-label="Meet our veterinarians">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">Meet The Veterinarians</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Three dedicated veterinarians. One shared philosophy: every pet deserves to be treated with the same care and attention as a member of your family.
            </p>
          </div>

          <div className="space-y-12">
            {team.map((member, idx) => (
              <div
                key={idx}
                className={`team-member grid lg:grid-cols-2 gap-12 items-center bg-card border border-border rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow ${idx % 2 !== 0 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={idx % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-5 mb-6">
                    <img
                      src={member.img}
                      alt={member.imgAlt}
                      loading="lazy"
                      decoding="async"
                      className="w-20 h-20 rounded-full object-cover border-4 border-background shadow-md"
                    />
                    <div>
                      <h3 className="text-2xl font-bold font-sans text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-foreground/75 leading-relaxed mb-6">{member.bio}</p>
                  <ul className="flex flex-wrap gap-2" aria-label={`${member.name}'s specialties`}>
                    {member.specialties.map((s, i) => (
                      <li key={i} className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative ${idx % 2 !== 0 ? "lg:col-start-1" : ""}`}>
                  <div className="bg-secondary/60 rounded-[2.5rem] p-3 -rotate-1">
                    <img
                      src={teamImages[idx]}
                      alt={teamImageAlts[idx]}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-72 object-cover rounded-[2rem]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-card border border-border rounded-3xl p-10 text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-background shadow-md mx-auto mb-6">
              <img
                src="https://randomuser.me/api/portraits/women/33.jpg"
                alt="SCVC support team member — pet care specialist and client coordinator"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold font-sans text-foreground mb-2">Support Team</h3>
            <p className="text-primary font-medium mb-4">Pet Care Specialists & Client Coordinators</p>
            <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Behind every great vet visit is a dedicated support team managing scheduling, Pet Taxi coordination, client communication and the warm welcome your pet receives the moment they arrive. They are the heartbeat of the SCVC daily experience.
            </p>
          </div>
        </div>
      </section>

      <section ref={trustRef} className="py-28 bg-background" aria-label="Client testimonials">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">Why Pet Owners Trust Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">In the words of the owners and animals who have made SCVC their veterinary home.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {trustReasons.map((t, i) => (
              <figure key={i} className="trust-card bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute -top-6 -right-6 text-8xl text-primary/5 font-serif leading-none select-none" aria-hidden="true">"</div>
                <div className="flex gap-1 mb-6" aria-label="5 out of 5 stars">
                  {[1,2,3,4,5].map(j => <Star key={j} className="w-4 h-4 fill-primary text-primary" aria-hidden="true" />)}
                </div>
                <blockquote className="font-serif text-xl text-foreground leading-relaxed mb-8 relative z-10">"{t.quote}"</blockquote>
                <figcaption className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.img}
                    alt={`${t.name} — SCVC client`}
                    loading="lazy"
                    decoding="async"
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/10"
                  />
                  <span className="font-bold text-foreground">{t.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden bg-[#E11D79]" aria-label="Contact us">
        <div className="absolute inset-0 opacity-10" aria-hidden="true" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-sans mb-6">Come Meet The Team</h2>
          <p className="text-white/90 text-xl mb-10 font-medium">We'd love to welcome you and your pet into the SCVC family.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#E11D79] px-10 py-5 rounded-full text-lg font-bold hover:shadow-xl hover:scale-105 transition-all active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50">
              Book a Visit
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
