import Image from 'next/image';
import aboutbg from '../../public/images/about-bg.svg'

const About = () => {
  return (
    <div   className="mt-8 overflow-hidden bg-white">
      <div data-aos="fade-up" className="flex justify-center md:flex-none md:justify-normal mx-4 lg:mx-16">
        <div className="text-violet-900 w-fit p-3 bg-violet-900/5 rounded-md font-medium">
          About Us
        </div>
      </div>

      <div data-aos="fade-up" className="md:flex md:justify-between mt-4 mx-4 lg:mx-16">
        <p className="lg:text-7xl text-5xl font-bold  text-center md:text-start">
          We help online <br />
          businesses grow.
          <br />
          <span className="text-violet-900">Together.</span>
        </p>
      </div>
      <div className=' w-[200%] -ml-[50%] md:w-full md:-ml-0'>
        <Image src={aboutbg} alt="ABOUT BG"  width="auto" height="auto"  className='object-cover h-40 ' />
      </div>
    </div>
  );
};

export default About;
