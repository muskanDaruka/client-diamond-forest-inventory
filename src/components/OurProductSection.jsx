"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ring from "../../public/products/ring.png";
import bracelet from "../../public/products/bracelet.png";
import earring from "../../public/products/earrings.png";
import necklace from "../../public/products/necklace.jpg";
import pendant from "../../public/products/pendant.png";
import background from '../../public/images/Home/background.png'

function OurProduct() {

  const categoryImages = [
    { img: earring, alt: "EARRING" },
    { img: ring, alt: "RING" },
    { img: bracelet, alt: "BRACELET" },
    { img: pendant, alt: "PENDANT" },
    { img: necklace, alt: "NECKLACE" },
  ];

  return (
    <div className="w-full px-4 font-montserrat relative pt-4 pb-4">
      <Image
        src={background}
        alt="background Image"
        layout="fill"
        objectFit="cover"
        className=""
        priority
      />
      <h2 className="relative xl:text-5xl text-xl text-black font-medium mb-6 text-center mt-4 italic text-start ml-8"
      style={{ fontFamily: '"Georgia Pro", "Georgia", "Constantia", "Palatino Linotype", "Book Antiqua", "Times New Roman", "serif"' }}
      >
        Our Products
      </h2>
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
            <h1 className="relative text-center xl:text-xl mt-3 font-bold text-[#323232]">
              {item.alt}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProduct