"use client";
import { servicesData } from "@/data/Services";
import React, { useRef } from "react";
import LeftSide from "./leftSide/LeftSide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../Arrows/NextArrow";
import PreArrow from "../Arrows/PreArrow";
import RightSide from "./rightSide/rightSide";
const Services = () => {
  const sliderRef = useRef(null);

  const settings = {
    speed: 3000,
    autoplaySpeed: 5000,
    accessibility: false,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 4,
    ref: sliderRef,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          vertical: false,
          verticalSwiping: false,
          nextArrow: <NextArrow sliderRef={sliderRef} />,
          prevArrow: <PreArrow sliderRef={sliderRef} />,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          arrows: true,
          vertical: false,
          verticalSwiping: false,
          nextArrow: <NextArrow sliderRef={sliderRef} />,
          prevArrow: <PreArrow sliderRef={sliderRef} />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          autoplay: true,
          speed: 3000,
          arrows: false,
          vertical: true,
          verticalSwiping: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          autoplay: true,
          speed: 3000,
          arrows: false,
          vertical: true,
          verticalSwiping: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          autoplay: true,
          speed: 3000,
        },
      },
    ],
  };

  return (
    <div className="md:grid md:grid-cols-6  md:gap-4 md:p-24 xs:mt-5">
      {/* Right Side */}
      <RightSide />

      {/* leftside */}
      <div className="md:col-span-3  ">
        <Slider {...settings}>
          {servicesData.map((ele) => (
            <LeftSide
              key={ele.id}
              title={ele.title}
              img={ele.img}
              desc={ele.desc}
              index={ele.id}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
