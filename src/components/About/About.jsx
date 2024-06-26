"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./about.module.css";
import SmallScreen from "./SmallScreen/SmallScreen";
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="md:flex md:flex-row md:gap-6 md:p-24 xs:flex xs:flex-col xs:p-5 ">
      {/* text */}
      <div className=" md:flex  md:flex-col   md:justify-around  md:items-start md:gap-1">
        <h5
          className={` ${styles.textTitle} text-title font-semibold xs:text-center xs:mb-2 md:text-lg md:text-start`}
        >
          من نحن
        </h5>
        {/* small screen */}
        <SmallScreen />
        <p
          className={`text-justify  text-mainText  md:text-sm md:w-auto font-normal xs:w-fit xs:p-0   ${styles.text}`}
        >
          بدأت رحلتنا في «ذكاء لتقنية المعلومات» باتجاه التطور والاكتشاف. لنقود
          الأفكار نحو التطور وتوليد الفرص ونساهم في وضع حلول ابتكارية للتعامل مع
          التحديات في مجال التقنية ونكون أصحاب الريادة لتطوير الخدمات عبر تقديم
          عددٍ من الخدمات المبتكرة والحلول التقنية المتكاملة لصناعة التحول
          الرقمي في أداء القطاعين العام والخاص وللمساهمة في رفع مستوى الخدمات
          بإستخدام تقنية المعلومات
        </p>
        {/* button */}
        <div
          className={`xs:flex xs:justify-center md:flex md:justify-start ${styles.btn}`}
        >
          <button className="border p-2 rounded w-28 shadow-md md:text-primary md:bg-white   md:hover:bg-primary md:hover:text-white transition duration-300 xs:text-white xs:bg-primary xs:mt-2 flex justify-center">
            معرفة المزيد
          </button>
        </div>
      </div>
      {/* img */}

      <Image
        src="/about.jpeg"
        alt="Image"
        className={`rounded ${styles.imgContainer} md:w-1/2`}
        width={2100}
        height={427}
      />
    </div>
  );
};

export default About;
