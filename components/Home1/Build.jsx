import React from 'react'
import {vpole, meeting, pricing1, pricing2} from '../../public/links'
import Image from 'next/image'
import {FiArrowDownRight} from 'react-icons/fi'
import Link from 'next/link'


const Build = () => {
  return (
    <div className='bg-[#1a0533] bg-cover bg-center bg-no-repeat w-full '>
      <div className='bg-ourteam w-full z-10'>
        <div className='text-white text-5xl sm:text-6xl lg:text-7xl font-bold flex flex-col items-center text-center mx-[5%] w-[90%] lg:w-[80%] lg:mx-[10%] mt-[150px] my-10'>
         <h1 className="mt-[60px]">Let's build something
           <div>
            different <Image src={vpole} className='w-[18rem] h-4'/>
           </div>
         </h1>
         <p className='text-lg sm:font-semibold text-white my-4'>
          Take the first step towards a brighter future and supercharge your business with cutting-edge technologies, expert guidance, and unparalleled support.
         </p>
         <div className="mt-6 flex items-center cursor-pointer gap-20 py-3 px-2 group bg-violet-700 hover:bg-white transition-all text-white hover:text-black">
            <p className="font-semibold text-lg h-full">Get in Touch</p>
            <FiArrowDownRight
              size={22}
              className="transition-all group-hover:-rotate-45"
            />
        </div>
       </div>

        <div className="flex mt-[100px] overflow-hidden">
        <Image src={meeting} alt="career galary" className='w-[70%] rounded-t-md transform -rotate-12'/>
         <Image src={pricing2} alt="career galary2" className='w-[70%] rounded-t-md transform rotate-12'/>
         <Image src={pricing2} alt="career galary" className='w-[70%] rounded-t-md transform -rotate-12'/>
        </div>
      </div>
    </div>
  )
}

export default Build