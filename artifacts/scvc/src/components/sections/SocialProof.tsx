import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "I couldn't be happier with the care my fur babies receive. The veterinarians are compassionate and always take time to explain everything.",
    name: "Sarah M.",
    img: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    quote: "The pick-up and drop-off service made everything incredibly convenient.",
    name: "James R.",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "My rescued cat recovered thanks to their guidance and support.",
    name: "Amira K.",
    img: "https://randomuser.me/api/portraits/women/56.jpg"
  },
  {
    quote: "The staff genuinely love animals. You can feel it from the moment you arrive.",
    name: "Priya S.",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "They stayed beyond closing hours to make sure my pet was okay.",
    name: "Omar A.",
    img: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-secondary/30 overflow-hidden" aria-label="Client testimonials">
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-sans text-center">
          Trusted By Pet Owners Across Dubai
        </h2>
      </div>

      {/* Pure CSS infinite marquee — runs entirely on the compositor thread, zero JS */}
      <div className="relative overflow-hidden">
        {/* Fade masks on edges */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style={{ background: "linear-gradient(to right, hsl(var(--secondary) / 0.3), transparent)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style={{ background: "linear-gradient(to left, hsl(var(--secondary) / 0.3), transparent)" }}
          aria-hidden="true"
        />

        <div className="marquee-track flex gap-5 md:gap-6 pb-4" aria-hidden="true">
          {/* Duplicated for seamless loop */}
          {[...testimonials, ...testimonials].map((t, idx) => (
            <article
              key={idx}
              className="w-[300px] sm:w-[360px] md:w-[400px] shrink-0 bg-background rounded-3xl p-6 md:p-8 shadow-sm border border-border flex flex-col"
            >
              <div className="flex gap-1 mb-5" aria-label="5 stars">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <p className="font-serif text-base md:text-lg leading-relaxed text-foreground flex-1 mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  decoding="async"
                  width="48"
                  height="48"
                  className="w-11 h-11 rounded-full object-cover border-2 border-primary/10"
                />
                <span className="font-bold font-sans text-foreground text-sm">{t.name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
