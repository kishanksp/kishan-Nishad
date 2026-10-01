import React from "react";
import { Dumbbell, Phone, MapPin, Clock, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { GYM_DATA } from "../data/gymData";

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Trainers", href: "#trainers" },
    { label: "Facilities", href: "#facilities" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const currentYear = 2026;

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Motto */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-2xl font-black tracking-tight text-white uppercase">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-red-600 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-red-600/30">
                <Dumbbell className="w-4 h-4 stroke-[2.5]" />
              </span>
              <span>
                ENERGY <span className="text-red-500">FITNESS</span>
              </span>
            </div>

            <p className="mt-4 text-base font-semibold text-neutral-300">
              “Train Hard. Stay Strong. Live Better.”
            </p>

            <p className="mt-2 text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Energy Fitness is your dedicated neighborhood fitness center in Shalimar Bagh, Delhi. Known for well-maintained equipment, attentive trainers, and an inspiring fitness community.
            </p>

            {/* Social media placeholder icons per prompt instructions */}
            <div className="mt-6 flex items-center gap-3">
              <span
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 cursor-pointer transition-colors"
                title="Social Profile Placeholder"
                aria-label="Instagram placeholder"
              >
                <Instagram className="w-4 h-4" />
              </span>
              <span
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 cursor-pointer transition-colors"
                title="Social Profile Placeholder"
                aria-label="Facebook placeholder"
              >
                <Facebook className="w-4 h-4" />
              </span>
              <span
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 cursor-pointer transition-colors"
                title="Social Profile Placeholder"
                aria-label="YouTube placeholder"
              >
                <Youtube className="w-4 h-4" />
              </span>
              <span
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 cursor-pointer transition-colors"
                title="Social Profile Placeholder"
                aria-label="Twitter placeholder"
              >
                <Twitter className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-red-400 transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contact & Location
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-neutral-300">
                  {GYM_DATA.address.full}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={GYM_DATA.phoneLink}
                  className="text-white hover:text-red-400 font-semibold transition-colors"
                >
                  {GYM_DATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-neutral-300">
                  {GYM_DATA.hours}
                </span>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
              <p className="text-[11px] text-neutral-400">
                ⭐ <strong className="text-neutral-200">4.9/5 Rating</strong> with 178+ verified Google reviews in Shalimar Bagh.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} Energy Fitness. All Rights Reserved.</p>
          <p className="text-neutral-400">
            Shalimar Bagh, Delhi · Gym & Fitness Center
          </p>
        </div>
      </div>
    </footer>
  );
};
