import { servicesData } from "@/data/Services";
import React from "react";
import LeftSide from "./leftSide/LeftSide";

const Services = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 p-24">
      <div className="lg:col-span-3 flex  flex-col   justify-around">
        <h5 className="text-title text-lg font-semibold">خدماتنا</h5>
        <p className="text-sm font-normal text-mainText   text-justify ">
          نساعد عملائنا على تبسيط أعمالهم من خلال مجموعة الحلول والخدمات
          والتطبيقات التي تساعد على تسهيل سير وتكامل الأعمال بالإضافة إلى الدعم
          التقني والمتابعة المستمرة.
        </p>
        <button className="text-white border p-2 rounded  w-28 shadow-md bg-primary">
          معرفة المزيد
        </button>
      </div>
      <div className="lg:col-span-3">
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
