import React from "react";

const GradientBg = ({children}) => {
  return (
    <div className="relative"> 
      <div className={`flex h-[500px]`}>
      
      <div className="bg-purple-100  w-[16.66%]">
      </div>
      <div className="bg-purple-200  w-[16.66%]">
      </div>
      <div className="bg-purple-300  w-[16.66%]">
      </div>
      <div className="bg-purple-500  w-[16.66%]">
      </div>
      <div className="bg-purple-700  w-[16.66%]">
      </div>
      <div className="bg-purple-800  w-[16.66%]">
      </div>
      <div className="bg-purple-900  w-[16.66%]">
      </div>
<div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " >
    {children}
</div>
      </div>

    </div>
  );
};

export default GradientBg;
