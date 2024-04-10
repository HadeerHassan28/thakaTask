"use client";
import { techData } from "@/data/TechnicalSol";
import React, { useRef, useState } from "react";
import Card from "./Card/Card";
import NextArrow from "@/components/Arrows/NextArrow";
import PreArrow from "@/components/Arrows/PreArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const TechnicalSol = () => {
  const sliderRef = useRef(null);
  const [isTechSol] = useState(true);
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    ref: sliderRef,
    arrows: false,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          nextArrow: <NextArrow sliderRef={sliderRef} />,
          prevArrow: <PreArrow sliderRef={sliderRef} isTechSol={isTechSol} />,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          nextArrow: <NextArrow sliderRef={sliderRef} />,
          prevArrow: <PreArrow sliderRef={sliderRef} isTechSol={isTechSol} />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <div className="xs:bg-white xs:p-5 xs:mb-20 md:p-24 md:bg-bgFooter md:flex md:flex-col md:justify-around md:gap-3 md:mb-0 ">
      <h5 className="text-title font-semibold xs:text-center xs:mb-6 md:text-lg md:text-start">
        حلول تقنية
      </h5>
      <p className="text-start text-sm font-normal text-mainText md:mb-5 ">
        يمكننا مساعدتك في تخطيط وتصميم وتطوير أي نوع من المنتجات الرقمية.
      </p>

      {/* cards */}
      {/* <div className="flex  md:gap-4   md:flex-row  xs:flex-col "> */}
      <Slider {...settings}>
        {techData.map((ele) => (
          <Card title={ele.title} img={ele.img} dec={ele.dec} key={ele.id} />
        ))}
      </Slider>
      {/* </div> */}
    </div>
  );
};

export default TechnicalSol;
