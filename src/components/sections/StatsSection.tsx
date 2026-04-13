import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { DollarSign, Home, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    value: "$3.4M+",
    label: "Grants Unlocked",
    description: "Total grant funding secured for Philadelphia homebuyers through our program",
  },
  {
    icon: Home,
    value: "4,500+",
    label: "Families Housed",
    description: "Philadelphia families who have achieved homeownership through our strategies",
  },
  {
    icon: TrendingUp,
    value: "75%",
    label: "Wealth Growth",
    description: "Average net worth increase among participants within the first 3 years",
  },
];

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-secondary font-heading text-sm tracking-[0.3em] uppercase mb-3">PROVEN RESULTS</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground uppercase">
            THE POWER OF <span className="text-gradient-gold">POSSESSION</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`bg-foreground text-background rounded-2xl p-8 text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-heading text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="font-heading text-lg font-semibold uppercase tracking-wider mb-3">{stat.label}</p>
              <p className="text-sm text-background/60 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
