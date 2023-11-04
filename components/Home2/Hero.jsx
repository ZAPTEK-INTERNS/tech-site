import Button from "../shared/components/Button";
import { onlyLogo } from "./../../public/links";
import Image from "next/image";

const Hero = () => {
  return (
    <section className=" mx-4 md:grid gap-7 xl:grid-cols-3 lg:gid-col-2 md:mx-8 lg:mx-16 xl:mx-28">
      <div className="col-span-2 flex flex-col gap-7 pr-4">
        <h1 className="text-5xl mt-12 lg:text-7xl xl:text-8xl font-inter font-bold  xl:mt-20 text-deep-purple leading-tight lg:tracking-[-0.3rem]">
          <span className="md:flex items-center">
            <Image
              src={onlyLogo}
              alt="tech logo"
              className="inline-block me-4 lg:me-2"
              width={92}
            />
            Unlock Your{" "}
          </span>
          <span className="inline lg:block  text-purple-700">
            Digital Potential
          </span>
        </h1>
        <p className="w-full md:w-[75%] text-lg font-semibold mb-8 tracking-tighter md:pr-36 opacity-95">
          Your one-stop digital software solutions company. At Tech, we thrive
          on transforming your ideas into cutting-edge digital realities.
        </p>
      </div>
      <div className="justify-self-end self-end flex gap-x-4 mb-8">
        <Button label="Start a Project" bgcolor="purple" />
        <Button label="Our Work" bgcolor="white" />
      </div>
    </section>
  );
};

export default Hero;
