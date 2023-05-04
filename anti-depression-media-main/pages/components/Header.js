import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import ADM from "/image-assets/ADM.png";
import Hamburger from "./Hamburger";
import { useUI } from "../../Context/UIContext";
import useLocalStorage from "use-local-storage";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { motion } from "framer-motion";



// const DarkMode = () => {
//   let clickedClass = "clicked";
//   // let body = document.body;
//   const lightTheme = "light";
//   const darkTheme = "dark";
//   let theme;

//   // if ( localStorage) {
//   //   theme = localStorage.getItem("theme");
//   // }

//   useEffect(() => {
//     theme = localStorage.getItem('theme')
//   }, []);

//   if (theme === lightTheme || theme === darkTheme) {
//     body.classList.add(theme);
//   } else {
//     body.classList.add(lightTheme);
//   }

//   const switchTheme = (e) => {
//     if (theme === darkTheme) {
//       body.classList.replace(darkTheme, lightTheme);
//       e.target.classList.remove(clickedClass);
//       localStorage.setItem("theme", "light");
//       theme = lightTheme;
//     } else {
//       body.classList.replace(lightTheme, darkTheme);
//       e.target.classList.add(clickedClass);
//       localStorage.setItem("theme", "dark");
//       theme = darkTheme;
//     }
//   };
//   return (
//     <button
//       className={`bg-red-500 px-4 py-2 transition duration-150 ease-in-out  ${theme === "dark" ? clickedClass : ""}`}
//       id="darkMode"
//       onClick={(e) => switchTheme(e)}
//     >
//       Hello
//     </button>
//   );
// };

const Header = ({ active, onDarkToggle, photo, name }) => {
  // const [x, setX] = useLocalStorage(false);
  const {x, setX} = useUI();
  const { navMenu, toggleNavMenu } = useUI();
  const { user, setUser } = useUI();

  return (
    <header className="fixed top-0 z-[999] w-screen grid grid-cols-3 items-center justify-between bg-white shadow-md p-3  md:px-10 dark:bg-gray-800">
      {/* Left */}

      <div className=" relative flex items-center h-10 cursor-pointer my-auto ">
        <Link href="/" >
          <Image
            src={ADM}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            // className="relative "
            alt="Logo"
            viewBox="0 0 20 20"
          />
        </Link>
      </div>

      {/* Middle */}

      <div className="flex justify-between">
        <ul className="hidden items-center space-x-8 sm:inline-flex text-black dark:text-white">
          <Link href="/">
            <li className="hover:text-[#FF5A5F] cursor-pointer active:scale-90 transition duration-150">
              Overview
            </li>
          </Link>
          <Link href="./features">
            <li className="hover:text-[#FF5A5F] cursor-pointer active:scale-90 transition duration-150">
              Features
            </li>
          </Link>
          <Link href="./letstest">
            <li className="hover:text-[#FF5A5F]  cursor-pointer active:scale-90 transition duration-150">
              Let&apos;s Test
            </li>
          </Link>
          <Link href="./contact">
            <li className="hover:text-[#FF5A5F] cursor-pointer active:scale-90 transition duration-150">
              Contact Us
            </li>
          </Link>
        </ul>
      </div>

      {/* Right */}

      <div className="flex items-center justify-end space-x-2 cursor-pointer">
        <div className="flex  items-center gap-1">
          <div className="hidden lg:flex text-sm dark:text-white ">{name}</div>
          {photo && (
            <Image
              // fill,fixed,intrinsic,responsive,undefined
              layout="intrinsic"
              height={35}
              width={35}
              className="shadow-lg rounded-full "
              src={photo}
              alt="User Profile"
            />
          )}
        </div>

        {/* <DarkMode /> */}
        <MoonIcon
          onClick={onDarkToggle}
          // onClick={(e) => switchTheme(e)}
          className={`h-7 px-1 cursor-pointer text-black active:scale-100 transition duration-150 dark:text-white `}
        />

        <motion.div
          // whileHover={{ scale: 1.2, rotate: 180 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <Bars3Icon
            className="text-black h-7  cursor-pointer dark:text-white hover:text-[#FF5A5F] dark:hover:text-[#FF5A5F] visible active:scale-90 transition duration-150 sm:hidden"
            onClick={toggleNavMenu}
          />
        </motion.div>
        <ArrowRightOnRectangleIcon
          onClick={() => signOut(auth)}
          className="h-7 px-1 cursor-pointer text-[#FF5A5F] active:scale-100 transition duration-150 "
        />
      </div>

      {navMenu && <Hamburger />}
    </header>
  );
};

export default Header;
