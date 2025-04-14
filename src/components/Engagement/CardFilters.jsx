"use client";
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

function CardFilters({ metalType, shape, carat }) {
    const scrollRefs = {
        Metal: useRef(null),
        Shape: useRef(null),
        Carat: useRef(null),
    };

    const [scrollState, setScrollState] = useState({
        Metal: { left: false, right: true },
        Shape: { left: false, right: true },
        Carat: { left: false, right: true },
    });

    const [selected, setSelected] = useState({
        Metal: null,
        Shape: null,
        Carat: null,
    });

    const updateScrollButtons = (category) => {
        if (scrollRefs[category].current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRefs[category].current;
            setScrollState((prev) => ({
                ...prev,
                [category]: {
                    left: scrollLeft > 0,
                    right: scrollLeft < scrollWidth - clientWidth,
                },
            }));
        }
    };

    const scroll = (category, direction) => {
        if (scrollRefs[category].current) {
            const offset = 200;
            scrollRefs[category].current.scrollBy({
                left: direction === 'left' ? -offset : offset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="container space-y-3 md:space-y-5">
            <div className="flex flex-col space-y-3 md:space-y-5">
                {[{ title: 'Metal', items: metalType }, { title: 'Shape', items: shape }, { title: 'Carat', items: carat }].map(({ title, items }) => (
                    <div key={title} className="flex flex-row md:flex-row items-center md:items-start mt-2 cursor-pointer">
                        <h3 className="xl:text-lg text-xs text-white hover:text-[#666769]">{title}</h3>
                        <div className="flex justify-around items-center w-full">
                            <button
                                onClick={() => scroll(title, 'left')}
                                disabled={!scrollState[title]?.left}
                                className="text-white hover:text-[#666769] disabled:text-gray-300"
                            >
                                <SlArrowLeft size={20} className='xl:size-[20px] md:size-[18px] size-[15px]'/>
                            </button>
                            <div
                                ref={scrollRefs[title]}
                                onScroll={() => updateScrollButtons(title)}
                                className="flex overflow-x-auto flex-nowrap scrollbar-none scroll-smooth gap-2 xl:gap-3 justify-center"
                                style={{ width: '100%', maxWidth: '180px', scrollbarWidth: 'none', msOverflowStyle: 'none', height: 'none' }}
                            >
                                {items.map((item) => (
                                    <label key={item.id} className="flex flex-col justify-center items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name={title}
                                            value={item.id}
                                            checked={selected[title] === item.id}
                                            onChange={() => setSelected((prev) => ({ ...prev, [title]: item.id }))}
                                            className="hidden"
                                        />
                                        {title === 'Metal' && 'colorCode' in item ? (
                                            <div
                                                className={`group xl:h-6 xl:w-12 w-6 h-5 border ${selected[title] === item.id ? 'border border-white' : 'border-gray-300'
                                                    } flex items-center justify-center hover:border-[#666769]`}
                                                style={{ backgroundColor: item.colorCode }}
                                            >
                                                <span
                                                    className={`transition-opacity duration-200 text-xs text-black ${selected[title] === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                                        }`}
                                                >
                                                    {item.text}
                                                </span>
                                            </div>
                                        ) : title === 'Shape' && 'img' in item ? (
                                            <div className={`xl:w-10 md:w-8 w-6 flex items-center  justify-center ${selected[title] === item.id ? 'p-1  border border-white' : 'hover:border hover:border-white'}`}>
                                                <Image src={item.img} alt={item.alt || ''} className="xl:w-full bg-white rounded-full" />
                                            </div>
                                        ) : title === 'Carat' && 'text' in item ? (
                                            <div
                                                className={`xl:text-md md:text-base text-xs text-white flex items-center justify-center cursor-pointer px-4 ${selected[title] === item.id ? 'border border-white' : 'hover:border hover:border-white'}`}
                                            >
                                                {item.text}
                                            </div>
                                        ) : null}
                                    </label>
                                ))}
                            </div>
                            <button
                                onClick={() => scroll(title, 'right')}
                                disabled={!scrollState[title]?.right}
                                className="text-white hover:text-[#666769] disabled:text-gray-300"
                            >
                                <SlArrowRight size={20} className='xl:size-[20px] md:size-[18px] size-[15px]'/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardFilters;
