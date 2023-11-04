import React from 'react'
import ServicesCard from './ServicesCard'
import { IoMdLock } from 'react-icons/io'
import DotBtnLink from './DotBtnLink'
import Folder from './Folder'
import HeadingTag from './HeadingTag'

const Home4HelpSection = () => {
  return (
    <>
    {/* Help Section */}
    <section className='px-4 md:px-[170px] py-16 md:py-[100px]'>
      <div className='flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-16'>
        {/* Title */}
        <div className='space-y-8'>
          <h3 className='text-2xl font-bold md:text-3xl'>Let's see how we <br className="hidden md:block" /> can help</h3>
          <DotBtnLink URLLink='services' LinkName='View More' />
        </div>
        {/* End of Title */}
        {/* Folders */}
        <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-8">
          <Folder 
            Title='Cybersecurity Solutions' 
            TitleLink='/services/cybersecurity-solutions'
            BgTransparent={false} 
            Icon={<IoMdLock color='white' size={25} />} 
            Text='Safeguarding your invaluable digital assets and fortifying your online against the relentless and ever-evolving global landscape of cyber threats.' 
          />
          <Folder 
            Title='Data Analytics And Insights' 
            TitleLink='/services/data-analytics-and-insights'
            BgTransparent={true} 
            Icon={<IoMdLock color='white' size={25} />} 
            Text='Unlocking the power of data to make informed decisions, identify trends, and gain a competitive edge in your industry.' 
          />
          <Folder 
            Title='Mobile App Development' 
            TitleLink='/services/mobile-app-development'
            BgTransparent={true} 
            Icon={<IoMdLock color='white' size={25} />} 
            Text='Creating captivating and user-friendly mobile applications that engage your audience and enhance your brand presence is a crucial aspect of business.' 
          />
        </div>
        {/* End of Folders */}
      </div>
      <div className='pt-10 md:pt-32'>
        {/* Title */}
        <center>
          <HeadingTag Title="We offer a wide variety of IT services" />
        </center>
        {/* End of Title */}
        {/* Cards */}
        <div className="flex flex-col mt-12 space-y-12">
          <div className="flex flex-col justify-between space-y-12 md:flex-row md:space-y-0 md:space-x-12">
            <ServicesCard 
              Title='Web Development' 
              TitleLink='/services/web-development' 
              Text='Encompasses building and maintaining websites, including front-end (user interface) and back-end (server-side) development.' 
            />
            <ServicesCard 
              Title='Website Maintainance' 
              TitleLink='/services/web-maintainance' 
              Text='Involves the ongoing management and updates required to keep a website functioning smoothly.' 
            />
          </div>
          <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-12">
            <ServicesCard 
              Title='IT Consultancy' 
              TitleLink='/services/it-consultant' 
              Text='Provide expert guidance and strategic advice to organizations seeking to optimize their technology infrastructure' 
            />
            <ServicesCard 
              Title='Q&A Testing' 
              TitleLink='/services/q-a-testing' 
              Text='Involves a systematic process of evaluating software applications or systems to identify and fix issues.' 
            />
          </div>
          <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-12">
            <ServicesCard 
              Title='Account & Security' 
              TitleLink='/services/account-security' 
              Text='Focus on safeguarding digital assets, sensitive information, and user accounts from unauthorized access and cyber threats.' 
            />
            <ServicesCard
              Title='Digital Consulting' 
              TitleLink='/services/digital-consulting'
              Text='Unleashing the full potential of your business through expert guidance and strategic implementation of cutting-edge technologies.' 
            />
          </div>
        </div>
        {/* End of Cards */}
      </div>
    </section>
    {/* End of Help Section */}
    </>
  )
}

export default Home4HelpSection