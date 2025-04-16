'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import background from '../../../public/images/Home/background.png';
import { FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { SlGlobe } from 'react-icons/sl';

const ContactPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ firstName, lastName, email, message });
    };

    return (
        <div className="relative min-h-screen xl:p-0 md:p-2 p-2">
            <div className="absolute inset-0 z-0">
                <Image
                    src={background}
                    alt="background"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
            <div className="relative z-10 xl:pt-48 md:pt-24 pt-14 px-6 xl:px-20" style={{fontFamily:'var(--font-montserrat)'}}>
                <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 xl:gap-10 shadow-xl xl:p-8 md:p-6 p-4">
                    <div className="xl:p-6 md:p-4 p-2">
                        <h1 className="text-black text-2xl xl:text-4xl font-bold mb-6 hover:text-[#777678]">
                            Fill the form
                        </h1>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-[#111c4f] font-medium mb-1">
                                        First Name:
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        placeholder="Enter your First Name"
                                        className="w-full bg-white px-4 py-2 shadow focus:outline-none text-gray-700"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-[#111c4f] font-medium mb-1">
                                        Last Name:
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        placeholder="Enter your Last Name"
                                        className="w-full bg-white px-4 py-2 shadow focus:outline-none text-gray-700"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-[#111c4f] font-medium mb-1">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your Email"
                                    className="w-full bg-white px-4 py-2 shadow focus:outline-none text-gray-700"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-[#111c4f] font-medium mb-1">
                                    Message:
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Write your message..."
                                    className="w-full bg-white px-4 py-2 shadow focus:outline-none text-gray-700"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-[#323232] hover:bg-black transition text-white px-8 py-2 rounded-full font-medium"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="space-y-6 text-black p-6">
                        <h2 className="text-2xl xl:text-4xl font-bold hover:text-[#777678]">
                            GET IN TOUCH WITH US
                        </h2>
                        <p className="text-base xl:text-xl hover:text-[#777678]">
                            Whether you have questions about our services, need support, or want to share your
                            feedback, our dedicated team is here to assist you every step of the way.
                        </p>

                        <div className="grid xl:grid-cols-2 xl:gap-6 md:gap-4 gap-2">
                            {[
                                {
                                    Icon: FaPhone,
                                    title: 'Phone',
                                    content: '+123-456-7890',
                                },
                                {
                                    Icon: FaPhone,
                                    title: 'Phone',
                                    content: '+123-456-7890',
                                },
                                {
                                    Icon: IoMdMail,
                                    title: 'E-Mail',
                                    content: 'diamondatelierusa@gmail.com',
                                },
                                {
                                    Icon: SlGlobe,
                                    title: 'Website',
                                    content: 'www.diamondatelier.com',
                                },
                                {
                                    Icon: FaLocationDot,
                                    title: 'Address',
                                    content: '38 West 48th Street, 5th Floor, New York, NY 10036',
                                    full: true,
                                },
                            ].map(({ Icon, title, content, full }, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start gap-3 ${full ? 'md:col-span-2' : ''}`}
                                >
                                    <Icon className="text-white bg-[#323232] p-2 rounded-full size-9" />
                                    <div>
                                        <h4 className="font-bold text-sm xl:text-base hover:text-[#777678]">
                                            {title}
                                        </h4>
                                        <p className="text-sm xl:text-base hover:text-[#777678]">{content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
