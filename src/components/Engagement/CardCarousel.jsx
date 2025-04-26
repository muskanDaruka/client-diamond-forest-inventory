'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useRef } from 'react';

const images = [
  { id: 4, src: '/images/ring/ring3.jpg' },
  { id: 1, src: '/images/ring/ring6.jpg' },
  { id: 2, src: '/images/ring/ring5.jpg' },
  { id: 3, src: '/images/ring/ring1.jpg' },
];

const ImageCarousel = ({ className = '' }) => {
  const swiperRef = useRef(null);

  return (
    <div className={`relative w-full max-w-xl flex flex-col ${className}`}>
      <div className="relative w-full flex items-center justify-center">
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop
          grabCursor
          touchEventsTarget="container"
          className="w-full overflow-hidden rounded-md"
        >
          {images.map((image) => (
            <SwiperSlide
              key={image.id}
              className="flex justify-center items-center"
            >
              <Image
                src={image.src}
                alt={`Slide ${image.id}`}
                width={500}
                height={500}
                className="w-[500px] h-[500px] object-cover rounded-md shadow-md transition-transform duration-500 ease-out hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={(e) => {
            e.stopPropagation();
            swiperRef.current?.swiper?.slidePrev();
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-gray-500 bg-white w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:bg-[#332421] hover:text-white transition-colors duration-200"
        >
          ❮
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            swiperRef.current?.swiper?.slideNext();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-gray-500 bg-white w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:bg-[#332421] hover:text-white transition-colors duration-200"
        >
          ❯
        </button>
      </div>
      <div className="mt-4">
        <div className="swiper-pagination !relative"></div>
      </div>
    </div>
  );
};

export default ImageCarousel;
