import Link from 'next/link'
import Image from 'next/image'
import {pricing1} from '../public/links'

const AboutSection = () => {
  return (
    <section className='mx-[5%] w-[90%] lg:w-[80%] lg-mx-[10%] my-[50px]'>
     <h3 className='bg-black/10 text-lg font-semibold w-fit rounded-md px-4 py-2 text-violet-900'>
       Who we are
     </h3>
     <h1 className='text-5xl font-bold my-6'>We are more than just a company</h1>
     <div className='grid grid-cols-7 gap-8 text-lg font-semibold '>
       <p className='col-span-7 md:col-span-5 text-gray-500 text-lg font-semibold'>We are architects of innovation, trailblazers of technological advancement, and 
        partners in your success. As a dynamic and forward-thinking organization, we are 
        dedicated to reshaping industries and empowering businesses to navigate 
        the digital age with confidence.</p>
        <Link className='col-span-7 md:col-span-2 bg-violet-800 h-fit text-white px-3 py-3 rounded-[60px] w-fit flex items-center gap-6 justify-between hover:text-black hover:bg-white border border-violet-700 transition-all' 
           href='/about'>
          <span>Learn More</span>
           <span className='font-bold'>.</span>
        </Link>
     </div>

     <div className='grid grid-cols-7 gap-8 mt-12'>
      <Image src={pricing1} alt="about image" className='col-span-7 md:col-span-5 w-full h-[24rem] rounded-md'/>
      <div className='col-span-7 md:col-span-2 flex flex-col sm:flex-row md:flex-col gap-6 '>
        <div className='md:border-b md:border-gray-400 text-center md:text-left'>
         <h1 className='text-violet-800 text-5xl sm:text-6xl font-bold'>12+</h1>
         <p className='text-lg font-semibold text-gray-500 mb-6'>
          Years of experience in software development
         </p>
        </div>
        <div className='text-center md:text-left'>
          <h1 className='text-violet-800 text-5xl sm:text-6xl font-bold'>50</h1>
          <p className='text-lg font-semibold text-gray-500 mb-6'>
            Winning awards as one of the top world company
          </p>
        </div>
      </div>
     </div>
    </section>
  )
}

export default AboutSection