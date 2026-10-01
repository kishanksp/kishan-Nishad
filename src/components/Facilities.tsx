import React, { useState } from "react";
import { Dumbbell, Shield, Sparkles, Check, Info } from "lucide-react";
import { FACILITIES, FacilityItem } from "../data/gymData";
import groupFitnessImg from "../assets/images/facilities_group_fitness_1790879230637.jpg";

interface FacilitiesProps {
  onOpenJoin: () => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onOpenJoin }) => {
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem>(FACILITIES[0]);

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-neutral-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Well-Maintained Facility & Spaces</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight [text-wrap:balance]">
            Equipped For Real Progress & Cleanliness
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 [text-wrap:balance]">
            Our members celebrate our well-maintained gym equipment, tidy environment, and friendly workout vibe in Shalimar Bagh.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility) => {
            const isSelected = selectedFacility.id === facility.id;
            return (
              <div
                key={facility.id}
                onClick={() => setSelectedFacility(facility)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? "bg-neutral-900 border-red-500 shadow-xl shadow-red-950/20"
                    : "bg-neutral-900/70 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                      {facility.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700/60 flex items-center justify-center text-neutral-300">
                      <Dumbbell className="w-4 h-4 text-red-500" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-white uppercase tracking-tight">
                    {facility.name}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-800/80 space-y-1.5">
                    {facility.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-400">
                        <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-800/60 flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Maintenance & Cleanliness</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Shield className="w-3 h-3" /> Daily Checked
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio & Facility Visual Banner */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-neutral-800 relative bg-neutral-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 h-64 sm:h-80 lg:h-96 relative">
              <img
                src={groupFitnessImg}
                alt="Fitness and group activity studio representative space"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-neutral-950/90 via-neutral-950/40 to-transparent" />
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">
                Motivating Ambience
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                Train In A Welcoming, Motivating Setting
              </h3>
              <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                Whether you're breaking sweat at 6:00 AM or winding down in the evening, enjoy a friendly, non-judgmental environment backed by helpful staff and dedicated trainers.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <button
                  onClick={onOpenJoin}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-xl shadow-lg transition-transform hover:scale-105"
                >
                  Schedule A Gym Tour
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Disclaimer per prompt guidelines */}
        <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-neutral-500">
          <Info className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span>
            Equipment and spaces reflect real services at Energy Fitness, Shalimar Bagh. Photographic imagery is utilized for visual representation.
          </span>
        </div>
      </div>
    </section>
  );
};
