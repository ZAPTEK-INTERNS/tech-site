import React from 'react'
import {Slider} from '../links'


const Testimonials = () => {
  return (
    <section className='bg-gradient-to-t from-violet-700 to-[#5f11d4] w-full h-screen'>
      <div className='lg:w-[88%] lg:ml-[8%] lg:mr-[4%] grid grid-cols-5 items-center gap-8 justify-between'>
        <div className='text-white col-span-5 lg:col-span-2 mt-8 sm:mt-[150px] lg:mt-0 w-[90%] mx-[5%] lg:w-auto lg:mx-auto'>
         <p className='bg-violet-600 border border-gray-400/90 text-lg font-semibold w-fit rounded-md px-4 py-2'>
          Testimonials
         </p>
         <h1 className='text-4xl sm:text-5xl md:text-[3.2rem]  font-bold my-8'>
           Trusted by more than 1000+ company's around the world
         </h1>
         <p className='text-lg sm:font-semibold'>
           We are more than just a business; we are a community driven by our passion for serving our
           customers with excellence. Our success is intertwined with the success of each individual 
           and company we proudly call our customers.
         </p>
        </div>

      <div className='col-span-5 lg:col-span-3 mt-[100px] lg:mt-0 flex'>
       <Slider />
      </div>
    </div>
</section>
  )
}

export default Testimonials
