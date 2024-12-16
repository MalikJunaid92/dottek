'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';

const HeroSection = () => {
    const router = useRouter();

    const phrases = ["Cloud Expertise", "Sufficient Colors", "Seamless Solutions", "Scalability"]; // Dynamic phrases
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 3000); // Change text every 3 seconds
        return () => clearInterval(interval); // Clean up interval
    }, [phrases.length]);

    return (
        <div className="w-full min-h-[screen] relative overflow-hidden">
            {/* Background Image */}
            <img
                src="/noise.png"
                alt="Background"
                layout="fill"
                className="w-full h-[90vh] relative object-cover md:object-fill"
                objectFit="cover"
                priority
            />
            <img
                src="/Milky Way.svg"
                alt="Milky Way"
                className="w-full brightness-125 opacity-100 object-cover absolute bottom-0 left-0 right-0 h-[50vh]"
            />
            {/* Overlay Text */}
            <div className="w-full absolute inset-0 bg-black bg-opacity-10 flex items-center justify-between">
                <div className="text-left space-y-6 max-w-4xl md:ml-24 ml-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-10">
                        Empowering Businesses <br />
                        with{" "}
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentPhraseIndex}
                                className="text-[#AD1AAF] italic inline-block mt-2"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.5 }}
                            >
                                {phrases[currentPhraseIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                        Transform your business with cutting-edge cloud solutions. <br />
                        Maximize efficiency, reduce costs, and ensure seamless
                        scalability.
                    </p>
                </div>
                {/* Contact Button with Hover */}
                <div className="relative group w-[45px] h-[45px] flex items-center justify-center mr-16 cursor-pointer">
                    {/* Arrow Button (Hidden on Hover) */}
                    <motion.div
                        className="w-full h-full flex items-center justify-center bg-[#FFC6EB] rounded-full transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.1, 1], transition: { duration: 1.5, repeat: Infinity } }}
                    >
                        <img
                            src="/con_arr.svg"
                            alt="Arrow"
                            className="w-[20px] h-[20px]"
                        />
                    </motion.div>

                    {/* Contact Button (Hidden by Default, Visible on Hover) */}
                    <motion.div
                        className="absolute top-0 -right-16 w-[160px] h-[45px] bg-[#AD1AAF] rounded-l-full flex items-center justify-between opacity-0 transform translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out"
                        onClick={() => router.push('/contact-us')}
                    >
                        <div
                            className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-[#FFC6EB]"
                        >
                            <img
                                src="/con_arr.svg"
                                alt="Arrow"
                                className="w-[20px] h-[20px]"
                            />
                        </div>
                        <span className="w-28 text-md text-center font-roboto font-medium text-white">
                            Contact us
                        </span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;