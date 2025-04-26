// components/RotatingImage.tsx
"use client";

import { useState } from "react";

export default function RotatingImage() {
  const [rotation, setRotation] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, currentTarget } = e;
    const { left, width } = currentTarget.getBoundingClientRect();
    const x = clientX - left; // Mouse X position within the div
    const rotationDegree = ((x / width) - 0.5) * 360; // Map x position to rotation (-180deg to 180deg)
    setRotation(rotationDegree);
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-gray-100"
      onMouseMove={handleMouseMove}
    >
      <img
        src="/images/bracelet/ring10.jpg" // <-- put your image in public folder
        alt="Rotating"
        className="w-64 h-64 object-contain transition-transform duration-300"
        style={{ transform: `rotateY(${rotation}deg)` }}
      />
    </div>
  );
}
