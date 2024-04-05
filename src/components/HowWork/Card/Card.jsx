import Image from "next/image";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "./card.module.css";
const Card = ({ title, desc, img, index }) => {
  return (
    <div
      className={`flex gap-20 justify-between items-center ${
        index != 1 ? styles.Remain : null
      }`}
    >
      {/* text (title and paragrph)*/}
      <div
        className={`flex flex-col gap-5 items-start justify-center ${
          index === 1 ? styles.FirstTextItem : styles.RemainText
        }`}
      >
        <h6
          className="text-white text-bold text-lg"
          style={{ fontSize: "24px", fontWeight: 700 }}
        >
          {index}. {}
          {title}
        </h6>
        <p
          className="text-white text-base font-normal mb-6 text-justify"
          style={{ fontSize: "20px", fontWeight: 400, lineHeight: 2 }}
        >
          {desc}
        </p>
      </div>
      {/* img */}
      <Image
        src={img}
        alt="how working"
        width={400}
        height={400}
        className={`w-96 ${styles.img}`}
      />

      {/* Button */}
      <button className="rounded-full border-4 border-white border-opacity-50 p-3">
        <AiOutlineArrowLeft
          style={{
            color: "#ffffff",
            fontSize: "26px",
          }}
        />
      </button>
    </div>
  );
};

export default Card;
