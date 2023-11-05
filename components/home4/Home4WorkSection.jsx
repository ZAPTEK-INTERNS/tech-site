import React from 'react'
import HeadingTag from './HeadingTag'
import DotBtnLink from './DotBtnLink'
import WorkCard from './WorkCard'
import WorkImg1 from '../../public/images/xyz.jpg';
import WorkImg2 from '../../public/images/e-commerce.jpg';
import WorkImg3 from '../../public/images/marketing.jpg';
import WorkImg4 from '../../public/images/supply-chain.jpg';

const Home4WorkSection = () => {
  return (
    <>
    {/* Work Section */}
    <section className='md:px-[170px] py-16 md:py-[100px]'>
      {/* Title */}
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
        <HeadingTag Title='Our Work' />
        <div className="flex flex-col items-center justify-center w-full space-y-6 md:items-end md:flex-row md:justify-between md:space-y-0">
          <h2 className='text-4xl md:text-7xl font-bold text-[#180030] tracking-tighter mt-4' data-aos="fade-up">Our latest <br className="hidden md:block" /> projects</h2>
          <div className='inline-block'>
            <DotBtnLink URLLink='case-studies' />
          </div>
        </div>
      </div>
      {/* End of Title */}
      
      {/* Cards */}
      <div className="flex flex-col mt-12">
        <div className="flex flex-col justify-between md:flex-row md:space-x-12">
          <WorkCard
            Img={WorkImg1}
            Title='XYZ - Streamlining Operations'
            Text="Discover how our IT consulting agency revolutionized XYZ Corporation's operations with a custom dashboard, providing real-time insights, reducing downtime."
            URLLink1='/case-studies-categories/development'
            LinkName1='Development'
            URLLink2='/case-studies-categories/design'
            LinkName2='Design'
          />
          <WorkCard
            Img={WorkImg2}
            Title='Enhancing Market Reach with E-commerce Integration'
            Text="Our IT consulting firm successfully enabled ABC Retailers to embrace e-commerce, significantly enhancing their market presence and revenue."
            URLLink1='/case-studies-categories/it-consultancy'
            LinkName1='IT Consultancy'
            URLLink2='/case-studies-categories/development'
            LinkName2='Development'
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <WorkCard
            Img={WorkImg3}
            Title='Onson - marketing agency website'
            Text="Our team of experienced professionals is dedicated to providing exceptional web design, development, and marketing services."
            URLLink1='/case-studies-categories/design'
            LinkName1='Design'
            URLLink2='/case-studies-categories/it-consultancy'
            LinkName2='IT Consultancy'
          />
          <WorkCard
            Img={WorkImg4}
            Title='Modernizing Supply Chain Management'
            Text="Our development service firm to achieve their goal of modernizing their supply chain management processes."
            URLLink1='/case-studies-categories/it-consultancy'
            LinkName1='IT Consultancy'
            URLLink2='/case-studies-categories/design'
            LinkName2='Design'
          />
        </div>
      </div>
      {/* End of Cards */}
    </section>
    {/* End of Work Section */}
    </>
  )
}

export default Home4WorkSection