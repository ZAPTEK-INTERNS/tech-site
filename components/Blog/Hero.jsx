import React from 'react'

const Hero = () => {
  return (
      <section className='w-[90%] mx-[5%] lg:w-[86%] lg:mx-[7%] my-[100px]'>
        <h1 className='text-6xl sm:text-7xl font-bold text-center lg:text-left'>Blog</h1>
         <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center mt-6 gap-6'>
          <p className='text-lg sm:font-semibold text-gray-600 text-center lg:text-left'>
            Welcome to our blog where we dive deep into the philosophy of <br /> simplicity in an increasingly complex world
          </p>
           <div className='flex flex-col sm:flex-row gap-4'>
             <input 
              type="text" 
              placeholder='Enter search keyword' 
              className='outline-none border border-gray-300 p-3 rounded-md'
              /> 
             <button className='bg-violet-700 py-2 border border-violet-700 px-8 text-white hover:text-black hover:bg-white transition-all rounded-3xl'>
                Search
             </button>
           </div>
         </div>
      </section>
  )
}

export default Hero
