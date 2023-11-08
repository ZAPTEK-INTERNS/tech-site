import React from "react";
import ServiceVideo from "./ServiceVideo";

const Services3 = () => {
  return (
    <div className="bg-news1 flex flex-col pt-[5rem] items-center h-[100vh] lg:h-[60vw]">
      <h1 className="font-bold self-start pl-[7rem]  pb-4 text-5xl">
        Services
      </h1>
      <p className="text-lg font-semibold text-justify w-2/3">
        We believe in a collaborative approach, working closely with our clients
        to understand their goals and target audience
      </p>
      <div>
        <ServiceVideo />
      </div>
    </div>
  );
};

export default Services3;
