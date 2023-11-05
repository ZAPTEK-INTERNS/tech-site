import React from "react";
import {FiArrowDownRight} from 'react-icons/fi'

const GetInTouchGradient = () => {
  return (
    <div  > 
      <div className={`w-96 h-96`}>
      
      <div  data-aos="fade-down" className="bg-purple-100  h-[16.66%]">
      </div>
      <div  data-aos="fade-down" className="bg-purple-200  h-[16.66%]">
      </div>
      <div  data-aos="fade-down" className="bg-purple-300  h-[16.66%]">
      </div>
      <div  data-aos="fade-down" className="bg-purple-500  h-[16.66%]">
      </div>
      <div  data-aos="fade-down" className="bg-purple-700  h-[16.66%]">
      </div>
      <div data-aos="fade-down"  className="bg-purple-800  h-[16.66%]">
      </div>
      <div data-aos="fade-down"  className="bg-purple-900  h-[16.66%]">
      <div className='flex  cursor-pointer gap-4 items-center py-5 px-3 group bg-violet-700 hover:bg-white transition-all text-white hover:text-black z-30 justify-between'>
            <p className='font-semibold text-lg h-full'>Get in Touch</p>
            <FiArrowDownRight size={35} className='transition-all group-hover:-rotate-45'/>
          </div>
      </div>

      </div>
    </div>
  );
};

export default GetInTouchGradient;
