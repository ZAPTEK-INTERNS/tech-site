import React from 'react'
import Link from 'next/link';
import {FiArrowDownRight} from 'react-icons/fi';

const ArrowBtn = ({
    btnLink = "/",
    btnName = "Get in Touch", 
    textColor = "text-white", 
    bgColor = "bg-violet-700", 
    hTextColor = "hover:text-black", 
    hBgColor = "hover:bg-white", 
}) => {
  return (
    <>    
        <Link href={btnLink} className={`z-30 flex items-center gap-4 p-3 py-5 md:py-3 transition-all cursor-pointer group ` + textColor + " " + bgColor + " " + hTextColor + " " + hBgColor}>
            <p className='h-full text-lg font-semibold'>{btnName}</p>
            <FiArrowDownRight size={35} className='transition-all group-hover:-rotate-45'/>
        </Link>
    </>
  )
}

export default ArrowBtn