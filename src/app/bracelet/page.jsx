"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import Cards from "@/components/Engagement/Cards";
import Filters from "@/components/Engagement/Filters";
// import protrait from "../../../public/images/engagement/portrait.png";
// import protraitPic from "../../../public/images/engagement/portrait-pic.png";
import HorizontalList from "@/components/HorizontalList";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { MdOutlineSort } from "react-icons/md";

function Page() {
    const { back } = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [inStock, setInStock] = useState(false);
    const list = [
        "TIMELESS | EVERYDAYWEAR",
        "EXOTIC | OCCASSIONAL",
        "HIGH JEWELRY"
    ]
    return (
        <>
            <div className="pt-24 bg-[#373941]" style={{ fontFamily: 'var(--font-montserrat)' }}>
                <div className="xl:pt-8 pt-4 xl:px-8 px-4 cursor-pointer">
                    <button
                        onClick={() => back()}
                        className="m-2 text-xl border-0 flex items-center font-serif text-white"
                    >
                        <FaArrowLeft size={22} />
                    </button>
                </div>
                <div className="xl:pt-8 pt-4">
                    <HorizontalList data={list} />
                </div>
                <div className="relative flex justify-center items-center mt-4 cursor-pointer hidden lg:block m-8 ">

                    <div className="flex justify-between items-center gap-4">
                        <h2 className="text-white text-3xl xl:mt-4 mt-4">BRACELETS</h2>
                        <div className="flex justify-end items-center gap-4">
                            <div className="flex items-center gap-3 xl:mt-4 mt-4 px-4 py-2 rounded-md">
                                <select className="bg-white text-black border-none outline-none xl:text-2xl text-md font-medium px-2 py-1 rounded-md">
                                    <option value="" disabled>
                                        Sort By
                                    </option>
                                    <option value="Best Sellers">Best Sellers</option>
                                    <option value="Newest">Newest</option>
                                    <option value="Price: Low to High">Price: Low to High</option>
                                    <option value="Price: High to Low">Price: High to Low</option>
                                </select>
                            </div>

                            <div className="flex items-center xl:mt-4 mt-4 gap-2">
                                <input
                                    type="checkbox"
                                    id="inStock"
                                    checked={inStock}
                                    onChange={() => setInStock(!inStock)}
                                    className="cursor-pointer rounded-full w-5 h-5"
                                />
                                <label htmlFor="inStock" className="xl:text-2xl text-white hover:text-[#666769] text-md font-medium cursor-pointer">
                                    InStock
                                </label>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 p-1" onClick={() => setIsOpen(!isOpen)}>
                                    <h3 className="xl:text-2xl text-md font-medium text-white hover:text-[#666769] xl:mt-4 mt-4">
                                        Filter
                                    </h3>
                                    <TbAdjustmentsHorizontal size={25} className="text-white hover:text-[#666769] xl:mt-4 mt-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`transition-all duration-300 w-full bg-white shadow-lg overflow-hidden ${isOpen ? "max-h-[500px] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                            }`}
                    >
                        <div className="w-full flex justify-end items-center p-2">
                            <RxCross2
                                onClick={() => setIsOpen(false)}
                                size={25}
                                className="text-black me-2 cursor-pointer hover:text-[#666769]"
                            />
                        </div>
                        <Filters />
                    </div>
                </div>
                <div className='flex justify-between items-center ml-2 mb-0 cursor-pointer lg:hidden'>
                    <div className="flex items-center gap-3 p-1" onClick={() => setIsOpen(true)}>
                        <h3 className="xl:text-2xl text-md font-medium text-white hover:text-[#666769]">Filter</h3>
                        <TbAdjustmentsHorizontal size={25} className="text-white hover:text-[#666769]" />
                    </div>
                    <div>
                        <section className={`${isOpen ? "block" : "hidden"} xl:w-1/4 p-2 w-full top-0 left-0 z-50 bg-white h-screen fixed cursor-pointer overflow-y-auto`}>
                            <div className='w-full h-10 rounded-md flex justify-end items-center '>
                                <RxCross2 onClick={() => setIsOpen(false)} size={25} className='text-black me-2' />
                            </div>
                            <Filters />
                        </section>
                    </div>
                    <div className="flex items-center gap-1 ml-2">
                        <input
                            type="checkbox"
                            id="inStock"
                            checked={inStock}
                            onChange={() => setInStock(!inStock)}
                            className="cursor-pointer"
                        />
                        <label htmlFor="inStock" className="text-white font-medium cursor-pointer">InStock</label>
                    </div>
                    <div className="flex items-center gap-3 mt-0 px-4 py-2 rounded-md">

                        <select className="bg-white text-black border-none outline-none text-sm font-medium px-2 py-0 rounded-md">
                            <option value="" disabled>
                                Sort By
                            </option>
                            <option value="Best Sellers">Best Sellers</option>
                            <option value="Newest">Newest</option>
                            <option value="Price: Low to High">Price: Low to High</option>
                            <option value="Price: High to Low">Price: High to Low</option>
                        </select>

                    </div>
                </div>
                <div className="w-full relative">
                    <Cards />
                </div>
            </div>
        </>
    );
}

export default Page;
