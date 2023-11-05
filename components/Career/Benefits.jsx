import React from 'react'


const Benefits = () => {
  return (
    <section className='mx-[5%] w-[90%] lg:w-[80%] lg:mx-[10%] my-[100px]'>
      <h1 className='text-4xl sm:text-5xl text-center text-black/80 font-bold mb-12 ' data-aos="fade-up">
        Benefits of <br className='hidden md:block'/> working at Tech
     </h1>
      <div className='grid grid-cols-6 mt-6 gap-10'>
        <article data-aos="fade-up"
          className='border border-violet-400/30 rounded-md p-6 bg-violet-100/50 w-full col-span-6 sm:col-span-3 lg:col-span-2'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6'>Development</h1>
          <p className='text-gray-500 text-lg font-semibold'>
             We strive to support and nurture our employees. Professional growth and learning are our priorities</p>
        </article>
        <article data-aos="fade-up"
          className='border border-violet-400/30 rounded-md p-6 text-white bg-[#1a0533] col-span-6 sm:col-span-3 lg:col-span-2  w-full '>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6'>Innovation</h1>
          <p className='text-lg font-semibold'>You'll work on exciting projects and leverage cutting-edge evolving technologies</p>
        </article>
        <article data-aos="fade-up"
          className='border border-violet-400/30 rounded-md p-6 bg-violet-100/50 col-span-6 sm:col-span-4 lg:col-span-2  w-full'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6'>Team Spirit</h1>
          <p className='text-gray-500 text-lg font-semibold'>Our team is like a family. We believe in teamwork and mutual support</p>
        </article>
      </div>
    </section>
  )
}

export default Benefits
