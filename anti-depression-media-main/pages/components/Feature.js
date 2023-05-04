import React from "react";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <div className="dark:bg-gray-600 bg-white pt-20">
      <div className="flex flex-col  items-center w-fill  ">
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.3,
          }}
          className="p-4 mb-10 items-center text-center justify-center text-[4.2rem] sm:text-[4.5rem] md:text-[4.8rem] lg:text-[5.5rem] font-Josefin text-[#FF5A5F] "
        >
          FEATURES
        </motion.div>
        <div className="flex flex-col items-start font-normal text-justify w-screen bg-slate-400 rounded-sm dark:bg-gray-300 ">
          <div className=" m-8 px-auto py-auto sm:m-9 md:m-10 lg:m-11 xl:m-12 2xl:m-14 ">
            <ul className="list-disc list-outside ">
              <li key={0} className="text-start ">
                This web page takes a QUIZ from the user and based on
                user&apos;s response&sbquo; an average depression stage will be
                predicted.
              </li>
              <li key={1} className="text-start">
                It will provide recommendations of the songs&sbquo; movies and
                books based on user&apos; interest.
              </li>
              <li key={2} className="text-start">
                It will also provide suggestion to Doctor if the user is in
                critical stage.
              </li>
              <li key={3} className="text-start">
                Support light/dark mode
              </li>
              <li key={4} className="text-start">
                High refreshrate
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
