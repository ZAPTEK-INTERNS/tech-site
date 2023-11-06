import Image from "next/image";
import CS1 from "../../public/images/case-study1.webp";
import { BsPlayFill } from "react-icons/bs";
import { useState } from "react";
import PopUpService from "./PopUpService";

const ServiceVideo = ({ title }) => {
  const [video, setVideo] = useState(false);

  const handleVideoOpen = () => {
    setVideo(true);
  };

  return (
    <div className="my-20 space-y-8 md:space-y-0 lg:flex md:space-x-12">
      <div className="lg:w-1/2 justify-center flex relative">
        <Image
          height="auto"
          width="auto"
          src={CS1}
          alt="case study image"
          className="rounded-full w-80 lg:w-[40rem] h-80 "
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:border-violet-700 hover:border-4 rounded-full">
          <div
            className="cursor-pointer bg-violet-700 p-5 rounded-full   transition duration-300 hover:border-4"
            onClick={handleVideoOpen}
          >
            <BsPlayFill size={45} className="text-white" />
          </div>
        </div>
        <div>
          <PopUpService video={video} setVideo={setVideo} />
        </div>
      </div>
    </div>
  );
};

export default ServiceVideo;
