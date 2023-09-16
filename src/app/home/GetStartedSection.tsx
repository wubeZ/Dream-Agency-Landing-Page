"use client";
import React from "react";
import twoPeopleImage from "@/assets/images/two_people.svg";
import vector3 from "@/assets/images/Vector 3.png";
import { motion } from "framer-motion";
import Image from "next/image";

const variants = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    delay: 0.3
  },
};

const GetStartedSection = () => {
  return (
    <div id="first-section" className="w-full min-h-screen flex flex-col py-12 lg:py-0 gap-12 lg:flex-row justify-center items-center text-[#331b3b] dark:text-dark-textColor-50">
      <motion.div
      variants={variants} 
      initial="hidden"
      animate="show" 
      className="flex flex-col justify-center pb-12 lg:pb-0 text-5xl lg:text-7xl 2xl:text-8xl px-8">
        <p className=" font-bold dark:text-dark-textColor-100">We Help you</p>
        <p className="font-light dark:text-dark-textColor-100">to grow your</p>
        <p className="w-fit font-light dark:text-dark-textColor-100 relative after:absolute after:left-1 after:right-1 after:bottom-2 after:h-4 after:-z-10 after:bg-yellow-500 after:dark:bg-sky-800">
          Buisness
        </p>
        <p className="text-base font-light py-10 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          illo recusandae et, tenetur aut neque soluta expedita, dolor minima
          perferendis obcaecati sapiente quis ad! Modi aspernatur nesciunt
          voluptate id error!
        </p>
        <button className="rounded-lg w-40 h-16 bg-[#331b3b] text-sm font-semibold py-2 px-4 text-white">
          GET STARTED
        </button>
      </motion.div>
      <div className="w-full flex relative items-center justify-center">
        <div className="2xl:hidden border-dashed border-2 border-slate-600 rounded-full h-[470px] mt-12 mr-auto w-[470px]"></div>
        <Image src={vector3} alt="vector3" className="absolute z-10" />
        <Image
          src={twoPeopleImage}
          priority={true}
          blurDataURL="../../../public/1x1-dfe9197f.png"
          placeholder="blur"
          alt="two People Image"
          className="absolute object-contain z-20"
        />
      </div>
    </div>
  );
};

export default GetStartedSection;
