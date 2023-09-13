"use client";
import React from "react";
import { LuQuote } from "react-icons/lu";
import { motion } from "framer-motion";

const card = {
  hidden: {
    x: 30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const TestimonialCard = () => {
  return (
    <motion.div
      variants={card}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
      className="dark:bg-dark-backgroundCard h-full lg:h-80 p-8 w-full lg:w-96 flex flex-col gap-8 shadow-2xl  rounded-md"
    >
      <p className="text-5xl dark:text-dark-textColor-100">
        <LuQuote />
      </p>
      <p className="text-left text-sm font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        repellat perspiciatis alias ut porro saepe reprehenderit, cumque animi
        quidem, neque impedit. Quasi blanditiis cum reprehenderit culpa maxime
        exercitationem similique excepturi.
      </p>
      <p className="text-left font-semibold dark:text-dark-textColor-100">UI Shop</p>
    </motion.div>
  );
};

export default TestimonialCard;
