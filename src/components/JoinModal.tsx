import React, { useState, useEffect } from "react";
import { X, Phone, CheckCircle, Flame, Dumbbell } from "lucide-react";
import { GYM_DATA, PROGRAMS } from "../data/gymData";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  defaultProgram = "",
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState(defaultProgram || "Strength Training");
  const [preferredTime, setPreferredTime] = useState("Morning (6:00 AM - 10:00 AM)");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (defaultProgram) {
      setProgram(defaultProgram);
    }
  }, [defaultProgram]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please provide your name.");
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, "").length < 8) {
      setError("Please enter a valid phone number so we can reach you.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleResetAndClose}
    >
      <div
        className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider mb-2">
              <Flame className="w-4 h-4" />
              <span>Start Your Transformation</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Join Energy Fitness
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 mb-6">
              Fill in your details below for membership inquiries, a free walk-in gym tour, or personal guidance in Shalimar Bagh.
            </p>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-950/50 border border-red-800/80 text-xs text-red-300 font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 098911 71898"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Interested Program
                </label>
                <select
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
                >
                  {PROGRAMS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="General Gym Membership">General Gym Membership</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Preferred Time Slot
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
                >
                  <option value="Morning (6:00 AM - 10:00 AM)">Morning (6:00 AM onwards)</option>
                  <option value="Mid-day (10:00 AM - 4:00 PM)">Mid-day (10:00 AM - 4:00 PM)</option>
                  <option value="Evening (4:00 PM - 10:00 PM)">Evening (4:00 PM - 10:00 PM)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-sm font-black uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 rounded-xl shadow-xl shadow-red-600/30 transition-all text-center"
                >
                  Submit Inquiry
                </button>
              </div>

              <p className="text-[11px] text-center text-neutral-500">
                Or call directly anytime:{" "}
                <a href={GYM_DATA.phoneLink} className="text-red-400 underline font-semibold">
                  {GYM_DATA.phone}
                </a>
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white uppercase tracking-tight">
              Inquiry Received!
            </h3>
            <p className="text-sm text-neutral-300 mt-2 max-w-sm mx-auto">
              Thank you, <strong className="text-white">{name}</strong>. Our team at Energy Fitness will get in touch regarding{" "}
              <strong className="text-red-400">{program}</strong> shortly.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-left text-xs space-y-1.5">
              <div className="text-neutral-400">
                Location: <span className="text-white font-medium">{GYM_DATA.address.full}</span>
              </div>
              <div className="text-neutral-400">
                Opening Hours: <span className="text-white font-medium">{GYM_DATA.hours}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={GYM_DATA.phoneLink}
                className="flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Gym Now</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider text-neutral-300 bg-neutral-800 hover:bg-neutral-700 rounded-xl transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
