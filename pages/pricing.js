import React from 'react'
import { Clients, Navbar } from '../components/links'
import { PageBanner } from '../components/testimonials'
import { PricingSection } from '../components/pricing'
import Head from 'next/head'
import { DotBtnLink, HeadingTag, TestimonialCard } from '../components/home4'
import { TDB1, TDB2, TDB3  } from '../components/home4/slider/testimonialsDB'

const pricing = () => {    
  return (
    <div>
        <Head> <title>Pricing - Tech</title> </Head>
        <Navbar />
        <PageBanner 
            Title='Our Pricing'
            Text='At Tech, we believe in transparent and competitive pricing to ensure our customers receive the best value for their  needs.'
        />

        <PricingSection />

        {/* Testimonial Section */}
        <section className='pt-16 md:pt-[100px] mb-12 px-4 md:px-[150px]'>
            {/* Title */}
            <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
                <HeadingTag Title='Testimonials' />
                <div className="flex flex-col items-center justify-center w-full space-y-6 md:items-end md:flex-row md:justify-between md:space-y-0">
                <h2 className='text-4xl md:text-7xl font-bold text-[#180030] tracking-tighter mt-4' data-aos="fade-up">Happy customers <br className="hidden md:block" /> say about us</h2>
                <div className='inline-block'>
                    <DotBtnLink URLLink='/testimonials' />
                </div>
                </div>
            </div>
            {/* End of Title */}
            {/* Testimonial Cards */}
            <div className='flex flex-col md:flex-row items-end justify-between space-y-12 md:space-y-12 md:space-x-10 pt-16 md:pt-[50px] px-4 mb-20'>
                <TestimonialCard name={TDB1.name} message={TDB1.message} cardWidth=' w-full' />  
                <TestimonialCard name={TDB2.name} message={TDB2.message} cardWidth=' w-full' />  
                <TestimonialCard name={TDB3.name} message={TDB3.message} cardWidth=' w-full' />  
            </div>
            {/* End of Testimonial Cards */}
        </section>
        {/* End of Testimonial Section */}

        <Clients />
    </div>
  )
}

export default pricing