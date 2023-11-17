import Image from 'next/image';
import React from 'react';
import { datawhite, globewhite, mobilewhite, padlockwhite } from '../../public/links';

const OurServices = () => {
  return (
    <>
      <div className=" mb-8 ml-[4.5rem] flex items-start lg:ml-[18.5rem]">
        <p
          data-aos="fade-up"
          className="w-fit rounded-md  bg-[#8000FF]/10 px-4 py-2 text-lg font-semibold text-violet-600/100"
        >
          Our Services
        </p>
      </div>
      <ol
        className="relative mx-8 ml-24 h-[190vh]  border-s-[1.7px] border-dashed border-slate-300  bg-white lg:ml-[20rem] lg:h-[110vw]"
        data-aos="fade-up"
      >
        <li className="mb-10  ms-6" data-aos="fade-up">
          <span className="absolute -start-12 flex h-16 w-14 items-center justify-center rounded-xl bg-[#8000FF] ring-8 ring-white">
            <Image src={globewhite} className="h-6 w-16  " />
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white"></h3>
          <h1 className="mb-4 ml-8 text-5xl font-bold lg:text-8xl">
            Custom Software Development
          </h1>
          <p className="mb-4 ml-8 w-11/12 text-lg font-semibold text-slate-500 lg:w-1/2 lg:text-base">
            Tailor-made software solutions designed to align seamlessly with
            your unique business needs and drive productivity to new heights.
          </p>
        </li>
        <li className="mb-10 ms-6 mt-24" data-aos="fade-up">
          <span className="absolute -start-12 flex h-16 w-14 items-center justify-center rounded-xl bg-[#8000FF] ring-8 ring-white">
            <Image src={datawhite} className="h-6 w-16  " />
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white"></h3>
          <h1 className="mb-4 ml-8 text-5xl font-bold  lg:text-8xl">
            Data Analytics and Insights
          </h1>
          <p className="mb-4 ml-8 w-11/12 text-lg font-semibold text-slate-500 lg:w-1/2 lg:text-base">
            Tailor-made software solutions designed to align seamlessly with
            your unique business needs and drive productivity to new heights.
          </p>
        </li>
        <li className="ms-6 mt-24" data-aos="fade-up">
          <span className="absolute -start-12 flex h-16 w-14 items-center justify-center rounded-xl bg-[#8000FF] ring-8 ring-white">
            <Image src={mobilewhite} className="h-6 w-16  " />
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white"></h3>
          <h1 className="mb-4 ml-8 text-5xl font-bold  lg:text-8xl">
            Mobile App Development
          </h1>
          <p className="mb-4 ml-8 w-11/12 text-lg font-semibold text-slate-500 lg:w-1/2 lg:text-base">
            Tailor-made software solutions designed to align seamlessly with
            your unique business needs and drive productivity to new heights.
          </p>
        </li>
        <li className="ms-6 mt-24" data-aos="fade-up">
          <span className="absolute -start-12 flex h-16 w-14 items-center justify-center rounded-xl bg-[#8000FF] ring-8 ring-white">
            <Image src={padlockwhite} className="h-6 w-16  " />
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white"></h3>
          <h1 className="mb-4 ml-8 text-5xl font-bold  lg:text-8xl">
            Cybersecurity Solutions
          </h1>
          <p className="mb-4 ml-8 w-11/12 text-lg font-semibold text-slate-500 lg:w-1/2 lg:text-base">
            Tailor-made software solutions designed to align seamlessly with
            your unique business needs and drive productivity to new heights.
          </p>
        </li>
        <button className="btn-primary mt-8 inline-flex w-48 items-center ml-14  justify-center gap-4 rounded-3xl py-3 text-xl font-semibold text-white hover:border-2 hover:border-[#1a0533] hover:bg-white hover:text-black">
          Learn More <span className="">●</span>
        </button>
      </ol>
    </>
  );
};

export default OurServices;
