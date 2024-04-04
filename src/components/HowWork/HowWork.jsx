import React from "react";
import Card from "./Card/Card";

const HowWork = () => {
  const data = [
    {
      id: 1,
      title: "الحصول على المعلومات",
      desc: "نحن لا ننظر فقط إلى البيانات. نحن نبحث عن المعلومات. المعلومات التي تقود التحليل والرؤى ، والتي تمكننا من اكتساب فهم أفضل للأفراد والصناعة والأسواق ، وبالتالي تساعدنا على رسم طريق أفضل لتحقيق نتائج أفضل.",
      img: "/howWork1.png",
    },
    {
      id: 2,
      title: "التفكير في التصميم",
      desc: "يساعدنا العصف الذهني  في التفكير التصميمي على تحدي الافتراضات والتوصل إلى أفكار مبتكرة ومبدعة.",
      img: "/howWork2.png",
    },
    {
      id: 3,
      title: "الإبداع أولا",
      desc: "نضع حلول التحول الفكرة الإبداعية لدينا في مركز المحتوى الخاص بنا ، بغض النظر عن التنسيق أو الوسائط وهذا من أجل الحصول على أفكار إبداعية في البداية .",
      img: "/howWork3.png",
    },
    {
      id: 4,
      title: "البرمجة والتطوير",
      desc: "نحن لا نكتفي بأخذ موجز وتقديمه. نحن نعمل مع عملائنا لإيجاد حلول برمجية متطورة قائمة على المحتوى لأهداف أو قضايا العمل. نحن نعمل كشركاء ، وفي معظم الحالات ، تكون حلولنا عصرية ومنتجة.",
      img: "/howWork4.png",
    },
  ];
  return (
    <div
      className="p-24 bg-center bg-cover"
      style={{ backgroundImage: 'url("/howWorkBg.png")' }}
    >
      <h5 className="text-title text-lg font-semibold">كيف نعمل</h5>
      <div>
        {data.map((ele) => (
          <Card
            key={ele.id}
            title={ele.title}
            img={ele.img}
            desc={ele.desc}
            index={ele.id}
          />
        ))}
      </div>
    </div>
  );
};

export default HowWork;
