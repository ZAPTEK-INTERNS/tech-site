import { FiArrowDownRight } from "react-icons/fi";
import Link from "next/link";

const Git = () => {
  return (
    <section className="bg-about bg-fixed bg-cover bg-center bg-no-repeat w-full h-fit pb-6 md:h-screen sm:h-[80vh] lg:h-[100vh]">
      <div className="flex justify-between flex-col md:flex-row text-white mx-[5%] w-[90%] lg:w-[86%] lg:mx-[7%]">
        <div className="mt-[70px] sm:mt-[120px]">
          <h1
            className="text-5xl sm:text-6xl lg:text-[6rem] font-bold"
            data-aos="fade-up"
          >
            Let's build something different
          </h1>
          <p className="my-6 sm:font-semibold text-lg" data-aos="fade-up">
            Take the first step toards a brighter future and supercharge <br />{" "}
            your business with cutting-edge technologies, expert guidance,{" "}
            <br /> and unparalleled support.
          </p>
        </div>
        <div className="h-[60vh] sm:h-[30vh] md:h-[80vh] grid grid-cols-2 w-full md:w-[26rem]">
          <div
            className="bg-purple-100 col-span-2 sm:col-span-1 md:col-span-2"
            data-aos="fade-down "
            aos-duration="1000"
          ></div>
          <div
            className="bg-purple-200 col-span-2 sm:col-span-1 md:col-span-2"
            data-aos="fade-down"
            aos-duration="1000"
          ></div>
          <div
            className="bg-purple-400 col-span-2 sm:col-span-1 md:col-span-2"
            data-aos="fade-down"
            aos-duration="1000"
          ></div>
          <div
            className="bg-purple-500 col-span-2 sm:col-span-1 md:col-span-2"
            data-aos="fade-down"
            aos-duration="1000"
          ></div>
          <div
            className="bg-purple-600 col-span-2 sm:col-span-1 md:col-span-2"
            data-aos="fade-down"
            aos-duration="1000"
          ></div>
          <Link
            href="/getaquote"
            data-aos="fade-down"
            aos-duration="1000"
            className="px-4 flex justify-between gap-4 items-center group bg-[#8403fc] hover:bg-white transition-all text-white hover:text-black col-span-2 sm:col-span-1 md:col-span-2"
          >
            <p className="font-semibold text-lg">Get in Touch</p>
            <FiArrowDownRight
              size={28}
              className="transition-all group-hover:-rotate-45"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Git;
