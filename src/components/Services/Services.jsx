import React from "react";
import LeftSide from "./leftSide/LeftSide";

const Services = () => {
  const data = [
    {
      id: 1,
      title: "حلول تقنية متكاملة",
      desc: "ننشئ ونطور الحلول التقنية للشركات والمؤسسات في المراحل المختلفة بداية من الإنشاء حتى الانطلاق بالإضافة للدعم التقني والمتابعة المستمرة",
      img: "/services1.png",
    },
    {
      id: 2,
      title: "تسويق وتطوير الأعمال",
      desc: "نوفر لك كافة وسائل التسويق الالكتروني ونعملُ لك عليها، لتسويق أعمالك مُنتجاتك ونشر هويتك لأكبر قدر ممكن من العملاء المحتملين.",
      img: "/services2.svg",
    },
    {
      id: 3,
      title: "الدراسات والاستشارات",
      desc: "تواصل مع طاقمنا الاستشاري للحصول على خدمات استشارية في المجالات التقنية والإدارية تدعم نمو أعمالك.",
      img: "/services3.svg",
    },
    {
      id: 4,
      title: "تدريب وتأهيل",
      desc: "نهدف في ذكاء الدولية إلى تطوير أداء المؤسسات ورفع مهارة الأفراد من خلال إعداد البرامج التدريبية التي توفر الأدوات اللازمة لزيادة الخبرات والمهارات .",
      img: "/services4.svg",
    },
  ];
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
        {data.map((ele) => (
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
