import React, { useState } from "react";
import SignUpButton from "./SignUpButton";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    {
      name: "Home",
      url: "#",
    },
  ];
  return (
    <div className="bg-white fixed w-full top-0 z-50">
      <div className="h-[10vh] shadow flex items-center px-10">
        <a href="#" className="text-blue-500 text-xl font-semibold">
          ZERODHA
        </a>
        <ul className="hidden sm:flex ml-auto gap-10 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
          <SignUpButton />
        </ul>
        <CiMenuBurger
          className="text-xl ml-auto sm:hidden"
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && (
        <ul
          className={`sm:hidden flex flex-col items-center gap-3 p-5 absolute w-full bg-white`}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
          <SignUpButton width="100%" />
        </ul>
      )}
    </div>
  );
};

export default Navbar;
