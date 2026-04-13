import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { DollarSign, Home, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    value: "Under $3,500",
    label: "OUT OF POCKET",
    description: "Buyers in Philly are getting into homes with low out-of-pocket costs — sometimes under $3,500 — using the right strategy.",
  },
  {
    icon: Home,
    value: "4,500+",
    label: "FAMILIES MOVED",
    description: "Thousands of Philadelphia residents have stopped renting and started building generational wealth through homeownership.",
  },
  {
    icon: TrendingUp,
    value: "40X",
    label: "MORE WEALTH",
    description: "Homeowners build 40X more wealth than renters. Every month you own is a month you're building equity — not burning cash.",
  },
];

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d0218 0%, #140a28 30%, #1a0e35 60%, #140a28 100%)' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, transparent)' }} />

      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-primary font-heading text-xs tracking-[0.35em] uppercase mb-4">
            This Webinar Shows You How To Move
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight">
            <span className="text-foreground">THE </span>
            <span className="bg-gradient-to-b from-[#b87aff] to-[#7c3aed] bg-clip-text text-transparent">POWER </span>
            <span className="text-foreground">OF</span>
            <br />
            <span className="text-foreground">POSSESSION</span>
          </h2>
          <div className="w-10 h-1 bg-secondary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="rounded-2xl p-[2px]" style={{ background: 'linear-gradient(145deg, #7c3aed, #5b21b6, #7c3aed)' }}>
                <div className="bg-white rounded-2xl p-8 h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-[#1a1a2e] flex items-center justify-center mx-auto mb-5">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-heading text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-1">
                    {stat.value}
                  </p>
                  <p className="font-heading text-sm tracking-[0.15em] text-[#1a1a2e] font-bold uppercase mb-3">
                    {stat.label}
                  </p>
                  <p className="text-[#5a5a6e] text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
