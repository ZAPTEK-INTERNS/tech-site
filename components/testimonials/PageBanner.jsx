import React from 'react'
import BannerBgImg from '../../public/images/shop-bg.png'
import Image from 'next/image'

const PageBanner = ({
    Title = "Title Here",
    Text = "Text Here"
}) => {
  return (
    <>
    {/* Testimonial Banner Section */}
    <section className=' relative w-full h-[55vh] bg-radial flex justify-center items-center'>
        <div className='flex flex-col items-center justify-center w-3/4 space-y-4 text-center text-white md:space-y-8' data-aos="fade-up">
            <h1 className='text-4xl font-bold md:font-black md:text-7xl '>{Title}</h1>
            <p className="text-center md:w-1/2 md:text-xl">{Text}</p>
        </div>
        <div className="absolute top-0 w-full">
          <Image src={BannerBgImg} />
        </div>
    </section>
    {/* End of Testimonial Banner Section */}
    </>
  )
}

export default PageBanner