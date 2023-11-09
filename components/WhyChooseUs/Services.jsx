import React from 'react'
import {FiArrowDownRight} from 'react-icons/fi'

const Services = () => {
  return (
    <div className='md:flex mx-4'>
      <div className='md:w-1/2'>
        <p className='font-bold text-5xl my-4'>We provide a wide range of IT services</p>
        <p className="text-gray-500 font-medium my-8">Your expertise in IT consulting offers us a distinctive advantage that many other consulting firms lack. This specialized knowledge allows us to provide our clients with tailored solutions and insights from the competition.</p>
        <div className='flex  cursor-pointer gap-4 items-center py-5 px-3 group bg-violet-700 hover:bg-white transition-all text-white hover:text-black z-30 justify-between w-fit'>
            <p className='font-semibold text-lg h-full t'>Get in Touch</p>
            <FiArrowDownRight size={35} className='transition-all group-hover:-rotate-45'/>
          </div>
      </div>
      <div className='md:w-1/2'>
       <div> breadcramps</div>
      </div>
    </div>
  )
}

export default Services
