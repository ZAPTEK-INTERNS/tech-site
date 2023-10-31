import Image from 'next/image'
import CS1 from '../../public/images/case-study1.webp'

const Hero = () => {
  return (
    <div className='my-20 space-y-8 md:space-y-0 md:flex'>
      <div className='space-y-6 md:w-1/2 md:py-12'>
        <h1 className='font-bold text-5xl md:text-7xl'>Case Studies</h1>
        <h3 className='font-medium text-purple-900 md:pr-4'>Explore the transformative journey as Tech collaboratively empowers clients to achieve their digital innovation goals.</h3>
      </div>
      <div className='md:w-1/2'>
        <Image height='auto' width='auto' src={CS1} alt='case study image' className='rounded-full w-80 h-80'/>
      </div>
    </div>
  )
}

export default Hero
