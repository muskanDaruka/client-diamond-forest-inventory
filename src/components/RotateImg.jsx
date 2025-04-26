"use client";

import { useState, useRef } from "react";

export default function SpinningImage() {
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef();

  const handleMouseMove = (e) => {
    const { clientX, currentTarget } = e;
    const { left, width } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const rotationDegree = (x / width) * 360;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animationRef.current = requestAnimationFrame(() => {
      setRotation(rotationDegree);
    });
  };

  return (
    <div
      className="w-full h-auto flex items-center justify-center bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <img
        src="/images/bracelet/ring14.png"
        alt="Spinning"
        className=" object-cover transition-transform duration-300 ease-in-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </div>
  );
}
