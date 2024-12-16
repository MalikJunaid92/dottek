"use client";
import React from "react";
import HeroSection from "./HeroSection";
import ParnterSection from "./Partner";
import ServicesSection from "./ServicesSection";
import StatisticsSection from "./StatisticsSection";
import MethodologySection from "./MethodologySection";
import TestimonialSection from "./TestimonialSection";
import OrchestrationSection from "./OrchestrationSection";


const HeroImage = () => {

  return (
    <div className="relative w-full overflow-x-hidden h-full bg-black">
      <HeroSection />
      <ParnterSection />
      <ServicesSection />
      <StatisticsSection />
      <MethodologySection />
      <OrchestrationSection />
      <TestimonialSection />
    </div >
  );
};

export default HeroImage;



