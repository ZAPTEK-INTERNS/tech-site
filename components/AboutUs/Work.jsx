import CardWithArray from "./CardWithArray";

const Work = () => {
  return (
    <div className="py-8 bg-white px-4 lg:px-16">
      <div data-aos="fade-up" className="flex justify-center md:flex-none md:justify-normal ">
        <div className="text-violet-900 w-fit p-3 bg-violet-900/5 rounded-md font-medium">
          Our Work
        </div>
      </div>
      <div className="md:flex md:justify-between mx-4">
        <p  data-aos="fade-up" className="text-7xl font-bold md:w-[50%] text-center md:text-start">
          Our latest projects
        </p>
        <div className="flex justify-center md">
          <button className="flex justify-between font-medium text-white bg-violet-900 rounded-full h-fit px-4 py-2 space-x-4 mt-12">
            <span>View More</span>
            <span className="bg-white w-2 h-2 rounded-full m-2"></span>
          </button>
        </div>
      </div>

      <div className="md:grid md:grid-flow-row-dense md:grid-cols-2  md:gap-6 mx-4 ">
        <CardWithArray />
      </div>
    </div>
  );
};

export default Work;
