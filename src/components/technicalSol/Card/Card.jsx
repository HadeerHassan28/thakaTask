import Image from "next/image";
import React from "react";

const Card = ({ title, img, dec }) => {
  return (
    <div className="flex  gap-2 p-4 bg-white lg:w-full rounded shadow-md relative">
      <Image
        src={img}
        alt="Image"
        className="w-full transition-opacity duration-300 opacity-100 hover:opacity-0"
        width={45}
        height={45}
      />
      <h5 className=" text-mainText font-semibold text-start flex items-center transition-opacity duration-300 opacity-100 hover:opacity-0">
        {title}
      </h5>
      <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center  transition-all duration-300 transform translate-y-full opacity-0 hover:opacity-100 hover:translate-y-0">
        <p className="text-mainText text-sm font-normal p-2 rounded">{dec}</p>
      </div>
    </div>
  );
};

export default Card;
