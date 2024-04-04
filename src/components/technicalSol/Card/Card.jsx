import Image from "next/image";
import React from "react";

const Card = ({ title, img, dec }) => {
  return (
    <div className="flex  gap-2 p-10 bg-white lg:w-full rounded shadow-md relative ">
      <div className=" flex flex-row gap-2 w-full transition-opacity duration-300 opacity-100 hover:opacity-0">
        <Image src={img} alt="Image" className=" w-32" width={45} height={45} />
        <h5 className=" text-mainText font-semibold text-start flex items-center ">
          {title}
        </h5>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center  transition-all duration-300 transform translate-x-full translate-y-full opacity-0 hover:opacity-100 hover:translate-x-0 hover:translate-y-0">
        <p className="text-mainText text-sm font-normal p-2 rounded">{dec}</p>
      </div>
    </div>
  );
};

export default Card;
