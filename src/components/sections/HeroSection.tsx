import { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #2d0a3e 0%, #1a0630 30%, #120425 60%, #0d0218 100%)' }}>
      {/* Purple radial glow top-center */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[140%] h-[70%] rounded-full" style={{ background: 'radial-gradient(ellipse at center, rgba(120, 40, 200, 0.25) 0%, rgba(80, 20, 160, 0.1) 40%, transparent 70%)' }} />
      {/* Bottom-left warm glow */}
      <div className="absolute bottom-0 left-0 w-[60%] h-[50%]" style={{ background: 'radial-gradient(ellipse at bottom left, rgba(180, 60, 30, 0.12) 0%, transparent 60%)' }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Nav */}
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

        {/* Hero content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-8 pb-20 lg:pt-12 lg:pb-32">
          {/* Left */}
          <div className="space-y-8 animate-slide-in-left">
            <h1 className="font-heading text-6xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[0.95] uppercase">
              <span className="text-foreground">SECURE</span><br />
              <span className="text-foreground">YOUR</span><br />
              <span className="bg-gradient-to-b from-[#b87aff] to-[#7c3aed] bg-clip-text text-transparent">LEGACY.</span><br />
              <span className="bg-gradient-to-b from-[#f5c518] to-[#e8a900] bg-clip-text text-transparent">OWN</span><br />
              <span className="bg-gradient-to-b from-[#f5c518] to-[#e8a900] bg-clip-text text-transparent">PHILLY.</span>
            </h1>

            <p className="text-[#9a8cb0] text-base sm:text-lg max-w-lg leading-relaxed">
              Transforming renters into landlords. Philadelphia's premier authority on strategic homeownership and multi-generational wealth generation for the modern sovereign.
            </p>

            {/* Social proof */}
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
                <p className="text-foreground font-heading text-xs tracking-wider uppercase">
                  JOIN 4,500+ PHILLY RESIDENTS
                </p>
                <p className="text-[#9a8cb0] text-xs uppercase tracking-wider">
                  SECURING THEIR FUTURE TODAY.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="flex justify-end animate-slide-in-right">
            <div className="w-full max-w-md rounded-3xl p-8 border border-[#3a2060]/60" style={{ background: 'linear-gradient(145deg, rgba(50, 20, 80, 0.5) 0%, rgba(30, 12, 55, 0.6) 100%)', backdropFilter: 'blur(20px)' }}>
              <h3 className="font-heading text-2xl font-bold text-foreground uppercase tracking-wide mb-8">
                Quit Funding<br />Landlords
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="text-[11px] text-[#9a8cb0] uppercase tracking-[0.25em] mb-2.5 block font-heading">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="ENTER YOUR NAME"
                    className="w-full bg-[#1a0e30]/60 border border-[#3a2060]/50 rounded-xl px-4 py-4 text-sm text-foreground placeholder:text-[#5a4a70] placeholder:uppercase placeholder:tracking-wider placeholder:text-xs focus:outline-none focus:border-secondary/50 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#9a8cb0] uppercase tracking-[0.25em] mb-2.5 block font-heading">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="YOUR@EMAIL.COM"
                    className="w-full bg-[#1a0e30]/60 border border-[#3a2060]/50 rounded-xl px-4 py-4 text-sm text-foreground placeholder:text-[#5a4a70] placeholder:uppercase placeholder:tracking-wider placeholder:text-xs focus:outline-none focus:border-secondary/50 transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <button className="w-full font-heading text-base uppercase tracking-wider py-4 rounded-xl transition-all font-bold text-primary-foreground" style={{ background: 'linear-gradient(135deg, #f5c518 0%, #c9a000 50%, #b87aff 100%)' }}>
                  Claim My Future Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
