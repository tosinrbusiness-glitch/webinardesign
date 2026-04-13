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
    <section
      className="relative py-28 overflow-hidden"
      ref={ref}
      style={{ background: 'linear-gradient(180deg, #140a28 0%, #0d0218 40%, #140a28 100%)' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.3), transparent)' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className={`text-[#b87aff] font-heading text-xs tracking-[0.35em] uppercase mb-4 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>The Curriculum</p>
          <h2 className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-foreground">MASTER THE </span>
            <span className="bg-gradient-to-r from-[#b87aff] to-[#7c3aed] bg-clip-text text-transparent">POSSESSION</span>
            <br />
            <span className="bg-gradient-to-r from-[#b87aff] to-[#7c3aed] bg-clip-text text-transparent">STRATEGY</span>
          </h2>
          <div className="w-10 h-1 bg-secondary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {modules.map((mod, i) => (
            <div
              key={i}
              className={`group transition-all duration-700 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="rounded-2xl p-[1px] h-full" style={{ background: 'linear-gradient(145deg, rgba(124, 58, 237, 0.4), rgba(124, 58, 237, 0.08))' }}>
                <div className="rounded-2xl p-6 h-full group-hover:border-primary/30 transition-all" style={{ background: 'linear-gradient(145deg, rgba(30, 16, 64, 0.6), rgba(15, 8, 35, 0.8))' }}>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(124, 58, 237, 0.05))', border: '1px solid rgba(124, 58, 237, 0.25)' }}>
                      <mod.icon className="w-6 h-6 text-[#b87aff]" />
                    </div>
                    <span className="font-heading text-3xl font-bold text-white/[0.06]">{mod.number}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground uppercase mb-3">{mod.title}</h3>
                  <p className="text-sm text-[#9a8cb0] leading-relaxed">{mod.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <button className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider hover:gap-4 transition-all bg-gradient-to-r from-[#f5c518] to-[#e8a900] bg-clip-text text-transparent font-bold" style={{ filter: 'drop-shadow(0 0 10px rgba(245, 197, 24, 0.2))' }}>
            VIEW FULL MODULES <ArrowRight className="w-4 h-4 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
