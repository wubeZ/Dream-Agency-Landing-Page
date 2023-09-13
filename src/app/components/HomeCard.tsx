"use client";
import React from "react";
import { GrPersonalComputer } from "react-icons/gr";
import Image from "next/image";
import computerIcon from "@/assets/images/computer-6823 1.png";
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

const HomeCard = () => {
  return (
    <motion.div
      variants={card}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
      className="dark:bg-dark-backgroundCard dark:text-dark-textColor-100 flex flex-col justify-evenly rounded-md bg-white shadow-2xl w-full lg:w-72 h-56 p-4"
    >
      <p className="rounded-md bg-[#ffeed4] w-14 h-12 flex items-center justify-center">
        <Image src={computerIcon} alt="computer image" />
      </p>
      <p className="text-sm font-semibold text-left">WEB DEVELOPMENT</p>
      <p className="text-sm dark:text-dark-textColor-50 text-[#331B3B] font-extralight text-left line-clamp-3 lg:line-clamp-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo
        harum tempore dignissimos quo atque officiis.
      </p>
    </motion.div>
  );
};

export default HomeCard;
