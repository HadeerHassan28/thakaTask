"use client";
import { servicesData } from "@/data/Services";
import React, { useRef } from "react";
import LeftSide from "./leftSide/LeftSide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../Arrows/NextArrow";
import PreArrow from "../Arrows/PreArrow";
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
          // arrows: true,
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
      <div className="md:col-span-3 md:flex  md:flex-col   md:justify-around ">
        {/* title */}
        <h5 className="text-title text-lg font-semibold xs:text-center md:text-start ">
          خدماتنا
        </h5>

        {/* subTitle */}
        <p className="text-sm font-normal text-mainText   text-justify xs:p-5 xs:pb-0 ">
          نساعد عملائنا على تبسيط أعمالهم من خلال مجموعة الحلول والخدمات
          والتطبيقات التي تساعد على تسهيل سير وتكامل الأعمال بالإضافة إلى الدعم
          التقني والمتابعة المستمرة.
        </p>

        {/* buttin */}
        <button className="md:block md:text-white md:border md:p-2 md:rounded  md:w-28 md:shadow-md md:bg-primary xs:hidden">
          معرفة المزيد
        </button>
      </div>

      {/* leftside */}
      <div className="md:col-span-3  ">
        <Slider {...settings}>
          {servicesData.map((ele) => (
            <LeftSide
              key={ele.id}
              title={ele.title}
              img={ele.img}
              desc={ele.desc}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
