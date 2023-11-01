import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BannerImg from '../../public/images/pricing3.jpg'
import Logo1 from '../../public/images/logo1.svg'
import Logo2 from '../../public/images/logo2.svg'
import Logo3 from '../../public/images/logo3.svg'
import Logo4 from '../../public/images/logo4.svg'
import Logo5 from '../../public/images/logo5.svg'
import Logo6 from '../../public/images/logo6.svg'
import HeadingTag from './HeadingTag'

const Home4Banner = () => {
  return (
    <div>
    {/* Banner Section */}
    <section className='pt-16 md:pt-[100px] relative'>
      {/* Text Container */}
      <div className='px-4 md:px-[170px] mb-20 md:mb-44 space-y-5 '>
        <HeadingTag Title="Who we are" />
        <h2 className='text-5xl md:text-7xl font-bold text-[#180030] tracking-tighter'>Software Crafting for <br className="hidden md:block" /> Digital Success</h2>
        <div className="relative top-8">
          <Link href='/case-studies' className='bg-[#8000ff] py-3 px-6 rounded-3xl text-white text-lg border-2 border-[#8000ff] transition-colors ease-linear duration-100 hover:bg-white hover:text-black'>Explore Our Work</Link>
        </div>
      </div>
      {/* End of Text Container */}
      {/* img */}
      <div className='bottom-0 right-0 flex-row-reverse md:flex md:absolute'>
        <Image src={BannerImg} alt="" className='w-full md:w-[80%] h-[400px] md:h-full' />
      </div>
      {/* end of img */}
      {/* Logos */}
      <div className='px-4 md:px-[170px] flex flex-col items-center text-white md:flex-row bg-gradient-to-b from-[#8000ff] to-[rgb(128,0,255,0.8)] space-y-8 md:space-y-0 md:space-x-8 py-12 md:py-16'>
        <h3 className='text-3xl font-semibold'>Market leaders <br className="hidden md:block" /> use Tech to grow</h3>
        <div className="flex flex-row py-4 space-x-4 md:space-x-0 md:space-y-6 md:flex-col">
          <div className="flex flex-col space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
            <Image src={Logo1} alt='' className='w-3/4 invert' />
            <Image src={Logo2} alt='' className='w-3/4 invert' />
            <Image src={Logo3} alt='' className='w-3/4 invert' />
          </div>
          <div className="flex flex-col space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
            <Image src={Logo4} alt='' className='w-3/4 invert' />
            <Image src={Logo5} alt='' className='w-3/4 invert' />
            <Image src={Logo6} alt='' className='w-3/4 invert' />
          </div>
        </div>
      </div>
      {/* End of Logos */}
    </section>
    {/* End of Banner Section */}
    </div>
  )
}

export default Home4Banner