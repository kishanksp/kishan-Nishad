import React from "react";
import { Star, ArrowRight, ShieldCheck, Flame, ChevronDown } from "lucide-react";
import { GYM_DATA } from "../data/gymData";
import heroImage from "../assets/images/hero_gym_dark_1790879192394.jpg";

interface HeroProps {
  onOpenJoin: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoin }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-neutral-950"
    >
      {/* Background Hero Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Energy Fitness interior gym equipment and training area"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[8000ms]"
        />
        {/* Layered dark gradients for contrast and depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-neutral-950/60 to-neutral-950" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Rating and Social Proof Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-xs sm:text-sm text-neutral-200 backdrop-blur-md mb-6 shadow-xl">
          <div className="flex items-center text-amber-400">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
          <span className="font-bold text-white tabular-nums">{GYM_DATA.rating} / 5.0</span>
          <span className="text-neutral-500">·</span>
          <span className="text-neutral-300 font-medium">{GYM_DATA.reviewsCount}+ Verified Reviews</span>
          <span className="text-neutral-500">·</span>
          <span className="text-neutral-400 hidden xs:inline">Shalimar Bagh</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.95] max-w-4xl [text-wrap:balance]">
          Build Your Body. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-600 drop-shadow-sm">
            Build Your Confidence.
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl [text-wrap:balance] font-normal leading-relaxed">
          Train smarter. Get stronger. Become the best version of yourself at{" "}
          <strong className="text-white font-semibold">Energy Fitness</strong>, Shalimar Bagh.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenJoin}
            className="w-full sm:w-auto px-8 py-4 text-base font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 rounded-xl shadow-2xl shadow-red-600/40 hover:shadow-red-500/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Join Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#programs"
            className="w-full sm:w-auto px-8 py-4 text-base font-bold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 rounded-xl backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Explore Programs</span>
          </a>
        </div>

        {/* Key Values Micro Highlights */}
        <div className="mt-12 pt-8 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 text-neutral-400 text-xs sm:text-sm">
          <div className="flex items-center justify-center gap-2">
            <Flame className="w-4 h-4 text-red-500 shrink-0" />
            <span className="text-neutral-300">Opens 6:00 AM Onwards</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
            <span className="text-neutral-300">Well-Maintained Equipment</span>
          </div>
          <div className="col-span-2 md:col-span-1 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-neutral-300">Personal Trainer Attention</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#quick-info"
          className="mt-10 inline-flex flex-col items-center text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
          aria-label="Scroll to quick information"
        >
          <span className="text-[11px] tracking-wider uppercase mb-1">Scroll to discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
