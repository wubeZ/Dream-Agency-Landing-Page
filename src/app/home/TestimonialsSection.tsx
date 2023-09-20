"use client";
import React from "react";
import TestimonialCard from "../components/TestimonialCard";
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

const TestimonialsSection = () => {
  return (
    <div id="five-section" className="min-h-screen dark:text-dark-textColor-50 w-full flex flex-col gap-8 p-12 lg:p-28 lg:text-center">
      <p className="text-5xl dark:text-dark-textColor-100 font-bold">Our Testimonials</p>
      <p className="text-4xl dark:text-dark-textColor-100 font-light">
        What Our Clients Are{" "}
        <span className="relative dark:text-dark-textColor-100 z-10 after:absolute after:left-1 after:right-1 after:bottom-2 after:h-3 after:-z-10 after:bg-yellow-500 after:dark:bg-sky-800">
          Saying
        </span>
      </p>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
        }}
        className="flex flex-col gap-20 lg:flex-row justify-center w-full mt-12 lg:mt-24"
      >
        {new Array(2).fill(0).map((item, index) => [
          <motion.div key={index} variants={variants} className="">
            <TestimonialCard key={index} />
          </motion.div>,
        ])}
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;
