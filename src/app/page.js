import VideoSection from "@/components/Home/VideoSection";
import React from "react";
import story from "../../public/story/About.png";
import Image from "next/image";
import OurProduct from "@/components/OurProductSection";
import background from "../../public/images/Home/background.png";

const Home = () => {
  return (
    <div className="flex flex-col">
      <VideoSection />
      <section className="h-screen">
        <div className="relative flex xl:flex-row flex-col justify-around items-center p-4 h-screen">
          <Image
            src={background}
            alt="background Image"
            layout="fill"
            objectFit="cover"
            className=""
            priority
          />
          <Image
            src={story}
            alt="Our Story"
            width={400}
            height={100}
            className="relative w-full h-auto max-w-xl md:max-w-md lg:max-w-lg xl:min-w-2xl object-contain rounded mx-auto"
          />
          <p className="relative text-xl xl:text-3xl font-medium italic font-montserrat leading-relaxed" style={{fontFamily:"Public Sans, sans"}}>What's special about your product, service, or company? Highlight the things that set you apart from your competition, whether it's a special feature a unique philosophy, or awards and recognition that you have received. Think of this as your elevator pitch to get the reader's attention.</p>
        </div>
        <video
          src='/images/Home/bracelet.mp4'
          muted
          autoPlay
          loop
          playsInline
          className="w-full h-[850px] object-cover"
        />
      </section>
      <section className="w-full">
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
