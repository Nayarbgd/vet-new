import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "wouter";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out px-6 py-3 rounded-full flex items-center gap-8 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-lg border border-white/20 w-[95%] max-w-5xl justify-between"
          : "bg-transparent w-[95%] max-w-5xl justify-between"
      }`}
    >
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
        <div className="bg-primary/10 p-2 rounded-full">
          <Heart className="w-5 h-5 text-primary" fill="currentColor" />
        </div>
        <span className="font-bold text-xl tracking-tight text-foreground">SCVC</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {["Services", "Pet Taxi", "About", "Contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item.toLowerCase().replace(" ", "-"))}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            {item}
          </button>
        ))}
      </div>

      <button
        onClick={() => scrollTo("contact")}
        data-testid="btn-nav-call"
        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-md hover:scale-105 active:scale-95"
      >
        Call Now
      </button>
    </nav>
  );
}
