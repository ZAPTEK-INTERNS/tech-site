import React from 'react'
import {vpole} from '../../public/links'
import Image from 'next/image'

const Build = () => {
  return (
    <div className='bg-[#1a0533] bg-cover bg-center bg-no-repeat w-full h-[50vh] md:h-screen'>
      <div className='bg-ourteam w-full h-[50vh] md:h-screen'>
        <div className='text-white text-7xl font-bold flex flex-col items-center text-center'>
         <h1>Let's build something
           <div>
            different <Image src={vpole} className='w-[18rem] h-4'/>
           </div>
         </h1>
         <p className='text-lg sm:font-semibold text-white'>
          Take the first step towards a brighter future and supercharge your business with cutting-edge technologies, expert guidance, and unparalleled support.
         </p>
       </div>
      </div>
    </div>
  )
}

export default Build