'use client';
import React from 'react';

const StatisticsSection = () => {
    return (
        <div className="w-full h-[90vh] relative overflow-hidden flex bg-[#AD1AAF] bg-opacity-[20%]"
            style={{ boxShadow: "0px 3.33px 32.4px 0px #FFFFFF52" }}
        >
            {/* Left Background Image */}
            <img
                src="/maskL.png"
                alt="Left Background"
                className="absolute left-0 top-0 h-full md:object-cover w-[65%]"
            />

            {/* Right Background Image */}
            <img
                src="/maskR.png"
                alt="Right Background"
                className="absolute right-0 top-0 h-full md:object-cover w-[64%]"
            />
            {/* Content Section at the Bottom */}
            <div className="absolute top-[18%] w-full flex flex-col items-center gap-8 md:gap-10">
                {/* Title Section */}
                <div className="text-center">
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white -mt-4">
                        <span className="text-[#AD1AAF]">Right Fit</span> for Investment
                    </h2>
                </div>

                {/* Subtitle Section */}
                <div className="text-center w-full text-base sm:text-md md:text-xl font-normal leading-[1.8] text-white p-4">
                    Our commitment to customers fosters trust and boosts sales
                    performance. <br />
                    By understanding your needs, we create strategies that enhance
                    satisfaction <br />
                    and drive growth.
                </div>

                {/* Statistics Section */}
                <div className="relative flex items-center justify-center mt-10">
                    {/* Left Stat */}
                    <div className="relative w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] -mr-12 z-10">
                        <img
                            src="/ellipse_left.svg"
                            alt="Certifications"
                            className="object-contain w-full h-full"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <p className="text-[#AD1AAF] text-xl sm:text-3xl font-bold">
                                8+
                            </p>
                            <p className="text-black text-xs sm:text-sm">Certifications</p>
                        </div>
                    </div>

                    {/* Middle Stat */}
                    <div className="relative w-[150px] sm:w-[180px] h-[150px] sm:h-[180px] z-20">
                        <img
                            src="/ellipse_mid.svg"
                            alt="Clients"
                            className="object-contain w-full h-full"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <p className="text-[#AD1AAF] text-2xl sm:text-5xl font-bold">
                                98+
                            </p>
                            <p className="text-black text-sm sm:text-3xl">Clients</p>
                        </div>
                    </div>

                    {/* Right Stat */}
                    <div className="relative w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] -ml-12 z-10">
                        <img
                            src="/ellipse_right.svg"
                            alt="Projects"
                            className="object-contain w-full h-full"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <p className="text-[#AD1AAF] text-xl sm:text-3xl font-bold">
                                20+
                            </p>
                            <p className="text-black text-xs sm:text-sm">Projects</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default StatisticsSection;