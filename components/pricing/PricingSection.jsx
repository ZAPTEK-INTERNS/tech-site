import React, { useState } from 'react'
import { HeadingTag } from '../home4'
import PricingCard from './PricingCard'

const PricingSection = () => {
    const [subscription, setSubscription] = useState('annual');
  return (
    <>
        {/* Pricing Section */}
        <section className='pt-16 md:pt-[100px] mb-12'>
            <div className="w-full ">
                <div className='flex flex-col items-center justify-center space-y-8 px-4 md:px-[170px]'>
                    <HeadingTag Title={'Pricing Plans'} />
                    <h2 className='text-3xl md:text-5xl font-bold text-[#180030] tracking-tighter'>Choose your plan now</h2>
                    <p className='text-[#7987a1] md:w-1/2 text-center'>Monthly and annual pricing are two different billing options offered by many businesses and service providers, 
                        including software companies, subscription services, and more.
                    </p>
                </div>
                <div className='mt-8'>
                    <div class="flex items-center justify-center w-full mb-12 px-4 md:px-[170px]">
                        <label for="toggleB" class="flex items-center cursor-pointer">
                            <div class="mr-3 font-medium text-lg">Annual</div>
                            <div class="relative">
                                <input type="checkbox" id="toggleB" class="sr-only" onChange={() => setSubscription(subscription === 'annual' ? 'month' : 'annual')} />
                                <div class="block bg-[#180030] w-14 h-8 rounded-full"></div>
                                <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                            </div>
                            <div class="ml-3 font-medium text-lg">Monthly</div>
                        </label>
                    </div>
                    { subscription == "annual" &&
                        <div className='flex flex-col items-end justify-between mt-12 space-y-8 md:flex-row md:space-x-8 md:space-y-0  px-4 md:px-[150px]'>
                            <PricingCard 
                                Type='Basic' 
                                DurationSub='anually' 
                                Price={650} 
                                Text='Our Basic Plan provides you with the essential guidance and support needed.'
                                URLLink='/get-a-quote'
                                URLName='Get Started' 
                            />
                            <PricingCard 
                                Tag='Popular' 
                                Type="Advanced"
                                InvertCard={true}
                                DurationSub='anually' 
                                Price={860} 
                                Text='Plan offers a comprehensive suite of IT solutions tailored for growing businesses.'
                                URLLink='/get-a-quote'
                                URLName='Get Started'
                            />
                            <PricingCard 
                                Type='Premium' 
                                DurationSub='anually' 
                                Price={920} 
                                Text='Our Premium IT Plan is designed for organizations that demand IT services'
                                URLLink='/get-a-quote'
                                URLName='Get Started' 
                            />
                            </div>
                    }
                    { subscription == "month" &&
                        <div className='flex flex-col items-end justify-between mt-12 space-y-8 md:flex-row md:space-x-8 md:space-y-0  px-4 md:px-[150px]'>
                            <PricingCard 
                                Type='Basic' 
                                DurationSub='month' 
                                Price={50} 
                                Text='Our Basic Plan provides you with the essential guidance and support needed.'
                                URLLink='/get-a-quote'
                                URLName='Get Started' 
                            />
                            <PricingCard 
                                Tag='Popular' 
                                Type="Advanced"
                                InvertCard={true}
                                DurationSub='month' 
                                Price={160} 
                                Text='Plan offers a comprehensive suite of IT solutions tailored for growing businesses.'
                                URLLink='/get-a-quote'
                                URLName='Get Started'
                            />
                            <PricingCard 
                                Type='Premium' 
                                DurationSub='month' 
                                Price={120} 
                                Text='Our Premium IT Plan is designed for organizations that demand IT services'
                                URLLink='/get-a-quote'
                                URLName='Get Started' 
                            />
                        </div>
                    }
                </div>
            </div>
        </section>
        {/* End of Pricing Section */}
    </>
  )
}

export default PricingSection