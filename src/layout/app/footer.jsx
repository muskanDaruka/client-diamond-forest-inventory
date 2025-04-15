"use client";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import footer from '../../../public/images/Home/contact-footer.png'
import Image from "next/image";

function Footer() {
    return (
        <footer className="bg-[#323232] text-white cursor-pointer"
            style={{ fontFamily: 'var(--font-montserrat)' }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <p className="text-2xl lg:text-3xl font-semibold italic font-montserrat leading-relaxed hover:text-gray-400 px-6 py-10 xl:px-20 xl:py-14"
                        style={{ fontFamily: 'Georgia Pro, serif' }}
                    >
                        Contact us for inquiries and partnerships.
                    </p>
                    <Image
                        src={footer}
                        alt="footer"
                        width={400}
                        height={100}
                        className="relative w-full h-auto max-w-xl md:max-w-md lg:max-w-lg xl:min-w-2xl object-contain"
                    />
                </div>
                <div className="space-y-5 px-6 py-10 xl:px-20 xl:py-14">
                    <div>
                        <h4 className="text-2xl font-semibold font-montserrat hover:text-gray-400">Address</h4>
                        <p className="text-md font-montserrat hover:text-gray-400">123 Anywhere St, Any City, ST 12345</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold font-montserrat hover:text-gray-400">Phone</h4>
                        <p className="text-md font-montserrat hover:text-gray-400">(123) 456-7890</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold font-montserrat hover:text-gray-400">Email</h4>
                        <p className="text-md font-montserrat hover:text-gray-400">hello@reallygreatsite.com</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold font-montserrat hover:text-gray-400">Socials</h4>
                        <div className="flex gap-4 mt-2">
                            <FaFacebook className="hover:text-gray-300 transition-colors duration-200 hover:text-gray-400" size={24} />
                            <FaInstagram className="hover:text-gray-300 transition-colors duration-200 hover:text-gray-400" size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
