import React, { useState } from "react";
import {
  Dumbbell,
  Flame,
  Activity,
  HeartPulse,
  Sparkles,
  UserCheck,
  ArrowRight,
  Check,
  X,
  Phone,
} from "lucide-react";
import { PROGRAMS, ProgramItem, GYM_DATA } from "../data/gymData";

interface ProgramsProps {
  onSelectProgram: (programName: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  const [activeModalProgram, setActiveModalProgram] = useState<ProgramItem | null>(null);

  const getProgramIcon = (id: string) => {
    switch (id) {
      case "strength":
        return <Dumbbell className="w-6 h-6 text-red-500" />;
      case "weight":
        return <Flame className="w-6 h-6 text-orange-400" />;
      case "yoga":
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case "zumba":
        return <HeartPulse className="w-6 h-6 text-red-400" />;
      case "aerobics":
        return <Activity className="w-6 h-6 text-orange-500" />;
      case "personal":
        return <UserCheck className="w-6 h-6 text-red-500" />;
      default:
        return <Dumbbell className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="programs" className="py-20 sm:py-28 bg-neutral-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest mb-3">
            <span>Specialized Fitness Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight [text-wrap:balance]">
            Fitness Programs Designed For Every Goal
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 [text-wrap:balance]">
            From heavy barbell lifts to energizing Zumba rhythms and mindful Power Yoga, choose the disciplines that align with your fitness aspirations.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program) => {
            return (
              <div
                key={program.id}
                className="bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-red-950/30 group"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      {getProgramIcon(program.id)}
                    </div>
                    <span className="text-xs font-semibold text-neutral-400">
                      Intensity: <span className="text-neutral-200">{program.intensity}</span>
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight group-hover:text-red-400 transition-colors">
                    {program.name}
                  </h3>
                  <p className="text-xs font-semibold text-red-500/90 mt-1 uppercase tracking-wider">
                    {program.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-3.5 text-sm text-neutral-300 leading-relaxed font-normal">
                    {program.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-5 pt-4 border-t border-neutral-800 space-y-2">
                    {program.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProgram(program)}
                    className="text-xs font-bold text-neutral-300 hover:text-white uppercase tracking-wider flex items-center gap-1 group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onSelectProgram(program.name)}
                    className="px-4 py-2 text-xs font-bold text-white bg-neutral-800 hover:bg-red-600 rounded-lg transition-colors uppercase tracking-wider"
                  >
                    Enroll
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Program Detail Modal */}
      {activeModalProgram && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalProgram(null)}
        >
          <div
            className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                {getProgramIcon(activeModalProgram.id)}
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  {activeModalProgram.name}
                </h3>
                <p className="text-xs font-semibold text-red-400 uppercase tracking-wide">
                  {activeModalProgram.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed mb-5">
              {activeModalProgram.description}
            </p>

            <div className="bg-neutral-950/80 border border-neutral-800/90 rounded-xl p-4 mb-6">
              <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-wider mb-2.5">
                Key Workout Elements
              </h4>
              <ul className="space-y-2 text-xs text-neutral-300">
                {activeModalProgram.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-red-500" />
                    <span>{feat}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-red-500" />
                  <span>Personal coaching & technique assistance</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const prog = activeModalProgram.name;
                  setActiveModalProgram(null);
                  onSelectProgram(prog);
                }}
                className="flex-1 py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 rounded-xl uppercase tracking-wider text-center"
              >
                Inquire for {activeModalProgram.name}
              </button>
              <a
                href={GYM_DATA.phoneLink}
                className="py-3 px-4 text-xs font-bold text-neutral-200 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>Call Gym</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
