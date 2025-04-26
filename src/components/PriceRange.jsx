"use client";
import { useEffect, useState } from "react";

export default function PriceRangeSlider() {
  const [minVal, setMinVal] = useState(100);
  const [maxVal, setMaxVal] = useState(900);

  const min = 0;
  const max = 1000;
  const minGap = 10;

  const getLeft = () => ((minVal - min) / (max - min)) * 100;
  const getWidth = () => ((maxVal - minVal) / (max - min)) * 100;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxVal - minGap);
    setMinVal(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minVal + minGap);
    setMaxVal(value);
  };

  return (
    <div className="w-full px-4 py-6">
      <div className="relative h-2 bg-gray-300 rounded">
        {/* Track between min and max */}
        <div
          className="absolute h-2 bg-black rounded pointer-events-none"
          style={{
            left: `${getLeft()}%`,
            width: `${getWidth()}%`,
          }}
        />
        {/* Min range input */}
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={handleMinChange}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-auto
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border
            [&::-webkit-slider-thumb]:border-black
            [&::-webkit-slider-thumb]:cursor-pointer"
        />
        {/* Max range input */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={handleMaxChange}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-auto
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border
            [&::-webkit-slider-thumb]:border-black
            [&::-webkit-slider-thumb]:cursor-pointer"
        />
      </div>

      <div className="flex justify-between mt-4 text-sm">
        <span>Min: ${minVal}</span>
        <span>Max: ${maxVal}</span>
      </div>
    </div>
  );
}
