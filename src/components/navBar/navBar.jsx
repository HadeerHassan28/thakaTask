import Image from "next/image";
import React from "react";
import { FaEarthAmericas } from "react-icons/fa6";
const NavBar = () => {
  return (
    <div className="flex  justify-around items-center border border-b-secondary       relative text-base">
      <Image src="/logo.png" width={104} height={56} />
      <div className="flex justify-between gap-4 items-center text-mainText ">
        <p className="text-primary relative ">
          الرئيسية
          <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
        </p>
        <p>من نحن</p>
        <p>أعمالنا</p>
        <p>خدماتنا</p>
        <p>تواصل معنا</p>
        <p>وظائف</p>
        <p>مدونة</p>
      </div>

      <button className="flex  justify-around items-center gap-2  border border-b-secondary border-1 p-2 rounded">
        EN
        <FaEarthAmericas />
      </button>
    </div>
  );
};

export default NavBar;
