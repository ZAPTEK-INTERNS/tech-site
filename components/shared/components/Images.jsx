import React from 'react'
import { meeting, pricing3, pricing2} from '../../../public/links'
import Image from 'next/image'

const Images = () => {
  return (
    <div className="flex mt-[100px] overflow-hidden">
     <Image 
       src={meeting} 
       alt="career galary" 
       data-aos="fade-up"
       data-aos-anchor-placement="bottom-center"
       className='w-[70%] rounded-t-md transform -rotate-12'/>
     <Image 
       src={pricing2} 
       alt="career galary2" 
       data-aos="fade-up"
       data-aos-anchor-placement="bottom-center"
       className='w-[70%] rounded-t-md transform rotate-12'/>
     <Image 
       src={pricing3} 
       alt="career galary" 
       data-aos="fade-up"
       data-aos-anchor-placement="bottom-center"
       className='w-[70%] rounded-t-md transform -rotate-12'/>
   </div>
  )
}

export default Images
