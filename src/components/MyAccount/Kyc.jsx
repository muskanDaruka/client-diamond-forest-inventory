"use client";
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Kyc = () => {
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/myaccount')
    };
    return (
        <div>
            <div className="bg-[#e6e5db] pt-24 min-h-screen grid content-center cursor-pointer">
                <form onSubmit={handleSubmit}>
                    <div className="p-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
                        <h1 className="font-medium text-4xl text-center mb-8" style={{ fontFamily: 'Poppins Medium' }}>KYC</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
                            <div>
                                <label htmlFor="ownerName" className="block mb-2 text-md font-bold">
                                    OWNER NAME<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="ownerName"
                                    placeholder="Enter Owner Name"
                                    className="w-full h-10 px-4 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="businessName" className="block mb-2 text-md font-bold">
                                    BUSINESS NAME<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="businessName"
                                    placeholder="Enter Business Name"
                                    className="w-full h-10 px-4 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="designation" className="block mb-2 text-md font-bold">
                                    DESIGNATION<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="designation"
                                    placeholder="Designation"
                                    className="w-full h-10 px-4 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                                />
                            </div>
                            <div className="flex flex-wrap gap-3 mt-2">
                                <div className="flex items-center">
                                    <input type="checkbox" id="individual" />
                                    <label htmlFor="individual" className="ml-2 font-bold text-md">GROWER</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="diamondManufacturer" />
                                    <label htmlFor="diamondManufacturer" className="ml-2 font-bold text-md">MANUFACTURER</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="jeweller" />
                                    <label htmlFor="jeweller" className="ml-2 font-bold text-md">JEWELLER</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="wholesaler" />
                                    <label htmlFor="wholesaler" className="ml-2 font-bold text-md">WHOLESALER</label>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="address1" className="block mb-2 text-md font-bold">
                                    ADDRESS LINE 1<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="address1"
                                    placeholder="Office No. / Street Name"
                                    className="w-full h-10 px-4 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="address2" className="block mb-2 text-md font-bold">ADDRESS LINE 2</label>
                                <input
                                    type="text"
                                    id="address2"
                                    placeholder="Apartment / Unit No."
                                    className="w-full h-10 px-4 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 mb-6">
                            <div>
                                <label htmlFor="country" className="block mb-2 text-md font-bold">
                                    COUNTRY<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="country"
                                    placeholder="Country"
                                    className="w-full h-10 px-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="zipCode" className="block mb-2 text-md font-bold">
                                    ZIP CODE<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="zipCode"
                                    placeholder="Zip Code"
                                    className="w-full h-10 px-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="block mb-2 text-md font-bold">
                                    CITY<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    placeholder="City"
                                    className="w-full h-10 px-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="state" className="block mb-2 text-md font-bold">
                                    STATE<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="state"
                                    placeholder="State"
                                    className="w-full h-10 px-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="mobile" className="block mb-2 text-md font-bold">
                                    MOBILE NO.<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    placeholder="Mobile Number"
                                    className="w-full h-10 px-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="whatsapp" className="block mb-2 text-md font-bold">
                                    WHATSAPP NO.<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="whatsapp"
                                    placeholder="Whatsapp Number"
                                    className="w-full h-10 px-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                            <div>
                                <label htmlFor="companyEMailId" className="block mb-2 text-md font-bold">COMPANY EMAIL ADDRESS</label>
                                <input
                                    type="email"
                                    id="companyEMailId"
                                    placeholder="Company's Email Id"
                                    className="w-full h-10 px-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="website" className="block mb-2 text-md font-bold">WEBSITE</label>
                                <input
                                    type="text"
                                    id="website"
                                    placeholder="Website URL"
                                    className="w-full h-10 px-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="tax" className="block mb-2 text-md font-bold">
                                    TAX ID/ GST/ INC. NO.<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="tax"
                                    placeholder="TAX ID / GST / INC"
                                    className="w-full h-10 px-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="businessType" className="block mb-2 text-md font-bold">
                                    BUSINESS TYPE<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="businessType"
                                    placeholder="Business Type"
                                    className="w-full h-10 px-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-8 py-2 bg-[#323232] text-xl text-white font-medium rounded-md hover:bg-black transition-colors duration-200"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Kyc