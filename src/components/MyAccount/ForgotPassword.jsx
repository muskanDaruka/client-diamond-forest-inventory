"use client";
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const ForgotPassword = () => {
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [hide, setHide] = useState(false);
    const [passHide, setPassHide] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div className='bg-[#e6e5db] pt-32 min-h-screen grid content-center cursor-pointer' style={{ fontFamily: 'var(--font-montserrat)' }}>
                <h1 className='text-3xl xl:text-6xl font-semibold text-center hover:text-[#323232] p-4' style={{ fontFamily: 'Poppins Medium' }}>Forget Password</h1>
                <p className='text-lg xl:text-2xl text-center font-medium hover:text-[#323232] p-'>New Password</p>
                <div className='flex justify-center mt-8'>
                    <form className="w-[90%] max-w-md p-6 space-y-6" onSubmit={handleSubmit}>
                        <div className='relative'>
                            <label htmlFor="newPassword" className="block text-sm font-semibold mb-2">
                                New Password
                            </label>
                            <input
                                id="newPassword"
                                type={!hide ? "password" : "text"}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter new password"
                                className="w-full px-4 py-2 text-sm md:text-base xl:text-xl font-medium border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#323232]"
                            />
                            <div
                                className="absolute right-3 top-10 text-gray-500 cursor-pointer"
                                onClick={() => setHide(!hide)}
                            >
                                {hide ? <FaRegEye /> : <FaRegEyeSlash />}
                            </div>
                        </div>
                        <div className='relative'>
                            <label htmlFor="newPassword" className="block text-sm font-semibold mb-2">
                                Confirm Password
                            </label>
                            <input
                                type={!passHide ? "password" : "text"}
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Enter confirm password"
                                className="w-full px-4 py-2 text-sm md:text-base xl:text-xl font-medium border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#323232]"
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
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword