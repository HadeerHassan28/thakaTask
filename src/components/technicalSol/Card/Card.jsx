import Image from "next/image";
import React from "react";
import styles from "./card.module.css";

const Card = ({ title, img, dec }) => {
  return (
    <div
      className={`flex  xs:gap-1  rounded shadow-md  bg-white xs:p-7  md:p-10 md:gap-9  md:relative  md:w-full ${styles.container} `}
      dir="rtl"
    >
      {/* Img and title */}
      <div
        className={`flex md:flex-row md:gap-2 items-center justify-center md:h-20 md:transition-opacity md:duration-300 md:opacity-100 md:hover:opacity-0   ${styles.imgTextContainer} `}
        style={{ height: "100%" }}
      >
        {/* img */}
        <Image
          src={img}
          alt="Image"
          className=" md:w-32 xs:w-10 xs:text-center"
          width={45}
          height={45}
        />
        {/* title */}
        <h5
          className=" text-mainText font-semibold md:text-start flex items-center xs:text-center"
          style={{ fontSize: 14, fontWeight: 600 }}
        >
          {title}
        </h5>
      </div>
      {/* desc in meduim screen */}
      <div className={`xs:hidden  ${styles.text} `}>
        <p className={`text-mainText text-sm font-normal   `}>{dec}</p>
      </div>
    </div>
  );
};

export default Card;
