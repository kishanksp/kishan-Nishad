import React from "react";
import { Star, Dumbbell, Compass, MapPin } from "lucide-react";
import { GYM_DATA } from "../data/gymData";

export const QuickInfo: React.FC = () => {
  const cards = [
    {
      icon: Star,
      iconColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
      title: `${GYM_DATA.rating} Rating`,
      subtitle: `${GYM_DATA.reviewsCount}+ Verified Reviews`,
      detail: "Top rated fitness center in West Shalimar Bagh",
    },
    {
      icon: Dumbbell,
      iconColor: "text-red-500 bg-red-500/10 border-red-500/20",
      title: "Professional Equipment",
      subtitle: "Well-Maintained Equipment",
      detail: "Clean barbells, dumbbell racks, and resistance machines",
    },
    {
      icon: Compass,
      iconColor: "text-orange-400 bg-orange-400/10 border-orange-400/20",
      title: "Expert Guidance",
      subtitle: "Personal Attention & Training",
      detail: "Hands-on technique correction and daily coaching",
    },
    {
      icon: MapPin,
      iconColor: "text-red-400 bg-red-400/10 border-red-400/20",
      title: "Shalimar Bagh",
      subtitle: "Delhi, India",
      detail: "Prime Block BT basement location with easy access",
    },
  ];

  return (
    <section id="quick-info" className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 hover:border-neutral-700/80 p-5 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3.5 mb-3">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border ${card.iconColor} group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-none group-hover:text-red-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-semibold text-neutral-400 mt-1">
                    {card.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {card.detail}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
