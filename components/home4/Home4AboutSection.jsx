import React from 'react'
import DotBtnLink from './DotBtnLink'

const Home4AboutSection = () => {
  return (
    <>
    {/* About Section */}
    <section  className='px-4 md:px-[170px] py-16 md:py-[100px] h-[78vh] md:h-[90vh] bg-hero-h4 bg-fixed bg-center bg-cover flex flex-col items-center justify-center space-y-8 md:space-y-14'>
      <h1 className='text-3xl font-bold text-left text-white md:text-6xl' data-aos="fade-up">
        We are committed to staying at the forefront of technological innovation, constantly exploring 
        emerging trends and incorporating the latest   advancements into our solutions.
      </h1>
      <div className='inline-block'>
        <DotBtnLink LinkName='Who we are' URLLink='/about-us' />
      </div>
    </section>
    {/* End of About Section */}
    </>
  )
}

export default Home4AboutSection