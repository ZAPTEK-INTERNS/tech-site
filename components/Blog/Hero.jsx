import React from 'react'
import Search from './Search'

const Hero = ({search, setSearch}) => {
  return (
      <section className='w-[90%] mx-[5%] lg:w-[86%] lg:mx-[7%] my-[100px]'>
        <h1 className='text-6xl sm:text-7xl font-bold text-center lg:text-left'>Blog</h1>
         <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center mt-6 gap-6'>
          <p className='text-lg sm:font-semibold text-gray-600 text-center lg:text-left'>
            Welcome to our blog where we dive deep into the philosophy of <br /> simplicity in an increasingly complex world
          </p>
          <Search search={search} setSearch={setSearch}/>
         </div>
      </section>
  )
}

export default Hero
