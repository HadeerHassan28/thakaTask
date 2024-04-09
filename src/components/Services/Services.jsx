import { servicesData } from "@/data/Services";
import React from "react";
import LeftSide from "./leftSide/LeftSide";

const Services = () => {
  return (
    <div className="md:grid md:grid-cols-6  md:gap-4 md:p-24 xs:mt-5">
      <div className="md:col-span-3 md:flex  md:flex-col   md:justify-around ">
        {/* title */}
        <h5 className="text-title text-lg font-semibold xs:text-center md:text-start ">
          خدماتنا
        </h5>

        {/* subTitle */}
        <p className="text-sm font-normal text-mainText   text-justify xs:p-5 ">
          نساعد عملائنا على تبسيط أعمالهم من خلال مجموعة الحلول والخدمات
          والتطبيقات التي تساعد على تسهيل سير وتكامل الأعمال بالإضافة إلى الدعم
          التقني والمتابعة المستمرة.
        </p>

        {/* buttin */}
        <button className="md:text-white md:border md:p-2 md:rounded  md:w-28 md:shadow-md md:bg-primary xs:hidden">
          معرفة المزيد
        </button>
      </div>

      {/* leftside */}
      <div className="md:col-span-3">
        {servicesData.map((ele) => (
          <LeftSide
            key={ele.id}
            title={ele.title}
            img={ele.img}
            desc={ele.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
