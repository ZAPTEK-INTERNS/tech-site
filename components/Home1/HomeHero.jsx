import logowhite from '../../public/images/logowhite.svg'
import Image from 'next/image'
import Navbar from '../shared/layout/Navbar'
import Link from 'next/link'

const HomeHero = () => {
  return (
    <div className='bg-hero bg-center bg-cover bg-no-repeat h-[120vh] w-full'>
      <Navbar/>
      <div 
        data-aos="zoom-in"
         className='flex text-white flex-col justify-center items-center h-screen sm:text-lg w-[90%] mx-[5%] sm:w-[80%] sm:mx-[10%] lg:w-[70%] lg:mx-[15%]'
        >
        <Image src={logowhite} alt="logo"/>
        <h1 className='text-4xl sm:6xl lg:text-7xl font-bold mt-8 lg:leading-[5rem] text-center'>
          Transforming ideas into inspiring experiences
        </h1>
        <p className='font-semibold text-center lg:w-[60%] lg:mx-[20%] my-10'>
          Your one-stop digital software solutions company. At Tech, we thrive on transforming 
          your ideas into cutting-edge digital realities.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 mt-4'>
          <Link 
            href="/getaquote" 
            className='bg-white text-black hover:text-white hover:bg-violet-700 rounded-full px-6 py-3 transition-all w-full sm:w-fit'
            >
            Start a Project
         </Link>
          <Link 
             href="/case-studies" 
             className='border border-white px-6 py-3 hover:text-violet-700 rounded-full transition-all w-full sm:w-fit'
             >
            Our Work
         </Link>
        </div>
     </div>
    </div>
  )
}

export default HomeHero
