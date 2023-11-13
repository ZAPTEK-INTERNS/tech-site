import Image from "next/image";
import React from "react";
import { Home3Logo, featherdev, globalbank, lightbox, logo1, nietzche, spherrule } from "../../public/links";

const TechLeaders = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f0716] to-[#171717] h-[50vh] pt-8 opacity-100  translate-x-0 translate-y-0 scale-100 rotate-0 skew-x-0 skew-y-0 transform-gpu  flex flex-col lg:items-center lg:justify-between px-2 lg:px-[7rem] lg:flex-row">
      <h1 className="text-white lg:text-3xl  lg:font-bold lg:pr-16 pl-4 text-2xl font-bold ">
        Market leaders use <br className="hidden lg:block"/> Tech to
        <br className="block lg:hidden" /> grow
      </h1>
      <div className=" grid grid-cols-3 gap-4 pt-16 lg:pt-0 h-[20vh] ">
        <Image src={Home3Logo} className="" />
        <Image src={lightbox} />
        <Image src={featherdev} />
        <Image src={spherrule} />
        <Image src={globalbank} />
        <Image src={nietzche} />
      </div>
    </div>
  );
};

export default TechLeaders;
