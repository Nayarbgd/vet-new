import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  Phone, MessageCircle, MapPin, Clock, Zap, Send, CheckCircle, Star
} from "lucide-react";
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
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://scvc.ae/contact" },
  ],
};

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 8:00 PM" },
  { day: "Saturday", time: "9:00 AM – 6:00 PM" },
  { day: "Sunday", time: "10:00 AM – 4:00 PM" },
  { day: "Public Holidays", time: "Emergency calls only" },
];

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+971 00 000 0000",
    sub: "Speak directly with our team",
    href: "tel:+971000000000",
    color: "bg-blue-100 text-blue-600",
    cta: "Call Now",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    sub: "Quick responses during working hours",
    href: "https://wa.me/971000000000",
    color: "bg-green-100 text-green-600",
    cta: "Open WhatsApp",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Dubai, UAE",
    sub: "Contact us for the exact address",
    href: "#map",
    color: "bg-primary/10 text-primary",
    cta: "Get Directions",
  },
];

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", pet: "", petType: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const heroCtx = gsap.context(() => {
      gsap.fromTo(
        ".contact-hero-el",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out" }
      );
    }, heroRef);

    const formCtx = gsap.context(() => {
      gsap.fromTo(
        ".form-el",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: formRef.current, start: "top 75%" } }
      );
    }, formRef);

    return () => { heroCtx.revert(); formCtx.revert(); };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SeoHead
        title="Contact Safe Care Veterinary Clinic Dubai | Call, WhatsApp or Visit"
        description="Get in touch with Safe Care Veterinary Clinic in Dubai. Call us, WhatsApp, or send a message to book an appointment for your dog, cat or rabbit. Open 7 days a week."
        canonical="https://scvc.ae/contact"
        schema={breadcrumbSchema}
      />
      <Navbar />

      <section ref={heroRef} className="relative pt-40 pb-28 overflow-hidden bg-secondary/30">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="contact-hero-el inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            Get In Touch
          </div>
          <h1 className="contact-hero-el text-4xl md:text-5xl lg:text-7xl font-bold font-sans text-foreground leading-[1.05] tracking-tight mb-8">
            Speak With A<br />
            <span className="font-serif italic font-medium text-primary">Veterinarian Today.</span>
          </h1>
          <p className="contact-hero-el text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Whether you have a question, need to book an appointment or are facing an emergency — our team is here for you and your pet.
          </p>
          <div className="contact-hero-el flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+971000000000"
              aria-label="Call Safe Care Veterinary Clinic now"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-full text-lg font-bold transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call Now
            </a>
            <a
              href="https://wa.me/971000000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with SCVC on WhatsApp (opens in new tab)"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:shadow-lg hover:shadow-green-600/20 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" aria-label="Contact options">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={`${method.label}: ${method.value}`}
                className="group bg-card border border-border rounded-3xl p-8 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <div className={`p-4 rounded-2xl w-fit mb-5 ${method.color} group-hover:scale-110 transition-transform`} aria-hidden="true">
                  <method.icon className="w-7 h-7" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">{method.label}</p>
                <p className="text-xl font-bold text-foreground mb-1">{method.value}</p>
                <p className="text-sm text-muted-foreground mb-6 flex-1">{method.sub}</p>
                <span className="text-sm font-bold text-primary group-hover:underline" aria-hidden="true">{method.cta} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30" aria-label="Opening hours and location">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-sans mb-8">Opening Hours</h2>
              <dl className="space-y-4">
                {hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-border last:border-b-0">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                      <dt className="font-medium text-foreground">{h.day}</dt>
                    </div>
                    <dd className={`font-bold text-sm ${i === 3 ? "text-muted-foreground" : "text-foreground"}`}>{h.time}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse mt-2 shrink-0" aria-hidden="true"></div>
                  <div>
                    <p className="font-bold text-foreground mb-1">Currently Open</p>
                    <p className="text-sm text-foreground/70">
                      Walk-ins are welcome during opening hours. For guaranteed appointment slots, please call ahead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="map">
              <h2 className="text-3xl md:text-4xl font-bold font-sans mb-8">Find Us</h2>
              <div className="rounded-3xl overflow-hidden border border-border shadow-sm h-72 bg-secondary flex items-center justify-center mb-6 relative">
                <iframe
                  title="Safe Care Veterinary Clinic location in Dubai, UAE"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6833386425!2d54.89782700000001!3d25.076022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1748296440000!5m2!1sen!2s"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <address className="not-italic flex items-start gap-3 bg-card border border-border rounded-2xl p-5">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-foreground mb-1">Dubai, United Arab Emirates</p>
                  <p className="text-sm text-muted-foreground">Contact us for the exact clinic address — we'll send you a pin on WhatsApp.</p>
                </div>
              </address>
            </div>
          </div>
        </div>
      </section>

      <section ref={formRef} className="py-24 bg-background" aria-label="Send us a message">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="form-el text-3xl md:text-4xl font-bold font-sans mb-4">Send Us a Message</h2>
            <p className="form-el text-muted-foreground text-lg">Fill in the form and we'll get back to you as quickly as possible — usually within a few hours.</p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center" role="alert">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Message Received!</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Thank you for contacting Safe Care Veterinary Clinic. One of our team members will be in touch with you shortly. For urgent matters, please call us directly.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:+971000000000" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Call Us Now
                </a>
                <button onClick={() => setSubmitted(false)} className="inline-flex items-center justify-center bg-white text-foreground border border-border px-8 py-4 rounded-full font-bold hover:bg-secondary/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm" noValidate>
              <div className="form-el grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-sm font-bold text-foreground">Your Name *</label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    placeholder="Sarah Al-Mansouri"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-sm font-bold text-foreground">Email Address *</label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    placeholder="sarah@email.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div className="form-el grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-phone" className="text-sm font-bold text-foreground">Phone / WhatsApp</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-pet-type" className="text-sm font-bold text-foreground">Pet Type</label>
                  <select
                    id="contact-pet-type"
                    value={formData.petType}
                    onChange={e => setFormData({ ...formData, petType: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  >
                    <option value="">Select pet type</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-el mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-pet-name" className="text-sm font-bold text-foreground">Pet's Name</label>
                  <input
                    id="contact-pet-name"
                    type="text"
                    placeholder="Luna, Max, Bella..."
                    value={formData.pet}
                    onChange={e => setFormData({ ...formData, pet: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div className="form-el mb-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="text-sm font-bold text-foreground">How Can We Help? *</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell us about your pet and what you need. Feel free to ask any question..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>
              </div>
              <div className="form-el">
                <button
                  type="submit"
                  disabled={loading}
                  aria-label={loading ? "Sending your message..." : "Send message to Safe Care Veterinary Clinic"}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-full text-base font-bold transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <section className="relative py-32 overflow-hidden bg-[#E11D79]" aria-label="Emergency contact">
        <div className="absolute inset-0 opacity-10" aria-hidden="true" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-white text-sm font-bold mb-6">
              <Zap className="w-4 h-4" aria-hidden="true" />
              Emergency Contact
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-sans mb-4">Pet Emergency?</h2>
            <p className="text-white/90 text-xl font-medium max-w-2xl mx-auto">
              If your pet is in immediate distress, don't wait. Call us now and we'll prepare for your arrival immediately.
            </p>
          </div>
          <ul className="grid md:grid-cols-2 gap-6 mb-12" aria-label="Emergency symptoms — call us immediately">
            {[
              "Unconscious or unresponsive",
              "Difficulty breathing",
              "Severe bleeding",
              "Suspected poisoning",
              "Seizures or convulsions",
              "Severe trauma or injury",
            ].map((symptom, i) => (
              <li key={i} className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-3">
                <div className="w-2 h-2 rounded-full bg-white shrink-0" aria-hidden="true"></div>
                <span className="text-white font-medium">{symptom}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <a
              href="tel:+971000000000"
              aria-label="Call the SCVC emergency line now"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#E11D79] px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
            >
              <Phone className="w-6 h-6" aria-hidden="true" />
              Call Emergency Line
            </a>
            <p className="text-white/70 text-sm mt-4">+971 00 000 0000 — Available during clinic hours</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-bold text-xl text-foreground mb-1">Still have questions?</p>
              <p className="text-muted-foreground">Our team typically responds within 2–3 hours during working hours.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2" aria-hidden="true">
                  {["women/44", "men/32", "women/68"].map((p, i) => (
                    <img key={i} src={`https://randomuser.me/api/portraits/${p}.jpg`} alt="" loading="lazy" decoding="async" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5" aria-label="5 star rating">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-primary text-primary" aria-hidden="true" />)}
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">Trusted by pet owners across Dubai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
