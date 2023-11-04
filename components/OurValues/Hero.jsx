import Image from 'next/image'
import CS1 from '../../public/images/pricing3.webp'

const Hero = () => {
  return (
    <div className='mt-20 lg:pb-8 space-y-8 md:space-y-0 lg:flex  '>
      <div className='space-y-6 md:w-1/2  md:ml-16 '>
      <div className="flex justify-center md:flex-none md:justify-normal mx-4">
        <div className="text-violet-900 w-fit p-3 bg-violet-900/5 rounded-md font-medium">
          About Us
        </div>
      </div>
        <h1 className='font-bold text-5xl md:text-7xl text-center md:text-start text-[#1a0533]'>Our Values</h1>
        <h3 className='text-justify font-medium  md:pr-4 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros</h3>
      </div>
      <div className='lg:w-1/2 bg-violet-900  lg:bg-transparent  p-4 md:px-16  relative'>
        <Image height='auto' width='auto' src={CS1} alt='case study image' className='  w-full  lg:w-[70%] lg:h-[150%] lg:absolute lg:right-0 lg:-top-12 object-contain'/>
      </div>
    </div>
  )
}

export default Hero
