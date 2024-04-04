import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 p-16">
      <div className="lg:col-span-3 flex  flex-col  i justify-around">
        <h5 className="text-title text-lg font-semibold">من نحن</h5>
        <p className="text-sm font-normal ">
          بدأت رحلتنا في «ذكاء لتقنية المعلومات» باتجاه التطور والاكتشاف. لنقود
          الأفكار نحو التطور وتوليد الفرص ونساهم في وضع حلول ابتكارية للتعامل مع
          التحديات في مجال التقنية ونكون أصحاب الريادة لتطوير الخدمات عبر تقديم
          عددٍ من الخدمات المبتكرة والحلول التقنية المتكاملة لصناعة التحول
          الرقمي في أداء القطاعين العام والخاص وللمساهمة في رفع مستوى الخدمات
          بإستخدام تقنية المعلومات
        </p>
        <button className="text-primary border p-2 rounded  w-28 hover:bg-primary hover:text-white transition duration-300">
          معرفة المزيد
        </button>
      </div>
      <div className="lg:col-span-3">
        <Image
          src="/about.jpeg"
          alt="Image"
          className="w-full"
          width={594}
          height={413.6}
        />
      </div>
    </div>
  );
};

export default About;
