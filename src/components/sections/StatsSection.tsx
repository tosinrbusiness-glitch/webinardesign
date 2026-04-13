import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Wallet, Home, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Wallet,
    value: "$3.4M+",
    label: "GRANTS UNLOCKED",
    description: "Elite funding secured for families who thought they couldn't afford a home.",
  },
  {
    icon: Home,
    value: "4,500+",
    label: "FAMILIES HOUSED",
    description: "From lifelong renters to sovereign owners across every Philadelphia district.",
  },
  {
    icon: TrendingUp,
    value: "75%",
    label: "WEALTH GROWTH",
    description: "The average equity gain for our members within their first 24 months of ownership.",
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
            <span className="bg-gradient-to-b from-secondary to-accent bg-clip-text text-transparent">POWER </span>
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
              <div
                className="relative rounded-2xl p-[2px] group"
                style={{
                  background: 'linear-gradient(145deg, hsl(263 83% 57%), hsl(263 83% 40%), hsl(263 83% 57%))',
                  boxShadow: '0 0 25px hsl(263 83% 57% / 0.3), 0 0 50px hsl(263 83% 57% / 0.15)',
                }}
              >
                <div
                  className="rounded-2xl p-8 h-full text-center"
                  style={{ background: 'linear-gradient(180deg, #1a0e35 0%, #0d0520 100%)' }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                    style={{
                      background: 'linear-gradient(145deg, #1a1a2e, #0d0d1a)',
                      border: '1px solid hsl(263 83% 57% / 0.3)',
                      boxShadow: '0 0 15px hsl(263 83% 57% / 0.15)',
                    }}
                  >
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="font-heading text-sm tracking-[0.15em] text-foreground font-bold uppercase mb-3">
                    {stat.label}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
