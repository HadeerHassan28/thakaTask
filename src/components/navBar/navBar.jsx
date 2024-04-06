"use client";
import { color } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
const NavBar = () => {
  const [isOpen, setisOpen] = useState(false);
  const menu = [
    {
      id: 1,
      name: "الرئيسية",
    },
    {
      id: 2,
      name: "من نحن",
    },
    {
      id: 3,
      name: "أعمالنا",
    },
    {
      id: 4,
      name: "خدماتنا",
    },
    {
      id: 5,
      name: "تواصل معنا",
    },
    {
      id: 6,
      name: "وظائف",
    },
    {
      id: 7,
      name: "مدونة",
    },
  ];

  const toggleNav = () => {
    setisOpen(true);
  };
  return (
    <div className="  flex justify-around items-center border-b border-b-secondary relative text-base md:text-lg lg:text-xl">
      {/* Menu button in small screen */}
      <button className="color md:hidden" onClick={() => toggleNav()}>
        <AiOutlineMenu style={{ color: "var(--primary)", fontSize: "20px" }} />
      </button>

      {/* logo */}
      <Image src="/logo.png" width={104} height={56} alt="logo" />

      {/* muduin screen */}
      <div className="xs:hidden md:flex md:items-between md:justify-center md:flex-row">
        {menu.map((ele) => (
          <div className="relative pr-4 " key={ele.id}>
            <p
              style={{
                color: ele.id === 1 ? "var(--primary)" : "var(--mainText)",
                fontSize: "16px",
                fontWeight: "400",
              }}
              className=""
            >
              {ele.name}
            </p>

            {/* for meduim screen */}
            <span
              style={{
                background: ele.id === 1 ? "var(--primary)" : null,
              }}
              className="md:absolute  top-9 right-3  w-16  h-1"
            ></span>
          </div>
        ))}
      </div>
      {/* Side bar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } xs:fixed top-0 right-0 h-full bg-white w-1/2 z-50 shadow-lg transition-transform duration-300    `}
      >
        <div className="xs:p-6 xs:flex xs:justify-between xs:flex-col">
          {menu.map((ele) => (
            <div className="relative p-4 " key={ele.id}>
              <p
                style={{
                  color: ele.id === 1 ? "var(--primary)" : "var(--mainText)",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
                className=""
              >
                {ele.name}
              </p>

              {/* spearte line in small screen */}
              <div
                style={{
                  background: "var( --secondary)",
                }}
                className="xs:absolute  top-14  w-full  h-1 md:hidden"
              ></div>
            </div>
          ))}
          {/* tranlsate button in small screen */}
          <div className="xs:flex justify-start items-center mt-3 relative">
            <button className="md:hidden xs:border-none absolute  right-24  top-4">
              English
            </button>
          </div>
        </div>
      </div>

      {/* translate button in meduin screen */}
      <button
        className="xs:hidden md:flex  justify-around items-center gap-2  border border-b-secondary border-1 p-2 rounded text-secondary"
        style={{ fontSize: "16px", fontWeight: "400" }}
      >
        EN
        <FaEarthAmericas />
      </button>
    </div>
  );
};

export default NavBar;
