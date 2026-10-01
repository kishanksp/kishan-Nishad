import React from "react";
import { Check, ShieldCheck, HeartHandshake, ArrowRight, Phone } from "lucide-react";
import { GYM_DATA } from "../data/gymData";
import trainerImg from "../assets/images/personal_trainer_guidance_1790879218709.jpg";

interface PersonalTrainingProps {
  onOpenJoin: () => void;
}

export const PersonalTraining: React.FC<PersonalTrainingProps> = ({ onOpenJoin }) => {
  const benefits = [
    {
      title: "Personalized Guidance",
      desc: "Tailored movement cues and progressive loads suited specifically to your physiology and current training baseline.",
    },
    {
      title: "Workout Support",
      desc: "Attentive spotting, form reinforcement, and immediate feedback on each repetition for maximum safety.",
    },
    {
      title: "Training Assistance",
      desc: "Hands-on instruction across free weights, barbells, and machines to build confidence without hesitation.",
    },
    {
      title: "Motivating Environment",
      desc: "A positive, focused atmosphere where trainers actively invest in your consistency and progress every day.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Checklist */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest mb-3">
              <HeartHandshake className="w-4 h-4" />
              <span>Dedicated Coaching</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight [text-wrap:balance]">
              Personal Attention. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-600">
                Better Results.
              </span>
            </h2>

            <p className="mt-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
              At Energy Fitness, members consistently highlight the personal attention and guidance they receive every day. Whether you are stepping into a gym for the first time or breaking through strength plateaus, our attentive trainers ensure you train with correct technique and sustained drive.
            </p>

            {/* Structured Points */}
            <div className="mt-8 space-y-4">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-neutral-900/70 border border-neutral-800/80 hover:border-neutral-700/80 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenJoin}
                className="px-7 py-4 text-sm font-black uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 rounded-xl shadow-xl shadow-red-600/30 hover:shadow-red-600/50 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Start Your Fitness Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={GYM_DATA.phoneLink}
                className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-red-500" />
                <span>Call {GYM_DATA.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group">
              <img
                src={trainerImg}
                alt="Personal attention and workout coaching at Energy Fitness"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

              {/* Verified member experience quote pill */}
              <div className="absolute bottom-6 left-6 right-6 bg-neutral-950/90 backdrop-blur-md border border-neutral-800 p-4 sm:p-5 rounded-xl shadow-2xl">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-1">
                  <span>★ ★ ★ ★ ★</span>
                  <span className="text-neutral-400">· Real Member Experience</span>
                </div>
                <blockquote className="text-xs sm:text-sm text-neutral-200 italic">
                  “Personal attention and guidance every single day.”
                </blockquote>
                <div className="mt-2 text-[11px] text-neutral-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Google Review theme · Shalimar Bagh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
