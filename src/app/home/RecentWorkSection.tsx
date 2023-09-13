"use client";
import React from "react";
import WorkCard from "../components/WorkCard";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const RecentWorkSection = () => {
  return (
    <div id="six-section" className="dark:text-dark-textColor-50 w-full min-h-screen p-12 lg:p-28 flex flex-col gap-20 lg:gap-36 dark:bg-dark-backgroundLight bg-[#fff5f2] rounded-tl-[750px] lg:pl-24">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-60">
        <div className="text-5xl w-full">
          <p className="font-bold dark:text-dark-textColor-100">Our Recent Work</p>
          <p className="font-light dark:text-dark-textColor-100 pt-2 text-4xl lg:text-5xl">
            By Our{" "}
            <span className="relative dark:text-dark-textColor-100 z-10 after:absolute after:left-1 after:right-1 after:bottom-2 after:h-3 after:-z-10 after:bg-yellow-500 after:dark:bg-sky-800">
              Experts
            </span>
          </p>
        </div>
        <p className="pt-12 lg:pt-0 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          voluptate maiores vero qui eius aliquam sit nobis asperiores
          exercitationem, quisquam rem, doloribus labore ea sed nisi aperiam
          quam corporis provident?
        </p>
      </div>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
        }}
        className="flex flex-wrap flex-col lg:flex-row justify-evenly lg:ml-24 gap-6 lg:gap-10"
      >
        {new Array(3).fill(0).map((item, index) => [
          <motion.div key={index} variants={variants} className="">
            <WorkCard key={index} />
          </motion.div>,
        ])}
      </motion.div>
    </div>
  );
};

export default RecentWorkSection;
