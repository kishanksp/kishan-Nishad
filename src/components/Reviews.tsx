import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from "lucide-react";
import { GYM_DATA, REVIEWS } from "../data/gymData";

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-neutral-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Scoreboard & Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          {/* Rating Summary Display */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 shadow-xl mb-4">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-white tabular-nums">
              {GYM_DATA.rating} / 5.0
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-xs font-semibold text-neutral-300">
              {GYM_DATA.reviewsCount} Google Reviews
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight [text-wrap:balance]">
            Trusted By Shalimar Bagh Members
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 [text-wrap:balance]">
            Real feedback reflecting our clean environment, attentive staff, and daily coaching support.
          </p>
        </div>

        {/* Testimonial Carousel Card */}
        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md">
            {/* Top Quote Icon */}
            <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-6">
              <Quote className="w-6 h-6 rotate-180" />
            </div>

            {/* Quoted Review Text (strictly distinguished from marketing copy) */}
            <div className="min-h-[140px] sm:min-h-[120px] flex flex-col justify-center">
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-100 italic leading-snug tracking-tight">
                “{currentReview.quote}”
              </blockquote>
            </div>

            {/* Review Theme & Attribution */}
            <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white uppercase tracking-wide">
                    {currentReview.theme}
                  </span>
                  <span className="text-neutral-600">·</span>
                  <div className="flex items-center text-amber-400">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{currentReview.tag} · Shalimar Bagh, Delhi</span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-red-500"
                    : "w-2 bg-neutral-700 hover:bg-neutral-600"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Review Provenance Note */}
        <p className="mt-8 text-center text-xs text-neutral-500 max-w-xl mx-auto">
          Reviews and sentiment represent verified member feedback from 178+ ratings on Google Maps for Energy Fitness, Shalimar Bagh.
        </p>
      </div>
    </section>
  );
};
