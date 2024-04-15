import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./leftSide.module.css";

const LeftSide = ({ title, img, desc, index, currentSlide }) => {
  const [isVisible, setIsVisible] = useState(false);

  //   useEffect(() => {
  //   console.log("Current Slide:", currentSlide);
  //  console.log("Index:", index);
  //     setIsVisible(currentSlide + 1 === index);
  //   }, [currentSlide, index]);

  //    console.log("Is Visible:", isVisible);

  return (
    <div
      className={`md:flex md:justify-between md:items-center md:flex-row md:gap-3 md:p-0 md:border-none md:shadow-none md:m-0 md:h-auto xs:border xs:border-secondary xs:p-5 xs:m-3 xs:mt-0 xs:h-48 xs:shadow-md ${
        styles.container
      } ${isVisible ? "slick-current" : ""}`}
      dir="rtl"
      style={{ minHeight: "50px", animationDelay: `${index * 20}s` }}
    >
      {/* img */}
      {/* <div className={isVisible ? "img" : "img hidden"}> */}
      <Image
        src={img}
        className={`xs:w-10 md:w-16 ${styles.img}`}
        width={66.67}
        height={66.67}
      />
      {/* </div> */}

      {/* line */}
      <div
        className={`md:block md:h-32 md:w-1 bg-secondary xs:hidden  ${styles.line}`}
        style={{ animation: isVisible ? "slideLine 2s forwards" : "" }}
      ></div>

      {/* text Container */}
      <div
        className={`md:flex md:flex-col md:gap-1 md:mt-3 md:justify-between `}
      >
        {/* title */}
        <h6
          className={`text-start text-lightBlue   w-fit  ${styles.title}`}
          style={{
            animation: isVisible
              ? "slideTitle 3s linear infinite alternate"
              : "",
          }}
        >
          {title}
        </h6>
        {/* desc */}
        <p
          className={` text-mainText text-justify ${styles.text}  `}
          style={{
            fontSize: 16,
            fontWeight: 400,
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
