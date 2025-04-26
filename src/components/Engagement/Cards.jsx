'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FcLike } from "react-icons/fc";
import round from '../../../public/images/DiamondShapes/Round.png';
import asscher from '../../../public/images/DiamondShapes/Asscher.png';
import radiant from '../../../public/images/DiamondShapes/Radiant.png';
import pear from '../../../public/images/DiamondShapes/Pear.png';
import oval from '../../../public/images/DiamondShapes/Oval.png';
import cushionS from '../../../public/images/DiamondShapes/cushion Square.png';
import emerald from '../../../public/images/DiamondShapes/Emerald.png';
import princess from '../../../public/images/DiamondShapes/Princess.png';
import marquise from '../../../public/images/DiamondShapes/Marquise.png';
import heart from '../../../public/images/DiamondShapes/Heart.png';
import cushionL from '../../../public/images/DiamondShapes/cushion Long.png';
import radiantSq from '../../../public/images/DiamondShapes/Radiant Square.png';
import Link from 'next/link';
import CardFilters from './CardFilters';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Image from 'next/image';
import { IoHeartOutline } from 'react-icons/io5';
import ImageCarousel from './CardCarousel';

const Cards = () => {
    const pathname = usePathname();

    // Track liked cards individually by ID
    const [likedCards, setLikedCards] = useState({});

    const toggleLike = (id) => {
        setLikedCards((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const cardList = Array.from({ length: 6 }, (_, index) => ({
        id: index + 1,
        title: 'Oval Petite Solitaire Engagement Ring',
    }));

    const metalType = [
        { id: 1, colorCode: "#deddde", text: "14K", title: "White gold" },
        { id: 2, colorCode: "#ffe998", text: "14K", title: "Yellow gold" },
        { id: 3, colorCode: "#ecc5c0", text: "14K", title: "Rose gold" },
    ];

    const shape = [
        { id: 1, img: round, alt: 'round' },
        { id: 2, img: asscher, alt: 'asscher' },
        { id: 3, img: radiant, alt: 'radiant' },
        { id: 4, img: pear, alt: 'pear' },
        { id: 5, img: oval, alt: 'oval' },
        { id: 6, img: cushionS, alt: 'cushion square' },
        { id: 7, img: emerald, alt: 'emerald' },
        { id: 8, img: princess, alt: 'princess' },
        { id: 9, img: marquise, alt: 'marquise' },
        { id: 10, img: heart, alt: 'heart' },
        { id: 11, img: cushionL, alt: 'cushion long' },
        { id: 12, img: radiantSq, alt: 'radiant square' },
    ];

    const carat = [
        { id: 1, text: "1" },
        { id: 2, text: "1.5" },
        { id: 3, text: "2" },
        { id: 4, text: "2.5" },
        { id: 5, text: "3" },
        { id: 6, text: "3.5" },
        { id: 7, text: "4" },
        { id: 8, text: "4.5" },
        { id: 9, text: "5" },
    ];

    const images = [
        { id: 1, src: "/images/ring/ring3.jpg", title: "Round Ring" },
        { id: 2, src: "/images/ring/ring6.jpg", title: "Round Ring" },
        { id: 3, src: "/images/ring/ring5.jpg", title: "Oval Ring" },
        { id: 4, src: "/images/ring/ring1.jpg", title: "Oval Ring" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5">
            {cardList.map((item) => (
                <div key={item.id} className="p-3 flex flex-col items-center w-full max-w-xs mx-auto">
                    <div className="w-full flex justify-center items-center">
                        <Link href={`${pathname}/${item.id}`} className="w-full h-full flex items-center justify-center">
                            <Image
                                src={images[item.id % images.length].src}
                                alt="engagement-ring"
                                width={300}
                                height={400}
                                className="w-full h-auto object-cover shadow-md cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110"
                            />
                        </Link>
                    </div>
                    <div className="w-full font-bold mt-4 text-sm md:text-md text-white hover:text-[#666769] cursor-pointer">
                        {images[item.id % images.length].title}
                    </div>

                    <CardFilters metalType={metalType} shape={shape} carat={carat} />

                    <div className='grid grid-cols-2 w-full'>
                        <div className="w-full mt-5">
                            <span className="font-semibold xl:text-lg md:text-md text-sm text-white hover:text-[#666769] cursor-pointer">$1,424</span>
                            <span className="text-white xl:text-sm text-xs line-through ml-2 hover:text-[#666769] cursor-pointer">$1,499</span>
                        </div>
                        <div className='flex items-center justify-center mt-5 gap-5'>
                            <div onClick={() => toggleLike(item.id)} className="cursor-pointer">
                                {likedCards[item.id] ? (
                                    <FcLike />
                                ) : (
                                    <IoHeartOutline className='text-white font-semibold' />
                                )}
                            </div>
                            <HiOutlineShoppingBag className='text-white' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
