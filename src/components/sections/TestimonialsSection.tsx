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
    <section
      className="relative py-28 overflow-hidden"
      ref={ref}
      style={{ background: 'linear-gradient(180deg, #140a28 0%, #1a0e35 50%, #140a28 100%)' }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(245, 197, 24, 0.03) 0%, transparent 70%)' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className={`text-[#b87aff] font-heading text-xs tracking-[0.35em] uppercase mb-4 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>Social Proof</p>
          <h2 className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-foreground">VOICES OF THE </span>
            <span className="bg-gradient-to-r from-[#f5c518] to-[#ffdf6b] bg-clip-text text-transparent">REVOLUTION</span>
          </h2>
          <div className="w-10 h-1 bg-primary mx-auto mt-6 rounded-full" style={{ boxShadow: '0 0 15px rgba(245, 197, 24, 0.4)' }} />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="rounded-2xl p-[1px] h-full" style={{ background: 'linear-gradient(145deg, rgba(124, 58, 237, 0.4), rgba(124, 58, 237, 0.08))' }}>
                <div className="rounded-2xl p-6 h-full flex flex-col" style={{ background: 'linear-gradient(145deg, rgba(30, 16, 64, 0.6), rgba(15, 8, 35, 0.8))' }}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" style={{ filter: 'drop-shadow(0 0 4px rgba(245, 197, 24, 0.4))' }} />
                    ))}
                  </div>
                  <p className="text-foreground/90 text-sm leading-relaxed mb-6 flex-1">
                    "{t.quote.split(t.highlight).map((part, idx) => (
                      <span key={idx}>
                        {part}
                        {idx < t.quote.split(t.highlight).length - 1 && (
                          <span className="font-bold bg-gradient-to-r from-[#f5c518] to-[#ffdf6b] bg-clip-text text-transparent">{t.highlight}</span>
                        )}
                      </span>
                    ))}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#3a2060]/40">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground" style={{ background: 'linear-gradient(135deg, #7c3aed, #f5c518)' }}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">{t.name}</p>
                      <p className="text-[#9a8cb0] text-xs">{t.location}</p>
                    </div>
                  </div>
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
