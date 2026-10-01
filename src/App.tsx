import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { QuickInfo } from "./components/QuickInfo";
import { About } from "./components/About";
import { Programs } from "./components/Programs";
import { PersonalTraining } from "./components/PersonalTraining";
import { Facilities } from "./components/Facilities";
import { Trainers } from "./components/Trainers";
import { Reviews } from "./components/Reviews";
import { Location } from "./components/Location";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { JoinModal } from "./components/JoinModal";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>("");

  const handleOpenJoin = (programName?: string) => {
    setSelectedProgram(programName || "");
    setIsJoinModalOpen(true);
  };

  const handleCloseJoin = () => {
    setIsJoinModalOpen(false);
    setSelectedProgram("");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-red-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenJoin={() => handleOpenJoin()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenJoin={() => handleOpenJoin()} />

        {/* Quick Information Cards */}
        <QuickInfo />

        {/* About Energy Fitness */}
        <About onOpenJoin={() => handleOpenJoin()} />

        {/* Fitness Programs */}
        <Programs onSelectProgram={(prog) => handleOpenJoin(prog)} />

        {/* Personal Training Section */}
        <PersonalTraining onOpenJoin={() => handleOpenJoin("Personal Training")} />

        {/* Facilities Section */}
        <Facilities onOpenJoin={() => handleOpenJoin()} />

        {/* Trainers Section */}
        <Trainers onAskPersonalTraining={() => handleOpenJoin("Personal Training")} />

        {/* Reviews Testimonial Carousel */}
        <Reviews />

        {/* Contact & Location Section */}
        <Location />

        {/* Join Now CTA Banner */}
        <CTA onOpenJoin={() => handleOpenJoin()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Join / Inquiry Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={handleCloseJoin}
        defaultProgram={selectedProgram}
      />

      {/* Back to top floating button */}
      <BackToTop />
    </div>
  );
}
