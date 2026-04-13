import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Play } from "lucide-react";
import { useState } from "react";

const YOUTUBE_VIDEO_ID = "hBmkXdVUy10";

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [isPlaying, setIsPlaying] = useState(false);

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
            Live with Philadelphia's #1 Mortgage Banker
          </p>

          {/* Video Player */}
          <div
            className="relative rounded-2xl overflow-hidden p-[2px]"
            style={{ background: 'linear-gradient(145deg, rgba(124, 58, 237, 0.5), rgba(124, 58, 237, 0.15))' }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              {isPlaying ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                    alt="Video thumbnail"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        background: 'radial-gradient(circle, #f5c518 0%, #e8a900 100%)',
                        boxShadow: '0 0 40px rgba(245, 197, 24, 0.4), 0 0 80px rgba(245, 197, 24, 0.15)',
                      }}
                    >
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 text-[#1a1a2e] fill-[#1a1a2e] ml-1" />
                    </div>
                  </div>

                  {/* Bottom bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 py-3 flex items-center gap-2"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
                  >
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs sm:text-sm font-heading text-white uppercase tracking-wider">
                      Don't Rent another year |  Buy now!!
                    </span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
