import Image from 'next/image'
import CS1 from '../../public/images/pricing3.webp'

const Hero = () => {
  return (
    <div className='mt-20 lg:pb-8 space-y-8 md:space-y-0 lg:flex  '>
      <div className='space-y-6 md:w-1/2  md:ml-16 '>
      <div data-aos="fade-up" className="flex justify-center md:flex-none md:justify-normal mx-4">
        <div className="text-violet-900 w-fit p-3 bg-violet-900/5 rounded-md font-medium">
          About Us
        </div>
      </div>
        <h1 data-aos="fade-up" className='font-bold text-5xl md:text-7xl text-center md:text-start text-[#1a0533]'> Why Choose Us</h1>
        <h3 data-aos="fade-up" className='text-justify font-medium  md:pr-4 text-gray-500'>We provide a wide range of IT services, from strategic planning and cybersecurity to cloud computing and custom software development.</h3>
      </div>
      <div className='lg:w-1/2   lg:bg-transparent  p-4 md:px-16  relative'>
        <Image data-aos="fade-left" height='auto' width='auto' src={CS1} alt='case study image' className='  w-full  lg:w-[70%] lg:h-[150%] lg:absolute lg:right-0 lg:-top-12 object-contain rounded-lg'/>
      </div>
    </div>
  )
}

export default Hero
