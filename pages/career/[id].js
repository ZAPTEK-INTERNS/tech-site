import { joblist }  from "../../components/Career/index"
import { useRouter } from 'next/router';
import {FaCalendarAlt} from 'react-icons/fa'
import {BiSolidTimeFive} from 'react-icons/bi'
import {MdLocationOn} from 'react-icons/md'
import Link from "next/link";
import {Navbar, Loader} from '../../components/links'
import Head from "next/head";

const CareerDetail = () => {
  const router = useRouter();
  const jobId = router.query.id;
  const newId = parseInt(jobId) 

const job = joblist.find((job) => job.id === newId);

if (!job) {
  return <Loader/>;
}

  return (
    <section>
      <Head> <title> Career - Tech </title> </Head>
      <Navbar/>
      <div className="bg-[#1a0533] h-[60vh] text-center flex items-center justify-center 'w-full overflow-hidden'">
        <h1 className="text-white text-5xl sm:ext-6xl md:text-7xl font-bold" data-aos="fade-up">
          {job.title}
        </h1> 
       </div>

      <section className="w-[86%] ml-[7%] grid grid-cols-6 gap-6 mb-[100px] mt-[50px] ">
       <div className="col-span-6 md:col-span-4">
        <h1 className="text-3xl sm:ext-4xl md:text-5xl font-bold">Job Description</h1>
         <p className="text-lg font-semibold text-[#1a0533]/60 mt-3" >
           {job.description}
          </p>

         <h1 className="text-3xl sm:ext-4xl md:text-5xl font-bold my-6">Key Responsibilities:</h1>
          <ul className="list-disc">
           {job.responsibilities.map((responsibility) => (
             <li className="font-semibold text-lg text-[#1a0533]/60 my-2">{responsibility}</li>
            ))}
          </ul>

          <h1 className="text-3xl sm:ext-4xl md:text-5xl font-bold my-6">Requirements:</h1>
          <ul className="list-disc">
           {job.requirements.map((requirement) => (
             <li className="font-semibold text-lg text-[#1a0533]/60 my-2">{requirement}</li>
            ))}
          </ul>

          <h1 className="text-3xl sm:ext-4xl md:text-5xl font-bold my-6">What We Offer:</h1>
          <ul className="list-disc">
           {job.offer.map((offe) => (
             <li className="font-semibold text-lg text-[#1a0533]/60 my-2">{offe}</li>
            ))}
          </ul>
          <p className="text-lg font-semibold text-[#1a0533]/60 mt-3">{job.comment}</p>
        </div>
     
        <div className="col-span-6 md:col-span-2 bg-violet-300/10 w-full h-fit px-6 py-8 border border-gray-200 rounded-md sticky top-8">
          <div className="flex gap-4 items-center">
            <FaCalendarAlt size={20} className="text-violet-900"/>
            <p className="text-lg font-semibold text-gray-500">{job.jobtype}</p>
          </div>
          <div className="flex gap-4 my-2 items-center">
           <BiSolidTimeFive size={22} className="text-violet-900"/>
           <p className="text-lg font-semibold text-gray-500">{job.time}</p>
          </div>
          <div className="flex gap-4 mb-6 items-center">
           <MdLocationOn size={24} className="text-violet-900"/>
           <p className="text-lg font-semibold text-gray-500">{job.location}</p>
          </div>
          <Link href="/"
           className="bg-violet-900 text-white border p-3 border-violet-900 hover:text-black hover:bg-white rounded-3xl transition-all duration-500 font-semibold w-full">
            Apply Now
          </Link>
        </div>
      </section>

    </section>
  )
}

export default CareerDetail




