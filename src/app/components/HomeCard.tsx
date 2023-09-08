import React from "react";
import { GrPersonalComputer } from "react-icons/gr";
import Image from "next/image";
import computerIcon from "@/assets/images/computer-6823 1.png"

const HomeCard = () => {
  return (
    <div className="dark:bg-dark-backgroundCard dark:text-dark-textColor-100 flex flex-col justify-evenly rounded-md bg-white shadow-2xl w-full lg:w-96 h-56 p-4">
      <p className="rounded-md bg-[#ffeed4] w-14 h-12 flex items-center justify-center">
        <Image src={computerIcon} alt="computer image"/>
      </p>
      <p className="text-sm font-semibold text-left">WEB DEVELOPMENT</p>
      <p className="text-sm dark:text-dark-textColor-100 text-[#331B3B] font-extralight text-left line-clamp-3 lg:line-clamp-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo
        harum tempore dignissimos quo atque officiis.
      </p>
    </div>
  );
};

export default HomeCard;
