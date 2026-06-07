import { Heart, Phone, MessageCircle, MapPin } from "lucide-react";
import { Link } from "wouter";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Pet Taxi", href: "/pet-taxi" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1F1F23] pt-20 pb-10 text-white/80">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-16 pb-16 border-b border-white/10">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="bg-[#E11D79] p-2 rounded-full">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">SCVC</span>
            </Link>
            <p className="text-lg font-serif italic text-white/60">Compassion. Expertise. Convenience.</p>
            <p className="text-sm text-white/50 max-w-xs leading-relaxed">
              Trusted veterinary care in Dubai, delivered with genuine love for every pet we treat.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">Navigation</h4>
            <Link href="/" className="text-sm font-medium hover:text-white transition-colors w-fit">Home</Link>
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium hover:text-white transition-colors w-fit">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">Contact Us</h4>
            <a href="tel:+971000000000" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
              <div className="bg-white/10 p-2 rounded-full group-hover:bg-[#E11D79]/30 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              +971 00 000 0000
            </a>
            <a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
              <div className="bg-white/10 p-2 rounded-full group-hover:bg-green-600/30 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </div>
              WhatsApp Us
            </a>
            <div className="flex items-start gap-3 text-sm">
              <div className="bg-white/10 p-2 rounded-full shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <span>Dubai, United Arab Emirates</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/50">
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
            <span className="font-mono">Open & Serving Pets</span>
          </div>

          <p>&copy; 2025 Safe Care Veterinary Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
