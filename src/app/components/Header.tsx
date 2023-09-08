"use client";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import useDarkMode from "@/lib/useDarkMode";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<Boolean>(false);
  const [colorTheme, setTheme] = useDarkMode();

  const handleDarkMode = () => {
    setTheme(colorTheme === "light" ? "light" : "dark");
  };

  return (
    <>
      <div className="sticky z-20 h-28 flex justify-between px-8 items-center shadow-md ">
        <div
          className="lg:hidden text-3xl border-2 border-slate-100"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          {openMenu ? <AiOutlineClose /> : <BiMenuAltLeft />}
        </div>
        {openMenu && (
          <ul className="absolute left-8 px-8 py-4 bg-slate-200 dark:bg-dark-backgroundCard text-xl top-20 flex flex-col rounded-sm gap-2 font-light">
            <li className="hover:border-b-2 border-slate-900 hover:dark:border-slate-200 hover:font-semibold">
              Home
            </li>
            <li className="hover:border-b-2 border-slate-900 hover:dark:border-slate-200 hover:font-semibold">
              About Us
            </li>
            <li className="hover:border-b-2 border-slate-900 hover:dark:border-slate-200 hover:font-semibold">
              Services
            </li>
            <li className="hover:border-b-2 border-slate-900 hover:dark:border-slate-200 hover:font-semibold">
              Contact Us
            </li>
          </ul>
        )}
        <ul className="hidden lg:flex justify-evenly gap-8 font-light">
          <li className="hover:border-b-2 border-slate-900 hover:dark:border-slate-200 hover:font-semibold">
            Home
          </li>
          <li className="hover:border-b-2 border-slate-900 hover:dark:border-slate-200 hover:font-semibold">
            About Us
          </li>
          <li className="hover:border-b-2 border-slate-900 hover:dark:border-slate-200 hover:font-semibold">
            Services
          </li>
          <li className="hover:border-b-2 border-slate-900 hover:dark:border-slate-200 hover:font-semibold">
            Contact Us
          </li>
        </ul>
        <p className="text-2xl font-medium lg:mr-24">Dream Agency</p>

        <div
          onClick={handleDarkMode}
          className="h-full flex items-center justify-center"
        >
          <div className="flex items-center justify-center px-3 py-3 dark:text-dark-textColor-100 hover:bg-dark-background/[0.1] dark:hover:bg-dark-textColor-100/[0.1] transition-all ease-linear rounded-full">
            {colorTheme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </div>
        </div>

        <ul className="hidden lg:flex justify-evenly gap-8 px-8 text-2xl">
          <li className="rounded-br-2xl rounded-tl-2xl w-10 h-10 border-2 dark:border-slate-400 border-slate-800 grid place-items-center">
            <FaFacebook />
          </li>
          <li className="rounded-br-2xl rounded-tl-2xl w-10 h-10 border-2 dark:border-slate-400 border-slate-800 grid place-items-center">
            <FaLinkedinIn />
          </li>
          <li className="rounded-br-2xl rounded-tl-2xl w-10 h-10 border-2 dark:border-slate-400 border-slate-800 grid place-items-center">
            <FaInstagram />
          </li>
        </ul>
      </div>
      <div className="hidden lg:block -z-40 absolute w-[500px] h-[500px] top-0 right-0 border-2 bg-[#FEC828] opacity-30 rounded-bl-[260px] rounded-tl-[550px] rounded-br-[100px]"></div>
    </>
  );
};

export default Header;
