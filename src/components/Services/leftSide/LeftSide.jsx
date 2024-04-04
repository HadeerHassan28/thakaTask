import Image from "next/image";
import React from "react";

const LeftSide = ({ title, img, desc }) => {
  return (
    <div className="flex justify-between items-center h-32 overflow-hidden">
      {/* scrollbar */}
      <div className="overflow-y-scroll scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300">
        {/* img and text container */}
        <div className="flex justify-between items-center">
          {/* img */}
          <Image src={img} className="w-36" width={74.99} height={55.02} />
          {/* text */}
          <div className="flex flex-col flex-grow">
            {/* title */}
            <h6>{title}</h6>
            {/* desc */}
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
