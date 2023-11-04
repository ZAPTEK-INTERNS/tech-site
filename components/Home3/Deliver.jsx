import { BsArrowDown } from "react-icons/bs";

const Deliver = () => {
  return (
    <div className="h-[70vh] bg-[#1a0533] pt-20 bg-news">
      <h1 className="text-[3rem] text-white font-bold">
        Deliver your brand with a <br /> meaningful narrative
      </h1>
      <div className="flex justify-between gap-4 px-2">
        <div className="flex text-white">
          <span>
            <BsArrowDown className=" text-3xl" />
          </span>
          <p>
            Scroll down to
            <br /> see more
          </p>
        </div>
        <div>
          <p className="text-white">
            Your one-stop digital software<br/> solutions company. At Tech, we <br/>thrive
            on transforming your ideas<br/> into cutting-edge digital realities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deliver;
