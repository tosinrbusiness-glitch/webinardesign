import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, X } from "lucide-react";

const forYou = [
  "You live in Philadelphia or the surrounding area",
  "You're tired of paying someone else's mortgage",
  "You want to build generational wealth",
  "You're ready to take action within 90 days",
  "You believe homeownership is your right",
];

const notForYou = [
  "You're looking for a 'get rich quick' scheme",
  "You're not willing to attend a free training",
  "You have no interest in owning property",
  "You think the system can't work for you",
  "You're not ready to commit to change",
];

const QualifierSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="relative py-28 overflow-hidden"
      ref={ref}
      style={{ background: 'linear-gradient(180deg, #140a28 0%, #1a0e35 50%, #140a28 100%)' }}
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className={`text-[#b87aff] font-heading text-xs tracking-[0.35em] uppercase mb-4 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>Qualification</p>
          <h2 className={`font-heading text-4xl sm:text-5xl font-bold uppercase leading-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-foreground">IS THIS </span>
            <span className="bg-gradient-to-r from-[#f5c518] to-[#ffdf6b] bg-clip-text text-transparent">FOR YOU</span>
            <span className="text-foreground">?</span>
          </h2>
          <div className="w-10 h-1 bg-secondary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* For You */}
          <div className={`rounded-2xl p-[1px] transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`} style={{ background: 'linear-gradient(145deg, rgba(245, 197, 24, 0.5), rgba(245, 197, 24, 0.1))' }}>
            <div className="rounded-2xl p-8 h-full" style={{ background: 'linear-gradient(145deg, rgba(30, 16, 64, 0.7), rgba(15, 8, 35, 0.9))' }}>
              <h3 className="font-heading text-xl font-bold uppercase mb-6 bg-gradient-to-r from-[#f5c518] to-[#ffdf6b] bg-clip-text text-transparent">✅ This Is For You If...</h3>
              <ul className="space-y-4">
                {forYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(245, 197, 24, 0.15)', border: '1px solid rgba(245, 197, 24, 0.3)' }}>
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-foreground/90 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Not For You */}
          <div className={`rounded-2xl p-[1px] transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`} style={{ background: 'linear-gradient(145deg, rgba(124, 58, 237, 0.3), rgba(124, 58, 237, 0.05))' }}>
            <div className="rounded-2xl p-8 h-full opacity-70" style={{ background: 'linear-gradient(145deg, rgba(25, 12, 50, 0.7), rgba(12, 6, 30, 0.9))' }}>
              <h3 className="font-heading text-xl font-bold text-[#9a8cb0] uppercase mb-6">❌ This Is NOT For You If...</h3>
              <ul className="space-y-4">
                {notForYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                      <X className="w-3.5 h-3.5 text-destructive/50" />
                    </div>
                    <span className="text-[#6a5c80] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualifierSection;
