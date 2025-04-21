"use client";
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import profile from '../../../public/images/login/profile.png'
import Image from 'next/image';

function Profile({ customClass }) {
    return (
        <div className={`flex justify-between items-center w-full z-10 px-6`} style={{ fontFamily: 'var(--font-montserrat)' }}>
            <div className='flex items-center w-1/2 md:w-auto'>
                <div className='absolute ms-2 z-10  bg-[#323232] rounded-full shadow-md cursor-pointer'>
                    <FaSearch className="text-white cursor-pointer m-1" size={12} />
                </div>
                <input
                    placeholder="Type"
                    type="text"
                    className="relative focus:outline-none w-full shadow-md rounded-full cursor-pointer text-center bg-white border border-[#323232] placeholder:text-gray-500 text-md placeholder:text-md text-[#323232] px-3 py-1"
                />
            </div>
            <div className='flex justify-between items-center bg-transparent p-1 m-3 px-2 cursor-pointer'>
                <Image src={profile} className='rounded-full w-10' alt='profile' />
                <div>
                    <p className={`text-sm font-normal text-[#323232] ${customClass}`}>Donna Stroupe</p>
                    {/* <p className={`text-xs font-normal ${customClass}`}>Alley Jewellery</p> */}
                </div>
            </div>
        </div>
    )
}

export default Profile