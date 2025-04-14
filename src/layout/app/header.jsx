"use client";
import React, { useState } from "react";
import { IoClose, IoReorderThree } from "react-icons/io5";
import { useRouter } from "next/navigation";

function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const route = [
    { id: 1, label: "INVENTORY", path: "#" },
    { id: 2, label: "HOME", path: "/" },
    { id: 3, label: "GET IN TOUCH", path: "#" },
    { id: 4, label: "MY ACCOUNT", path: "#" },
    // { id: 5, label: "Pendants", path: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4 font-montserrat">
      <div className="lg:hidden flex justify-between items-center ">
        <IoReorderThree
          className="lg:hidden cursor-pointer"
          size={25}
          onClick={() => setOpen(!open)}
        />
        <div className="flex justify-center items-center">
        <div
          className="font-medium text-3xl xl:text-3xl uppercase text-center cursor-pointer"
          style={{ fontFamily: 'var(--font-montserrat)' }}
          onClick={() => router.push("/")}
        >
          Diamond Forest
        </div>
        </div>
        <div className="hidden lg:block text-center mt-2 space-x-24" >
          {route.map((item) => (
            <button
              key={item.id}
              onClick={() => router.push(item.path)}
              className="text-black hover:text-gray-500 text-xl"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="hidden lg:block max-w-7xl mx-auto">
        <IoReorderThree
          className="lg:hidden cursor-pointer"
          size={25}
          onClick={() => setOpen(!open)}
        />
        <div
          className="font-medium text-md xl:text-4xl uppercase text-center cursor-pointer"
          style={{ fontFamily: 'var(--font-montserrat)' }}
          onClick={() => router.push("/")}
        >
          Diamond Forest
        </div>
        <div className="hidden lg:block text-center mt-2 space-x-24" >
          {route.map((item) => (
            <button
              key={item.id}
              onClick={() => router.push(item.path)}
              className="text-black hover:text-gray-500 text-xl"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      {open && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white shadow-md p-4">
          <IoClose
            className="text-[#332421] cursor-pointer float-right"
            size={25}
            onClick={() => setOpen(false)}
          />
          <div className="mt-8">
            {route.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  router.push(item.path);
                  setOpen(false); 
                }}
                className="block w-full p-4 text-left text-gray-700 hover:text-black"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
