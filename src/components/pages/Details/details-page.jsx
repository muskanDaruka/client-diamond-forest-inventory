"use client";
// import { EmblaOptionsType } from "embla-carousel";
import React, { useState } from "react";
import img1 from "../../../../public/images/bracelet/bracelet.png";
// import img2 from "@/../public/images/engagement/ring12.jpg";
// import img3 from "@/../public/images/categories/ring.jpg";
// import ProductDetailSlider from "./ProductDetailSlider";
import round from '@/../public/images/DiamondShapes/Round.png';
import asscher from '@/../public/images/DiamondShapes/Asscher.png';
import radiant from '@/../public/images/DiamondShapes/Radiant.png';
import pear from '@/../public/images/DiamondShapes/Pear.png';
import oval from '@/../public/images/DiamondShapes/Oval.png';
import cushionS from '@/../public/images/DiamondShapes/cushion Square.png';
import emerald from '@/../public/images/DiamondShapes/Emerald.png';
import princess from '@/../public/images/DiamondShapes/Princess.png';
import marquise from '@/../public/images/DiamondShapes/Marquise.png';
import heart from '@/../public/images/DiamondShapes/Heart.png';
import cushionL from '@/../public/images/DiamondShapes/cushion Long.png';
import radiantSq from '@/../public/images/DiamondShapes/Radiant Square.png';
// import SizeSelectors from "./SizeSelectors";
// import Selector from "./Selector";
import Image from "next/image";
import MetalType from "./MetalType";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Selector from "./Selector";
import yellow from '../../../../public/images/filter/yellow-gold.png'
import rose from '../../../../public/images/filter/rose-gold.png'
import white from '../../../../public/images/filter/white-gold.png'
import RingSelector from "@/components/RingSelector";
import ImageCarousel from "@/components/Engagement/CardCarousel";

// const OPTIONS = {};

