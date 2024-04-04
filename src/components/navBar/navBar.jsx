import { color } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaEarthAmericas } from "react-icons/fa6";
const NavBar = () => {
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
  return (
    <div className="flex justify-around items-center border-b border-b-secondary relative text-base">
      <Image src="/logo.png" width={104} height={56} alt="logo" />
      <div className="flex justify-between gap-4 items-center text-mainText ">
        {menu.map((ele) => (
          <div className="relative">
            <p
              style={{
                color: ele.id === 1 ? "var(--primary)" : "var(--mainText)",
              }}
            >
              {ele.name}
            </p>

            <span
              style={{
                background: ele.id === 1 ? "var(--primary)" : null,
              }}
              className="absolute top-9 right-0 w-12 h-1"
            ></span>
          </div>
        ))}
      </div>

      <button className="flex  justify-around items-center gap-2  border border-b-secondary border-1 p-2 rounded">
        EN
        <FaEarthAmericas />
      </button>
    </div>
  );
};

export default NavBar;
