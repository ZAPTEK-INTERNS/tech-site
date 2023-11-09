import React from "react";
import Image from "next/image";
import Link from "next/link";
import Images from "../shared/components/Images";

const Hero = () => {
  return (
    <>
      <div className="md:flex">
        <div className="md:w-1/2">
          <div className="flex">
            Image
            <p>
              Unlock Your{" "}
              <span className="text-violet-700"> Digital Potential </span>{" "}
            </p>
          </div>
          <p>
            Your one-stop digital software solutions company. At Tech, we thrive
            on transforming your ideas into cutting-edge digital realities.
          </p>
        </div>
        <div classNAme="md:w-1/2">
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/getaquote"
              className="bg-white text-black hover:text-white hover:bg-violet-700 rounded-full px-6 py-3 transition-all w-full sm:w-fit"
            >
              Start a Project
            </Link>
            <Link
              href="/case-studies"
              className="border border-white px-6 py-3 hover:text-violet-700 rounded-full transition-all w-full sm:w-fit"
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
