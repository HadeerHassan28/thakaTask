"use client";
import Image from "next/image";
import React from "react";
import styles from "./leftSide.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const LeftSide = ({ title, img, desc }) => {
  const settings = {
    // speed: 3000,
    autoplaySpeed: 5000,
    accessibility: false,
    arrows: false,
    vertical: true,
    verticalSwiping: true,

    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          autoplay: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          autoplay: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          autoplay: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          autoplay: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div
        className="md:flex md:justify-between md:items-center md:flex-row md:gap-3 "
        dir="rtl"
      >
        {/* img */}
        <Image src={img} className="" width={66.67} height={66.67} />

        {/* line */}
        <div className="md:h-full md:w-5">
          <div className=" md:bg-secondary"></div>
        </div>

        {/* text Container */}
        <div className="md:flex md:flex-col md:gap-3">
          {/* title */}
          <h6 className={`text-start text-lightBlue   w-fit ${styles.title}`}>
            {title}
          </h6>
          {/* desc */}
          <p
            className={`text-start text-mainText md:text-justify ${styles.text}`}
            style={{ fontSize: 16, fontWeight: 400 }}
          >
            {desc}
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default LeftSide;
