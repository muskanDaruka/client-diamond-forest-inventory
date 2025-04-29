"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';

const ForgotPasswordEmail = () => {
    const [email, setEmail] = useState('')
    const {push, back} = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        push('/forgot-password-email/forgot-password')
    };

    return (
        <div>
            <div className='bg-[#e6e5db] pt-32 min-h-screen grid content-center cursor-pointer' style={{ fontFamily: 'var(--font-montserrat)' }}>
            <div className="pb-5 xl:px-8 px-4 cursor-pointer">
                        <button
                          onClick={() => back()}
                          className="m-2 text-xl border-0 flex items-center font-serif text-black"
                        >
                          <FaArrowLeft size={22} />
                        </button>
                      </div>
                <h1 className='text-3xl xl:text-6xl font-semibold text-center hover:text-[#323232] p-4' style={{ fontFamily: 'Poppins Medium' }}>Forget Password</h1>
                <p className='text-lg xl:text-2xl text-center font-medium hover:text-[#323232] p-'>New Password</p>
                <div className='flex justify-center mt-8'>
                    <form className="w-[90%] max-w-md p-6 space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold mb-2">
                                EMAIL
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your Email"
                                className="w-full px-4 py-2 text-sm md:text-base xl:text-xl font-medium border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#323232]"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-[#323232] hover:bg-black text-white px-8 py-2 rounded-md font-medium transition duration-300"
                            >
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordEmail