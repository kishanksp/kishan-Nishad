import React from "react";
import { UserCheck, ShieldCheck, HeartHandshake, Compass, MessageCircle, Phone } from "lucide-react";
import { GYM_DATA } from "../data/gymData";

interface TrainersProps {
  onAskPersonalTraining: () => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onAskPersonalTraining }) => {
  const trainerRoles = [
    {
      role: "Professional Trainer",
      category: "Form & Strength Coaching",
      icon: UserCheck,
      description: "Dedicated to teaching proper lifting biomechanics, spotting safe execution, and helping you build compound strength without injury.",
      attributes: ["Technique Correction", "Lifting Safety", "Workout Structure"],
    },
    {
      role: "Personal Guidance",
      category: "Individualized Attention",
      icon: Compass,
      description: "Providing day-to-day focus and customized coaching tailored to your individual baseline, fitness goals, and personal schedule.",
      attributes: ["Daily Supervision", "Custom Progression", "Goal Alignment"],
    },
    {
      role: "Fitness Support",
      category: "Community & Floor Assistance",
      icon: HeartHandshake,
      description: "Friendly, approachable floor assistance ensuring a welcoming atmosphere, proper equipment usage, and continuous encouragement.",
      attributes: ["Floor Assistance", "Equipment Advice", "Motivating Energy"],
    },
  ];

  return (
    <section id="trainers" className="py-20 sm:py-28 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest mb-3">
            <span>Coaching Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight [text-wrap:balance]">
            Meet Our Trainers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 [text-wrap:balance]">
            Members at Energy Fitness consistently praise the hands-on personal attention, friendly guidance, and knowledgeable support delivered on every workout.
          </p>
        </div>

        {/* Generic Trainer Role Cards (Strictly complies with no fake names/fake awards rule) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainerRoles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700/80 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                    {item.category}
                  </span>

                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mt-1 group-hover:text-red-400 transition-colors">
                    {item.role}
                  </h3>

                  <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-neutral-800 space-y-2">
                    {item.attributes.map((attr, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                        <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                        <span>{attr}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-800/60">
                  <button
                    onClick={onAskPersonalTraining}
                    className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-neutral-200 bg-neutral-800 hover:bg-neutral-700 hover:text-white rounded-lg transition-colors text-center"
                  >
                    Request Guidance
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ask About Personal Training Callout Box */}
        <div className="mt-12 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
              Need 1-on-1 Fitness Mentorship?
            </span>
            <h4 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight mt-1">
              Accelerate Your Progress With Direct Trainer Supervision
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
              Get an individual assessment, tailored routines, and dedicated form corrections to reach your goals faster.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={onAskPersonalTraining}
              className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 rounded-xl shadow-lg shadow-red-600/25 transition-all text-center"
            >
              Ask About Personal Training
            </button>
            <a
              href={GYM_DATA.phoneLink}
              className="w-full sm:w-auto px-5 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-200 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
