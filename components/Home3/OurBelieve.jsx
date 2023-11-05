import React from "react";

const OurBelieve = () => {
  return (
    <div className="bg-[#1a0533] mb-8 bg-news lg:h-[100vh]  px-2 text-white h-[65vh] lg:justify-start  flex flex-col gap-4">
      <div className="lg:w-8/12 lg:pt-16 lg:pl-[4rem] ">
        <h1 className="pt-10 pb-4 lg:pb-8 text-3xl lg:text-6xl font-bold">
          Beyond providing top-notch digital solutions, we believe in empowering
          our clients with knowledge.
        </h1>
        <p className="text-lg lg:pb-2 font-semibold">
          We are architects of innovation, trailblazers of technological
          advancement, and partners in your success. As a dynamic and
          forward-thinking organization, we are dedicated to reshaping
          industries and empowering businesses to navigate the digital age with
          confidence.
        </p>
        <button className="btn-primary mt-8 w-48 text-white hover:text-black  hover:border-2 hover:border-[#1a0533] hover:bg-white font-semibold py-3 inline-flex text-xl items-center justify-center gap-4 rounded-3xl">
          Learn More <span className="">●</span>
        </button>
      </div>
    </div>
  );
};

export default OurBelieve;
