import Image from "next/image";
import company2 from '../../public/images/company2.webp'
import company from '../../public/images/company.webp'

const About = () => {
  return (
    <div div className="md:mx-16 space-y-20">
      <div className="lg:flex">
      <div className={`lg:w-1/2  lg:order-1 flex justify-center `}>
          <Image
            className="object-cover"
            src={company}
            alt="company"
            width="auto"
            height="auto"
          />
        </div>

        <div
          className={`lg:w-1/2  lg:order-2
               flex  justify-center`}
        >
          <div className="lg:py-20 mx-4 lg:mx-0">

            <p className="text-violet-900 font-medium ">About Company</p>
          <h2 className="lg:text-7xl text-5xl font-medium mb-4 mx-4 ">Inception & Vision</h2>
          <h3 className=" font-medium mb-4 text-gray-400">Our journey began 2010 years ago when a group of visionary IT professionals came together with a shared dream – to bridge the gap between technology and business success. We recognized that the world of IT was constantly evolving, and businesses needed a partner who could not only keep pace with change but also harness its potential.</h3>
          </div>
        </div>

       
      </div>

      <div className="lg:flex md:space-x-8 mx-4">
      <div className={`lg:w-1/2  lg:order-2 flex justify-center `}>
        <div className="bg-violet-900 my-4 pb-4 relative lg:ml-8 rounded-md">
          <Image
            className="object-cover -ml-2 -mt-4 rounded-md"
            src={company2}
            alt="company2"
            width="auto"
            height="auto"
          />
        </div>
        </div>
        <div
          className={`lg:w-1/2  lg:order-1
                `}
        >
          <div className="lg:py-20">

            <p className="text-violet-900 font-medium mx-4 lg:mx-0">About Company</p>
          <h2 className="lg:text-7xl text-5xl font-medium mb-4 ">Building Expertise</h2>
          <h3 className=" font-medium mb-4 text-gray-400 lg:pr-4">In the early years, we invested heavily in building our expertise. Our team tirelessly honed their skills, staying on the cutting edge of emerging technologies, and mastering the intricacies of IT strategy, software development, infrastructure optimization, and more.</h3>

          </div>
        </div>

     
      </div>
    </div>
  );
};

export default About;
