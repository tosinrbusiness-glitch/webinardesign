import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Banknote, Gift, CheckCircle, FileCheck, ArrowRight } from "lucide-react";

const modules = [
  {
    icon: Banknote,
    number: "01",
    title: "Minimal Cash Down",
    description: "Learn the exact strategies to purchase a home with little to no money out of pocket using available programs.",
  },
  {
    icon: Gift,
    number: "02",
    title: "Grant Assistance",
    description: "Access up to $10,000+ in grants and assistance programs specifically for Philadelphia residents.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Qualification Blueprint",
    description: "Discover how to qualify even with imperfect credit, limited savings, or non-traditional income sources.",
  },
  {
    icon: FileCheck,
    number: "04",
    title: "Pre-Approval Mastery",
    description: "Get pre-approved in days, not weeks. Our streamlined process removes the typical barriers and confusion.",
  },
];

const CurriculumSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/3 to-background" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className={`text-secondary font-heading text-sm tracking-[0.3em] uppercase mb-3 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>THE CURRICULUM</p>
          <h2 className={`font-heading text-4xl sm:text-5xl font-bold text-foreground uppercase transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            MASTER THE <span className="text-gradient-purple">POSSESSION STRATEGY</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {modules.map((mod, i) => (
            <div
              key={i}
              className={`glass-card p-6 group hover:border-primary/40 transition-all duration-700 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <mod.icon className="w-6 h-6 text-secondary" />
                </div>
                <span className="font-heading text-3xl font-bold text-muted/30">{mod.number}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground uppercase mb-3">{mod.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{mod.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <button className="inline-flex items-center gap-2 text-primary font-heading text-sm uppercase tracking-wider hover:gap-4 transition-all">
            VIEW FULL MODULES <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
