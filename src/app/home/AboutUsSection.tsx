"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ThreePeople from "@/assets/images/threePeople.svg";
import vector4 from "@/assets/images/Vector 9.svg";

const variants = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    delay: 0.3,
  },
};

const AboutUsSection = () => {
  return (
    <div id="second-section" className="min-h-screen dark:text-dark-textColor-50 lg:min-h-screen flex flex-col lg:flex-row gap-32 lg:gap-24 items-center">
      <div className="w-full h-96 lg:min-h-screen flex items-center justify-center pt-56 lg:pt-0">
        <div className="hidden lg:block 2xl:hidden border-dashed border-2 border-slate-800 mt-10 mr-auto w-[600px] h-[600px] rounded-full"></div>
        <Image src={vector4} alt="vector 4" className="absolute z-10" />
        <Image
          src={ThreePeople}
          priority={true}
          alt="three people image"
          className="object-contain absolute z-20"
        />
      </div>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        className="w-full flex flex-col justify-center pt-20 md:pt-32 lg:pt-0 lg:min-h-screen text-5xl px-8"
      >
        <p className=" font-bold dark:text-dark-textColor-100">About Us</p>
        <p className="font-light dark:text-dark-textColor-100 pt-2">
          Fake or{" "}
          <span className="relative dark:text-dark-textColor-100 z-10 after:absolute after:left-1 after:right-1 after:bottom-2 after:h-3 after:-z-10 after:bg-yellow-500 after:dark:bg-sky-800">
            Real
          </span>
        </p>
        <p className="text-base font-extralight py-5 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          illo recusandae et, tenetur aut neque soluta expedita, dolor minima
          perferendis obcaecati sapiente quis ad! Modi aspernatur nesciunt
          voluptate id error!
        </p>
        <p className="text-base font-extralight py-5 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          illo recusandae et, tenetur aut neque soluta expedita, dolor minima
          perferendis obcaecati sapiente quis ad! Modi aspernatur nesciunt
          voluptate id error!
        </p>
        <button className="rounded-lg w-40 h-16 bg-[#331b3b] text-sm font-semibold py-2 px-4 text-white">
          EXPLORE MORE
        </button>
      </motion.div>
    </div>
  );
};

export default AboutUsSection;
