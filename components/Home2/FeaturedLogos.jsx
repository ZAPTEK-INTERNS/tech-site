import Image from "next/image";
import { logo1, logo2, logo3, logo4, logo5, logo12 } from "../../public/links";

const FeaturedLogos = () => {
  return (
    <section className="mx-4 my-10 grid grid-cols-2 gap-y-9 gap-x-14 vsm:grid-cols-3 justify-items-stretch gap-5 slg:grid-cols-6 grayscale-[40%] opacity-60 vsm:gap-y-4 md:mx-8 lg:mx-16 xl:mx-28">
      <Image src={logo1} className="" />
      <Image src={logo2} className="" />
      <Image src={logo3} className="" />
      <Image src={logo4} className="" />
      <Image src={logo5} className="" />
      <Image src={logo12} className="" />
    </section>
  );
};

export default FeaturedLogos;
