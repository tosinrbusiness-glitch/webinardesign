import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Wallet, Home, TrendingUp } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const stats = [
  {
    icon: Wallet,
    value: 3.4,
    prefix: "$",
    suffix: "M+",
    label: "GRANTS UNLOCKED",
    description: "Grant funding secured for families who thought they couldn't afford a home.",
  },
  {
    icon: Home,
    value: 4500,
    prefix: "",
    suffix: "+",
    label: "FAMILIES HOUSED",
    description: "From lifelong renters to Proud owners across Philadelphia district.",
  },
  {
    icon: TrendingUp,
    value: 75,
    prefix: "",
    suffix: "%",
    label: "BUYERS",
    description: "Became Homeowners for less than $3500.",
  },
];

function useCountUp(target: number, isVisible: boolean, duration = 2000, decimals = 0) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration, decimals]);

  return count;
}

const StatCard = ({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) => {
  const decimals = stat.value % 1 !== 0 ? 1 : 0;
  const count = useCountUp(stat.value, isVisible, 2000, decimals);
  const formatted = decimals > 0 ? count.toFixed(1) : count.toLocaleString();

  return (
    <div
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${(index + 1) * 200}ms` }}
    >
      <div
        className="relative rounded-3xl p-[3px] group transition-all duration-500 hover:-translate-y-2 cursor-pointer h-full"
        style={{
          background: 'linear-gradient(180deg, hsl(263 83% 65%), hsl(263 83% 50%), hsl(263 83% 65%))',
          boxShadow: '0 0 25px hsl(263 83% 57% / 0.35), 0 0 50px hsl(263 83% 57% / 0.15)',
        }}
      >
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: '0 0 40px hsl(263 83% 57% / 0.6), 0 0 80px hsl(263 83% 57% / 0.3), 0 10px 40px rgba(0,0,0,0.4)',
          }}
        />
        <div
          className="relative rounded-3xl px-8 py-12 h-full flex flex-col items-center text-center"
          style={{ background: '#0f0a1e', minHeight: '320px' }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110"
            style={{
              background: '#111020',
              border: '2px solid hsl(47 92% 52% / 0.4)',
              boxShadow: '0 0 15px hsl(47 92% 52% / 0.15)',
            }}
          >
            <stat.icon className="w-6 h-6 text-primary" />
          </div>
          <p className="font-heading text-5xl sm:text-6xl font-bold text-foreground mb-3">
            {stat.prefix}{formatted}{stat.suffix}
          </p>
          <p className="font-heading text-xs tracking-[0.25em] text-foreground/80 font-bold uppercase mb-5">
            {stat.label}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px]">
            {stat.description}
          </p>
        </div>
      </div>
    </div>
  );
};

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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
