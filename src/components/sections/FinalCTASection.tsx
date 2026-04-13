import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle, Shield, Lock, ArrowUp } from "lucide-react";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/3 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-4xl">
        <div className={`inline-flex items-center gap-2 bg-destructive/10 border border-destructive/30 rounded-full px-5 py-2 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <AlertTriangle className="w-4 h-4 text-destructive" />
          <span className="text-destructive text-xs font-bold tracking-wider uppercase">CRITICAL ULTIMATUM</span>
        </div>

        <h2 className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground uppercase leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          EVERY MONTH YOU RENT = <span className="text-primary">SOMEONE ELSE BUILDS WEALTH</span>
        </h2>

        <p className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          The average renter in Philadelphia pays <span className="text-primary font-bold">$1,400/month</span> — that's <span className="text-primary font-bold">$16,800/year</span> going directly into someone else's pocket. Every day you wait is another day of lost equity.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-10 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg uppercase tracking-wider py-5 px-10 rounded-xl transition-all animate-pulse-glow font-bold">
            🔥 I'M READY TO OWN
          </button>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg uppercase tracking-wider py-5 px-10 rounded-xl transition-all font-bold border-2 border-primary">
            ⚡ I'M READY TO OWN
          </button>
        </div>

        {/* Scarcity */}
        <div className={`inline-flex items-center gap-3 bg-muted/50 border border-border rounded-full px-6 py-3 mb-6 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'hsl(142 71% 45%)' }}></span>
            <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: 'hsl(142 71% 45%)' }}></span>
          </span>
          <span className="text-foreground text-sm font-semibold">ONLY <span className="text-primary">12</span> SLOTS REMAINING</span>
          <span className="text-xs text-muted-foreground">· LIVE AVAILABILITY</span>
        </div>

        <div className={`flex items-center justify-center gap-2 transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <Lock className="w-3 h-3 text-muted-foreground" />
          <Shield className="w-3 h-3 text-muted-foreground" />
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Secure Encrypted Registration Portal</p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all z-50 glow-gold"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </section>
  );
};

export default FinalCTASection;
