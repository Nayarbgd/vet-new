import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import SocialProof from "@/components/sections/SocialProof";
import Process from "@/components/sections/Process";
import Differentiator from "@/components/sections/Differentiator";
import Team from "@/components/sections/Team";
import CtaFinal from "@/components/sections/CtaFinal";
import Footer from "@/components/sections/Footer";
import SeoHead from "@/components/SeoHead";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: "Safe Care Veterinary Clinic",
  alternateName: "SCVC",
  description:
    "Professional veterinary care in Dubai delivered with genuine compassion, clear communication, and stress-free convenience. Serving dogs, cats and rabbits.",
  url: "https://scvc.ae",
  telephone: "+971000000000",
  priceRange: "$$",
  image: "https://scvc.ae/opengraph.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.076022,
    longitude: 55.117483,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "127",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Veterinary Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Consultation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vaccinations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Surgery" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dental Care" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Grooming" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pet Taxi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Laboratory Tests" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Microchipping" } },
    ],
  },
  sameAs: ["https://wa.me/971000000000"],
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white relative">
      <SeoHead
        title="Safe Care Veterinary Clinic Dubai | Expert Pet Care & Pet Taxi"
        description="Safe Care Veterinary Clinic (SCVC) in Dubai — compassionate veterinary care for dogs, cats and rabbits. Consultations, vaccinations, surgery, dental, grooming & unique door-to-door Pet Taxi service."
        canonical="https://scvc.ae/"
        schema={localBusinessSchema}
      />
      <Navbar />
      <Hero />
      <Features />
      <SocialProof />
      <Process />
      <Differentiator />
      <Team />
      <CtaFinal />
      <Footer />
    </main>
  );
}
