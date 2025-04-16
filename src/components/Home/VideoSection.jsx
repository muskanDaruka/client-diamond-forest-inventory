"use client";
import React,{useState} from 'react';
import { useRouter } from 'next/navigation';

const VideoSection = () => {
  const [open, setOpen] = useState(false);
    const router = useRouter();

  const videoSection = [
    { type: 'video', media: '/images/Home/Bracelets.mp4', description: 'Elevate your everyday', path:"/bracelet" },
    { type: 'video', media: '/images/Home/Earrings.mp4', description: 'Style simplified' },
    { type: 'video', media: '/images/Home/Necklace.mp4', description: 'Enhance everyday' },
    { type: 'video', media: '/images/Home/Rings.mp4', description: 'Where style meets function' },
  ];

  return (
    <div
      className="w-full h-screen xl:h-screen overflow-y-scroll snap-y snap-mandatory"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {videoSection.map((item, index) => (
        <div
          key={index}
          className="w-full h-[65vh] xl:h-screen overflow-hidden relative snap-start"
        >
          <video
            src={item.media}
            muted
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover opacity-80"
            onClick={() => {
              router.push(item.path);
              setOpen(false); 
            }}
          />
          <div className="absolute bottom-4 sm:bottom-6 w-full flex justify-center px-4">
            <p
              className="text-3xl md:text-4xl xl:text-6xl text-black text-center font-medium "
              style={{
                fontFamily: 'Burgues Script, Edwardian Script ITC, cursive',
              }}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoSection;
