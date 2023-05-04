import React from "react";

const Content = ({ tellContent, paraGraph }) => {
  return (
    <div className="flex flex-1 flex-col items-center m-4 pt-5">
      <div className="text-6xl text-center font-Josefin text-[#FF5A5F] ">
        {tellContent}
      </div>
      <div className=" font-normal  text-auto bg-slate-400 m-2 px-6 py-3 rounded-sm dark:bg-gray-300">
        {paraGraph}
      </div>
    </div>
  );
};

export default Content;
