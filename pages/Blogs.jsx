import React from "react";
import { blogData } from "@/utils/data/blogs";

const Blogs = () => {

  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-[#140C1F]">
      <div
        className="relative flex w-full min-h-[50vh] md:h-[700px] overflow-hidden bg-no-repeat bg-cover bg-center animatee-bgMove"
        style={{
          backgroundImage:
            "url('/blogs/Vector1.png'), url('/blogs/Vector2.svg'), url('/blogs/Vector3.svg'), url('/blogs/Vector4.svg'), url('/blogs/Vector5.svg'), url('/blogs/Vector6.svg'), url('/blogs/Vector7.svg'), url('/blogs/Vector8.svg'), url('/blogs/Vector9.svg'), url('/blogs/Vector10.svg'), url('/blogs/Vector11.svg'), url('/blogs/Vector12.svg'), url('/blogs/Vector13.svg'), url('/blogs/Vector14.svg'), url('/blogs/Vector15.svg'), url('/blogs/Vector16.svg'), url('/blogs/Vector17.svg'), url('/blogs/Vector18.svg'), url('/blogs/Vector19.svg'), url('/blogs/Vector20.svg'), url('/blogs/Vector21.svg'), url('/blogs/Vector22.svg'), url('/blogs/Vector23.svg'), url('/blogs/Vector24.svg'), url('/blogs/Vector25.svg'), url('/blogs/Vector26.svg'), url('/blogs/Vector27.svg'), url('/blogs/Vector28.svg'), url('/blogs/Vector29.svg'), url('/blogs/Vector30.svg'), url('/blogs/Vector31.svg'), url('/blogs/Vector32.svg'), url('/blogs/Vector33.svg'), url('/blogs/Vector34.svg'), url('/blogs/Vector35.svg'), url('/blogs/Vector36.svg'), url('/blogs/Vector37.svg'), url('/blogs/Vector38.svg'), url('/blogs/Vector39.svg'), url('/blogs/Vector40.svg'), url('/blogs/Vector41.svg'), url('/blogs/Vector42.svg'), url('/blogs/Vector43.svg')",
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
      </div>

      {/* Content */}
      <div className="absolute left-0 right-0 top-[2%] sm:top-[3%] md:top-[5%] lg:top-[10%] flex flex-col items-center justify-center px-6 md:px-12 text-center z-20">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Dottek Blogs
        </h2>
        {/* Description */}
        <p className="text-sm md:text-lg text-white max-w-6xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim commodo consequat.
        </p>
      </div>
      <div className="text-center mt-17 h-[45vh] flex flex-col items-center justify-center gap-6 md:gap-12 bg-[#AD1AAF] bg-opacity-90 backdrop-blur-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Learn How to Grow Your Ecommerce Business.
        </h2>
      </div>

      {/* Third Child Div with Blogs Section */}

      <div className="relative min-h-screen flex flex-wrap justify-center gap-16 space-y-20 mt-40 px-6 lg:px-[10rem]">
        <  img
          src="/left_shade.png"
          alt="Left Shade"
          className="absolute top-[-10%] left-0 w-[100%] md:w-[40%] opacity-100 z-10"
        />

        {/* Right Shade */}
        <img
          src="/right_shade.png"
          alt="Right Shade"
          className="absolute top-[-30%] right-0 w-[100%] md:w-[40%] opacity-100 z-0"
        />
        <  img
          src="/left_shade.png"
          alt="Left Shade"
          className="absolute top-[50%] left-0 w-[100%] md:w-[40%] opacity-100 z-0"
        />

        {/* Right Shade */}
        <img
          src="/right_shade.png"
          alt="Right Shade"
          className="absolute top-[30%] right-0 w-[100%] md:w-[40%] opacity-100 z-0"
        />

        {/* Blogs */}
        {blogData?.map((item) => <>
          {/* Card 1 */}
          <div className="w-[285px] lg:w-[320px] bg-[#231C2E] rounded-3xl shadow-md transition-all duration-300 flex flex-col relative overflow-hidden group">
            {/* Image Section */}
            <div
              className="w-full h-32 mb-4 rounded-t-3xl overflow-hidden"
              style={{
                backgroundImage: "url(/blog-cloud.png)", // Background image source
                backgroundPosition: "center", // Centers the background image
                backgroundSize: "cover", // Ensures the image covers the entire container
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
                padding: "0", // Ensures no padding affects the image
                margin: "0", // Removes any margin that might affect positioning
                top: "0", // Aligns the image to the top of the container
                left: "0", // Aligns the image to the left of the container
                height: "10rem", // Fixed height for the image container
                width: "100%", // Ensures it spans the full width of the parent container
              }}
            >
              {/* Foreground Image */}
              <img
                src="/blog-cloud-bg.svg"
                alt="Blog Cloud"
                className=" w-[100%] h-[100%] opacity-100 object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between flex-grow relative z-10 pt-8 pb-4 px-4">
              {/* Soft Light Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white to-transparent animate-move-light"></div>
              </div>
              {" "}
              {/* Added margin-top to separate text from the image */}
              <h3 className="text-lg font-semibold text-white mb-2 h-[49px] line-clamp-2">
                {item?.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed text-justify line-clamp-3 h-[105px]">
                {item?.description}
              </p>

              <a
                href="#"
                className="text-white font-semibold flex items-center mt-auto group"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </>
        )}
      </div>
      <div className="w-full max-w-full sm:max-w-[1041px] h-[auto] sm:h-[104px] mt-[270px] sm:mt-[100px] md:mt-[200px] lg:mt-[100px] xl:mt-[200px] mb-44 flex flex-col sm:flex-row items-center justify-center bg-[#231C2E] rounded-2xl px-4 py-4 sm:py-0 mx-auto">
        {/* Logo Image */}
        <img
          src="/dottek.svg"
          alt="Dottek Logo"
          className="w-[96px] h-[21px] sm:w-[96px] sm:h-[21px]"
        />

        {/* Text Description */}
        <span className="w-[300px] max-w-[395px] mx-5">
          Stay up to date with new platform releases and get to know the team of
          experts behind them.
        </span>

        {/* Input Field */}
        <div className="w-full sm:w-[250px] sm:flex-1 flex flex-col sm:flex-row items-center mb-4 sm:mb-0 sm:ml-[10px]">
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-3 bg-transparent border border-[#382f46] rounded-3xl text-white placeholder-white z-10"
            placeholder="Enter your email"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full sm:w-[6rem] py-2 px-2 bg-[#AD1AAF] text-white rounded-xl mt-4 sm:mt-0 sm:ml-4 z-10 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
