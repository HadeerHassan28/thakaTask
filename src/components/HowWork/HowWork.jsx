"use client";
import { howWorkData } from "@/data/HowWork";
import React from "react";
import Card from "./Card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
import SmallScreen from "./SmallScreen/SmallScreen";
const HowWork = () => {
  const settings = {
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 5000,
    accessibility: false,
    arrows: false,
    verticalSwiping: true,
    vertical: true,
    cssEase: "ease-in",

    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const firstElement = howWorkData.find((ele, index) => index === 0);

  return (
    <div
      className="xs:p-4 md:p-24  bg-centre bg-cover"
      style={{ backgroundImage: 'url("/howWorkBg.png")' }}
    >
      <h5
        className="text-title text-lg font-semibold xs:text-center  md:text-start"
        style={{ fontSize: 18, fontWeight: 700 }}
      >
        كيف نعمل
      </h5>

      {/* sldier */}
      <div className="md:flex md:justify-between md:items-center xs:hidden">
        <Slider {...settings}>
          {howWorkData.map((ele) => (
            <Card
              key={ele.id}
              title={ele.title}
              img={ele.img}
              desc={ele.desc}
              index={ele.id}
              animationType={ele.animationType}
            />
          ))}
        </Slider>

        {/* Button */}
        <button className="rounded-full border-4 border-white border-opacity-50 p-3">
          <AiOutlineArrowLeft
            style={{
              color: "#ffffff",
              fontSize: "26px",
            }}
          />
        </button>
      </div>
      {/* small screen  */}
      {firstElement && (
        <SmallScreen
          img={firstElement.img}
          title={firstElement.title}
          desc={firstElement.desc}
        />
      )}
    </div>
  );
};

export default HowWork;
