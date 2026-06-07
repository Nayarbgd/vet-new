import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import SocialProof from "@/components/sections/SocialProof";
import Process from "@/components/sections/Process";
import Differentiator from "@/components/sections/Differentiator";
import Team from "@/components/sections/Team";
import CtaFinal from "@/components/sections/CtaFinal";
import Footer from "@/components/sections/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white relative">
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
