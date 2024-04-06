import Image from "next/image";
import React from "react";

export default function SmallScreen() {
  return (
    <div className={`md:hidden xs:mb-4`}>
      <Image
        src="/about.jpeg"
        alt="Image"
        className={`rounded `}
        width={2100}
        height={427}
      />
    </div>
  );
}
