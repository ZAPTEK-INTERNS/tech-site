import React from 'react'
import Hero from '../components/WhyChooseUs/Hero'
import Sponsors from '../components/WhyChooseUs/Sponsors'
import More from '../components/WhyChooseUs/More'
import Services from '../components/WhyChooseUs/Services'
import Work from '../components/WhyChooseUs/Work'
import { Build, Navbar } from '../components/links'

const whychooseus = () => {
  return (
    <><Navbar /><div className='w-[100%] overflow-hidden'>
      <Hero />
      <Sponsors />
      <More />
      <Services />
      <Work />
      <Build />
    </div></>
  )
}

export default whychooseus
