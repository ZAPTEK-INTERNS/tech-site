import React from 'react'
import { PageBanner, TestimonialCardSection } from '../components/testimonials'
import Head from 'next/head'
import { Navbar } from '../components/links'

const testimonials = () => {
  return (
    <div>
        <Head> <title>Testimonials - Tech</title> </Head>

        <Navbar />
        
        <PageBanner 
            Title='Testimonials' 
            Text='Welcome to our Testimonials page, where we let our satisfied clients and customers speak for us.'
        />
        <TestimonialCardSection />
    </div>
  )
}

export default testimonials