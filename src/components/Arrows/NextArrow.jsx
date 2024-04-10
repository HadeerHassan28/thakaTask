import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

// Right Arrow
export default function NextArrow({ sliderRef }) {
  const handleClick = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div
      style={{
        textAlign: "center", // Center arrow
        cursor: "pointer",
      }}
      className=" block relative mb-9"
      onClick={handleClick}
    >
      <AiOutlineArrowRight
        className="text-primary absolute  left-56  top-5"
        style={{
          fontSize: 25,
          fontWeight: "bolder",
        }}
      />
    </div>
  );
}
