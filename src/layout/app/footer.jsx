"use client";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#323232] text-white px-6 py-10 lg:px-20 lg:py-14" 
            style={{ fontFamily: 'var(--font-montserrat)' }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <p className="text-2xl lg:text-3xl font-semibold italic font-montserrat leading-relaxed"
                        style={{ fontFamily: 'Georgia Pro, serif' }}
                    >
                        Contact us for inquiries and partnerships.
                    </p>
                </div>
                <div className="space-y-5">
                    <div>
                        <h4 className="text-2xl font-semibold font-montserrat">Address</h4>
                        <p className="text-md font-montserrat">123 Anywhere St, Any City, ST 12345</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold font-montserrat">Phone</h4>
                        <p className="text-md font-montserrat">(123) 456-7890</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold font-montserrat">Email</h4>
                        <p className="text-md font-montserrat">hello@reallygreatsite.com</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold font-montserrat">Socials</h4>
                        <div className="flex gap-4 mt-2">
                            <FaFacebook className="hover:text-gray-300 transition-colors duration-200" size={24} />
                            <FaInstagram className="hover:text-gray-300 transition-colors duration-200" size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
