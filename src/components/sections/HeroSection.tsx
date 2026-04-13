import { Shield } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1a0a3e] via-[#1e1145] to-[#0d0d1a]">
      {/* Purple radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_center,_hsl(263_83%_30%_/_0.4)_0%,_transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Nav - just logo */}
        <nav className="py-6">
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 rounded-full px-4 py-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-heading text-xs tracking-[0.2em] text-foreground uppercase">Elite Wealth Mastery</span>
          </div>
        </nav>

        {/* Hero content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-8 pb-20 lg:pt-12 lg:pb-32">
          {/* Left */}
          <div className="space-y-8 animate-slide-in-left">
            <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] uppercase italic">
              <span className="text-foreground">SECURE</span><br />
              <span className="text-foreground">YOUR</span><br />
              <span className="text-gradient-purple">LEGACY.</span><br />
              <span className="text-foreground">OWN </span>
              <span className="text-gradient-gold">PHILLY.</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg max-w-lg leading-relaxed">
              Transforming renters into landlords. Philadelphia's premier authority on strategic homeownership and multi-generational wealth generation for the modern sovereign.
            </p>

            {/* Social proof */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-background bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                    {['JM', 'KT', 'AR'][i]}
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-background bg-secondary/60 flex items-center justify-center text-[10px] font-bold text-foreground">
                  +4.5k
                </div>
              </div>
              <div>
                <p className="text-foreground font-heading text-xs tracking-wider uppercase">
                  JOIN 4,500+ PHILLY RESIDENTS
                </p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">
                  SECURING THEIR FUTURE TODAY.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="flex justify-end animate-slide-in-right">
            <div className="w-full max-w-md bg-card/50 backdrop-blur-md border border-border rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground uppercase tracking-wide mb-6">
                Claim Your Blueprint
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="text-[11px] text-muted-foreground uppercase tracking-[0.2em] mb-2 block font-heading">
                    Legal Name
                  </label>
                  <input
                    type="text"
                    placeholder="ENTER YOUR NAME"
                    className="w-full bg-muted/40 border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 placeholder:uppercase placeholder:tracking-wider placeholder:text-xs focus:outline-none focus:border-secondary/50 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-[11px] text-muted-foreground uppercase tracking-[0.2em] mb-2 block font-heading">
                    Private Email
                  </label>
                  <input
                    type="email"
                    placeholder="NAME@DOMAIN.COM"
                    className="w-full bg-muted/40 border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 placeholder:uppercase placeholder:tracking-wider placeholder:text-xs focus:outline-none focus:border-secondary/50 transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-base uppercase tracking-wider py-4 rounded-xl transition-all font-bold">
                  Register Now
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 mt-5">
                <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-heading">
                  Limited Spots Available for Q4
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
