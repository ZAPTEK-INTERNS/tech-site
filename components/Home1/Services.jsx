import {services} from '.'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowDownRight } from "react-icons/fi";
import {ButtonLink} from '../links'

const Services = () => {
  return (
    <section className='mt-[150px] mb-[100px] relative'>
      <div className='mx-[5%] w-[90%] lg:w-[86%] lg:mx-[7%] '>
      <div className='text-center flex justify-center items-center flex-col mb-12'>
       <p data-aos="fade-up"
        className='bg-black/10 text-lg font-semibold w-fit rounded-md px-4 py-2 text-violet-900'>
         Who we are
       </p>
       <h1 className='text-4xl sm:text-5xl font-bold my-6' data-aos="fade-up">
         How we help you
        </h1>
      </div>
      <div className='grid grid-cols-6 gap-6 z-20'>
       {services.map((service) => (
         <article key={service.id} data-aos="fade-up"
           className='col-span-6 sm:col-span-3 lg:col-span-2 bg-violet-300/10 rounded-md border border-gray-300 relative h-[22rem]'>
         
          <div className='m-6 mb-10'>
           <div className='bg-violet-400/10 p-2 rounded-md border border-gray-300 w-fit mb-4'>
             <Image src={service.icon} alt="icon" />
           </div>
           <Link href={`/services/${service.id}`} className='text-2xl font-bold text-gray-900'>
             {service.title}
            </Link>
           <p className='my-3 text-black/60'>{service.text}</p>
          </div>
          
           <Link  href={`/services`}
             className="flex justify-between gap-4 rounded-b-md items-center p-3 group bg-violet-700 hover:bg-violet-400/20 absolute bottom-0 w-full transition-all text-white hover:text-black border-t border-violet-300">
              <p className="font-semibold text-lg h-full">Learn More</p>
              <FiArrowDownRight
                size={25}
                className="transition-all group-hover:-rotate-45"
              />
            </Link>
         </article>
       ) )}
     </div>
    </div>

     <div className='bg-[#1a0533] bg-cover bg-center bg-no-repeat w-full h-fit sm:h-[50vh] md:h-screen bg-fixed pb-6'>
       <div className='bg-ourteam w-full h-fit sm:h-[50vh] md:h-screen bg-fixed pb-6'>
         <div className='text-white'>
          <div className='flex items-center justify-center pt-24' data-aos="zoom-in">
           <ButtonLink URLLink="/services"/>
         </div>

         <h1 data-aos="fade-up"
           className='font-bold text-3xl sm:text-4xl md:text-5xl mx-[5%] w-[90%] lg:w-[86%] lg:mx-[7%] mt-20'>
          <span className='text-violet-100/60'>We are committed to staying at </span> 
          the forefront of technological innovation, {" "}
          <span className='text-violet-100/60'>constantly exploring emerging trends and incorporating the</span>
          latest   advancements into our solutions.</h1>
         </div>
       </div>
     </div>
    </section>
  )
}

export default Services