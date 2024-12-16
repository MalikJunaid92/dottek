import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-[#140C1F]">
      <div
        className="relative flex w-full min-h-[50vh] md:h-[700px] overflow-hidden bg-no-repeat bg-cover bg-center animate-bgMove z-0"
        style={{
          backgroundImage:
            "url('/about-us/Vector1.png'), url('/about-us/Vector2.svg'), url('/about-us/Vector3.svg'), url('/about-us/Vector4.svg'), url('/about-us/Vector5.svg'), url('/about-us/Vector6.svg'), url('/about-us/Vector7.svg'), url('/about-us/Vector8.svg'), url('/about-us/Vector9.svg'), url('/about-us/Vector10.svg'), url('/about-us/Vector11.svg'), url('/about-us/Vector12.svg'), url('/about-us/Vector13.svg'), url('/about-us/Vector14.svg'), url('/about-us/Vector15.svg'), url('/about-us/Vector16.svg'), url('/about-us/Vector17.svg'), url('/about-us/Vector18.svg'), url('/about-us/Vector19.svg'), url('/about-us/Vector20.svg'), url('/about-us/Vector21.svg'), url('/about-us/Vector22.svg'), url('/about-us/Vector23.svg'), url('/about-us/Vector24.svg'), url('/about-us/Vector25.svg'), url('/about-us/Vector26.svg'), url('/about-us/Vector27.svg'), url('/about-us/Vector28.svg'), url('/about-us/Vector29.svg'), url('/about-us/Vector30.svg'), url('/about-us/Vector31.svg'), url('/about-us/Vector32.svg'), url('/about-us/Vector33.svg'), url('/about-us/Vector34.svg'), url('/about-us/Vector35.svg'), url('/about-us/Vector36.svg'), url('/about-us/Vector37.svg'), url('/about-us/Vector38.svg'), url('/about-us/Vector39.svg'), url('/about-us/Vector40.svg'), url('/about-us/Vector41.svg'), url('/about-us/Vector42.svg')",
          backgroundPosition: "0% 0%",
          backgroundSize: "100%", // Large size for continuous scrolling
          opacity: 0.5,
        }}
      >
        {/* Gradient Blur Background */}
        <img
          src="/Gradient+Blur.png"
          alt="Background Gradient"
          className="absolute top-[-10%] left-0"
        />

        {/* Milky Way Image */}
        <img
          src="/Milky Way.svg"
          alt="Milky Way"
          className="absolute bottom-[-5%] md:bottom-[-10%] left-0 w-[80%] md:w-full h-auto object-contain z-0"
        />
        {/* Right Shade */}
        <img
          src="/right_shade.png"
          alt="Right Shade"
          className="absolute top-[10%] right-0 w-[50%] md:w-[40%] opacity-100"
        />
      </div>

      {/* Content */}
      <div className="absolute left-0 right-0 top-[5%] md:top-[13%] flex flex-col items-center justify-center px-6 md:px-12 text-center z-20">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 ">
          Who We Are?
        </h2>
        {/* Description */}
        <p className="text-sm md:text-lg text-white max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim commodo consequat.
        </p>
      </div>

      <div className="text-center mt-46 h-[50vh] flex flex-col items-center justify-center gap-6 md:gap-12 bg-[#AD1AAF] bg-opacity-90 backdrop-blur-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our Mission
        </h2>
        <p className="text-sm md:text-xl text-white mt-2 px-4 md:px-16 text-center max-w-[1000px] mx-auto">
          {`Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining containing
          Lorem Ipsum passages.`}
        </p>
      </div>

      <div
        style={{
          backgroundImage: "url('/our_values.svg')",
          backgroundPosition: "center", // Center the background
          backgroundSize: "cover", // Cover the entire div
          backgroundRepeat: "no-repeat", // Prevent repetition
        }}
        className="text-center py-32 min-h-screen flex flex-col items-center justify-center gap-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white pt-8 md:pt-0 md:bottom-20">
          Our Values
        </h2>

        <p className="text-sm md:text-xl text-white mt-2 px-4 md:px-16 text-center max-w-[1000px] mx-auto">
          Our commitment to customers fosters trust and boosts sales performance. By understanding your needs, we create strategies that enhance satisfaction and drive growth.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {[
            {
              src: "/trade.svg",
              label: "Scalability",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt aliqua.",
            },
            {
              src: "/dollor.svg",
              label: "Affordability",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt aliqua.",
            },
            {
              src: "/bookmark.svg",
              label: "Reliability",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt aliqua.",
            },
            {
              src: "/sharing.svg",
              label: "Collaboration",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt aliqua.",
            },
            {
              src: "/security.svg",
              label: "Security",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt aliqua.",
            },
          ].map((category, index) => (
            <div key={index} className="flex flex-col items-center max-w-[150px]">
              <div
                className={`relative flex items-center justify-center bg-no-repeat bg-center bg-contain w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[100px] md:h-[100px] ${category.src === "/security.svg"
                  ? "bg-[url('/ellipse_values.png')]"
                  : ""
                  }`}
              >
                <Image
                  src={category.src}
                  alt={category.label}
                  width={category.src === "/security.svg" ? 40 : 50}
                  height={category.src === "/security.svg" ? 40 : 50}
                  className={`object-contain ${category.src === "/security.svg"
                    ? "w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px]"
                    : "w-full h-full"
                    }`}
                />
              </div>
              <p className="mt-2 text-center text-sm sm:text-base md:text-lg font-medium text-white">
                {category.label}
              </p>
              <p className="mt-2 text-center text-sm sm:text-base md:text-sm text-white">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-[80vh] flex flex-col justify-center items-center text-center px-4 md:px-16 bg-no-repeat">
        {/* Left Shade */}
        <img
          src="/left_shade.png"
          alt="Left Shade"
          className="absolute top-[-70%] left-0 w-[100%] md:w-[40%] opacity-100"
        />

        {/* Right Shade */}
        <img
          src="/right_shade.png"
          alt="Right Shade"
          className="absolute top-[-70%] right-0 w-[100%] md:w-[40%] opacity-100"
        />

        {/* Right Shade */}
        <img
          src="/status_milky_way.svg"
          alt="Right Shade"
          className="absolute top-[20%] sm:inset-0 w-[80%] md:w-[80%] opacity-100"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-center gap-6 md:gap-28 px-4 md:px-8 pb-12 md:pt-0 w-full max-w-screen-lg">
          {/* Heading */}
          <h2 className="text-2xl md:text-5xl font-bold text-white text-center md:text-end min-w-[400px] md:min-w-[300px]">
            Status of the <br /> Company
          </h2>
          {/* Paragraph */}
          <p className="text-sm  text-white max-w-sm text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
