import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Dumbbell } from "lucide-react";
import { GYM_DATA } from "../data/gymData";

interface NavbarProps {
  onOpenJoin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Trainers", href: "#trainers" },
    { label: "Facilities", href: "#facilities" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3"
          : "bg-neutral-950/70 backdrop-blur-sm border-b border-neutral-800/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand wordmark (single clean element with athletic energy) */}
          <a
            href="#home"
            className="flex items-center gap-2 group text-xl sm:text-2xl font-black tracking-tight text-white uppercase"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-red-600 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform duration-200">
              <Dumbbell className="w-4 h-4 stroke-[2.5]" />
            </span>
            <span>
              ENERGY <span className="text-red-500">FITNESS</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-red-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={GYM_DATA.phoneLink}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors whitespace-nowrap"
              title="Call Energy Fitness"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{GYM_DATA.phone}</span>
            </a>
            <button
              onClick={onOpenJoin}
              className="px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-orange-500 rounded-lg shadow-lg shadow-red-600/25 hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 uppercase tracking-wider whitespace-nowrap"
            >
              Join Now
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenJoin}
              className="px-3 py-1.5 text-xs font-bold text-white bg-red-600 rounded-md uppercase tracking-wide"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/98 border-b border-neutral-800 px-5 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="py-2.5 px-3 text-base font-medium text-neutral-200 hover:text-red-400 hover:bg-neutral-900/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-neutral-800/80 flex flex-col gap-2.5">
              <a
                href={GYM_DATA.phoneLink}
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-lg"
              >
                <Phone className="w-4 h-4 text-red-500" />
                <span>Call {GYM_DATA.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoin();
                }}
                className="w-full py-3 px-4 text-sm font-bold text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-lg uppercase tracking-wider text-center shadow-lg shadow-red-600/30"
              >
                Join Energy Fitness Now
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
