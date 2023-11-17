
import { ButtonLink } from '../links'
import { services } from "../Home1";
import Image from "next/image";
import Link from "next/link";
import { FiArrowDownRight } from "react-icons/fi";


const Who = () => {
    

  return (
    <section className='mx-[5%] w-[90%] lg:w-[80%] lg:mx-[10%] mt-[150px] mb-[100px] md:flex md:space-x-4'>
        <div className="md:w-1/3" >

     <h3 className='bg-black/10 text-lg font-semibold w-fit rounded-md px-4 py-2 text-violet-900' data-aos="fade-up">
       Who we are
     </h3>
     <h1 className='text-4xl sm:text-5xl font-bold my-6' data-aos="fade-up">
    How we help you
      </h1>
     <div className=' text-lg font-semibold '>
       <p className=' text-gray-500 text-lg font-semibold' data-aos="fade-up">
       Transparency, reliability, and outstanding customer experiences are at the core of our values. We take pride in fostering strong relationships with our clients, communicating openly at every stage of the development process.
       </p>
     </div>
     <div className=' my-8' data-aos="fade-left">          
        <ButtonLink URLLink='about-us' />
      </div>
        </div>

     <div className='md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 space-y-8'>
     
     {services.slice(0,4).map((service) => (
            <div
              key={service.id}
              data-aos="fade-up"
              className=" bg-violet-300/10 rounded-md border border-gray-300 relative h-[22rem]"
            >
              <div className="m-6 mb-10">
                <div className="bg-violet-400/10 p-2 rounded-md border border-gray-300 w-fit mb-4">
                  <Image src={service.icon} alt="icon" />
                </div>
                <Link
                  href={`/services/${service.id}`}
                  className="text-2xl font-bold text-gray-900"
                >
                  {service.title}
                </Link>
                <p className="my-3 text-black/60">{service.text}</p>
              </div>

              <Link
                href={`/services`}
                className="flex justify-between gap-4 rounded-b-md items-center p-3 group bg-violet-700 hover:bg-violet-400/20 absolute bottom-0 w-full transition-all text-white hover:text-black border-t border-violet-300"
              >
                <p className="font-semibold text-lg h-full">Learn More</p>
                <FiArrowDownRight
                  size={25}
                  className="transition-all group-hover:-rotate-45"
                />
              </Link>
            </div>
          ))}
     </div>
    </section>
  )
}

export default Who