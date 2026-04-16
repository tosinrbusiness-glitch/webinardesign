import { useState } from "react";
import CountdownTimer from "@/components/CountdownTimer";

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #2d0a3e 0%, #1a0630 30%, #120425 60%, #0d0218 100%)' }}>
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[140%] h-[70%] rounded-full" style={{ background: 'radial-gradient(ellipse at center, rgba(120, 40, 200, 0.25) 0%, rgba(80, 20, 160, 0.1) 40%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[60%] h-[50%]" style={{ background: 'radial-gradient(ellipse at bottom left, rgba(180, 60, 30, 0.12) 0%, transparent 60%)' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between py-5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-secondary/40 border border-secondary/50 flex items-center justify-center">
              <span className="font-heading text-sm font-bold text-secondary">P</span>
            </div>
            <span className="font-heading text-base tracking-wide text-foreground">Philly Brilliance</span>
          </div>
          <button className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-sm uppercase tracking-wider rounded-full transition-all font-bold">
            Secure Seat
          </button>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center pt-8 pb-20 lg:pt-12 lg:pb-32">
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 bg-destructive/15 border border-destructive/30 rounded-full px-4 py-1.5 animate-badge-glow">
              <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
              <span className="text-destructive text-xs font-bold tracking-wider uppercase font-heading">🚨 Limited Spots — Register Now</span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[0.95] uppercase">
              <span className="text-foreground">LEARN HOW TO</span><br />
              <span className="text-foreground">BUY A HOME</span><br />
              <span className="text-foreground">IN PHILLY</span><br />
              <span className="text-foreground">FOR UNDER </span>
              <span className="bg-gradient-to-b from-[#f5c518] to-[#e8a900] bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 20px rgba(245, 197, 24, 0.3))' }}>$3,500.</span>
            </h1>

            <p className="text-[#9a8cb0] text-base sm:text-lg max-w-lg leading-relaxed">
              If you're renting in Philadelphia… <span className="text-foreground font-semibold">this webinar is for you.</span> If you're tired of paying someone else's mortgage… <span className="text-foreground font-semibold">this webinar is for you.</span>
            </p>

            <div className="flex items-center gap-3 pt-4">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-[#1a0630] bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                    {['JM', 'KT', 'AR'][i]}
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-[#1a0630] bg-secondary/40 flex items-center justify-center text-[10px] font-bold text-foreground">
                  +4.5k
                </div>
              </div>
              <div>
                <p className="text-foreground font-heading text-xs tracking-wider uppercase">JOIN 4,500+ PHILLY RESIDENTS</p>
                <p className="text-[#9a8cb0] text-xs uppercase tracking-wider">WHO STOPPED RENTING & STARTED OWNING.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end animate-slide-in-right">
            <div className="w-full max-w-md rounded-3xl p-8 border border-[#3a2060]/60" style={{ background: 'linear-gradient(145deg, rgba(50, 20, 80, 0.5) 0%, rgba(30, 12, 55, 0.6) 100%)', backdropFilter: 'blur(20px)' }}>
              <h3 className="font-heading text-2xl font-bold text-foreground uppercase tracking-wide mb-2">
                Quit Funding<br />Landlords
              </h3>
              <p className="text-[#9a8cb0] text-xs mb-5 font-heading tracking-wider uppercase">Free live webinar · Limited seats</p>

              {/* Countdown */}
              <div className="mb-6">
                <CountdownTimer compact />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-[11px] text-[#9a8cb0] uppercase tracking-[0.25em] mb-2 block font-heading">Full Name</label>
                  <input type="text" placeholder="ENTER YOUR NAME" className="w-full bg-[#1a0e30]/60 border border-[#3a2060]/50 rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-[#5a4a70] placeholder:uppercase placeholder:tracking-wider placeholder:text-xs focus:outline-none focus:border-secondary/50 transition-all" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                  <label className="text-[11px] text-[#9a8cb0] uppercase tracking-[0.25em] mb-2 block font-heading">Email Address</label>
                  <input type="email" placeholder="YOUR@EMAIL.COM" className="w-full bg-[#1a0e30]/60 border border-[#3a2060]/50 rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-[#5a4a70] placeholder:uppercase placeholder:tracking-wider placeholder:text-xs focus:outline-none focus:border-secondary/50 transition-all" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div>
                  <label className="text-[11px] text-[#9a8cb0] uppercase tracking-[0.25em] mb-2 block font-heading">Phone Number</label>
                  <input type="tel" placeholder="(215) 000-0000" className="w-full bg-[#1a0e30]/60 border border-[#3a2060]/50 rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-[#5a4a70] placeholder:uppercase placeholder:tracking-wider placeholder:text-xs focus:outline-none focus:border-secondary/50 transition-all" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <button className="w-full font-heading text-base uppercase tracking-wider py-4 rounded-xl transition-all font-bold text-[#1a1a2e] hover:scale-[1.02]" style={{ background: 'linear-gradient(135deg, #f5c518 0%, #c9a000 50%, #b87aff 100%)', boxShadow: '0 0 25px rgba(245, 197, 24, 0.25)' }}>
                  🔒 Secure Your Spot Now
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                <p className="text-[10px] text-destructive/80 uppercase tracking-wider font-heading font-bold">Only 12 Spots Left For This Session</p>
              </div>

              <p className="text-[9px] text-muted-foreground/60 text-center mt-4 leading-relaxed">
                By providing your contact information and submitting this form, you expressly consent to receive recurring communications, including calls and text messages (including via autodialer), from our team regarding your inquiry and related services. Consent is not required as a condition of purchase. Message and data rates may apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
