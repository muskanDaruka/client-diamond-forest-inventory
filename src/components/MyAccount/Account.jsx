import React from 'react'
import Profile from './Profile'
import { IoIosArrowDown } from "react-icons/io";

const Account = () => {

  const accountList = [
    { id: 1, title: "Orders", icon: <IoIosArrowDown size={25} /> },
    { id: 2, title: "Cart", icon: <IoIosArrowDown size={25} /> },
    { id: 3, title: "Account Information", icon: <IoIosArrowDown size={25} /> },
    { id: 4, title: "Wishlist", icon: <IoIosArrowDown size={25} /> },
    { id: 5, title: "Invoices and Payments", icon: <IoIosArrowDown size={25} /> },
    { id: 6, title: "Shipping and Returns", icon: <IoIosArrowDown size={25} /> },
    { id: 7, title: "Certifications and Documentation", icon: <IoIosArrowDown size={25} /> },
    { id: 8, title: "Notifications", icon: <IoIosArrowDown size={25} /> }
  ]
  return (
    <div>
      <div className='bg-[#e6e5db] pt-32 min-h-screen'>
        <Profile />
        <h1 className="text-2xl xl:text-4xl font-medium hover:text-[#323232] p-6" style={{ fontFamily: 'Poppins Medium' }}>Dashboard</h1>
        <div className='grid place-items-center'>
          <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center gap-2 w-full">
            {accountList.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-white rounded-md p-4 m-4 md:text-md text-sm xl:text-xl font-medium" style={{ fontFamily: 'var(--font-montserrat)' }}>
                {item.title}{item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account