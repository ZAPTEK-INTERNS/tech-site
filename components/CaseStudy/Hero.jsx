import Image from 'next/image'
import CS1 from '../../public/images/case-study1.webp'

const Hero = ({title}) => {
  return (
    <div className='my-20 space-y-8 md:space-y-0 lg:flex md:space-x-12'>
      <div className='space-y-6 lg:w-1/2 md:py-12 justify-between'>
        <h1 className='font-bold text-5xl md:text-7xl text-center'>{title}</h1>
        <h3 className='font-medium text-[#1a0533] md:pr-4  text-center md:mx-16'>Explore the transformative journey as Tech collaboratively empowers clients to achieve their digital innovation goals.</h3>
      </div>
      <div className='lg:w-1/2 justify-center flex'>
        <Image height='auto' width='auto' src={CS1} alt='case study image' className='rounded-full w-80 h-80 '/>
      </div>
    </div>
  )
}

export default Hero
