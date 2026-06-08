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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out px-4 sm:px-6 py-3 rounded-full flex items-center gap-4 sm:gap-8 ${
          scrolled
            ? "bg-white/70 backdrop-blur-md shadow-lg border border-white/20 w-[95%] max-w-5xl justify-between"
            : "bg-transparent w-[95%] max-w-5xl justify-between"
        }`}
      >
        <Link href="/" aria-label="Safe Care Veterinary Clinic — home" className="flex items-center gap-2 cursor-pointer group shrink-0">
          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
            <Heart className="w-5 h-5 text-primary" fill="currentColor" aria-hidden="true" />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">SCVC</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={location === item.href ? "page" : undefined}
              className={`text-sm font-medium transition-colors focus:outline-none focus-visible:underline ${
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
          aria-label="Call the clinic"
          className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground px-5 lg:px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-md hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Call Now
        </Link>

        <button
          className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen
            ? <X className="w-5 h-5" aria-hidden="true" />
            : <Menu className="w-5 h-5" aria-hidden="true" />
          }
        </button>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-40 bg-white/97 backdrop-blur-md flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={location === item.href ? "page" : undefined}
            className={`text-2xl font-bold transition-colors focus:outline-none focus-visible:underline ${
              location === item.href ? "text-primary" : "text-foreground hover:text-primary"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          aria-label="Call the clinic"
          className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-bold mt-4 hover:bg-primary/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95"
        >
          Call Now
        </Link>
      </div>
    </>
  );
}
