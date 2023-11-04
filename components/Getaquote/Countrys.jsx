import {countrys} from './data'
import {BsArrowRightShort} from 'react-icons/bs'
import {IoMdMail} from 'react-icons/io'
import {IoCall} from 'react-icons/io5'
import Link from 'next/link'

const Countrys = () => {

  const phoneNumber = "+1 212 425 8617";
  const email = "information@office.com";


  return (
    <section className='mx-[5%] w-[90%] lg:w-[86%] lg:mx-[7%] mb-10'>
      <div className='grid grid-cols-4'>
        {countrys.map((country, index) => (
          <article key={index} className='col-span-4 sm:col-span-2 md:col-span-4 flex flex-col gap-6 md:flex-row md:justify-between md:items-center md:border-b md:border-gray-300 my-8'>
            <div>
              <h1 className='text-4xl text-black/80 sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3'>
                {country.name}
              </h1>
              <Link href={country.map} className='text-violet-700 flex items-center font-semibold text-lg'>
                View on map <BsArrowRightShort size={25}/>
              </Link>
            </div>
            <div>
              <div className='flex text-lg gap-4 text-gray-900 font-semibold items-center mb-2'>
                City: {" "} 
                <Link href={country.map} className='hover:text-violet-700 transition-all'>
                  {country.city}
                </Link>
              </div>
              <div className='flex text-lg gap-4 text-gray-900 font-semibold items-center'>
                Street: {" "} 
                <Link href={country.map} className='hover:text-violet-700 transition-all'>
                  {country.street}
                </Link>
              </div>
            </div>
            <div>
              <div className='flex text-lg gap-4 text-gray-900 font-semibold items-center mb-2'>
                <IoMdMail className='text-violet-700'/> 
                 {" "} 
                 <Link href={`mailto:${email}`} className='hover:text-violet-700 transition-all'>
                  {country.email}
                 </Link>
              </div>
              <div className='flex text-lg gap-4 text-gray-900 font-semibold items-center'>
               <IoCall className='text-violet-700'/>
               {" "}
               <Link href={`tel:${phoneNumber}`} className='hover:text-violet-700 transition-all'>
                 {country.contact}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Countrys
