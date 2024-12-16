'use client';
import React, { useState } from 'react';
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ParnterSection = () => {

    return (
        <div className='w-full bg-[#550DF9] bg-opacity-[15%] backdrop-blur-4xl'>
            <div className='w-[90%] md:w-[65%] m-auto '>
                <Marquee>
                    <div className='w-full h-full relative'>
                        <img src='/partner_shade.svg' className='absolute -top-[480%] left-0 right-0' />
                    </div>
                    <div className="flex justify-center items-center gap-10 md:gap-24 mt-16 mx-8 md:mx-16 ">
                        <div className="flex-1 max-w-[160px]">
                            <Image
                                src="/group.svg"
                                alt="Tripadvisor Icon"
                                width={160}
                                height={30}
                                layout="intrinsic"
                            />
                        </div>
                        <div className="flex-1 max-w-[160px]">
                            <Image
                                src="/booking.svg"
                                alt="Booking Icon"
                                width={160}
                                height={30}
                                layout="intrinsic"
                            />
                        </div>
                        <div className="flex-1 max-w-[160px]">
                            <Image
                                src="/group9235.svg"
                                alt="Airbnb Icon"
                                width={160}
                                height={30}
                                layout="intrinsic"
                            />
                        </div>
                        <div className="flex-1 max-w-[160px]">
                            <Image
                                src="/group3.svg"
                                alt="Britz Icon"
                                width={160}
                                height={30}
                                layout="intrinsic"
                            />
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    )
};

export default ParnterSection;