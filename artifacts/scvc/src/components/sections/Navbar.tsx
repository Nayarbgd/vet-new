import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Pet Taxi", href: "/pet-taxi" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out px-6 py-3 rounded-full flex items-center gap-8 ${
          scrolled
            ? "bg-white/70 backdrop-blur-md shadow-lg border border-white/20 w-[95%] max-w-5xl justify-between"
            : "bg-transparent w-[95%] max-w-5xl justify-between"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
            <Heart className="w-5 h-5 text-primary" fill="currentColor" />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">SCVC</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                location === item.href
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          data-testid="btn-nav-call"
          className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-md hover:scale-105 active:scale-95"
        >
          Call Now
        </Link>

        <button
          className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-bold mt-4 hover:bg-primary/90 transition-all"
          >
            Call Now
          </Link>
        </div>
      )}
    </>
  );
}
