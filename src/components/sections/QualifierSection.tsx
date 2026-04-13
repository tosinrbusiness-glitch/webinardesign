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
    <section className="py-24 relative" ref={ref}>
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* For You */}
          <div className={`glass-card-bright p-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-6">✅ This Is For You If...</h3>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className={`glass-card p-8 opacity-70 transition-all duration-700 delay-200 ${isVisible ? "opacity-70 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <h3 className="font-heading text-2xl font-bold text-muted-foreground uppercase mb-6">❌ This Is NOT For You If...</h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-destructive/60" />
                  </div>
                  <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualifierSection;
