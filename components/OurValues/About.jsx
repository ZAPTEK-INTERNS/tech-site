import Image from "next/image";

const About = () => {
  return (
    <>
      <div>
      <div className={`lg:w-1/2  lg:order-2  lg:ml-40`}>
          {/* <Image
            className="object-cover"
            src={card.image}
            alt={card.title}
            width="auto"
            height="auto"
          /> */}
        </div>

        <div
          className={`lg:w-1/2  lg:order-1
                `}
        >
            <p>About Company</p>
          <h2 className="text-7xl font-medium mb-4 ">Inception & Vision</h2>
          <h3 className=" font-medium mb-4 text-gray-400">Our journey began 2010 years ago when a group of visionary IT professionals came together with a shared dream – to bridge the gap between technology and business success. We recognized that the world of IT was constantly evolving, and businesses needed a partner who could not only keep pace with change but also harness its potential.</h3>
        </div>

       
      </div>

      <div>
      <div className={`lg:w-1/2  lg:order-2  lg:ml-40`}>
          {/* <Image
            className="object-cover"
            src={card.image}
            alt={card.title}
            width="auto"
            height="auto"
          /> */}
        </div>
        <div
          className={`lg:w-1/2  lg:order-1
                `}
        >
            <p>About Company</p>
          <h2 className="text-7xl font-medium mb-4 ">Building Expertise</h2>
          <h3 className=" font-medium mb-4 text-gray-400">In the early years, we invested heavily in building our expertise. Our team tirelessly honed their skills, staying on the cutting edge of emerging technologies, and mastering the intricacies of IT strategy, software development, infrastructure optimization, and more.</h3>
        </div>

     
      </div>
    </>
  );
};

export default About;
