import React from "react";
import Image from 'next/image'
import p from '../../public/images/pricing2.webp'
import p1 from '../../public/images/pricing1.webp'

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
            <div className="flex space-x-12">

          <div>
            <p className="text-7xl font-bold py-8">12+</p>
            <p className="text-gray-400 font-medium">Decades of experience in software development</p>
          </div>
          <div>
            <p className="text-7xl font-bold py-8">300</p>
            <p className="text-gray-400 font-medium">
              Amassed a portfolio of numerous successfully completed projects
            </p>
          </div>
            </div>
        </div>
      </div> 
      <div className="mx-4 flex justify-center">
        <Image src={p} width="auto" height="auto" className="rounded-lg" />
      </div>
      <div className="flex justify-around p-20">

      <div className="text-center font-bold text-4xl flex"> Your experience in IT 
        consulting provides us  with a unique perspective that other consulting agencies may not have access</div>
      </div>
      {/* <Image src={p} width={100} height={40} className="rounded-full " /> */}
    </>
  );
};

export default More;
