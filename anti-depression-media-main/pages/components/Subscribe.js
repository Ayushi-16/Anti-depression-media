import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-[#041e42] w-full p-6 lg:flex-row dark:bg-gray-900">
      <div className="flex flex-col p-1 pl-8">
        <h1 className="font-[700] text-[25px] text-white">
          Sign Up for Newsletters
        </h1>
        <div className="flex text-[15px] font-[600] text-[#818ea0] justify-center lg:justify-start">
          Get Regular Updates through Email
        </div>
      </div>
      <div className="w-full flex p-2 sm:w-[90%] md:w-[80%] lg:w-[40%]  ">
        <input
          type="text"
          placeholder="Your E-Mail Address"
          className=" font-[15px] px-5 w-full border-transparent rounded-l-sm outline-none placeholder-slate-600 "
        ></input>
        <button className=" bg-[#FF5A5F] min-w-[100px] text-white rounded-r-sm px-[18px] py-3 border-none font-medium text-[medium] outline-none ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
