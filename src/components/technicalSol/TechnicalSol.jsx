import { techData } from "@/data/TechnicalSol";
import React from "react";
import Card from "./Card/Card";

const TechnicalSol = () => {
  return (
    <div className="xs:bg-white xs:p-5 md:p-24 md:bg-bgFooter md:flex md:flex-col md:justify-around md:gap-3 ">
      <h5 className="text-title font-semibold xs:text-center xs:mb-6 md:text-lg md:text-start">
        حلول تقنية
      </h5>
      <p className="text-start text-sm font-normal text-mainText md:mb-5 ">
        يمكننا مساعدتك في تخطيط وتصميم وتطوير أي نوع من المنتجات الرقمية.
      </p>

      <div className="flex  md:gap-4 xs:gap-1 ">
        {techData.map((ele) => (
          <Card title={ele.title} img={ele.img} dec={ele.dec} key={ele.id} />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSol;
