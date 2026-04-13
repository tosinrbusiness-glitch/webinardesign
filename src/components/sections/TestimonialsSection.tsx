import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Johnson",
    initials: "MJ",
    location: "North Philadelphia",
    rating: 5,
    quote: "I thought I'd never own a home. Through this program, I got $12,500 in grants and moved my family into our first home with only $2,000 out of pocket.",
    highlight: "$12,500",
  },
  {
    name: "Keisha Thompson",
    initials: "KT",
    location: "West Philadelphia",
    rating: 5,
    quote: "As a single mother, I assumed homeownership was impossible. They showed me how to use $8,000 in assistance programs I never knew existed.",
    highlight: "$8,000",
  },
  {
    name: "Andre Williams",
    initials: "AW",
    location: "Germantown",
    rating: 5,
    quote: "My credit was at 580 and I had no savings. Within 6 months, I was approved and received $15,000 in grants. Now my home has already appreciated $45,000.",
    highlight: "$15,000",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/3 to-background" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-secondary font-heading text-sm tracking-[0.3em] uppercase mb-3">SOCIAL PROOF</p>
          <h2 className={`font-heading text-4xl sm:text-5xl font-bold text-foreground uppercase transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            VOICES OF THE <span className="text-gradient-gold">REVOLUTION</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`glass-card p-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-6">
                "{t.quote.split(t.highlight).map((part, idx) => (
                  <span key={idx}>
                    {part}
                    {idx < t.quote.split(t.highlight).length - 1 && (
                      <span className="text-primary font-bold">{t.highlight}</span>
                    )}
                  </span>
                ))}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
