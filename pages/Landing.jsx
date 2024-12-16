"use client";
import React from "react";
import HeroSection from "../components/HeroSection";
import ParnterSection from "../components/Partner";
import ServicesSection from "../components/Services";
import StatisticsSection from "../components/StatisticsSection";
import MethodologySection from "../components/MethodologySection";
import TestimonialSection from "../components/TestimonialSection";
import OrchestrationSection from "../components/OrchestrationSection";


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



