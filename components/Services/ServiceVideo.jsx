import { vpole } from "../../public/links";
import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";
import { useState } from "react";
import PopUpService from './PopUpService'

const ServiceVideo = () => {
  const [video, setVideo] = useState(false);

  const handleVideoOpen = () => {
    setVideo(true);
  };

  return (
    <section className="mx-[3%] w-[94%] lg:w-[86%] lg:mx-[7%] mt-[100px] bg-about bg-center bg-cover bg-no-repeat h-[70vh] text-white">
      <div className="pt-20 sm:pt-16 md:pt-10 ml-4 sm:ml-20 flex flex-col justify-start items-start sm:justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Improve your
        </h1>
        <Image src={vpole} alt="ploe" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  sm:ml-16">
          business with the
        </h1>
        <div className="sm:ml-32 flex flex-col md:flex-row items-center gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            right solutions
          </h1>
          <div
            className="cursor-pointer bg-violet-700 p-5 rounded-full border-2 border-green-700 relative"
            onClick={handleVideoOpen}
          >
            <BsPlayFill size={45} className="" />
          </div>
          <div>
            <PopUpService video={video} setVideo={setVideo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceVideo;
