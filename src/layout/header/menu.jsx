import Link from "next/link";
import React from "react";
// import MenuList from "./menu-list";

function Menu({ route }) {

  return (
    <ul className="lg:flex flex-col xl:flex-row xl:text-black text-[#d9d1bc] justify-around xl:mt-0 mt-5 xl:text-xl w-full cursor-pointer relative">
      {route.map((item) => (
        <li key={item.id} className="group my-2 text-center m-2 p-2 xl:border-none border border-[#d9d1bc] rounded-md text-[#332421]">
          <Link href={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
