const WhyUs = () => {
  return (
    <div className="md:flex my-8">
      <div className="md:w-1/3 md:flex md:justify-end ">
        <p className="md:text-5xl text-3xl md:6xl  font-bold md:px-12">Why to work with us</p>{" "}
      </div>
      <div className="md:w-2/3 px-20">
        <div>
          <div className="flex ">
            <div className=" h-1.5 bg-black w-20 my-8"></div>
            <div className="flex text-7xl">
              {" "}
              <p> <span className="text-purple-900 ">We take care </span>{" "}
              about your business</p>
            </div>
          </div>
          <p className="font-medium text-md text-gray-400 my-4">
            At Tech, we understand that your business is more than just a
            venture; it's your vision, your passion, and your livelihood
          </p>
        </div>

        <div>
          <div className="flex">
          <div className=" h-1.5 bg-black w-20 my-8"></div>
            <div className="flex text-7xl">

            <p>
            <span className="text-purple-900">Experts</span> in various areas on
            <span className="text-purple-900">board</span>{" "}
            </p>

            </div>
          </div>
          <p className="font-medium text-md text-gray-400">
            At Tech our strength lies in the diverse expertise of our team
            members. We take pride in having a cadre of experts
          </p>
        </div>

        <div>
          <div className="flex">
          <div className=" h-1.5 bg-black w-20 my-8"></div>
            <div className="flex text-7xl">
            <p>
            Transparent <span className="text-purple-900"> communication</span>

            </p>

            </div>
          </div>
          <p className="font-medium text-md text-gray-400">
            {" "}
            We consider transparent communication to be the cornerstone of
            successful partnerships. We firmly believe that clear, open, and
            honest dialogue is essential for building trust{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
