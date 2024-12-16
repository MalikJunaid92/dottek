'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const TestimonialSection = () => {
    const testimonialsData = [
        {
            name: "Rodrigo Duarte",
            title: "Graphic Designer",
            image: "/profile.svg",
            comment:
                "Dottek’s cloud solutions revolutionized our operations, specifically migration and scalability were impressive, letting us work on the growth of business without having to think about infrastructures – their experience helped in avoiding the excess time and cost being spent.",
        },
        {
            name: "Jane Doe",
            title: "Software Engineer",
            image: "/profile2.png",
            comment:
                "Dottek's innovative tools helped us optimize our workflows. The support team is incredibly responsive, making the overall experience amazing!",
        },
        {
            name: "John Smith",
            title: "Project Manager",
            image: "/profile2.png",
            comment:
                "Dottek's project management tools have significantly improved our team's efficiency. The intuitive interface and robust features are exactly what we needed.",
        },
        {
            name: "Emily Johnson",
            title: "Data Analyst",
            image: "/profile2.png",
            comment:
                "The data analytics solutions provided by Dottek have been a game-changer for our business. The insights we gain are invaluable.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonialRef = useRef(null);

    const [scrollY, setScrollY] = useState(0); // Track scroll distance

    // Threshold to decide when to change the testimonial
    const SCROLL_THRESHOLD = 50; // Change this value for sensitivity

    // Change to the next testimonial
    const handlenext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    };

    // Change to the previous testimonial
    const handleprev = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
        );
    };

    // Handle scroll event within the testimonial section
    const handleScroll = (e) => {
        e.preventDefault();

        // Update scroll distance
        setScrollY((prev) => prev + e.deltaY);

        // If the scroll distance exceeds the threshold, change testimonial
        if (scrollY > SCROLL_THRESHOLD) {
            handlenext();
            setScrollY(0); // Reset scroll distance
        } else if (scrollY < -SCROLL_THRESHOLD) {
            handleprev();
            setScrollY(0); // Reset scroll distance
        }
    };

    useEffect(() => {
        const container = testimonialRef.current;
        if (container) {
            container.addEventListener('wheel', handleScroll, { passive: false });

            return () => {
                container.removeEventListener('wheel', handleScroll);
            };
        }
    }, [scrollY]);

    const { name, title, image, comment } = testimonialsData[currentIndex];
    // Framer Motion Variants
    const flipVariants = {
        initial: { opacity: 0, y: 50, rotateX: 90 },
        animate: { opacity: 1, y: 0, rotateX: 0 },
        exit: { opacity: 0, y: -50, rotateX: -90 },
    };

    return (
        <div className="relative w-full h-screen flex flex-col items-center justify-center gap-5 px-4 bg-[#140C1F] bg-opacity-60">
            <img
                src="/left_shade.png"
                alt="Left Shade"
                className="absolute top-0 left-0 w-[100%] md:w-[40%] opacity-100 z-0 h-[100%]"
            />

            <img
                src="/right_shade.png"
                alt="Right Shade"
                className="absolute top-0 right-0 w-[100%] md:w-[40%] opacity-100 z-0 h-[100%]"
            />
            {/* Title Section */}
            <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex items-center gap-2">
                    <span className="w-[20px] h-[16px] md:w-[30px] md:h-[24px]">
                        <img src="/left_quo.svg" alt="Left Quote" />
                    </span>
                    <h1 className="font-roboto text-[24px] md:text-[36px] font-bold leading-[32px] md:leading-[44px]">
                        Testimonials
                    </h1>
                    <span className="w-[20px] h-[16px] md:w-[30px] md:h-[24px]">
                        <img src="/right_quo.svg" alt="Right Quote" />
                    </span>
                </div>
                <p className="mt-2 text-[16px] md:text-[24px] font-roboto font-semibold leading-[24px] md:leading-[37.5px]">
                    What our members said?
                </p>
            </div>

            {/* Testimonial Container */}
            <div
                ref={testimonialRef}
                className="relative w-full max-w-[970px] mt-8 md:mt-12 flex flex-col items-center"
            >
                {/* Testimonial Box with Framer Motion */}
                <motion.div
                    key={currentIndex} // Trigger re-render on index change
                    variants={flipVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5, type: "spring" }}
                    className="relative w-full rounded-tl-[20px] border-t-[3px] border-t-[#480B49] border-b-[#FF1CF7] border-r-[#AD1AAF] border-l-[#AD1AAF] bg-white px-6 pt-12 pb-6 rounded-2xl min-h-[250px]"
                >
                    {/* two inner divs */}
                    <div className="absolute bottom-[-15%] w-[90%] h-20 z-[5] max-w-[810px] left-1/2 transform -translate-x-1/2 opacity-30 bg-white rounded-[20px]"></div>
                    <div className="absolute bottom-[-25%] w-[75%] h-20 z-[2] max-w-[760px] left-1/2 transform -translate-x-1/2 opacity-30 bg-white rounded-[20px]"></div>

                    {/* Profile Image */}
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full border-4 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </span>

                    {/* Name and Title */}
                    <div className="mt-4 flex flex-col items-center">
                        <span className="text-center text-sm md:text-xl font-medium text-black">
                            {name}
                        </span>
                        <span className="text-center text-xs md:text-sm text-gray-500">
                            {title}
                        </span>
                    </div>

                    {/* Testimonial Text */}
                    <div className="mt-6 text-center text-xs md:text-sm font-light leading-5 md:leading-6 text-black z-[10]">
                        &quot;{comment}&quot;
                    </div>
                    {/* Arrows */}
                    <div className="absolute top-1/2 left-[-40px] md:left-[-50px] transform -translate-y-1/2 flex flex-col justify-center items-center">
                        <button
                            onClick={handleprev}
                            className="w-[80px] md:w-[100px] flex justify-center items-center"
                        >
                            <img
                                src="/left_arrow.svg"
                                alt="Previous"
                                className="w-full"
                            />
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-[-40px] md:right-[-50px] transform -translate-y-1/2 flex flex-col justify-center items-center">
                        <button
                            onClick={handlenext}
                            className="w-[80px] md:w-[100px] flex justify-center items-center"
                        >
                            <img
                                src="/next_arrow.svg"
                                alt="Next"
                                className="w-full"
                            />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TestimonialSection;