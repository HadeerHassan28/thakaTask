import Image from "next/image";
import React from "react";

export default function SmallScreen({ img, title, desc }) {
  return (
    <div className="md:hidden xs:flex xs:flex-col xs:gap-1  ">
      <Image
        src={img}
        alt="img"
        className={`rounded `}
        width={2100}
        height={427}
      />
      <h6
        className="text-white text-bold text-lg"
        style={{ fontSize: "24px", fontWeight: 700 }}
      >
        1. {title}
      </h6>
      <p
        className="text-white text-base font-normal mb-6 text-justify"
        style={{ fontSize: "20px", fontWeight: 400, lineHeight: 2 }}
      >
        {desc}
      </p>
    </div>
  );
}
