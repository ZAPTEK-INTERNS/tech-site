import React from "react";
import ProjectCard from './ProjectCard';

const Work = () => {
  return (
    <div className="md:flex mx-4 md:mx-16">
      <div className="md:w-1/2 md:my-28">
        <div
          data-aos="fade-up"
          className="md:flex justify-center md:flex-none md:justify-normal "
        >
          <div className="text-violet-900 w-fit p-3 bg-violet-900/5 rounded-md font-medium">
            Our Work
          </div>
        </div>

        <p
          data-aos="fade-up"
          className="md:text-7xl font-bold md:w-[50%] text-4xl"
        >
          Our latest projects
        </p>

        <button className="flex justify-between font-medium text-white bg-violet-900 rounded-full h-fit px-4 py-2 space-x-4 mt-12">
          <span>View More</span>
          <span className="bg-white w-2 h-2 rounded-full m-2"></span>
        </button>
      </div>
      <div>
       <ProjectCard/>
      </div>
    </div>
  );
};

export default Work;
