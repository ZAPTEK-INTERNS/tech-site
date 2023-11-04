import React from 'react'
import Slider from './slider/Slider'

const Home4TestimonialSection = () => {
  return (
    <>
    {/* Testimonials Section */}
    <section className='py-16 md:py-[100px] space-y-12'>
      {/* Heading */}
      <center className='space-y-5 px-4 md:px-[170px] '>
        <h2 className='text-4xl md:text-5xl font-bold text-[#180030] tracking-tighter'>Trusted by more than 1000+ company&apos;s <br className="hidden md:block" /> around the world</h2>
        <p className='text-lg text-[#7987a1]'>
          We are more than just a business; we are a community driven by our passion for serving our customers with excellence.<br className="hidden md:block" /> 
          Our success is intertwined with the success of each individual and company we proudly call our customers.
        </p>
      </center>
      {/* End of Heading */}
      {/* Slider */}
      <Slider />
      {/* End of Slider */}
    </section>
    {/* End of Testimonials Section */}
    </>
  )
}

export default Home4TestimonialSection