const ProductDetail = () => {
  const { back } = useRouter();
  const [isZoomed, setIsZoomed] = useState(false);
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);
  const [isZoomed3, setIsZoomed3] = useState(false);
  const [selectedShape, setSelectedShape] = useState([""]);
  const [selectedCarat, setSelectedCarat] = useState([""]);
  const [selectedQuality, setSelectedQuality] = useState([""]);

  const sliderImages = [
    // { id: 1, img: img1 },
    // { id: 2, img: img1 },
    // { id: 3, img: img1 },
  ];

  const metalTypes = [
    { id: 1, img: white, text: "14K", title: "White gold" },
    { id: 2, img: yellow, text: "14K", title: "Yellow gold" },
    { id: 3, img: rose, text: "14K", title: "Rose gold" },
  ];

  const shapes = [
    { id: "round", img: round, alt: "Round" },
    { id: "asscher", img: asscher, alt: "Asscher" },
    { id: "cushionS", img: cushionS, alt: "Cushion Square" },
    { id: "radiant", img: radiant, alt: "Radiant" },
    { id: "marquise", img: marquise, alt: "Marquise" },
    { id: "oval", img: oval, alt: "Oval" },
    { id: "pear", img: pear, alt: "Pear" },
    { id: "emerald", img: emerald, alt: "Emerald" },
    { id: "cushionL", img: cushionL, alt: "cushionL" },
    { id: "heart", img: heart, alt: "heart" },
    { id: "princess", img: princess, alt: "princess" },
    { id: "radiantSq", img: radiantSq, alt: "radiantSq" },
  ];
  const caratWeights = ["2 ½", "3", "3 ½", "4", "4 ½", "5", "5 ½", "6", "6 ½", "7", "7 ½", "8"];
  const diamondQuality = ["Best - D, VVS", "Better - E, VS1", "Good - FG, VS2"];

  const colors = [
    { value: "DEF", title: "DEF" },
    { value: "GHI", title: "GHI" },
    { value: "JKL", title: "JKL" },
    { value: "MNO", title: "MNO" },
  ];

  const toggleShape = (shapeId) => {
    setSelectedShape(shapeId);
  };

  const toggleCarat = (caratId) => {
    setSelectedCarat(caratId);
  };

  const toggleQuality = (qualityId) => {
    setSelectedQuality(qualityId);
  };

  return (
    <div className="bg-[#373941]">
      <div className="xl:pt-32 pt-24 xl:px-8 px-4 cursor-pointer">
        <button
          onClick={() => back()}
          className="m-2 text-xl border-0 flex items-center font-serif text-white"
        >
          <FaArrowLeft size={22} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:gap-8 gap-2 xl:px-6 md:px-4 px-2 pb-6 cursor-pointer">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 ">
          <div
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
          >
            <Image
              src="/images/ring/ring4.jpg"
              alt="Product Image"
              width={500}
              height={500}
              className={`object-cover w-full h-[500px] rounded-md transition-transform duration-300 ${isZoomed ? "scale-105" : "scale-100"
                }`}
              style={{ transformOrigin: "center center" }}
            />
          </div>
          <ImageCarousel className="w-full h-[500px] object-cover rounded-md" />
          <div
            onMouseEnter={() => setIsZoomed1(true)}
            onMouseLeave={() => setIsZoomed1(false)}
          >
            <Image
              src="/images/ring/hand4.jpg"
              alt="Product Image"
              width={500}
              height={500}
              className={`object-cover w-full h-[500px] rounded-md transition-transform duration-300 ${isZoomed1 ? "scale-105" : "scale-100"
                }`}
              style={{ transformOrigin: "center center" }}
            />
          </div>
          <video
            src="/images/bracelet/video2.mp4"
            muted
            autoPlay
            loop
            playsInline
            className="w-full h-[500px] object-fill rounded-md"
          />
          <video
            src="/images/bracelet/video.mp4"
            muted
            autoPlay
            loop
            playsInline
            className="w-full h-[500px] object-cover rounded-md"
          />
          <RingSelector />
          <div
            onMouseEnter={() => setIsZoomed2(true)}
            onMouseLeave={() => setIsZoomed2(false)}
          >
            <Image
              src="/images/ring/hand2.jpg"
              alt="Product Image"
              width={500}
              height={500}
              className={`object-cover w-full h-[500px] rounded-md transition-transform duration-300 ${isZoomed2 ? "scale-105" : "scale-100"
                }`}
              style={{ transformOrigin: "center center" }}
            />
          </div>
          <div
            onMouseEnter={() => setIsZoomed3(true)}
            onMouseLeave={() => setIsZoomed3(false)}
          >
            <Image
              src="/images/ring/hand3.jpg"
              alt="Product Image"
              width={500}
              height={500}
              className={`object-cover w-full h-[500px] rounded-md transition-transform duration-300 ${isZoomed3 ? "scale-105" : "scale-100"
                }`}
              style={{ transformOrigin: "center center" }}
            />
          </div>
        </div>
        <div className="space-y-4 p-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
          <h1 className="xl:text-2xl md:text-base text-xl font-semibold text-white hover:text-[#666769]">
            Emerald East - West Ring
          </h1>
          <p className="text-sm text-white hover:text-[#666769]">
            14K White Gold, FG, VS2+ | IGI Certified, 14 Emerald stone
          </p>
          <div className="flex">
            <h2 className="xl:text-xl md:text-base text-lg font-semibold text-white hover:text-[#666769]">$2,350.00</h2>
            <span className="text-white md:text-base xl:text-xl text-lg line-through ml-2 hover:text-[#666769] cursor-pointer">$4000</span>
          </div>
          <div className="flex items-center gap-5">
            <button className="bg-[#666769] xl:text-lg md:text-base text-md font-medium px-6 py-2 rounded-md shadow-md text-white hover:bg-gray-500 transition">
              Add to Cart
            </button>
            <button className="bg-[#666769] xl:text-lg md:text-base text-md font-medium px-6 py-2 rounded-md shadow-md text-white hover:bg-gray-500 transition">
              Buy Now
            </button>
          </div>
          <div className="">
            <h1 className="font-bold mb-1 text-white hover:text-[#666769]">Metal Type:</h1>
            <div className="flex gap-4">
              <MetalType metalType={metalTypes} />
            </div>
          </div>
          <div className="">
            <h1 className="font-bold mb-1 text-white hover:text-[#666769]">Shape:</h1>
            <div className="flex flex-wrap gap-2">
              {shapes.map((shape) => (
                <label key={shape.id} className="relative flex flex-col items-center w-16 text-center">
                  <input
                    type="radio"
                    className="hidden"
                    checked={selectedShape === shape.id}
                    onChange={() => toggleShape(shape.id)}
                  />
                  <div
                    className={`xl:w-14 xl:h-14 w-8 h-8 rounded-full bg-white p-0 flex items-center justify-center transition ${selectedShape === shape.id
                      ? "border border-white rounded-md"
                      : "border"
                      }`}
                  >
                    <Image
                      src={shape.img.src}
                      alt={shape.alt}
                      width={200}
                      height={400}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs mt-1 text-white break-words leading-tight max-w-[3.5rem] hover:text-[#666769]">
                    {shape.alt}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="w-full">
            <h1 className="font-bold mb-1 text-white hover:text-[#666769]">Color:</h1>
            <Selector options={colors} customClass="" />
          </div>
          <div className="">
            <h1 className="font-bold mb-1 text-white hover:text-[#666769]">Carat Weight:</h1>
            <div className="flex gap-2">
              {caratWeights.map((caratId) => (
                <label key={caratId} className="relative">
                  <input
                    type="radio"
                    className="hidden"
                    checked={selectedCarat === caratId}
                    onChange={() => toggleCarat(caratId)}
                  />
                  <div className={`xl:px-3 md:px-2 px-1 py-1 rounded-md transition text-white ${selectedCarat === caratId ? "border " : "border-white"
                    }`}>
                    {caratId}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h1 className="font-bold mb-1 text-white hover:text-[#666769]">Diamond Quality:</h1>
            <div className="grid grid-cols-3 gap-2">
              {diamondQuality.map((qualityId) => (
                <label key={qualityId} className="relative">
                  <input
                    type="radio"
                    className="hidden"
                    checked={selectedQuality === qualityId}
                    onChange={() => toggleQuality(qualityId)}
                  />
                  <div className={`px-3 py-1 border rounded-md transition  ${selectedQuality === qualityId ? "border bg-gray-300 text-black" : "border-white text-white"
                    }`}>
                    {qualityId}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h1 className="font-bold mb-1 text-white hover:text-[#666769]">Ring Size</h1>
            <select className="w-full p-2 border rounded-md text-white">
              <option className="text-black hover:text-[#666769]">Select</option>
              {["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8"].map((size) => (
                <option key={size} className="text-black">{size}</option>
              ))}
            </select>
            <button className="mt-2 text-sm text-blue-600 underline hover:text-[#666769]">Size Guide</button>
          </div>
          <div className="mt-6">
            <h1 className="font-bold mb-1 text-white hover:text-[#666769]">+ Add Engraving</h1>
            <input type="text" placeholder="Type your message" className="w-full p-2 border rounded-md text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
