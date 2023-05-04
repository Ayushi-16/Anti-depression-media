import Image from "next/legacy/image";
import React from "react";
import BannerImage from "/image-assets/banner.png";
import Quoto from "./Quoto";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-white dark:bg-gray-700 pt-5">
      <div className="relative h-[300px] w-100vw mt-6 sm:mt-8 md:mt-7 lg:mt-6 xl:mt-4 2xl:mt-3 sm:h-[360px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] ">
        <Image
          src={BannerImage}
          layout="fill"
          objectFit="contain"
          className="md:py-4 relative "
          alt="Doctor Image"
        />
        <motion.div
          initial={{
            x: -450,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.3,
          }}
          className="flex flex-col  absolute w-full  p-2 sm:p-3 md:p-4 lg:p-8 xl:p-12 "
        >
          <p className="text-xl font-Ubuntu  font-medium w-full sm:text-2xl text-gray-400 dark:text-white block ">
            Do You Feel
            <span className="text-4xl font-Parisienne w-full font-extrabold  block text-[#FF5A5F] sm:text-5xl">
              Depressed?
            </span>
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{
          y: 150,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.3,
        }}
        className="text-gray-500 text-center font-Josefin font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      >
        ANTI <span className="text-red-700 font-Josefin">DEPRESSION</span> MEDIA
      </motion.div>
      <div className="flex items-center justify-center  mt-2 ">
        <button className="text-center mt-4 mb-8 px-4 py-2 bg-[#FF5A5F] rounded-full text-white font-medium shadow-sm hover:shadow-lg hover:border dark:border-none hover:border-[#FF5A5F] hover:bg-white hover:text-[#FF5A5F]">
          We are here to help you
        </button>
      </div>

      <div className="flex items-center justify-center  px-2 py-8 bg-gray-300 dark:bg-[#dfb6b7]">
        <Quoto />
      </div>
    </div>
  );
};

export default Banner;
