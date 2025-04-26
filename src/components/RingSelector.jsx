'use client';

import { useState } from 'react';
import Image from 'next/image';

const caratScaleMap = {
  '1': 0.5,
  '1.5': 0.55,
  '2': 0.6,
  '2.5': 0.65,
  '3': 0.7,
  '3.5': 0.75,
  '4': 0.85,
  '4.5': 0.9,
  '5': 1,
};

const caratOptions = Object.keys(caratScaleMap);

const RingSelector = () => {
  const [selectedCarat, setSelectedCarat] = useState('1');

  const handleCaratChange = (carat) => {
    setSelectedCarat(carat);
  };

  return (
    <div className="flex flex-col items-center relative">
      <div className="relative w-full xl:max-w-md h-[400px] md:h-[500px]">
        <Image
          src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1686528/build/_assets/hand-with-setting-23F6JYZ6.png"
          alt="Hand"
          fill
          className="object-cover rounded-md"
        />
        <div
          className="absolute top-1/2 left-1/2 w-[50px] h-[50px] md:w-[60px] md:h-[60px] pointer-events-none transition-transform duration-300 ease-in-out"
          style={{
            transform: `translate(-50%, -50%) scale(${caratScaleMap[selectedCarat]})`,
            transformOrigin: 'center',
          }}
        >
          <Image
            src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1697404/build/_assets/RoundShapeStoneSolo-MHTOVVUU.png"
            alt={`Ring ${selectedCarat}ct`}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-[10%] xl:bottom-[10%] flex xl:space-x-1 md:space-x-1 space-x-2 border border-gray-300 p-1 rounded-full bg-black/50">
        {caratOptions.map((carat) => (
          <button
            key={carat}
            onClick={() => handleCaratChange(carat)}
            className={`xl:px-2 md:px-2 px-2 py-2 text-xs md:text-sm transition-all duration-200 ${selectedCarat === carat
                ? 'bg-white text-black rounded-full'
                : 'text-white'
              }`}
          >
            {carat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RingSelector;
