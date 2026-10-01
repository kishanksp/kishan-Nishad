import React, { useState } from "react";
import { CheckCircle2, Star, Sparkles, Dumbbell, MapPin, ExternalLink, Maximize2, X } from "lucide-react";
import { GYM_DATA } from "../data/gymData";
import realGymImg from "../assets/images/energy_fitness_real_gym.jpg";
import facilityImg from "../assets/images/about_gym_facility_1790879205458.jpg";

interface AboutProps {
  onOpenJoin: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenJoin }) => {
  const [activePhoto, setActivePhoto] = useState<"real" | "floor">("real");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const highlights = [
    "Well-maintained fitness equipment and clean environment",
    "Personal attention and guidance from dedicated trainers",
    "Motivating, friendly, and non-intimidating atmosphere",
    "Programs spanning Strength, Weight Training, Yoga & Zumba",
  ];

  const stats = [
    { label: "Rating", value: `${GYM_DATA.rating} ★`, note: "Consistent excellence" },
    { label: "Reviews", value: `${GYM_DATA.reviewsCount}+`, note: "From real members" },
    { label: "Member Focus", value: "100%", note: "Dedicated attention" },
    { label: "Training", value: "Expert", note: "Hands-on guidance" },
  ];

  const displayImage = activePhoto === "real" ? realGymImg : facilityImg;

  return (
    <section id="about" className="py-20 sm:py-28 bg-neutral-950 relative overflow-hidden">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with layered stat accent */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group">
              <img
                src={displayImage}
                alt="Energy Fitness interior gym equipment and workout floor in Shalimar Bagh"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />

              {/* View Fullsize Button */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-700/80 text-neutral-300 hover:text-white backdrop-blur-md transition-colors shadow-lg"
                title="View full-size photo"
                aria-label="View full-size photo"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Verified Google Maps Badge */}
              <div className="absolute top-4 left-4 bg-neutral-950/90 backdrop-blur-md border border-red-500/40 px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wide">
                  Verified Google Maps Photo
                </span>
              </div>

              {/* Photo toggle tabs */}
              <div className="absolute bottom-16 left-4 sm:left-6 flex items-center gap-1.5 p-1 bg-neutral-950/90 backdrop-blur-md border border-neutral-800 rounded-xl">
                <button
                  onClick={() => setActivePhoto("real")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activePhoto === "real"
                      ? "bg-red-600 text-white shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Real Gym Photo
                </button>
                <button
                  onClick={() => setActivePhoto("floor")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activePhoto === "floor"
                      ? "bg-red-600 text-white shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Equipment Zone
                </button>
              </div>

              {/* Floating feature badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-neutral-950/95 backdrop-blur-md border border-neutral-800 p-3.5 rounded-xl shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Energy Fitness, Shalimar Bagh</h4>
                    <p className="text-[11px] text-neutral-400">BT 35 Basement, Block BT · Real premises</p>
                  </div>
                </div>

                <a
                  href={GYM_DATA.mapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-red-400 hover:text-red-300"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Corner accent glow */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Right Column: Copy and Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Subtle unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Energy Fitness</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight [text-wrap:balance]">
              More Than A Gym. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                It's A Fitness Community.
              </span>
            </h2>

            <p className="mt-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
              Energy Fitness is a fitness center in Shalimar Bagh, Delhi focused on helping members become stronger, healthier and more confident. Members appreciate the gym's equipment, personal attention, knowledgeable staff and motivating atmosphere.
            </p>

            {/* Checkpoint list */}
            <div className="mt-6 space-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-neutral-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Statistics Grid */}
            <div className="mt-8 pt-6 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-neutral-900/60 border border-neutral-800/80 p-3.5 rounded-xl">
                  <div className="text-2xl font-black text-white tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-neutral-300 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5 truncate">
                    {stat.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onOpenJoin}
                className="px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 rounded-xl shadow-lg shadow-red-600/25 transition-all"
              >
                Start Training With Us
              </button>
              <a
                href="#facilities"
                className="text-sm font-semibold text-neutral-300 hover:text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-red-500 transition-colors"
              >
                View Facilities &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 p-2 text-neutral-400 hover:text-white bg-neutral-800 rounded-xl"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={displayImage}
              alt="Energy Fitness photo"
              className="rounded-2xl max-h-[80vh] w-auto object-contain border border-neutral-800 shadow-2xl"
            />
            <div className="mt-4 flex items-center justify-between w-full text-xs text-neutral-400 px-2">
              <span>Energy Fitness · BT 35 Basement, Block BT, West Shalimar Bagh</span>
              <a
                href={GYM_DATA.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 flex items-center gap-1 font-semibold"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

