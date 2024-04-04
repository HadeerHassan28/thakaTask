"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex gap-8 p-24">
      {/* text */}
      <div className=" flex  flex-col   justify-around">
        <motion.h5
          initial={{ x: 0, y: -50 }}
          animate={{ x: 0, y: 20 }}
          exit={{ x: 100, y: 10 }}
          transition={{ duration: 0.5 }}
          className="text-title text-lg font-semibold"
        >
          من نحن
        </motion.h5>
        <motion.p
          initial={{ x: -800, y: -30, opacity: 0 }}
          animate={{ x: 0, y: 10, opacity: 100 }}
          exit={{ x: -500, y: 10, opacity: 100 }}
          transition={{ duration: 1 }}
          className="text-sm font-normal text-mainText  text-justify text "
          style={{ lineHeight: 2 }}
        >
          بدأت رحلتنا في «ذكاء لتقنية المعلومات» باتجاه التطور والاكتشاف. لنقود
          الأفكار نحو التطور وتوليد الفرص ونساهم في وضع حلول ابتكارية للتعامل مع
          التحديات في مجال التقنية ونكون أصحاب الريادة لتطوير الخدمات عبر تقديم
          عددٍ من الخدمات المبتكرة والحلول التقنية المتكاملة لصناعة التحول
          الرقمي في أداء القطاعين العام والخاص وللمساهمة في رفع مستوى الخدمات
          بإستخدام تقنية المعلومات
        </motion.p>
        <button className="text-primary border p-2 rounded  w-28 shadow-md hover:bg-primary hover:text-white transition duration-300">
          معرفة المزيد
        </button>
      </div>
      {/* img */}
      <motion.div
        initial={{ opacity: 0, x: 0, y: -30 }}
        exit={{ x: 100, y: 20, opacity: 1 }}
        transition={{ duration: 0.5 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      >
        <Image
          src="/about.jpeg"
          alt="Image"
          className="rounded"
          width={2100}
          height={427}
        />
      </motion.div>
    </div>
  );
};

export default About;
