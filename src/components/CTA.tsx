import React from "react";
import { Phone, ArrowRight, Flame, ShieldCheck } from "lucide-react";
import { GYM_DATA } from "../data/gymData";

interface CTAProps {
  onOpenJoin: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenJoin }) => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-neutral-950">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-radial from-red-600/10 via-neutral-950/80 to-neutral-950 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          {/* Top highlight */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-xs font-bold text-red-400 uppercase tracking-widest mb-6">
            <Flame className="w-3.5 h-3.5" />
            <span>Energy Fitness · Shalimar Bagh</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight max-w-3xl mx-auto [text-wrap:balance]">
            Ready To Transform Your Fitness?
          </h2>

          <p className="mt-5 text-base sm:text-lg text-neutral-300 max-w-xl mx-auto [text-wrap:balance] font-normal leading-relaxed">
            Your fitness journey starts with one decision. Take the first step today.
          </p>

          {/* Action buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenJoin}
              className="w-full sm:w-auto px-8 py-4 text-base font-black uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 rounded-xl shadow-xl shadow-red-600/30 hover:shadow-red-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Join Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={GYM_DATA.phoneLink}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900 border border-neutral-700/80 hover:bg-neutral-800 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call Us ({GYM_DATA.phone})</span>
            </a>
          </div>

          {/* Reassurance notes */}
          <div className="mt-10 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>No Pressure Free Walk-in Consultation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Personal Form & Goal Guidance</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Clean, Well-Maintained Machines</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
