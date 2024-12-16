import React from "react";
import Image from "next/image";
import { services } from "@/utils/data/service";

const Services = () => {

  return (
    <div className="w-full min-h-screen relative bg-[#140C1F] flex flex-col items-center justify-center overflow-hidden">
      {/* Gradient Blur Background */}
      <img
        src="/Gradient+Blur.png"
        alt="Background Gradient"
        className="absolute top-[-6%] left-0 opacity-100"
      />

      {/* Content Section */}
      <div className="relative z-10 max-w-screen-lg px-4 text-center pt-20 md:pt-32 lg:pt-40">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight lg:pt-20">
          Elevate your Enterprise with <br /> our Cloud Services
        </h1>

        {/* Description */}
        <p className="mt-8 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Unlock the potential of your business with our cloud expertise.
          Streamline operations, enhance security, and drive innovation. Unlock
          the potential of your business with our cloud expertise.
        </p>
      </div>

      {/* Milky Way Image */}
      <img
        src="/Milky Way.svg"
        alt="Milky Way"
        className="absolute left-0 top-80 w-full opacity-100"
      />

      {/* Service Sections */}
      <div className="flex flex-wrap gap-12 p-8 mx-auto mt-80 mb-32 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 w-[90%] lg:w-[1000px] shadow-[0_-4px_10px_rgba(255,255,255,0.5)]">
        {/* Service 1 */}
        {services.map((service) => (
          <div key={service?.title} className="flex flex-col md:flex-row lg:flex-row items-center md:items-start p-6 rounded-3xl gap-6 w-full lg:w-[947px] mx-auto">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                {service?.title}
              </h2>
              <p className="text-sm lg:text-base text-gray-300 leading-12 tracking-wide text-justify line-clamp-10">
                {service?.description}
              </p>
            </div>
            <Image
              src={service?.image}
              alt={service?.title}
              width={350}
              height={280}
              className="w-[300px] md:w-[350px] h-auto -mt-10"
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default Services;
