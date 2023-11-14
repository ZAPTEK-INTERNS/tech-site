import React from 'react'
import { ButtonLink } from '../links'
import { itservices } from '../Home1'


const Variety = () => {
  return (
    <div className='bg-[#180030]'>
        <div className='flex justify-center pt-4'>
           <h3 className='bg-white/50   text-lg font-semibold w-fit rounded-md px-4 py-2 text-violet-900' data-aos="fade-up">
           Variety solution for IT services
     </h3>

        </div>

     <div>

     
        {
            itservices.slice(1).map((svc ,idx) =>
            (
                <div key={idx} className='text-center text-white my-12'>
                    <p className="md:text-7xl text-4xl hover:text-white my-8" 
                    style={{
                        fontWeight: 'bold',
                        color: 'transparent',
                        WebkitTextStroke: '2px white',
                        transition: 'color 0.3s ease',
                        cursor: 'pointer'
                      }}
                        onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                        onMouseOut={(e) => e.currentTarget.style.color = 'transparent'}
                      
                    >{svc.title}</p>
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
