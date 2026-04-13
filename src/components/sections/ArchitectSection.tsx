import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Clock, DollarSign } from "lucide-react";

const ArchitectSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-accent/10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative">
              <div className="w-full aspect-[3/4] rounded-2xl bg-gradient-to-br from-secondary/20 via-muted to-primary/10 border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary to-primary mx-auto mb-4 flex items-center justify-center">
                    <span className="font-heading text-4xl font-bold text-primary-foreground">ET</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Portrait</p>
                </div>
              </div>
              {/* Name badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-primary rounded-xl p-4 text-center">
                <p className="font-heading text-lg font-bold text-primary-foreground uppercase">Dr. Elena Thorne</p>
                <p className="text-primary-foreground/70 text-xs uppercase tracking-wider">Wealth Strategist & Founder</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div>
              <p className="text-secondary font-heading text-sm tracking-[0.3em] uppercase mb-3">THE ARCHITECT</p>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground uppercase mb-4">
                MEET YOUR <span className="text-gradient-gold">GUIDE</span>
              </h2>
            </div>

            <blockquote className="text-lg text-foreground/80 italic border-l-4 border-primary pl-4">
              "I've spent 15 years proving that homeownership isn't just for the privileged. It's a right — and I've built the system to make it your reality."
            </blockquote>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 text-center">
                <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-heading text-2xl font-bold text-primary">15+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="glass-card p-4 text-center">
                <DollarSign className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-heading text-2xl font-bold text-primary">$150M+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Wealth Generated</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Dr. Elena Thorne is a nationally recognized wealth strategist who has helped thousands of families achieve homeownership through innovative grant programs and down payment assistance strategies. Her work has been featured in Forbes, The Philadelphia Inquirer, and NPR.
            </p>

            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground font-semibold">Featured in Forbes, NPR, Philadelphia Inquirer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectSection;
