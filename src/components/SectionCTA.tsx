interface SectionCTAProps {
  label: string;
}

const SectionCTA = ({ label }: SectionCTAProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative py-6 flex justify-center" style={{ background: 'transparent' }}>
      <button
        onClick={scrollToTop}
        className="group relative font-heading text-xs sm:text-sm uppercase tracking-[0.25em] font-bold px-8 sm:px-12 py-3.5 rounded-full transition-all duration-500 hover:scale-105 active:scale-95 animate-pulse-glow"
        style={{
          background: 'linear-gradient(135deg, hsl(47 92% 52%), hsl(40 90% 45%))',
          color: '#0d0218',
          boxShadow: '0 0 20px hsl(47 92% 52% / 0.25), 0 4px 15px rgba(0,0,0,0.4)',
        }}
      >
        <span className="relative z-10 flex items-center gap-2">
          🔒 {label}
        </span>
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: '0 0 35px hsl(47 92% 52% / 0.5), 0 0 70px hsl(47 92% 52% / 0.2)',
          }}
        />
      </button>
    </div>
  );
};

export default SectionCTA;
