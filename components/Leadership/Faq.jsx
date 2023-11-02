import React from 'react'

const Faq = () => {
  return (
    <section className='mx-[3%] w-[94%] lg:w-[86%] lg:mx-[7%] mt-[100px] grid grid-cols-6'>
      <div className='col-span-6 md:col-span-2'>
       <h3 className='bg-violet-700/10 text-lg font-semibold w-fit rounded-md px-4 py-2 text-violet-900'>FAQ</h3>
       <h1 className='text-5xl sm:text-6xl lg:text-[4rem] font-bold my-4'>The most common questions</h1>
      </div>
      <div className='col-span-6 md:col-span-4 w-full flex flex-col justify-center items-center md:justify-right md:items-right md:relative'>
      </div>
    </section>
  )
}

export default Faq
