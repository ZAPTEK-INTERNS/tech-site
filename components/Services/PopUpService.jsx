import { AiOutlineClose } from "react-icons/ai";

const PopUpService = ({ video, setVideo }) => {
  const handleVideo = () => {
    setVideo(false);
  };

  return (
    <>
      {video && (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-start justify-center bg-black/80">
          <div className="mx-16 my-[50px] flex h-screen w-full items-start justify-start gap-10">
            <iframe
              className="h-[30rem] w-full"
              src="https://www.youtube.com/embed/vvyPj5bTcgQ"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            <div onClick={handleVideo}>
              <AiOutlineClose
                size={25}
                className="cursor-pointer font-bold text-white"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpService;
