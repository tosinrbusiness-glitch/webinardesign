import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Clock, DollarSign } from "lucide-react";
import markProfile from "@/assets/mark-profile.svg";

const ArchitectSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="relative py-28 overflow-hidden"
      ref={ref}
      style={{ background: 'linear-gradient(180deg, #140a28 0%, #1e1040 30%, #2a1450 50%, #1e1040 70%, #140a28 100%)' }}
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(245, 197, 24, 0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative">
              <div className="rounded-2xl p-[1px]" style={{ background: 'linear-gradient(145deg, rgba(124, 58, 237, 0.5), rgba(245, 197, 24, 0.2), rgba(124, 58, 237, 0.3))' }}>
                <div className="w-full aspect-[3/4] rounded-2xl flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(145deg, rgba(30, 16, 64, 0.8), rgba(20, 10, 45, 0.9))' }}>
                  <div className="text-center p-8">
                    <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7c3aed, #f5c518)' }}>
                      <span className="font-heading text-4xl font-bold text-primary-foreground">MW</span>
                    </div>
                    <p className="text-[#9a8cb0] text-sm">Mark Wilson</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-xl p-4 text-center" style={{ background: 'linear-gradient(135deg, #f5c518, #e8a900)', boxShadow: '0 0 30px rgba(245, 197, 24, 0.3)' }}>
                <p className="font-heading text-lg font-bold text-[#1a1a2e] uppercase">Philadelphia's #1</p>
                <p className="text-[#1a1a2e]/60 text-xs uppercase tracking-wider font-heading">Mortgage Banker</p>
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div>
              <p className="text-[#b87aff] font-heading text-xs tracking-[0.35em] uppercase mb-4">Your Host</p>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase mb-4 leading-tight">
                <span className="text-foreground">LEARN FROM </span>
                <span className="bg-gradient-to-r from-[#f5c518] to-[#ffdf6b] bg-clip-text text-transparent">THE BEST</span>
              </h2>
            </div>

            <blockquote className="text-lg text-foreground/80 italic pl-5" style={{ borderLeft: '3px solid #f5c518', boxShadow: '-8px 0 20px -10px rgba(245, 197, 24, 0.2)' }}>
              "Start where you are, with what you have. I've built a system that puts homeownership within reach — no matter your credit, no matter your savings."
            </blockquote>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl p-5 text-center" style={{ background: 'linear-gradient(145deg, rgba(30, 16, 64, 0.7), rgba(15, 8, 35, 0.8))', border: '1px solid rgba(124, 58, 237, 0.25)' }}>
                <Clock className="w-5 h-5 text-primary mx-auto mb-2" style={{ filter: 'drop-shadow(0 0 8px rgba(245, 197, 24, 0.4))' }} />
                <p className="font-heading text-2xl font-bold bg-gradient-to-r from-[#f5c518] to-[#ffdf6b] bg-clip-text text-transparent">4,500+</p>
                <p className="text-xs text-[#9a8cb0] uppercase tracking-wider font-heading mt-1">Families Helped</p>
              </div>
              <div className="rounded-xl p-5 text-center" style={{ background: 'linear-gradient(145deg, rgba(30, 16, 64, 0.7), rgba(15, 8, 35, 0.8))', border: '1px solid rgba(124, 58, 237, 0.25)' }}>
                <DollarSign className="w-5 h-5 text-primary mx-auto mb-2" style={{ filter: 'drop-shadow(0 0 8px rgba(245, 197, 24, 0.4))' }} />
                <p className="font-heading text-2xl font-bold bg-gradient-to-r from-[#f5c518] to-[#ffdf6b] bg-clip-text text-transparent">$3,500</p>
                <p className="text-xs text-[#9a8cb0] uppercase tracking-wider font-heading mt-1">Or Less To Start</p>
              </div>
            </div>

            <p className="text-[#9a8cb0] leading-relaxed">
              Philadelphia's most trusted mortgage banker has helped thousands of families stop renting and start owning. With a proven system for low-cost homeownership, grant access, and fast pre-approvals — this is the guide you've been waiting for.
            </p>

            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" style={{ filter: 'drop-shadow(0 0 6px rgba(245, 197, 24, 0.3))' }} />
              <span className="text-sm text-foreground font-semibold font-heading">Trusted By 4,500+ Philadelphia Families</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectSection;
