import { Menu, Shield, Lock, Users } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", email2: "" });

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(263 83% 57% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(263 83% 57% / 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Nav */}
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-lg tracking-wider text-foreground">ELITE WEALTH MASTERY</span>
          </div>
          <button className="p-2 rounded-lg border border-border hover:bg-muted transition-colors">
            <Menu className="w-5 h-5 text-foreground" />
          </button>
        </nav>

        {/* Hero content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-12 pb-20 lg:pt-20 lg:pb-32">
          {/* Left */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">
                ⚡ FREE HOMEOWNERSHIP MASTERCLASS
              </p>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] uppercase">
                <span className="text-foreground">SECURE YOUR</span><br />
                <span className="text-foreground">LEGACY.</span><br />
                <span className="text-gradient-gold">OWN PHILLY.</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              Discover how Philadelphia residents are using <span className="text-primary font-semibold">little to no money down</span> to become homeowners — and building generational wealth in the process.
            </p>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {['JM', 'KT', 'AR', 'LS'][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm">4,500+ PHILLY RESIDENTS</p>
                <p className="text-muted-foreground text-xs">have started their journey</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="animate-slide-in-right">
            <div className="glass-card p-8 glow-purple relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
                  <Lock className="w-3 h-3 text-primary" />
                  <span className="text-primary text-xs font-semibold tracking-wider">SECURE REGISTRATION</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground uppercase">
                  Reserve Your Seat
                </h3>
                <p className="text-muted-foreground text-sm mt-1">Limited spots available for Philadelphia residents</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1 block">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1 block">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(215) 000-0000"
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg uppercase tracking-wider py-4 rounded-lg transition-all animate-pulse-glow font-bold">
                  🔒 SECURE MY SPOT
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-center text-xs text-muted-foreground mb-3">Or register with email only</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary/50 transition-all"
                    value={formData.email2}
                    onChange={(e) => setFormData({ ...formData, email2: e.target.value })}
                  />
                  <button className="px-6 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-heading text-sm uppercase tracking-wider rounded-lg transition-colors font-semibold">
                    REGISTER NOW
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mt-4">
                <Shield className="w-3 h-3 text-muted-foreground" />
                <p className="text-[10px] text-muted-foreground">256-bit encryption · Your data is protected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
