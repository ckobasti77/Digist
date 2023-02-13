import React from 'react';

const StaticLoader = () => {
   
  return (
    <div className="static-loader w-[100vw] h-[100vh] bg-no-repeat bg-contain bg-[#1C252C] bg-center relative">
        <a href='#hero' className='w-[25px] h-[45px] border-2 rounded-xl absolute bottom-8 left-[50%] right-[50%] cursor-pointer flex justify-center mini-mouse'>
            <div className="bg-white rounded-full w-[5px] h-[8px] mt-2 mini-mouse-scroll"></div>
        </a>
    </div>
  )
}

export default StaticLoader;