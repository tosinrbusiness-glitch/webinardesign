import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Banknote, Gift, CheckCircle, FileCheck, ArrowRight } from "lucide-react";

const modules = [
  {
    icon: Banknote,
    number: "01",
    title: "Buy With Minimal Cash",
    description: "How buyers in Philly are getting into homes with low out-of-pocket costs — sometimes under $3,500.",
  },
  {
    icon: Gift,
    number: "02",
    title: "Grants + Seller Assist",
    description: "How grants and seller assist programs reduce what you actually need to bring to the closing table.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "What You Need To Qualify",
    description: "The real requirements — not the myths. Learn what you actually need to get approved, even with imperfect credit.",
  },
  {
    icon: FileCheck,
    number: "04",
    title: "Pre-Approval Comes FIRST",
    description: "A Realtor can't Pre-Approve you. A Title company can't Pre-Approve you. Only a Trusted Lender can. Start here.",
  },
];

const CurriculumSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="relative py-28 overflow-hidden"
      ref={ref}
      style={{ background: 'linear-gradient(180deg, #140a28 0%, #0d0218 40%, #140a28 100%)' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.3), transparent)' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <p className={`text-[#b87aff] font-heading text-xs tracking-[0.35em] uppercase mb-4 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>What You'll Learn — Live</p>
          <h2 className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-foreground">LIVE WITH PHILLY'S</span>
            <br />
            <span className="bg-gradient-to-r from-[#f5c518] to-[#ffdf6b] bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 20px rgba(245, 197, 24, 0.2))' }}>#1 MORTGAGE BANKER</span>
          </h2>
          <div className="w-10 h-1 bg-secondary mx-auto mt-6 rounded-full" />
        </div>

        <p className={`text-center text-[#9a8cb0] text-base max-w-xl mx-auto mb-14 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          Start where you are, with what you have. This webinar breaks down exactly how it works — no fluff, no BS.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {modules.map((mod, i) => (
            <div
              key={i}
              className={`group transition-all duration-700 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="rounded-2xl p-[1px] h-full" style={{ background: 'linear-gradient(145deg, rgba(124, 58, 237, 0.4), rgba(124, 58, 237, 0.08))' }}>
                <div className="rounded-2xl p-6 h-full transition-all" style={{ background: 'linear-gradient(145deg, rgba(30, 16, 64, 0.6), rgba(15, 8, 35, 0.8))' }}>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(124, 58, 237, 0.05))', border: '1px solid rgba(124, 58, 237, 0.25)' }}>
                      <mod.icon className="w-6 h-6 text-[#b87aff]" />
                    </div>
                    <span className="font-heading text-3xl font-bold text-white/[0.06]">{mod.number}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground uppercase mb-3">{mod.title}</h3>
                  <p className="text-sm text-[#9a8cb0] leading-relaxed">{mod.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust builder */}
        <div className={`max-w-2xl mx-auto mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="rounded-2xl p-[1px]" style={{ background: 'linear-gradient(145deg, rgba(245, 197, 24, 0.3), rgba(124, 58, 237, 0.2))' }}>
            <div className="rounded-2xl px-8 py-6" style={{ background: 'linear-gradient(145deg, rgba(30, 16, 64, 0.5), rgba(15, 8, 35, 0.7))' }}>
              <p className="text-foreground font-heading text-base sm:text-lg uppercase tracking-wide leading-relaxed">
                A Realtor <span className="text-destructive font-bold">can't</span> Pre-Approve you.<br />
                A Title company <span className="text-destructive font-bold">can't</span> Pre-Approve you.<br />
                Only a <span className="bg-gradient-to-r from-[#f5c518] to-[#ffdf6b] bg-clip-text text-transparent font-bold">Trusted Lender</span> can.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
