import React from "react";

const StaticLoader = () => {
  return (
    <div className="w-full bg-[#1C252C]">
      <div className="static-loader sm:w-[100vw] lg:w-[66.66vw] mx-auto h-[100vh] bg-no-repeat bg-contain bg-[#1C252C] bg-center relative">
        <a
          href="#navbar"
          className="w-[25px] h-[45px] border-2 rounded-xl absolute bottom-8 left-[50%] right-[50%] cursor-pointer flex justify-center mini-mouse"
        >
          <div className="bg-white rounded-full w-[5px] h-[8px] mt-2 mini-mouse-scroll"></div>
        </a>
      </div>
    </div>
  );
};

export default StaticLoader;
