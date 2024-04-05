import { howWorkData } from "@/data/HowWork";
import React from "react";
import Card from "./Card/Card";

const HowWork = () => {
  return (
    <div
      className="p-24 bg-center bg-cover"
      style={{ backgroundImage: 'url("/howWorkBg.png")' }}
    >
      <h5 className="text-title text-lg font-semibold">كيف نعمل</h5>
      <div>
        {howWorkData.map((ele) => (
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
