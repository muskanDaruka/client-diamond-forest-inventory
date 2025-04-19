"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hide, setHide] = useState(false);
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/account')
    };

    const handleForgotPassword = () => {
        router.push("/forgot-password-email")
    }

    return (
        <div>
            <div className='bg-[#e6e5db] pt-32 min-h-screen grid content-center' style={{ fontFamily: 'var(--font-montserrat)' }}>
            <div className="flex flex-col md:flex-row items-center">
          <div className="py-4 w-full md:w-1/2 text-center">
            <div className="xl:text-2xl md:text-xl text-lg mb-6 font-medium">Not registered yet?</div>
            <Link
              href="/sign-up"
              className="btn btn-primary rounded-md m-3 bg-[#323232] text-white px-6 py-2 xl:text-md md:text-base text-sm hover:bg-black"
            >
              SignUp
            </Link>
          </div>
          <div className="hidden md:flex h-48 border-l border-[#333333] mx-4"></div>
          <div className="py-5 w-full md:w-1/2">
            <div className="xl:text-2xl md:text-xl text-lg text-center mb-3 font-medium">Already a member?</div>
                <div className='flex justify-center mt-8'>
                    <form className="w-[90%] max-w-md p-6 space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold mb-2">
                                EMAIL:
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your Email"
                                className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#323232]"
                            />
                        </div>
                        <div className='relative'>
                            <label htmlFor="password" className="block text-sm font-semibold mb-2">
                                PASSWORD
                            </label>
                            <input
                                type={!hide ? "password" : "text"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#323232]"
                                placeholder="Enter Password"
                            />
                            <div
                                className="absolute inset-y-0 right-3 pt-6 flex items-center text-gray-500 cursor-pointer"
                                onClick={() => setHide(!hide)}
                            >
                                {hide ? <FaRegEye /> : <FaRegEyeSlash />}
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="savePassword"
                            className="h-4 w-4 text-blue-600"
                        />
                        <label htmlFor="savePassword" className="ml-2 text-[#333333] xl:text-md md:text-base text-sm">
                            Save password
                        </label>
                    </div>
                    <button
                        type="button"
                        onClick={handleForgotPassword}
                        className="text-[#333333] xl:text-md md:text-base text-sm"
                    >
                        Forgot Password?
                    </button>
                </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-[#323232] hover:bg-black text-white px-8 py-2 rounded-md font-medium transition duration-300"
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default SignIn