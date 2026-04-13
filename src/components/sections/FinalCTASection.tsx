import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, ArrowUp } from "lucide-react";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="relative py-28 overflow-hidden"
      ref={ref}
      style={{ background: 'linear-gradient(180deg, #0d0218 0%, #120520 30%, #1a0a30 50%, #120520 80%, #0d0218 100%)' }}
    >
      {/* Background watermarks */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <p className="font-heading text-[10rem] sm:text-[16rem] font-bold uppercase text-white/[0.02] leading-none tracking-tight whitespace-nowrap">
          OWN IT
        </p>
      </div>
      <div className="absolute inset-0 flex items-start justify-center overflow-hidden pointer-events-none select-none pt-20">
        <p className="font-heading text-[7rem] sm:text-[11rem] font-bold uppercase text-white/[0.015] leading-none tracking-tight whitespace-nowrap">
          NO MORE RENT
        </p>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, transparent)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(120, 40, 200, 0.08) 0%, transparent 70%)' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-3xl">
        <div className={`inline-flex items-center gap-2 bg-destructive/15 border border-destructive/30 rounded-full px-5 py-2 mb-10 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-destructive text-xs font-bold tracking-[0.2em] uppercase font-heading">Critical Ultimatum</span>
        </div>

        <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-foreground">EVERY MONTH YOU</span><br />
          <span className="text-foreground">RENT =</span><br />
          <span className="bg-gradient-to-r from-[#e44040] via-[#b87aff] to-[#b87aff] bg-clip-text text-transparent italic font-bold">SOMEONE ELSE</span><br />
          <span className="text-foreground">BUILDS WEALTH.</span>
        </h2>

        <p className={`font-heading text-lg sm:text-xl font-bold uppercase tracking-wide mb-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <span className="text-foreground">EVERY MONTH YOU DELAY = </span>
          <span className="text-primary underline decoration-primary underline-offset-4">YOU FALL<br />FURTHER BEHIND.</span>
        </p>

        <p className={`text-[#9a8cb0] text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed uppercase tracking-wide font-heading transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          This webinar is for you. Register NOW.<br />Secure your spot. Change your position.
        </p>

        <div className={`mb-8 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <button className="px-12 py-5 rounded-full font-heading text-lg uppercase tracking-wider font-bold text-[#1a1a2e] transition-all hover:scale-105 animate-pulse-glow" style={{ background: 'linear-gradient(135deg, #f5c518 0%, #e8b800 100%)', boxShadow: '0 0 30px rgba(245, 197, 24, 0.3), 0 0 60px rgba(245, 197, 24, 0.1)' }}>
            I'M READY TO OWN
          </button>
        </div>

        <div className={`flex flex-wrap items-center justify-center gap-3 mb-6 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <span className="bg-destructive/20 border border-destructive/40 rounded-full px-5 py-2 text-destructive text-xs font-bold tracking-[0.15em] uppercase font-heading">
            Only 12 Slots Remaining
          </span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-500"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-[#9a8cb0] text-xs tracking-wider uppercase font-heading">Live Availability</span>
          </span>
        </div>

        <div className={`flex items-center justify-center gap-2 transition-all duration-700 delay-600 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <Shield className="w-3 h-3 text-primary" />
          <p className="text-xs text-primary/80 uppercase tracking-[0.15em] font-heading font-semibold">
            Secure Encrypted Registration Portal
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all z-50"
        style={{ boxShadow: '0 0 20px rgba(245, 197, 24, 0.3)' }}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </section>
  );
};

export default FinalCTASection;
