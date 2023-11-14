import React from "react";
import Image from 'next/image'
import p from '../../public/images/pricing2.webp'
import {p3, p4} from '../../public/links'

const More = () => {
  return (
    <>
      <div className="md:flex mx-4">
        <div className="md:w-1/2 flex justify-center md:p-16">
            <div>

          <p className="font-bold text-4xl py-4">We are more than just a remarkable company</p>
          <p className="font-medium text-gray-500">
            We are architects of innovation, trailblazers of technological
            advancement, and partners in your success. As a dynamic and
            forward-thinking organization, we are dedicated to reshaping
            industries and empowering businesses to navigate the digital age
            with confidence.
          </p>
            </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:p-16">
            <div className="sm:flex md:flex-col md:space-x-0">

          <div className="md:flex md:space-x-4 border border-white  md:border-b-slate-300">
            <p className="text-7xl font-bold py-8">12+</p>
            <p className="text-gray-400 font-medium md:mt-[10%]">Decades of experience in software development</p>
          </div>
          <div className="md:flex md:space-x-4">
            <p className="text-7xl font-bold py-8">300</p>
            <p className="text-gray-400 font-medium md:mt-[10%]">
              Amassed a portfolio of numerous successfully completed projects
            </p>
          </div>
            </div>
        </div>
      </div> 
      <div className="mx-4 flex justify-center mt-8 ">
        <Image src={p} width="auto" height="auto" className="rounded-lg object-contain w-full" />
      </div>

      <div className="font-bold text-4xl m-6">  Your experience in IT  consulting provides us 
          with a unique perspective that other consulting agencies may not have access
      </div>
      {/* <Image src={p} width={100} height={40} className="rounded-full " /> */}
    </>
  );
};

export default More;
