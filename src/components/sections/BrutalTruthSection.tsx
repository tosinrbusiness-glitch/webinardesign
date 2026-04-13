import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle } from "lucide-react";

const BrutalTruthSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/3 to-background" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-full px-4 py-1.5 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-destructive text-xs font-semibold tracking-wider uppercase">The Brutal Truth</span>
          </div>
          <h2 className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground uppercase mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            THERE IS A <span className="text-primary">40X</span> WEALTH GAP
          </h2>
          <p className={`text-xl text-muted-foreground italic max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            "The median white family holds <span className="text-primary font-semibold not-italic">$171,000</span> in wealth.
            The median Black family holds just <span className="text-destructive font-semibold not-italic">$17,150</span>.
            Homeownership is how we close this gap."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className={`glass-card p-8 text-center glow-purple transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <p className="font-heading text-6xl font-bold text-primary mb-3">4/10</p>
            <p className="font-heading text-lg uppercase tracking-wider text-foreground mb-2">Homeownership Rate</p>
            <p className="text-sm text-muted-foreground">Only 4 in 10 Black families in Philadelphia own their home, compared to 7 in 10 white families</p>
          </div>
          <div className={`glass-card p-8 text-center glow-purple transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <p className="font-heading text-6xl font-bold text-primary mb-3">100%</p>
            <p className="font-heading text-lg uppercase tracking-wider text-foreground mb-2">Our Commitment</p>
            <p className="text-sm text-muted-foreground">We are 100% dedicated to putting Philadelphia families on the path to property ownership and wealth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrutalTruthSection;
