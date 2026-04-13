import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle } from "lucide-react";

const BrutalTruthSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="relative py-28 overflow-hidden"
      ref={ref}
      style={{ background: 'linear-gradient(180deg, #140a28 0%, #1a0e35 40%, #1e1040 60%, #140a28 100%)' }}
    >
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(245, 197, 24, 0.04) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(120, 40, 200, 0.06) 0%, transparent 70%)' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-destructive/10 border border-destructive/25 rounded-full px-5 py-2 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-destructive text-xs font-bold tracking-[0.2em] uppercase font-heading">The Brutal Truth</span>
          </div>
          <h2 className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase mb-8 leading-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-foreground">THERE IS A </span>
            <span className="bg-gradient-to-r from-[#f5c518] to-[#ffdf6b] bg-clip-text text-transparent" style={{ textShadow: '0 0 40px rgba(245, 197, 24, 0.3)' }}>40X</span>
            <span className="text-foreground"> WEALTH GAP</span>
          </h2>
          <p className={`text-lg sm:text-xl text-[#9a8cb0] italic max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            "The median white family holds <span className="not-italic font-bold" style={{ color: '#f5c518' }}>$171,000</span> in wealth.
            The median Black family holds just <span className="text-destructive font-bold not-italic">$17,150</span>.
            Homeownership is how we close this gap."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className={`rounded-2xl p-[1px] transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`} style={{ background: 'linear-gradient(145deg, rgba(124, 58, 237, 0.5), rgba(124, 58, 237, 0.1))' }}>
            <div className="rounded-2xl p-8 text-center h-full" style={{ background: 'linear-gradient(145deg, rgba(30, 16, 64, 0.8), rgba(20, 10, 40, 0.9))', backdropFilter: 'blur(10px)' }}>
              <p className="font-heading text-6xl font-bold mb-3 bg-gradient-to-b from-[#f5c518] to-[#e8a900] bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 20px rgba(245, 197, 24, 0.2))' }}>4/10</p>
              <p className="font-heading text-lg uppercase tracking-wider text-foreground mb-3">Homeownership Rate</p>
              <p className="text-sm text-[#9a8cb0] leading-relaxed">Only 4 in 10 Black families in Philadelphia own their home, compared to 7 in 10 white families</p>
            </div>
          </div>
          <div className={`rounded-2xl p-[1px] transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`} style={{ background: 'linear-gradient(145deg, rgba(124, 58, 237, 0.5), rgba(124, 58, 237, 0.1))' }}>
            <div className="rounded-2xl p-8 text-center h-full" style={{ background: 'linear-gradient(145deg, rgba(30, 16, 64, 0.8), rgba(20, 10, 40, 0.9))', backdropFilter: 'blur(10px)' }}>
              <p className="font-heading text-6xl font-bold mb-3 bg-gradient-to-b from-[#f5c518] to-[#e8a900] bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 20px rgba(245, 197, 24, 0.2))' }}>100%</p>
              <p className="font-heading text-lg uppercase tracking-wider text-foreground mb-3">Our Commitment</p>
              <p className="text-sm text-[#9a8cb0] leading-relaxed">We are 100% dedicated to putting Philadelphia families on the path to property ownership and wealth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrutalTruthSection;
