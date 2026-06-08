import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "I recently used the grooming and bath service from SCVS VAT Clinic for my cat. The staff was friendly and professional, providing excellent care. The pick-up and drop-off service was reliable, making it super convenient. My cat came back looking clean and refreshed! Highly recommend! It was amazing service, thank you so much for the amazing service and affordable prices.",
    name: "Mini Mini",
    initials: "MM",
    color: "#e91e8c",
    meta: "2 reviews · Google"
  },
  {
    quote: "I couldn't be happier with the care my fur babies receives at this clinic. The veterinarians are compassionate and thorough, always taking time to explain every detail. The grooming team is gentle and skilled. Everyone on staff is friendly and clearly passionate about animals. Highly recommended!",
    name: "Laika Odeclas",
    initials: "LO",
    color: "#8b5cf6",
    meta: "Local Guide · 14 reviews · Google"
  },
  {
    quote: "Excellent care and very friendly staff. The veterinarian was kind, patient, and clearly explained everything. I felt confident my pet was in great hands. Highly recommend!",
    name: "LV",
    initials: "LV",
    color: "#7c3aed",
    meta: "4 reviews · Google"
  },
  {
    quote: "Thanks to Dr Mazen & Dr Kemo, you have been so generous and supportive for the whole process — starting from kidney cure to surgery, my cat was very safe with your treatment. All the time I am at work you have taken care of my Olive like it's your own! Thanks to the SCVC whole team, from the sweet clinic manager to the chauffeur who picked & dropped all the time. I am grateful and I recommend the clinic for life.",
    name: "Heena Chhatwani",
    initials: "HC",
    color: "#2563eb",
    meta: "14 reviews · Google"
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
              className="w-[300px] sm:w-[360px] md:w-[420px] shrink-0 bg-background rounded-3xl p-6 md:p-8 shadow-sm border border-border flex flex-col"
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
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-sm"
                  style={{ backgroundColor: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-bold font-sans text-foreground text-sm leading-tight">{t.name}</span>
                  <span className="text-xs text-muted-foreground truncate">{t.meta}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
