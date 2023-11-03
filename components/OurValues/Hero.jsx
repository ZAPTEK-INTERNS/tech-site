import Image from 'next/image'
import CS1 from '../../public/images/case-study1.webp'

const Hero = () => {
  return (
    <div className='mt-20 space-y-8 md:space-y-0 lg:flex  '>
      <div className='space-y-6 md:w-1/2  md:ml-16 '>
      <div className="flex justify-center md:flex-none md:justify-normal mx-4">
        <div className="text-violet-900 w-fit p-3 bg-violet-900/5 rounded-md font-medium">
          About Us
        </div>
      </div>
        <h1 className='font-bold text-5xl md:text-7xl text-center md:text-start'>Our Values</h1>
        <h3 className='text-justify font-medium text-[#1a0533] md:pr-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros</h3>
      </div>
      <div className='lg:w-1/2 bg-violet-900  lg:bg-transparent  p-4 md:px-16 relative'>
        <Image height='auto' width='auto' src={CS1} alt='case study image' className=' lg:h-[100%]  lg:absolute lg:right-0 lg'/>
      </div>
    </div>
  )
}

export default Hero
