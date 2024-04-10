import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
// Left Arrow
export default function PreArrow({ sliderRef }) {
  const handleClick = () => {
    sliderRef.current.slickPrev();
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
      <AiOutlineArrowLeft
        className="text-secondary absolute  right-48   top-56"
        style={{
          fontSize: 25,
          fontWeight: "bolder",
        }}
      />
    </div>
  );
}
