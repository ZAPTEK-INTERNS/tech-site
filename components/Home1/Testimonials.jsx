import React from 'react'
import {Slider} from '../links'


const Testimonials = () => {
  return (
    <section className='bg-gradient-to-t from-violet-700 to-[#5f11d4] w-full h-screen'>
      <div className='mx-[5%] w-[90%] lg:w-[86%] lg:mx-[7%] grid grid-cols-5'>
        <div className='text-white col-span-2 my-8'>
         <p className='bg-violet-600 border border-gray-400/90 text-lg font-semibold w-fit rounded-md px-4 py-2'>
          Testimonials
         </p>
         <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-bold my-8'>
           Trusted by more than 1000+ company's around the world
         </h1>
         <p className='text-lg sm:font-semibold'>
           We are more than just a business; we are a community driven by our passion for serving our
           customers with excellence. Our success is intertwined with the success of each individual 
           and company we proudly call our customers.
         </p>
        </div>

      <div className='col-span-3'>
       <Slider />
      </div>
    </div>
</section>
  )
}

export default Testimonials
