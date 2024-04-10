import Image from "next/image";
import React from "react";
import styles from "./leftSide.module.css";

const LeftSide = ({ title, img, desc }) => {
  return (
    <div
      className="md:flex md:justify-between md:items-center md:flex-row md:gap-3 md:p-0 md:border-none md:shadow-none md:m-0 xs:border xs:border-secondary xs:p-5 xs:m-3 xs:mt-0 xs:h-48 xs:shadow-md "
      dir="rtl"
      style={{ minHeight: "50px" }}
    >
      {/* img */}
      <Image
        src={img}
        className="xs:w-10 md:w-16"
        width={66.67}
        height={66.67}
      />

      {/* line */}
      <div
        className={`md:block md:h-32 md:w-1 bg-secondary xs:hidden  ${styles.line}`}
      ></div>

      {/* text Container */}
      <div className="md:flex md:flex-col md:gap-1 md:mt-3 ">
        {/* title */}
        <h6 className={`text-start text-lightBlue   w-fit  ${styles.title}`}>
          {title}
        </h6>
        {/* desc */}
        <p
          className={` text-mainText text-justify ${styles.text}`}
          style={{ fontSize: 16, fontWeight: 400 }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
