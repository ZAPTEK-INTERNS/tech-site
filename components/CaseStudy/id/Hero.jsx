import Image from "next/image";

const Hero = ({ data }) => {
  return (
    <>
      {data ? (
        <>
          <div className="md:flex md:space-x-16 mt-16 space-y-4 md:space-y-0">
            <div className="md:w-1/2 text-4xl md:text-6xl font-bold ">
              {data.title}
            </div>
            <div className="md:w-1/2  md:pl-20 ">
              <p className="text-sm  md:mt-20">{data.detail}</p>{" "}
            </div>
          </div>
          <Image
            src={data.image}
            width="auto"
            height="auto"
            alt={data.title}
            className="mt-8 w-full object-cover rounded-lg h-96 "
          />
        </>
      ) : (
        <div>No data available.</div>
      )}
    </>
  );
};

export default Hero;
