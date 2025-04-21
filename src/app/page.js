"use client";
import React from "react";
import { motion } from "framer-motion";
import VideoSection from "@/components/Home/VideoSection";
import story from '../../public/images/story/About.png';
import Image from "next/image";
import OurProduct from "@/components/OurProductSection";
import background from "../../public/images/Home/background.png";
import blog from '../../public/images/Home/blog-forest.png'
import backgroundForest from '../../public/images/Home/jewellery-icon.png'
import JewelleryCare from "@/components/JewelleryCare";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};
const Home = () => {
  return (
    <div className="flex flex-col">
      <VideoSection />
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={background}
            alt="background Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
          className="relative flex xl:flex-row flex-col xl:justify-around justify-center items-center p-4 h-screen"
        >
          <motion.div variants={fadeIn} viewport={false}>
            <Image
              src={story}
              alt="Our Story"
              width={400}
              height={100}
              className="relative w-full h-auto max-w-xl md:max-w-md lg:max-w-lg xl:min-w-2xl object-contain rounded mx-auto"
            />
          </motion.div>
          <motion.p
            variants={fadeIn}
            viewport={{ once: false }}
            className="relative text-xl xl:text-3xl font-medium italic font-montserrat leading-relaxed"
            style={{ fontFamily: "Public Sans, sans" }}
          >
            What&apos;s special about your product, service, or company? Highlight
            the things that set you apart from your competition, whether it&apos;s a
            special feature a unique philosophy, or awards and recognition that
            you have received. Think of this as your elevator pitch to get the
            reader&apos;s attention.
          </motion.p>
        </motion.div>
      </section>
      <section
        className="w-full"
      >
        <video
          src="/images/Home/bracelet.mp4"
          muted
          autoPlay
          loop
          playsInline
          className="w-full h-[850px] object-cover"
        />
      </section>
      <section>
        <OurProduct />
      </section>
      <section className="relative bg-[#e6e5db] min-h-screen xl:py-36 md:py-8 py-8 px-8">
        <div className="border border-gray-400 p-2">
          <div className="border border-gray-300 p-6">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                variants={fadeLeft}
                className="text-3xl md:text-3xl xl:text-4xl italic font-normal mb-8 text-[#323232]"
                style={{
                  fontFamily:
                    '"Georgia Pro", "Georgia", "Constantia", "Palatino Linotype", "Book Antiqua", "Times New Roman", "serif"',
                }}
              >
                Our Commitment to Quality, Trust & Partnership
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center ">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeIn} className="font-justify text-sm md:text-base xl:text-xl" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Our focus is on building strong relationships, offering reliable service, and ensuring that our jewelry meets the highest standards of beauty and quality.
              </motion.p>
              <Image
                src={blog}
                alt="Blog"
                className="object-contain rounded-md max-w-xs w-full h-auto"
              />
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeIn} className="font-justify text-sm md:text-base xl:text-xl" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Whether you are a retailer, wholesaler, or designer, we are here to provide the perfect diamond jewelry solutions tailored to your business needs.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <JewelleryCare />
      </section>
    </div>
  );
};

export default Home;
