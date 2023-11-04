import React from 'react'
import Slider from '../home4/slider/Slider'

const Testimonials = () => {
  return (
    <>
 
    <section className='py-16 md:py-[100px] space-y-12 bg-purple-900 md:flex'>
        <div className="md:w-1/2">
        <div className="flex justify-center md:flex-none md:justify-normal mx-4 lg:mx-16 my-4">
        <div className="text-white w-fit p-3 bg-slate-200/10 border border-slate-300 rounded-md font-medium">
          About Us
        </div>
      </div>
    
      <div className='space-y-5 px-4 lg:px-16 '>
        <h2 className='text-4xl md:text-5xl font-bold text-white tracking-tighter'>Trusted by more than 1000+ company&apos;s <br className="hidden md:block" /> around the world</h2>
        <p className='text-lg text-white'>
          We are more than just a business; we are a community driven by our passion for serving our customers with excellence.<br className="hidden md:block" /> 
          Our success is intertwined with the success of each individual and company we proudly call our customers.
        </p>
      </div>
        </div>
        <div className="md:w-1/2">
        <Slider />
        </div>
    
      
   
    
  
    </section>

    </>
  )
}

export default Testimonials