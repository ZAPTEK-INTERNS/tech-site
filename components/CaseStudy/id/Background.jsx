import React from 'react'
import Image from 'next/image'


const Background = ({data}) => {
  return (
    <div className="md:flex mt-12">
        <div data-aos="fade-up" className="md:w-1/2 space-y-4">
            <p className='text-3xl md:text-5xl font-bold md:mt-12 '> Background</p>
            <p className='font-medium  text-gray-400'> {data.background}</p>
        </div>
        <div data-aos="fade-up" className="md:w-1/2 flex md:justify-center ">
        <div className="bg-slate-200/30 border border-slate-400 rounded-md px-8 py-16 space-y-8 md:min-w-[60%] w-full">
              <div className='flex justify-between border-b border-b-slate-500'>
                <p className="text-gray-500 font-medium" >Industry:</p>
                <p className='font-bold '>{data.industry}</p>
              </div>
              <div className='flex justify-between border-b border-b-slate-500'>
              <p  className="text-gray-500 font-medium" >Location:</p>
              <p className='font-bold'>{data.location}  <image data-aos="fade-up"  src={data.flag} width={40} height={40} alt='flag'/> </p>
              </div>
              <div>
              <p  className="text-gray-500 font-medium" >Services Used:</p>
              <div className='lg:flex lg:space-x-4 mt-4 space-y-4 lg:space-y-0 w-fit'>
              {
                data.services.map((service,idx)=>(
                  <div key={idx} className="border border-slate-700 px-6 rounded-full uppercase font-bold">
                    {service}
                  </div>
                ))
              }
              </div>
              
              </div>
          </div>
        </div>
      </div>
  )
}

export default Background
