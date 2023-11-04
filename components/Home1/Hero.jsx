import logo from '../../public/images/logo-white.svg'
import Image from 'next/image'


const Hero = () => {
  return (
    <div className='bg-hero bg-center bg-cover bg-no-repeat h-screen w-full relative top-0 left-0'>
      <div className='flex text-white flex-col justify-center items-center h-screen sm:text-lg w-[90%] mx-[5%] sm:w-[80%] sm:mx-[10%] lg:w-[70%] lg:mx-[15%]'>
        <Image src={logo} alt="logo"/>
        <h1 className='text-4xl sm:6xl lg:text-7xl font-bold mt-8 lg:leading-[5rem] text-center'>
          Transforming ideas into inspiring experiences
        </h1>
        <p className='font-semibold text-center lg:w-[60%] lg:mx-[20%] my-10'>
          Your one-stop digital software solutions company. At Tech, we thrive on transforming 
          your ideas into cutting-edge digital realities.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 mt-4'>
          <button className='bg-white text-black hover:text-white hover:bg-violet-700 rounded-full px-6 py-3 transition-all w-full sm:w-fit'>
            Start a Project
          </button>
          <button className='border border-white px-6 py-3 hover:text-violet-700 rounded-full transition-all w-full sm:w-fit'>
            Our Work
         </button>
        </div>
     </div>
    </div>
  )
}

export default Hero
