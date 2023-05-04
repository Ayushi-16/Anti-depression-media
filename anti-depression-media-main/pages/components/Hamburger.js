import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { useUI } from "../../Context/UIContext";
import { motion } from "framer-motion";

const Hamburger = () => {
  const { navMenu, toggleNavMenu } = useUI();
  return (
    <div
      id="closeButton"
      className="w-screen h-screen flex flex-col  items-center list-none text-gray-600 font-bold dark:text-white"
    >
      <Link href="/" onClick={toggleNavMenu}>
        <li className="hover:text-[#FF5A5F] cursor-pointer  p-9 active:scale-90 transition duration-150">
          Overview
        </li>
      </Link>
      <Link href="/features" onClick={toggleNavMenu}>
        <li className="hover:text-[#f05055] cursor-pointer  p-9 active:scale-90 transition duration-150">
          Features
        </li>
      </Link>
      <Link href="/letstest" onClick={toggleNavMenu}>
        <li className="hover:text-[#FF5A5F] cursor-pointer  p-9 active:scale-90 transition duration-150">
          Let&apos;s Test
        </li>
      </Link>
      <Link href="/contact" onClick={toggleNavMenu}>
        <li className="hover:text-[#FF5A5F] cursor-pointer  p-9 active:scale-90 transition duration-150">
          Contact Us
        </li>
      </Link>
      <motion.div
        whileHover={{ scale: 1.4 }}
        whileTap={{
          scale: 1.6,
          // rotate: 180,
          borderRadius: "100%",
        }}
      >
        <XMarkIcon
          className="h-12 pt-[15px] hover:text-[#f05055] cursor-pointer"
          onClick={toggleNavMenu}
        />
      </motion.div>
    </div>
  );
};

export default Hamburger;
