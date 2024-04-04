import React from "react";
import Card from "./Card/Card";

const TechnicalSol = () => {
  const data = [
    {
      id: 1,
      img: "/code-laptop.png",
      title: "حلول تطوير البرمجيات",
      dec: "نسعى إلى حلول الويب المبتكرة لتصميم المواقع الإلكترونية بشكل فعال ومتجاوب مع جميع الأجهزة.",
    },
    {
      id: 2,
      img: "/collect-laptop.png",
      title: "التحليل ودراسة تجربة المستخدم",
      dec: "تصميم واجهة المستخدم وتجربة المستخدم وإنشاء النماذج الأولية للتحقق من صحة الأفكار ونقل المنتجات الرقمية إلى السوق بثقة.",
    },
    {
      id: 3,
      img: "/laptop-cloud.png",
      title: "الإستضافة السحابية",
      dec: "تقدم شركة ذكاء الدولية بتقديم خدمات تأجير السيرفرات الخاصة بمواصفات عالية تلبي جميع احتياجات المؤسسات.",
    },
    {
      id: 4,
      img: "/laptop-shield.png",
      title: "حلول الحماية",
      dec: "تمتع بحماية قوية ضد الاختراقات والمخترقين الذين يحاولون تعطيل أعمالك مع حلول ذكاء للأمن السيبراني.",
    },
  ];
  return (
    <div className="p-16 bg-bgFooter flex flex-col justify-around gap-5">
      <h5 className="text-title text-lg font-semibold">حلول تقنية</h5>
      <p className="text-sm font-normal text-mainText ">
        يمكننا مساعدتك في تخطيط وتصميم وتطوير أي نوع من المنتجات الرقمية.
      </p>
      <div className="flex  flex-row gap-6 ">
        {data.map((ele) => (
          <Card title={ele.title} img={ele.img} dec={ele.dec} />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSol;
