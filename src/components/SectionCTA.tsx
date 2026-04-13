interface SectionCTAProps {
  label: string;
}

const SectionCTA = ({ label }: SectionCTAProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="py-10 flex justify-center"
      style={{ background: 'linear-gradient(180deg, #0d0218 0%, #140a28 50%, #0d0218 100%)' }}
    >
      <button
        onClick={scrollToTop}
        className="group relative font-heading text-sm sm:text-base uppercase tracking-[0.2em] font-bold px-10 py-4 rounded-full transition-all duration-500 hover:scale-105 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, hsl(47 92% 52%), hsl(40 90% 45%))',
          color: '#0d0218',
          boxShadow: '0 0 20px hsl(47 92% 52% / 0.3), 0 4px 15px rgba(0,0,0,0.3)',
        }}
      >
        <span className="relative z-10">{label}</span>
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: '0 0 30px hsl(47 92% 52% / 0.5), 0 0 60px hsl(47 92% 52% / 0.2)',
          }}
        />
      </button>
    </div>
  );
};

export default SectionCTA;
