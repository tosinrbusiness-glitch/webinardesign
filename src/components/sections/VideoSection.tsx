import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Play } from "lucide-react";

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d0d1a 0%, #140a28 50%, #0d0d1a 100%)' }}
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase mb-3 tracking-tight">
            <span className="text-foreground">THE PHILLY </span>
            <span className="bg-gradient-to-r from-[#f5c518] to-[#ffdf6b] bg-clip-text text-transparent">REALITY</span>
          </h2>
          <p className="text-[#9a8cb0] text-sm uppercase tracking-[0.25em] font-heading mb-10">
            Watch a transformation in real-time
          </p>

          {/* Video Player */}
          <div
            className="relative rounded-2xl overflow-hidden p-[2px]"
            style={{ background: 'linear-gradient(145deg, rgba(124, 58, 237, 0.5), rgba(124, 58, 237, 0.15))' }}
          >
            <div
              className="relative rounded-2xl overflow-hidden aspect-video flex items-center justify-center"
              style={{ background: 'linear-gradient(145deg, #1a1035, #0f0820)' }}
            >
              {/* Decorative text overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <p className="font-heading text-6xl sm:text-8xl italic text-white/30 select-none" style={{ fontStyle: 'italic' }}>
                  The Brilliance
                </p>
              </div>

              {/* Play button */}
              <button className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-transform hover:scale-110 group"
                style={{
                  background: 'radial-gradient(circle, #f5c518 0%, #e8a900 100%)',
                  boxShadow: '0 0 40px rgba(245, 197, 24, 0.4), 0 0 80px rgba(245, 197, 24, 0.15)',
                }}
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 text-[#1a1a2e] fill-[#1a1a2e] ml-1" />
              </button>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 py-3 flex items-center justify-between"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs sm:text-sm font-heading text-white uppercase tracking-wider">
                    Success Story: $14K Grant Closing
                  </span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
