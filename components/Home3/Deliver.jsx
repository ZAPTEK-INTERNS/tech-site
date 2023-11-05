import { BsArrowDown } from "react-icons/bs";

const Deliver = () => {
  return (
    <div className="h-[80vh] bg-[#1a0533] pt-20 lg:px-[7rem] bg-news">
      <h1 className="text-[3rem] text-white font-bold">
        Deliver your brand with a <br /> meaningful narrative
      </h1>
      <div className="flex justify-between gap-4 pt-8 px-2">
        <div className="flex pt-6 text-white">
          <span>
            <BsArrowDown className=" text-3xl" />
          </span>
          <p className="font-semibold text-lg">
            Scroll down to
            <br /> see more
          </p>
        </div>
        <div>
          <p className="text-white text-lg font-semibold">
            Your one-stop digital software
            <br /> solutions company. At Tech, we <br />
            thrive on transforming your ideas
            <br /> into cutting-edge digital realities.
          </p>
          <button className="btn-primary rounded-3xl text-white font-semibold text-lg w-3/4 mt-8 py-3">
            Start a Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deliver;
