"use client";
import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./card.module.css";
const Card = ({ title, img, dec }) => {
  const settings = {
    infinite: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div
        className={`flex  gap-1   rounded shadow-md  bg-white xs:p-7  md:p-10   md:relative md:w-screen ${styles.container} `}
        dir="rtl"
      >
        {/* Img and title */}
        <div
          className={`flex flex-row gap-2 items-center  justify-center xs:h-20 md:h-20 md:transition-opacity md:duration-300 opacity-100 md:hover:opacity-0 ${styles.imgTextContainer} `}
          style={{ height: "100%" }}
        >
          {/* img */}
          <Image
            src={img}
            alt="Image"
            className=" w-32"
            width={45}
            height={45}
          />
          {/* title */}
          <h5
            className=" text-mainText font-semibold text-start flex items-center "
            style={{ fontSize: 14, fontWeight: 600 }}
          >
            {title}
          </h5>
        </div>
        {/* desc in meduim screen */}
        <div className={`xs:hidden md:flex       ${styles.text} `}>
          <p className={`text-mainText text-sm font-normal   `}>{dec}</p>
        </div>
      </div>
    </Slider>
  );
};

export default Card;
