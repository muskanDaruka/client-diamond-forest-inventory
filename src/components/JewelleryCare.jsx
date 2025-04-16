import React from 'react';
import Image from 'next/image';
import background from '../../public/images/Home/jewelry-bg.png';
import { motion } from "framer-motion";
import img1 from '../../public/images/Home/img1.png';
import img2 from '../../public/images/Home/img2.png';
import img3 from '../../public/images/Home/img3.png';
import img4 from '../../public/images/Home/img4.png';
import drop from '../../public/images/Home/drop.png';
import moon from '../../public/images/Home/moon.png';
import bottle from '../../public/images/Home/bottle.png';
import treasure from '../../public/images/Home/treasure.png';
import tub from '../../public/images/Home/tub.png';
import heart from '../../public/images/Home/heart.png';

const JewelleryCare = () => {
    
    return (
        <div className="relative xl:h-auto min-h-screen bg-[#373941]">
            <div className="">
                <Image
                    src={background}
                    alt="Background"
                    layout="fill"
                    // objectFit="fill"
                    priority
                    className='xl:object-fill md:object-fill object-contain'
                />
            </div>
            <div className="relative text-center py-12 px-4 md:px-12">
    <motion.h2
        className="text-white italic text-2xl md:text-4xl xl:text-5xl"
        style={{ fontFamily: 'Majesty, cursive' }}
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
    >
        Jewelry Care
    </motion.h2>
    <motion.p
        className="text-white mt-4 text-base md:text-xl xl:text-2xl"
        style={{ fontFamily: 'var(--font-montserrat)' }}
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
    >
        How should you take care of your jewelry
    </motion.p>
</div>

            {/*<div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-6 pb-16">
                <div className="flex justify-center items-center">
                    <Image src={img1} alt="Jewelry" className="object-contain h-auto max-h-60" />
                </div>
                <div className="flex flex-col items-center text-center">
                    <Image src={drop} alt="Moisture Icon" className="w-12 h-12 mb-2" />
                    <p className="text-white text-sm md:text-base">Keep away from moisture</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Image src={moon} alt="Sleep Icon" className="w-12 h-12 mb-2" />
                    <p className="text-white text-sm md:text-base">Remove when sleeping</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Image src={bottle} alt="Perfume Icon" className="w-12 h-12 mb-2" />
                    <p className="text-white text-sm md:text-base px-2 leading-snug">
                        Allow perfumes or lotion to dry before wearing
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <Image src={img2} alt="Jewelry" className="object-contain h-auto max-h-60" />
                </div>
                <div className="flex justify-center items-center">
                    <Image src={img3} alt="Jewelry" className="object-contain h-auto max-h-60" />
                </div>
                <div className="flex flex-col items-center text-center">
                    <Image src={treasure} alt="Storage Icon" className="w-12 h-12 mb-2" />
                    <p className="text-white text-sm md:text-base">Store in a closed bag or box</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Image src={tub} alt="Water Icon" className="w-12 h-12 mb-2" />
                    <p className="text-white text-sm md:text-base">Remove before entering water</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Image src={heart} alt="Active Icon" className="w-12 h-12 mb-2" />
                    <p className="text-white text-sm md:text-base">Remove when active</p>
                </div>
                <div className="flex justify-center items-center">
                    <Image src={img4} alt="Jewelry" className="object-contain h-auto max-h-[400px]" />
                </div>
            </div> */}
        </div>
    );
};

export default JewelleryCare;
