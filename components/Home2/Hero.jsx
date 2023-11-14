import React from "react";
import Image from "next/image";
import Link from "next/link";
import Images from "../shared/components/Images";

const Hero = () => {
  return (
    <>
      <div className="md:flex md:mx-16 mx-4 md:py-20" >
        <div className="md:w-1/2">
          <div className="flex">
            Image
            <p className="text-7xl font-bold
            ">
              Unlock Your{" "}
              <span className="text-violet-700"> Digital Potential </span>{" "}
            </p>
          </div>
          <p className="mt-12 font-medium">
            Your one-stop digital software solutions company. At Tech, we thrive
            on transforming your ideas into cutting-edge digital realities.
          </p>
        </div>
        <div classNAme="md:w-1/2">
          <div className="flex flex-col sm:flex-row gap-4 md:mt-48 mt-8 md:pl-8">
            <Link
              href="/getaquote"
              className="border border-violet-700 hover:bg-white hover:text-black text-white bg-violet-700 rounded-full px-6 py-3 transition-all w-full sm:w-fit"
            >
              Start a Project
            </Link>
            <Link
              href="/case-studies"
              className="border border-violet-700 px-6 py-3 hover:bg-violet-700 hover:text-white rounded-full transition-all w-full sm:w-fit"
            >
              Our Work
            </Link>
          </div>
        </div>
      </div>
      <div>

      <Images />
      </div>
    </>
  );
};

export default Hero;
