"use client";
import React from "react";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <div className="text-center pt-16 h-screen flex items-center flex-col justify-center md:gap-12 gap-6 bg-[#550DF9] bg-opacity-[15%] backdrop-blur-4xl">
      <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
      <p className="text-lg md:text-2xl font-semibold mt-4">
        Our <span className="text-[#AD1AAF]">Top Value</span> Categories &
        Offerings for You
      </p>
      <img
        src="/left_shade.png"
        alt="Left Shade"
        className="absolute top-50 left-0 w-[100%] md:w-[40%] opacity-100 z-10"
      />

      {/* Right Shade */}
      <img
        src="/right_shade.png"
        alt="Right Shade"
        className="absolute top-25 right-0 w-[100%] md:w-[40%] opacity-100 z-10"
      />
      {/* Categories */}
      <div className="flex justify-center flex-wrap gap-8 mt-12 z-20">
        {[
          { src: "/architectural.svg", label: "Architectural Design" },
          { src: "/prototype.svg", label: "Prototype" },
          { src: "/implement.svg", label: "Implement" },
          { src: "/migrate.svg", label: "Migrate" },
          { src: "/maintain.svg", label: "Maintain" },
          { src: "/consult.svg", label: "Consult" },
          { src: "/staff.svg", label: "Staff Augmentation" },
        ].map((category, index) => (
          <div
            key={index}
            className="group flex flex-col items-center hover:scale-110 transition-transform duration-500 ease-in-out"
          >
            <Image
              src={category.src}
              alt={category.label}
              width={75} // Adjusted width for smaller screens
              height={75} // Adjusted height for smaller screens
              className="sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px] border-2 border-transparent rounded-full group-hover:border-[#FFA8FC] transition-colors duration-500"
            />
            <p className="mt-2 text-center text-sm sm:text-base md:text-lg font-medium">
              {category.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
