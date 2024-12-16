"use client";
import React from "react";

export default function OrchestrationSection() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-end gap-4 md:gap-8 bg-[#140C1F] bg-opacity-60">
      <div className="w-[40.375rem] h-[3.5rem] text-center font-roboto text-2xl md:text-4xl font-bold leading-[3.515625rem]">
        Effortless Orchestration
      </div>
      {/* Right Shade */}
      {/* <img
        src="/right_shade.png"
        alt="Right Shade"
        className="absolute top-20 right-0 w-[100%] md:w-[40%] opacity-100"
      /> */}

      <div className="w-[80%] md:w-[48.75rem] text-center font-roboto text-sm md:text-xl font-normal leading-[1.757813rem]">
        Automatically sync and deploy your secrets across all your environments
        and infrastructure through our expanding suite of integrations.
      </div>
      <div className="w-full flex flex-col justify-center items-center relative">
        <img
          src="/orchestration.png"
          className="max-w-[90%] md:max-w-[65%] h-[20rem] md:h-[25rem] rounded-lg  z-10"
        />
        <img
          src="/gradient_skills.svg"
          className="max-w-[90%] md:max-w-[100%] h-[20rem] md:h-[30rem] rounded-lg absolute top-0 opacity-[35%]"
        />

      </div>
    </div>
  );
}
