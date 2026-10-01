import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  CheckCircle,
  Copy,
  ExternalLink,
  Building,
  Image as ImageIcon,
} from "lucide-react";
import { GYM_DATA } from "../data/gymData";
import realGymPhoto from "../assets/images/energy_fitness_real_gym.jpg";

export const Location: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<"map" | "photo">("map");

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(GYM_DATA.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-widest mb-3">
            <MapPin className="w-4 h-4" />
            <span>Visit Or Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight [text-wrap:balance]">
            Conveniently Located In Shalimar Bagh
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 [text-wrap:balance]">
            Stop by for a workout or a tour. We are located in Block BT basement, ready to welcome you from early morning.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Business Info Column */}
          <div className="lg:col-span-5 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                    {GYM_DATA.name}
                  </h3>
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mt-0.5">
                    {GYM_DATA.category}
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open Daily</span>
                </div>
              </div>

              {/* Info Items */}
              <div className="mt-6 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                      Address
                    </h4>
                    <p className="text-sm font-semibold text-neutral-100 mt-1 leading-relaxed">
                      {GYM_DATA.address.line1}, <br />
                      {GYM_DATA.address.line2}, <br />
                      {GYM_DATA.address.area}, {GYM_DATA.address.city} - {GYM_DATA.address.pincode}
                    </p>
                    <button
                      onClick={handleCopyAddress}
                      className="mt-2 text-xs font-medium text-neutral-400 hover:text-red-400 flex items-center gap-1.5 transition-colors"
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Address copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy full address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                      Direct Phone
                    </h4>
                    <a
                      href={GYM_DATA.phoneLink}
                      className="text-base font-bold text-white hover:text-red-400 transition-colors inline-block mt-1"
                    >
                      {GYM_DATA.phone}
                    </a>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Call for inquiries, memberships & personal training
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700/80 text-neutral-300 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                      Opening Hours
                    </h4>
                    <p className="text-sm font-bold text-neutral-100 mt-1">
                      {GYM_DATA.hours}
                    </p>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Early morning slots start from 6:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
              <a
                href={GYM_DATA.phoneLink}
                className="flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 rounded-xl shadow-lg shadow-red-600/25 flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                href={GYM_DATA.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider text-neutral-200 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-xl flex items-center justify-center gap-2 text-center"
              >
                <Navigation className="w-4 h-4 text-red-500" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Map & Photo Visual Column */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* View Mode Switcher */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("map")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    viewMode === "map"
                      ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                      : "bg-neutral-800 text-neutral-400 hover:text-white"
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Map & Navigation</span>
                </button>
                <button
                  onClick={() => setViewMode("photo")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    viewMode === "photo"
                      ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                      : "bg-neutral-800 text-neutral-400 hover:text-white"
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Real Gym Photo</span>
                </button>
              </div>

              <a
                href={GYM_DATA.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-neutral-400 hover:text-red-400 flex items-center gap-1"
              >
                <span>Google Maps Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* View Container */}
            {viewMode === "map" ? (
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-neutral-800/90 bg-neutral-950 flex flex-col items-center justify-center p-6 text-center group">
                {/* Subtle Grid / Map Lines Representation */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(#ef4444 1px, transparent 1px), linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
                    backgroundSize: "24px 24px, 48px 48px, 48px 48px",
                  }}
                />

                {/* Pin Centerpiece */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-red-600 to-orange-500 p-0.5 shadow-2xl shadow-red-600/40 animate-bounce duration-1000">
                    <div className="w-full h-full bg-neutral-950 rounded-2xl flex items-center justify-center text-red-500">
                      <MapPin className="w-8 h-8 fill-red-500/20 stroke-[2.5]" />
                    </div>
                  </div>

                  <div className="mt-4 bg-neutral-900/95 border border-neutral-700/80 px-4 py-2.5 rounded-xl shadow-xl backdrop-blur-md max-w-sm">
                    <h4 className="text-sm font-black text-white uppercase tracking-tight">
                      ENERGY FITNESS
                    </h4>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      BT 35 Basement, Block BT, West Shalimar Bagh
                    </p>
                    <p className="text-[11px] text-red-400 mt-1 font-semibold">
                      Shalimar Bagh, Delhi - 110088
                    </p>
                  </div>

                  <a
                    href={GYM_DATA.mapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 shadow-xl transition-all"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Bottom bar indicator */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-neutral-400 bg-neutral-950/80 px-3 py-1.5 rounded-lg border border-neutral-800">
                  <span>West Shalimar Bagh · Block BT</span>
                  <span className="text-emerald-400">Easy Basement Access</span>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-neutral-800/90 bg-neutral-950 group">
                <img
                  src={realGymPhoto}
                  alt="Real gym equipment inside Energy Fitness, Shalimar Bagh"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/90 backdrop-blur-md border border-neutral-800 p-3 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Authentic Floor Photography</p>
                    <p className="text-[11px] text-neutral-400">Energy Fitness Google Maps Business Listing</p>
                  </div>
                  <a
                    href={GYM_DATA.mapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                  >
                    <span>View Listing</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}

            {/* Quick Visit Tips */}
            <div className="mt-5 pt-4 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-red-500 shrink-0" />
                <span>Basement premises in Block BT with convenient nearby parking</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Doors open early from 6:00 AM for morning lifters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
