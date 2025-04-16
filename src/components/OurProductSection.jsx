"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ring from "../../public/images/products/ring.png";
import bracelet from "../../public/images/products/bracelet.png";
import earring from "../../public/images/products/earrings.png";
import necklace from "../../public/images/products/necklace.jpg";
import pendant from "../../public/images/products/pendant.png";
import background from '../../public/images/Home/background.png'

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

function OurProduct() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const categoryImages = [
    { img: earring, alt: "EARRING" },
    { img: ring, alt: "RING" },
    { img: bracelet, alt: "BRACELET" },
    { img: pendant, alt: "PENDANT" },
    { img: necklace, alt: "NECKLACE" },
  ];

  return (
    <div className="w-full px-4 font-montserrat relative pt-4 pb-4 min-h-screen grid place-items-center">
      <Image
        src={background}
        alt="background Image"
        layout="fill"
        objectFit="cover"
        className=""
        priority
      />
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        variants={fadeLeft}
        className="relative xl:text-5xl text-xl text-black font-medium mb-6 mt-4 italic text-start ml-8"
        style={{ fontFamily: '"Georgia Pro", "Georgia"' }}
      >
        Our Products
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
        {categoryImages.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative group w-32 h-32 xl:w-64 xl:h-64 overflow-hidden">
              <Link href={`/bracelet?category=${item.alt.toLowerCase()}`} passHref>
                <Image
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                  src={item.img}
                  alt={item.alt}
                />
              </Link>
            </div>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeIn}
              className="relative text-center xl:text-xl mt-3 font-bold text-[#323232]">
              {item.alt}
            </motion.h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProduct