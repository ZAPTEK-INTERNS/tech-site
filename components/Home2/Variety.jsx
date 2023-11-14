import React from 'react'
import { ButtonLink } from '../links'
import { itservices } from '../Home1'


const Variety = () => {
  return (
    <div className='bg-[#180030]'>
           <h3 className='bg-gray/50  flex justify-center text-lg font-semibold w-fit rounded-md px-4 py-2 text-violet-900' data-aos="fade-up">
           Variety solution for IT services
     </h3>

     <div>
        {
            itservices.slice(1).map((svc ,idx) =>
            (
                <div key={idx} className='text-center text-white my-12'>
                    <p className="md:text-7xl text-4xl my-8">{svc.title}</p>
                    <p className="font-medium text-sm  justify-center">{svc.text}</p>
                </div>
            ))
        }
     </div>
     
      <div className=' py-8 flex justify-center' data-aos="fade-left">          
        <ButtonLink URLLink='about-us' />
      </div>
    </div>
  )
}

export default Variety
