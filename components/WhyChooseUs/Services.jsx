import React from 'react'
import {FiArrowDownRight} from 'react-icons/fi'
import ToggleParagraph from './ToggleParagraph'

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
       <div className="my-12"> 

<ToggleParagraph title="Q&A Testing" paragraph="Involves a systematic process of evaluating software applications or systems to identify and fix issues."/>
<ToggleParagraph title="Account & Security" paragraph="Focus on safeguarding digital assets, sensitive information, and user accounts from unauthorized access and cyber threats."/>
<ToggleParagraph title="Digital Consulting" paragraph="Unleashing the full potential of your business through expert guidance and strategic implementation of cutting-edge technologies."/>
<ToggleParagraph title="Custom Software Development" paragraph="Tailor-made software solutions designed to align seamlessly with your unique business needs and drive productivity to new heights."/>


       </div>
      </div>
    </div>
  )
}

export default Services
