import React from "react";
import ServiceVideo from "./ServiceVideo";

const Services3 = () => {
  return (
    <div className="bg-news1 lg:justify-between lg:gap-24 lg:flex-row flex flex-col pt-[5rem] lg:pt-0 items-center h-[120vh] lg:h-[60vw]">
      <div>
        <h1 className="font-bold self-start pl-[7rem]  pb-4 text-5xl">
          Services
        </h1>
        <p className="text-lg font-semibold  pl-28 text-justify w-10/12">
          We believe in a collaborative approach, working closely with our
          clients to understand their goals and target audience
        </p>
      </div>
      <div>
        <ServiceVideo />
      </div>
    </div>
  );
};

export default Services3;
