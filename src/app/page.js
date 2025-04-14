"use client";
import React from "react";
import { motion } from "framer-motion";
import VideoSection from "@/components/Home/VideoSection";
import story from '../../public/images/story/About.png';
import Image from "next/image";
import OurProduct from "@/components/OurProductSection";
import background from "../../public/images/Home/background.png";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
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
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative flex xl:flex-row flex-col xl:justify-around justify-center items-center p-4 h-screen"
        >
          <motion.div variants={fadeIn}>
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
    </div>
  );
};

export default Home;
