import Image from "next/image";
import company from '../../public/images/company.webp'
const Excellence = () => {
  return (
    <>

        <div  className="lg:flex py-16 font-serif bg-white px-16">
          <div
            className={`lg:w-1/2  `}
          >
            <Image
              className="object-cover"
              src={company}
              alt="company"
              width="auto"
              height="auto"
            />
          </div>

          <div
            className={`lg:w-1/2 lg:my-28`}
          >
            <h2 className="text-sm text-purple-900 font-bold py-4">When you choose Tech, you're choosing</h2>
            <p className="lg:text-7xl text-4xl font-medium mb-4 ">
            Excellence, customization,  transparency.
            </p>
            <h3 className=" font-medium mb-4 text-gray-400">Our dedicated team of experts will transform your ideas into cutting-edge digital realities, uniquely crafted to suit your needs. With us as your partner, you can rest assured that your vision will be brought to life with precision and care. Experience the difference of working with Tech today.</h3>
          </div>
        </div>
    
    </>
  );
};

export default Excellence;
