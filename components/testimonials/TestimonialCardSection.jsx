import React from 'react'
import { TestimonialCard } from '../home4'
import { TDB1, TDB2, TDB3, TDB4, TDB5, TDB6 } from '../home4/slider/testimonialsDB'
import Image from 'next/image'
import TestimonialProfileImg from '../../public/images/profile.webp'

const TestimonialCardSection = () => {
  return (
    <>
    {/* Testimonial Cards Section */}
    <section className='pt-16 md:pt-[100px] px-4 md:px-[170px] mb-12'>
        <div className="flex flex-col mb-8 space-y-8 md:space-x-8 md:flex-row md:space-y-0">
            <TestimonialCard name={TDB1.name} message={TDB1.message} />
            <TestimonialCard name={TDB2.name} message={TDB2.message} />
            <TestimonialCard name={TDB3.name} message={TDB3.message} />
        </div>
        <div className="flex flex-col mb-8 space-y-8 md:space-x-8 md:flex-row md:space-y-0">
            <TestimonialCard name={TDB4.name} message={TDB4.message} />
            <TestimonialCard name={TDB5.name} message={TDB5.message} />
            <TestimonialCard name={TDB6.name} message={TDB6.message} />
        </div>
        
        <div className="mt-12 space-y-6 md:p-20">
            <p className='p-8 text-xl md:text-3xl text-[#180030] font-bold border-l-4 border-[#8000ff]' data-aos="fade-up">
                "Our organization partnered with Tech for our cybersecurity needs, and the results have been exceptional. 
                Their cutting-edge solutions and proactive monitoring have kept our data secure. I highly recommend their services."
            </p>
            <center>
                <div className="flex flex-row items-center justify-center space-x-3" data-aos="fade-up">
                    <div className='w-16 h-16'><Image src={TestimonialProfileImg} className='rounded-full ' /></div>
                    <p className='text-[#180030] text-lg font-bold'>Jain Wong</p>
                </div>
            </center>
        </div>
    </section>
    {/* End of Testimonial Cards Section */}
    </>
  )
}

export default TestimonialCardSection