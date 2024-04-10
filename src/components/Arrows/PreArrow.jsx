import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
// Left Arrow
export default function PreArrow({ sliderRef, isTechSol }) {
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
        className="text-secondary absolute "
        style={{
          fontSize: 25,
          fontWeight: "bolder",
          top: isTechSol ? "150px" : "224px",
          right: isTechSol ? "150px" : "192px",
        }}
      />
    </div>
  );
}
