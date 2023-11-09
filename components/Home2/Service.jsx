import React from 'react'
import {ButtonLink} from '../links'


const Service = () => {
  return (
    <div>
       <div className='bg-[#1a0533] bg-cover bg-center bg-no-repeat w-full h-fit sm:h-[50vh] md:h-screen bg-fixed pb-6'>
       <div className='bg-ourteam w-full h-fit sm:h-[50vh] md:h-screen bg-fixed pb-6'>
         <div className='text-white'>
         
         <h1 data-aos="fade-up"
           className='font-bold text-3xl sm:text-4xl md:text-5xl mx-[5%] w-[90%] lg:w-[86%] lg:mx-[7%] mt-20'>
          <span className='text-violet-100/60'>We are committed to staying at </span> 
          the forefront of technological innovation, {" "}
          <span className='text-violet-100/60'>constantly exploring emerging trends and incorporating the</span>
          latest   advancements into our solutions.</h1>

          <div className='flex items-center justify-center pt-24' data-aos="zoom-in">
           <ButtonLink URLLink="/services"/>
         </div>
         </div>
       </div>
     </div>
    </div>
  )
}

export default Service
