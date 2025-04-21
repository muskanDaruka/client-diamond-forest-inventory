"use client";
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Link from 'next/link';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [mobile, setMobile] = useState('');
    const [hide, setHide] = useState(false);
    const [passHide, setPassHide] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div className="bg-[#e6e5db] pt-32 min-h-screen" style={{ fontFamily: 'var(--font-montserrat)' }}>
                <h1 className="text-3xl xl:text-6xl font-semibold text-center hover:text-[#323232] p-4" style={{ fontFamily: 'Poppins Medium' }}>
                    Create New Account
                </h1>
                <div className="flex justify-center mt-8">
                    <form className="w-[90%] max-w-2xl p-6 space-y-6" onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6'>
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#323232]"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#323232]"
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6'>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                                    Mobile Number
                                </label>
                                <input
                                    type="phone"
                                    id="mobile"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#323232]"
                                />
                            </div>
                            <div>
                                <label htmlFor="country" className="block text-sm font-semibold mb-2">
                                    Country<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="country"
                                    placeholder="Country"
                                    className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#323232]"
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-semibold mb-2">
                                Password:
                            </label>
                            <input
                                type={!hide ? "password" : "text"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#323232]"
                            />
                            <div
                                className="absolute right-3 top-10 text-gray-500 cursor-pointer"
                                onClick={() => setHide(!hide)}
                            >
                                {hide ? <FaRegEye /> : <FaRegEyeSlash />}
                            </div>
                        </div>
                        <div className='relative'>
                            <label htmlFor="email" className="block text-sm font-semibold mb-2">
                                Confirm Password
                            </label>
                            <input
                                type={!passHide ? "password" : "text"}
                                id="confirmPassword"
                                value={confirmPass}
                                className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#323232]"
                                placeholder="Confirm Password"
                                onChange={(e) => setConfirmPass(e.target.value)}
                            />
                            <div
                                className="absolute right-3 top-10 text-gray-500 cursor-pointer"
                                onClick={() => setPassHide(!passHide)}
                            >
                                {passHide ? <FaRegEye /> : <FaRegEyeSlash />}
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-[#323232] hover:bg-black text-white px-8 py-2 rounded-md font-medium transition duration-300"
                            >
                                Sign Up
                            </button>
                        </div>
                        <div className='flex items-center justify-center'>
                            <Link href="/kyc">
                                <span className="xl:text-xl md:text-md text-sm mb-3 font-normal underline">Complete KYC</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default SignUp