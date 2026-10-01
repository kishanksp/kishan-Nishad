import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-neutral-900/90 text-neutral-300 hover:text-white border border-neutral-700/80 hover:border-red-500 shadow-2xl backdrop-blur-md hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-1 group"
      aria-label="Back to top of page"
    >
      <ArrowUp className="w-5 h-5 group-hover:text-red-400 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};
