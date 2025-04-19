'use client';

import React, { useState } from 'react';

const PriceRangeSlider = () => {
    const maxRange = 10000;
    const priceGap = 500;

    const [minPrice, setMinPrice] = useState(2500);
    const [maxPrice, setMaxPrice] = useState(8500);

    const handleMinInput = (e) => {
        let value = parseInt(e.target.value);
        if (value < 0) {
            alert('Minimum price cannot be less than 0');
            value = 0;
        } else if (value > maxPrice - priceGap) {
            value = maxPrice - priceGap;
        }
        setMinPrice(value);
    };

    const handleMaxInput = (e) => {
        let value = parseInt(e.target.value);
        if (value > maxRange) {
            alert('Maximum price cannot be greater than 10000');
            value = 10000;
        } else if (value < minPrice + priceGap) {
            value = minPrice + priceGap;
        }
        setMaxPrice(value);
    };

    const handleMinRange = (e) => {
        let value = parseInt(e.target.value);
        if (maxPrice - value < priceGap) {
            value = maxPrice - priceGap;
        }
        setMinPrice(value);
    };

    const handleMaxRange = (e) => {
        let value = parseInt(e.target.value);
        if (value - minPrice < priceGap) {
            value = minPrice + priceGap;
        }
        setMaxPrice(value);
    };

    const left = `${(minPrice / maxRange) * 100}%`;
    const right = `${100 - (maxPrice / maxRange) * 100}%`;

    return (
        <div className="flex flex-col items-center justify-center bg-white">
            <div className=" transition-transform hover:scale-105">
                <div className="w-full">
                    <div className="flex flex-col md:flex-row justify-between mb-6 text-gray-700 text-lg">
                        <div className="items-center mb-4 md:mb-0">
                            <span className="">Min Price</span>
                            <input
                                type="number"
                                className="w-32 h-9 rounded-lg text-center bg-gray-200 focus:outline-none"
                                value={minPrice}
                                onChange={handleMinInput}
                            />
                        </div>
                        <div className=" items-center">
                            <span className="">Max Price</span>
                            <input
                                type="number"
                                className="w-32 h-9 rounded-lg text-center bg-gray-200 focus:outline-none"
                                value={maxPrice}
                                onChange={handleMaxInput}
                            />
                        </div>
                    </div>
                    <div className="relative h-[6px] bg-gray-300 rounded-md">
                        <div
                            className="absolute h-full bg-black rounded-md"
                            style={{ left, right }}
                        ></div>
                    </div>
                    <div className="relative mt-4">
                        <input
                            type="range"
                            className="absolute w-full h-[5px] appearance-none top-[-21px] pointer-events-auto"
                            min="0"
                            max={maxRange}
                            value={minPrice}
                            step="1"
                            onChange={handleMinRange}
                        />
                        <input
                            type="range"
                            className="absolute w-full h-[5px] appearance-none top-[-21px] pointer-events-auto"
                            min="0"
                            max={maxRange}
                            value={maxPrice}
                            step="1"
                            onChange={handleMaxRange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceRangeSlider;
